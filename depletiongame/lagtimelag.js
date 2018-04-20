"use strict";
var canvasHG, stageHG;

function drawTimeLagOff() {
    clearTimeLag();
    
    lsgame.TimeLag.tlContainer = new createjs.Container();
    lsgame.TimeLag.tlShape = new createjs.Shape();
    
    // draw the curve;
    //hydro.graphics.ss(2).s(lsgame.COLORS.DARK_RED);
    // X_MIN: 50, Y_MAX: 180, 
    // X_L: 50, X_R: 370, Y_T: 10, Y_B: 180,
    var xL = lsgame.CONSTS.X_L;
    var xR = lsgame.CONSTS.X_R + 20;
    var yT = lsgame.CONSTS.Y_T;
    var yB = lsgame.CONSTS.Y_B;
    //hydro.graphics.mt(xL, yB);
    //hydro.graphics.quadraticCurveTo(xL + 150, yB, xL + 150, yB - 85);
    //hydro.graphics.quadraticCurveTo(xL + 150, yT + 10, xR, yT + 10);
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

function drawTimeLagNear() {
    drawTimeLagOff();

    var hydro = new createjs.Shape();
    // draw the green curve;
    hydro.graphics.ss(2).s(lsgame.COLORS.LIGHT_GREEN);
    lsgame.TimeLag.tlContainer.addChild(hydro);
    // X_MIN: 50, Y_MAX: 180, 
    // X_L: 50, X_R: 370, Y_T: 10, Y_B: 180,
    var xL = lsgame.CONSTS.X_L;
    var xR = lsgame.CONSTS.X_R;
    var yT = lsgame.CONSTS.Y_T;
    var yB = lsgame.CONSTS.Y_B;
    hydro.graphics.mt(xL, yB);
    hydro.graphics.quadraticCurveTo(xL + 160, yB, xL + 160, yB - 85);
    hydro.graphics.quadraticCurveTo(xL + 160, yT + 15, xR, yT + 15);
    hydro.graphics.f(null);
    hydro.cache(xL-5, yT-1, xR-xL+10, yB-yT+6);

    lsgame.TimeLag.tlContainer.addChild(hydro);
}

function drawTimeLagFar() {
    drawTimeLagOff();

    var hydro = new createjs.Shape();
    // draw the green curve;
    hydro.graphics.ss(2).s(lsgame.COLORS.LIGHT_GREEN);
    lsgame.TimeLag.tlContainer.addChild(hydro);
    // X_MIN: 50, Y_MAX: 180, 
    // X_L: 50, X_R: 370, Y_T: 10, Y_B: 180,
    var xL = lsgame.CONSTS.X_L;
    var xR = lsgame.CONSTS.X_R;
    var yT = lsgame.CONSTS.Y_T;
    var yB = lsgame.CONSTS.Y_B;
    hydro.graphics.mt(xL, yB);
    hydro.graphics.quadraticCurveTo(xL + 200, yB, xL + 200, yB - 85);
    hydro.graphics.quadraticCurveTo(xL + 200, yT + 40, xR, yT + 15);
    hydro.graphics.f(null);
    hydro.cache(xL-5, yT-1, xR-xL+10, yB-yT+6);

    lsgame.TimeLag.tlContainer.addChild(hydro);
}

function clearTimeLag() {
    if (lsgame.TimeLag.tlContainer != null) {
        stageHG.removeChild(lsgame.TimeLag.tlContainer);
        lsgame.TimeLag.tlContainer = null;
        lsgame.TimeLag.tlShape = null;
        lsgame.TimeLag.tlPrevPoint = 0;
    }
}

function initLagData() {
    lsgame.TimeLag.lagArrN = [];
    var i;
    var xP;
    var yP;
    for (i = 0; i <= 47; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        yP = lsgame.TimeLag.TL_OY;
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
    }
    for (i = 48; i <= 110; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        yP = lsgame.TimeLag.TL_OY - 64 - 64 * Math.sin((i * 2 - 158) * Math.PI / 124);
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
    }
    for (i = 111; i <= lsgame.TimeLag.TL_X_POINTS; i++) {
        xP = lsgame.TimeLag.TL_OX + i * 2;
        yP = lsgame.TimeLag.TL_OY - (111 - 47) * 2;
        var pos = {x: xP, y: yP};
        lsgame.TimeLag.lagArrN.push(pos);
    }
}

function drawTimeLag(point) {
    // draw the curve;
    lsgame.TimeLag.tlShape.graphics.ss(2).s(lsgame.COLORS.LIGHT_GREEN);
    for (var i = lsgame.TimeLag.tlPrevPoint; i <= point; i++) {
        lsgame.TimeLag.tlShape.graphics.mt(lsgame.TimeLag.lagArrN[i].x, lsgame.TimeLag.lagArrN[i].y);
        lsgame.TimeLag.tlShape.graphics.lt(lsgame.TimeLag.lagArrN[i+1].x, lsgame.TimeLag.lagArrN[i+1].y);
    }
    lsgame.TimeLag.tlPrevPoint = point;
    lsgame.TimeLag.tlShape.updateCache();
}