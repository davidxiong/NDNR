(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1224,
	height: 576,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/streamscenario_atlas_.png", id:"streamscenario_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"streamscenario_atlas_", frames: [[0,578,696,132],[1248,233,9,7],[1259,224,9,7],[1248,224,9,7],[1226,0,20,262],[1248,0,20,222],[1270,195,18,36],[1226,264,65,78],[0,0,1224,576],[1270,150,25,43],[1270,100,27,48],[1270,0,27,48],[1270,50,27,48]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.cornpng = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.handle = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.handle_1 = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.handle_2 = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pipe = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pipe_1 = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.screenpng = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sprayingwaterpng = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.streambgd = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.watersquigglepng = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wellhead = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.wellhead_1 = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.wellhead_2 = function() {
	this.spriteSheet = ss["streamscenario_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.watersquiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.watersquigglepng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,43);


(lib.SymWellL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handle_2();
	this.instance.parent = this;
	this.instance.setTransform(23,15);

	this.instance_1 = new lib.wellhead_2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.pipe_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,263);


(lib.SymWellhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handle();
	this.instance.parent = this;
	this.instance.setTransform(23,15);

	this.instance_1 = new lib.wellhead();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,48);


(lib.SymWell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.handle_1();
	this.instance.parent = this;
	this.instance.setTransform(23,15);

	this.instance_1 = new lib.wellhead_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.pipe();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,303);


(lib.SymWaterTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhFhFICLAAIhGCLg");
	this.shape.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.SymWaterFlow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("Agfg9YAAAAAAAAgBACYgBACgCACgBADYgBADgCAEgBAEYgBADgBAFAAAEYgBAIAAAJADAIYAEAGAJAFAGAHYAEADADAEAEADYAEADAEADACACYAEADADADADADYAEACADADACACYALAKAHAHAAAAYABACADAAACgCYABgBAAgBAAgCYAAAAgCgJgDgOYAAgEgBgEAAgEYgBgEAAgFgBgEYAAgFAAgFAAgDYgBgFAAgFgBgEYgDgKABgKgFgHYgEgIgIgFgHgDYgEgCgEgCgCgBYgEgBgDgBgEAAYgDgBgDAAgCAAYgCAAgBAAAAAAYgDAAgCABgCAD");
	this.shape.setTransform(2.9,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AgPBFYAAAAABAAACgBYACAAADAAADgBYADgBABgBAEgCYAEgBADgCAEgCYAHgFAHgFAEgIYAEgHgBgLABgJYABgFAAgFAAgDYAAgFgBgFAAgEYAAgFAAgEAAgFYAAgEABgEAAgDYABgPABgJAAAAYAAgCgCgDgCAAYgBAAgCABgBABYAAAAgGAHgJALYgDACgDADgCADYgDADgEADgCAEYgDADgDADgEADYgEADgDAEgDAEYgGAHgIAEgDAJYgDAIABAJACAIYABAEABAEACADYABAEACADABADYACADABACACACYABACAAABAAAAYACACADABADAA");
	this.shape_1.setTransform(2,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.3,9.3,27.4);


(lib.SymWaterFlow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AgPBFYAAAAABAAACgBYACAAADAAADgBYADgBABgBAEgCYAEgBADgCAEgCYAHgFAHgFAEgIYAEgHgBgLABgJYABgFAAgFAAgDYAAgFgBgFAAgEYAAgFAAgEAAgFYAAgEABgEAAgDYABgPABgJAAAAYAAgCgCgDgCAAYgBAAgCABgBABYAAAAgGAHgJALYgDACgDADgCADYgDADgEADgCAEYgDADgDADgEADYgEADgDAEgDAEYgGAHgIAEgDAJYgDAIABAJACAIYABAEABAEACADYABAEACADABADYACADABACACACYABACAAABAAAAYACACADABADAA");
	this.shape.setTransform(4.9,6.6,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("Agfg9YAAAAAAAAgBACYgBACgCACgBADYgBADgCAEgBAEYgBADgBAFAAAEYgBAIAAAJADAIYAEAGAJAFAGAHYAEADADAEAEADYAEADAEADACACYAEADADADADADYAEACADADACACYALAKAHAHAAAAYABACADAAACgCYABgBAAgBAAgCYAAAAgCgJgDgOYAAgEgBgEAAgEYgBgEAAgFgBgEYAAgFAAgFAAgDYgBgFAAgFgBgEYgDgKABgKgFgHYgEgIgIgFgHgDYgEgCgEgCgCgBYgEgBgDgBgEAAYgDgBgDAAgCAAYgCAAgBAAAAAAYgDAAgCABgCAD");
	this.shape_1.setTransform(4,20.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.3,9.3,27.4);


(lib.symVLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAjvIAAHf");
	this.shape.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,50);


(lib.SymSprayingWater = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprayingwaterpng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,78);


(lib.symHLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgxAAIBjAA");
	this.shape.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12,2);


(lib.SymBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.streambgd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,576);


(lib.SymArrStripeR3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AgrASIAoghIgRgTIBAgFIgNBAIgRgUIgmAjg");
	this.shape.setTransform(12.3,4,2.75,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.6,8.1);


(lib.SymArrStripeR2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AgwAAIAwgxIAAAgIAyAAIAAAjIgyAAIAAAgg");
	this.shape.setTransform(11,0,2.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,22,10.1);


(lib.SymArrStripeR1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AAAAOIgygKIAGgbIAvAKIAGgZIAqAvIg4Aeg");
	this.shape.setTransform(11.2,1,2.2,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-2.9,22.7,7.9);


(lib.SymArrStripeL3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AgrASIAoghIgRgTIBAgFIgNBAIgRgUIgmAjg");
	this.shape.setTransform(9.7,4,2.75,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,0,24.6,8.1);


(lib.SymArrStripeL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AAAASIg2AAIAAgjIA2AAIAAggIA3AxIg3Ayg");
	this.shape.setTransform(11,0,2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,22,10.1);


(lib.SymArrStripeL1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AAAAOIgygKIAGgbIAvAKIAGgZIAqAvIg4Aeg");
	this.shape.setTransform(10.8,1,2.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-2.9,22.7,7.9);


(lib.SymArrowRchg11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgXACIAQgBIgGg1IARgCIAFA2IAPAAIgTA3g");
	this.shape.setTransform(0.5,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.1,5,11);


(lib.SymArrowRchg10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgUAIIAPgEIgUhFIASgFIARBGIAQgEIgEBKg");
	this.shape.setTransform(1.8,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.2,5.3,14.2);


(lib.SymArrowRchg8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgagGIAPAGIAXg8IAQAGIgYA7IAOAGIgtAyg");
	this.shape.setTransform(2.9,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,5.8,12.4);


(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.screenpng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,36);


(lib.corn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cornpng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,696,132);


(lib.SymWaterFlowTween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.SymWaterFlow2();
	this.instance.parent = this;
	this.instance.setTransform(-866.8,15.2,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-869.7},0).wait(1).to({x:-872.6},0).wait(1).to({x:-875.6},0).wait(1).to({x:-878.5},0).wait(1).to({x:-881.5},0).wait(1).to({x:-884.4},0).wait(1).to({x:-887.4,y:15.3},0).wait(1).to({x:-890.3},0).wait(1).to({x:-893.3},0).wait(1).to({x:-896.2},0).wait(1).to({x:-899.2},0).wait(1).to({x:-902.1},0).wait(1).to({x:-905.1},0).wait(1).to({x:-908},0).wait(1).to({x:-911},0).wait(1).to({x:-913.9},0).wait(1).to({x:-916.9},0).wait(1).to({x:-919.8},0).wait(1).to({x:-922.8},0).wait(1).to({x:-925.7,y:15.4},0).wait(1).to({x:-928.7},0).wait(1).to({x:-931.6},0).wait(1).to({x:-934.6},0).wait(1).to({x:-937.5},0).wait(1).to({x:-940.5},0).wait(1).to({x:-943.4},0).wait(1).to({x:-946.4},0).wait(1).to({x:-949.3},0).wait(1).to({x:-952.3},0).wait(1).to({x:-955.2},0).wait(1).to({x:-958.1},0).wait(1).to({x:-961.1},0).wait(1).to({x:-964,y:15.5},0).wait(1).to({x:-967},0).wait(1).to({x:-969.9},0).wait(1).to({x:-972.9},0).wait(1).to({x:-975.8},0).wait(1).to({x:-978.8},0).wait(1).to({x:-981.7},0).wait(1).to({x:-984.7},0).wait(1).to({x:-987.6},0).wait(1).to({x:-990.6},0).wait(1).to({x:-993.5},0).wait(1).to({x:-996.5},0).wait(1).to({x:-999.4},0).wait(1).to({x:-1002.4,y:15.6},0).wait(1).to({x:-1005.3},0).wait(1).to({x:-1008.3},0).wait(1).to({x:-1011.2},0).wait(1).to({x:-1014.2},0).wait(1).to({x:-1017.1},0).wait(1).to({x:-1020.1},0).wait(1).to({x:-1023},0).wait(1).to({x:-1026},0).wait(1).to({x:-1028.9},0).wait(1).to({x:-1031.9},0).wait(1).to({x:-1034.8},0).wait(1).to({x:-1037.8},0).wait(1).to({x:-1040.7,y:15.7},0).wait(1));

	// Layer 5
	this.instance_1 = new lib.SymWaterFlow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-692.8,14.8,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-695.7},0).wait(1).to({x:-698.7},0).wait(1).to({x:-701.6},0).wait(1).to({x:-704.6},0).wait(1).to({x:-707.5},0).wait(1).to({x:-710.5},0).wait(1).to({x:-713.4},0).wait(1).to({x:-716.4},0).wait(1).to({x:-719.3},0).wait(1).to({x:-722.3},0).wait(1).to({x:-725.2},0).wait(1).to({x:-728.2},0).wait(1).to({x:-731.1},0).wait(1).to({x:-734.1,y:14.9},0).wait(1).to({x:-737},0).wait(1).to({x:-740},0).wait(1).to({x:-742.9},0).wait(1).to({x:-745.9},0).wait(1).to({x:-748.8},0).wait(1).to({x:-751.8},0).wait(1).to({x:-754.7},0).wait(1).to({x:-757.7},0).wait(1).to({x:-760.6},0).wait(1).to({x:-763.6},0).wait(1).to({x:-766.5},0).wait(1).to({x:-769.5},0).wait(1).to({x:-772.4,y:15},0).wait(1).to({x:-775.4},0).wait(1).to({x:-778.3},0).wait(1).to({x:-781.2},0).wait(1).to({x:-784.2},0).wait(1).to({x:-787.1},0).wait(1).to({x:-790.1},0).wait(1).to({x:-793},0).wait(1).to({x:-796},0).wait(1).to({x:-798.9},0).wait(1).to({x:-801.9},0).wait(1).to({x:-804.8},0).wait(1).to({x:-807.8},0).wait(1).to({x:-810.7,y:15.1},0).wait(1).to({x:-813.7},0).wait(1).to({x:-816.6},0).wait(1).to({x:-819.6},0).wait(1).to({x:-822.5},0).wait(1).to({x:-825.5},0).wait(1).to({x:-828.4},0).wait(1).to({x:-831.4},0).wait(1).to({x:-834.3},0).wait(1).to({x:-837.3},0).wait(1).to({x:-840.2},0).wait(1).to({x:-843.2},0).wait(1).to({x:-846.1},0).wait(1).to({x:-849.1,y:15.2},0).wait(1).to({x:-852},0).wait(1).to({x:-855},0).wait(1).to({x:-857.9},0).wait(1).to({x:-860.9},0).wait(1).to({x:-863.8},0).wait(1).to({x:-866.8},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.SymWaterFlow2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-518.9,14.3,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-521.8},0).wait(1).to({x:-524.7},0).wait(1).to({x:-527.7},0).wait(1).to({x:-530.6},0).wait(1).to({x:-533.6},0).wait(1).to({x:-536.5},0).wait(1).to({x:-539.5,y:14.4},0).wait(1).to({x:-542.4},0).wait(1).to({x:-545.4},0).wait(1).to({x:-548.3},0).wait(1).to({x:-551.3},0).wait(1).to({x:-554.2},0).wait(1).to({x:-557.2},0).wait(1).to({x:-560.1},0).wait(1).to({x:-563.1},0).wait(1).to({x:-566},0).wait(1).to({x:-569},0).wait(1).to({x:-571.9},0).wait(1).to({x:-574.9},0).wait(1).to({x:-577.8,y:14.5},0).wait(1).to({x:-580.8},0).wait(1).to({x:-583.7},0).wait(1).to({x:-586.7},0).wait(1).to({x:-589.6},0).wait(1).to({x:-592.6},0).wait(1).to({x:-595.5},0).wait(1).to({x:-598.5},0).wait(1).to({x:-601.4},0).wait(1).to({x:-604.4},0).wait(1).to({x:-607.3},0).wait(1).to({x:-610.2},0).wait(1).to({x:-613.2},0).wait(1).to({x:-616.1,y:14.6},0).wait(1).to({x:-619.1},0).wait(1).to({x:-622},0).wait(1).to({x:-625},0).wait(1).to({x:-627.9},0).wait(1).to({x:-630.9},0).wait(1).to({x:-633.8},0).wait(1).to({x:-636.8},0).wait(1).to({x:-639.7},0).wait(1).to({x:-642.7},0).wait(1).to({x:-645.6},0).wait(1).to({x:-648.6},0).wait(1).to({x:-651.5},0).wait(1).to({x:-654.5,y:14.7},0).wait(1).to({x:-657.4},0).wait(1).to({x:-660.4},0).wait(1).to({x:-663.3},0).wait(1).to({x:-666.3},0).wait(1).to({x:-669.2},0).wait(1).to({x:-672.2},0).wait(1).to({x:-675.1},0).wait(1).to({x:-678.1},0).wait(1).to({x:-681},0).wait(1).to({x:-684},0).wait(1).to({x:-686.9},0).wait(1).to({x:-689.9},0).wait(1).to({x:-692.8,y:14.8},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.SymWaterFlow2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-344.9,13.9,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-347.8},0).wait(1).to({x:-350.8},0).wait(1).to({x:-353.7},0).wait(1).to({x:-356.7},0).wait(1).to({x:-359.6},0).wait(1).to({x:-362.6},0).wait(1).to({x:-365.5},0).wait(1).to({x:-368.5},0).wait(1).to({x:-371.4},0).wait(1).to({x:-374.4},0).wait(1).to({x:-377.3},0).wait(1).to({x:-380.3},0).wait(1).to({x:-383.2},0).wait(1).to({x:-386.2,y:14},0).wait(1).to({x:-389.1},0).wait(1).to({x:-392.1},0).wait(1).to({x:-395},0).wait(1).to({x:-398},0).wait(1).to({x:-400.9},0).wait(1).to({x:-403.9},0).wait(1).to({x:-406.8},0).wait(1).to({x:-409.8},0).wait(1).to({x:-412.7},0).wait(1).to({x:-415.7},0).wait(1).to({x:-418.6},0).wait(1).to({x:-421.6},0).wait(1).to({x:-424.5,y:14.1},0).wait(1).to({x:-427.5},0).wait(1).to({x:-430.4},0).wait(1).to({x:-433.3},0).wait(1).to({x:-436.3},0).wait(1).to({x:-439.2},0).wait(1).to({x:-442.2},0).wait(1).to({x:-445.1},0).wait(1).to({x:-448.1},0).wait(1).to({x:-451},0).wait(1).to({x:-454},0).wait(1).to({x:-456.9},0).wait(1).to({x:-459.9},0).wait(1).to({x:-462.8,y:14.2},0).wait(1).to({x:-465.8},0).wait(1).to({x:-468.7},0).wait(1).to({x:-471.7},0).wait(1).to({x:-474.6},0).wait(1).to({x:-477.6},0).wait(1).to({x:-480.5},0).wait(1).to({x:-483.5},0).wait(1).to({x:-486.4},0).wait(1).to({x:-489.4},0).wait(1).to({x:-492.3},0).wait(1).to({x:-495.3},0).wait(1).to({x:-498.2},0).wait(1).to({x:-501.2,y:14.3},0).wait(1).to({x:-504.1},0).wait(1).to({x:-507.1},0).wait(1).to({x:-510},0).wait(1).to({x:-513},0).wait(1).to({x:-515.9},0).wait(1).to({x:-518.9},0).wait(1));

	// Layer 2
	this.instance_4 = new lib.SymWaterFlow2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-171,13.4,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-173.9},0).wait(1).to({x:-176.8},0).wait(1).to({x:-179.8},0).wait(1).to({x:-182.7},0).wait(1).to({x:-185.7},0).wait(1).to({x:-188.6},0).wait(1).to({x:-191.6,y:13.5},0).wait(1).to({x:-194.5},0).wait(1).to({x:-197.5},0).wait(1).to({x:-200.4},0).wait(1).to({x:-203.4},0).wait(1).to({x:-206.3},0).wait(1).to({x:-209.3},0).wait(1).to({x:-212.2},0).wait(1).to({x:-215.2},0).wait(1).to({x:-218.1},0).wait(1).to({x:-221.1},0).wait(1).to({x:-224},0).wait(1).to({x:-227},0).wait(1).to({x:-229.9,y:13.6},0).wait(1).to({x:-232.9},0).wait(1).to({x:-235.8},0).wait(1).to({x:-238.8},0).wait(1).to({x:-241.7},0).wait(1).to({x:-244.7},0).wait(1).to({x:-247.6},0).wait(1).to({x:-250.6},0).wait(1).to({x:-253.5},0).wait(1).to({x:-256.5},0).wait(1).to({x:-259.4},0).wait(1).to({x:-262.3},0).wait(1).to({x:-265.3},0).wait(1).to({x:-268.2,y:13.7},0).wait(1).to({x:-271.2},0).wait(1).to({x:-274.1},0).wait(1).to({x:-277.1},0).wait(1).to({x:-280},0).wait(1).to({x:-283},0).wait(1).to({x:-285.9},0).wait(1).to({x:-288.9},0).wait(1).to({x:-291.8},0).wait(1).to({x:-294.8},0).wait(1).to({x:-297.7},0).wait(1).to({x:-300.7},0).wait(1).to({x:-303.6},0).wait(1).to({x:-306.6,y:13.8},0).wait(1).to({x:-309.5},0).wait(1).to({x:-312.5},0).wait(1).to({x:-315.4},0).wait(1).to({x:-318.4},0).wait(1).to({x:-321.3},0).wait(1).to({x:-324.3},0).wait(1).to({x:-327.2},0).wait(1).to({x:-330.2},0).wait(1).to({x:-333.1},0).wait(1).to({x:-336.1},0).wait(1).to({x:-339},0).wait(1).to({x:-342},0).wait(1).to({x:-344.9,y:13.9},0).wait(1));

	// Layer 1
	this.instance_5 = new lib.SymWaterFlow2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3,13,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:0.6,y:13.4},0).wait(1).to({x:-2.4},0).wait(1).to({x:-5.3},0).wait(1).to({x:-8.3},0).wait(1).to({x:-11.2},0).wait(1).to({x:-14.2},0).wait(1).to({x:-17.2},0).wait(1).to({x:-20.1},0).wait(1).to({x:-23.1},0).wait(1).to({x:-26},0).wait(1).to({x:-29},0).wait(1).to({x:-31.9},0).wait(1).to({x:-34.9},0).wait(1).to({x:-37.9},0).wait(1).to({x:-40.8},0).wait(1).to({x:-43.8},0).wait(1).to({x:-46.7},0).wait(1).to({x:-49.7},0).wait(1).to({x:-52.6},0).wait(1).to({x:-55.6},0).wait(1).to({x:-58.6},0).wait(1).to({x:-61.5},0).wait(1).to({x:-64.5},0).wait(1).to({x:-67.4},0).wait(1).to({x:-70.4},0).wait(1).to({x:-73.3},0).wait(1).to({x:-76.3},0).wait(1).to({x:-79.3},0).wait(1).to({x:-82.2},0).wait(1).to({x:-85.2},0).wait(1).to({x:-88.1},0).wait(1).to({x:-91.1},0).wait(1).to({x:-94.1},0).wait(1).to({x:-97},0).wait(1).to({x:-100},0).wait(1).to({x:-102.9},0).wait(1).to({x:-105.9},0).wait(1).to({x:-108.8},0).wait(1).to({x:-111.8},0).wait(1).to({x:-114.8},0).wait(1).to({x:-117.7},0).wait(1).to({x:-120.7},0).wait(1).to({x:-123.6},0).wait(1).to({x:-126.6},0).wait(1).to({x:-129.5},0).wait(1).to({x:-132.5},0).wait(1).to({x:-135.5},0).wait(1).to({x:-138.4},0).wait(1).to({x:-141.4},0).wait(1).to({x:-144.3},0).wait(1).to({x:-147.3},0).wait(1).to({x:-150.2},0).wait(1).to({x:-153.2},0).wait(1).to({x:-156.2},0).wait(1).to({x:-159.1},0).wait(1).to({x:-162.1},0).wait(1).to({x:-165},0).wait(1).to({x:-168},0).wait(1).to({x:-171},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-874,-4.1,884.1,36.4);


(lib.SymWaterFlowTween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.SymWaterFlow2();
	this.instance.parent = this;
	this.instance.setTransform(-692.8,14.8,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-695.7},0).wait(1).to({x:-698.7},0).wait(1).to({x:-701.6},0).wait(1).to({x:-704.6},0).wait(1).to({x:-707.5},0).wait(1).to({x:-710.5},0).wait(1).to({x:-713.4},0).wait(1).to({x:-716.4},0).wait(1).to({x:-719.3},0).wait(1).to({x:-722.3},0).wait(1).to({x:-725.2},0).wait(1).to({x:-728.2},0).wait(1).to({x:-731.1},0).wait(1).to({x:-734.1,y:14.9},0).wait(1).to({x:-737},0).wait(1).to({x:-740},0).wait(1).to({x:-742.9},0).wait(1).to({x:-745.9},0).wait(1).to({x:-748.8},0).wait(1).to({x:-751.8},0).wait(1).to({x:-754.7},0).wait(1).to({x:-757.7},0).wait(1).to({x:-760.6},0).wait(1).to({x:-763.6},0).wait(1).to({x:-766.5},0).wait(1).to({x:-769.5},0).wait(1).to({x:-772.4,y:15},0).wait(1).to({x:-775.4},0).wait(1).to({x:-778.3},0).wait(1).to({x:-781.2},0).wait(1).to({x:-784.2},0).wait(1).to({x:-787.1},0).wait(1).to({x:-790.1},0).wait(1).to({x:-793},0).wait(1).to({x:-796},0).wait(1).to({x:-798.9},0).wait(1).to({x:-801.9},0).wait(1).to({x:-804.8},0).wait(1).to({x:-807.8},0).wait(1).to({x:-810.7,y:15.1},0).wait(1).to({x:-813.7},0).wait(1).to({x:-816.6},0).wait(1).to({x:-819.6},0).wait(1).to({x:-822.5},0).wait(1).to({x:-825.5},0).wait(1).to({x:-828.4},0).wait(1).to({x:-831.4},0).wait(1).to({x:-834.3},0).wait(1).to({x:-837.3},0).wait(1).to({x:-840.2},0).wait(1).to({x:-843.2},0).wait(1).to({x:-846.1},0).wait(1).to({x:-849.1,y:15.2},0).wait(1).to({x:-852},0).wait(1).to({x:-855},0).wait(1).to({x:-857.9},0).wait(1).to({x:-860.9},0).wait(1).to({x:-863.8},0).wait(1).to({x:-866.8},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.SymWaterFlow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-518.9,14.3,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-521.8},0).wait(1).to({x:-524.7},0).wait(1).to({x:-527.7},0).wait(1).to({x:-530.6},0).wait(1).to({x:-533.6},0).wait(1).to({x:-536.5},0).wait(1).to({x:-539.5,y:14.4},0).wait(1).to({x:-542.4},0).wait(1).to({x:-545.4},0).wait(1).to({x:-548.3},0).wait(1).to({x:-551.3},0).wait(1).to({x:-554.2},0).wait(1).to({x:-557.2},0).wait(1).to({x:-560.1},0).wait(1).to({x:-563.1},0).wait(1).to({x:-566},0).wait(1).to({x:-569},0).wait(1).to({x:-571.9},0).wait(1).to({x:-574.9},0).wait(1).to({x:-577.8,y:14.5},0).wait(1).to({x:-580.8},0).wait(1).to({x:-583.7},0).wait(1).to({x:-586.7},0).wait(1).to({x:-589.6},0).wait(1).to({x:-592.6},0).wait(1).to({x:-595.5},0).wait(1).to({x:-598.5},0).wait(1).to({x:-601.4},0).wait(1).to({x:-604.4},0).wait(1).to({x:-607.3},0).wait(1).to({x:-610.2},0).wait(1).to({x:-613.2},0).wait(1).to({x:-616.1,y:14.6},0).wait(1).to({x:-619.1},0).wait(1).to({x:-622},0).wait(1).to({x:-625},0).wait(1).to({x:-627.9},0).wait(1).to({x:-630.9},0).wait(1).to({x:-633.8},0).wait(1).to({x:-636.8},0).wait(1).to({x:-639.7},0).wait(1).to({x:-642.7},0).wait(1).to({x:-645.6},0).wait(1).to({x:-648.6},0).wait(1).to({x:-651.5},0).wait(1).to({x:-654.5,y:14.7},0).wait(1).to({x:-657.4},0).wait(1).to({x:-660.4},0).wait(1).to({x:-663.3},0).wait(1).to({x:-666.3},0).wait(1).to({x:-669.2},0).wait(1).to({x:-672.2},0).wait(1).to({x:-675.1},0).wait(1).to({x:-678.1},0).wait(1).to({x:-681},0).wait(1).to({x:-684},0).wait(1).to({x:-686.9},0).wait(1).to({x:-689.9},0).wait(1).to({x:-692.8,y:14.8},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.SymWaterFlow2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-344.9,13.9,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-347.8},0).wait(1).to({x:-350.8},0).wait(1).to({x:-353.7},0).wait(1).to({x:-356.7},0).wait(1).to({x:-359.6},0).wait(1).to({x:-362.6},0).wait(1).to({x:-365.5},0).wait(1).to({x:-368.5},0).wait(1).to({x:-371.4},0).wait(1).to({x:-374.4},0).wait(1).to({x:-377.3},0).wait(1).to({x:-380.3},0).wait(1).to({x:-383.2},0).wait(1).to({x:-386.2,y:14},0).wait(1).to({x:-389.1},0).wait(1).to({x:-392.1},0).wait(1).to({x:-395},0).wait(1).to({x:-398},0).wait(1).to({x:-400.9},0).wait(1).to({x:-403.9},0).wait(1).to({x:-406.8},0).wait(1).to({x:-409.8},0).wait(1).to({x:-412.7},0).wait(1).to({x:-415.7},0).wait(1).to({x:-418.6},0).wait(1).to({x:-421.6},0).wait(1).to({x:-424.5,y:14.1},0).wait(1).to({x:-427.5},0).wait(1).to({x:-430.4},0).wait(1).to({x:-433.3},0).wait(1).to({x:-436.3},0).wait(1).to({x:-439.2},0).wait(1).to({x:-442.2},0).wait(1).to({x:-445.1},0).wait(1).to({x:-448.1},0).wait(1).to({x:-451},0).wait(1).to({x:-454},0).wait(1).to({x:-456.9},0).wait(1).to({x:-459.9},0).wait(1).to({x:-462.8,y:14.2},0).wait(1).to({x:-465.8},0).wait(1).to({x:-468.7},0).wait(1).to({x:-471.7},0).wait(1).to({x:-474.6},0).wait(1).to({x:-477.6},0).wait(1).to({x:-480.5},0).wait(1).to({x:-483.5},0).wait(1).to({x:-486.4},0).wait(1).to({x:-489.4},0).wait(1).to({x:-492.3},0).wait(1).to({x:-495.3},0).wait(1).to({x:-498.2},0).wait(1).to({x:-501.2,y:14.3},0).wait(1).to({x:-504.1},0).wait(1).to({x:-507.1},0).wait(1).to({x:-510},0).wait(1).to({x:-513},0).wait(1).to({x:-515.9},0).wait(1).to({x:-518.9},0).wait(1));

	// Layer 2
	this.instance_3 = new lib.SymWaterFlow2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-171,13.4,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-173.9},0).wait(1).to({x:-176.8},0).wait(1).to({x:-179.8},0).wait(1).to({x:-182.7},0).wait(1).to({x:-185.7},0).wait(1).to({x:-188.6},0).wait(1).to({x:-191.6,y:13.5},0).wait(1).to({x:-194.5},0).wait(1).to({x:-197.5},0).wait(1).to({x:-200.4},0).wait(1).to({x:-203.4},0).wait(1).to({x:-206.3},0).wait(1).to({x:-209.3},0).wait(1).to({x:-212.2},0).wait(1).to({x:-215.2},0).wait(1).to({x:-218.1},0).wait(1).to({x:-221.1},0).wait(1).to({x:-224},0).wait(1).to({x:-227},0).wait(1).to({x:-229.9,y:13.6},0).wait(1).to({x:-232.9},0).wait(1).to({x:-235.8},0).wait(1).to({x:-238.8},0).wait(1).to({x:-241.7},0).wait(1).to({x:-244.7},0).wait(1).to({x:-247.6},0).wait(1).to({x:-250.6},0).wait(1).to({x:-253.5},0).wait(1).to({x:-256.5},0).wait(1).to({x:-259.4},0).wait(1).to({x:-262.3},0).wait(1).to({x:-265.3},0).wait(1).to({x:-268.2,y:13.7},0).wait(1).to({x:-271.2},0).wait(1).to({x:-274.1},0).wait(1).to({x:-277.1},0).wait(1).to({x:-280},0).wait(1).to({x:-283},0).wait(1).to({x:-285.9},0).wait(1).to({x:-288.9},0).wait(1).to({x:-291.8},0).wait(1).to({x:-294.8},0).wait(1).to({x:-297.7},0).wait(1).to({x:-300.7},0).wait(1).to({x:-303.6},0).wait(1).to({x:-306.6,y:13.8},0).wait(1).to({x:-309.5},0).wait(1).to({x:-312.5},0).wait(1).to({x:-315.4},0).wait(1).to({x:-318.4},0).wait(1).to({x:-321.3},0).wait(1).to({x:-324.3},0).wait(1).to({x:-327.2},0).wait(1).to({x:-330.2},0).wait(1).to({x:-333.1},0).wait(1).to({x:-336.1},0).wait(1).to({x:-339},0).wait(1).to({x:-342},0).wait(1).to({x:-344.9,y:13.9},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.SymWaterFlow2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3,13,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:0.6,y:13.4},0).wait(1).to({x:-2.4},0).wait(1).to({x:-5.3},0).wait(1).to({x:-8.3},0).wait(1).to({x:-11.2},0).wait(1).to({x:-14.2},0).wait(1).to({x:-17.2},0).wait(1).to({x:-20.1},0).wait(1).to({x:-23.1},0).wait(1).to({x:-26},0).wait(1).to({x:-29},0).wait(1).to({x:-31.9},0).wait(1).to({x:-34.9},0).wait(1).to({x:-37.9},0).wait(1).to({x:-40.8},0).wait(1).to({x:-43.8},0).wait(1).to({x:-46.7},0).wait(1).to({x:-49.7},0).wait(1).to({x:-52.6},0).wait(1).to({x:-55.6},0).wait(1).to({x:-58.6},0).wait(1).to({x:-61.5},0).wait(1).to({x:-64.5},0).wait(1).to({x:-67.4},0).wait(1).to({x:-70.4},0).wait(1).to({x:-73.3},0).wait(1).to({x:-76.3},0).wait(1).to({x:-79.3},0).wait(1).to({x:-82.2},0).wait(1).to({x:-85.2},0).wait(1).to({x:-88.1},0).wait(1).to({x:-91.1},0).wait(1).to({x:-94.1},0).wait(1).to({x:-97},0).wait(1).to({x:-100},0).wait(1).to({x:-102.9},0).wait(1).to({x:-105.9},0).wait(1).to({x:-108.8},0).wait(1).to({x:-111.8},0).wait(1).to({x:-114.8},0).wait(1).to({x:-117.7},0).wait(1).to({x:-120.7},0).wait(1).to({x:-123.6},0).wait(1).to({x:-126.6},0).wait(1).to({x:-129.5},0).wait(1).to({x:-132.5},0).wait(1).to({x:-135.5},0).wait(1).to({x:-138.4},0).wait(1).to({x:-141.4},0).wait(1).to({x:-144.3},0).wait(1).to({x:-147.3},0).wait(1).to({x:-150.2},0).wait(1).to({x:-153.2},0).wait(1).to({x:-156.2},0).wait(1).to({x:-159.1},0).wait(1).to({x:-162.1},0).wait(1).to({x:-165},0).wait(1).to({x:-168},0).wait(1).to({x:-171},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-700,-4.1,710.2,36);


(lib.SymWaterFlowTween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.SymWaterFlow2();
	this.instance.parent = this;
	this.instance.setTransform(-344.9,13.9,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-347.8},0).wait(1).to({x:-350.8},0).wait(1).to({x:-353.7},0).wait(1).to({x:-356.7},0).wait(1).to({x:-359.6},0).wait(1).to({x:-362.6},0).wait(1).to({x:-365.5},0).wait(1).to({x:-368.5},0).wait(1).to({x:-371.4},0).wait(1).to({x:-374.4},0).wait(1).to({x:-377.3},0).wait(1).to({x:-380.3},0).wait(1).to({x:-383.2},0).wait(1).to({x:-386.2,y:14},0).wait(1).to({x:-389.1},0).wait(1).to({x:-392.1},0).wait(1).to({x:-395},0).wait(1).to({x:-398},0).wait(1).to({x:-400.9},0).wait(1).to({x:-403.9},0).wait(1).to({x:-406.8},0).wait(1).to({x:-409.8},0).wait(1).to({x:-412.7},0).wait(1).to({x:-415.7},0).wait(1).to({x:-418.6},0).wait(1).to({x:-421.6},0).wait(1).to({x:-424.5,y:14.1},0).wait(1).to({x:-427.5},0).wait(1).to({x:-430.4},0).wait(1).to({x:-433.3},0).wait(1).to({x:-436.3},0).wait(1).to({x:-439.2},0).wait(1).to({x:-442.2},0).wait(1).to({x:-445.1},0).wait(1).to({x:-448.1},0).wait(1).to({x:-451},0).wait(1).to({x:-454},0).wait(1).to({x:-456.9},0).wait(1).to({x:-459.9},0).wait(1).to({x:-462.8,y:14.2},0).wait(1).to({x:-465.8},0).wait(1).to({x:-468.7},0).wait(1).to({x:-471.7},0).wait(1).to({x:-474.6},0).wait(1).to({x:-477.6},0).wait(1).to({x:-480.5},0).wait(1).to({x:-483.5},0).wait(1).to({x:-486.4},0).wait(1).to({x:-489.4},0).wait(1).to({x:-492.3},0).wait(1).to({x:-495.3},0).wait(1).to({x:-498.2},0).wait(1).to({x:-501.2,y:14.3},0).wait(1).to({x:-504.1},0).wait(1).to({x:-507.1},0).wait(1).to({x:-510},0).wait(1).to({x:-513},0).wait(1).to({x:-515.9},0).wait(1).to({x:-518.9},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.SymWaterFlow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-171,13.4,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-173.9},0).wait(1).to({x:-176.8},0).wait(1).to({x:-179.8},0).wait(1).to({x:-182.7},0).wait(1).to({x:-185.7},0).wait(1).to({x:-188.6},0).wait(1).to({x:-191.6,y:13.5},0).wait(1).to({x:-194.5},0).wait(1).to({x:-197.5},0).wait(1).to({x:-200.4},0).wait(1).to({x:-203.4},0).wait(1).to({x:-206.3},0).wait(1).to({x:-209.3},0).wait(1).to({x:-212.2},0).wait(1).to({x:-215.2},0).wait(1).to({x:-218.1},0).wait(1).to({x:-221.1},0).wait(1).to({x:-224},0).wait(1).to({x:-227},0).wait(1).to({x:-229.9,y:13.6},0).wait(1).to({x:-232.9},0).wait(1).to({x:-235.8},0).wait(1).to({x:-238.8},0).wait(1).to({x:-241.7},0).wait(1).to({x:-244.7},0).wait(1).to({x:-247.6},0).wait(1).to({x:-250.6},0).wait(1).to({x:-253.5},0).wait(1).to({x:-256.5},0).wait(1).to({x:-259.4},0).wait(1).to({x:-262.3},0).wait(1).to({x:-265.3},0).wait(1).to({x:-268.2,y:13.7},0).wait(1).to({x:-271.2},0).wait(1).to({x:-274.1},0).wait(1).to({x:-277.1},0).wait(1).to({x:-280},0).wait(1).to({x:-283},0).wait(1).to({x:-285.9},0).wait(1).to({x:-288.9},0).wait(1).to({x:-291.8},0).wait(1).to({x:-294.8},0).wait(1).to({x:-297.7},0).wait(1).to({x:-300.7},0).wait(1).to({x:-303.6},0).wait(1).to({x:-306.6,y:13.8},0).wait(1).to({x:-309.5},0).wait(1).to({x:-312.5},0).wait(1).to({x:-315.4},0).wait(1).to({x:-318.4},0).wait(1).to({x:-321.3},0).wait(1).to({x:-324.3},0).wait(1).to({x:-327.2},0).wait(1).to({x:-330.2},0).wait(1).to({x:-333.1},0).wait(1).to({x:-336.1},0).wait(1).to({x:-339},0).wait(1).to({x:-342},0).wait(1).to({x:-344.9,y:13.9},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.SymWaterFlow2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,13,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0.6,y:13.4},0).wait(1).to({x:-2.4},0).wait(1).to({x:-5.3},0).wait(1).to({x:-8.3},0).wait(1).to({x:-11.2},0).wait(1).to({x:-14.2},0).wait(1).to({x:-17.2},0).wait(1).to({x:-20.1},0).wait(1).to({x:-23.1},0).wait(1).to({x:-26},0).wait(1).to({x:-29},0).wait(1).to({x:-31.9},0).wait(1).to({x:-34.9},0).wait(1).to({x:-37.9},0).wait(1).to({x:-40.8},0).wait(1).to({x:-43.8},0).wait(1).to({x:-46.7},0).wait(1).to({x:-49.7},0).wait(1).to({x:-52.6},0).wait(1).to({x:-55.6},0).wait(1).to({x:-58.6},0).wait(1).to({x:-61.5},0).wait(1).to({x:-64.5},0).wait(1).to({x:-67.4},0).wait(1).to({x:-70.4},0).wait(1).to({x:-73.3},0).wait(1).to({x:-76.3},0).wait(1).to({x:-79.3},0).wait(1).to({x:-82.2},0).wait(1).to({x:-85.2},0).wait(1).to({x:-88.1},0).wait(1).to({x:-91.1},0).wait(1).to({x:-94.1},0).wait(1).to({x:-97},0).wait(1).to({x:-100},0).wait(1).to({x:-102.9},0).wait(1).to({x:-105.9},0).wait(1).to({x:-108.8},0).wait(1).to({x:-111.8},0).wait(1).to({x:-114.8},0).wait(1).to({x:-117.7},0).wait(1).to({x:-120.7},0).wait(1).to({x:-123.6},0).wait(1).to({x:-126.6},0).wait(1).to({x:-129.5},0).wait(1).to({x:-132.5},0).wait(1).to({x:-135.5},0).wait(1).to({x:-138.4},0).wait(1).to({x:-141.4},0).wait(1).to({x:-144.3},0).wait(1).to({x:-147.3},0).wait(1).to({x:-150.2},0).wait(1).to({x:-153.2},0).wait(1).to({x:-156.2},0).wait(1).to({x:-159.1},0).wait(1).to({x:-162.1},0).wait(1).to({x:-165},0).wait(1).to({x:-168},0).wait(1).to({x:-171},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.1,-4.1,362.3,35.1);


(lib.SymWaterFlowTween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.SymWaterFlow2();
	this.instance.parent = this;
	this.instance.setTransform(-171,13.4,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-173.9},0).wait(1).to({x:-176.8},0).wait(1).to({x:-179.8},0).wait(1).to({x:-182.7},0).wait(1).to({x:-185.7},0).wait(1).to({x:-188.6},0).wait(1).to({x:-191.6,y:13.5},0).wait(1).to({x:-194.5},0).wait(1).to({x:-197.5},0).wait(1).to({x:-200.4},0).wait(1).to({x:-203.4},0).wait(1).to({x:-206.3},0).wait(1).to({x:-209.3},0).wait(1).to({x:-212.2},0).wait(1).to({x:-215.2},0).wait(1).to({x:-218.1},0).wait(1).to({x:-221.1},0).wait(1).to({x:-224},0).wait(1).to({x:-227},0).wait(1).to({x:-229.9,y:13.6},0).wait(1).to({x:-232.9},0).wait(1).to({x:-235.8},0).wait(1).to({x:-238.8},0).wait(1).to({x:-241.7},0).wait(1).to({x:-244.7},0).wait(1).to({x:-247.6},0).wait(1).to({x:-250.6},0).wait(1).to({x:-253.5},0).wait(1).to({x:-256.5},0).wait(1).to({x:-259.4},0).wait(1).to({x:-262.3},0).wait(1).to({x:-265.3},0).wait(1).to({x:-268.2,y:13.7},0).wait(1).to({x:-271.2},0).wait(1).to({x:-274.1},0).wait(1).to({x:-277.1},0).wait(1).to({x:-280},0).wait(1).to({x:-283},0).wait(1).to({x:-285.9},0).wait(1).to({x:-288.9},0).wait(1).to({x:-291.8},0).wait(1).to({x:-294.8},0).wait(1).to({x:-297.7},0).wait(1).to({x:-300.7},0).wait(1).to({x:-303.6},0).wait(1).to({x:-306.6,y:13.8},0).wait(1).to({x:-309.5},0).wait(1).to({x:-312.5},0).wait(1).to({x:-315.4},0).wait(1).to({x:-318.4},0).wait(1).to({x:-321.3},0).wait(1).to({x:-324.3},0).wait(1).to({x:-327.2},0).wait(1).to({x:-330.2},0).wait(1).to({x:-333.1},0).wait(1).to({x:-336.1},0).wait(1).to({x:-339},0).wait(1).to({x:-342},0).wait(1).to({x:-344.9,y:13.9},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.SymWaterFlow2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3,13,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0.6,y:13.4},0).wait(1).to({x:-2.4},0).wait(1).to({x:-5.3},0).wait(1).to({x:-8.3},0).wait(1).to({x:-11.2},0).wait(1).to({x:-14.2},0).wait(1).to({x:-17.2},0).wait(1).to({x:-20.1},0).wait(1).to({x:-23.1},0).wait(1).to({x:-26},0).wait(1).to({x:-29},0).wait(1).to({x:-31.9},0).wait(1).to({x:-34.9},0).wait(1).to({x:-37.9},0).wait(1).to({x:-40.8},0).wait(1).to({x:-43.8},0).wait(1).to({x:-46.7},0).wait(1).to({x:-49.7},0).wait(1).to({x:-52.6},0).wait(1).to({x:-55.6},0).wait(1).to({x:-58.6},0).wait(1).to({x:-61.5},0).wait(1).to({x:-64.5},0).wait(1).to({x:-67.4},0).wait(1).to({x:-70.4},0).wait(1).to({x:-73.3},0).wait(1).to({x:-76.3},0).wait(1).to({x:-79.3},0).wait(1).to({x:-82.2},0).wait(1).to({x:-85.2},0).wait(1).to({x:-88.1},0).wait(1).to({x:-91.1},0).wait(1).to({x:-94.1},0).wait(1).to({x:-97},0).wait(1).to({x:-100},0).wait(1).to({x:-102.9},0).wait(1).to({x:-105.9},0).wait(1).to({x:-108.8},0).wait(1).to({x:-111.8},0).wait(1).to({x:-114.8},0).wait(1).to({x:-117.7},0).wait(1).to({x:-120.7},0).wait(1).to({x:-123.6},0).wait(1).to({x:-126.6},0).wait(1).to({x:-129.5},0).wait(1).to({x:-132.5},0).wait(1).to({x:-135.5},0).wait(1).to({x:-138.4},0).wait(1).to({x:-141.4},0).wait(1).to({x:-144.3},0).wait(1).to({x:-147.3},0).wait(1).to({x:-150.2},0).wait(1).to({x:-153.2},0).wait(1).to({x:-156.2},0).wait(1).to({x:-159.1},0).wait(1).to({x:-162.1},0).wait(1).to({x:-165},0).wait(1).to({x:-168},0).wait(1).to({x:-171},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-4.1,188.3,34.6);


(lib.SymWaterFlowTween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.SymWaterFlow1();
	this.instance.parent = this;
	this.instance.setTransform(717.4,77.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:720.4,y:77.7},0).wait(1).to({x:723.5,y:77.9},0).wait(1).to({x:726.5,y:78.2},0).wait(1).to({x:729.5,y:78.5},0).wait(1).to({x:732.5,y:78.8},0).wait(1).to({x:735.6,y:79},0).wait(1).to({x:738.6,y:79.3},0).wait(1).to({x:741.6,y:79.6},0).wait(1).to({x:744.6,y:79.8},0).wait(1).to({x:747.7,y:80.1},0).wait(1).to({x:750.7,y:80.4},0).wait(1).to({x:753.7,y:80.7},0).wait(1).to({x:756.7,y:80.9},0).wait(1).to({x:759.8,y:81.2},0).wait(1).to({x:762.8,y:81.5},0).wait(1).to({x:765.8,y:81.7},0).wait(1).to({x:768.8,y:82},0).wait(1).to({x:771.9,y:82.3},0).wait(1).to({x:774.9,y:82.6},0).wait(1).to({x:777.9,y:82.8},0).wait(1).to({x:780.9,y:83.1},0).wait(1).to({x:784,y:83.4},0).wait(1).to({x:787,y:83.6},0).wait(1).to({x:790,y:83.9},0).wait(1).to({x:793,y:84.2},0).wait(1).to({x:796.1,y:84.5},0).wait(1).to({x:799.1,y:84.7},0).wait(1).to({x:802.1,y:85},0).wait(1).to({x:805.1,y:85.3},0).wait(1).to({x:808.2,y:85.5},0).wait(1).to({x:811.2,y:85.8},0).wait(1).to({x:814.2,y:86.1},0).wait(1).to({x:817.2,y:86.3},0).wait(1).to({x:820.3,y:86.6},0).wait(1).to({x:823.3,y:86.9},0).wait(1).to({x:826.3,y:87.2},0).wait(1).to({x:829.3,y:87.4},0).wait(1).to({x:832.4,y:87.7},0).wait(1).to({x:835.4,y:88},0).wait(1).to({x:838.4,y:88.2},0).wait(1).to({x:841.4,y:88.5},0).wait(1).to({x:844.5,y:88.8},0).wait(1).to({x:847.5,y:89.1},0).wait(1).to({x:850.5,y:89.3},0).wait(1).to({x:853.5,y:89.6},0).wait(1).to({x:856.6,y:89.9},0).wait(1).to({x:859.6,y:90.1},0).wait(1).to({x:862.6,y:90.4},0).wait(1).to({x:865.6,y:90.7},0).wait(1).to({x:868.7,y:91},0).wait(1).to({x:871.7,y:91.2},0).wait(1).to({x:874.7,y:91.5},0).wait(1).to({x:877.7,y:91.8},0).wait(1).to({x:880.8,y:92},0).wait(1).to({x:883.8,y:92.3},0).wait(1).to({x:886.8,y:92.6},0).wait(1).to({x:889.8,y:92.9},0).wait(1).to({x:892.9,y:93.1},0).wait(1).to({x:895.9,y:93.4},0).wait(1));

	// Layer 4
	this.instance_1 = new lib.SymWaterFlow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(538.9,61.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:541.9,y:61.7},0).wait(1).to({x:545,y:61.9},0).wait(1).to({x:548,y:62.2},0).wait(1).to({x:551,y:62.5},0).wait(1).to({x:554,y:62.8},0).wait(1).to({x:557.1,y:63},0).wait(1).to({x:560.1,y:63.3},0).wait(1).to({x:563.1,y:63.6},0).wait(1).to({x:566.1,y:63.8},0).wait(1).to({x:569.2,y:64.1},0).wait(1).to({x:572.2,y:64.4},0).wait(1).to({x:575.2,y:64.7},0).wait(1).to({x:578.2,y:64.9},0).wait(1).to({x:581.3,y:65.2},0).wait(1).to({x:584.3,y:65.5},0).wait(1).to({x:587.3,y:65.7},0).wait(1).to({x:590.3,y:66},0).wait(1).to({x:593.4,y:66.3},0).wait(1).to({x:596.4,y:66.6},0).wait(1).to({x:599.4,y:66.8},0).wait(1).to({x:602.4,y:67.1},0).wait(1).to({x:605.5,y:67.4},0).wait(1).to({x:608.5,y:67.6},0).wait(1).to({x:611.5,y:67.9},0).wait(1).to({x:614.5,y:68.2},0).wait(1).to({x:617.6,y:68.5},0).wait(1).to({x:620.6,y:68.7},0).wait(1).to({x:623.6,y:69},0).wait(1).to({x:626.6,y:69.3},0).wait(1).to({x:629.7,y:69.5},0).wait(1).to({x:632.7,y:69.8},0).wait(1).to({x:635.7,y:70.1},0).wait(1).to({x:638.7,y:70.3},0).wait(1).to({x:641.8,y:70.6},0).wait(1).to({x:644.8,y:70.9},0).wait(1).to({x:647.8,y:71.2},0).wait(1).to({x:650.8,y:71.4},0).wait(1).to({x:653.9,y:71.7},0).wait(1).to({x:656.9,y:72},0).wait(1).to({x:659.9,y:72.2},0).wait(1).to({x:662.9,y:72.5},0).wait(1).to({x:666,y:72.8},0).wait(1).to({x:669,y:73.1},0).wait(1).to({x:672,y:73.3},0).wait(1).to({x:675,y:73.6},0).wait(1).to({x:678.1,y:73.9},0).wait(1).to({x:681.1,y:74.1},0).wait(1).to({x:684.1,y:74.4},0).wait(1).to({x:687.1,y:74.7},0).wait(1).to({x:690.2,y:75},0).wait(1).to({x:693.2,y:75.2},0).wait(1).to({x:696.2,y:75.5},0).wait(1).to({x:699.2,y:75.8},0).wait(1).to({x:702.3,y:76},0).wait(1).to({x:705.3,y:76.3},0).wait(1).to({x:708.3,y:76.6},0).wait(1).to({x:711.3,y:76.9},0).wait(1).to({x:714.4,y:77.1},0).wait(1).to({x:717.4,y:77.4},0).wait(1));

	// Layer 3
	this.instance_2 = new lib.SymWaterFlow1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(360.4,45.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:363.4,y:45.7},0).wait(1).to({x:366.5,y:45.9},0).wait(1).to({x:369.5,y:46.2},0).wait(1).to({x:372.5,y:46.5},0).wait(1).to({x:375.5,y:46.8},0).wait(1).to({x:378.6,y:47},0).wait(1).to({x:381.6,y:47.3},0).wait(1).to({x:384.6,y:47.6},0).wait(1).to({x:387.6,y:47.8},0).wait(1).to({x:390.7,y:48.1},0).wait(1).to({x:393.7,y:48.4},0).wait(1).to({x:396.7,y:48.7},0).wait(1).to({x:399.7,y:48.9},0).wait(1).to({x:402.8,y:49.2},0).wait(1).to({x:405.8,y:49.5},0).wait(1).to({x:408.8,y:49.7},0).wait(1).to({x:411.8,y:50},0).wait(1).to({x:414.9,y:50.3},0).wait(1).to({x:417.9,y:50.6},0).wait(1).to({x:420.9,y:50.8},0).wait(1).to({x:423.9,y:51.1},0).wait(1).to({x:427,y:51.4},0).wait(1).to({x:430,y:51.6},0).wait(1).to({x:433,y:51.9},0).wait(1).to({x:436,y:52.2},0).wait(1).to({x:439.1,y:52.5},0).wait(1).to({x:442.1,y:52.7},0).wait(1).to({x:445.1,y:53},0).wait(1).to({x:448.1,y:53.3},0).wait(1).to({x:451.2,y:53.5},0).wait(1).to({x:454.2,y:53.8},0).wait(1).to({x:457.2,y:54.1},0).wait(1).to({x:460.2,y:54.3},0).wait(1).to({x:463.3,y:54.6},0).wait(1).to({x:466.3,y:54.9},0).wait(1).to({x:469.3,y:55.2},0).wait(1).to({x:472.3,y:55.4},0).wait(1).to({x:475.4,y:55.7},0).wait(1).to({x:478.4,y:56},0).wait(1).to({x:481.4,y:56.2},0).wait(1).to({x:484.4,y:56.5},0).wait(1).to({x:487.5,y:56.8},0).wait(1).to({x:490.5,y:57.1},0).wait(1).to({x:493.5,y:57.3},0).wait(1).to({x:496.5,y:57.6},0).wait(1).to({x:499.6,y:57.9},0).wait(1).to({x:502.6,y:58.1},0).wait(1).to({x:505.6,y:58.4},0).wait(1).to({x:508.6,y:58.7},0).wait(1).to({x:511.7,y:59},0).wait(1).to({x:514.7,y:59.2},0).wait(1).to({x:517.7,y:59.5},0).wait(1).to({x:520.7,y:59.8},0).wait(1).to({x:523.8,y:60},0).wait(1).to({x:526.8,y:60.3},0).wait(1).to({x:529.8,y:60.6},0).wait(1).to({x:532.8,y:60.9},0).wait(1).to({x:535.9,y:61.1},0).wait(1).to({x:538.9,y:61.4},0).wait(1));

	// Layer 2
	this.instance_3 = new lib.SymWaterFlow1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(181.9,29.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:184.9,y:29.7},0).wait(1).to({x:188,y:29.9},0).wait(1).to({x:191,y:30.2},0).wait(1).to({x:194,y:30.5},0).wait(1).to({x:197,y:30.8},0).wait(1).to({x:200.1,y:31},0).wait(1).to({x:203.1,y:31.3},0).wait(1).to({x:206.1,y:31.6},0).wait(1).to({x:209.1,y:31.8},0).wait(1).to({x:212.2,y:32.1},0).wait(1).to({x:215.2,y:32.4},0).wait(1).to({x:218.2,y:32.7},0).wait(1).to({x:221.2,y:32.9},0).wait(1).to({x:224.3,y:33.2},0).wait(1).to({x:227.3,y:33.5},0).wait(1).to({x:230.3,y:33.7},0).wait(1).to({x:233.3,y:34},0).wait(1).to({x:236.4,y:34.3},0).wait(1).to({x:239.4,y:34.6},0).wait(1).to({x:242.4,y:34.8},0).wait(1).to({x:245.4,y:35.1},0).wait(1).to({x:248.5,y:35.4},0).wait(1).to({x:251.5,y:35.6},0).wait(1).to({x:254.5,y:35.9},0).wait(1).to({x:257.5,y:36.2},0).wait(1).to({x:260.6,y:36.5},0).wait(1).to({x:263.6,y:36.7},0).wait(1).to({x:266.6,y:37},0).wait(1).to({x:269.6,y:37.3},0).wait(1).to({x:272.7,y:37.5},0).wait(1).to({x:275.7,y:37.8},0).wait(1).to({x:278.7,y:38.1},0).wait(1).to({x:281.7,y:38.3},0).wait(1).to({x:284.8,y:38.6},0).wait(1).to({x:287.8,y:38.9},0).wait(1).to({x:290.8,y:39.2},0).wait(1).to({x:293.8,y:39.4},0).wait(1).to({x:296.9,y:39.7},0).wait(1).to({x:299.9,y:40},0).wait(1).to({x:302.9,y:40.2},0).wait(1).to({x:305.9,y:40.5},0).wait(1).to({x:309,y:40.8},0).wait(1).to({x:312,y:41.1},0).wait(1).to({x:315,y:41.3},0).wait(1).to({x:318,y:41.6},0).wait(1).to({x:321.1,y:41.9},0).wait(1).to({x:324.1,y:42.1},0).wait(1).to({x:327.1,y:42.4},0).wait(1).to({x:330.1,y:42.7},0).wait(1).to({x:333.2,y:43},0).wait(1).to({x:336.2,y:43.2},0).wait(1).to({x:339.2,y:43.5},0).wait(1).to({x:342.2,y:43.8},0).wait(1).to({x:345.3,y:44},0).wait(1).to({x:348.3,y:44.3},0).wait(1).to({x:351.3,y:44.6},0).wait(1).to({x:354.3,y:44.9},0).wait(1).to({x:357.4,y:45.1},0).wait(1).to({x:360.4,y:45.4},0).wait(1));

	// Layer 1
	this.instance_4 = new lib.SymWaterFlow1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:9.5,y:31.1},0).wait(1).to({x:12.6,y:31.3},0).wait(1).to({x:15.6,y:31.6},0).wait(1).to({x:18.6,y:31.9},0).wait(1).to({x:21.6,y:32.2},0).wait(1).to({x:24.7,y:32.4},0).wait(1).to({x:27.7,y:32.7},0).wait(1).to({x:30.7,y:33},0).wait(1).to({x:33.7,y:33.2},0).wait(1).to({x:36.8,y:33.5},0).wait(1).to({x:39.8,y:33.8},0).wait(1).to({x:42.8,y:34.1},0).wait(1).to({x:45.8,y:34.3},0).wait(1).to({x:48.9,y:34.6},0).wait(1).to({x:51.9,y:34.9},0).wait(1).to({x:54.9,y:35.1},0).wait(1).to({x:57.9,y:35.4},0).wait(1).to({x:61,y:35.7},0).wait(1).to({x:64,y:36},0).wait(1).to({x:67,y:36.2},0).wait(1).to({x:70,y:36.5},0).wait(1).to({x:73.1,y:36.8},0).wait(1).to({x:76.1,y:37},0).wait(1).to({x:79.1,y:37.3},0).wait(1).to({x:82.1,y:37.6},0).wait(1).to({x:85.2,y:37.9},0).wait(1).to({x:88.2,y:38.1},0).wait(1).to({x:91.2,y:38.4},0).wait(1).to({x:94.2,y:38.7},0).wait(1).to({x:97.3,y:38.9},0).wait(1).to({x:100.3,y:39.2},0).wait(1).to({x:103.3,y:39.5},0).wait(1).to({x:106.3,y:39.7},0).wait(1).to({x:109.4,y:40},0).wait(1).to({x:112.4,y:40.3},0).wait(1).to({x:115.4,y:40.6},0).wait(1).to({x:118.4,y:40.8},0).wait(1).to({x:121.5,y:41.1},0).wait(1).to({x:124.5,y:41.4},0).wait(1).to({x:127.5,y:41.6},0).wait(1).to({x:130.5,y:41.9},0).wait(1).to({x:133.6,y:42.2},0).wait(1).to({x:136.6,y:42.5},0).wait(1).to({x:139.6,y:42.7},0).wait(1).to({x:142.6,y:43},0).wait(1).to({x:145.7,y:43.3},0).wait(1).to({x:148.7,y:43.5},0).wait(1).to({x:151.7,y:43.8},0).wait(1).to({x:154.7,y:44.1},0).wait(1).to({x:157.8,y:44.4},0).wait(1).to({x:160.8,y:44.6},0).wait(1).to({x:163.8,y:44.9},0).wait(1).to({x:166.8,y:45.2},0).wait(1).to({x:169.9,y:45.4},0).wait(1).to({x:172.9,y:45.7},0).wait(1).to({x:175.9,y:46},0).wait(1).to({x:178.9,y:46.3},0).wait(1).to({x:182,y:46.5},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,728.4,98.2);


(lib.SymWaterFlowTween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.SymWaterFlow1();
	this.instance.parent = this;
	this.instance.setTransform(538.9,61.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:541.9,y:61.7},0).wait(1).to({x:545,y:61.9},0).wait(1).to({x:548,y:62.2},0).wait(1).to({x:551,y:62.5},0).wait(1).to({x:554,y:62.8},0).wait(1).to({x:557.1,y:63},0).wait(1).to({x:560.1,y:63.3},0).wait(1).to({x:563.1,y:63.6},0).wait(1).to({x:566.1,y:63.8},0).wait(1).to({x:569.2,y:64.1},0).wait(1).to({x:572.2,y:64.4},0).wait(1).to({x:575.2,y:64.7},0).wait(1).to({x:578.2,y:64.9},0).wait(1).to({x:581.3,y:65.2},0).wait(1).to({x:584.3,y:65.5},0).wait(1).to({x:587.3,y:65.7},0).wait(1).to({x:590.3,y:66},0).wait(1).to({x:593.4,y:66.3},0).wait(1).to({x:596.4,y:66.6},0).wait(1).to({x:599.4,y:66.8},0).wait(1).to({x:602.4,y:67.1},0).wait(1).to({x:605.5,y:67.4},0).wait(1).to({x:608.5,y:67.6},0).wait(1).to({x:611.5,y:67.9},0).wait(1).to({x:614.5,y:68.2},0).wait(1).to({x:617.6,y:68.5},0).wait(1).to({x:620.6,y:68.7},0).wait(1).to({x:623.6,y:69},0).wait(1).to({x:626.6,y:69.3},0).wait(1).to({x:629.7,y:69.5},0).wait(1).to({x:632.7,y:69.8},0).wait(1).to({x:635.7,y:70.1},0).wait(1).to({x:638.7,y:70.3},0).wait(1).to({x:641.8,y:70.6},0).wait(1).to({x:644.8,y:70.9},0).wait(1).to({x:647.8,y:71.2},0).wait(1).to({x:650.8,y:71.4},0).wait(1).to({x:653.9,y:71.7},0).wait(1).to({x:656.9,y:72},0).wait(1).to({x:659.9,y:72.2},0).wait(1).to({x:662.9,y:72.5},0).wait(1).to({x:666,y:72.8},0).wait(1).to({x:669,y:73.1},0).wait(1).to({x:672,y:73.3},0).wait(1).to({x:675,y:73.6},0).wait(1).to({x:678.1,y:73.9},0).wait(1).to({x:681.1,y:74.1},0).wait(1).to({x:684.1,y:74.4},0).wait(1).to({x:687.1,y:74.7},0).wait(1).to({x:690.2,y:75},0).wait(1).to({x:693.2,y:75.2},0).wait(1).to({x:696.2,y:75.5},0).wait(1).to({x:699.2,y:75.8},0).wait(1).to({x:702.3,y:76},0).wait(1).to({x:705.3,y:76.3},0).wait(1).to({x:708.3,y:76.6},0).wait(1).to({x:711.3,y:76.9},0).wait(1).to({x:714.4,y:77.1},0).wait(1).to({x:717.4,y:77.4},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.SymWaterFlow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(360.4,45.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:363.4,y:45.7},0).wait(1).to({x:366.5,y:45.9},0).wait(1).to({x:369.5,y:46.2},0).wait(1).to({x:372.5,y:46.5},0).wait(1).to({x:375.5,y:46.8},0).wait(1).to({x:378.6,y:47},0).wait(1).to({x:381.6,y:47.3},0).wait(1).to({x:384.6,y:47.6},0).wait(1).to({x:387.6,y:47.8},0).wait(1).to({x:390.7,y:48.1},0).wait(1).to({x:393.7,y:48.4},0).wait(1).to({x:396.7,y:48.7},0).wait(1).to({x:399.7,y:48.9},0).wait(1).to({x:402.8,y:49.2},0).wait(1).to({x:405.8,y:49.5},0).wait(1).to({x:408.8,y:49.7},0).wait(1).to({x:411.8,y:50},0).wait(1).to({x:414.9,y:50.3},0).wait(1).to({x:417.9,y:50.6},0).wait(1).to({x:420.9,y:50.8},0).wait(1).to({x:423.9,y:51.1},0).wait(1).to({x:427,y:51.4},0).wait(1).to({x:430,y:51.6},0).wait(1).to({x:433,y:51.9},0).wait(1).to({x:436,y:52.2},0).wait(1).to({x:439.1,y:52.5},0).wait(1).to({x:442.1,y:52.7},0).wait(1).to({x:445.1,y:53},0).wait(1).to({x:448.1,y:53.3},0).wait(1).to({x:451.2,y:53.5},0).wait(1).to({x:454.2,y:53.8},0).wait(1).to({x:457.2,y:54.1},0).wait(1).to({x:460.2,y:54.3},0).wait(1).to({x:463.3,y:54.6},0).wait(1).to({x:466.3,y:54.9},0).wait(1).to({x:469.3,y:55.2},0).wait(1).to({x:472.3,y:55.4},0).wait(1).to({x:475.4,y:55.7},0).wait(1).to({x:478.4,y:56},0).wait(1).to({x:481.4,y:56.2},0).wait(1).to({x:484.4,y:56.5},0).wait(1).to({x:487.5,y:56.8},0).wait(1).to({x:490.5,y:57.1},0).wait(1).to({x:493.5,y:57.3},0).wait(1).to({x:496.5,y:57.6},0).wait(1).to({x:499.6,y:57.9},0).wait(1).to({x:502.6,y:58.1},0).wait(1).to({x:505.6,y:58.4},0).wait(1).to({x:508.6,y:58.7},0).wait(1).to({x:511.7,y:59},0).wait(1).to({x:514.7,y:59.2},0).wait(1).to({x:517.7,y:59.5},0).wait(1).to({x:520.7,y:59.8},0).wait(1).to({x:523.8,y:60},0).wait(1).to({x:526.8,y:60.3},0).wait(1).to({x:529.8,y:60.6},0).wait(1).to({x:532.8,y:60.9},0).wait(1).to({x:535.9,y:61.1},0).wait(1).to({x:538.9,y:61.4},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.SymWaterFlow1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(181.9,29.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:184.9,y:29.7},0).wait(1).to({x:188,y:29.9},0).wait(1).to({x:191,y:30.2},0).wait(1).to({x:194,y:30.5},0).wait(1).to({x:197,y:30.8},0).wait(1).to({x:200.1,y:31},0).wait(1).to({x:203.1,y:31.3},0).wait(1).to({x:206.1,y:31.6},0).wait(1).to({x:209.1,y:31.8},0).wait(1).to({x:212.2,y:32.1},0).wait(1).to({x:215.2,y:32.4},0).wait(1).to({x:218.2,y:32.7},0).wait(1).to({x:221.2,y:32.9},0).wait(1).to({x:224.3,y:33.2},0).wait(1).to({x:227.3,y:33.5},0).wait(1).to({x:230.3,y:33.7},0).wait(1).to({x:233.3,y:34},0).wait(1).to({x:236.4,y:34.3},0).wait(1).to({x:239.4,y:34.6},0).wait(1).to({x:242.4,y:34.8},0).wait(1).to({x:245.4,y:35.1},0).wait(1).to({x:248.5,y:35.4},0).wait(1).to({x:251.5,y:35.6},0).wait(1).to({x:254.5,y:35.9},0).wait(1).to({x:257.5,y:36.2},0).wait(1).to({x:260.6,y:36.5},0).wait(1).to({x:263.6,y:36.7},0).wait(1).to({x:266.6,y:37},0).wait(1).to({x:269.6,y:37.3},0).wait(1).to({x:272.7,y:37.5},0).wait(1).to({x:275.7,y:37.8},0).wait(1).to({x:278.7,y:38.1},0).wait(1).to({x:281.7,y:38.3},0).wait(1).to({x:284.8,y:38.6},0).wait(1).to({x:287.8,y:38.9},0).wait(1).to({x:290.8,y:39.2},0).wait(1).to({x:293.8,y:39.4},0).wait(1).to({x:296.9,y:39.7},0).wait(1).to({x:299.9,y:40},0).wait(1).to({x:302.9,y:40.2},0).wait(1).to({x:305.9,y:40.5},0).wait(1).to({x:309,y:40.8},0).wait(1).to({x:312,y:41.1},0).wait(1).to({x:315,y:41.3},0).wait(1).to({x:318,y:41.6},0).wait(1).to({x:321.1,y:41.9},0).wait(1).to({x:324.1,y:42.1},0).wait(1).to({x:327.1,y:42.4},0).wait(1).to({x:330.1,y:42.7},0).wait(1).to({x:333.2,y:43},0).wait(1).to({x:336.2,y:43.2},0).wait(1).to({x:339.2,y:43.5},0).wait(1).to({x:342.2,y:43.8},0).wait(1).to({x:345.3,y:44},0).wait(1).to({x:348.3,y:44.3},0).wait(1).to({x:351.3,y:44.6},0).wait(1).to({x:354.3,y:44.9},0).wait(1).to({x:357.4,y:45.1},0).wait(1).to({x:360.4,y:45.4},0).wait(1));

	// Layer 1
	this.instance_3 = new lib.SymWaterFlow1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:9.5,y:31.1},0).wait(1).to({x:12.6,y:31.3},0).wait(1).to({x:15.6,y:31.6},0).wait(1).to({x:18.6,y:31.9},0).wait(1).to({x:21.6,y:32.2},0).wait(1).to({x:24.7,y:32.4},0).wait(1).to({x:27.7,y:32.7},0).wait(1).to({x:30.7,y:33},0).wait(1).to({x:33.7,y:33.2},0).wait(1).to({x:36.8,y:33.5},0).wait(1).to({x:39.8,y:33.8},0).wait(1).to({x:42.8,y:34.1},0).wait(1).to({x:45.8,y:34.3},0).wait(1).to({x:48.9,y:34.6},0).wait(1).to({x:51.9,y:34.9},0).wait(1).to({x:54.9,y:35.1},0).wait(1).to({x:57.9,y:35.4},0).wait(1).to({x:61,y:35.7},0).wait(1).to({x:64,y:36},0).wait(1).to({x:67,y:36.2},0).wait(1).to({x:70,y:36.5},0).wait(1).to({x:73.1,y:36.8},0).wait(1).to({x:76.1,y:37},0).wait(1).to({x:79.1,y:37.3},0).wait(1).to({x:82.1,y:37.6},0).wait(1).to({x:85.2,y:37.9},0).wait(1).to({x:88.2,y:38.1},0).wait(1).to({x:91.2,y:38.4},0).wait(1).to({x:94.2,y:38.7},0).wait(1).to({x:97.3,y:38.9},0).wait(1).to({x:100.3,y:39.2},0).wait(1).to({x:103.3,y:39.5},0).wait(1).to({x:106.3,y:39.7},0).wait(1).to({x:109.4,y:40},0).wait(1).to({x:112.4,y:40.3},0).wait(1).to({x:115.4,y:40.6},0).wait(1).to({x:118.4,y:40.8},0).wait(1).to({x:121.5,y:41.1},0).wait(1).to({x:124.5,y:41.4},0).wait(1).to({x:127.5,y:41.6},0).wait(1).to({x:130.5,y:41.9},0).wait(1).to({x:133.6,y:42.2},0).wait(1).to({x:136.6,y:42.5},0).wait(1).to({x:139.6,y:42.7},0).wait(1).to({x:142.6,y:43},0).wait(1).to({x:145.7,y:43.3},0).wait(1).to({x:148.7,y:43.5},0).wait(1).to({x:151.7,y:43.8},0).wait(1).to({x:154.7,y:44.1},0).wait(1).to({x:157.8,y:44.4},0).wait(1).to({x:160.8,y:44.6},0).wait(1).to({x:163.8,y:44.9},0).wait(1).to({x:166.8,y:45.2},0).wait(1).to({x:169.9,y:45.4},0).wait(1).to({x:172.9,y:45.7},0).wait(1).to({x:175.9,y:46},0).wait(1).to({x:178.9,y:46.3},0).wait(1).to({x:182,y:46.5},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,549.9,82.2);


(lib.SymWaterFlowTween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.SymWaterFlow1();
	this.instance.parent = this;
	this.instance.setTransform(360.4,45.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:363.4,y:45.7},0).wait(1).to({x:366.5,y:45.9},0).wait(1).to({x:369.5,y:46.2},0).wait(1).to({x:372.5,y:46.5},0).wait(1).to({x:375.5,y:46.8},0).wait(1).to({x:378.6,y:47},0).wait(1).to({x:381.6,y:47.3},0).wait(1).to({x:384.6,y:47.6},0).wait(1).to({x:387.6,y:47.8},0).wait(1).to({x:390.7,y:48.1},0).wait(1).to({x:393.7,y:48.4},0).wait(1).to({x:396.7,y:48.7},0).wait(1).to({x:399.7,y:48.9},0).wait(1).to({x:402.8,y:49.2},0).wait(1).to({x:405.8,y:49.5},0).wait(1).to({x:408.8,y:49.7},0).wait(1).to({x:411.8,y:50},0).wait(1).to({x:414.9,y:50.3},0).wait(1).to({x:417.9,y:50.6},0).wait(1).to({x:420.9,y:50.8},0).wait(1).to({x:423.9,y:51.1},0).wait(1).to({x:427,y:51.4},0).wait(1).to({x:430,y:51.6},0).wait(1).to({x:433,y:51.9},0).wait(1).to({x:436,y:52.2},0).wait(1).to({x:439.1,y:52.5},0).wait(1).to({x:442.1,y:52.7},0).wait(1).to({x:445.1,y:53},0).wait(1).to({x:448.1,y:53.3},0).wait(1).to({x:451.2,y:53.5},0).wait(1).to({x:454.2,y:53.8},0).wait(1).to({x:457.2,y:54.1},0).wait(1).to({x:460.2,y:54.3},0).wait(1).to({x:463.3,y:54.6},0).wait(1).to({x:466.3,y:54.9},0).wait(1).to({x:469.3,y:55.2},0).wait(1).to({x:472.3,y:55.4},0).wait(1).to({x:475.4,y:55.7},0).wait(1).to({x:478.4,y:56},0).wait(1).to({x:481.4,y:56.2},0).wait(1).to({x:484.4,y:56.5},0).wait(1).to({x:487.5,y:56.8},0).wait(1).to({x:490.5,y:57.1},0).wait(1).to({x:493.5,y:57.3},0).wait(1).to({x:496.5,y:57.6},0).wait(1).to({x:499.6,y:57.9},0).wait(1).to({x:502.6,y:58.1},0).wait(1).to({x:505.6,y:58.4},0).wait(1).to({x:508.6,y:58.7},0).wait(1).to({x:511.7,y:59},0).wait(1).to({x:514.7,y:59.2},0).wait(1).to({x:517.7,y:59.5},0).wait(1).to({x:520.7,y:59.8},0).wait(1).to({x:523.8,y:60},0).wait(1).to({x:526.8,y:60.3},0).wait(1).to({x:529.8,y:60.6},0).wait(1).to({x:532.8,y:60.9},0).wait(1).to({x:535.9,y:61.1},0).wait(1).to({x:538.9,y:61.4},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.SymWaterFlow1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.9,29.4,1,1,0,0,0,3.4,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:184.9,y:29.7},0).wait(1).to({x:188,y:29.9},0).wait(1).to({x:191,y:30.2},0).wait(1).to({x:194,y:30.5},0).wait(1).to({x:197,y:30.8},0).wait(1).to({x:200.1,y:31},0).wait(1).to({x:203.1,y:31.3},0).wait(1).to({x:206.1,y:31.6},0).wait(1).to({x:209.1,y:31.8},0).wait(1).to({x:212.2,y:32.1},0).wait(1).to({x:215.2,y:32.4},0).wait(1).to({x:218.2,y:32.7},0).wait(1).to({x:221.2,y:32.9},0).wait(1).to({x:224.3,y:33.2},0).wait(1).to({x:227.3,y:33.5},0).wait(1).to({x:230.3,y:33.7},0).wait(1).to({x:233.3,y:34},0).wait(1).to({x:236.4,y:34.3},0).wait(1).to({x:239.4,y:34.6},0).wait(1).to({x:242.4,y:34.8},0).wait(1).to({x:245.4,y:35.1},0).wait(1).to({x:248.5,y:35.4},0).wait(1).to({x:251.5,y:35.6},0).wait(1).to({x:254.5,y:35.9},0).wait(1).to({x:257.5,y:36.2},0).wait(1).to({x:260.6,y:36.5},0).wait(1).to({x:263.6,y:36.7},0).wait(1).to({x:266.6,y:37},0).wait(1).to({x:269.6,y:37.3},0).wait(1).to({x:272.7,y:37.5},0).wait(1).to({x:275.7,y:37.8},0).wait(1).to({x:278.7,y:38.1},0).wait(1).to({x:281.7,y:38.3},0).wait(1).to({x:284.8,y:38.6},0).wait(1).to({x:287.8,y:38.9},0).wait(1).to({x:290.8,y:39.2},0).wait(1).to({x:293.8,y:39.4},0).wait(1).to({x:296.9,y:39.7},0).wait(1).to({x:299.9,y:40},0).wait(1).to({x:302.9,y:40.2},0).wait(1).to({x:305.9,y:40.5},0).wait(1).to({x:309,y:40.8},0).wait(1).to({x:312,y:41.1},0).wait(1).to({x:315,y:41.3},0).wait(1).to({x:318,y:41.6},0).wait(1).to({x:321.1,y:41.9},0).wait(1).to({x:324.1,y:42.1},0).wait(1).to({x:327.1,y:42.4},0).wait(1).to({x:330.1,y:42.7},0).wait(1).to({x:333.2,y:43},0).wait(1).to({x:336.2,y:43.2},0).wait(1).to({x:339.2,y:43.5},0).wait(1).to({x:342.2,y:43.8},0).wait(1).to({x:345.3,y:44},0).wait(1).to({x:348.3,y:44.3},0).wait(1).to({x:351.3,y:44.6},0).wait(1).to({x:354.3,y:44.9},0).wait(1).to({x:357.4,y:45.1},0).wait(1).to({x:360.4,y:45.4},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.SymWaterFlow1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:9.5,y:31.1},0).wait(1).to({x:12.6,y:31.3},0).wait(1).to({x:15.6,y:31.6},0).wait(1).to({x:18.6,y:31.9},0).wait(1).to({x:21.6,y:32.2},0).wait(1).to({x:24.7,y:32.4},0).wait(1).to({x:27.7,y:32.7},0).wait(1).to({x:30.7,y:33},0).wait(1).to({x:33.7,y:33.2},0).wait(1).to({x:36.8,y:33.5},0).wait(1).to({x:39.8,y:33.8},0).wait(1).to({x:42.8,y:34.1},0).wait(1).to({x:45.8,y:34.3},0).wait(1).to({x:48.9,y:34.6},0).wait(1).to({x:51.9,y:34.9},0).wait(1).to({x:54.9,y:35.1},0).wait(1).to({x:57.9,y:35.4},0).wait(1).to({x:61,y:35.7},0).wait(1).to({x:64,y:36},0).wait(1).to({x:67,y:36.2},0).wait(1).to({x:70,y:36.5},0).wait(1).to({x:73.1,y:36.8},0).wait(1).to({x:76.1,y:37},0).wait(1).to({x:79.1,y:37.3},0).wait(1).to({x:82.1,y:37.6},0).wait(1).to({x:85.2,y:37.9},0).wait(1).to({x:88.2,y:38.1},0).wait(1).to({x:91.2,y:38.4},0).wait(1).to({x:94.2,y:38.7},0).wait(1).to({x:97.3,y:38.9},0).wait(1).to({x:100.3,y:39.2},0).wait(1).to({x:103.3,y:39.5},0).wait(1).to({x:106.3,y:39.7},0).wait(1).to({x:109.4,y:40},0).wait(1).to({x:112.4,y:40.3},0).wait(1).to({x:115.4,y:40.6},0).wait(1).to({x:118.4,y:40.8},0).wait(1).to({x:121.5,y:41.1},0).wait(1).to({x:124.5,y:41.4},0).wait(1).to({x:127.5,y:41.6},0).wait(1).to({x:130.5,y:41.9},0).wait(1).to({x:133.6,y:42.2},0).wait(1).to({x:136.6,y:42.5},0).wait(1).to({x:139.6,y:42.7},0).wait(1).to({x:142.6,y:43},0).wait(1).to({x:145.7,y:43.3},0).wait(1).to({x:148.7,y:43.5},0).wait(1).to({x:151.7,y:43.8},0).wait(1).to({x:154.7,y:44.1},0).wait(1).to({x:157.8,y:44.4},0).wait(1).to({x:160.8,y:44.6},0).wait(1).to({x:163.8,y:44.9},0).wait(1).to({x:166.8,y:45.2},0).wait(1).to({x:169.9,y:45.4},0).wait(1).to({x:172.9,y:45.7},0).wait(1).to({x:175.9,y:46},0).wait(1).to({x:178.9,y:46.3},0).wait(1).to({x:182,y:46.5},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,371.4,66.2);


(lib.SymWaterFlowTween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1();
	this.instance.parent = this;
	this.instance.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:9.5,y:31.1},0).wait(1).to({x:12.6,y:31.3},0).wait(1).to({x:15.6,y:31.6},0).wait(1).to({x:18.6,y:31.9},0).wait(1).to({x:21.6,y:32.2},0).wait(1).to({x:24.7,y:32.4},0).wait(1).to({x:27.7,y:32.7},0).wait(1).to({x:30.7,y:33},0).wait(1).to({x:33.7,y:33.2},0).wait(1).to({x:36.8,y:33.5},0).wait(1).to({x:39.8,y:33.8},0).wait(1).to({x:42.8,y:34.1},0).wait(1).to({x:45.8,y:34.3},0).wait(1).to({x:48.9,y:34.6},0).wait(1).to({x:51.9,y:34.9},0).wait(1).to({x:54.9,y:35.1},0).wait(1).to({x:57.9,y:35.4},0).wait(1).to({x:61,y:35.7},0).wait(1).to({x:64,y:36},0).wait(1).to({x:67,y:36.2},0).wait(1).to({x:70,y:36.5},0).wait(1).to({x:73.1,y:36.8},0).wait(1).to({x:76.1,y:37},0).wait(1).to({x:79.1,y:37.3},0).wait(1).to({x:82.1,y:37.6},0).wait(1).to({x:85.2,y:37.9},0).wait(1).to({x:88.2,y:38.1},0).wait(1).to({x:91.2,y:38.4},0).wait(1).to({x:94.2,y:38.7},0).wait(1).to({x:97.3,y:38.9},0).wait(1).to({x:100.3,y:39.2},0).wait(1).to({x:103.3,y:39.5},0).wait(1).to({x:106.3,y:39.7},0).wait(1).to({x:109.4,y:40},0).wait(1).to({x:112.4,y:40.3},0).wait(1).to({x:115.4,y:40.6},0).wait(1).to({x:118.4,y:40.8},0).wait(1).to({x:121.5,y:41.1},0).wait(1).to({x:124.5,y:41.4},0).wait(1).to({x:127.5,y:41.6},0).wait(1).to({x:130.5,y:41.9},0).wait(1).to({x:133.6,y:42.2},0).wait(1).to({x:136.6,y:42.5},0).wait(1).to({x:139.6,y:42.7},0).wait(1).to({x:142.6,y:43},0).wait(1).to({x:145.7,y:43.3},0).wait(1).to({x:148.7,y:43.5},0).wait(1).to({x:151.7,y:43.8},0).wait(1).to({x:154.7,y:44.1},0).wait(1).to({x:157.8,y:44.4},0).wait(1).to({x:160.8,y:44.6},0).wait(1).to({x:163.8,y:44.9},0).wait(1).to({x:166.8,y:45.2},0).wait(1).to({x:169.9,y:45.4},0).wait(1).to({x:172.9,y:45.7},0).wait(1).to({x:175.9,y:46},0).wait(1).to({x:178.9,y:46.3},0).wait(1).to({x:182,y:46.5},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,14.4,34.2);


(lib.SymStripesTween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer R1
	this.instance = new lib.SymArrStripeR1();
	this.instance.parent = this;
	this.instance.setTransform(47.5,-2,1,1,0,0,0,5.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:46.6,y:-1.9},0).wait(1).to({x:45.7},0).wait(1).to({x:44.7,y:-1.8},0).wait(1).to({x:43.8},0).wait(1).to({x:42.8,y:-1.7},0).wait(1).to({x:41.9},0).wait(1).to({x:40.9,y:-1.6},0).wait(1).to({x:40},0).wait(1).to({x:39,y:-1.5},0).wait(1).to({x:38.1},0).wait(1).to({x:37.1,y:-1.4},0).wait(1).to({x:36.2},0).wait(1).to({x:35.2,y:-1.3},0).wait(1).to({x:34.3},0).wait(1).to({x:33.3,y:-1.2},0).wait(1).to({x:32.4},0).wait(1).to({x:31.4,y:-1.1},0).wait(1).to({x:30.5},0).wait(1).to({x:29.5,y:-1},0).to({_off:true},1).wait(20));

	// Layer R2
	this.instance_1 = new lib.SymArrStripeR2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.5,20,1,1,0,0,0,5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:46.6},0).wait(1).to({x:45.7},0).wait(1).to({x:44.7},0).wait(1).to({x:43.8},0).wait(1).to({x:42.8},0).wait(1).to({x:41.9},0).wait(1).to({x:40.9},0).wait(1).to({x:40},0).wait(1).to({x:39},0).wait(1).to({x:38.1},0).wait(1).to({x:37.1},0).wait(1).to({x:36.2},0).wait(1).to({x:35.2},0).wait(1).to({x:34.3},0).wait(1).to({x:33.3},0).wait(1).to({x:32.4},0).wait(1).to({x:31.4},0).wait(1).to({x:30.5},0).wait(1).to({x:29.5},0).to({_off:true},1).wait(20));

	// Layer R3
	this.instance_2 = new lib.SymArrStripeR3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.5,45.5,1,1,0,0,0,5.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:46.6,y:45.2},0).wait(1).to({x:45.7,y:44.8},0).wait(1).to({x:44.7,y:44.4},0).wait(1).to({x:43.8,y:44.1},0).wait(1).to({x:42.8,y:43.7},0).wait(1).to({x:41.9,y:43.3},0).wait(1).to({x:40.9,y:43},0).wait(1).to({x:40,y:42.6},0).wait(1).to({x:39,y:42.2},0).wait(1).to({x:38.1,y:41.9},0).wait(1).to({x:37.1,y:41.5},0).wait(1).to({x:36.2,y:41.1},0).wait(1).to({x:35.2,y:40.8},0).wait(1).to({x:34.3,y:40.4},0).wait(1).to({x:33.3,y:40},0).wait(1).to({x:32.4,y:39.7},0).wait(1).to({x:31.4,y:39.3},0).wait(1).to({x:30.5,y:38.9},0).wait(1).to({x:29.5,y:38.5},0).to({_off:true},1).wait(20));

	// Layer L1
	this.instance_3 = new lib.SymArrStripeL1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-29.5,-2,1,1,0,0,0,5.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-28.6,y:-1.9},0).wait(1).to({x:-27.6},0).wait(1).to({x:-26.7,y:-1.8},0).wait(1).to({x:-25.7},0).wait(1).to({x:-24.8,y:-1.7},0).wait(1).to({x:-23.8},0).wait(1).to({x:-22.9,y:-1.6},0).wait(1).to({x:-21.9},0).wait(1).to({x:-21,y:-1.5},0).wait(1).to({x:-20},0).wait(1).to({x:-19.1,y:-1.4},0).wait(1).to({x:-18.1},0).wait(1).to({x:-17.2,y:-1.3},0).wait(1).to({x:-16.2},0).wait(1).to({x:-15.3,y:-1.2},0).wait(1).to({x:-14.3},0).wait(1).to({x:-13.4,y:-1.1},0).wait(1).to({x:-12.4},0).wait(1).to({x:-11.5,y:-1},0).to({_off:true},1).wait(20));

	// Layer L2
	this.instance_4 = new lib.SymArrStripeL2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-29.5,20,1,1,0,0,0,5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-28.6},0).wait(1).to({x:-27.6},0).wait(1).to({x:-26.7},0).wait(1).to({x:-25.7},0).wait(1).to({x:-24.8},0).wait(1).to({x:-23.8},0).wait(1).to({x:-22.9},0).wait(1).to({x:-21.9},0).wait(1).to({x:-21},0).wait(1).to({x:-20},0).wait(1).to({x:-19.1},0).wait(1).to({x:-18.1},0).wait(1).to({x:-17.2},0).wait(1).to({x:-16.2},0).wait(1).to({x:-15.3},0).wait(1).to({x:-14.3},0).wait(1).to({x:-13.4},0).wait(1).to({x:-12.4},0).wait(1).to({x:-11.5},0).to({_off:true},1).wait(20));

	// Layer L3
	this.instance_5 = new lib.SymArrStripeL3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-29.5,45.5,1,1,0,0,0,5.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-28.6,y:45.2},0).wait(1).to({x:-27.6,y:44.8},0).wait(1).to({x:-26.7,y:44.4},0).wait(1).to({x:-25.7,y:44.1},0).wait(1).to({x:-24.8,y:43.7},0).wait(1).to({x:-23.8,y:43.3},0).wait(1).to({x:-22.9,y:43},0).wait(1).to({x:-21.9,y:42.6},0).wait(1).to({x:-21,y:42.2},0).wait(1).to({x:-20,y:41.9},0).wait(1).to({x:-19.1,y:41.5},0).wait(1).to({x:-18.1,y:41.1},0).wait(1).to({x:-17.2,y:40.8},0).wait(1).to({x:-16.2,y:40.4},0).wait(1).to({x:-15.3,y:40},0).wait(1).to({x:-14.3,y:39.7},0).wait(1).to({x:-13.4,y:39.3},0).wait(1).to({x:-12.4,y:38.9},0).wait(1).to({x:-11.5,y:38.5},0).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-7,109,60);


(lib.SymSquiggle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.watersquiggle();
	this.instance.parent = this;
	this.instance.setTransform(6.5,0,0.399,0.399,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:-0.1,x:7.7,y:0.2},0).wait(1).to({x:8.8,y:0.4},0).wait(1).to({x:10,y:0.7},0).wait(1).to({x:11.1,y:0.9},0).wait(1).to({x:12.2,y:1.1},0).wait(1).to({x:13.4,y:1.4},0).wait(1).to({x:14.5,y:1.6},0).wait(1).to({x:15.6,y:1.8},0).wait(1).to({x:16.8,y:2.1},0).wait(1).to({x:17.9,y:2.3},0).wait(1).to({x:19,y:2.6},0).wait(1).to({x:20.2,y:2.8},0).wait(1).to({x:21.3,y:3},0).wait(1).to({x:22.4,y:3.3},0).wait(1).to({x:23.6,y:3.5},0).wait(1).to({x:24.7,y:3.7},0).wait(1).to({x:25.8,y:4},0).wait(1).to({x:27,y:4.2},0).wait(1).to({x:28.1,y:4.5},0).wait(1).to({x:29.2,y:4.7},0).wait(1).to({x:30.4,y:4.9},0).wait(1).to({x:31.5,y:5.2},0).wait(1).to({x:32.6,y:5.4},0).wait(1).to({x:33.8,y:5.6},0).wait(1).to({x:34.9,y:5.9},0).wait(1).to({x:36.1,y:6.1},0).wait(1).to({x:37.2,y:6.4},0).wait(1).to({x:38.3,y:6.6},0).wait(1).to({x:39.5,y:6.8},0).wait(1).to({x:40.6,y:7.1},0).wait(1).to({x:41.7,y:7.3},0).wait(1).to({x:42.9,y:7.5},0).wait(1).to({x:44,y:7.8},0).wait(1).to({x:45.1,y:8},0).wait(1).to({x:46.3,y:8.3},0).wait(1).to({x:47.4,y:8.5},0).wait(1).to({x:48.5,y:8.7},0).wait(1).to({x:49.7,y:9},0).wait(1).to({x:50.8,y:9.2},0).wait(1).to({x:51.9,y:9.4},0).wait(1).to({x:53.1,y:9.7},0).wait(1).to({x:54.2,y:9.9},0).wait(1).to({x:55.3,y:10.2},0).wait(1).to({x:56.5,y:10.4},0).wait(1).to({x:57.6,y:10.6},0).wait(1).to({x:58.7,y:10.9},0).wait(1).to({x:59.9,y:11.1},0).wait(1).to({x:61,y:11.3},0).wait(1).to({x:62.2,y:11.6},0).wait(1).to({x:63.3,y:11.8},0).wait(1).to({x:64.4,y:12.1},0).wait(1).to({x:65.6,y:12.3},0).wait(1).to({x:66.7,y:12.5},0).wait(1).to({x:67.8,y:12.8},0).wait(1).to({x:69,y:13},0).wait(1).to({x:70.1,y:13.2},0).wait(1).to({x:71.2,y:13.5},0).wait(1).to({x:72.4,y:13.7},0).wait(1).to({x:73.5,y:14},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,15.7,19.7);


(lib.SymSquiggle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.watersquiggle();
	this.instance.parent = this;
	this.instance.setTransform(13,14,0.702,0.702,90,0,0,19.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:21.1,x:13.3,y:14.8},0).wait(1).to({x:13.6,y:15.6},0).wait(1).to({x:13.9,y:16.4},0).wait(1).to({x:14.1,y:17.2},0).wait(1).to({x:14.4,y:18},0).wait(1).to({x:14.7,y:18.7},0).wait(1).to({x:15,y:19.5},0).wait(1).to({x:15.2,y:20.3},0).wait(1).to({x:15.5,y:21.1},0).wait(1).to({x:15.8,y:21.9},0).wait(1).to({x:16.1,y:22.7},0).wait(1).to({x:16.3,y:23.5},0).wait(1).to({x:16.6,y:24.3},0).wait(1).to({x:16.9,y:25.1},0).wait(1).to({x:17.2,y:25.9},0).wait(1).to({x:17.4,y:26.7},0).wait(1).to({x:17.7,y:27.5},0).wait(1).to({x:18,y:28.2},0).wait(1).to({x:18.3,y:29},0).wait(1).to({x:18.5,y:29.8},0).wait(1).to({x:18.8,y:30.6},0).wait(1).to({x:19.1,y:31.4},0).wait(1).to({x:19.4,y:32.2},0).wait(1).to({x:19.6,y:33},0).wait(1).to({x:19.9,y:33.8},0).wait(1).to({x:20.2,y:34.6},0).wait(1).to({x:20.5,y:35.4},0).wait(1).to({x:20.7,y:36.2},0).wait(1).to({x:21,y:37},0).wait(1).to({x:21.3,y:37.7},0).wait(1).to({x:21.6,y:38.5},0).wait(1).to({x:21.8,y:39.3},0).wait(1).to({x:22.1,y:40.1},0).wait(1).to({x:22.4,y:40.9},0).wait(1).to({x:22.7,y:41.7},0).wait(1).to({x:22.9,y:42.5},0).wait(1).to({x:23.2,y:43.3},0).wait(1).to({x:23.5,y:44.1},0).wait(1).to({x:23.8,y:44.9},0).wait(1).to({x:24,y:45.7},0).wait(1).to({x:24.3,y:46.5},0).wait(1).to({x:24.6,y:47.2},0).wait(1).to({x:24.9,y:48},0).wait(1).to({x:25.1,y:48.8},0).wait(1).to({x:25.4,y:49.6},0).wait(1).to({x:25.7,y:50.4},0).wait(1).to({x:26,y:51.2},0).wait(1).to({x:26.2,y:52},0).wait(1).to({x:26.5,y:52.8},0).wait(1).to({x:26.8,y:53.6},0).wait(1).to({x:27.1,y:54.4},0).wait(1).to({x:27.3,y:55.2},0).wait(1).to({x:27.6,y:56},0).wait(1).to({x:27.9,y:56.7},0).wait(1).to({x:28.2,y:57.5},0).wait(1).to({x:28.4,y:58.3},0).wait(1).to({x:28.7,y:59.1},0).wait(1).to({x:29,y:59.9},0).wait(1).to({x:29.3,y:60.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,0,30.2,17.6);


(lib.SymSprayingWaterTween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymSprayingWater();
	this.instance.parent = this;
	this.instance.setTransform(33,40,1,1,0,0,0,32.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},18).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,1,65,78);


(lib.SymSprayingWater4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.sprayingwater = new lib.SymSprayingWaterTween();
	this.sprayingwater.parent = this;
	this.sprayingwater.setTransform(138.6,164,1,1,0,0,0,24,18.5);

	this.instance = new lib.SymSprayingWaterTween();
	this.instance.parent = this;
	this.instance.setTransform(32.5,39,1,1,0,0,0,33,40);

	this.instance_1 = new lib.SymSprayingWaterTween();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.5,80,1,1,0,0,0,33,40);

	this.instance_2 = new lib.SymSprayingWaterTween();
	this.instance_2.parent = this;
	this.instance_2.setTransform(110.6,125,1,1,0,0,0,33,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.sprayingwater}]}).to({state:[]},18).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.1,224.5);


(lib.SymSprayingWater3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.sprayingwater = new lib.SymSprayingWaterTween();
	this.sprayingwater.parent = this;
	this.sprayingwater.setTransform(101.6,123,1,1,0,0,0,24,18.5);

	this.sprayingwater3 = new lib.SymSprayingWaterTween();
	this.sprayingwater3.parent = this;
	this.sprayingwater3.setTransform(32.5,39,1,1,0,0,0,33,40);

	this.sprayingwater2 = new lib.SymSprayingWaterTween();
	this.sprayingwater2.parent = this;
	this.sprayingwater2.setTransform(73.6,84,1,1,0,0,0,33,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sprayingwater2},{t:this.sprayingwater3},{t:this.sprayingwater}]}).to({state:[]},18).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,183.5);


(lib.SymSprayingWater2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.sprayingwater = new lib.SymSprayingWaterTween();
	this.sprayingwater.parent = this;
	this.sprayingwater.setTransform(60.5,78,1,1,0,0,0,24,18.5);

	this.sprayingwater2 = new lib.SymSprayingWaterTween();
	this.sprayingwater2.parent = this;
	this.sprayingwater2.setTransform(32.5,39,1,1,0,0,0,33,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sprayingwater2},{t:this.sprayingwater}]}).to({state:[]},18).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,138.5);


(lib.SymScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Screen = new lib.screen();
	this.Screen.parent = this;
	this.Screen.setTransform(9,18,1,1,0,0,0,9,18);

	this.timeline.addTween(cjs.Tween.get(this.Screen).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,36);


(lib.SymRiverStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.riverStage7 = new lib.symHLine();
	this.riverStage7.parent = this;
	this.riverStage7.setTransform(5,72.1,1,1,0,0,0,5,0);

	this.riverStage6 = new lib.symHLine();
	this.riverStage6.parent = this;
	this.riverStage6.setTransform(5,60.1,1,1,0,0,0,5,0);

	this.riverStageV = new lib.symVLine();
	this.riverStageV.parent = this;
	this.riverStageV.setTransform(10,36.2,1,1.5,0,0,0,0,24.1);

	this.riverStage5 = new lib.symHLine();
	this.riverStage5.parent = this;
	this.riverStage5.setTransform(5,48.1,1,1,0,0,0,5,0);

	this.riverStage4 = new lib.symHLine();
	this.riverStage4.parent = this;
	this.riverStage4.setTransform(5,36.1,1,1,0,0,0,5,0);

	this.riverStage3 = new lib.symHLine();
	this.riverStage3.parent = this;
	this.riverStage3.setTransform(5,24.1,1,1,0,0,0,5,0);

	this.riverStage2 = new lib.symHLine();
	this.riverStage2.parent = this;
	this.riverStage2.setTransform(5,12.1,1,1,0,0,0,5,0);

	this.riverStage1 = new lib.symHLine();
	this.riverStage1.parent = this;
	this.riverStage1.setTransform(5,0.1,1,1,0,0,0,5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.riverStage1},{t:this.riverStage2},{t:this.riverStage3},{t:this.riverStage4},{t:this.riverStage5},{t:this.riverStageV},{t:this.riverStage6},{t:this.riverStage7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,12,75);


(lib.SymCorns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.corn();
	this.instance.parent = this;
	this.instance.setTransform(348,66,1,1,0,0,0,348,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,696,132);


(lib.SymArrowRchgTween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,5.5,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0.6,y:6.2},0).wait(1).to({y:7},0).wait(1).to({x:0.7,y:7.7},0).wait(1).to({y:8.4},0).wait(1).to({x:0.8,y:9.2},0).wait(1).to({x:0.9,y:9.9},0).wait(1).to({y:10.6},0).wait(1).to({x:1,y:11.4},0).wait(1).to({y:12.1},0).wait(1).to({x:1.1,y:12.9},0).wait(1).to({y:13.6},0).wait(1).to({x:1.2,y:14.3},0).wait(1).to({x:1.3,y:15.1},0).wait(1).to({y:15.8},0).wait(1).to({x:1.4,y:16.5},0).wait(1).to({y:17.3},0).wait(1).to({x:1.5,y:18},0).wait(1).to({x:1.6,y:18.7},0).wait(1).to({y:19.5},0).wait(1).to({x:1.7,y:20.2},0).wait(1).to({y:20.9},0).wait(1).to({x:1.8,y:21.7},0).wait(1).to({x:1.9,y:22.4},0).wait(1).to({y:23.1},0).wait(1).to({x:2,y:23.9},0).wait(1).to({y:24.6},0).wait(1).to({x:2.1,y:25.4},0).wait(1).to({y:26.1},0).wait(1).to({x:2.2,y:26.8},0).wait(1).to({x:2.3,y:27.6},0).wait(1).to({y:28.3},0).wait(1).to({x:2.4,y:29},0).wait(1).to({y:29.8},0).wait(1).to({x:2.5,y:30.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,16);


(lib.SymArrowRchgTween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg10();
	this.instance.parent = this;
	this.instance.setTransform(2,7,1,1,0,0,0,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.2,y:7.8},0).wait(1).to({x:2.5,y:8.6},0).wait(1).to({x:2.7,y:9.5},0).wait(1).to({x:2.9,y:10.3},0).wait(1).to({x:3.2,y:11.1},0).wait(1).to({x:3.4,y:11.9},0).wait(1).to({x:3.6,y:12.8},0).wait(1).to({x:3.9,y:13.6},0).wait(1).to({x:4.1,y:14.4},0).wait(1).to({x:4.4,y:15.2},0).wait(1).to({x:4.6,y:16.1},0).wait(1).to({x:4.8,y:16.9},0).wait(1).to({x:5.1,y:17.7},0).wait(1).to({x:5.3,y:18.5},0).wait(1).to({x:5.5,y:19.4},0).wait(1).to({x:5.8,y:20.2},0).wait(1).to({x:6,y:21},0).wait(1).to({x:6.2,y:21.8},0).wait(1).to({x:6.5,y:22.6},0).wait(1).to({x:6.7,y:23.5},0).wait(1).to({x:6.9,y:24.3},0).wait(1).to({x:7.2,y:25.1},0).wait(1).to({x:7.4,y:25.9},0).wait(1).to({x:7.6,y:26.8},0).wait(1).to({x:7.9,y:27.6},0).wait(1).to({x:8.1,y:28.4},0).wait(1).to({x:8.4,y:29.2},0).wait(1).to({x:8.6,y:30.1},0).wait(1).to({x:8.8,y:30.9},0).wait(1).to({x:9.1,y:31.7},0).wait(1).to({x:9.3,y:32.5},0).wait(1).to({x:9.5,y:33.4},0).wait(1).to({x:9.8,y:34.2},0).wait(1).to({x:10,y:35},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,19);


(lib.SymArrowRchgTween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6.5,y:26},19).to({rotation:-11},1).to({regX:2,x:-10,y:42.1},14).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymSquiggle2Tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymSquiggle2();
	this.instance.parent = this;
	this.instance.setTransform(74.9,23.8,1,1,0,0,0,7.9,9.8);

	this.instance_1 = new lib.SymSquiggle2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,9.8,1,1,0,0,0,7.9,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,82.7,33.7);


(lib.SymSquiggle1Tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymSquiggle1();
	this.instance.parent = this;
	this.instance.setTransform(18.5,46.7);

	this.instance_1 = new lib.SymSquiggle1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.4,64.3);


// stage content:



(lib.streamscenario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{GNEAROFF:0,GNEARON:1,GNEARONEND:32,GFAROFF:33,GFARON:34,GFARONEND:65,GMIDDLEOFF:66,GMIDDLEON:67,GMIDDLEONEND:98,LNEAROFF:99,LNEARON:100,LNEARONEND:131,LFAROFF:132,LFARON:133,LFARONEND:164,LMIDDLEOFF:165,LMIDDLEON:166,LMIDDLEONEND:197,DNEAROFF:198,DNEARON:199,DNEARONEND:230,DFAROFF:231,DFARON:232,DFARONEND:263,DMIDDLEOFF:264,DMIDDLEON:265,DMIDDLEONEND:296,TLOWOFF:297,TLOWONEND:298,TMEDIUMONEND:299,THIGHONEND:300,TVERYHIGHONEND:301});

	// timeline functions:
	this.frame_0 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_32 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_33 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_65 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_66 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_98 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_99 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_131 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_132 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_164 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_165 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_197 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_198 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_230 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_231 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_263 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_264 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPOFF) {
		    this.stop();
			ssgame.loadDepletionOff();
		}
	}
	this.frame_296 = function() {
		if (ssgame.curPumpStatus == ssgame.PumpStatus.PUMPON) {
		    this.stop();
			ssgame.loadDepletionOn();
		}
	}
	this.frame_297 = function() {
		this.stop();
		ssgame.loadDepletionOff();
	}
	this.frame_298 = function() {
		this.stop();
		ssgame.loadDepletionOn();
	}
	this.frame_299 = function() {
		this.stop();
		ssgame.loadDepletionOn();
	}
	this.frame_300 = function() {
		this.stop();
		ssgame.loadDepletionOn();
	}
	this.frame_301 = function() {
		this.stop();
		ssgame.loadDepletionOn();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(1).call(this.frame_33).wait(32).call(this.frame_65).wait(1).call(this.frame_66).wait(32).call(this.frame_98).wait(1).call(this.frame_99).wait(32).call(this.frame_131).wait(1).call(this.frame_132).wait(32).call(this.frame_164).wait(1).call(this.frame_165).wait(32).call(this.frame_197).wait(1).call(this.frame_198).wait(32).call(this.frame_230).wait(1).call(this.frame_231).wait(32).call(this.frame_263).wait(1).call(this.frame_264).wait(32).call(this.frame_296).wait(1).call(this.frame_297).wait(1).call(this.frame_298).wait(1).call(this.frame_299).wait(1).call(this.frame_300).wait(1).call(this.frame_301).wait(1));

	// origwt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EBfXAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIAAgGgHgEBeHAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBc3AF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBbnAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBaXAF6QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBZHAF6QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBX3AF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBWnAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBVXAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBUHAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIAAgGgHgEBS3AF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBRnAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBQXAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBPHAF6QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBN3AF6QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBMnAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBLXAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBKHAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBI3AF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIAAgGgHgEBHnAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBGXAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBFHAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBD3AF6QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBCnAF6QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBBXAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBAHAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEA+3AF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEA9nAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEA8XAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEA7HAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEA53AF5QgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEA4nAF2QgGgGABgIQgBgJAGgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAGQgGAFgJAAQgIAAgGgFgEA3XAFxQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEA2HAFvQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEA03AFqQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEAznAFoQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEAyXAFkQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEAxHAFgQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEAv3AFeQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgEAunAFbQgGgGABgJQgBgIAGgGQAGgGAJABQAIgBAFAGQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEAtXAFXQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEAsHAFVQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEAq3AFSQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEApnAFOQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEAoXAFMQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEAnHAFJQgGgGAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAGQgFAFgIAAQgJAAgGgFgEAl3AFFQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEAknAFDQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgEAjXAFAQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgEAiHAE8QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEAg3AE7QgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAfnE4QgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAeXE0QgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgAdHEyQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgAb3ExQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgAanEvQgGgGAAgJQAAgIAGgGQAGgFAJAAQAIAAAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgAZXEsQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgAYHEqQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgAW3EoQgGgFABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgAVnEnQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAUXElQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgATHEiQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgAR3EfQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgAQnEcQgGgGAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAGQgFAFgIAAQgJAAgGgFgAPXEWQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAOHETQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgAM3EOQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgALnEKQgGgGABgJQgBgIAGgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAKXEFQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAJHEBQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAH3D7QgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgAGnD4QgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgAFXDyQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAEHDvQgGgGAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAGQgFAFgIAAQgJAAgGgFgAC3DpQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgABnDmQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgAAXDhQgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAg3DdQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAiHDYQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAjXDUQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgAknDOQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgAl3DLQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgAnHDFQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAoXDCQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgApnC9QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgAq2C2QgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgAsGCwQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAtWCoQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgAumCgQgGgGAAgJQAAgIAGgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAJgGAGQgFAFgJAAQgIAAgGgFgAv2CYQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAxGCRQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgAyWCKQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgAzmCEQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgA02B9QgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgA2GB1QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgA3WBuQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgA4mBoQgFgGgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAGQgGAFgJAAQgIAAgGgFgA52BhQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgA7GBaQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgA8WBSQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgA9mBLQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgA+2BFQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEggGAA9QgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEghWAA1QgFgFAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEgimAAtQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEgj2AAmQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEglGAAeQgFgFgBgIQABgJAFgGQAGgEAIABQAJgBAGAEQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEgmWAAXQgGgGAAgJQAAgIAGgEQAGgGAJABQAIgBAFAGQAHAEAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEgnmAAQQgGgGAAgJQAAgGAGgGQAGgFAJgBQAIABAFAFQAHAGAAAGQAAAJgHAGQgFAFgIAAQgJAAgGgFgEgo2AAIQgGgGABgHQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAHgHAGQgFAFgIABQgJgBgGgFgEgqGAAAQgGgDABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHADQgFAHgIAAQgJAAgGgHgEgrWgAGQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAGgJAAQgIAAgGgGgEgsmgANQgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgEgt2gAUQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEgvGgAbQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgEgwWgAjQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEgxmgArQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEgy2gAzQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEg0GgA6QgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgEg1WgBBQgGgGABgJQgBgIAGgGQAGgGAJABQAIgBAFAGQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEg2mgBIQgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEg32gBQQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEg5GgBZQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEg6WgBgQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEg7mgBoQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAFAGQAGAGABAJQgBAIgGAFQgFAHgJAAQgIAAgGgHgEg82gBwQgGgFAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEg+GgB3QgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEg/WgB/QgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEhAlgCIQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgIAAQgJAAgGgFgEhB0gCQQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEhDDgCZQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAJgGAGQgFAFgJAAQgIAAgGgFgEhETgChQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhFjgCqQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhGzgCzQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhIDgC7QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEhJTgDDQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEhKjgDLQgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgEhLzgDTQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgEhNDgDaQgFgGgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAGQgGAFgJAAQgIAAgGgFgEhOTgDiQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgEhPjgDqQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEhQzgDyQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhSDgD7QgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhTTgEEQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhUjgENQgGgFABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEhVzgEVQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEhXDgEfQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEhYTgEoQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgEhZjgExQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAFAFQAGAGABAIQgBAJgGAFQgFAGgJABQgIgBgGgGgEhazgE6QgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgEhcDgFCQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhdTgFMQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhejgFVQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhfzgFeQgGgFABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGg");
	this.shape.setTransform(611.8,346.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ehf1AAxQgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEhelAAwQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEhdVAAvQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEha1AAuQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEhcFAAuQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEhYVAAsQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEhZlAAsQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAFAGQAGAGABAJQgBAIgGAFQgFAHgJgBQgIABgGgHgEhV1AArQgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEhXFAArQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEhTVAAqQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEhUlAAqQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEhQ1AApQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEhSFAApQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEhOVAApQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEhPlAApQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhL1AAoQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEhNFAAoQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEhJVAAnQgGgGABgJQgBgIAGgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEhKlAAnQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEhG1AAmQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEhIFAAmQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEhEVAAlQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEhFlAAlQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEhB1AAjQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEhDFAAjQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAFAGQAGAGABAJQgBAIgGAFQgFAHgJgBQgIABgGgHgEg/VAAiQgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEhAlAAiQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEg81AAhQgGgFABgIQgBgJAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEg+FAAhQgGgFABgIQgBgJAGgGQAGgFAIAAQAJAAAGAFQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEg6VAAgQgGgFAAgIQAAgJAGgGQAGgEAJAAQAIAAAFAEQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEg7lAAgQgGgFABgIQgBgJAGgGQAGgEAJAAQAIAAAFAEQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEg31AAfQgFgFgBgJQABgIAFgGQAGgDAIgBQAJABAFADQAGAGABAIQgBAJgGAFQgFAGgJABQgIgBgGgGgEg5FAAfQgGgFAAgJQAAgIAGgGQAGgDAJgBQAIABAFADQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgEg1VAAfQgFgGgBgJQABgIAFgGQAGgDAIgBQAJABAGADQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEg2lAAfQgFgGgBgJQABgIAFgGQAGgDAIgBQAJABAGADQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEgy1AAeQgGgGABgJQgBgIAGgGQAGgDAIAAQAJAAAGADQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEg0FAAeQgFgGAAgJQAAgIAFgGQAGgDAIAAQAJAAAGADQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEgxlAAdQgGgGABgJQgBgIAGgGQAGgDAJAAQAIAAAFADQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEgwVAAcQgGgGABgJQgBgIAGgFQAGgFAJABQAIgBAFAFQAHAFgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEgvFAAaQgGgFAAgIQAAgJAGgEQAGgGAJABQAIgBAFAGQAHAEAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEgt1AAZQgGgFAAgIQAAgJAGgEQAGgGAJABQAIgBAFAGQAHAEAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEgslAAYQgFgFgBgIQABgJAFgEQAGgGAIAAQAJAAAFAGQAGAEABAJQgBAIgGAFQgFAHgJAAQgIAAgGgHgEgrVAAXQgFgFgBgIQABgJAFgEQAGgGAIAAQAJAAAGAGQAFAEABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEgqFAAWQgFgFgBgJQABgIAFgEQAGgFAIgBQAJABAGAFQAFAEAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEgo1AAWQgFgGAAgJQAAgHAFgFQAGgFAIgBQAJABAGAFQAFAFAAAHQAAAJgFAGQgGAFgJABQgIgBgGgFgEgnlAAVQgGgGABgJQgBgGAGgGQAGgFAIgBQAJABAGAFQAFAGAAAGQAAAJgFAGQgGAFgJAAQgIAAgGgFgEgmVAAUQgGgGABgJQgBgGAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAGQABAJgHAGQgFAFgIAAQgJAAgGgFgEglFAATQgGgGABgIQgBgHAGgGQAGgGAJABQAIgBAFAGQAHAGgBAHQABAIgHAGQgFAFgIAAQgJAAgGgFgEgj1AARQgGgFAAgIQAAgHAGgGQAGgGAJABQAIgBAFAGQAHAGAAAHQAAAIgHAFQgFAHgIgBQgJABgGgHgEghVAAQQgFgFgBgIQABgHAFgGQAGgGAIABQAJgBAFAGQAGAGABAHQgBAIgGAFQgFAHgJgBQgIABgGgHgEgilAAQQgGgFAAgIQAAgHAGgGQAGgGAJABQAIgBAFAGQAHAGAAAHQAAAIgHAFQgFAHgIgBQgJABgGgHgA+1APQgFgFgBgIQABgHAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAHQAAAIgFAFQgGAHgJAAQgIAAgGgHgEggFAAPQgFgFgBgIQABgHAFgGQAGgGAIAAQAJAAAGAGQAFAGABAHQgBAIgFAFQgGAHgJAAQgIAAgGgHgA8VAOQgGgFABgIQgBgHAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAHQAAAIgFAFQgGAHgJAAQgIAAgGgHgA9lAOQgFgFAAgIQAAgHAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAHQAAAIgFAFQgGAHgJAAQgIAAgGgHgA51ANQgGgFABgIQgBgHAGgGQAGgFAJgBQAIABAFAFQAHAGgBAHQABAIgHAFQgFAGgIABQgJgBgGgGgA7FANQgGgFABgIQgBgHAGgGQAGgFAJgBQAIABAFAFQAHAGgBAHQABAIgHAFQgFAGgIABQgJgBgGgGgA3VANQgGgGAAgHQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAHgHAGQgFAFgIABQgJgBgGgFgA4lANQgGgGAAgHQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAHgHAGQgFAFgIABQgJgBgGgFgA01AMQgFgGgBgHQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAHgFAGQgGAFgJAAQgIAAgGgFgA2FAMQgFgGgBgHQABgIAFgGQAGgFAIgBQAJABAFAFQAGAGABAIQgBAHgGAGQgFAFgJAAQgIAAgGgFgAyVALQgFgGAAgHQAAgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAHgFAGQgGAFgJAAQgIAAgGgFgAzlALQgFgGgBgHQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAHgFAGQgGAFgJAAQgIAAgGgFgAv1AKQgGgGABgGQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAGgHAGQgFAFgIAAQgJAAgGgFgAxFAKQgGgGABgGQgBgJAGgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAGgFAGQgGAFgJAAQgIAAgGgFgAl1AIQgGgFABgGQgBgJAGgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAGgFAFQgGAHgJgBQgIABgGgHgAnFAIQgFgFAAgGQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAGgFAFQgGAHgJgBQgIABgGgHgAoVAIQgFgFgBgGQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAGgFAFQgGAHgJgBQgIABgGgHgAplAIQgFgFgBgGQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAGgFAFQgGAHgJgBQgIABgGgHgAq1AIQgFgFgBgGQABgJAFgGQAGgGAIABQAJgBAFAGQAGAGABAJQgBAGgGAFQgFAHgJgBQgIABgGgHgAsFAIQgGgFAAgGQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAGgHAFQgFAHgIgBQgJABgGgHgAtVAIQgGgFAAgGQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAGgHAFQgFAHgIgBQgJABgGgHgAulAIQgGgFABgGQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAGgHAFQgFAHgIgBQgJABgGgHgAjVAHQgGgFABgGQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAGgHAFQgFAHgIgBQgJABgGgHgAklAHQgGgFABgGQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAGgHAFQgFAHgIgBQgJABgGgHgAg1AGQgGgFAAgGQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAGgHAFQgFAHgIAAQgJAAgGgHgAiFAGQgGgFAAgGQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAGgHAFQgFAHgIAAQgJAAgGgHgABpAFQgFgFgBgGQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAGgFAFQgGAHgJAAQgIAAgGgHgAAZAFQgFgFgBgGQABgJAFgGQAGgGAIAAQAJAAAFAGQAGAGABAJQgBAGgGAFQgFAHgJAAQgIAAgGgHgAEJAFQgFgFAAgIQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAIgFAFQgGAFgJABQgIgBgGgFgAC5AFQgFgFAAgIQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAIgFAFQgGAFgJABQgIgBgGgFgAGpAEQgGgEABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAEQgFAFgIABQgJgBgGgFgAFZAEQgGgEABgJQgBgIAGgGQAGgFAJgBQAIABAGAFQAFAGAAAIQAAAJgFAEQgGAFgIABQgJgBgGgFgAJJADQgGgEAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAEQgFAFgIAAQgJAAgGgFgAH5ADQgGgEABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAEQgFAFgIAAQgJAAgGgFgALpACQgFgEgBgJQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAJgGAEQgFAFgJAAQgIAAgGgFgAKZACQgGgEAAgJQAAgIAGgGQAGgFAJAAQAIAAAFAFQAHAGAAAIQAAAJgHAEQgFAFgIAAQgJAAgGgFgAOJABQgFgEAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAEQgGAFgJAAQgIAAgGgFgAM5ABQgFgEgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGABAIQgBAJgFAEQgGAFgJAAQgIAAgGgFgAQpAAQgGgEABgIQgBgJAGgGQAGgGAJABQAIgBAGAGQAFAGAAAJQAAAIgFAEQgGAGgIgBQgJABgGgGgAPZAAQgFgEAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAEQgGAGgJgBQgIABgGgGgAR5AAQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAFgIAAQgJAAgGgFgATJgBQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAFgIAAQgJAAgGgFgAUZgCQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAFgIAAQgJAAgGgFgAVpgCQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFADgIABQgJgBgGgDgAW5gDQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAFAFQAGAGABAIQgBAJgGAGQgFADgJABQgIgBgGgDgAYJgEQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAEgJAAQgIAAgGgEgAZZgFQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAapgGQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAdJgIQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgAb5gIQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgIgBQgJABgGgHgAfpgJQgGgFAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgAeZgJQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBfZgAKQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgIAAQgJAAgGgHgEAiJgAKQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAFAGQAGAGABAJQgBAIgGAFQgFAHgJAAQgIAAgGgHgEAg5gAKQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBeJgALQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBc5gALQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEAkpgALQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEAjZgALQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBbpgAMQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgEBaZgAMQgGgFAAgJQAAgIAGgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgEAnJgAMQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAGAFQAFAGAAAIQAAAJgFAFQgGAGgIABQgJgBgGgGgEAl5gAMQgFgFAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEBZJgAMQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEBX5gAMQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEAppgAMQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEAoZgAMQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgEBWpgANQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEBVZgANQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEAsJgANQgGgGAAgJQAAgIAGgGQAGgFAJAAQAIAAAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEAq5gANQgGgGAAgJQAAgIAGgGQAGgFAJAAQAIAAAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEBUJgAOQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgIAAQgJAAgGgFgEBS5gAOQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEAupgAOQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgEAtZgAOQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAJgGAGQgFAFgJAAQgIAAgGgFgEBRpgAPQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEBQZgAPQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgEAxJgAPQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEAv5gAPQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEBPJgARQgGgFAAgIQAAgJAGgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEBN5gARQgGgFAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEAzpgARQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgEAyZgARQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgIgBQgJABgGgHgEBMpgASQgGgFAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEBLZgASQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEA2JgASQgGgFAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEA05gASQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEBKJgATQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBI5gATQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgIAAQgJAAgGgHgEA4pgATQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAFAGQAGAGABAJQgBAIgGAFQgFAHgJAAQgIAAgGgHgEA3ZgATQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBHpgAUQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBGZgAUQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBFJgAUQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBD5gAUQgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBCpgAUQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBBZgAUQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBAJgAUQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEA+5gAUQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEA9pgAUQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgIAAQgJAAgGgHgEA8ZgAUQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEA7JgAUQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEA55gAUQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHg");
	this.shape_1.setTransform(612,386.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ASABxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgAQvBxQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFgAPfBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAOPBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAM/BxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgALvBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAKgBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAJQBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAIABxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAGwBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgAFfBxQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFgAEPBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAC/BxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgABvBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgAAfBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAguBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAh+BxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAjOBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAkeBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgAlvBxQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFgAm/BxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAoPBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgApfBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgAqvBxQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAr+BxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAtOBxQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgATQBwQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAueBwQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAUgBvQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgAVwBtQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgAvuBtQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgAW/BsQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgAw/BsQgFgFAAgIQAAgJAFgGQAGgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgJAAgGgHgAYPBrQgFgFAAgIQAAgJAFgGQAHgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAFQgFAHgJAAQgIAAgHgHgAZfBqQgFgFAAgIQAAgJAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgAyPBqQgFgFAAgIQAAgJAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgAavBpQgFgFAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgIgBgHgGgAzfBpQgFgFAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgIgBgHgGgAb/BpQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgAdQBoQgGgGAAgJQAAgIAGgGQAFgFAJAAQAJAAAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgA0vBoQgFgGAAgJQAAgIAFgGQAHgFAIAAQAJAAAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgAegBnQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgA1/BnQgFgGAAgJQAAgIAFgGQAHgFAIAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgAfwBmQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgA3OBmQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEAhAABkQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgA4eBkQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEAiPABjQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgA5uBjQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEAjfABiQgFgFAAgIQAAgJAFgGQAHgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAFQgFAHgJAAQgIAAgHgHgA6+BiQgGgFAAgIQAAgJAGgGQAFgGAJAAQAJAAAFAGQAGAGAAAJQAAAIgGAFQgFAHgJAAQgJAAgFgHgEAkvABhQgFgFAAgIQAAgJAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgA8PBhQgFgFAAgIQAAgJAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgJAAgGgHgEAl/ABgQgFgFAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgIgBgHgGgA9fBgQgFgFAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgIgBgHgGgEAnPABgQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgA+vBgQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgIgBgHgFgEAogABfQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgA//BfQgFgGAAgJQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgEArAABeQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEApwABeQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEghPABeQgFgGAAgJQAAgIAFgGQAHgFAIAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEA7PABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEA5/ABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAJgBAFAGQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgEA4vABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEA3gABdQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEA2QABdQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEA1AABdQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEAzwABdQgGgGAAgJQAAgIAGgGQAFgGAJABQAJgBAFAGQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgEAyfABdQgFgGAAgJQAAgIAFgGQAGgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFgEAxPABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEAv/ABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEAuvABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAJgBAFAGQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgEAtfABdQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEAsQABdQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEgieABdQgGgGAAgJQAAgIAGgGQAFgGAJABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEgjuABbQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEgk+ABbQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEA8fABaQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEgmOABaQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEgnfABaQgFgFAAgIQAAgJAFgGQAGgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgGgHgEgovABZQgFgFAAgIQAAgJAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgEgp/ABZQgFgFAAgIQAAgJAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgEA9vABYQgFgFAAgIQAAgJAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgJAAgGgHgEgrPABYQgFgFAAgIQAAgJAFgGQAHgGAIAAQAJAAAFAGQAGAGAAAJQAAAIgGAFQgFAHgJAAQgIAAgHgHgEgsfABYQgFgFAAgIQAAgJAFgGQAHgGAIAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgIAAgHgHgEgtuABXQgGgFAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgJgBgFgGgEgu+ABXQgGgFAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgJgBgFgGgEgwOABXQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJABQgJgBgFgFgEgxeABXQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJABQgJgBgFgFgEA/AABWQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgEgyvABWQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFgEgz/ABWQgFgGAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEg1PABVQgFgGAAgJQAAgIAFgGQAHgFAIAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEg2fABVQgFgGAAgJQAAgIAFgGQAHgFAIAAQAJAAAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgEBAQABUQgGgGAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAGQgGAFgIAAQgJAAgFgFgEg3vABUQgFgGAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAGQgGAFgIAAQgIAAgHgFgEg4+ABUQgGgGAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAGQgGAFgIAAQgJAAgFgFgEg6OABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEg7eABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEg8uABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEg9+ABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEg/PABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhAfABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhBvABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgIABgHgHgEhC/ABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhEOABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhFeABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhGuABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEhH+ABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEhJOABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhKfABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhLvABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhM/ABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgIABgHgHgEhOPABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhPeABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhQuABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhR+ABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEhTOABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEhUfABSQgFgFAAgIQAAgJAFgGQAGgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgGgHgEhVvABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhW/ABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhYPABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgIABgHgHgEhZfABSQgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgIABgHgHgEhauABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhb+ABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgFgHgEhdOABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEheeABSQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJgBQgJABgFgHgEhfvABSQgFgFAAgIQAAgJAFgGQAGgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgGgHgEBBgABMQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEBCuABCQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEBD9AA5QgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEBFNAAsQgGgFAAgIQAAgJAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgJAAgFgHgEBGcAAgQgGgGAAgJQAAgIAGgGQAFgDAJgBQAIABAGADQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEBHrAASQgGgFAAgIQAAgHAGgGQAFgGAJABQAIgBAGAGQAGAGAAAHQAAAIgGAFQgGAHgIAAQgJAAgFgHgEBI5AAGQgFgGAAgHQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAHgGAGQgFAFgJABQgIgBgHgFgEBKIgAGQgFgFAAgIQAAgJAFgGQAGgGAJABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAGgIAAQgIAAgHgGgEBLYgASQgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJABQgJgBgFgFgEBMngAeQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEBfTgAkQgGgFAAgIQAAgJAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgJAAgFgHgEBN1gAoQgFgGAAgJQAAgIAFgGQAHgGAIABQAIgBAGAGQAGAGAAAIQAAAJgGAGQgGAFgIAAQgIAAgHgFgEBeDgAuQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgFgFgEBPFgAvQgFgGAAgJQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgEBQVgA3QgFgFAAgJQAAgIAFgGQAHgFAIgBQAIABAGAFQAGAGAAAIQAAAJgGAFQgGAGgIABQgIgBgHgGgEBc0gA4QgGgGAAgJQAAgIAGgGQAFgFAJgBQAJABAFAFQAGAGAAAIQAAAJgGAGQgFAFgJAAQgJAAgFgFgEBRlgA8QgFgFAAgIQAAgJAFgGQAHgGAIABQAIgBAGAGQAGAGAAAJQAAAIgGAFQgGAHgIgBQgJABgGgHgEBS1gBAQgFgGAAgJQAAgIAFgGQAGgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIABQgJgBgGgFgEBbkgBCQgFgGAAgJQAAgIAFgGQAGgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFgEBUGgBGQgGgFAAgIQAAgJAGgGQAFgGAJABQAJgBAFAGQAGAGAAAJQAAAIgGAFQgFAHgJAAQgJAAgFgHgEBVWgBKQgGgGAAgJQAAgIAGgGQAFgFAJAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFgEBaVgBMQgFgGAAgJQAAgIAFgGQAHgGAIABQAJgBAFAGQAGAGAAAIQAAAJgGAGQgFAFgJAAQgIAAgHgFgEBWmgBQQgGgFAAgIQAAgJAGgGQAFgGAJAAQAIAAAGAGQAGAGAAAJQAAAIgGAFQgGAHgIAAQgJAAgFgHgEBZFgBSQgFgFAAgJQAAgIAFgGQAHgFAIgBQAJABAFAFQAGAGAAAIQAAAJgGAFQgFAGgJABQgIgBgHgGgEBX2gBTQgGgGAAgJQAAgIAGgGQAFgFAJgBQAIABAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgFgFg");
	this.shape_2.setTransform(612.4,460.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},99).to({state:[{t:this.shape_2}]},99).to({state:[{t:this.shape}]},99).wait(5));

	// riverstage
	this.instance = new lib.SymRiverStage();
	this.instance.parent = this;
	this.instance.setTransform(1185,406,1,1,0,0,0,5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302));

	// moresprayingwater
	this.sprayingwater2 = new lib.SymSprayingWater2();
	this.sprayingwater2.parent = this;
	this.sprayingwater2.setTransform(757.5,274.3,1,1,0,0,0,51,69.3);

	this.sprayingwater3 = new lib.SymSprayingWater3();
	this.sprayingwater3.parent = this;
	this.sprayingwater3.setTransform(736.9,251.8,1,1,0,0,0,71.5,91.7);

	this.sprayingwater4 = new lib.SymSprayingWater4();
	this.sprayingwater4.parent = this;
	this.sprayingwater4.setTransform(718.4,231.3,1,1,0,0,0,90,112.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.sprayingwater2}]},299).to({state:[{t:this.sprayingwater3}]},1).to({state:[{t:this.sprayingwater4}]},1).wait(1));

	// morewellheads
	this.instance_1 = new lib.SymWellhead();
	this.instance_1.parent = this;
	this.instance_1.setTransform(695,255,1,1,0,0,0,16,24);

	this.instance_2 = new lib.SymWellhead();
	this.instance_2.parent = this;
	this.instance_2.setTransform(695,255,1,1,0,0,0,16,24);

	this.instance_3 = new lib.SymWellhead();
	this.instance_3.parent = this;
	this.instance_3.setTransform(695,255,1,1,0,0,0,16,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:695,y:255}}]},299).to({state:[{t:this.instance_2,p:{x:695,y:255}},{t:this.instance_1,p:{x:651.9,y:210.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:651.9,y:210.1}},{t:this.instance_1,p:{x:615,y:167}}]},1).wait(1));

	// sprayingwater
	this.sprayingwater = new lib.SymSprayingWaterTween();
	this.sprayingwater.parent = this;
	this.sprayingwater.setTransform(767,283,1,1,0,0,0,24,18.5);
	this.sprayingwater._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sprayingwater).wait(5).to({_off:false},0).to({_off:true},28).wait(6).to({_off:false,x:167,y:212.5},0).to({_off:true},27).wait(6).to({_off:false,x:468,y:248},0).to({_off:true},27).wait(5).to({_off:false,x:767,y:279},0).to({_off:true},28).wait(7).to({_off:false,x:167,y:212.5},0).to({_off:true},26).wait(7).to({_off:false,x:468,y:248},0).to({_off:true},26).wait(6).to({_off:false,x:767,y:279},0).to({_off:true},27).wait(7).to({_off:false,x:167,y:212.5},0).to({_off:true},26).wait(7).to({_off:false,x:468,y:248},0).to({_off:true},26).wait(1).to({_off:false,x:767,y:283},0).to({_off:true},1).wait(3));

	// stripes
	this.stripes = new lib.SymStripesTween();
	this.stripes.parent = this;
	this.stripes.setTransform(728.4,559,1,1,0,0,0,15,44.5);
	this.stripes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stripes).wait(1).to({_off:false},0).to({_off:true},32).wait(1).to({_off:false,x:126.4,y:494},0).to({_off:true},32).wait(1).to({_off:false,x:427.4,y:530},0).to({_off:true},32).wait(1).to({_off:false,x:728.4,y:560},0).to({_off:true},32).wait(1).to({_off:false,x:126.4,y:496.5},0).to({_off:true},32).wait(1).to({_off:false,x:427.4,y:530},0).to({_off:true},32).wait(1).to({_off:false,x:728.4,y:561},0).to({_off:true},32).wait(1).to({_off:false,x:126.4,y:536},0).to({_off:true},32).wait(1).to({_off:false,x:427.4,y:570},0).to({_off:true},32).wait(1).to({_off:false,x:728.4,y:559},0).wait(4));

	// screen
	this.screen5 = new lib.SymScreen();
	this.screen5.parent = this;
	this.screen5.setTransform(729,533,1,1,0,0,0,9,18);

	this.timeline.addTween(cjs.Tween.get(this.screen5).wait(33).to({x:127,y:468},0).wait(33).to({x:428,y:504},0).wait(33).to({x:729,y:534},0).wait(33).to({x:127,y:470},0).wait(33).to({x:428,y:504},0).wait(33).to({x:729,y:535},0).wait(33).to({x:127,y:510},0).wait(33).to({x:428,y:544},0).wait(33).to({x:729,y:533},0).wait(5));

	// wellwater
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKt+ICVAAIAAb9IiVAAg");
	this.shape_3.setTransform(729,463);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(101,156,197,0.6)").s().p("AhJN/IAA79ICTAAIAAb9g");
	this.shape_4.setTransform(729,463);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKuwICVAAIAAdhIiVAAg");
	this.shape_5.setTransform(729,458);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(101,156,197,0.6)").s().p("AhJOxIAA9gICTAAIAAdgg");
	this.shape_6.setTransform(729,458);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKviICVAAIAAfFIiVAAg");
	this.shape_7.setTransform(729,453);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPjIAA/EICTAAIAAfEg");
	this.shape_8.setTransform(729,453);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwUICVAAMAAAAgpIiVAAg");
	this.shape_9.setTransform(729,448);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQVMAAAggoICTAAMAAAAgog");
	this.shape_10.setTransform(729,448);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwtICVAAMAAAAhbIiVAAg");
	this.shape_11.setTransform(729,445.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQuMAAAghbICTAAMAAAAhbg");
	this.shape_12.setTransform(729,445.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKKUIAA0nICVAA");
	this.shape_13.setTransform(127,390.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(101,156,197,0.6)").s().p("AhJM2IAAlFIAA0mICTAAIAAZrg");
	this.shape_14.setTransform(127,406.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKNhIAA7BICVAAIAAbB");
	this.shape_15.setTransform(127,401);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(101,156,197,0.6)").s().p("AhJNoIAAgPIAA7AICTAAIAAbAIAAAPg");
	this.shape_16.setTransform(127,401.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKucICVAAIAAcvIAAAKIiVAAIAAgKg");
	this.shape_17.setTransform(127,397);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(101,156,197,0.6)").s().p("AhJOYIAA8vICTAAIAAcvg");
	this.shape_18.setTransform(127,396.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAPFIAA+J");
	this.shape_19.setTransform(119.5,391);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPOIAAgTIAA+IIAAAAICTAAIAAebg");
	this.shape_20.setTransform(127,392);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKv7ICVAAIAAf3IiVAAg");
	this.shape_21.setTransform(127,386.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(101,156,197,0.6)").s().p("AhJP8IAA/3ICTAAIAAf3g");
	this.shape_22.setTransform(127,386.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKKyIAA1jICVAA");
	this.shape_23.setTransform(428,422);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(101,156,197,0.6)").s().p("AhKNWIAAlJIAA1jICVAAIAAasg");
	this.shape_24.setTransform(428,438.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKuDICVAAIAAcHIiVAAg");
	this.shape_25.setTransform(428,433);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(101,156,197,0.6)").s().p("AhKODIAA8GICVAAIAAcGg");
	this.shape_26.setTransform(428,433);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKu1ICVAAIAAdrIiVAAg");
	this.shape_27.setTransform(428,428);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(101,156,197,0.6)").s().p("AhKO1IAA9qICVAAIAAdqg");
	this.shape_28.setTransform(428,428);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKvnICVAAIAAfPIiVAAg");
	this.shape_29.setTransform(428,423);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(101,156,197,0.6)").s().p("AhKPnIAA/NICVAAIAAfNg");
	this.shape_30.setTransform(428,423);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwZICVAAMAAAAgzIiVAAg");
	this.shape_31.setTransform(428,418);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(101,156,197,0.6)").s().p("AhKQZMAAAggxICVAAMAAAAgxg");
	this.shape_32.setTransform(428,418);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(101,156,197,0.6)").s().p("AhKQtMAAAghaICVAAMAAAAhag");
	this.shape_33.setTransform(428,416);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKKsIAA1TIAAgBICVgDIAAAB");
	this.shape_34.setTransform(729,453);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(101,156,197,0.6)").s().p("AhJNKIAAk5IAAgEIAA1SICTgEIAAaTg");
	this.shape_35.setTransform(729,468.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(101,156,197,0.6)").s().p("AhJOEIAA8HICTAAIAAcHg");
	this.shape_36.setTransform(729,463.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(101,156,197,0.6)").s().p("AhJO2IAA9qICTAAIAAdqg");
	this.shape_37.setTransform(729,458.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKtHICVAAIAAaPIiVAAg");
	this.shape_38.setTransform(729,437.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(101,156,197,0.6)").s().p("AhJNHIAA6NICTAAIAAaNg");
	this.shape_39.setTransform(729,437.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwyICVAAMAAAAhlIiVAAg");
	this.shape_40.setTransform(729,446);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQzMAAAghlICTAAMAAAAhlg");
	this.shape_41.setTransform(729,446);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKnpICVAAIAAPTIiVAAg");
	this.shape_42.setTransform(127,439);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(101,156,197,0.6)").s().p("AhJHpIAAvSICTAAIAAPSg");
	this.shape_43.setTransform(127,439);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKpNICVAAIAASbIiVAAg");
	this.shape_44.setTransform(127,429);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(101,156,197,0.6)").s().p("AhJJNIAAyaICTAAIAASag");
	this.shape_45.setTransform(127,429);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKqxICVAAIAAVjIiVAAg");
	this.shape_46.setTransform(127,419);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(101,156,197,0.6)").s().p("AhJKxIAA1hICTAAIAAVhg");
	this.shape_47.setTransform(127,419);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKsVICVAAIAAYrIiVAAg");
	this.shape_48.setTransform(127,409);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(101,156,197,0.6)").s().p("AhJMVIAA4pICTAAIAAYpg");
	this.shape_49.setTransform(127,409);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKt5ICVAAIAAbzIiVAAg");
	this.shape_50.setTransform(127,399);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(101,156,197,0.6)").s().p("AhJN5IAA7yICTAAIAAbyg");
	this.shape_51.setTransform(127,399);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKvdICVAAIAAe7IiVAAIAA+5");
	this.shape_52.setTransform(127,389);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPdIAA+5IAAgBICTAAIAAe6g");
	this.shape_53.setTransform(127,389);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwvICVAGMAAAAhZIiVAAMAAAghZ");
	this.shape_54.setTransform(127,380.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQwMAAAghZIAAgGICTAGMAAAAhZg");
	this.shape_55.setTransform(127,380.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKqiICVAAIAAVFIiVAAg");
	this.shape_56.setTransform(428,455.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(101,156,197,0.6)").s().p("AhKKiIAA1EICVAAIAAVEg");
	this.shape_57.setTransform(428,455.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKrtICVAAIAAXbIiVAAg");
	this.shape_58.setTransform(428,448);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(101,156,197,0.6)").s().p("AhKLtIAA3aICVAAIAAXag");
	this.shape_59.setTransform(428,448);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKs4ICVAAIAAZxIiVAAg");
	this.shape_60.setTransform(428,440.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(101,156,197,0.6)").s().p("AhKM4IAA5vICVAAIAAZvg");
	this.shape_61.setTransform(428,440.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKvOICVAAIAAedIiVAAg");
	this.shape_62.setTransform(428,425.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(101,156,197,0.6)").s().p("AhKPOIAA+cICVAAIAAecg");
	this.shape_63.setTransform(428,425.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKQzMAAAghlICVAP");
	this.shape_64.setTransform(428,415);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(101,156,197,0.6)").s().p("AhKQ4IAAgGIAAgEMAAAghkICVAOMAAAAhgg");
	this.shape_65.setTransform(428,415.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAGUIAAsn");
	this.shape_66.setTransform(721.5,511.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(101,156,197,0.6)").s().p("AhJGoIAAgdIAAsnIAAgKICTgBIAANPg");
	this.shape_67.setTransform(729,512);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAH8IAAv3");
	this.shape_68.setTransform(721.5,499.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(101,156,197,0.6)").s().p("AhJIWIAAglIAAv3IAAgOICTgCIAAQsg");
	this.shape_69.setTransform(729,501);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAJlIAAzJ");
	this.shape_70.setTransform(721.5,488.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(101,156,197,0.6)").s().p("AhJKEIAAgtIAAzIIAAgQICTgCIAAUHg");
	this.shape_71.setTransform(729,490);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAALOIAA2b");
	this.shape_72.setTransform(721.5,477.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(101,156,197,0.6)").s().p("AhJLyIAAg0IAA2aIAAgTICTgDIAAXkg");
	this.shape_73.setTransform(729,479);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAM2IAA5r");
	this.shape_74.setTransform(721.5,466.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(101,156,197,0.6)").s().p("AhJNgIAAg8IAA5rIAAgWICTgCIAAa/g");
	this.shape_75.setTransform(729,468);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAOfIAA89");
	this.shape_76.setTransform(721.5,455);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPOIAAhDIAA89IAAgYICTgEIAAecg");
	this.shape_77.setTransform(729,457);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAQHMAAAggN");
	this.shape_78.setTransform(721.5,443.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQ9IAAhNMAAAggNIAAgbICTgDMAAAAh4g");
	this.shape_79.setTransform(729,445.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKkwICVAAIAAJhIiVAAIAApg");
	this.shape_80.setTransform(127,498.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(101,156,197,0.6)").s().p("AhJExIAApgIAAgBICTAAIAAJhg");
	this.shape_81.setTransform(127,498.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKnVICVAAIAAOrIiVAAg");
	this.shape_82.setTransform(127,482);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(101,156,197,0.6)").s().p("AhJHWIAAurICTAAIAAOrg");
	this.shape_83.setTransform(127,482);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKp6ICVAAIAAT1IiVAAg");
	this.shape_84.setTransform(127,465.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(101,156,197,0.6)").s().p("AhJJ7IAAz0ICTAAIAAT0g");
	this.shape_85.setTransform(127,465.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKsfICVAAIAAY/IiVAAg");
	this.shape_86.setTransform(127,449);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(101,156,197,0.6)").s().p("AhJMgIAA4/ICTAAIAAY/g");
	this.shape_87.setTransform(127,449);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKvEICVAAIAAeJIiVAAg");
	this.shape_88.setTransform(127,432.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPFIAA+JICTAAIAAeJg");
	this.shape_89.setTransform(127,432.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKxpICVAAMAAAAjTIiVAAMAAAgjS");
	this.shape_90.setTransform(127,416);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(101,156,197,0.6)").s().p("AhJRqMAAAgjSIAAAAICTAAMAAAAjSg");
	this.shape_91.setTransform(127,416);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKz/ICVAHMAAAAn4IiVAAMAAAgn3");
	this.shape_92.setTransform(127,401.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(101,156,197,0.6)").s().p("AhJT/MAAAgn1IAAgIICTAHMAAAAn2g");
	this.shape_93.setTransform(127,401.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhPHMIAKuhICVAAIAAOr");
	this.shape_94.setTransform(427.5,516.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(101,156,197,0.6)").s().p("AhFHVIgKgJIAKugICVAAIAAOpg");
	this.shape_95.setTransform(427.5,516.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKJsIAAzXICVAAIAATX");
	this.shape_96.setTransform(428,501.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(101,156,197,0.6)").s().p("AhKJrIAAzWICVAAIAATWg");
	this.shape_97.setTransform(428,501.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKMCIAA4DICVAAIAAYD");
	this.shape_98.setTransform(428,486.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(101,156,197,0.6)").s().p("AhKMBIAA4CICVAAIAAYCg");
	this.shape_99.setTransform(428,486.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("ABLuXIAAcvAhKOYIAA8v");
	this.shape_100.setTransform(428,471.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(101,156,197,0.6)").s().p("AhKOXIAA8tICVAAIAActg");
	this.shape_101.setTransform(428,471.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKQuMAAAghbABLwtMAAAAhb");
	this.shape_102.setTransform(428,456.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKzDICVAAMAAAAmHIiVAAg");
	this.shape_103.setTransform(428,441.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(101,156,197,0.6)").s().p("AhKTDMAAAgmGICVAAMAAAAmGg");
	this.shape_104.setTransform(428,441.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKT2MAAAgnrICVASMAAAAnZ");
	this.shape_105.setTransform(428,435.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(101,156,197,0.6)").s().p("AhKT6IAAgJMAAAgnqICVASMAAAAnYIAAAJg");
	this.shape_106.setTransform(428,436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:729,y:445.5}},{t:this.shape_11,p:{x:729,y:445.5}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},29).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_12,p:{x:127,y:381.5}},{t:this.shape_11,p:{x:127,y:381.5}}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},28).to({state:[{t:this.shape_26},{t:this.shape_25,p:{x:428,y:433}}]},1).to({state:[{t:this.shape_28},{t:this.shape_27,p:{x:428,y:428}}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_33,p:{y:416}},{t:this.shape_11,p:{x:428,y:416}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},28).to({state:[{t:this.shape_36},{t:this.shape_25,p:{x:729,y:463.5}}]},1).to({state:[{t:this.shape_37},{t:this.shape_27,p:{x:729,y:458.5}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},29).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},27).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_26},{t:this.shape_25,p:{x:428,y:433}}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},27).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},27).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},27).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_33,p:{y:456.5}},{t:this.shape_102}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},27).to({state:[{t:this.shape_12,p:{x:729,y:445.5}},{t:this.shape_11,p:{x:729,y:445.5}}]},1).to({state:[{t:this.shape_12,p:{x:729,y:445.5}},{t:this.shape_11,p:{x:729,y:445.5}}]},1).to({state:[{t:this.shape_12,p:{x:729,y:445.5}},{t:this.shape_11,p:{x:729,y:445.5}}]},1).to({state:[{t:this.shape_12,p:{x:729,y:445.5}},{t:this.shape_11,p:{x:729,y:445.5}}]},1).wait(1));

	// well
	this.well5 = new lib.SymWellL();
	this.well5.parent = this;
	this.well5.setTransform(732,385.5,1,1,0,0,0,16,95.5);

	this.instance_4 = new lib.SymWell();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130,341.5,1,1,0,0,0,16,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.well5}]}).to({state:[{t:this.well5}]},33).to({state:[{t:this.well5}]},33).to({state:[{t:this.well5}]},33).to({state:[{t:this.well5}]},33).to({state:[{t:this.well5}]},33).to({state:[{t:this.well5}]},33).to({state:[{t:this.instance_4,p:{regY:115.5,x:130,y:341.5}}]},33).to({state:[{t:this.instance_4,p:{regY:95.5,x:431,y:356}}]},33).to({state:[{t:this.well5}]},33).to({state:[{t:this.well5}]},2).to({state:[{t:this.well5}]},1).to({state:[{t:this.well5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.well5).wait(33).to({x:130,y:321.5},0).wait(33).to({x:431,y:356},0).wait(33).to({x:732,y:385.5},0).wait(33).to({regY:115.5,x:130,y:341.5},0).wait(33).to({regY:95.5,x:431,y:356},0).wait(33).to({x:732,y:386.5},0).to({_off:true},33).wait(66).to({_off:false,y:385.5},0).wait(5));

	// riverflow2
	this.squiggle2 = new lib.SymSquiggle2Tween();
	this.squiggle2.parent = this;
	this.squiggle2.setTransform(914.3,231,1,1,0,0,0,68.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.squiggle2).wait(302));

	// rivertv
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1E61E8").s().p("Ak3BhQkwigifhGImuiXMAlpAAAIAAIuIvkALQjugykaiKg");
	this.shape_107.setTransform(1104.8,411.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1E61E8").s().p("AAQDlQiWguinhNIkAh+Qhqg1hVgoQirhDi8hFIgxgRMAilAADIBiAAQADALgDAUQgCAUACAKIABHJIgIACIhbABItXAJQhcgOhegYg");
	this.shape_108.setTransform(1108.4,413.2);
	this.shape_108._off = true;

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1E61E8").s().p("AAPDiQiPgoijhHQiCg9h3g5Qh1g7hBgfQi8hRiXg7IgvgQIBJADIf7ABIBgAAQAGAIgDATQgEATAGAHIgBDQQgCCJABBTIgFAEIheABIstAJQhcgJhYgPg");
	this.shape_109.setTransform(1114.8,414.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1E61E8").s().p("AAODfQiQglichDQh6g2h8g9QhngzhLgkQi7hViOg4IgugRIA9AFIQmABIOxACIBgAAQAJAHgCCrIgEEaIgEAFIhfABIsZAJQhcgHhUgMg");
	this.shape_110.setTransform(1116.3,415.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1E61E8").s().p("AgPDSQiSglichCQh6g3h8g6Qhng2hLgkQiThDilhBMAgyAAKQAJAGgBCeIgCEMIgEAFIhfABIsZAJQhcgHhSgMg");
	this.shape_111.setTransform(1119.4,417);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1E61E8").s().p("Ag8C+QiSglichCQh6g3h8g6Qhng2hLgkQhPgkgrgRIhkgnIfYAKQAJAHgBCJIgCD4IgEAFIhfABIsZAJQhcgHhSgMg");
	this.shape_112.setTransform(1123.9,419);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1E61E8").s().p("AhfCvQiSglichCQh6g3h8g6Qhng2hLgkQhJghgOgFIhBgYIeSAAQAJAGgBCAIgCDuIgEAFIhfABIsZAJQhagHhUgMg");
	this.shape_113.setTransform(1127.4,420.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1E61E8").s().p("Ah9ClQiSglichCQh6g3h8g6Qhng2hLgkQADgEhfgmIdWAAQAJAGgBB2IgCDkIgEAFIhfABIsZAJQhagHhUgMg");
	this.shape_114.setTransform(1130.4,421.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1E61E8").s().p("AiZCbQiSglichCQh6g1h8g8Qh2g+hmgoIcugKQAIAGgFBsQgHCgAAA6IgEAFIhfABIsZAJQhagHhUgMg");
	this.shape_115.setTransform(1133.2,422.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1E61E8").s().p("Al9BIQkxigiehGIkhhkMAjcAAAIAAH7IvkAKQjugxkaiKg");
	this.shape_116.setTransform(1111.8,414);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1E61E8").s().p("AjVB4QiSglichCQh6g1h8g8IgngUQgTgFgqgRIa2AAQAIAFgFBKQgHBzAABEIgEAFIhfABIsXAJQhcgHhUgMg");
	this.shape_117.setTransform(1139.2,426);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1E61E8").s().p("AkXBdQiSgmichAIhugwQg6gZgwgYQgLgGMUADIMrADQAKAHgEBZQgEBPgGAbQgBAChiAFIsXAIQhcgHhUgLg");
	this.shape_118.setTransform(1145.8,428.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107}]}).to({state:[{t:this.shape_108}]},6).to({state:[{t:this.shape_109}]},3).to({state:[{t:this.shape_110}]},3).to({state:[{t:this.shape_111}]},3).to({state:[{t:this.shape_112}]},3).to({state:[{t:this.shape_113}]},3).to({state:[{t:this.shape_114}]},3).to({state:[{t:this.shape_115}]},3).to({state:[{t:this.shape_107}]},6).to({state:[{t:this.shape_108}]},15).to({state:[{t:this.shape_116}]},9).to({state:[{t:this.shape_107}]},9).to({state:[{t:this.shape_108}]},9).to({state:[{t:this.shape_116}]},6).to({state:[{t:this.shape_109}]},6).to({state:[{t:this.shape_110}]},6).to({state:[{t:this.shape_107}]},6).to({state:[{t:this.shape_108}]},6).to({state:[{t:this.shape_109}]},3).to({state:[{t:this.shape_110}]},3).to({state:[{t:this.shape_111}]},3).to({state:[{t:this.shape_112}]},3).to({state:[{t:this.shape_113}]},3).to({state:[{t:this.shape_114}]},3).to({state:[{t:this.shape_115}]},3).to({state:[{t:this.shape_107}]},6).to({state:[{t:this.shape_108}]},15).to({state:[{t:this.shape_116}]},9).to({state:[{t:this.shape_107}]},9).to({state:[{t:this.shape_108}]},9).to({state:[{t:this.shape_116}]},6).to({state:[{t:this.shape_109}]},6).to({state:[{t:this.shape_110}]},6).to({state:[{t:this.shape_107}]},6).to({state:[{t:this.shape_107}]},33).to({state:[{t:this.shape_107}]},33).to({state:[{t:this.shape_107}]},33).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_107).to({_off:true},6).wait(27).to({_off:false},0).to({_off:true},15).wait(18).to({_off:false},0).to({_off:true},9).wait(24).to({_off:false},0).to({_off:true},6).wait(27).to({_off:false},0).to({_off:true},15).wait(18).to({_off:false},0).to({_off:true},9).wait(24).to({_off:false},0).wait(99).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_108).wait(6).to({_off:false},0).to({_off:true},3).wait(39).to({_off:false},0).to({_off:true},9).wait(18).to({_off:false},0).to({_off:true},6).wait(24).to({_off:false},0).to({_off:true},3).wait(39).to({_off:false},0).to({_off:true},9).wait(18).to({_off:false},0).to({_off:true},6).wait(122));

	// riverflow1
	this.squiggle1_2 = new lib.SymSquiggle1Tween();
	this.squiggle1_2.parent = this;
	this.squiggle1_2.setTransform(1086,328.1,1,1,0,0,0,23.2,48.9);

	this.squiggle1_1 = new lib.SymSquiggle1Tween();
	this.squiggle1_1.parent = this;
	this.squiggle1_1.setTransform(1028.7,305.2,1,1,0,0,0,23.2,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]}).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1028.7}},{t:this.squiggle1_2,p:{x:1086}}]},33).to({state:[{t:this.squiggle1_1,p:{x:1034.7}},{t:this.squiggle1_2,p:{x:1092}}]},2).to({state:[{t:this.squiggle1_1,p:{x:1034.7}},{t:this.squiggle1_2,p:{x:1092}}]},1).to({state:[{t:this.squiggle1_1,p:{x:1034.7}},{t:this.squiggle1_2,p:{x:1092}}]},1).wait(1));

	// river
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2B868E").s().p("AkgRiQgBAAAuhCQAyhPAPhBQAXheAVhhIAQhPQAFgPAEgnQAIhOgHh2QgDhJgPg0IgqhzQgmhEgZgWIgRgKIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgYQgJghgFghQgFgpAMg7IANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgQANQgfAbgJAUQgGAQgLA2IgLAyIAcCWIBGBkIBOAjQAxAWBdAhICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAaQBGANAvAKIBPAQQBhAYBfAkQA4AWBbArIBSAnIA1AgIBrBEQBdA7BNA7IB4BGICgCCQAhAcBNBIIDACTQBMA9AWAWQBBBBBeBFQAvAjAiAVIFoEOIgCA5g");
	this.shape_119.setTransform(1014.1,272);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2B868E").s().p("AhVR1QhaABgYgGIAZhFQASgvAHgMQAkhPAKhEIANhUIADgaIAMhUIAKhNIABgDQADgSACgkQACgugDg2QgDgsgHgxQgDgbgGgZQgIgmgNgeQgKgOgqhcIgDgEQgjgwgbgYIgHgGIithfIhlglIj5g+Iivg4IjAgpIlnhZIlAhuIgEgCQgYgMgigWIgDgCQhIgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgCQgGgqAMg6IAAAAIAOgyQADgQAGgTQAOgpARgYQARgZAXgUIAUgPIABAAQAOgBALgCQADAAALADIABAAQAWAGAvgGQgOAJgQAOQggAagIAVIAAABQgGAQgMA0IAAABIgKAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEBAeIAEABIEtAyIC1ATIAFABQBmAKCJAZIAGABQBCAMAtALIAGABIBIAQIALADQBcAYBZAiIARAHQA1AVBOAjIBTAmIADACIAyAeIAEACIBnBCIAEADQBZA5BPA4IAHAEIBvBEIACACIApAiIB1BfIABABQAhAcBMBGIADACIC0CMIAIAGQBEA3AeAeIAEAEQA/A+BbBEIAGAFQArAgAgAUIAFAEIFgENIADBHIhcAAI/hAHQgJgDhWABg");
	this.shape_120.setTransform(1013.9,273.3);
	this.shape_120._off = true;

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2B868E").s().p("AftSHI++AAQgIgIhBADIhBAFQgBgFAWhBQAWhFACgVQADgtAHg/QAIhDABgRIAHhVIAAgaIAEhWIAGhOIAAgDIADg1QgBgxgGgyQgGgsgKgvQgGgbgJgZQgKgjgRgeQgSgXguhJIgDgEQglgpgggYIgJgEIizhTIhlgjIjeg4IjKg9IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgCQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgPANIgBAAQgfAbgJAUIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGQBaIEDAeIExAzIC1ATIAFABQBmALCJAYIAGABIBvAXIAGABIBIASIALADQBcAaBZAhIAQAHQA3AVBMAiIBUAkIAEACIAyAeIADACIBnBCIAEADICrBuIAHAEIBtBHIACACIApAiIB1BgIABABQAhAbBMBGIADACICzCNIAHAGQA9AxAnAmIADADQA/A/BZBEIAHAFQArAgAfAVIAFAEIFfEPIADBpg");
	this.shape_121.setTransform(1013.7,275);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2B868E").s().p("AfwSRI+tgEIgrABQgoABgbgHIAniIQgBgIAEgSQADgbACgRQAEggADhsIADh6IgBgsIAAhFIADhNIAAgDIABg2QgCgygHgwQgHgtgLguQgHgagJgZQgNghgSgeQgXgbgvhBIgDgEQgngkgigXIgJgEIi2hNIhlgjIjeg4IjKg8IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgqhAIgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgEggIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQIAAAAQAOAAAMgCQADgBALADIAAAAQAXAHAvgHQgOAKgQANIAAAAQgfAagJAVIAAABQgGAQgMA0IAAABIgKAyIAAAAIAcCWIAAABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIGPBaIEDAeIExAzIC1ATIAFABQBmAKCJAZIAGABQBBAMAuALIAGABIBHASIALADQBcAbBZAiIAQAGICEA2IBUAkIAEACIAyAeIADACIBnBCIAEACQBZA7BTAzIAHAEIBtBIIACACIAoAiIB1BgIABABQAgAbBNBFIADADICzCNIAHAGQA5AuAqAqIAEADQA/A/BYBEIAHAFQArAgAfAWIAFADIFdERIABB6g");
	this.shape_122.setTransform(1013.4,276);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2B868E").s().p("AQxSbQwPgCgcgIIAUiCQgFgyAFgoQAEggADhSIADhgIgBhEIABhcQAAgPgMhnIgPh9QgHgsgLguQgHgagKgZQgMgigTgeQgWgbgvhAIgEgEQgmgkgigXIgKgFIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIALADQBcAaBYAiIARAGICDA2IBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTAyIAHAEIBsBJIACACIAoAhIB1BgIABABQAhAcBMBFIADADICzCMIAHAGQA6AvAqApIADAEQA/A+BZBEIAGAFQArAhAgAWIAEADIFeEQIgICPIlVABIq0gBg");
	this.shape_123.setTransform(1013.4,277);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2B868E").s().p("ARiSvQvngCgcgIIAKhkQgFgyAFgoQAEgegHhKQgIhOABgIQgViHABgjQAAgOgShrIgWiBQgDgSgTg/IgXhSQgHgagKgZQgMgigTgeQgWgbgvhAIgEgEQgRgQgggYQgdgWgEgCIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIBLAXQBPAaAlAOIA5AXIBbAlIBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTAyIBzBNIACACIAoAhIB1BgIABABQAhAcBMBFIADADIC6CSQA6AvAqApIADAEQA/A+BZBEIAGAFQAdAWBIA9IFAD6IAKC0IlMABIqVgBg");
	this.shape_124.setTransform(1013.5,279);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2B868E").s().p("AClS3QgFiMgFgoIgTh4QgMhTABgRQgaiSgEgiQgHgzgLhFQgPhkgHgUIg6iqIgag8QgUgsgJgOQgWgbgvhBIgEgEQgRgOgggZQgdgXgEgBIi2hNIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIBLAYQBPAaAlAOIA5AWIBbAmIBVAkIADACIAyAeIAEACIBnBCIAEACQBZA7BTA1IBzBKIACACIAoAiIB1BgIABABQAhAbBMBFIADADIC6CTQA6AuAqAqIADADQAqAqB/BrQAcAVB6BjIEODcIAAC0QncADniABIn0ABQnZAAgTgFg");
	this.shape_125.setTransform(1013.5,280.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2B868E").s().p("ADhTCQgMiMgIgoIgVh2IgTh6QgViCgJgoQgFgUgchkIgliCIgghaIgchQQgFgPgYgtIgig6QgWgbgvg/IgEgDQgRgQgggaQgdgWgEgCIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIBLAXQBPAaAlAOIA5AXIBbAlIBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTA0IBzBLIACACIAoAhIB1BgIABABQAhAcBMBFIADADIC6CSQA6AvAqApIADAEQAqApB1BrQAcAWCEBsIEEDSIAKDIIufADIm5AAQn0AAgWgDg");
	this.shape_126.setTransform(1013.5,281.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2B868E").s().p("AETTRIgoi+Igah7QgVhkgDgbQgpiMgJgoQgFgUgchkIgliCIgghaIgchQQgFgPgYgtIgig6QgWgbgvg+IgEgEQgRgQgggaQgdgWgEgCIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIBLAXQBPAaAlAOIA5AXIBbAlIBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTA0IBzBLIACACIAoAhIB1BgIABABQAhAcBMBFIADADIC6CSQA6AvAqApIADAEQAqApB1BrQAcAWCOB2IEEDSIAADcIuGADImtAAQnnAAgWgDg");
	this.shape_127.setTransform(1013.5,282.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2B868E").s().p("AiZR2IAWhAQAQgsACgMQAEgcAMg4QALg1ADgXQAThjABgLIAKhQIAKhaQABgIAAgwQAAgrgBgfQgFhKgFgkQgCgMgRgyQgPgtgIgTQgKgOgrhcIgDgEQgigwgbgYIi1hlIhkglIj6g+Iiug4IjAgpIlohZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAAAIANgyQADgQAHgTQANgpARgYQASgZAXgUIATgPIABAAQAOgBAMgCQADAAAKADIABAAQAXAGAugGQgOAJgQAOQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBIAQIALADQBcAYBZAiIAQAHQA2AVBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA5BPA4IAHAEIBvBEIACACIApAiIB0BfIABABQAiAcBMBGIADACICzCMIAIAGQBFA3AeAeIAEAEQA/A+BaBEIAHAFQArAgAfAUIAFAEIFbEOIAABQQotADoyABIpAABQoqAAgTgFg");
	this.shape_128.setTransform(1013.5,273.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2B868E").s().p("AicR2IAoh4IAXhOQANgrAEgdQACgPAIhUIAKhlQACgTAFhhQAEhigBgaQgEg2gGguQgCgOgLgoQgLgpgGgPQgEgFgNgeIghhLIgUgUQgPgUgRgPIgbgXIgIgGIithfIhkglIj6g+Iiug4IjAgpIlohZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAAAIANgyQADgQAHgTQANgpARgYQASgZAXgUIATgPIABAAQAOgBAMgCQADAAAKADIABAAQAXAGAugGQgOAJgQAOQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBIAQIALADQBcAYBZAiIAQAHQA2AVBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA5BPA4IAHAEIBvBEIACACIApAiIB0BfIABABQAiAcBMBGIADACICzCMIAIAGQBFA3AeAeIAEAEQA/A+BaBEIAHAFQArAgAfAUIAFAEIFhENIgGBRQotADoyABIpAABQoqAAgTgFg");
	this.shape_129.setTransform(1013.8,273.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2B868E").s().p("AQcSRQwrgBgcgIIAniIQgBgIAEgSQADgbACgRQAEggADhsIADh6IgBgsIAAhFIADhNIAAgDIABg2QgCgygHgwQgHgtgLguQgHgagJgZQgNghgSgeQgXgbgvhBIgDgEQgngkgigXIgJgEIi2hNIhlgjIjeg4IjKg8IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgqhAIgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgEggIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQIAAAAQAOAAAMgCQADgBALADIAAAAQAXAHAvgHQgOAKgQANIAAAAQgfAagJAVIAAABQgGAQgMA0IAAABIgKAyIAAAAIAcCWIAAABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIGPBaIEDAeIExAzIC1ATIAFABQBmAKCJAZIAGABQBBAMAuALIAGABIBHASIALADQBcAbBZAiIAQAGICEA2IBUAkIAEACIAyAeIADACIBnBCIAEACQBZA7BTAzIAHAEIBtBIIACACIAoAiIB1BgIABABQAgAbBNBFIADADICzCNIAHAGQA5AuAqAqIAEADQA/A/BYBEIAHAFQArAgAfAWIAFADIFdERIABB6IoSABIoUgBg");
	this.shape_130.setTransform(1013.4,276);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2B868E").s().p("AGLTxQgqiXgIgnQgDgQgmh1QgkhxgDgYIglhhQgmhjgFgYQgDgOgohlQgqhsgFgRQgGgSgphOIgrhUQgFgPgYgtIgig6QgWgbgvg/IgEgEQgRgQgggZQgdgXgEgBIi2hNIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIBLAYQBPAaAlAOIA5AWIBbAmIBVAkIADACIAyAeIAEACIBnBCIAEACQBZA7BTA1IBzBKIACACIAoAiIB1BgIABABQAhAbBMBFIADADIC6CTQA6AuAqAqIADADQAqAqB1BrQAcAVCOB3IEEDSIAAEYg");
	this.shape_131.setTransform(1013.5,285.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2B868E").s().p("AIDUPQhNjAgNgmQgfhXglheIgqhtQhFi6gVgiQgMgUgsheQguhjgIgbQgGgSgzhOQgzhPgCgFQgFgPgYgtIgig6QgWgZgvhBIgEgEQgRgQgggZQgdgXgEgBIi2hNIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIBLAYQBPAaAlAOIA5AWIBbAmIBVAkIADACIAyAeIAEACIBnBCIAEACQBZA7BTA1IBzBMIACACIAoAgIB1BgIABABQAhAbBMBFIADADIC6CTQA6AuAqAqIADADQAqAqB1BrQAcAVCOB3IEEEEIAAEig");
	this.shape_132.setTransform(1013.5,288.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119}]}).to({state:[{t:this.shape_120}]},6).to({state:[{t:this.shape_121}]},3).to({state:[{t:this.shape_122}]},3).to({state:[{t:this.shape_123}]},3).to({state:[{t:this.shape_124}]},3).to({state:[{t:this.shape_125}]},3).to({state:[{t:this.shape_126}]},3).to({state:[{t:this.shape_127}]},3).to({state:[{t:this.shape_119}]},6).to({state:[{t:this.shape_120}]},15).to({state:[{t:this.shape_128}]},9).to({state:[{t:this.shape_119}]},9).to({state:[{t:this.shape_120}]},9).to({state:[{t:this.shape_129}]},6).to({state:[{t:this.shape_121}]},6).to({state:[{t:this.shape_130}]},6).to({state:[{t:this.shape_119}]},6).to({state:[{t:this.shape_120}]},6).to({state:[{t:this.shape_121}]},3).to({state:[{t:this.shape_122}]},3).to({state:[{t:this.shape_123}]},3).to({state:[{t:this.shape_124}]},3).to({state:[{t:this.shape_125}]},3).to({state:[{t:this.shape_126}]},3).to({state:[{t:this.shape_127}]},3).to({state:[{t:this.shape_119}]},6).to({state:[{t:this.shape_120}]},15).to({state:[{t:this.shape_128}]},9).to({state:[{t:this.shape_119}]},9).to({state:[{t:this.shape_120}]},9).to({state:[{t:this.shape_129}]},6).to({state:[{t:this.shape_121}]},6).to({state:[{t:this.shape_130}]},6).to({state:[{t:this.shape_119}]},6).to({state:[{t:this.shape_119}]},33).to({state:[{t:this.shape_119}]},33).to({state:[{t:this.shape_119}]},33).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_119).to({_off:true},6).wait(27).to({_off:false},0).to({_off:true},15).wait(18).to({_off:false},0).to({_off:true},9).wait(24).to({_off:false},0).to({_off:true},6).wait(27).to({_off:false},0).to({_off:true},15).wait(18).to({_off:false},0).to({_off:true},9).wait(24).to({_off:false},0).wait(99).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(6).to({_off:false},0).to({_off:true},3).wait(39).to({_off:false},0).to({_off:true},9).wait(18).to({_off:false},0).to({_off:true},6).wait(24).to({_off:false},0).to({_off:true},3).wait(39).to({_off:false},0).to({_off:true},9).wait(18).to({_off:false},0).to({_off:true},6).wait(122));

	// waterflow
	this.WaterWave1_1 = new lib.SymWaterFlowTween15();
	this.WaterWave1_1.parent = this;
	this.WaterWave1_1.setTransform(18.1,415.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave2_1 = new lib.SymWaterFlowTween22();
	this.WaterWave2_1.parent = this;
	this.WaterWave2_1.setTransform(1077.4,461.5,1,1,0,0,0,2.9,12.9);

	this.WaterWave1_1_1 = new lib.SymWaterFlowTween14();
	this.WaterWave1_1_1.parent = this;
	this.WaterWave1_1_1.setTransform(18.1,415.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave2_1_1 = new lib.SymWaterFlowTween26();
	this.WaterWave2_1_1.parent = this;
	this.WaterWave2_1_1.setTransform(1077.4,468.5,1,1,0,0,0,2.9,12.9);

	this.WaterWave1_6 = new lib.SymWaterFlowTween11();
	this.WaterWave1_6.parent = this;
	this.WaterWave1_6.setTransform(-54,506,1,1,0,0,0,3.4,13.5);

	this.WaterWave2_1_2 = new lib.SymWaterFlowTween25();
	this.WaterWave2_1_2.parent = this;
	this.WaterWave2_1_2.setTransform(1027.4,522.5,1,1,0,0,0,2.9,12.9);

	this.WaterWave2_1_3 = new lib.SymWaterFlowTween23();
	this.WaterWave2_1_3.parent = this;
	this.WaterWave2_1_3.setTransform(986.4,522.5,1,1,0,0,0,2.9,12.9);

	this.WaterWave1_1_2 = new lib.SymWaterFlowTween13();
	this.WaterWave1_1_2.parent = this;
	this.WaterWave1_1_2.setTransform(-112.9,507.3,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.WaterWave1_1,p:{y:415.3}}]}).to({state:[{t:this.WaterWave1_1_1,p:{y:415.3}},{t:this.WaterWave2_1,p:{y:461.5}}]},6).to({state:[{t:this.WaterWave1_1,p:{y:414.3}}]},27).to({state:[{t:this.WaterWave1_1,p:{y:416.3}}]},33).to({state:[{t:this.WaterWave2_1_1,p:{y:468.5}}]},33).to({state:[{t:this.WaterWave2_1_1,p:{y:478.5}}]},33).to({state:[{t:this.WaterWave2_1_1,p:{y:483.5}}]},33).to({state:[]},33).to({state:[{t:this.WaterWave1_1_1,p:{y:503.3}},{t:this.WaterWave2_1,p:{y:538.5}}]},18).to({state:[]},15).to({state:[{t:this.WaterWave2_1_2},{t:this.WaterWave1_6}]},18).to({state:[]},15).to({state:[{t:this.WaterWave1_1_2},{t:this.WaterWave2_1_3}]},18).to({state:[{t:this.WaterWave1_1,p:{y:415.3}}]},15).to({state:[{t:this.WaterWave1_1_1,p:{y:457.3}},{t:this.WaterWave2_1,p:{y:503.5}}]},2).to({state:[{t:this.WaterWave1_1_1,p:{y:493.3}},{t:this.WaterWave2_1,p:{y:538.5}}]},1).to({state:[{t:this.WaterWave1_1_1,p:{y:503.3}},{t:this.WaterWave2_1,p:{y:538.5}}]},1).wait(1));

	// wtsymbol
	this.watertableicon = new lib.SymWaterTable();
	this.watertableicon.parent = this;
	this.watertableicon.setTransform(526.5,354.1,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.watertableicon).wait(3).to({y:356.5},0).wait(3).to({y:358.6},0).wait(3).to({y:359.6},0).wait(3).to({y:361.6},0).wait(3).to({y:366.6},0).wait(3).to({y:367.6},0).wait(3).to({y:368.6},0).wait(3).to({y:370.6},0).wait(3).to({y:376.6},0).wait(6).to({y:354},0).wait(3).to({y:356},0).wait(6).to({y:358},0).wait(6).to({y:359},0).wait(3).to({y:360},0).wait(3).to({y:363},0).wait(6).to({y:364},0).wait(6).to({y:354},0).wait(3).to({y:360},0).wait(6).to({y:362},0).wait(3).to({y:364},0).wait(3).to({y:366},0).wait(6).to({y:368},0).wait(6).to({y:371},0).wait(6).to({y:378},0).wait(3).to({y:383},0).wait(3).to({y:388},0).wait(3).to({y:391},0).wait(3).to({y:394},0).wait(3).to({y:397.5},0).wait(3).to({y:399.5},0).wait(3).to({y:403.5},0).wait(3).to({y:407.5},0).wait(3).to({y:410.5},0).wait(6).to({y:378},0).wait(9).to({y:381.5},0).wait(6).to({y:382.5},0).wait(3).to({y:384.5},0).wait(3).to({y:386.5},0).wait(3).to({y:390.5},0).wait(3).to({y:391.5},0).wait(3).to({y:392.5},0).wait(3).to({y:378},0).wait(3).to({y:384.1},0).wait(6).to({y:387.1},0).wait(6).to({y:390.1},0).wait(6).to({y:393.1},0).wait(6).to({y:394.1},0).wait(6).to({y:462.1},0).wait(12).to({y:464.1},0).wait(3).to({y:467.1},0).wait(3).to({y:468.1},0).wait(3).to({y:470.1},0).wait(3).to({y:472.1},0).wait(3).to({y:475.1},0).wait(3).to({y:477.1},0).wait(3).to({y:462.1},0).wait(21).to({y:464.1},0).wait(3).to({y:467.1},0).wait(3).to({y:468.1},0).wait(3).to({y:470.1},0).wait(3).to({y:462.1},0).wait(6).to({y:463.1},0).wait(3).to({y:465.1},0).wait(3).to({y:467.1},0).wait(3).to({y:469.1},0).wait(3).to({y:470.1},0).wait(3).to({y:472.1},0).wait(3).to({y:474.1},0).wait(3).to({y:476.1},0).wait(3).to({y:478.1},0).wait(3).to({y:354.1},0).wait(1).to({y:378.6},0).wait(1).to({y:403.6},0).wait(1).to({y:444.6},0).wait(1).to({y:477.1},0).wait(1));

	// watertableL
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYIQYBGIM8AiIAGf9Mg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_133.setTransform(363.5,444.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5GAU5MAAAgp2UACfAAVAoDAEKUAn0AEIAB2AAJQBWAGFKAhQFNAhAzAIQAbAED2AXQEIAeCPArQCYAtCKA1QCWA4AAAQIgEOEIgGNkMg3EAAFIr8AAQ5kAA1egFg");
	this.shape_134.setTransform(364.5,444.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5GAUqQAAjtAFw+QAFxAAAjtQCHASc3C2IciC0QB9AUKgBIQKFBFCAAJQBPAFFgAnQFXAlA4AJIDzAlQDoAnCRAsQCQArChBBQClBCAAAQIgENhIgGNBMg3EAAFIr8AAQ5kAA1egFg");
	this.shape_135.setTransform(364.5,445.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBWAOKsA8QKlA7BdARQA/ALF0AqIGVAvQBzARB/AZQDnAsCTAsQCCAnCpBUQCgBOABATIAAZmMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_136.setTransform(364,445.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBVAOKpBGQKeBFBeARQBAALF3AvIGbA0QGlBADaBCQCDAnCfBPQCWBJABATIAAZSMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_137.setTransform(364,445.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCGASdIDUIcxDSQBUAOKgBLQKUBKBdARQBBALGBAvIGkA0QBdAOCgAgQDwAxCTAtQCEAnCZBKQCRBFABASIAAYqMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_138.setTransform(364,445.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBUAOKRBLQKFBKBdARQBCALGKA0IGvA5QC5AcApAIQDXAqCKA+QB9A3CPBgQCEBaABATIAKXQMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_139.setTransform(363.5,446.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBSANKTBRQKFBPBdARQBuATMgBvQCOAVBHAPQDGAqCLA+QCCA5CUBZQCOBWABASIAAXGMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_140.setTransform(363.5,446.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCEARd2DkIddDhQBUANKMBRQKABPBfARQBtATM0B5QBaANBxAcQC6AuCOA/QB/A4CgBkQCYBgABASIAKWKMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_141.setTransform(363.5,446.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtMA9DAH+QBSANKUBWQKDBUBgARQBuATM9B5QBcAOBwAWQC9AnCTAtQB7AlCiB5QCRBsABAYIAKViMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_142.setTransform(363.5,446.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(101,156,197,0.6)").s().p("Ap6U3QAAjtgFxKQgFxJAAjtQDFAIEcAiQDSAaC3AgIGfArMgABAneg");
	this.shape_143.setTransform(62.5,443.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOAeIE1AzIEYBGICBBQMgAKAlAg");
	this.shape_144.setTransform(63.5,444.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOA9IErBFIEiBGICBB5MgAKAjmg");
	this.shape_145.setTransform(63.5,444.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UjMAAAgpEIErA7IEOBGIErBkIEOCNICLCBMAAAAhRg");
	this.shape_146.setTransform(63,445.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUjMAAAgpEIErBFIEOBlIErB4IEOCLICVCWMgAKAgBg");
	this.shape_147.setTransform(63.5,445.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UZMAAAgowIErBGIEOBkIErCVIEOC0ICCCqIAJeTg");
	this.shape_148.setTransform(63,446.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UZMAAAgowIErBGIEOBkIErCVIEYD6ICBDIIAAcvg");
	this.shape_149.setTransform(63,446.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UZMAAAgowIErBGIEOBkIECC0IEYEEICqEYIAAa2g");
	this.shape_150.setTransform(63,446.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUZMAAAgowIErBGIEOCLIEMC+IEtE3ICVEEIgKZmg");
	this.shape_151.setTransform(63.5,446.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(101,156,197,0.6)").s().p("EghaAU1QAAjsgGxJQgExKAAjtQC2AHEAAeQDrAbDKAkIWLCWIfSCzMAACAi/MggrAACIriABQs3AAp8gDg");
	this.shape_152.setTransform(213,443.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAUwMAAAgpiQCNAOEvAnIHIA5QDsAcMfBYQLpBUEgAoIJNBQIGbBQIDHA8IBuBGIALfiMggrAACIriABQs3AAp8gDg");
	this.shape_153.setTransform(213.5,444.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAUwMAAAgpiQCNAOEvAnIHIA5QYCCyIIBIIJXBkIGRBaIDlB4IBaCCIALdCMggrAACIriABQs3AAp8gDg");
	this.shape_154.setTransform(213.5,444.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAUmMAAAgpOQCNAOEvAnIHIA5QYCCyIIBIIJNBkIGlB4IC9BkIB4DmIALbAMggrAACIriABQs3AAp8gDg");
	this.shape_155.setTransform(213.5,445.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAUhMAAAgpEQCNAOEvAnIHIA5QFAAlLGBeQJPBPG1A8IJDBuIGlB4IC+CCICBD6IALZmMggrAACIriABQs3AAp8gDg");
	this.shape_156.setTransform(213.5,445.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAUhMAAAgpEQCGAOE2AsQFaAxBuANQEpAjLdBlIQECQIJDBuIGRCMIDICWICLEiIALYCMggrAACIriABQs3AAp8gDg");
	this.shape_157.setTransform(213.5,445.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAUcMAAAgo6QCMAOEsAnQFsAvBWAKQEfAhLxBsIQOCVII5BuIGbDSIC0DwICgE2IAAVEMggrAACIriABQs3AAp8gDg");
	this.shape_158.setTransform(213.5,446.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5JAPIIAK9WUBEKgAlAt1gAUQARAAgLPDQgFHggIHiMhFWAAHQ5YADrqAAInqAAg");
	this.shape_159.setTransform(363.9,481.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAOmIAA8uIYYgKIakgKMAlKgAKIScAAIHqBaQAQAAgLNzQgGG7gJG6MhFWAAIQ5YADrqAAInqgBg");
	this.shape_160.setTransform(364,484.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5PAOXIAA8uIYOAeIa4AAMAlAgAKIScAAIH0CMQARAAgRNBQgIGigMGhMhFWAAIQ5XADrrAAInqgBg");
	this.shape_161.setTransform(364.4,486);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5GAN+IAK7yIYYAAIakgKMAkOAAAISIAAIFUAoIDSB4QAQAAgGMoQgEGVgGGVMhFWAAIQ5YADrqAAInqgBg");
	this.shape_162.setTransform(363.6,488.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5GANvIAK7UIYiAAIakgKMAkOAAAIR+AAIFUAyIDSB4QAQAAgGMUQgEGLgGGLMhFWAAIQ5YADrqAAInqgBg");
	this.shape_163.setTransform(363.6,490);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5PANgQAAiCAU40IWgAKIdigUMAi+AAKIP8gKIFoAeIFeCWQARAAgRMAQgIGBgMGBMhFWAAIQ5XADrrAAInqgBg");
	this.shape_164.setTransform(364.4,491.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5PANWQAAiCAK4WIWgAKIdigUMAi0AAAIQQgKIF8BGIFKC0QARAAgRLTQgIFrgMFqMhFWAAIQ5XADrrAAInqgBg");
	this.shape_165.setTransform(364.4,492.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KANHQAAiCAU3uIWggKIdOgKMAjIAAKIQQgUIGGBGIEsDmQAQAAgLKrQgGFXgJFWMhFWAAIQ5YADrqAAInqgBg");
	this.shape_166.setTransform(364,494);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5PAMzQAAiCAK3QIWqgKIdOAAMAi+AAAIQQgKIGQBaIE2EEQARAAgRJ+QgIFAgMFAMhFWAAIQ5XADrrAAInqgBg");
	this.shape_167.setTransform(364.4,496);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAMkQAAiCAU2oIWggKIdYAAMAi0gAKIP8gKIFoA8IFoEOQAQAAgLJ5QgGE+gJE9MhFWAAIQ5YADrqAAInqgBg");
	this.shape_168.setTransform(364,497.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(101,156,197,0.6)").s().p("AqDOhIAA9CIOVALICrANIDHBCIAAbog");
	this.shape_169.setTransform(63.5,484);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(101,156,197,0.6)").s().p("AqDOXIAA8tIOCAUIDMAfICmBsIATaOg");
	this.shape_170.setTransform(63.5,485);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(101,156,197,0.6)").s().p("AqDOIIAA8QINZAKIDwBQIC+CXIAAYfg");
	this.shape_171.setTransform(63.5,486.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+NvIgK7dINFAUIEFBaIDHCgIAAXPg");
	this.shape_172.setTransform(63,489);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+NbIgK62IL/AKIEtBuIDlC0IAAWKg");
	this.shape_173.setTransform(63,491);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+NMIgK6YIK6AVIFoB4IDlDbIAKUwg");
	this.shape_174.setTransform(63,492.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+NHIgK6OIKvAyIFeB4ID6DTIAKURg");
	this.shape_175.setTransform(63,493);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(101,156,197,0.6)").s().p("AqDNCIAA6DIJNAnIHLCXIDlDRIAKT0g");
	this.shape_176.setTransform(63.5,493.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(101,156,197,0.6)").s().p("EghaAOSIgK8tIbBAAIX5AAIGkAAID5AnIC0AzIC/BaIAAaDg");
	this.shape_177.setTransform(213,485.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(101,156,197,0.6)").s().p("EghkAODIgK8QIbBAAIXvAKIGuAKIEEAfICpBPIDTCWIgUYCg");
	this.shape_178.setTransform(214,487);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(101,156,197,0.6)").s().p("EghaAN0IgK7yIbLAAIXlAKIGkALIEDAnIC/BRIC0CgIAAXPg");
	this.shape_179.setTransform(213,488.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(101,156,197,0.6)").s().p("EghaANlIgK7TIbBAAIX5AKIGkAKIDvAnIDJCDIC0C0IAAVrg");
	this.shape_180.setTransform(213,490);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(101,156,197,0.6)").s().p("EghaANWIgK62IbLAAIX4AAIGlAeIDlBGIDnCNICLCVIALU6g");
	this.shape_181.setTransform(213,491.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4MBC3AATIAARpUg31AAAgLLgAEg");
	this.shape_182.setTransform(213.5,524.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5MAmiAAJINmADIMAACIMLACIM1ACIMgABIHoABIB+AUIC+A8IgUQYMg0fAABUgyQAAAgLSgAEg");
	this.shape_183.setTransform(365,524.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5MAmiAAJINmADIMAACIMLACIM1ACIMgABIGpAVIC0AUIDHBQIgUPwMg0fAABUgyQAAAgLSgAEg");
	this.shape_184.setTransform(365,524.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAI7IAJx5MAmiAAJINmADIMAACIMLACIM1ACIMQAWIHCAeIC0AeIC0BGIgKPSMg0fAABUgyQAAAgLSgAEg");
	this.shape_185.setTransform(364.5,524.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5MAmiAAJINmADIMAACILzAkINcAAILuAeIHfAoIFoBkIgUOgMg0fAABUgyQAAAgLSgAEg");
	this.shape_186.setTransform(365,524.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5MAmiAAJINmADILwAmIMWAUIM+AeILlAKIHpAoIFyBkIgUOCMg0fAABUgyQAAAgLSgAEg");
	this.shape_187.setTransform(365,524.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAI7IAJx5QalAeLjAKIOEAKILsAKIMDAUINRAeILbAeIHzAoIFoBkIgKNkMg0mAABUgyWAAAgLFgAEg");
	this.shape_188.setTransform(364.5,524.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAI7IAJx5QalAeLjAKIN6AeILsAUIMDAKINHAUILQAeIIJAyIFoCCIgBMyMg0mAABUgyWAAAgLFgAEg");
	this.shape_189.setTransform(364,524.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5IOrAaQP5AcHHAGIOXAeILiAKIL5AUINbAeILaAeIHrAoIGPCWIgUMKMg0mAABUgyWAAAgLFgAEg");
	this.shape_190.setTransform(365,524.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5QGzASH+ASQP7AmHJAGIOXAeILiAUILvAUINbAUILaAeIHXAoIGjC0IgULYMg0mAABUgyWAAAgLFgAEg");
	this.shape_191.setTransform(365,524.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5KAI7IAJx5QGzASH+ASQP7AmHJAGIOXAeILiAUILvAUINlAyILQAeIHXAyIGjCMIgULYMg0mAABUgyWAAAgLFgAEg");
	this.shape_192.setTransform(365,524.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+I9IAJx5IDEAAIDJAAIDmAAIEAAAIEaAAIBnAyIAARAQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_193.setTransform(63,524.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+I9IAJx5IDEAAIDJAAIDmAAID8AKIEiAKIBjAeIAARAQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_194.setTransform(63,524.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+I9IAJx5IDEAAIDJAAIDgAKIECAKIEiAUIBjAeIAAQsQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_195.setTransform(63,524.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+I9IAJx5IDEAAIDMAKIDlAKIEEAKIEOAeIBtA8IAAP6Qk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_196.setTransform(63,524.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+I9IAJx5IDIAKIDTAKIDaAKIEEAUIEYAeIBjAyIAAPwQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_197.setTransform(63,524.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+I9IAJx5IDSAUIDJAKIDaAUIEEAUIEYAoIBjAyIAAPSQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_198.setTransform(63,524.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(101,156,197,0.6)").s().p("AqDI9IAJx5IDSAUIC0AUIDnAeIEMAUIEOAyIB3A8IgKOqQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_199.setTransform(63.5,524.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(101,156,197,0.6)").s().p("AqDIuIAAxbIJ2AoIIaBGIB3A8IgKOqQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_200.setTransform(63.5,525.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(101,156,197,0.6)").s().p("AqDIfIAAw9IJ2AKIIaBGIB3A8IgKOqQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_201.setTransform(63.5,527.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+IfIAAw9IJ2AoIHTBQIC0BaIAANkQk/gBm5AEQlyAEh5AAIgaAAg");
	this.shape_202.setTransform(63,527.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IItACIJrADIJtADIJfADIInACIIdADIJbAXIC0BGIAAQPUg31AAAgLLgAEg");
	this.shape_203.setTransform(213.5,524.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IItACIJrADIJtADIJfADIIhASIImAKIJYAVIC0BPIAAPxUg31AAAgLLgAEg");
	this.shape_204.setTransform(213.5,524.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IItACIJrADIJwAYIJNAKIIwAKIIcALIJXAeIC/BaIAAPIUg31AAAgLLgAEg");
	this.shape_205.setTransform(213.5,524.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IIwAdIJ2AUIJiAVIJNgKIImAKIIcAUIJNAnIDTBQIAAOrUg31AAAgLLgAEg");
	this.shape_206.setTransform(213.5,524.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IIwAdIJ2AUIJiAVIJNAdIImAUIIcAUIJNAVIDTBFIAAOXUg31AAAgLLgAEg");
	this.shape_207.setTransform(213.5,524.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IIwAdIJ2AUIJiAVIJNAdIImAUIIcAUIJNApIDTBQIAAN4Ug31AAAgLLgAEg");
	this.shape_208.setTransform(213.5,524.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IIwAdIJ2AUIJsApIJDAJIIwAoIISALIJDA7IDdBGIAANlUg31AAAgLLgAEg");
	this.shape_209.setTransform(213.5,524.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IIwAdIJ2ApIJiAnIJhAUIImAfIH+AdIJNAeIDdA8IAANlUg31AAAgLLgAEg");
	this.shape_210.setTransform(213.5,524.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(101,156,197,0.6)").s().p("EghfAI7IAJx4IIwAdIJ2ApIJiAnIJXAeII6ApIH0ATIJNApIDdAnIAANlUg31AAAgLLgAEg");
	this.shape_211.setTransform(213.5,524.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(101,156,197,0.6)").s().p("EghkAI2IAAxvIJDAeIJ2ApIJYAnIJXApII6AdIH0AUIIHAzIEtCgIgKLYUg31AAAgLLgAEg");
	this.shape_212.setTransform(214,525);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5GATzQAAjtAFwHQAFwJAAjtUAEYAAlAtTAFTUAvVAFhABuAABQAsAACbAUQCqAVChAdIBgASQBWARAIAFQBKAoBhBjQBZBbAAAUIgELkIgGLEMg3EAAFIr8AAQ5kAA1egFg");
	this.shape_213.setTransform(364.5,451.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAROQAAjtAEtiQAGtkgBjtUAA+gABAvgAE9UAvMAE6AA5AAKIEYAmQEAAiArAIIEsBaQAjASBXBJQBYBKABAPIAUTCMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_214.setTransform(364,467.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAOAQgBiTAK5wMBmfAJsIEYAoQDfA7AQABQAHAIBZBIQBkBPAYAUIgKODMg0fAABUgyQAAAgLSgAEg");
	this.shape_215.setTransform(364.5,492);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAI7IAJx5QGzASH+ASQP7AmHJAGIOXAeILiAUILvAUINlAyILQAeIHXAyIDvBQIChBuIgBKmMg0mAABUgyWAAAgLFgAEg");
	this.shape_216.setTransform(364,524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133}]}).to({state:[{t:this.shape_134}]},3).to({state:[{t:this.shape_135}]},3).to({state:[{t:this.shape_136}]},3).to({state:[{t:this.shape_137}]},3).to({state:[{t:this.shape_138}]},3).to({state:[{t:this.shape_139}]},3).to({state:[{t:this.shape_140}]},3).to({state:[{t:this.shape_141}]},3).to({state:[{t:this.shape_142}]},3).to({state:[{t:this.shape_143}]},6).to({state:[{t:this.shape_144}]},3).to({state:[{t:this.shape_145}]},6).to({state:[{t:this.shape_146}]},6).to({state:[{t:this.shape_147}]},3).to({state:[{t:this.shape_148}]},3).to({state:[{t:this.shape_149}]},3).to({state:[{t:this.shape_150}]},3).to({state:[{t:this.shape_151}]},3).to({state:[{t:this.shape_152}]},3).to({state:[{t:this.shape_153}]},3).to({state:[{t:this.shape_154}]},6).to({state:[{t:this.shape_155}]},3).to({state:[{t:this.shape_156}]},3).to({state:[{t:this.shape_157}]},6).to({state:[{t:this.shape_158}]},6).to({state:[{t:this.shape_159}]},6).to({state:[{t:this.shape_160}]},3).to({state:[{t:this.shape_161}]},3).to({state:[{t:this.shape_162}]},3).to({state:[{t:this.shape_163}]},3).to({state:[{t:this.shape_164}]},3).to({state:[{t:this.shape_165}]},3).to({state:[{t:this.shape_166}]},3).to({state:[{t:this.shape_167}]},3).to({state:[{t:this.shape_168}]},3).to({state:[{t:this.shape_159}]},6).to({state:[{t:this.shape_169}]},3).to({state:[{t:this.shape_170}]},6).to({state:[{t:this.shape_171}]},6).to({state:[{t:this.shape_172}]},3).to({state:[{t:this.shape_173}]},3).to({state:[{t:this.shape_174}]},3).to({state:[{t:this.shape_175}]},3).to({state:[{t:this.shape_176}]},3).to({state:[{t:this.shape_159}]},3).to({state:[{t:this.shape_177}]},3).to({state:[{t:this.shape_178}]},6).to({state:[{t:this.shape_179}]},6).to({state:[{t:this.shape_180}]},6).to({state:[{t:this.shape_181}]},6).to({state:[{t:this.shape_182}]},6).to({state:[{t:this.shape_183}]},3).to({state:[{t:this.shape_184}]},3).to({state:[{t:this.shape_185}]},3).to({state:[{t:this.shape_186}]},3).to({state:[{t:this.shape_187}]},3).to({state:[{t:this.shape_188}]},3).to({state:[{t:this.shape_189}]},3).to({state:[{t:this.shape_190}]},3).to({state:[{t:this.shape_191}]},3).to({state:[{t:this.shape_192}]},3).to({state:[{t:this.shape_182}]},3).to({state:[{t:this.shape_193}]},3).to({state:[{t:this.shape_194}]},3).to({state:[{t:this.shape_195}]},3).to({state:[{t:this.shape_196}]},3).to({state:[{t:this.shape_197}]},3).to({state:[{t:this.shape_198}]},3).to({state:[{t:this.shape_199}]},3).to({state:[{t:this.shape_200}]},3).to({state:[{t:this.shape_201}]},3).to({state:[{t:this.shape_202}]},3).to({state:[{t:this.shape_182}]},3).to({state:[{t:this.shape_203}]},3).to({state:[{t:this.shape_204}]},3).to({state:[{t:this.shape_205}]},3).to({state:[{t:this.shape_206}]},3).to({state:[{t:this.shape_207}]},3).to({state:[{t:this.shape_208}]},3).to({state:[{t:this.shape_209}]},3).to({state:[{t:this.shape_210}]},3).to({state:[{t:this.shape_211}]},3).to({state:[{t:this.shape_212}]},3).to({state:[{t:this.shape_133}]},3).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).wait(1));

	// watertableR
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(101,156,197,0.6)").s().p("AgXP+Q3NAAvUABIAG5KIgCmzIOQAlIanBGQCvAzDLBVQBBAcEdCCQDUBgCOA0QDJBLC+AmIG1gDQEPgBCngBIAKVsMgnQgABg");
	this.shape_217.setTransform(977,475.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(101,156,197,0.6)").s().p("EgmuACcQAFtQgBhMQAAhVEzhDQEUg8E9gIQDrgFL7AWQF8ALFMAMQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gDQEPAACngCIAAViQu3AA4VAFMgmbAAFIAFtCg");
	this.shape_218.setTransform(976.5,478.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(101,156,197,0.6)").s().p("EgmzgLPQgBhREzgzQDigmFwgUQF3gSVngfQCvAyDDBUQA/AaEOB7QDJBcCIAyQDBBHC/AmIG1gCQEPgBCngCIAKVjQu3AA4VAEMgmbAAGg");
	this.shape_219.setTransform(977.5,482);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOrQ3HgBvUACIAFsCQAFsPgBhLQAAhUEzg7QD7gyFWgRQDrgMNUgPIMigOQCvAzCvBNQBAAcDgBsQCrBTB5AuQCtBAC/AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_220.setTransform(976.5,484);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOhQ3HgBvUACIAFrzQAFr/gBhNQAAhTEzhAQEEg3FNgRQDrgMNigPIMxgOQCwAzCqBKQA9AaDZBoQCkBNB2ArQCoA+C/AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_221.setTransform(976.5,485);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOXQ3HgBvUACIAFrpQAFr1gBhNQAAhTEvhAQEAg4FMgRQDqgLN7gQINLgMQCvAyCkBHQA5AYDPBjQCaBIBzApQCiA7C+AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_222.setTransform(976.5,486);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOIQ3HgBvUACIAA3bQgBhVE0hIQERhCFAgQQF3gTangzQCjA7CWBEQBUAmCPBDQD4ByFGBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_223.setTransform(976.5,487.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(101,156,197,0.6)").s().p("AgYN5Q3HgBvUACIAA2oQgBhWE0hNQEXhHE6gRQF3gSbEg+QCiA8CUA/IDYBfQDjBiFMBPIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_224.setTransform(976.5,489);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(101,156,197,0.6)").s().p("AgYNqQ3HgBvUACIAA2BQgBhVE5hOQEbhGE7gQQF3gTcUhHQCjA7CEA7QBKAgBwA0QC6BUFIBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_225.setTransform(976.5,490.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(101,156,197,0.6)").s().p("AgTNbQ3HgBvUACIgK1YQgBhXE4hSQEhhME2gPQF3gTczhHQEDBeDTBdQCkBCFUBRIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_226.setTransform(976,492);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxATuMAABgndIPuBqMAw8AEYIQYBGMA1oACDIXHI6INwgUIgJVsUg/yAACgq1AAAUgq2AAAgV8gACg");
	this.shape_227.setTransform(676,450.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAS9MAAAglAICqgyIDSgKIE3AUIMLBQQCOAIVgBsIW3ByUABQAAGAhJABYMAg6ABWIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_228.setTransform(676,455.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASpMAAAgjcICXhaIDRgeIE3AKIM0BQUADqAANAqwADPUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_229.setTransform(676,457.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsASVMgAKghGICXiCIDIg8IE1goIM/BQUADrAANArDAC7UABQAAGAhOABTMAhAABRIUdISINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_230.setTransform(675.5,459.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASBMAAKggAICDiCIDRhaIE2goIM1A8QCiAJVVBXQU3BUCKAKUABQAAGAhJABOMAg7ABMIUdISINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_231.setTransform(676,461.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsARjIgK9+ICCiMIC/h4IFdhGIMqAeIW3BaQU6BTDSAHMBDxACgIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_232.setTransform(675.5,464.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxARKIAA8QICDi0IC+iCIFJhQIM0AAIW3BQQUzBJDZAHMBDxACgIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_233.setTransform(676,467.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQ7IAA6sIB4jSIDdigIFKhQIMfgKQDeAMTdA6QUmA+DrAIMBDoACWIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_234.setTransform(676,468.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQ7IAA5wICDjcIDSiqIE/hkIMqgeQDeAMTdA6QUmA+DrAIMBDoACWIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_235.setTransform(676,468.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+SgRkIRuBlIQYBGMA1nACCIXII7INwgVIAAVtMh8gAAKg");
	this.shape_236.setTransform(826.3,465.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+VgPJIBvgoICqgyIEOAAIJXAVQCvAMFGARQFFATCuALMA4OAB5IVGIcINwgVIAAVtMh8fAAKg");
	this.shape_237.setTransform(826,472);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(101,156,197,0.6)").s().p("Eg98AQQIAA9DIA9huICqhQIEOgdIJXAKIHMAXIIcAaMA4YAB5IU8ISINwgVIAAVtg");
	this.shape_238.setTransform(823.5,473);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+VgK6IBah5IC/iCIEOhGIJXgKQCvANFGANQFFANCuAMMA5UABuIUAIIINwgVIAAVtMh8fAAKg");
	this.shape_239.setTransform(826,475);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+VgJlIBaiXIC/iWIEOhaIJXgUQCvAMFGANQFFAOCuAMMA5yAB3ITiH1INwgVIAAVtMh8fAAKg");
	this.shape_240.setTransform(826,475.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+VgIVIBai+IC/iqIEOhkIJXgVIPeApMA6HAB3ITXHrINwgVIAAVtMh8fAAKg");
	this.shape_241.setTransform(826,476.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+PgFmICVkEICXi0IFUiNIHphFQCvALFQAJQFPAICuALMA5oAB4ITiHhINwgVIAAVtMh8fAAKg");
	this.shape_242.setTransform(826.5,477);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(101,156,197,0.6)").s().p("EgmsgPAUAhXgAPAG9AACIATgBQAIACBJAdQCGA0FGCKQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_243.setTransform(976.5,480.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gMjIGQhkILGgyILGgKQDdgBEmAKQE1ALAYAAQAFAADuBaIDtBaQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_244.setTransform(976.5,481.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gL8IGQiWIKygUILQgKQDJAAE/gGIFSgEQAFAADuBaIDtBaQANAEFkCiQFSCbAWAJIApABQFJAFLbgFQABACgEK0QgFK1gCAAMhNyAAKg");
	this.shape_245.setTransform(976.5,482.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(101,156,197,0.6)").s().p("EgnDgLiIDchuIC+geILGgoILQgUQGEgCIwACQAFAAC8BLIC7BLQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_246.setTransform(976,484);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(101,156,197,0.6)").s().p("EgmqgKdIC+iLIC0gpIK8geILQgdQDRgCGHgJQFugJA0AAQAFAACjBBICiBAQANAEFkCiQFSCbAWAJIApABQFJAFLbgFQABACgEK0QgFK1gCAAMhNyAAKg");
	this.shape_247.setTransform(976.5,485);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gJqIC+h4IEshkIJYgfILGgTQDYgSGggFQGbgGAZgBQAFgBCKA4ICJA3QANADFkCiQFSCbAWAJIApABQFJAFLbgFQABACgEK0QgFK1gCABMhNyAAJg");
	this.shape_248.setTransform(976.5,486);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gJCIDIiWIEYhaIJsgyIK8gUQBeAHIGgFQH9gFBXgHQAFgBBEAkIBDAjQANADFkCiQFSCbAWAJIApABQFJAGLbgGQABACgEK0QgFK1gCABMhNyAAKg");
	this.shape_249.setTransform(976.5,488);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gHeIDIjcIEihuIJsgyIKogUQBeAHIkgFQIcgFBWgHQAFgBArAaIAqAZQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_250.setTransform(976.5,489);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(101,156,197,0.6)").s().p("EgmqgGYIDIj6IE2iCIJOgoIKogUQBZAGJCgOQIsgOBfgIQAFgBASAQIARAPQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_251.setTransform(976.5,490);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(101,156,197,0.6)").s().p("EgmqgGYIDSjwIDwhuIKKg8IK8gUQEcgIHggIQH3gIA9AEQALABBdAlQB5AwCaBGQFSCbAWAJIApAAQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_252.setTransform(976.5,491.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2APKIAK7yIDqhAIEAgaIGhgEIeegUMAuDgAZUAphgAWAB/AABIATgBQAIACBJAdQCGA0FGCKQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_253.setTransform(676.5,480);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAPKIgK6YID3h1IERgrIEAgDMAg4gARMAuEgAeQOLgIPugRINjgPIATgBQAIACBJAdQCGA0FGCKQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_254.setTransform(676,480);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2AO7IAK4qIDmiqIEYg8IEygZIf8gjMAt6gAUIergPQM2gGBfABQAPAADlBfIDiBfQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_255.setTransform(676.5,481.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2AO7IAK3aIDmi+IEshQIEsgUMAgCgAoMAtmgAeUAshgApAAfgAJQAPgFDkBhIDjBiQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_256.setTransform(676.5,481.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2AO7IAK2UIEEjcIEOhQIE2geIf4gyMAtmgAyUAshgApAAfgAJQAPgFDkBhIDjBiQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_257.setTransform(676.5,481.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2AOxIAA1YID6jSIEshkIFKgoIfagyMAtmgA8UAtxgAzAAfgAJQAPgFC8BXIC7BYQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_258.setTransform(676.5,482.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2AOxIAA0mIDwjIIEsiCIFegyIe8g8MAt6gBGUAtxgAzAAfgAJQAPgFC8BXIC7BYQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_259.setTransform(676.5,482.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(101,156,197,0.6)").s().p("EhV2AOxIAAz0IDwi0IE2igIGug8IdihGMAt6gBaUAtxgAzAAfgAJQAPgFC8BXIC7BYQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAg");
	this.shape_260.setTransform(676.5,482.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+kgKXQAagbBEgyIB0hTQAlgaBVgIQAugEBSgCQCegJNhgWQOmgYILgFQOAgIO+gWIM4gUIATgBQAIACBJAdQCGA0FGCKQANADFkCjQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMh8gAAKg");
	this.shape_261.setTransform(825.5,480.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+LgJbQAHgDBCg4QBDg3BQgkQA5gbBhgWQA2gNBcgTQAwgJBhgMQB6gOBxgEQGSgQMggJQGUgEFigBUAr7gAzABhAABQAPAACzBaICwBaQANADFkCiQFSCbAWAJIApABQFJAFLbgFQABACgEK0QgFK1gCABMh8gAAKg");
	this.shape_262.setTransform(827,482.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+VgIkQAQgIAwgyQA8hABCgwQA6gsB2gWQA/gLBlgNQAwgKBhgMQB6gOBxgFQGUgPMegOQGUgGFigEUAsZgA9ABhAABQAPgBCkBWIChBVQANADFkCiQFSCbAWAJIApABQFJAFLbgFQABACgEK0QgFK1gCABMh8gAAJg");
	this.shape_263.setTransform(827,483);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+VgHAQANgHBChWQBJhgBEgzQA8gtBvgeQAOgFCRgeQA0gLBTgLQBxgOBwgFQKDgZUlgYUAs3gAzABhAAAQAPAACVBMICSBLQANADFkCiQFSCbAWAJIApABQFJAFLbgFQABACgEK0QgFK1gCABMh8gAAKg");
	this.shape_264.setTransform(827,484);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+fgFcQANgGBbh/QBiiIBEg0QBDgxBZgpQBQgjBAgOQAfgHBcgDIDVgHQKDgaVHglUAs3gApABhAABQAPAACQBBICNBBQANADFkCiQFSCbAWAJIApABQFJAGLbgGQABACgEK0QgFK1gCABMh8gAAKg");
	this.shape_265.setTransform(826,485);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgHQMBXegAKQHzgXApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_266.setTransform(826.5,516.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgGUIEyhGIIIAAIHpAAIJYAAIKhAAQHzgXApgHQB8gVLMhjIISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_267.setTransform(977,516.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgF2IFAg8IH6goIHpAAIJYAAIKhAAQHzgXApgHQB8gVLMhjIISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_268.setTransform(977,516.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgFOIEshQIIIgeIHqgUIJdgKIKhAAQHzgXApgHQB8gVLMhjIISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_269.setTransform(977,516.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgEmIEsg8IIIhGIH0gKIJigKIKSgeQHzgXApgHQB8gVLMhjIISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_270.setTransform(977,516.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgEIIE2hGIHqg8IH+gUIJiAAIKIgUQIHg/ApgHQB8gVLMhjIISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_271.setTransform(977,516.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgDgIFAhQIHqg8IIIgUIJYAAIKIgUQIbhJApgHQB8gVKuh3IISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_272.setTransform(977,516.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgC4IFAhkIH0g8IH+gUIJsAAIJqgUIJEhaQB8gUK4hkIISg8IHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_273.setTransform(977,516.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgCpIFKhuIHggyIIIgeIJ2AAIJqgUII6haIM0iMIH+geIHWAAQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_274.setTransform(977,518.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gCLIFKhkIH0hGIIIgeIJiAAIJ+gUII6haQB8gVKuh3IH0geIHggUQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_275.setTransform(976.5,518.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gBtIFKhkIH0g8IImgoIJYgKIJqgoII6haQB8gVKuh3IH0geIHggUQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_276.setTransform(976.5,518.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsAKFIgKxAIB+gyIFyABIGQABIE2ABIEZAAID4ABIFUABIFWABIG5ABIGiABIGlABMBM5AALQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_277.setTransform(675.5,516.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsAKFIgKxAICCgeIFygKIGMgIIE2ABIEZAAID4ABIFUABIFWABIG5ABIGiABIGlABMBM5AALQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_278.setTransform(675.5,516.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsAKFIgKwsICCgeIFygUIGaAAIEogRIEZAAID4ABIFUABIFWABIG5ABIGiABIGlABMBM5AALQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_279.setTransform(675.5,516.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsAKFIgKv6ICMgyIFygeIGQgKIEsgKIEOAAIEEAAIFPgPIFWABIG5ABIGiABIGlABMBM5AALQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_280.setTransform(675.5,516.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsAKFIgKvwICMgoIF8goIGGgKIEsAAIEOgKIEEgKIFKAAIFoAAIGuAAIGggMIGlABMBM5AALQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_281.setTransform(675.5,516.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsAKFIgKvSICWgyIF8geIGGgUIEigKIEOAAIEOgKIRMgKIU8gKIHqAAIGaAAMA3IAAAQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_282.setTransform(675.5,516.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(101,156,197,0.6)").s().p("EhVnAKFIgUuqICgg8IFogUIGageIEOgKIEigKIEigKIQ4AAIUygKIOOAAMA3IgAeQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_283.setTransform(675,516.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(101,156,197,0.6)").s().p("EhVnAKFIgUuqICggoIFegUIGugeINSgKIQ4gKIUogKIOOgUMA3IgAoQHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_284.setTransform(675,516.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(101,156,197,0.6)").s().p("EhVnAKFIgUuqIC0gUIFKgoMA5ggA8IOEAAMA3SgA8QHzgXApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_285.setTransform(675,516.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAKFIAAtuIDShGIEigoMA5CgAyIOiAAMA3IgAyQHzg1ApgHQB8gULMhkIISgeIHCAeQAMT9gCAAUiCXgAJgpLAAAg");
	this.shape_286.setTransform(676,516.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgF2ICghGIFRgUIGlgBIIbgBIJNgBIHrgBIJOgBIIlgBIJXgBIIlgBIGQgBIF2gBQHzgXApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_287.setTransform(826.5,516.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgFiICqhPIFKgLIGkgKIIZgMIJNgBIHrgBIJOgBIIlgBIJXgBIIlgBIGQgBIF2gBQHzgXApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_288.setTransform(826.5,516.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgE5ICqhRIFKgdIGugKIISgLIJOAAIHqAAIJLgZIIlgBIJXgBIIlgBIGQgBIF2gBQHzgXApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_289.setTransform(826.5,516.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgEcICgg7IFogzIGkgTIIIgKIJYAAIHWAAIJYAAIImgVIJTgbIIlgBIGQgBIF2gBQHzgXApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_290.setTransform(826.5,516.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgEIICgg7IFegzIGkgUIISgJIJigKIHMAAIJOAAIIwgKIJWgKIImgLIGGAAIF8geQHzgXApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_291.setTransform(826.5,516.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgDfIC0hHIFUg8IGkgeIIIgTIJigKIHMAAIJOAAIIwgKIJWgKIImgLIGGAAIF8gKQHzgrApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_292.setTransform(826.5,516.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgDMIC0hGIFUgxIGkgpIISgUIJsgTIG4AAIJOgKIImAAIJMgKIImAAIGagVIF8gKQHzgrApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_293.setTransform(826.5,516.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgDMIC0gxIFUgzIGugnIIIgVIJsgUIHWAKII6gKIIcAAIJWgKIIcgdIGagVIF8gKQHzgrApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_294.setTransform(826.5,516.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgDMIC0gxIFUgpIGugdIISgfIJsgKIHMgKII6gKIIcAAIJWgKIIcgTIGagUIF8gVQHzgrApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_295.setTransform(826.5,516.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(101,156,197,0.6)").s().p("Eg+QgBUIDciLIEsg9IGkgUIIcgTIJsgUIHWgLII6gKIIcgKIJMgUIIcgTIGagUIF8gVQHzgrApgGQB8gVLMhkIISgeIHCAeQAMT9gCAAMh8gAACg");
	this.shape_296.setTransform(826.5,516.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(101,156,197,0.6)").s().p("EgmwAByQADrrADgCIBchTQBghRAhgGQC2ghAlgCQBigGDUgJQDrgMRIAKQIjAFH1AHQCuAzB5AyQArASB9A8QBYAqBUAbQB2AmC/AmIG1gCQEPgBCngCIAKVjQu3AA4VAEMgmcAAGIAErtg");
	this.shape_297.setTransform(977.5,491.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(101,156,197,0.6)").s().p("Egm+gFwIDmjcID6hkIKAgyILQgyIM9gaQJAgSA1AEQALAAASAHQAuASCaBHQFSCaAWAJIApABQFJAGLbgGQABACgEK0QgFK2gCAAMhNyAAKg");
	this.shape_298.setTransform(976.5,495);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gDqICvi4IC1gvMAjCgAJQHzgXApgHQB8gVLMhjIISgeIHCAeQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_299.setTransform(976.5,516.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(101,156,197,0.6)").s().p("EgmvgAnICfh6IChgwIH0g8IImgoIJYgKIJqgoII6haQB8gVKuh3IH0geIHggUQAMT8gCAAUgkVAADgpJAAAg");
	this.shape_300.setTransform(977,518.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_217}]}).to({state:[{t:this.shape_218}]},3).to({state:[{t:this.shape_219}]},3).to({state:[{t:this.shape_220}]},3).to({state:[{t:this.shape_221}]},3).to({state:[{t:this.shape_222}]},3).to({state:[{t:this.shape_223}]},3).to({state:[{t:this.shape_224}]},3).to({state:[{t:this.shape_225}]},3).to({state:[{t:this.shape_226}]},3).to({state:[{t:this.shape_227}]},6).to({state:[{t:this.shape_228}]},3).to({state:[{t:this.shape_229}]},6).to({state:[{t:this.shape_230}]},6).to({state:[{t:this.shape_231}]},3).to({state:[{t:this.shape_232}]},3).to({state:[{t:this.shape_233}]},3).to({state:[{t:this.shape_234}]},3).to({state:[{t:this.shape_235}]},3).to({state:[{t:this.shape_236}]},3).to({state:[{t:this.shape_237}]},3).to({state:[{t:this.shape_238}]},6).to({state:[{t:this.shape_239}]},3).to({state:[{t:this.shape_240}]},3).to({state:[{t:this.shape_241}]},6).to({state:[{t:this.shape_242}]},6).to({state:[{t:this.shape_243}]},6).to({state:[{t:this.shape_244}]},3).to({state:[{t:this.shape_245}]},3).to({state:[{t:this.shape_246}]},3).to({state:[{t:this.shape_247}]},3).to({state:[{t:this.shape_248}]},3).to({state:[{t:this.shape_249}]},3).to({state:[{t:this.shape_250}]},3).to({state:[{t:this.shape_251}]},3).to({state:[{t:this.shape_252}]},3).to({state:[{t:this.shape_243}]},6).to({state:[{t:this.shape_253}]},3).to({state:[{t:this.shape_254}]},6).to({state:[{t:this.shape_255}]},6).to({state:[{t:this.shape_256}]},3).to({state:[{t:this.shape_257}]},3).to({state:[{t:this.shape_258}]},3).to({state:[{t:this.shape_259}]},3).to({state:[{t:this.shape_260}]},3).to({state:[{t:this.shape_243}]},3).to({state:[{t:this.shape_261}]},3).to({state:[{t:this.shape_262}]},6).to({state:[{t:this.shape_263}]},6).to({state:[{t:this.shape_264}]},6).to({state:[{t:this.shape_265}]},6).to({state:[{t:this.shape_266}]},6).to({state:[{t:this.shape_267}]},3).to({state:[{t:this.shape_268}]},3).to({state:[{t:this.shape_269}]},3).to({state:[{t:this.shape_270}]},3).to({state:[{t:this.shape_271}]},3).to({state:[{t:this.shape_272}]},3).to({state:[{t:this.shape_273}]},3).to({state:[{t:this.shape_274}]},3).to({state:[{t:this.shape_275}]},3).to({state:[{t:this.shape_276}]},3).to({state:[{t:this.shape_266}]},3).to({state:[{t:this.shape_277}]},3).to({state:[{t:this.shape_278}]},3).to({state:[{t:this.shape_279}]},3).to({state:[{t:this.shape_280}]},3).to({state:[{t:this.shape_281}]},3).to({state:[{t:this.shape_282}]},3).to({state:[{t:this.shape_283}]},3).to({state:[{t:this.shape_284}]},3).to({state:[{t:this.shape_285}]},3).to({state:[{t:this.shape_286}]},3).to({state:[{t:this.shape_266}]},3).to({state:[{t:this.shape_287}]},3).to({state:[{t:this.shape_288}]},3).to({state:[{t:this.shape_289}]},3).to({state:[{t:this.shape_290}]},3).to({state:[{t:this.shape_291}]},3).to({state:[{t:this.shape_292}]},3).to({state:[{t:this.shape_293}]},3).to({state:[{t:this.shape_294}]},3).to({state:[{t:this.shape_295}]},3).to({state:[{t:this.shape_296}]},3).to({state:[{t:this.shape_217}]},3).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).wait(1));

	// arrows
	this.instance_5 = new lib.SymArrowRchgTween8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1151.4,428,1,1,0,0,0,2.5,6);

	this.instance_6 = new lib.SymArrowRchgTween10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1197.4,430,1,1,0,0,0,2,7);

	this.instance_7 = new lib.SymArrowRchgTween11();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1173.4,432,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},6).to({state:[]},27).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},66).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},33).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},33).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},33).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},33).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},33).to({state:[]},33).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

	// fourcorns
	this.fourcorns = new lib.SymCorns();
	this.fourcorns.parent = this;
	this.fourcorns.setTransform(525,292,1,1,0,0,0,348,66);

	this.timeline.addTween(cjs.Tween.get(this.fourcorns).wait(302));

	// background
	this.instance_8 = new lib.SymBackground();
	this.instance_8.parent = this;
	this.instance_8.setTransform(612,288,1,1,0,0,0,612,288);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(610,288,1228.2,578.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;