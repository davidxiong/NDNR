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
    if (window.ssgame.soundOn) {
        audio.play();
    }
}
// setup the audio files without welcome page or tutorial page;
function setupaudiofiles() {
    if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
        setuponeaudiofile('audios/ssgs.mp3');
    }
    else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
        setuponeaudiofile('audios/ssls.mp3');
    }
    else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
        setuponeaudiofile('audios/ssds.mp3');
    }
    else if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
        setuponeaudiofile('audios/ssas.mp3');
    }
}

function wpdone() {
    displaywpage(false);
    if (ssgame.currentStep != ssgame.TutorialStep.STEP_END) {
        showtpage(ssgame.currentStep);
    }
    else {
        setupaudiofiles();
    }
}

// the ssgame.currentStep value of tutorial is decided by the "goto ... page" step of showtpage() in streamtutorial.js
function showwpage(scene) {
    if (ssgame.currentScene == ssgame.StreamScenes.GAININGSTREAM) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Welcome!</b><br>NeDNR has developed computer simulations to illustrate how groundwater pumping may <span class="tooltip">deplete<span class="tooltiptext">Stream depletion is reduction in streamflow due to groundwater pumping in a system in which surface water and groundwater are connected.</span></span> streamflow under three different hydrologic systems: <span class="tooltip">gaining stream<span class="tooltiptext">A gaining stream is one where water flows from the aquifer towards the stream.</span></span>, <span class="tooltip">losing stream<span class="tooltiptext">A losing stream is one where water flows from a stream towards the aquifer.</span></span>, and <span class="tooltip">disconnected stream<span class="tooltiptext">A disconnected stream is separated from the water table by unsaturated soil or rock.</span></span>. To begin, explore how a gaining stream responds to pumping.</p><p><b>Gaining Stream</b><br>The purpose of the first simulation is to depict the relationship between groundwater pumping and the flow of a gaining stream. Change the well location and adjust pumping, then observe how the stream depth and <span class="tooltip">water table<span class="tooltiptext">The upper level of the underground area in which the soil and rocks are saturated with water.</span></span> respond.</p><img id="wpstreamimg" src="images/wpageG.jpeg" alt="Stream pumping illustration">';
        setuponeaudiofile('audios/wpgs.mp3');
        if (ssgame.currentStep != ssgame.TutorialStep.STEP_END) {
            displaytpage(false);
            ssgame.currentStep = ssgame.TutorialStep.STEP_1;
        }
    }
    else if (ssgame.currentScene == ssgame.StreamScenes.LOSINGSTREAM) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Losing Stream</b><br><br>The purpose of this simulation is to depict the relationship between groundwater pumping and the flow of a <span class="tooltip">losing stream<span class="tooltiptext">A losing stream is one where water flows from a stream towards the aquifer.</span></span>. Change the well location and adjust pumping, then observe how the stream depth and <span class="tooltip">water table<span class="tooltiptext">The upper level of the underground area in which the soil and rocks are saturated with water.</span></span> respond.</p><img id="wpstreamimg" src="images/wpageL.jpeg" alt="Stream pumping illustration">';
        setuponeaudiofile('audios/wpls.mp3');
        if (ssgame.currentStep != ssgame.TutorialStep.STEP_END) {
            displaytpage(false);
            ssgame.currentStep = ssgame.TutorialStep.STEP_6;
        }
    }
    else if (ssgame.currentScene == ssgame.StreamScenes.DISCONNECTED) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Disconnected Stream</b><br><br>The purpose of this simulation is to depict the relationship between groundwater pumping and the flow of a <span class="tooltip">disconnected stream<span class="tooltiptext">A disconnected stream is separated from the water table by unsaturated soil or rock.</span></span>. Change the well location and adjust pumping, then observe how the stream depth and <span class="tooltip">water table<span class="tooltiptext">The upper level of the underground area in which the soil and rocks are saturated with water.</span></span> respond.</p><img id="wpstreamimg" src="images/wpageD.jpeg" alt="Stream pumping illustration">';
        setuponeaudiofile('audios/wpds.mp3');
        if (ssgame.currentStep != ssgame.TutorialStep.STEP_END) {
            displaytpage(false);
            ssgame.currentStep = ssgame.TutorialStep.STEP_11;
        }
    }
    else if (ssgame.currentScene == ssgame.StreamScenes.TRANSIENTSTREAM) {
        document.getElementById("wpmainpane").innerHTML = '<p><b>Transient Stream</b><br><br>The purpose of this simulation is to depict how groundwater pumping alters the connectivity of a stream to its adjacent aquifer. Pumping rate affects aquifers and their adjacent streams just like well location. Excessive pumping can lower the groundwater level such that a <span class="tooltip">gaining stream<span class="tooltiptext">A gaining stream is one where water flows from the aquifer towards the stream.</span></span> can become a <span class="tooltip">losing stream<span class="tooltiptext">A losing stream is one where water flows from a stream towards the aquifer.</span></span>, or a losing stream a <span class="tooltip">disconnected stream<span class="tooltiptext">A disconnected stream is separated from the water table by unsaturated soil or rock.</span></span>. Change the well pumping rate and observe how the stream depth, <span class="tooltip">water table<span class="tooltiptext">The upper level of the underground area in which the soil and rocks are saturated with water.</span></span>, and stream connectivity respond.</p><img id="wpstreamimg" src="images/wpageT.gif" alt="Stream pumping illustration">';
        setuponeaudiofile('audios/wpas.mp3');
        if (ssgame.currentStep != ssgame.TutorialStep.STEP_END) {
            displaytpage(false);
            ssgame.currentStep = ssgame.TutorialStep.STEP_16;
        }
    }
    displaywpage(true);
}
