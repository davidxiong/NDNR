"use strict";
var canvasHG, stageHG;
// hydrograph drawing
function initHydrograph() {
    canvasHG = document.getElementById("hydrographcanvas");
    stageHG = new createjs.Stage(canvasHG);
    stageHG.enableMouseOver(40);
    createjs.Touch.enable(stageHG);
    //Registers the "tick" event listener.
    createjs.Ticker.addEventListener("tick", stageHG);

    //Code to support hidpi screens and responsive scaling.
    (function(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            // width and height sync with #hydrographcanvas in lagscenariomain.css;
            var w = 612, h = 296;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvasHG.width = w*pRatio*sRatio;
            canvasHG.height = h*pRatio*sRatio;
            canvasHG.style.width = w*sRatio+'px';
            canvasHG.style.height = h*sRatio+'px';
            stageHG.scaleX = pRatio*sRatio;
            stageHG.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    })(false,'both',false,1);

    initLagData();
}

// we use y=9sqrt(x) to simulate the curve;
// x axes: 50-350 representing years 0-50
//         -- lsgame.CONSTS.X_MIN=50, lsgame.CONSTS.X_MIN + lsgame.CONSTS.X_NUM_POINTS = 350
// y axes: 34.12-180 representing 100%-0
//         -- lsgame.CONSTS.Y_MAX = 180
function calPositionsArray(sdf) {
    var i;
    var xP;
    var yP;
    for (i = 0; i <= lsgame.CONSTS.X_NUM_POINTS; i++) {
        xP = lsgame.CONSTS.X_MIN + i;
        yP = lsgame.CONSTS.Y_MAX - 9 * Math.sqrt(i) * sdf / 100;
        var pos = {x: xP, y: yP};
        lsgame.PrevWell.posArray.push(pos);
    }
}

function getCurveY(x, sdf) {
    if (x >= lsgame.CONSTS.X_MIN && x <= lsgame.CONSTS.X_MIN + lsgame.CONSTS.X_NUM_POINTS) {
        return lsgame.CONSTS.Y_MAX - 9 * Math.sqrt(x - lsgame.CONSTS.X_MIN) * sdf / 100;
    }
    return null;
}

// via getCurveY(), x guarantees to meet the condition:
//   x >= lsgame.CONSTS.X_MIN && x <= lsgame.CONSTS.X_MIN + lsgame.CONSTS.X_NUM_POINTS
function getYear(x) {
    return Math.round(lsgame.CONSTS.MAX_YEAR * (x - lsgame.CONSTS.X_MIN) / lsgame.CONSTS.X_NUM_POINTS);
}

// via getCurveY(), y guarantees to be between 0 and lsgame.PrevWell.SDF;
function getSdf(y) {
    return Math.round(lsgame.PrevWell.SDF * (lsgame.CONSTS.Y_B - y) / (lsgame.CONSTS.Y_B - lsgame.PrevWell.posArray[lsgame.CONSTS.X_NUM_POINTS].y));
}

function drawAxes(container, xL, xR, yT, yB) {
    // draw year labels in axis x;
    var textl;
    var i;
    var xSegment = lsgame.CONSTS.X_NUM_POINTS / 5;
    for (i = 1; i < 6; i++) {
        textl = new createjs.Text();
        textl.set({
            text: (10 * i).toString(),
            textAlign: "center",
            textBaseline: "middle",
            color: lsgame.COLORS.LIGHT_WHITE,
            x: xL + xSegment * i,
            y: yB + 10
        });
        container.addChild(textl);
    }
    // draw "Pumping Time" label in axis x;
    textl = new createjs.Text("Pumping Time (Years)", "14px Arial", lsgame.COLORS.LIGHT_WHITE);
    textl.set({
        textAlign: "center",
        textBaseline: "middle",
        x: (xL + xR) / 2,
        y: yB + 25
    });
    container.addChild(textl);
    // draw "SDF" label in axis y;
    textl = new createjs.Text("SDF", "14px Arial", lsgame.COLORS.LIGHT_WHITE);
    textl.set({
        rotation: -90,
        textAlign: "center",
        textBaseline: "middle",
        x: xL / 2 + 10,
        y: (yT + yB) / 2
    });
    container.addChild(textl);
    // draw boundary sdf label in axis y;
    var xValue;
    var yValue;
    var sdf = lsgame.PrevWell.SDF;
    var yBoundary = lsgame.CONSTS.Y_MAX - 9 * Math.sqrt(lsgame.CONSTS.X_NUM_POINTS) * sdf / 100;
    // mixed with "SDF" label if the sdf value is in 40 - 70;
    if (sdf > 40 && sdf < 70) {
        xValue = xL + 15;
        yValue = yBoundary - 8;
        
    }
    else {
        xValue = xL / 2 + 10;
        yValue = yBoundary;
    }
    textl = new createjs.Text();
    textl.set({
        text: sdf.toString() + "%",
        textAlign: "center",
        textBaseline: "middle",
        color: lsgame.COLORS.LIGHT_WHITE,
        x: xValue,
        y: yValue
    });
    container.addChild(textl);
    // draw 10% sdf label in axis y;
    var yTen = lsgame.CONSTS.Y_B - 10 * (lsgame.CONSTS.Y_B - lsgame.PrevWell.posArray[lsgame.CONSTS.X_NUM_POINTS].y) / lsgame.PrevWell.SDF;
    textl = new createjs.Text();
    textl.set({
        text: "10%",
        textAlign: "center",
        textBaseline: "middle",
        color: lsgame.COLORS.LIGHT_WHITE,
        x: xL / 2 + 10,
        y: yTen
    });
    container.addChild(textl);
    
    var hydro = new createjs.Shape();
    // draw the curve;
    hydro.graphics.ss(2).s(lsgame.COLORS.DARK_RED);
    for (i = 0; i < lsgame.CONSTS.X_NUM_POINTS; i++) {
        hydro.graphics.mt(lsgame.PrevWell.posArray[i].x, lsgame.PrevWell.posArray[i].y);
        hydro.graphics.lt(lsgame.PrevWell.posArray[i+1].x, lsgame.PrevWell.posArray[i+1].y);
    }
    // draw axes;
    hydro.graphics.ss(2).s(lsgame.COLORS.LIGHT_WHITE).mt(xL, yT).lt(xL, yB).lt(xR, yB);
    // draw arrow heads of axes;
    hydro.graphics.ss(1).f(lsgame.COLORS.LIGHT_WHITE).mt(xL, yT).lt(xL - 4, yT + 8).lt(xL + 4, yT + 8).lt(xL, yT);
    hydro.graphics.mt(xR, yB).lt(xR - 8, yB - 4).lt(xR - 8, yB + 4).lt(xR, yB);
    hydro.graphics.f(null);
    // draw boundary dashed-line;
    var xBoundary = lsgame.PrevWell.posArray[lsgame.CONSTS.X_NUM_POINTS].x;
    hydro.graphics.ss(1).s(lsgame.COLORS.LIGHT_WHITE).sd([4,4],0).mt(xL, yBoundary).lt(xBoundary, yBoundary).lt(xBoundary, yB);
    // draw 10% dashed-line;
    hydro.graphics.mt(xL, yTen).lt(xBoundary, yTen);
    hydro.on("mouseover", function(event) {
        if (lsgame.HotSpot.dotContainer != null) {
            lsgame.HotSpot.dotContainer.removeAllChildren();
            var x = Math.round(event.localX);
            var y = getCurveY(x, lsgame.PrevWell.SDF);
            if (y != null) {
                var dot = new createjs.Shape();
                dot.graphics.ss(1).s(lsgame.COLORS.LIGHT_WHITE).mt(xL, y).lt(x, y).lt(x, yB);
                dot.graphics.f(lsgame.COLORS.LIGHT_WHITE).dc(x, y, 2);
                lsgame.HotSpot.dotContainer.addChild(dot);
                // draw bar;
                drawBarSdfYear(getSdf(y), getYear(x));
            }
        }
    });
    hydro.cache(xL-5, yT-1, xR-xL+10, yB-yT+6);

    lsgame.HotSpot.dotContainer = new createjs.Container();
    container.addChild(hydro, lsgame.HotSpot.dotContainer);
}

function drawBar(sdf, year, xL, xR, yT, yB) {
    if (lsgame.HotSpot.barContainer == null) {
        lsgame.HotSpot.barContainer = new createjs.Container();
        lsgame.hgContainer.addChild(lsgame.HotSpot.barContainer);
    }
    else {
        lsgame.HotSpot.barContainer.removeAllChildren();
    }
    var container = lsgame.HotSpot.barContainer;
    // draw bars;
    var bar = new createjs.Shape();
    var w = xR - xL;
    // from stream flow;
    var hf = (yB - yT) * sdf / 100;
    bar.graphics.ss(1).s(lsgame.COLORS.BLACK).f(lsgame.COLORS.LIGHT_ORANGE).dr(xL, yT, w, hf);
    // add text value;
    var sdfValue = sdf.toString() + "%";
    var textf = new createjs.Text();
    textf.set({
        text: sdfValue,
        textAlign: "center",
        textBaseline: "middle",
        x: xL + w / 2,
        y: yT + hf / 2
    });
    // from aquifer storage;
    var aquifer = 100 - sdf;
    var ha = yB - yT - hf;
    bar.graphics.ss(1).s(lsgame.COLORS.BLACK).f(lsgame.COLORS.LIGHT_GREEN).dr(xL, yT + hf, w, ha);
    // add text value;
    var texta = new createjs.Text();
    texta.set({
        text: aquifer.toString() + "%",
        textAlign: "center",
        textBaseline: "middle",
        x: xL + w / 2,
        y: yT + hf + ha / 2
    });
    container.addChild(bar);
    container.addChild(texta, textf);
    // draw year value;
    var texty = new createjs.Text("Year: " + year.toString(), "14px Arial", lsgame.COLORS.LIGHT_WHITE);
    texty.set({
        textAlign: "center",
        textBaseline: "middle",
        x: xL + w / 2,
        y: yT - 35
    });
    container.addChild(texty);
    // draw SDF text;
    var texts = new createjs.Text("SDF = " + sdfValue, "18px Arial", lsgame.COLORS.LIGHT_WHITE);
    texts.set({
        textAlign: "center",
        textBaseline: "middle",
        x: xL + w / 2,
        y: yT - 15
    });
    container.addChild(texts);
}

function drawBarSdfYear(sdf, year) {
    drawBar(sdf, year,
            lsgame.CONSTS.X_L_BAR,
            lsgame.CONSTS.X_R_BAR,
            lsgame.CONSTS.X_T_BAR,
            lsgame.CONSTS.X_B_BAR);
}

function drawHydroGraphs() {
    window.lsgame.hgContainer = new createjs.Container();

    calPositionsArray(lsgame.PrevWell.SDF);
    drawAxes(window.lsgame.hgContainer, lsgame.CONSTS.X_L, lsgame.CONSTS.X_R, lsgame.CONSTS.Y_T, lsgame.CONSTS.Y_B);
    // draw the bar graph to year 50;
    drawBarSdfYear(lsgame.PrevWell.SDF, lsgame.CONSTS.MAX_YEAR);
    
    stageHG.addChild(window.lsgame.hgContainer);
}

function clearHydroGraphs() {
    window.lsgame.PrevWell.prevArea = null;
    window.lsgame.PrevWell.SDF = 0;
    window.lsgame.PrevWell.posArray = [];
    window.lsgame.HotSpot.dotContainer = null;
    window.lsgame.HotSpot.barContainer = null;
    stageHG.removeChild(window.lsgame.hgContainer);
}

function clearHotSpot() {
    if (lsgame.HotSpot.dotContainer != null) {
        lsgame.HotSpot.dotContainer.removeAllChildren();
        // reset the bar graph to year 50;
        drawBarSdfYear(lsgame.PrevWell.SDF, lsgame.CONSTS.MAX_YEAR);
    }
}
