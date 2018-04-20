"use strict";
function displaywpage(display) {
    var cStyle = document.getElementById("wpbkgshade").style;
    if (display) {
        cStyle.display = "block";
        cStyle.zIndex = 5;
    }
    else {
        cStyle.display = "none";
        cStyle.zIndex = -5;
    }
}

function setuponeaudiofile(afname) {
    var audio = document.getElementById("MySound");
        // set the corresponding audio file src;
    audio.src = afname;
    if (window.wsgame.soundOn) {
        audio.play();
    }
}
// setup the audio files without welcome page or tutorial page;
function setupaudiofiles() {
    if (wsgame.currentScene == wsgame.WaterScenes.WATER_TABLE) {
        setuponeaudiofile('audios/wswt.mp3');
    }
    else if (wsgame.currentScene == wsgame.WaterScenes.PRECIPITATION) {
        setuponeaudiofile('audios/wsp.mp3');
    }
    else if (wsgame.currentScene == wsgame.WaterScenes.SOIL) {
        setuponeaudiofile('audios/wsst.mp3');
    }
}

function wpdone() {
    displaywpage(false);
    if (wsgame.currentStep != wsgame.TutorialStep.STEP_END) {
        showtpage(wsgame.currentStep);
    }
    else {
        setupaudiofiles();
    }
}

// the wsgame.currentStep value of tutorial is decided by the "goto ... page" step of showtpage() in watertutorial.js
function showwpage(scene) {
    //document.getElementById("wpheadpane").innerHTML = scene;
    if (wsgame.currentScene == wsgame.WaterScenes.WATER_TABLE) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Welcome!</b><br>NeDNR has developed three computer simulations to illustrate the interaction of surface water and groundwater. To begin, explore how changing the elevation of the water table affects this interaction.</p><p><b>Water Table</b><br>The purpose of this simulation is to illustrate the interaction between surface water and groundwater, focusing on how the relative position of the <span class="tooltip">water table<span class="tooltiptext">The water table is the upper level of the underground area in which the soil and rocks are saturated with water.</span></span> and stream levels affects the direction of flow and rate of interaction between the stream and the <span class="tooltip">aquifer<span class="tooltiptext">An aquifer is the area saturated with water beneath the water table.</span></span> (i.e., whether a stream is a <span class="tooltip">gaining<span class="tooltiptext">A stream is gaining in reaches where water flows from the aquifer towards the stream.</span></span> or <span class="tooltip">losing stream<span class="tooltiptext">A stream is losing in reaches where water flows from a stream towards the aquifer.</span></span>).</p><img id="wpwatercycleimg" src="images/wpageW.png" alt="Water cycle illustration">';
        setuponeaudiofile('audios/wpwt.mp3');
        if (wsgame.currentStep != wsgame.TutorialStep.STEP_END) {
            displaytpage(false);
            wsgame.currentStep = wsgame.TutorialStep.STEP_1;
        }
    }
    else if (wsgame.currentScene == wsgame.WaterScenes.PRECIPITATION) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Precipitation</b><br><br>The purpose of this simulation is to illustrate how <span class="tooltip">precipitation<span class="tooltiptext">Precipitation, in the form of rain, snow, or hail, provides a primary avenue of transporting atmospheric water to the land surface.</span></span> influences <span class="tooltip">runoff<span class="tooltiptext">Runoff is water that drains across the surface of an area of land.</span></span>, and, in turn, how runoff influences streamflow. During a rainfall event, some of the rain water becomes surface runoff and some is intercepted by the land surface and vegetation (part of which will finally <span class="tooltip">infiltrate<span class="tooltiptext">Infiltration is the process by which water on the ground surface enters the soil.</span></span> and <span class="tooltip">recharge<span class="tooltiptext">Recharge is a process where water moves downward into groundwater.</span></span> the <span class="tooltip">aquifer<span class="tooltiptext">An aquifer is the area saturated with water beneath the water table.</span></span>). Runoff is more responsive to the rainfall than recharge, and thus dominates the change in streamflow.</p><img id="wpwatercycleimg" src="images/wpageP.png" alt="Water cycle illustration">';
        setuponeaudiofile('audios/wpp.mp3');
        if (wsgame.currentStep != wsgame.TutorialStep.STEP_END) {
            displaytpage(false);
            wsgame.currentStep = wsgame.TutorialStep.STEP_4;
        }
    }
    else if (wsgame.currentScene == wsgame.WaterScenes.SOIL) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Soil Texture</b><br><br>The purpose of this simulation is to illustrate how soil texture influences <span class="tooltip">recharge<span class="tooltiptext">Recharge is a process where water moves downward into groundwater.</span></span> and streamflow. The user can adjust the texture of soil from fine soil (like clay) to course soil (like sand and loam). This impacts how much water will <span class="tooltip">infiltrate<span class="tooltiptext">Infiltration is the process by which water on the ground surface enters the soil.</span></span> the soil.</p><img id="wpwatercycleimg" src="images/wpageS.png" alt="Water cycle illustration">';
        setuponeaudiofile('audios/wpst.mp3');
        if (wsgame.currentStep != wsgame.TutorialStep.STEP_END) {
            displaytpage(false);
            wsgame.currentStep = wsgame.TutorialStep.STEP_8;
        }
    }
    displaywpage(true);
}
