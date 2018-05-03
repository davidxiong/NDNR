"use strict";
var canvas, stage, exportRoot;
$( function() {
    // well location slider
    window.lsgame.farWellLocation = function() {
        lsgame.currentLocation = lsgame.WellLocation.FAR;
        $( "#slider" ).slider("value", 0);
    }
    window.lsgame.nearWellLocation = function() {
        lsgame.currentLocation = lsgame.WellLocation.NEAR;
        $( "#slider" ).slider("value", 120);
    }
    window.lsgame.removeWellUnity = function() {
        $( ".wellunity" ).remove();
        clearHydroGraphs();
    }
    window.lsgame.offPumpStatus = function () {
        lsgame.curPumpStatus = lsgame.PumpStatus.PUMPOFF;
        $( "#pumpcheck" ).prop("checked", false);
        changepumponoff(lsgame.PumpStatus.PUMPOFF);
    }
    window.lsgame.resetCompareBtn = function() {
        $("#btncompare").text("Compare");
    }
    function changescene(scene) {
        window.lsgame.initStatus();
        switch (scene) {
            case "Lag Effect":
                lsgame.currentScene = lsgame.LagScenes.LAGEFFECT;
                $( ".visL" ).show();
                $( ".visS" ).hide();
                if (lsgame.PrevWell.prevArea != null) {
                    lsgame.removeWellUnity();
                }
                if (lsgame.TimeLag.tlContainer == null) {
                    drawTimeLagOff();
                }
                break;
            case "Depletion Factor":
                lsgame.currentScene = lsgame.LagScenes.SDF;
                $( ".visL" ).hide();
                $( ".visS" ).show();
                clearTimeLag();
                break;
        }
        showwpage(scene);
    }
    function changepumponoff(pumponoff) {
        switch (pumponoff) {
            case lsgame.PumpStatus.PUMPOFF:
                lsgame.curPumpStatus = lsgame.PumpStatus.PUMPOFF;
                break;
            case lsgame.PumpStatus.PUMPON:
                lsgame.curPumpStatus = lsgame.PumpStatus.PUMPON;
                break;
        }
        if (lsgame.curPumpStatus == lsgame.PumpStatus.PUMPOFF) {
            if (lsgame.currentLocation == lsgame.WellLocation.NEAR) {
                exportRoot.gotoAndStop("GNEAROFF");
            }
            else if (lsgame.currentLocation == lsgame.WellLocation.FAR) {
                exportRoot.gotoAndStop("GFAROFF");
            }
        }
        else {
            if (stageHG.contains(lsgame.TimeLag.tlCompContainer)) {
                stageHG.removeChild(lsgame.TimeLag.tlCompContainer);
                lsgame.resetCompareBtn();
            }
            if (lsgame.currentLocation == lsgame.WellLocation.NEAR) {
                exportRoot.gotoAndPlay("GNEARON");
            }
            else if (lsgame.currentLocation == lsgame.WellLocation.FAR) {
                exportRoot.gotoAndPlay("GFARON");
            }
        }
    }
    // pull down menu
    $( "#sceneoptions" ).selectmenu({
        width: 220,
        change: function( event, data ) {
            changescene(data.item.value);
        }
    });
    // Slider, label, ticks, etc
    $( "#slider" ).slider({
        value:120,
        min: 0,
        max: 120,
        step: 120,
        orientation: "horizontal",
        change: function( event, ui ) {
            if (ui.value == 120) {
                lsgame.currentLocation = lsgame.WellLocation.NEAR;
            }
            else if (ui.value == 0) {
                lsgame.currentLocation = lsgame.WellLocation.FAR;
            }
            // reset the pump status to PUMPOFF when we change well locations;
            lsgame.offPumpStatus();
        }
    });
    $( "#sliderhtick" ).on("click", function() {
        lsgame.farWellLocation();
    });
    $( "#sliderltick" ).on("click", function() {
        lsgame.nearWellLocation();
    });
    $( ".sliderFlabel" ).on("click", function() {
        lsgame.farWellLocation();
    });
    $( ".sliderNlabel" ).on("click", function() {
        lsgame.nearWellLocation();
    });
    $( "#sdfareacanvas" ).on("click", function(event) {
        var elems = clickLocation(event.pageX, event.pageY);
        if (elems != null) {
            $( "#sdfpagetop" ).append(elems);
            drawHydroGraphs();
        }
    });
    $( "#sdfareacanvas" ).on("mousemove", function(event) {
        mouseMoveOnSdfAreas(event.pageX, event.pageY);
    });
    $( "#btntenfifty" ).on("click", function() {
        var txt = $("#btntenfifty").text();
        if (txt.indexOf("Show") >= 0) {
            $("#btntenfifty").text("Hide 10/50 Area");
            stageSA.addChild(lsgame.SdfArea.saTenFifty);
        }
        else {
            $("#btntenfifty").text("Show 10/50 Area");
            stageSA.removeChild(lsgame.SdfArea.saTenFifty);
        }
    });
    $( "#hydrographcanvas" ).on("click", function(event) {
        clearHotSpot();
    });
    $( "#btncompare" ).on("click", function() {
        var txt = $("#btncompare").text();
        if (txt.indexOf("Cancel") >= 0) {
            $("#btncompare").text("Compare");
            stageHG.removeChild(lsgame.TimeLag.tlCompContainer);
        }
        else {
            $("#btncompare").text("Cancel");
            stageHG.addChild(lsgame.TimeLag.tlCompContainer);
        }
    });
    $( "#pumpcheck" ).on("click", function() {
        // pump on;
       if ($("#pumpcheck").prop("checked")) {
           changepumponoff(lsgame.PumpStatus.PUMPON);
       }
       else {
           changepumponoff(lsgame.PumpStatus.PUMPOFF);
       }
    });

} );

window.lsgame.initStatus = function () {
    lsgame.farWellLocation();
    lsgame.offPumpStatus();
}

function init() {
    canvas = document.getElementById("canvas");
    window.lsgame = window.lsgame||{};
    lsgame.curPumpStatus = lsgame.PumpStatus.PUMPOFF;
    lsgame.currentScene = lsgame.LagScenes.LAGEFFECT;
    images = images||{};
    ss = ss||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(var i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.lagscenario();
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();
    createjs.Touch.enable(stage);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    initHydrograph();
    initSdfAreaCanvas();
    
    //Code to support hidpi screens and responsive scaling.
    (function(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
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
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = w*sRatio+'px';
            canvas.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    })(false,'both',false,1);
    
    window.lsgame.initStatus();
}
