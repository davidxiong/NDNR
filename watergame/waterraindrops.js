"use strict";
var lib, createjs, stage, exportRoot, stageHG;
(function() {
    window.wsgame.rainField = new createjs.Container();

    // raining related functions;
    window.wsgame.MyRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /*
    // test the raindrops according to three segments of the testLine below;
    this.testLine = new cjs.Shape();
    this.testLine.graphics.beginStroke("#ffffff").moveTo(0,340).lineTo(900,440).lineTo(1055,495).lineTo(1224,495);
    stage.addChild(this.testLine);
    // rainDrop height = 50;
    */
    window.wsgame.CalMaxY = function(x) {
        var maxY;
        if (x >= 0 && x < 900) {
            maxY = x * 100 / 900 + 290;
        } else if (x >= 900 && x < 1055) {
            maxY = (x - 900 ) * 55 / 155 + 390;
        } else {
            maxY = 445;
        }
        return maxY;
    }

    window.wsgame.GenRainDropY = function(x) {
        return window.wsgame.MyRandom(-200, window.wsgame.CalMaxY(x));
    }

    window.wsgame.CreateRainDrops = function(raindrops) {
        var rainDrop;
        for (var i = raindrops - 1; i >= 0; i--) {
            rainDrop = new lib.RainDrop();
            rainDrop.x = window.wsgame.MyRandom(0, stage.canvas.width);
            rainDrop.y = window.wsgame.GenRainDropY(rainDrop.x);
            window.wsgame.rainField.addChild(rainDrop);
        }
    }

    window.wsgame.Raining = function(e) {
        if (window.wsgame.isRaining) {
            var rainDrop;
            for (var i = window.wsgame.rainField.numChildren - 1; i >= 0; i--) {
                rainDrop = window.wsgame.rainField.getChildAt(i);
                rainDrop.y += 10;
                if (rainDrop.y > window.wsgame.CalMaxY(rainDrop.x)) {
                    rainDrop.y = window.wsgame.GenRainDropY(rainDrop.x);
                }
            }
        }
    }

    window.wsgame.RainingTickerOff = function() {
        if (window.wsgame.rainingTicker != null) {
            createjs.Ticker.off("tick", window.wsgame.rainingTicker);
            window.wsgame.rainingTicker = null;
        }
    }

    window.wsgame.RainingTickerOn = function() {
        window.wsgame.RainingTickerOff();
        window.wsgame.rainingTicker = createjs.Ticker.on("tick", this.Raining, exportRoot);
    }
    
    window.wsgame.addRemoveHgContainer = function(bAdd) {
        var index = stageHG.getChildIndex(window.wsgame.hgContainer);
        if (bAdd == true) {
            if (index == -1) {
                stageHG.addChild(window.wsgame.hgContainer);
            }
        }
        else {
            if (index != -1) {
                stageHG.removeChildAt(index);
            }
        }
    }
    
    window.wsgame.addRemoveRainField = function(bAdd) {
        var index = exportRoot.darkening.getChildIndex(window.wsgame.rainField);
        if (bAdd == true) {
            if (index == -1) {
                exportRoot.darkening.addChild(window.wsgame.rainField);
            }
        }
        else {
            if (index != -1) {
                exportRoot.darkening.removeChildAt(index);
            }
        }
    }

    window.wsgame.addRemoveRainFieldTwo = function(bAdd) {
        var index = exportRoot.getChildIndex(window.wsgame.rainField);
        if (bAdd == true) {
            if (index == -1) {
                exportRoot.addChild(window.wsgame.rainField);
            }
        }
        else {
            if (index != -1) {
                exportRoot.removeChildAt(index);
            }
        }
    }
    
    window.wsgame.SetupWaterTable = function() {
        // handling rain drops;
        window.wsgame.RainingTickerOff();
        window.wsgame.isRaining = false;
        exportRoot.darkening.visible = false;
        window.wsgame.rainField.removeAllChildren();
        window.wsgame.addRemoveRainField(false);
        window.wsgame.addRemoveRainFieldTwo(false);
        // handling hgContainer;
        window.wsgame.addRemoveHgContainer(false);
    }
    
    window.wsgame.SetupPrecipitation = function(alpha, raindrops, specificHgContainer) {
        // handling rain drops;
        window.wsgame.isRaining = true;
        exportRoot.darkening.visible = true;
        exportRoot.darkening.alpha = alpha;
        window.wsgame.rainField.removeAllChildren();
        window.wsgame.CreateRainDrops(raindrops);
        window.wsgame.addRemoveRainField(true);
        window.wsgame.addRemoveRainFieldTwo(false);
        window.wsgame.RainingTickerOn();
        // handling hgContainer;
        window.wsgame.hgContainer.removeAllChildren();
        window.wsgame.hgContainer.addChild(specificHgContainer);
        window.wsgame.addRemoveHgContainer(true);
    }

    window.wsgame.SetupSoilTexture = function(specificHgContainer) {
        // handling rain drops;
        window.wsgame.isRaining = true;
        exportRoot.darkening.visible = false;
        window.wsgame.rainField.removeAllChildren();
        // the rainField cannot be added to the darkening as it is not visible;
        window.wsgame.addRemoveRainField(false);
        window.wsgame.CreateRainDrops(40);
        window.wsgame.addRemoveRainFieldTwo(true);
        window.wsgame.RainingTickerOn();
        // handling hgContainer;
        window.wsgame.hgContainer.removeAllChildren();
        window.wsgame.hgContainer.addChild(specificHgContainer);
        window.wsgame.addRemoveHgContainer(true);
    }
    window.wsgame.SetupSoilTexture2 = function() {
        // handling rain drops;
        window.wsgame.RainingTickerOff();
        window.wsgame.isRaining = false;
        window.wsgame.rainField.removeAllChildren();
        // the rainField cannot be added to the darkening as it is not visible;
        window.wsgame.addRemoveRainField(false);
        window.wsgame.addRemoveRainFieldTwo(false);
    }
}());