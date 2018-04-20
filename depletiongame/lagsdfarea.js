"use strict";
var canvasSA, stageSA;
// sdfarea drawing
function initSdfAreaCanvas() {
    canvasSA = document.getElementById("sdfareacanvas");
    stageSA = new createjs.Stage(canvasSA);
    stageSA.enableMouseOver(40);
    createjs.Touch.enable(stageSA);
    //Registers the "tick" event listener.
    createjs.Ticker.addEventListener("tick", stageSA);

    //Code to support hidpi screens and responsive scaling.
    (function(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            // width and height sync with #sdfareacanvas in lagscenariomain.css;
            var w = 1224, h = 580;
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
            canvasSA.width = w*pRatio*sRatio;
            canvasSA.height = h*pRatio*sRatio;
            canvasSA.style.width = w*sRatio+'px';
            canvasSA.style.height = h*sRatio+'px';
            stageSA.scaleX = pRatio*sRatio;
            stageSA.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    })(false,'both',false,1);

    initSdfAreaData();
}

function clickLocation(x, y) {
    var elemvalue;
    var elemsvalue = "";
    
    // return null if click on non-display area;
    if (x < lsgame.CONSTS.OFFSET_X || y < lsgame.CONSTS.OFFSET_Y) {
        return null;
    }

    // calculate the coordinates of the top-left point;
    // i: 0-8, j: 0-19 where 16 is in river
    var j = Math.floor((x - lsgame.CONSTS.OFFSET_X) / lsgame.CONSTS.W_OUTSIDE);
    var i = Math.floor((y - lsgame.CONSTS.OFFSET_Y) / lsgame.CONSTS.H_OUTSIDE);
    
    if (j == lsgame.CONSTS.W_UNITS_TO_RIVER) {
        return null;
    }
    
    // return null if click on the previous well;
    if (j == lsgame.PrevWell.x && i == lsgame.PrevWell.y) {
        return null;
    }
    else if (lsgame.PrevWell.x != -1 || lsgame.PrevWell.y != -1) {
        lsgame.removeWellUnity();
    }
    
    elemsvalue += "<div class=\"wellunity\">\n"
    // step 1: add yellow background;
    elemvalue = genwellbase(x, y, j, i);
    elemsvalue += elemvalue + "\n";
    // step 2: add well;
    elemvalue = genwell(x, y, j, i);
    elemsvalue += elemvalue + "\n";
    // step 3: add information box;
    elemvalue = geninfobox(x, y, j, i);
    elemsvalue += elemvalue + "\n";
    elemsvalue += "</div>\n";
    
    lsgame.PrevWell.x = j;
    lsgame.PrevWell.y = i;
    
    return elemsvalue;
}

function genwellbase(x, y, jx, iy) {
    var elemvalue;
    // .wellbase width = 30 in lagscenariomain.css;
    var l = lsgame.CONSTS.OFFSET_X + jx * lsgame.CONSTS.W_OUTSIDE + (lsgame.CONSTS.W_OUTSIDE - 30) / 2;
    // .wellbase height = 30 in lagscenariomain.css;
    var t = lsgame.CONSTS.OFFSET_Y + iy * lsgame.CONSTS.H_OUTSIDE + (lsgame.CONSTS.H_OUTSIDE - 30) / 2;
    if (iy == 8) {
        // 10: fine tune value;
        t = t - 10;
    }
    var stylevalue = "left:" + l + "px; top:" + t + "px";
    elemvalue = "<div class=\"wellbase\" style=\"" + stylevalue + "\"></div>";
    return elemvalue;
}

function genwell(x, y, jx, iy) {
    var elemvalue;
    // 3: fine tune value;
    var l = lsgame.CONSTS.OFFSET_X + jx * lsgame.CONSTS.W_OUTSIDE + (lsgame.CONSTS.W_OUTSIDE - lsgame.CONSTS.W_WELL) / 2 + 3;
    var t = lsgame.CONSTS.OFFSET_Y + iy * lsgame.CONSTS.H_OUTSIDE + lsgame.CONSTS.H_OUTSIDE * 2 / 3 - lsgame.CONSTS.H_WELL;
    if (iy == 8) {
        // 10: fine tune value;
        t = t - 10;
    }
    var stylevalue = "left:" + l + "px; top:" + t + "px";
    elemvalue = "<img class=\"well\" style=\"" + stylevalue + "\" src=\"images/well.png\">";
    return elemvalue;
}

function geninfobox(x, y, jx, iy) {
    var elemvalue;
    // .infobox width = 200 in lagscenariomain.css;
    var l;
    if (iy == 0) {
        // 6: fine tune value;
        l = lsgame.CONSTS.OFFSET_X + (jx + 1) * lsgame.CONSTS.W_OUTSIDE - 6;
    }
    else {
        l = lsgame.CONSTS.OFFSET_X + jx * lsgame.CONSTS.W_OUTSIDE - (200 - lsgame.CONSTS.W_OUTSIDE) / 2;
    }
    // .infobox height = 90 in lagscenariomain.css;
    var t;
    if (iy == 0) {
        // 30: fine tune value;
        t = lsgame.CONSTS.OFFSET_Y - 30;
    }
    else {
        t = lsgame.CONSTS.OFFSET_Y + iy * lsgame.CONSTS.H_OUTSIDE - 90 - lsgame.CONSTS.H_OUTSIDE / 3;
    }
    if (iy == 8) {
        // 10: fine tune value;
        t = t - 10;
    }
    var fromstream;
    if (jx > lsgame.CONSTS.W_UNITS_TO_RIVER) {
        fromstream = 104 - Math.round((jx - lsgame.CONSTS.W_UNITS_TO_RIVER) * lsgame.CONSTS.W_SDF_UNIT_DIFF);
    }
    else if (jx < lsgame.CONSTS.W_UNITS_TO_RIVER) {
        fromstream = 104 - Math.round((lsgame.CONSTS.W_UNITS_TO_RIVER - jx) * lsgame.CONSTS.W_SDF_UNIT_DIFF);
    }
    else {
        fromstream = 100;
    }
    lsgame.PrevWell.SDF = fromstream;
    
    var stylevalue = "left:" + l + "px; top:" + t + "px";
    if (iy == 0) {
        elemvalue = "<div class=\"infoboxright\" style=\"" + stylevalue + "\">";
    }
    else {
        elemvalue = "<div class=\"infobox\" style=\"" + stylevalue + "\">";
    }
    // add the close button;
    elemvalue += "<div id=\"closebtn\" onclick=\"window.lsgame.removeWellUnity()\">X</div>";
    // add table contents;
    elemvalue += "<table class=\"ibcontent\"><tr><td>Pumping</td><td>100</td></tr><tr><td>From Stream Flow</td><td>";
    elemvalue += fromstream.toString();
    elemvalue += "</td></tr><tr><td>From Aquifer Storage</td><td>";
    elemvalue += (100 - fromstream).toString();
    elemvalue += "</td></tr><tr><td>SDF=</td><td>"
    elemvalue += fromstream.toString() + "%";
    elemvalue += "</td></tr></table></div>";
    return elemvalue;
}

function createSdfArea(x, y) {
    var sdfarea = new createjs.Shape();
    sdfarea.graphics.ss(1).s(lsgame.COLORS.BLACK).f(lsgame.COLORS.LIGHT_GREEN).mt(x, y).lt(x+50, y).lt(x+80, y+60).lt(x+30, y+60).lt(x, y);
    sdfarea.cache(x, y, x + 80, y + 60)
    return sdfarea;
}

// sdf area size: 80 (50+30) x 60
function initSdfAreaData() {
    lsgame.SdfArea.saContainer = new createjs.Container();
    // topleft first row;
    var sdfarea = createSdfArea(130, 100);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(180, 100);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(230, 100);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(280, 100);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(330, 100);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    // topleft second row;
    sdfarea = createSdfArea(210, 160);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(260, 160);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(310, 160);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(360, 160);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(410, 160);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    // topleft third row;
    sdfarea = createSdfArea(370, 220);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(420, 220);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(470, 220);
    lsgame.SdfArea.saContainer.addChild(sdfarea);
    sdfarea = createSdfArea(520, 220);
    lsgame.SdfArea.saContainer.addChild(sdfarea);

}

function findSdfArea(x, y) {
    var i;
    var sdfarea;
    var ctr = lsgame.SdfArea.saContainer;
    for (i = 0; i < ctr.numChildren; i++) {
        sdfarea = ctr.getChildAt(i);
        if (sdfarea.hitTest(x, y)) {
            return sdfarea;
        }
    }
    return null;
}