"use strict";
(function() {
    window.lsgame = window.lsgame || {};
    var LagScenes = {
        LAGEFFECT:0,
        SDF:1
    }
    var PumpStatus = {
        PUMPOFF:10,
        PUMPON:11
    }
    var WellLocation = {
        NEAR:20,
        FAR:22
    }
    var COLORS = {
        LIGHT_WHITE: "rgb(237,240,242)",
        LIGHT_GREEN: "rgb(186,191,51)",
        LIGHT_ORANGE: "rgb(255,200,67)",
        DARK_RED: "rgb(187,31,83)",
        BLACK: "rgb(0,0,0)"
    }
    var CONSTS = {
        X_NUM_POINTS: 300,
        X_MIN: 50,
        Y_MAX: 180,
        // var w = 400;
        // var h = 200;
        // var xL = 0.1 * w + 10; // 50
        // var xR = 0.9 * w + 10; // 370
        // var yT = 0.05 * h; // 10
        // var yB = 0.9 * h;  // 180
        X_L: 50,
        X_R: 370,
        Y_T: 10,
        Y_B: 180,
        // var xL = 420;
        // var xR = xL + 50;
        // var yB = lsgame.CONSTS.Y_B;
        // var yT = yB - 120;
        X_L_BAR: 420,
        X_R_BAR: 470,
        X_T_BAR: 60,
        X_B_BAR: 180,
        MAX_YEAR: 50
    }
    var PrevWell = {
        prevArea: null,
        SDF: 0,
        posArray: []
    }
    var HotSpot = {
        dotContainer: null,
        barContainer: null
    }
    var TimeLag = {
        TL_OX: 60,
        TL_OXR: 380,
        TL_OY: 10,
        TL_OYB: 180,
        tlCompContainer: null,
        // equal to the maximum frames
        TL_NX_POINTS: 160,
        TL_FX_POINTS: 320,
        tlPrevPoint: 0,
        tlContainer: null,
        tlShape: null,
        lagArrN: [],
        lagArrF: []
    }
    var SdfArea = {
        saAreas: [],
        saCurArea: null,
        saTenFifty: null
    }
    
    window.lsgame.LagScenes = LagScenes;
    window.lsgame.PumpStatus = PumpStatus;
    window.lsgame.WellLocation = WellLocation;
    window.lsgame.CONSTS = CONSTS;
    window.lsgame.PrevWell = PrevWell;
    window.lsgame.HotSpot = HotSpot;
    window.lsgame.COLORS = COLORS;
    window.lsgame.TimeLag = TimeLag;
    window.lsgame.SdfArea = SdfArea;
}());