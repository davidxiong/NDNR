"use strict";
(function() {
    window.ssgame = window.ssgame || {};
    var StreamScenes = {
        GAININGSTREAM:30,
        LOSINGSTREAM:31,
        DISCONNECTED:32,
        TRANSIENTSTREAM:33
    }
    var PumpStatus = {
        PUMPOFF:10,
        PUMPON:11
    }
    var WellLocation = {
        NEAR:20,
        MIDDLE:21,
        FAR:22
    }
    var PumpLevel = {
        ZERO:40,
        LOW:41,
        MEDIUM:42,
        HIGH:43,
        VERYHIGH:44
    }
    var TutorialStep = {
        STEP_START:0,
        STEP_1:1,
        STEP_2:2,
        STEP_3:3,
        STEP_4:4,
        STEP_5:5,
        STEP_6:6,
        STEP_7:7,
        STEP_8:8,
        STEP_9:9,
        STEP_10:10,
        STEP_11:11,
        STEP_12:12,
        STEP_13:13,
        STEP_14:14,
        STEP_15:15,
        STEP_16:16,
        STEP_17:17,
        STEP_18:18,
        STEP_19:19,
        STEP_END:20
    }

    window.ssgame.StreamScenes = StreamScenes;
    window.ssgame.PumpStatus = PumpStatus;
    window.ssgame.WellLocation = WellLocation;
    window.ssgame.PumpLevel = PumpLevel;
    window.ssgame.TutorialStep = TutorialStep;
}());