"use strict";
var canvas, stage, exportRoot;
$( function() {
    // well location slider
    window.ssgame.farWellLocation = function() {
        ssgame.currentLocation = ssgame.WellLocation.FAR;
        $( "#slider" ).slider("value", 0);
    }
    window.ssgame.middleWellLocation = function() {
        ssgame.currentLocation = ssgame.WellLocation.MIDDLE;
        $( "#slider" ).slider("value", 60);
    }
    window.ssgame.nearWellLocation = function() {
        ssgame.currentLocation = ssgame.WellLocation.NEAR;
        $( "#slider" ).slider("value", 120);
    }
    // pump level sliderT of the Transient Stream scenario
    window.ssgame.zeroPumpLevel = function() {
        ssgame.pumpLevel = ssgame.PumpLevel.ZERO;
        $( "#sliderT" ).slider("value", 0);
    }
    window.ssgame.lowPumpLevel = function() {
        ssgame.pumpLevel = ssgame.PumpLevel.LOW;
        $( "#sliderT" ).slider("value", 40);
    }
    window.ssgame.mediumPumpLevel = function() {
        ssgame.pumpLevel = ssgame.PumpLevel.MEDIUM;
        $( "#sliderT" ).slider("value", 80);
    }
    window.ssgame.highPumpLevel = function() {
        ssgame.pumpLevel = ssgame.PumpLevel.HIGH;
        $( "#sliderT" ).slider("value", 120);
    }
    window.ssgame.veryhighPumpLevel = function() {
        ssgame.pumpLevel = ssgame.PumpLevel.VERYHIGH;
        $( "#sliderT" ).slider("value", 160);
    }
    // OFF Pump Status
    window.ssgame.offPumpStatus = function () {
        ssgame.curPumpStatus = ssgame.PumpStatus.PUMPOFF;
        $( "#pumpcheck" ).prop("checked", false);
        changepumponoff(ssgame.PumpStatus.PUMPOFF);
    }
    window.ssgame.loadDepletionOn = function () {
        // set picture
        if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
            $( ".hgDisplay" ).hide();
            if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                $( "#depletionImg" ).attr("src", "images/donn.png");
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                $( "#depletionImg" ).attr("src", "images/donm.png");
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                $( "#depletionImg" ).attr("src", "images/donf.png");
            }
            $( ".hgNoDepletion" ).show();
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
            if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                $( "#depletionImg" ).attr("src", "images/lonn.png");
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                $( "#depletionImg" ).attr("src", "images/lonm.png");
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                $( "#depletionImg" ).attr("src", "images/lonf.png");
            }
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
            if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                $( "#depletionImg" ).attr("src", "images/gonn.png");
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                $( "#depletionImg" ).attr("src", "images/gonm.png");
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                $( "#depletionImg" ).attr("src", "images/gonf.png");
            }
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
            if (ssgame.pumpLevel == ssgame.PumpLevel.LOW) {
                $( "#depletionImg" ).attr("src", "images/tonl.png");
            }
            else if (ssgame.pumpLevel == ssgame.PumpLevel.MEDIUM) {
                $( "#depletionImg" ).attr("src", "images/tonm.png");
            }
            else if (ssgame.pumpLevel == ssgame.PumpLevel.HIGH) {
                $( "#depletionImg" ).attr("src", "images/tonh.png");
            }
            else if (ssgame.pumpLevel == ssgame.PumpLevel.VERYHIGH) {
                $( "#depletionImg" ).attr("src", "images/tonvh.png");
            }
        }
        // set vertical diff line, bottom dot line, and hgDisplay attribute;
        // The top values of #hgGWYDiff, #lbGWDepletion and #hgGWDotLineB need to change while switching scenarios;
        if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
            // change while switching scenarios 
            $( "#hgGWYDiff" ).css('top', '685px');
            $( "#lbGWDepletion" ).css('top', '688px');
            $( "#lbGWaterW" ).css('top', '709px');
            if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                $( "#hgYDiff .hgYDiffLine" ).height("9px");
                $( "#hgDotLineB" ).css('top', '708px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("9px");
                $( "#hgGWDotLineB" ).css('top', '704px');
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                $( "#hgYDiff .hgYDiffLine" ).height("1px");
                $( "#hgDotLineB" ).css('top', '700px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("1px");
                $( "#hgGWDotLineB" ).css('top', '696px');
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                $( "#hgYDiff .hgYDiffLine" ).height("0");
                $( "#hgDotLineB" ).css('top', '694px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("0");
                $( "#hgGWDotLineB" ).css('top', '690px');
            }
            $( ".hgDisplay" ).show();
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
            // change while switching scenarios 
            $( "#hgGWYDiff" ).css('top', '689px');
            $( "#lbGWDepletion" ).css('top', '692px');
            $( "#lbGWaterW" ).css('top', '709px');
            if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                $( "#hgYDiff .hgYDiffLine" ).height("9px");
                $( "#hgDotLineB" ).css('top', '708px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("9px");
                $( "#hgGWDotLineB" ).css('top', '710px');
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                $( "#hgYDiff .hgYDiffLine" ).height("1px");
                $( "#hgDotLineB" ).css('top', '700px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("1px");
                $( "#hgGWDotLineB" ).css('top', '701px');
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                $( "#hgYDiff .hgYDiffLine" ).height("0");
                $( "#hgDotLineB" ).css('top', '694px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("0");
                $( "#hgGWDotLineB" ).css('top', '696px');
            }
            $( ".hgDisplay" ).show();
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
            // change while switching scenarios 
            $( "#hgGWYDiff" ).css('top', '732px');
            $( "#lbGWDepletion" ).css('top', '734px');
            $( "#lbGWaterW" ).css('top', '750px');
            if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("1px");
                $( "#hgGWDotLineB" ).css('top', '741px');
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("0");
                $( "#hgGWDotLineB" ).css('top', '739px');
            }
            else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("0");
                $( "#hgGWDotLineB" ).css('top', '736px');
            }
            $( ".hgGWDisplay" ).show();
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
            // change while switching scenarios 
            $( "#hgGWYDiff" ).css('top', '685px');
            $( "#hgGWDotLineB" ).css('top', '688px');
            $( "#lbGWDepletion" ).css('top', '688px');
            if (ssgame.pumpLevel == ssgame.PumpLevel.LOW) {
                $( "#hgYDiff .hgYDiffLine" ).height("9px");
                $( "#hgDotLineB" ).css('top', '708px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("9px");
                $( "#hgGWDotLineB" ).css('top', '704px');
                $( "#lbGWaterW" ).css('top', '709px');
            }
            else if (ssgame.pumpLevel == ssgame.PumpLevel.MEDIUM) {
                $( "#hgYDiff .hgYDiffLine" ).height("12px");
                $( "#hgDotLineB" ).css('top', '711px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("20px");
                $( "#hgGWDotLineB" ).css('top', '714px');
                $( "#lbGWaterW" ).css('top', '717px');
            }
            else if (ssgame.pumpLevel == ssgame.PumpLevel.HIGH) {
                $( "#hgYDiff .hgYDiffLine" ).height("14px");
                $( "#hgDotLineB" ).css('top', '713px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("37px");
                $( "#hgGWDotLineB" ).css('top', '732px');
                $( "#lbGWaterW" ).css('top', '734px');
            }
            else if (ssgame.pumpLevel == ssgame.PumpLevel.VERYHIGH) {
                $( "#hgYDiff .hgYDiffLine" ).height("14px");
                $( "#hgDotLineB" ).css('top', '713px');
                $( "#hgGWYDiff .hgGWYDiffLine" ).height("45px");
                $( "#hgGWDotLineB" ).css('top', '740px');
                $( "#lbGWaterW" ).css('top', '741px');
            }
            $( ".hgDisplay" ).show();
        }
    }
    window.ssgame.loadDepletionOff = function () {
        $( ".hgNoDepletion" ).hide();
        $( ".hgDisplay" ).hide();
        $( ".hgGWDisplay" ).hide();
        if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
            $( "#lbGWaterO" ).css('top', '710px');
            $( "#hgGWDotLineT" ).css('top', '732px');
            $( "#depletionImg" ).attr("src", "images/doff.png");
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
            $( "#lbGWaterO" ).css('top', '668px');
            $( "#hgGWDotLineT" ).css('top', '690px');
            $( "#depletionImg" ).attr("src", "images/loff.png");
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
            $( "#lbGWaterO" ).css('top', '663px');
            $( "#hgGWDotLineT" ).css('top', '685px');
            $( "#depletionImg" ).attr("src", "images/goff.png");
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
            $( "#lbGWaterO" ).css('top', '663px');
            $( "#hgGWDotLineT" ).css('top', '685px');
            $( "#depletionImg" ).attr("src", "images/toff.png");
        }
    }
    window.ssgame.enablemenuitem = function(menuitem) {
        $( "#sceneoptions option" ).attr("disabled", true);
        $( '#sceneoptions option[value="' + menuitem + '"]' ).attr("disabled", false);
        $( "#sceneoptions" ).selectmenu("refresh");
    }
    window.ssgame.enableallmenuitems = function() {
        $( "#sceneoptions option" ).attr("disabled", false);
        $( "#sceneoptions" ).selectmenu("refresh");
    }
    function changescene(scene) {
        window.ssgame.initStatus();
        switch (scene) {
            case "Gaining Stream":
                ssgame.currentScene = ssgame.StreamScenes.GAININGSTREAM;
                $( ".visG" ).show();
                $( ".visL" ).hide();
                $( ".visD" ).hide();
                $( ".visT" ).hide();
                exportRoot.gotoAndStop("GFAROFF");
                break;
            case "Losing Stream":
                ssgame.currentScene = ssgame.StreamScenes.LOSINGSTREAM;
                $( ".visG" ).hide();
                $( ".visL" ).show();
                $( ".visD" ).hide();
                $( ".visT" ).hide();
                exportRoot.gotoAndStop("LFAROFF");
                break;
            case "Disconnected Stream":
                ssgame.currentScene = ssgame.StreamScenes.DISCONNECTED;
                $( ".visG" ).hide();
                $( ".visL" ).hide();
                $( ".visD" ).show();
                $( ".visT" ).hide();
                exportRoot.gotoAndStop("DFAROFF");
                break;
            case "Transient Stream":
                ssgame.currentScene = ssgame.StreamScenes.TRANSIENTSTREAM;
                $( ".visG" ).hide();
                $( ".visL" ).hide();
                $( ".visD" ).hide();
                $( ".visT" ).show();
                exportRoot.gotoAndStop("TLOWOFF");
                break;
        }
        if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
            $( ".visNonT" ).hide();
        }
        else {
            $( ".visNonT" ).show();
        }
        showwpage(scene);
    }
    function changepumponoff(pumponoff) {
        switch (pumponoff) {
            case ssgame.PumpStatus.PUMPOFF:
                ssgame.curPumpStatus = ssgame.PumpStatus.PUMPOFF;
                break;
            case ssgame.PumpStatus.PUMPON:
                ssgame.curPumpStatus = ssgame.PumpStatus.PUMPON;
                break;
        }
        if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
            if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
                if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                    exportRoot.gotoAndStop("GNEAROFF");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                    exportRoot.gotoAndStop("GFAROFF");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                    exportRoot.gotoAndStop("GMIDDLEOFF");
                }
            } else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
                if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                    exportRoot.gotoAndStop("LNEAROFF");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                    exportRoot.gotoAndStop("LFAROFF");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                    exportRoot.gotoAndStop("LMIDDLEOFF");
                }
            } else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
                if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                    exportRoot.gotoAndStop("DNEAROFF");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                    exportRoot.gotoAndStop("DFAROFF");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                    exportRoot.gotoAndStop("DMIDDLEOFF");
                }
            }
        }
        else {
            if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
                if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                    exportRoot.gotoAndPlay("GNEARON");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                    exportRoot.gotoAndPlay("GFARON");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                    exportRoot.gotoAndPlay("GMIDDLEON");
                }
            } else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
                if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                    exportRoot.gotoAndPlay("LNEARON");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                    exportRoot.gotoAndPlay("LFARON");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                    exportRoot.gotoAndPlay("LMIDDLEON");
                }
            } else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
                if (ssgame.currentLocation == ssgame.WellLocation.NEAR) {
                    exportRoot.gotoAndPlay("DNEARON");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.FAR) {
                    exportRoot.gotoAndPlay("DFARON");
                }
                else if (ssgame.currentLocation == ssgame.WellLocation.MIDDLE) {
                    exportRoot.gotoAndPlay("DMIDDLEON");
                }
            }
        }
    }
    // pull down menu
    $( "#sceneoptions" ).selectmenu({
        width: 246,
        change: function( event, data ) {
            changescene(data.item.value);
        }
    });
    // Slider, label, ticks, etc
    $( "#slider" ).slider({
        value:0,
        min: 0,
        max: 120,
        step: 1,
        orientation: "horizontal",
        change: function( event, ui ) {
            if (ui.value >= 90 && ui.value < 120) {
                ssgame.nearWellLocation();
                return;
            }
            else if (ui.value > 60 && ui.value < 90 || ui.value >= 30 && ui.value < 60) {
                ssgame.middleWellLocation();
                return;
            }
            else if (ui.value > 0 && ui.value < 30) {
                ssgame.farWellLocation();
                return;
            }
            var framenumber = Math.floor(ui.value * lib.properties.fps / 120);
            // 0, 12, 24;
            if (framenumber == 24) {
                ssgame.currentLocation = ssgame.WellLocation.NEAR;
                slideroperations("GNEAROFF", "GNEARONEND", "LNEAROFF", "LNEARONEND", "DNEAROFF", "DNEARONEND");
            }
            else if (framenumber == 12) {
                ssgame.currentLocation = ssgame.WellLocation.MIDDLE;
                slideroperations("GMIDDLEOFF", "GMIDDLEONEND", "LMIDDLEOFF", "LMIDDLEONEND", "DMIDDLEOFF", "DMIDDLEONEND");
            }
            else if (framenumber == 0) {
                ssgame.currentLocation = ssgame.WellLocation.FAR;
                slideroperations("GFAROFF", "GFARONEND", "LFAROFF", "LFARONEND", "DFAROFF", "DFARONEND");
            }
        }
    });
    $( ".sliderFlabel" ).on("click", function() {
        ssgame.farWellLocation();
    });
    $( ".sliderMlabel" ).on("click", function() {
        ssgame.middleWellLocation();
    });
    $( ".sliderNlabel" ).on("click", function() {
        ssgame.nearWellLocation();
    });
    $( "#sliderhtick" ).on("click", function() {
        ssgame.farWellLocation();
    });
    $( "#slidermtick" ).on("click", function() {
        ssgame.middleWellLocation();
    });
    $( "#sliderltick" ).on("click", function() {
        ssgame.nearWellLocation();
    });
    // Pump Level Slider, label, ticks, etc
    $( "#sliderT" ).slider({
        value:0,
        min: 0,
        max: 160,
        step: 1,
        orientation: "vertical",
        change: function( event, ui ) {
            if (ui.value >= 140 && ui.value < 160) {
                ssgame.veryhighPumpLevel();
                return;
            }
            else if (ui.value > 120 && ui.value < 140 || ui.value >= 100 && ui.value < 120) {
                ssgame.highPumpLevel();
                return;
            }
            else if (ui.value > 80 && ui.value < 100 || ui.value >= 60 && ui.value < 80) {
                ssgame.mediumPumpLevel();
                return;
            }
            else if (ui.value > 40 && ui.value < 60 || ui.value >= 20 && ui.value < 40) {
                ssgame.lowPumpLevel();
                return;
            }
            else if (ui.value > 0 && ui.value < 20) {
                ssgame.zeroPumpLevel();
                return;
            }
            // framenumber (ui.value): 0 (160), 6 (120), 12 (80), 18 (40), 24 (0);
            var framenumber = Math.floor((160 - ui.value) * lib.properties.fps / 160);
            // 0, 6, 12, 18, 24;
            if (framenumber == 24) {
                ssgame.pumpLevel = ssgame.PumpLevel.ZERO;
                exportRoot.gotoAndStop("TLOWOFF");
            }
            else if (framenumber == 18) {
                ssgame.pumpLevel = ssgame.PumpLevel.LOW;
                exportRoot.gotoAndStop("TLOWONEND");
            }
            else if (framenumber == 12) {
                ssgame.pumpLevel = ssgame.PumpLevel.MEDIUM;
                exportRoot.gotoAndStop("TMEDIUMONEND");
            }
            else if (framenumber == 6) {
                ssgame.pumpLevel = ssgame.PumpLevel.HIGH;
                exportRoot.gotoAndStop("THIGHONEND");
            }
            else if (framenumber == 0) {
                ssgame.pumpLevel = ssgame.PumpLevel.VERYHIGH;
                exportRoot.gotoAndStop("TVERYHIGHONEND");
            }
        }
    });
    $( "#sliderTvhtick" ).on("click", function() {
        ssgame.veryhighPumpLevel();
    });
    $( "#sliderThtick" ).on("click", function() {
        ssgame.highPumpLevel();
    });
    $( "#sliderTmtick" ).on("click", function() {
        ssgame.mediumPumpLevel();
    });
    $( "#sliderTltick" ).on("click", function() {
        ssgame.lowPumpLevel();
    });
    $( "#sliderTztick" ).on("click", function() {
        ssgame.zeroPumpLevel();
    });
    $( ".sliderTvhlabel" ).on("click", function() {
        ssgame.veryhighPumpLevel();
    });
    $( ".sliderThlabel" ).on("click", function() {
        ssgame.highPumpLevel();
    });
    $( ".sliderTmlabel" ).on("click", function() {
        ssgame.mediumPumpLevel();
    });
    $( ".sliderTllabel" ).on("click", function() {
        ssgame.lowPumpLevel();
    });
    $( ".sliderTzlabel" ).on("click", function() {
        ssgame.zeroPumpLevel();
    });
    $( "#pumpcheck" ).on("click", function() {
        // pump on;
       if ($("#pumpcheck").prop("checked")) {
           changepumponoff(ssgame.PumpStatus.PUMPON);
       }
       else {
           changepumponoff(ssgame.PumpStatus.PUMPOFF);
       }
    });
    $( "#tutorialexit" ).on("click", function() {
        window.ssgame.currentStep = ssgame.TutorialStep.STEP_END;
        showtpage(window.ssgame.currentStep);
    });
    $( "#tutorialprevious" ).on("click", function() {
        window.ssgame.currentStep--;
        showtpage(window.ssgame.currentStep);
    });
    $( "#tutorialnext" ).on("click", function() {
        window.ssgame.currentStep++;
        showtpage(window.ssgame.currentStep);
    });
    $( "#soundonoff" ).on("click", function() {
        if (window.ssgame.soundOn) {
            window.ssgame.soundOn = false;
            $( "#MySound").trigger("pause");
            $( "#soundonoff" ).css("background-image", "url(images/speechoff.png)");
        }
        else {
            window.ssgame.soundOn = true;
            $( "#MySound").trigger("play");
            $( "#soundonoff" ).css("background-image", "url(images/speechon.png)");
        }
    });
    $( "#turnontutorial" ).on("click", function() {
        if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
            ssgame.currentStep = ssgame.TutorialStep.STEP_1;
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
            ssgame.currentStep = ssgame.TutorialStep.STEP_6;
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
            ssgame.currentStep = ssgame.TutorialStep.STEP_11;
        }
        else if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
            ssgame.currentStep = ssgame.TutorialStep.STEP_16;
        }
        showtpage(window.ssgame.currentStep);
    });

} );

function slideroperations(goff, gon, loff, lon, doff, don) {
    if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
        if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
            exportRoot.gotoAndStop(goff);
        }
        else {
            exportRoot.gotoAndStop(gon);
        }
    } else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
        if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
            exportRoot.gotoAndStop(loff);
        }
        else {
            exportRoot.gotoAndStop(lon);
        }
    } else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
        if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
            exportRoot.gotoAndStop(doff);
        }
        else {
            exportRoot.gotoAndStop(don);
        }
    }
}

window.ssgame.initStatus = function () {
    // The well position is FAR for the first three scenarios and NEAR for the Transient Stream.
    // zeroPumpLevel() will change the well location to the NEAR position
    // farWellLocation() will change the well location to the FAR position
    ssgame.zeroPumpLevel();
    ssgame.offPumpStatus();
    ssgame.farWellLocation();
}

function init() {
    canvas = document.getElementById("canvas");
    window.ssgame = window.ssgame||{};
    ssgame.currentScene = ssgame.StreamScenes.GAININGSTREAM;
    ssgame.currentStep = ssgame.TutorialStep.STEP_START;
    window.ssgame.soundOn = false;
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
    exportRoot = new lib.streamscenario();
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();
    createjs.Touch.enable(stage);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

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
    
    window.ssgame.initStatus();
}
