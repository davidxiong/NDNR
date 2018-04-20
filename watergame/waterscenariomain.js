"use strict";
var canvas, stage, exportRoot;
$( function() {
    function highposition() {
        $( "#slider" ).slider("value", 120);
    }
    function midhighposition() {
        $( "#slider" ).slider("value", 90);
    }
    function midposition() {
        $( "#slider" ).slider("value", 60);
    }
    function midlowposition() {
        $( "#slider" ).slider("value", 30);
    }
    function lowposition() {
        $( "#slider" ).slider("value", 0);
    }
    window.wsgame.midposition = function() {
        midposition();
    }
    window.wsgame.highposition = function() {
        highposition();
    }
    window.wsgame.lowposition = function() {
        lowposition();
    }
    window.wsgame.enablemenuitem = function(menuitem) {
        $( "#sceneoptions option" ).attr("disabled", true);
        $( '#sceneoptions option[value="' + menuitem + '"]' ).attr("disabled", false);
        $( "#sceneoptions" ).selectmenu("refresh");
    }
    window.wsgame.enableallmenuitems = function() {
        $( "#sceneoptions option" ).attr("disabled", false);
        $( "#sceneoptions" ).selectmenu("refresh");
    }
    function changescene(scene) {
        switch (scene) {
            case "Water Table":
                wsgame.currentScene = wsgame.WaterScenes.WATER_TABLE;
                $( ".visW" ).show();
                $( ".visP" ).hide();
                $( ".visS" ).hide();
                break;
            case "Precipitation":
                wsgame.currentScene = wsgame.WaterScenes.PRECIPITATION;
                $( ".visW" ).hide();
                $( ".visP" ).show();
                $( ".visS" ).hide();
                break;
            case "Soil Texture":
                wsgame.currentScene = wsgame.WaterScenes.SOIL;
                $( ".visW" ).hide();
                $( ".visP" ).hide();
                $( ".visS" ).show();
                break;
        }
        if (wsgame.currentScene == wsgame.WaterScenes.WATER_TABLE) {
            $( ".visPVS" ).hide();
            $( "#soundonoff" ).css("top", "158px");
        } else {
            $( ".visPVS" ).show();
            $( "#soundonoff" ).css("top", "206px");
        }
        window.wsgame.midposition();
        showwpage(scene);
    }
    // pull down menu
    $( "#sceneoptions" ).selectmenu({
        width: 178,
        change: function( event, data ) {
            changescene(data.item.value);
        }
    });
    // Slider, label, ticks, etc
    $( "#slider" ).slider({
        value:60,
        min: 0,
        max: 120,
        step: 1,
        orientation: "vertical",
        change: function( event, ui ) {
            if (ui.value >= 105 && ui.value < 120) {
                highposition();
                return;
            }
            else if (ui.value > 90 && ui.value < 105 || ui.value >= 75 && ui.value < 90) {
                midhighposition();
                return;
            }
            else if (ui.value > 60 && ui.value < 75 || ui.value >= 45 && ui.value < 60) {
                midposition();
                return;
            }
            else if (ui.value > 30 && ui.value < 45 || ui.value >= 15 && ui.value < 30) {
                midlowposition();
                return;
            }
            else if (ui.value > 0 && ui.value < 15) {
                lowposition();
                return;
            }
            var baseFrameNumber = 0;
            if (wsgame.currentScene == wsgame.WaterScenes.WATER_TABLE) {
                baseFrameNumber = 0;
            }
            else if (wsgame.currentScene == wsgame.WaterScenes.PRECIPITATION) {
                baseFrameNumber = 24;
            }
            else if (wsgame.currentScene == wsgame.WaterScenes.SOIL) {
                if (ui.value == 120) {
                    exportRoot.gotoAndPlay("LSOILH");
                }
                else if (ui.value == 90) {
                    exportRoot.gotoAndPlay("LSOILMH");
                }
                else if (ui.value == 60) {
                    exportRoot.gotoAndPlay("LSOILM");
                }
                else if (ui.value == 30) {
                    exportRoot.gotoAndPlay("LSOILML");
                }
                else if (ui.value == 0) {
                    exportRoot.gotoAndPlay("LSOILL");
                }
                return;
            }
            var framenumber = Math.floor((120 - ui.value) * lib.properties.fps / 120);
            if (framenumber >= 1) {
                exportRoot.gotoAndStop(baseFrameNumber + framenumber - 1);
            }
            else {
                exportRoot.gotoAndStop(baseFrameNumber);
            }
        }
    });
    $( ".sliderHlabel" ).on("click", function() {
        highposition();
    });
    $( ".sliderLlabel" ).on("click", function() {
        lowposition();
    });
    $( "#sliderhtick" ).on("click", function() {
        highposition();
    });
    $( "#slidertick2" ).on("click", function() {
        $( "#slider" ).slider("value", 90);
    });
    $( "#slidermtick" ).on("click", function() {
        midposition();
    });
    $( "#slidertick4" ).on("click", function() {
        $( "#slider" ).slider("value", 30);
    });
    $( "#sliderltick" ).on("click", function() {
        lowposition();
    });
    $( "#tutorialexit" ).on("click", function() {
        window.wsgame.currentStep = wsgame.TutorialStep.STEP_END;
        showtpage(window.wsgame.currentStep);
    });
    $( "#tutorialprevious" ).on("click", function() {
        window.wsgame.currentStep--;
        showtpage(window.wsgame.currentStep);
    });
    $( "#tutorialnext" ).on("click", function() {
        window.wsgame.currentStep++;
        showtpage(window.wsgame.currentStep);
    });
    $( "#soundonoff" ).on("click", function() {
        if (window.wsgame.soundOn) {
            window.wsgame.soundOn = false;
            $( "#MySound").trigger("pause");
            $( "#soundonoff" ).css("background-image", "url(images/speechoff.png)");
        }
        else {
            window.wsgame.soundOn = true;
            $( "#MySound").trigger("play");
            $( "#soundonoff" ).css("background-image", "url(images/speechon.png)");
        }
    });
    $( "#turnontutorial" ).on("click", function() {
        if (wsgame.currentScene == wsgame.WaterScenes.WATER_TABLE) {
            wsgame.currentStep = wsgame.TutorialStep.STEP_1;
        }
        else if (wsgame.currentScene == wsgame.WaterScenes.PRECIPITATION) {
            wsgame.currentStep = wsgame.TutorialStep.STEP_4;
        }
        else if (wsgame.currentScene == wsgame.WaterScenes.SOIL) {
            wsgame.currentStep = wsgame.TutorialStep.STEP_8;
        }
        showtpage(window.wsgame.currentStep);
    });
} );

function init() {
    canvas = document.getElementById("canvas");
    window.wsgame = window.wsgame||{};
    wsgame.currentScene = wsgame.WaterScenes.WATER_TABLE;
    wsgame.currentStep = wsgame.TutorialStep.STEP_START;
    wsgame.rainingTicker = null;
    window.wsgame.soundOn = false;
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
    exportRoot = new lib.waterscenario1();
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();
    createjs.Touch.enable(stage);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    
    initHydrograph();
    
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
    
    window.wsgame.midposition();
    // add the tooltip2 functionality
    (function() {
        $('.tooltip2').tooltip2text();
    })();

}
