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

function wpdone() {
    displaywpage(false);
}

function showwpage(scene) {
    document.getElementById("wpheadpane").innerHTML = scene;
    if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
        document.getElementById("wpmainpane").innerHTML = '<p>There is usually a time lag between the start of pumping and the rate of stream depletion reaching equilibrium, which is affected by the distance between the well and the stream, as well as the hydraulic conductivity of aquifer. The longer distance of a pumping well from a stream, the larger time lag. The lower hydraulic conductivity of aquifer, the longer time lag.</p>';
    }
    else if (lsgame.currentScene == lsgame.LagScenes.SDF) {
        document.getElementById("wpmainpane").innerHTML = '<p>Nebraska Department of Natural Resources (NDNR) considers hydrologically connected area, a.k.a. the “10/50 Area”,  to be the area in which pumping of a well for 50 years would deplete streamflow by at least 10 percent of the amount pumped. The area with SDF equal to or above 0.1 is regarded as the area where groundwater and surface water are hydrologically connected.</p>';
    }
    displaywpage(true);
}
