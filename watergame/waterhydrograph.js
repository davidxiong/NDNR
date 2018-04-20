"use strict";
var canvasHG, stageHG;
// hydrograph drawing
function initHydrograph() {
    canvasHG = document.getElementById("hydrographcanvas");
    stageHG = new createjs.Stage(canvasHG);
    stageHG.enableMouseOver();
    createjs.Touch.enable(stageHG);
    //Registers the "tick" event listener.
    createjs.Ticker.addEventListener("tick", stageHG);
    drawHydroGraphs();
    //Code to support hidpi screens and responsive scaling.
    (function(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            // width and height sync with #hydrographcanvas in waterscenariomain.css;
            var w = 612, h = 216;
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
}

function drawAxesAndLabels(container, w, h, xL, xR, yT, yB) {
    // draw axes;
    var hydro = new createjs.Shape();
    hydro.graphics.ss(2).s("rgb(237,240,242)").mt(xL, yT).lt(xL, yB).lt(xR, yB).lt(xR, yT);
    // draw arrow heads of axes;
    hydro.graphics.ss(1).f("rgb(237,240,242)").mt(xL, yT).lt(xL - 4, yT + 8).lt(xL + 4, yT + 8).lt(xL, yT);
    hydro.graphics.mt(xR, yT).lt(xR - 4, yT + 8).lt(xR + 4, yT + 8).lt(xR, yT);
    container.addChild(hydro);
    // draw legend
    hydro = new createjs.Shape();
    var x = xL + (xR - xL) * 7 / 10;
    var y = yT + 10;
    hydro.graphics.ss(0.5).s("black").f("rgb(186,191,51)").drawRect(x, y, 50, 14);
    hydro.graphics.ss(2).s("rgb(187,31,83)").mt(x, y + 30).lt(x + 50, y + 30);
    container.addChild(hydro);
}

function drawBars(ww, hh) {
    // draw bars;
    var bar = new createjs.Shape();
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(        0, hh).lt(        0, hh*6.6/7).lt(ww*0.6/11, hh*6.6/7).lt(ww*0.6/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*0.6/11, hh).lt(ww*0.6/11, hh*6.2/7).lt(ww*1.2/11, hh*6.2/7).lt(ww*1.2/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*1.2/11, hh).lt(ww*1.2/11, hh*4.0/7).lt(ww*1.8/11, hh*4.0/7).lt(ww*1.8/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*1.8/11, hh).lt(ww*1.8/11, hh*2.8/7).lt(ww*2.4/11, hh*2.8/7).lt(ww*2.4/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*2.4/11, hh).lt(ww*2.4/11, hh*3.8/7).lt(ww*3.0/11, hh*3.8/7).lt(ww*3.0/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*3.0/11, hh).lt(ww*3.0/11, hh*4.6/7).lt(ww*3.6/11, hh*4.6/7).lt(ww*3.6/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*3.6/11, hh).lt(ww*3.6/11, hh*5.8/7).lt(ww*4.2/11, hh*5.8/7).lt(ww*4.2/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*4.2/11, hh).lt(ww*4.2/11, hh*6.7/7).lt(ww*4.8/11, hh*6.7/7).lt(ww*4.8/11, hh);
    bar.graphics.ss(1).s("black").f("rgb(186,191,51)").mt(ww*4.8/11, hh).lt(ww*4.8/11, hh*6.85/7).lt(ww*5.4/11, hh*6.85/7).lt(ww*5.4/11, hh);
    return bar;
}

function drawCurveP(ww, hh, thickness) {
    // draw curve
    var curve = new createjs.Shape();
    curve.graphics.ss(thickness).s("rgb(187,31,83)").mt(ww*2/13, hh).qt(ww*3.5/13, hh*5.8/7, ww*4.5/13, hh*4.5/7).lt(ww*6.5/13, hh*1.8/7).qt(ww*7.7/13, hh*0.3/7, ww*8.3/13, hh*1.4/7).lt(ww*9.4/13, hh*4/7).qt(ww*10.7/13, hh*6.5/7, ww*12.7/13, hh*6.8/7);
    return curve;
}

function drawPHG_H(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerPH = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.x = xL;
    bar.y = yT;
    window.wsgame.hgContainerPH.addChild(bar);
    // draw curves
    var curve = drawCurveP(ww, hh, 2);
    curve.x = xL;
    curve.y = yT;
    window.wsgame.hgContainerPH.addChild(curve);

    drawAxesAndLabels(window.wsgame.hgContainerPH, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerPH.cache(0,0,w+20,h+20);
}

function drawPHG_2(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerP2 = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh/4, 1, 0.75);
    window.wsgame.hgContainerP2.addChild(bar);
    // draw curves
    var curve = drawCurveP(ww, hh, 2.67);
    curve.setTransform(xL, yT + hh/4, 1, 0.75);
    window.wsgame.hgContainerP2.addChild(curve);
    
    drawAxesAndLabels(window.wsgame.hgContainerP2, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerP2.cache(0,0,w+20,h+20);
}

function drawPHG_M(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerPM = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh/2, 1, 0.5);
    window.wsgame.hgContainerPM.addChild(bar);
    // draw curves
    var curve = drawCurveP(ww, hh, 4);
    curve.setTransform(xL, yT + hh/2, 1, 0.5);
    window.wsgame.hgContainerPM.addChild(curve);
    
    drawAxesAndLabels(window.wsgame.hgContainerPM, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerPM.cache(0,0,w+20,h+20);
}

function drawPHG_4(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerP4 = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.7, 1, 0.3);
    window.wsgame.hgContainerP4.addChild(bar);
    // draw curves
    var curve = drawCurveP(ww, hh, 6.67);
    curve.setTransform(xL, yT + hh*0.7, 1, 0.3);
    window.wsgame.hgContainerP4.addChild(curve);
    
    drawAxesAndLabels(window.wsgame.hgContainerP4, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerP4.cache(0,0,w+20,h+20);
}

function drawPHG_L(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerPL = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.9, 1, 0.1);
    window.wsgame.hgContainerPL.addChild(bar);
    // draw curves
    var curve = drawCurveP(ww, hh, 20);
    curve.setTransform(xL, yT + hh*0.9, 1, 0.1);
    window.wsgame.hgContainerPL.addChild(curve);
    
    drawAxesAndLabels(window.wsgame.hgContainerPL, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerPL.cache(0,0,w+20,h+20);
}

function drawCurveVS(ww, hh, thickness) {
    // draw curve
    var curve = new createjs.Shape();
    //curve.graphics.ss(thickness).s("rgb(187,31,83)").mt(0, hh).qt(ww*1.7/14, hh*6.0/7, ww*2.6/14, hh*4.0/7).lt(ww*3.5/14, hh*2.0/7).qt(ww*4.5/14, -hh*0.5/7, ww*5.2/14, hh*2.0/7).lt(ww*6.0/14, hh*4.1/7).qt(ww*7.1/14, hh*6.9/7, ww*10.5/14, hh);
    curve.graphics.ss(thickness).s("rgb(187,31,83)").mt(-ww*1.2/14, hh*7.5/7).qt(-ww*0.6/14, hh*7.4/7, 0, hh).qt(ww*1.7/14, hh*6.0/7, ww*2.6/14, hh*4.0/7).lt(ww*3.5/14, hh*2.0/7).qt(ww*4.5/14, -hh*0.5/7, ww*5.2/14, hh*2.0/7).lt(ww*6.0/14, hh*4.1/7).qt(ww*7.1/14, hh*6.9/7, ww*10.5/14, hh).lt(ww*12/14,hh);
    return curve;
}

function drawVSHG_H(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerVSH = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.12, 1, 0.88);
    window.wsgame.hgContainerVSH.addChild(bar);
    // draw curves
    var curve = drawCurveVS(ww, hh, 2);
    curve.setTransform(xL + ww/12, yT);
    var m = new createjs.Shape(new createjs.Graphics().dr(xL,0,ww,yB));
    curve.mask = m;
    window.wsgame.hgContainerVSH.addChild(curve);

    drawAxesAndLabels(window.wsgame.hgContainerVSH, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerVSH.cache(0,0,w+20,h+20);
}

function drawVSHG_2(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerVS2 = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.12, 1, 0.88);
    window.wsgame.hgContainerVS2.addChild(bar);
    // draw curves
    var curve = drawCurveVS(ww, hh, 2.27);
    curve.setTransform(xL + ww/12, yT + hh*0.12 - 18, 1.13, 0.88);
    var m = new createjs.Shape(new createjs.Graphics().dr(xL,0,ww,yB));
    curve.mask = m;
    window.wsgame.hgContainerVS2.addChild(curve);

    drawAxesAndLabels(window.wsgame.hgContainerVS2, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerVS2.cache(0,0,w+20,h+20);
}

function drawVSHG_M(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerVSM = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.12, 1, 0.88);
    window.wsgame.hgContainerVSM.addChild(bar);
    // draw curves
    var curve = drawCurveVS(ww, hh, 2.67);
    curve.setTransform(xL + ww/12, yT + hh*0.25 - 35, 1.25, 0.75);
    var m = new createjs.Shape(new createjs.Graphics().dr(xL,0,ww,yB));
    curve.mask = m;
    window.wsgame.hgContainerVSM.addChild(curve);

    drawAxesAndLabels(window.wsgame.hgContainerVSM, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerVSM.cache(0,0,w+20,h+20);
}

function drawVSHG_4(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerVS4 = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.12, 1, 0.88);
    window.wsgame.hgContainerVS4.addChild(bar);
    // draw curves
    var curve = drawCurveVS(ww, hh, 3.17);
    curve.setTransform(xL + ww/12, yT + hh*0.37 - 52, 1.4, 0.63);
    var m = new createjs.Shape(new createjs.Graphics().dr(xL,0,ww,yB));
    curve.mask = m;
    window.wsgame.hgContainerVS4.addChild(curve);

    drawAxesAndLabels(window.wsgame.hgContainerVS4, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerVS4.cache(0,0,w+20,h+20);
}

function drawVSHG_L(w, h, xL, xR, yT, yB, ww, hh) {
    window.wsgame.hgContainerVSL = new createjs.Container();
    // draw bars;
    var bar = drawBars(ww, hh);
    bar.setTransform(xL, yT + hh*0.12, 1, 0.88);
    window.wsgame.hgContainerVSL.addChild(bar);
    // draw curves
    var curve = drawCurveVS(ww, hh, 4);
    curve.setTransform(xL + ww/12, yT + hh*0.5 - 70, 1.6, 0.5);
    var m = new createjs.Shape(new createjs.Graphics().dr(xL,0,ww,yB));
    curve.mask = m;
    window.wsgame.hgContainerVSL.addChild(curve);

    drawAxesAndLabels(window.wsgame.hgContainerVSL, w, h, xL, xR, yT, yB);
    
    window.wsgame.hgContainerVSL.cache(0,0,w+20,h+20);
}

function drawHydroGraphs() {
    window.wsgame.hgContainer = new createjs.Container();
    var w = 600;
    var h = 200;
    var xL = 0.1 * w + 10;
    var xR = 0.9 * w + 10;
    var yT = 0.05 * h + 10;
    var yB = 0.9 * h + 10;
    var ww = xR - xL; // 540-60=480
    var hh = yB - yT; // 180-10=170
    // Precipitation HydroGraphs;
    drawPHG_H(w, h, xL, xR, yT, yB, ww, hh);
    drawPHG_2(w, h, xL, xR, yT, yB, ww, hh);
    drawPHG_M(w, h, xL, xR, yT, yB, ww, hh);
    drawPHG_4(w, h, xL, xR, yT, yB, ww, hh);
    drawPHG_L(w, h, xL, xR, yT, yB, ww, hh);
    // Soil HydroGraphs;
    drawVSHG_H(w, h, xL, xR, yT, yB, ww, hh);
    drawVSHG_2(w, h, xL, xR, yT, yB, ww, hh);
    drawVSHG_M(w, h, xL, xR, yT, yB, ww, hh);
    drawVSHG_4(w, h, xL, xR, yT, yB, ww, hh);
    drawVSHG_L(w, h, xL, xR, yT, yB, ww, hh);
}

(function($) {
    $.fn.tooltip2text = function() {
        animateTooltip(this);
        return this;
    };

    function animateTooltip(selector) {
        var delayElapsed = false,
            timer;
        selector.on('mouseenter', function(event) {
            if (delayElapsed === false) {
                timer = setTimeout(function() {
                    delayElapsed = true;
                    createTooltip();
                }, 400);
            }
        }).on('mouseleave', function() {
            clearTimeout(timer);
            delayElapsed = false;
            $('div.tooltip2text').remove();
        });
    }
    function createTooltip(pX, pY){
        if (window.wsgame.currentScene != wsgame.WaterScenes.WATER_TABLE)
            $('<div class="tooltip2text">This hydrograph is a graph of how precipitation and streamflow change over time. The streamflow peak is the response of the stream to the precipitation event. The starting and ending levels of the streamflow line indicate normal baseflow conditions, which are influenced by water table elevation.</div>').appendTo('body');
        positionTooltip();
    }
    function positionTooltip(){
        $('div.tooltip2text').css({
            'visibility': 'visible',
            'width': '350px',
            'height': '140px',
            'fontSize': '100%',
            'backgroundColor': 'rgb(0,0,0)',
            'color': 'rgb(237,240,242)',
            'textAlign': 'justify',
            'borderRadius': '6px',
            'padding': '5px',
            'position': 'absolute',
            'zIndex': '2',
            'opacity': '1',
            'top': '500px',
            'left': '700px'
        });
    }    

})(jQuery);
