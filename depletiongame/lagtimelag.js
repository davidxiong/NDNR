"use strict";
var canvasHG, stageHG;

function drawTimeLagOff() {
    clearTimeLag();

    lsgame.TimeLag.tlContainer = new createjs.Container();

    // TL_OX: 60, TL_OXR: 380, TL_OY: 10, TL_OYB: 180,
    var xL = lsgame.TimeLag.TL_OX;
    var xR = lsgame.TimeLag.TL_OXR + 20;
    var yT = lsgame.TimeLag.TL_OY;
    var yB = lsgame.TimeLag.TL_OYB;
    // draw legends;
    var leg = new createjs.Shape();
    leg.graphics.ss(2).s(lsgame.COLORS.DARK_RED).mt(xR, yT + 20).lt(xR + 50, yT + 20);
    leg.graphics.ss(2).s(lsgame.COLORS.LIGHT_GREEN).mt(xR, yT + 50).lt(xR + 50, yT + 50);
    leg.cache(xR, yT + 18, 50, 40);
    lsgame.TimeLag.tlContainer.addChild(leg);

    lsgame.TimeLag.tlShape = new createjs.Shape();
    // draw axes;
    lsgame.TimeLag.tlShape.graphics.ss(2).s(lsgame.COLORS.LIGHT_WHITE).mt(xL, yT).lt(xL, yB).lt(xR, yB);
    // draw arrow heads of axes;
    lsgame.TimeLag.tlShape.graphics.ss(1).f(lsgame.COLORS.LIGHT_WHITE).mt(xL, yT).lt(xL - 4, yT + 8).lt(xL + 4, yT + 8).lt(xL, yT);
    lsgame.TimeLag.tlShape.graphics.mt(xR, yB).lt(xR - 8, yB - 4).lt(xR - 8, yB + 4).lt(xR, yB);
    lsgame.TimeLag.tlShape.graphics.f(null);
    lsgame.TimeLag.tlShape.cache(xL-5, yT-1, xR-xL+20, yB-yT+6);
    lsgame.TimeLag.tlContainer.addChild(lsgame.TimeLag.tlShape);

    stageHG.addChild(lsgame.TimeLag.tlContainer);
}

function clearTimeLag() {
    if (lsgame.TimeLag.tlContainer != null) {
        stageHG.removeChild(lsgame.TimeLag.tlContainer);
        lsgame.TimeLag.tlContainer = null;
        lsgame.TimeLag.tlShape = null;
        lsgame.TimeLag.tlPrevPoint = 0;
    }
    if (lsgame.TimeLag.tlCompContainer != null) {
        stageHG.removeChild(lsgame.TimeLag.tlCompContainer);
    }
    // reset Compare button;
    lsgame.resetCompareBtn();
}

function initLagData() {
    // Near time lag curve;
    lsgame.TimeLag.lagArrN = [];
    var i;
    var xP;
    var yP;
    for (i = 0; i <= 47; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        yP = lsgame.TimeLag.TL_OYB - Math.pow(1.1, i/2);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
    }
    for (i = 48; i <= 100; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        // 152 = (2*100 + 2*48)/2 + 4 (shift pixels);
        yP = lsgame.TimeLag.TL_OYB - 73 - 64 * Math.sin((i * 2 - 152) * Math.PI / 124);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
    }
    var j = lsgame.TimeLag.TL_NX_POINTS;
    // reached the equilibrium point at time 127;
    for (i = 101; i <= 127; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        yP = lsgame.TimeLag.TL_OYB - 151 + Math.pow(1.1, (j-101)/2);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
        j--;
    }
    for (i = 128; i <= lsgame.TimeLag.TL_NX_POINTS; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
        j--;
    }
    // Far time lag curve;
    lsgame.TimeLag.lagArrF = [];
    var base = lsgame.TimeLag.TL_NX_POINTS;
    var k;
    for (i = base + 1; i <= base + 71; i++) {
        k = i - base;
        xP = lsgame.TimeLag.TL_OX + k * 2;
        yP = lsgame.TimeLag.TL_OYB - Math.pow(1.11, k/3);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrF.push(pos);
    }
    for (i = base + 72; i <= base + 134; i++) {
        k = i - base;
        xP = lsgame.TimeLag.TL_OX + k * 2;
        // 196 = (2*124 + 2*72)/2;
        yP = lsgame.TimeLag.TL_OYB - 60 - 56 * Math.sin((k * 2 - 196) * Math.PI / 160);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrF.push(pos);
    }
    j = lsgame.TimeLag.TL_FX_POINTS;
    for (i = base + 135; i <= lsgame.TimeLag.TL_FX_POINTS + 1; i++) {
        k = i - base;
        xP = lsgame.TimeLag.TL_OX + k * 2;
        // 122, 1.16 - try and error;
        yP = lsgame.TimeLag.TL_OYB - 122 + Math.pow(1.16, (j-base-135)/2);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrF.push(pos);
        j--;
    }

    // draw compare pictures;
    lsgame.TimeLag.tlCompContainer = new createjs.Container();
    var compare = new createjs.Shape();
    
    // draw the curve;
    // TL_OX: 60, TL_OXR: 380, TL_OY: 10, TL_OYB: 180,
    var xL = lsgame.TimeLag.TL_OX;
    var xR = lsgame.TimeLag.TL_OXR + 20;
    var yT = lsgame.TimeLag.TL_OY;
    var yB = lsgame.TimeLag.TL_OYB;
    compare.graphics.ss(2).s(lsgame.COLORS.DARK_RED);
    for (i = 0; i < lsgame.TimeLag.TL_NX_POINTS; i++) {
        compare.graphics.mt(lsgame.TimeLag.lagArrN[i].x, lsgame.TimeLag.lagArrN[i].y);
        compare.graphics.lt(lsgame.TimeLag.lagArrN[i+1].x, lsgame.TimeLag.lagArrN[i+1].y);
    }
    var baseF = lsgame.TimeLag.TL_NX_POINTS;
    compare.graphics.ss(2).s(lsgame.COLORS.LIGHT_GREEN);
    for (i = baseF; i < lsgame.TimeLag.TL_FX_POINTS; i++) {
        k = i - baseF;
        compare.graphics.mt(lsgame.TimeLag.lagArrF[k].x, lsgame.TimeLag.lagArrF[k].y);
        compare.graphics.lt(lsgame.TimeLag.lagArrF[k+1].x, lsgame.TimeLag.lagArrF[k+1].y);
    }
    compare.cache(xL-5, yT-1, xR-xL+20, yB-yT+6);

    lsgame.TimeLag.tlCompContainer.addChild(compare);
}

function drawTimeLag(point) {
    // draw the curve;
    var baseF = lsgame.TimeLag.TL_NX_POINTS;
    var k;
    if (point < baseF) {
        lsgame.TimeLag.tlShape.graphics.ss(2).s(lsgame.COLORS.DARK_RED);
    }
    else {
        lsgame.TimeLag.tlShape.graphics.ss(2).s(lsgame.COLORS.LIGHT_GREEN);
    }
    for (var i = lsgame.TimeLag.tlPrevPoint; i <= point; i++) {
        if (i < baseF) {
            lsgame.TimeLag.tlShape.graphics.mt(lsgame.TimeLag.lagArrN[i].x, lsgame.TimeLag.lagArrN[i].y);
            lsgame.TimeLag.tlShape.graphics.lt(lsgame.TimeLag.lagArrN[i+1].x, lsgame.TimeLag.lagArrN[i+1].y);
        }
        else {
            k = i - baseF;
            lsgame.TimeLag.tlShape.graphics.mt(lsgame.TimeLag.lagArrF[k].x, lsgame.TimeLag.lagArrF[k].y);
            lsgame.TimeLag.tlShape.graphics.lt(lsgame.TimeLag.lagArrF[k+1].x, lsgame.TimeLag.lagArrF[k+1].y);
        }
    }
    lsgame.TimeLag.tlPrevPoint = point;
    lsgame.TimeLag.tlShape.updateCache();
}

function drawDottedLineN() {
    var xL = lsgame.TimeLag.TL_OX;
    var xR = lsgame.TimeLag.TL_OX + 127 * 2;
    var yT = 33;
    var yB = lsgame.TimeLag.TL_OYB;
    lsgame.TimeLag.tlShape.graphics.ss(1).s(lsgame.COLORS.LIGHT_WHITE).sd([4,4],0).mt(xL,yT).lt(xR,yT).lt(xR,yB);
    lsgame.TimeLag.tlShape.updateCache();
}

function drawDottedLineF() {
    var xL = lsgame.TimeLag.TL_OX;
    var xR = lsgame.TimeLag.TL_OXR;
    var yT = 58;
    var yB = lsgame.TimeLag.TL_OYB;
    lsgame.TimeLag.tlShape.graphics.ss(1).s(lsgame.COLORS.LIGHT_WHITE).sd([4,4],0).mt(xL,yT).lt(xR,yT).lt(xR,yB);
    lsgame.TimeLag.tlShape.updateCache();
}
