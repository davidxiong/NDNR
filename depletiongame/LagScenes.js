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
        OFFSET_X: 24,
        OFFSET_Y: 56,
        W_OUTSIDE: 60,
        H_OUTSIDE: 60,
        W_WELL: 32,
        H_WELL: 48,
        W_UNITS_TO_RIVER: 16,
        // 100 / 16 = 6.25
        W_SDF_UNIT_DIFF: 6.25,
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
        x: -1,
        y: -1,
        SDF: 0,
        posArray: []
    }
    var HotSpot = {
        dotContainer: null,
        barContainer: null
    }
    var TimeLag = {
        TL_OX: 50,
        TL_OY: 180,
        // equal to the maximum frames
        TL_X_POINTS: 160,
        tlPrevPoint: 0,
        tlContainer: null,
        tlShape: null,
        lagArrN: [],
        lagArrF: []
    }
    var SdfArea = {
        saContainer: null,
        saCurrent: null
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