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
		{src:"images/lagscenario_atlas_.png", id:"lagscenario_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"lagscenario_atlas_", frames: [[0,578,696,132],[1248,163,9,7],[1226,80,20,222],[1248,125,18,36],[1226,0,65,78],[0,0,1224,576],[1248,80,25,43],[1226,304,27,48]]}
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
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.handle = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pipe = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screenpng = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sprayingwaterpng = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.streambgd = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.watersquigglepng = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wellhead = function() {
	this.spriteSheet = ss["lagscenario_atlas_"];
	this.gotoAndStop(7);
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
	this.instance = new lib.handle();
	this.instance.parent = this;
	this.instance.setTransform(23,15);

	this.instance_1 = new lib.wellhead();
	this.instance_1.parent = this;

	this.instance_2 = new lib.pipe();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,263);


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



(lib.lagscenario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{GNEAROFF:0,GNEARON:1,GNEARONEND:159,GFAROFF:160,GFARON:161,GFARONEND:319});

	// timeline functions:
	this.frame_0 = function() {
		if (lsgame.curPumpStatus == lsgame.PumpStatus.PUMPOFF && lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    this.stop();
			drawTimeLagOff();
		}
	}
	this.frame_1 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    lsgame.TimeLag.tlPrevPoint = 0;
		}
	}
	this.frame_4 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(4);
		}
	}
	this.frame_8 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(8);
		}
	}
	this.frame_12 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(12);
		}
	}
	this.frame_16 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(16);
		}
	}
	this.frame_20 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(20);
		}
	}
	this.frame_24 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(24);
		}
	}
	this.frame_28 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(28);
		}
	}
	this.frame_32 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(32);
		}
	}
	this.frame_36 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(36);
		}
	}
	this.frame_40 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(40);
		}
	}
	this.frame_44 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(44);
		}
	}
	this.frame_48 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(48);
		}
	}
	this.frame_51 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(51);
		}
	}
	this.frame_54 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(54);
		}
	}
	this.frame_57 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(57);
		}
	}
	this.frame_60 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(60);
		}
	}
	this.frame_63 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(63);
		}
	}
	this.frame_66 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(66);
		}
	}
	this.frame_69 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(69);
		}
	}
	this.frame_72 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(72);
		}
	}
	this.frame_75 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(75);
		}
	}
	this.frame_78 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(78);
		}
	}
	this.frame_81 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(81);
		}
	}
	this.frame_84 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(84);
		}
	}
	this.frame_87 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(87);
		}
	}
	this.frame_90 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(90);
		}
	}
	this.frame_93 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(93);
		}
	}
	this.frame_96 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(96);
		}
	}
	this.frame_99 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(99);
		}
	}
	this.frame_102 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(102);
		}
	}
	this.frame_105 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(105);
		}
	}
	this.frame_108 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(108);
		}
	}
	this.frame_111 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(111);
		}
	}
	this.frame_115 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(115);
		}
	}
	this.frame_119 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(119);
		}
	}
	this.frame_123 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(123);
		}
	}
	this.frame_127 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(127);
			drawDottedLineN();
		}
	}
	this.frame_131 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(131);
		}
	}
	this.frame_135 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(135);
		}
	}
	this.frame_139 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(139);
		}
	}
	this.frame_143 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(143);
		}
	}
	this.frame_147 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(147);
		}
	}
	this.frame_151 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(151);
		}
	}
	this.frame_155 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(155);
		}
	}
	this.frame_158 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(158);
		}
	}
	this.frame_159 = function() {
		if (lsgame.curPumpStatus == lsgame.PumpStatus.PUMPON && lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(159);
		    this.stop();
		}
	}
	this.frame_160 = function() {
		if (lsgame.curPumpStatus == lsgame.PumpStatus.PUMPOFF && lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    this.stop();
		    drawTimeLagOff();
		    lsgame.TimeLag.tlPrevPoint = lsgame.TimeLag.TL_NX_POINTS;
		}
	}
	this.frame_161 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    lsgame.TimeLag.tlPrevPoint = lsgame.TimeLag.TL_NX_POINTS;
		}
	}
	this.frame_164 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(164);
		}
	}
	this.frame_168 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(168);
		}
	}
	this.frame_172 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(172);
		}
	}
	this.frame_176 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(176);
		}
	}
	this.frame_180 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(180);
		}
	}
	this.frame_184 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(184);
		}
	}
	this.frame_188 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(188);
		}
	}
	this.frame_192 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(192);
		}
	}
	this.frame_196 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(196);
		}
	}
	this.frame_200 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(200);
		}
	}
	this.frame_204 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(204);
		}
	}
	this.frame_208 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(208);
		}
	}
	this.frame_212 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(212);
		}
	}
	this.frame_216 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(216);
		}
	}
	this.frame_220 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(220);
		}
	}
	this.frame_224 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(224);
		}
	}
	this.frame_228 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(228);
		}
	}
	this.frame_232 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(232);
		}
	}
	this.frame_235 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(235);
		}
	}
	this.frame_238 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(238);
		}
	}
	this.frame_241 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(241);
		}
	}
	this.frame_244 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(244);
		}
	}
	this.frame_247 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(247);
		}
	}
	this.frame_250 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(250);
		}
	}
	this.frame_253 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(253);
		}
	}
	this.frame_256 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(256);
		}
	}
	this.frame_259 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(259);
		}
	}
	this.frame_262 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(262);
		}
	}
	this.frame_265 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(265);
		}
	}
	this.frame_268 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(268);
		}
	}
	this.frame_271 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(271);
		}
	}
	this.frame_274 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(274);
		}
	}
	this.frame_277 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(277);
		}
	}
	this.frame_280 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(280);
		}
	}
	this.frame_283 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(283);
		}
	}
	this.frame_286 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(286);
		}
	}
	this.frame_289 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(289);
		}
	}
	this.frame_292 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(292);
		}
	}
	this.frame_295 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(295);
		}
	}
	this.frame_298 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(298);
		}
	}
	this.frame_301 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(301);
		}
	}
	this.frame_304 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(304);
		}
	}
	this.frame_307 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(307);
		}
	}
	this.frame_310 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(310);
		}
	}
	this.frame_313 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(313);
		}
	}
	this.frame_316 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(316);
		}
	}
	this.frame_318 = function() {
		if (lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(318);
		}
	}
	this.frame_319 = function() {
		if (lsgame.curPumpStatus == lsgame.PumpStatus.PUMPON && lsgame.currentScene == lsgame.LagScenes.LAGEFFECT) {
		    drawTimeLag(319);
			drawDottedLineF();
		    this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(4).call(this.frame_8).wait(4).call(this.frame_12).wait(4).call(this.frame_16).wait(4).call(this.frame_20).wait(4).call(this.frame_24).wait(4).call(this.frame_28).wait(4).call(this.frame_32).wait(4).call(this.frame_36).wait(4).call(this.frame_40).wait(4).call(this.frame_44).wait(4).call(this.frame_48).wait(3).call(this.frame_51).wait(3).call(this.frame_54).wait(3).call(this.frame_57).wait(3).call(this.frame_60).wait(3).call(this.frame_63).wait(3).call(this.frame_66).wait(3).call(this.frame_69).wait(3).call(this.frame_72).wait(3).call(this.frame_75).wait(3).call(this.frame_78).wait(3).call(this.frame_81).wait(3).call(this.frame_84).wait(3).call(this.frame_87).wait(3).call(this.frame_90).wait(3).call(this.frame_93).wait(3).call(this.frame_96).wait(3).call(this.frame_99).wait(3).call(this.frame_102).wait(3).call(this.frame_105).wait(3).call(this.frame_108).wait(3).call(this.frame_111).wait(4).call(this.frame_115).wait(4).call(this.frame_119).wait(4).call(this.frame_123).wait(4).call(this.frame_127).wait(4).call(this.frame_131).wait(4).call(this.frame_135).wait(4).call(this.frame_139).wait(4).call(this.frame_143).wait(4).call(this.frame_147).wait(4).call(this.frame_151).wait(4).call(this.frame_155).wait(3).call(this.frame_158).wait(1).call(this.frame_159).wait(1).call(this.frame_160).wait(1).call(this.frame_161).wait(3).call(this.frame_164).wait(4).call(this.frame_168).wait(4).call(this.frame_172).wait(4).call(this.frame_176).wait(4).call(this.frame_180).wait(4).call(this.frame_184).wait(4).call(this.frame_188).wait(4).call(this.frame_192).wait(4).call(this.frame_196).wait(4).call(this.frame_200).wait(4).call(this.frame_204).wait(4).call(this.frame_208).wait(4).call(this.frame_212).wait(4).call(this.frame_216).wait(4).call(this.frame_220).wait(4).call(this.frame_224).wait(4).call(this.frame_228).wait(4).call(this.frame_232).wait(3).call(this.frame_235).wait(3).call(this.frame_238).wait(3).call(this.frame_241).wait(3).call(this.frame_244).wait(3).call(this.frame_247).wait(3).call(this.frame_250).wait(3).call(this.frame_253).wait(3).call(this.frame_256).wait(3).call(this.frame_259).wait(3).call(this.frame_262).wait(3).call(this.frame_265).wait(3).call(this.frame_268).wait(3).call(this.frame_271).wait(3).call(this.frame_274).wait(3).call(this.frame_277).wait(3).call(this.frame_280).wait(3).call(this.frame_283).wait(3).call(this.frame_286).wait(3).call(this.frame_289).wait(3).call(this.frame_292).wait(3).call(this.frame_295).wait(3).call(this.frame_298).wait(3).call(this.frame_301).wait(3).call(this.frame_304).wait(3).call(this.frame_307).wait(3).call(this.frame_310).wait(3).call(this.frame_313).wait(3).call(this.frame_316).wait(2).call(this.frame_318).wait(1).call(this.frame_319).wait(1));

	// origwt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EBfXAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIAAgGgHgEBeHAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBc3AF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBbnAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBaXAF6QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBZHAF6QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBX3AF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBWnAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBVXAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBUHAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIAAgGgHgEBS3AF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBRnAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBQXAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBPHAF6QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBN3AF6QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBMnAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBLXAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBKHAF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEBI3AF6QgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgJAAQgIAAgGgHgEBHnAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEBGXAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBFHAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEBD3AF6QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBCnAF6QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBBXAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEBAHAF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEA+3AF6QgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEA9nAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEA8XAF6QgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEA7HAF6QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEA53AF5QgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEA4nAF2QgGgGABgIQgBgJAGgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAGQgGAFgJAAQgIAAgGgFgEA3XAFxQgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEA2HAFvQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEA03AFqQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEAznAFoQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEAyXAFkQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEAxHAFgQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEAv3AFeQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgEAunAFbQgGgGABgJQgBgIAGgGQAGgGAJABQAIgBAFAGQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEAtXAFXQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEAsHAFVQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEAq3AFSQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEApnAFOQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEAoXAFMQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEAnHAFJQgGgGAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAGQgFAFgIAAQgJAAgGgFgEAl3AFFQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEAknAFDQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgEAjXAFAQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgEAiHAE8QgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEAg3AE7QgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAfnE4QgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAeXE0QgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgAdHEyQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgAb3ExQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgAanEvQgGgGAAgJQAAgIAGgGQAGgFAJAAQAIAAAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgAZXEsQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgAYHEqQgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgAW3EoQgGgFABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgAVnEnQgFgGAAgJQAAgIAFgGQAGgFAIAAQAJAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAUXElQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgATHEiQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgAR3EfQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgAQnEcQgGgGAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAGQgFAFgIAAQgJAAgGgFgAPXEWQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAOHETQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgAM3EOQgGgGABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAGQgFAFgIABQgJgBgGgFgALnEKQgGgGABgJQgBgIAGgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAKXEFQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAJHEBQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAH3D7QgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgAGnD4QgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgAFXDyQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAEHDvQgGgGAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAGQgFAFgIAAQgJAAgGgFgAC3DpQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgABnDmQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgAAXDhQgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAg3DdQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAiHDYQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgAjXDUQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgAknDOQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgAl3DLQgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgAnHDFQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAoXDCQgGgGABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAGQgFAFgIAAQgJAAgGgFgApnC9QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgAq2C2QgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgAsGCwQgFgGAAgJQAAgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgAtWCoQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgAumCgQgGgGAAgJQAAgIAGgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAJgGAGQgFAFgJAAQgIAAgGgFgAv2CYQgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgAxGCRQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgAyWCKQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgAzmCEQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgA02B9QgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgA2GB1QgFgFAAgIQAAgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgA3WBuQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgA4mBoQgFgGgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAGQgGAFgJAAQgIAAgGgFgA52BhQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgA7GBaQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgA8WBSQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgA9mBLQgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgA+2BFQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEggGAA9QgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEghWAA1QgFgFAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEgimAAtQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEgj2AAmQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEglGAAeQgFgFgBgIQABgJAFgGQAGgEAIABQAJgBAGAEQAFAGABAJQgBAIgFAFQgGAHgJgBQgIABgGgHgEgmWAAXQgGgGAAgJQAAgIAGgEQAGgGAJABQAIgBAFAGQAHAEAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEgnmAAQQgGgGAAgJQAAgGAGgGQAGgFAJgBQAIABAFAFQAHAGAAAGQAAAJgHAGQgFAFgIAAQgJAAgGgFgEgo2AAIQgGgGABgHQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAHgHAGQgFAFgIABQgJgBgGgFgEgqGAAAQgGgDABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHADQgFAHgIAAQgJAAgGgHgEgrWgAGQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAGgJAAQgIAAgGgGgEgsmgANQgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgEgt2gAUQgFgGgBgJQABgIAFgGQAGgGAIABQAJgBAGAGQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEgvGgAbQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgEgwWgAjQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAGQgGAFgJABQgIgBgGgFgEgxmgArQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEgy2gAzQgGgFAAgIQAAgJAGgGQAGgGAJAAQAIAAAFAGQAHAGAAAJQAAAIgHAFQgFAHgIAAQgJAAgGgHgEg0GgA6QgGgFABgIQgBgJAGgGQAGgGAJABQAIgBAFAGQAHAGgBAJQABAIgHAFQgFAHgIgBQgJABgGgHgEg1WgBBQgGgGABgJQgBgIAGgGQAGgGAJABQAIgBAFAGQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEg2mgBIQgGgGABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEg32gBQQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEg5GgBZQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEg6WgBgQgFgFgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEg7mgBoQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAFAGQAGAGABAJQgBAIgGAFQgFAHgJAAQgIAAgGgHgEg82gBwQgGgFAAgIQAAgJAGgGQAGgGAJABQAIgBAFAGQAHAGAAAJQAAAIgHAFQgFAHgIgBQgJABgGgHgEg+GgB3QgGgGAAgJQAAgIAGgGQAGgGAJABQAIgBAFAGQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEg/WgB/QgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAFAFQAHAGgBAIQABAJgHAGQgFAFgIAAQgJAAgGgFgEhAlgCIQgGgGABgJQgBgIAGgGQAGgFAJAAQAIAAAGAFQAFAGAAAIQAAAJgFAGQgGAFgIAAQgJAAgGgFgEhB0gCQQgFgGgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJAAQgIAAgGgFgEhDDgCZQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGABAIQgBAJgGAGQgFAFgJAAQgIAAgGgFgEhETgChQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhFjgCqQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhGzgCzQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhIDgC7QgGgFABgIQgBgJAGgGQAGgGAJAAQAIAAAFAGQAHAGgBAJQABAIgHAFQgFAHgIAAQgJAAgGgHgEhJTgDDQgGgFABgIQgBgJAGgGQAGgGAIAAQAJAAAGAGQAFAGAAAJQAAAIgFAFQgGAHgJAAQgIAAgGgHgEhKjgDLQgFgFAAgIQAAgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgEhLzgDTQgFgFgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGAAAJQAAAIgFAFQgGAHgJgBQgIABgGgHgEhNDgDaQgFgGgBgIQABgJAFgGQAGgGAIABQAJgBAGAGQAFAGABAJQgBAIgFAGQgGAFgJAAQgIAAgGgFgEhOTgDiQgFgGgBgJQABgIAFgGQAGgFAIAAQAJAAAGAFQAFAGABAIQgBAJgFAGQgGAFgJAAQgIAAgGgFgEhPjgDqQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIAAQgJAAgGgFgEhQzgDyQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhSDgD7QgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhTTgEEQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhUjgENQgGgFABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEhVzgEVQgFgGAAgJQAAgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAGQgGAFgJABQgIgBgGgFgEhXDgEfQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGgEhYTgEoQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAGAFQAFAGABAIQgBAJgFAFQgGAGgJABQgIgBgGgGgEhZjgExQgFgFgBgJQABgIAFgGQAGgFAIgBQAJABAFAFQAGAGABAIQgBAJgGAFQgFAGgJABQgIgBgGgGgEhazgE6QgGgFAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAFQgFAGgIABQgJgBgGgGgEhcDgFCQgGgGAAgJQAAgIAGgGQAGgFAJgBQAIABAFAFQAHAGAAAIQAAAJgHAGQgFAFgIABQgJgBgGgFgEhdTgFMQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhejgFVQgGgFABgJQgBgIAGgGQAGgFAJgBQAIABAFAFQAHAGgBAIQABAJgHAFQgFAGgIABQgJgBgGgGgEhfzgFeQgGgFABgJQgBgIAGgGQAGgFAIgBQAJABAGAFQAFAGAAAIQAAAJgFAFQgGAGgJABQgIgBgGgGg");
	this.shape.setTransform(611.8,346.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(320));

	// riverstage
	this.instance = new lib.SymRiverStage();
	this.instance.parent = this;
	this.instance.setTransform(1185,406,1,1,0,0,0,5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(320));

	// sprayingwater
	this.sprayingwater = new lib.SymSprayingWaterTween();
	this.sprayingwater.parent = this;
	this.sprayingwater.setTransform(767,283,1,1,0,0,0,24,18.5);
	this.sprayingwater._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sprayingwater).wait(5).to({_off:false},0).to({_off:true},155).wait(6).to({_off:false,x:167,y:212.5},0).wait(154));

	// stripes
	this.stripes = new lib.SymStripesTween();
	this.stripes.parent = this;
	this.stripes.setTransform(730.3,559,1.125,1,0,0,0,15,44.5);
	this.stripes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stripes).wait(1).to({_off:false},0).to({_off:true},159).wait(1).to({_off:false,x:128.3,y:494},0).wait(159));

	// screen
	this.screen5 = new lib.SymScreen();
	this.screen5.parent = this;
	this.screen5.setTransform(729,533,1,1,0,0,0,9,18);

	this.timeline.addTween(cjs.Tween.get(this.screen5).wait(160).to({x:127,y:468},0).wait(160));

	// wellwater
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKt+ICVAAIAAb9IiVAAg");
	this.shape_1.setTransform(729,463);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(101,156,197,0.6)").s().p("AhJN/IAA79ICTAAIAAb9g");
	this.shape_2.setTransform(729,463);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKuwICVAAIAAdhIiVAAg");
	this.shape_3.setTransform(729,458);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(101,156,197,0.6)").s().p("AhJOxIAA9gICTAAIAAdgg");
	this.shape_4.setTransform(729,458);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKviICVAAIAAfFIiVAAg");
	this.shape_5.setTransform(729,453);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPjIAA/EICTAAIAAfEg");
	this.shape_6.setTransform(729,453);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwUICVAAMAAAAgpIiVAAg");
	this.shape_7.setTransform(729,448);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQVMAAAggoICTAAMAAAAgog");
	this.shape_8.setTransform(729,448);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKwtICVAAMAAAAhbIiVAAg");
	this.shape_9.setTransform(729,445.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(101,156,197,0.6)").s().p("AhJQuMAAAghbICTAAMAAAAhbg");
	this.shape_10.setTransform(729,445.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKKUIAA0nICVAA");
	this.shape_11.setTransform(127,390.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(101,156,197,0.6)").s().p("AhJM2IAAlFIAA0mICTAAIAAZrg");
	this.shape_12.setTransform(127,406.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKNhIAA7BICVAAIAAbB");
	this.shape_13.setTransform(127,401);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(101,156,197,0.6)").s().p("AhJNoIAAgPIAA7AICTAAIAAbAIAAAPg");
	this.shape_14.setTransform(127,401.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKucICVAAIAAcvIAAAKIiVAAIAAgKg");
	this.shape_15.setTransform(127,397);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(101,156,197,0.6)").s().p("AhJOYIAA8vICTAAIAAcvg");
	this.shape_16.setTransform(127,396.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AAAPFIAA+J");
	this.shape_17.setTransform(119.5,391);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(101,156,197,0.6)").s().p("AhJPOIAAgTIAA+IIAAAAICTAAIAAebg");
	this.shape_18.setTransform(127,392);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(101,156,197,0.6)").ss(1,1,1).p("AhKv7ICVAAIAAf3IiVAAg");
	this.shape_19.setTransform(127,386.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(101,156,197,0.6)").s().p("AhJP8IAA/3ICTAAIAAf3g");
	this.shape_20.setTransform(127,386.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10,p:{x:729,y:445.5}},{t:this.shape_9,p:{x:729,y:445.5}}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},156).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_10,p:{x:127,y:381.5}},{t:this.shape_9,p:{x:127,y:381.5}}]},1).wait(155));

	// well
	this.well5 = new lib.SymWellL();
	this.well5.parent = this;
	this.well5.setTransform(732,385.5,1,1,0,0,0,16,95.5);

	this.timeline.addTween(cjs.Tween.get(this.well5).wait(160).to({x:130,y:321.5},0).wait(160));

	// riverflow2
	this.squiggle2 = new lib.SymSquiggle2Tween();
	this.squiggle2.parent = this;
	this.squiggle2.setTransform(914.3,231,1,1,0,0,0,68.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.squiggle2).wait(320));

	// rivertv
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E61E8").s().p("Ak3BhQkwigifhGImuiXMAlpAAAIAAIuIvkALQjugykaiKg");
	this.shape_21.setTransform(1104.8,411.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E61E8").s().p("AAQDlQiWguinhNIkAh+Qhqg1hVgoQirhDi8hFIgxgRMAilAADIBiAAQADALgDAUQgCAUACAKIABHJIgIACIhbABItXAJQhcgOhegYg");
	this.shape_22.setTransform(1108.4,413.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E61E8").s().p("AgDDdQiZguimhNIkAh+Qhqg1hWgoQiTg6jZhPMAjcAAKQADAKgDAJQgDAJADAKIAAHJIgHACIhcABItXAJQhcgOhbgYg");
	this.shape_23.setTransform(1110.6,414);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E61E8").s().p("AAPDiQiPgoijhHQiCg9h3g5Qh1g7hBgfQi8hRiXg7IgvgQIBJADIf7ABIBgAAQAGAIgDATQgEATAGAHIgBDQQgCCJABBTIgFAEIheABIstAJQhcgJhYgPg");
	this.shape_24.setTransform(1114.8,414.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E61E8").s().p("AgGDcQiSgoiihHQiDg9h2g5Qh1g7hBgfQjrhmhugqMAiCAAAQAGAHgHAPQgHARAGAGIgBDQQgCCJABBTIgFAEIheABIstAJQhcgJhWgPg");
	this.shape_25.setTransform(1117.1,415.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E61E8").s().p("AAODfQiQglichDQh6g2h8g9QhngzhLgkQi7hViOg4IgugRIA9AFIQmABIOxACIBgAAQAJAHgCCrIgEEaIgEAFIhfABIsZAJQhcgHhUgMg");
	this.shape_26.setTransform(1116.3,415.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E61E8").s().p("AgKDXQiSglichCQh6g3h8g6Qhng2hLgkQi7hViOg4MAhNgABQAJAGgGCoQgHDsAAAqIgEAFIhfABIsZAJQhcgHhSgMg");
	this.shape_27.setTransform(1118.9,416.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E61E8").s().p("AgPDSQiSglichCQh6g3h8g6Qhng2hLgkQiThDilhBMAgyAAKQAJAGgBCeIgCEMIgEAFIhfABIsZAJQhcgHhSgMg");
	this.shape_28.setTransform(1119.4,417);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E61E8").s().p("AgUDNQiSglichCQh6g3h8g6Qhng2hLgkQhNgjhVghIiMg2MAgoAAKQAJAGgBCZIgCEHIgEAFIhfABIsZAJQhcgHhSgMg");
	this.shape_29.setTransform(1119.9,417.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E61E8").s().p("Ag8C+QiSglichCQh6g3h8g6Qhng2hLgkQhPgkgrgRIhkgnIfYAKQAJAHgBCJIgCD4IgEAFIhfABIsZAJQhcgHhSgMg");
	this.shape_30.setTransform(1123.9,419);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E61E8").s().p("AhfCvQiSglichCQh6g3h8g6Qhng2hLgkQhJghgOgFIhBgYIeSAAQAJAGgBCAIgCDuIgEAFIhfABIsZAJQhagHhUgMg");
	this.shape_31.setTransform(1127.4,420.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E61E8").s().p("Ah9ClQiSglichCQh6g3h8g6Qhng2hLgkQADgEhfgmIdWAAQAJAGgBB2IgCDkIgEAFIhfABIsZAJQhagHhUgMg");
	this.shape_32.setTransform(1130.4,421.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E61E8").s().p("AiZCbQiSglichCQh6g1h8g8Qh2g+hmgoIcugKQAIAGgFBsQgHCgAAA6IgEAFIhfABIsZAJQhagHhUgMg");
	this.shape_33.setTransform(1133.2,422.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E61E8").s().p("AluBNQkxigiehGQiwg8iQgyMAj7AAAIAAIFIvkAKQjugxkaiKg");
	this.shape_34.setTransform(1110.3,413.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},48).to({state:[{t:this.shape_23}]},6).to({state:[{t:this.shape_24}]},3).to({state:[{t:this.shape_25}]},6).to({state:[{t:this.shape_26}]},3).to({state:[{t:this.shape_27}]},6).to({state:[{t:this.shape_28}]},3).to({state:[{t:this.shape_29}]},6).to({state:[{t:this.shape_30}]},3).to({state:[{t:this.shape_31}]},9).to({state:[{t:this.shape_32}]},9).to({state:[{t:this.shape_33}]},9).to({state:[{t:this.shape_21}]},49).to({state:[{t:this.shape_22}]},72).to({state:[{t:this.shape_34}]},9).to({state:[{t:this.shape_23}]},9).to({state:[{t:this.shape_24}]},9).to({state:[{t:this.shape_25}]},9).to({state:[{t:this.shape_26}]},9).to({state:[{t:this.shape_27}]},9).to({state:[{t:this.shape_27}]},9).wait(25));

	// riverflow1
	this.squiggle1_2 = new lib.SymSquiggle1Tween();
	this.squiggle1_2.parent = this;
	this.squiggle1_2.setTransform(1086,328.1,1,1,0,0,0,23.2,48.9);

	this.squiggle1_1 = new lib.SymSquiggle1Tween();
	this.squiggle1_1.parent = this;
	this.squiggle1_1.setTransform(1028.7,305.2,1,1,0,0,0,23.2,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.squiggle1_1},{t:this.squiggle1_2}]}).to({state:[{t:this.squiggle1_1},{t:this.squiggle1_2}]},160).wait(160));

	// river
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B868E").s().p("AkgRiQgBAAAuhCQAyhPAPhBQAXheAVhhIAQhPQAFgPAEgnQAIhOgHh2QgDhJgPg0IgqhzQgmhEgZgWIgRgKIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgYQgJghgFghQgFgpAMg7IANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgQANQgfAbgJAUQgGAQgLA2IgLAyIAcCWIBGBkIBOAjQAxAWBdAhICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAaQBGANAvAKIBPAQQBhAYBfAkQA4AWBbArIBSAnIA1AgIBrBEQBdA7BNA7IB4BGICgCCQAhAcBNBIIDACTQBMA9AWAWQBBBBBeBFQAvAjAiAVIFoEOIgCA5g");
	this.shape_35.setTransform(1014.1,272);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B868E").s().p("AhVR1QhaABgYgGIAZhFQASgvAHgMQAkhPAKhEIANhUIADgaIAMhUIAKhNIABgDQADgSACgkQACgugDg2QgDgsgHgxQgDgbgGgZQgIgmgNgeQgKgOgqhcIgDgEQgjgwgbgYIgHgGIithfIhlglIj5g+Iivg4IjAgpIlnhZIlAhuIgEgCQgYgMgigWIgDgCQhIgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgCQgGgqAMg6IAAAAIAOgyQADgQAGgTQAOgpARgYQARgZAXgUIAUgPIABAAQAOgBALgCQADAAALADIABAAQAWAGAvgGQgOAJgQAOQggAagIAVIAAABQgGAQgMA0IAAABIgKAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEBAeIAEABIEtAyIC1ATIAFABQBmAKCJAZIAGABQBCAMAtALIAGABIBIAQIALADQBcAYBZAiIARAHQA1AVBOAjIBTAmIADACIAyAeIAEACIBnBCIAEADQBZA5BPA4IAHAEIBvBEIACACIApAiIB1BfIABABQAhAcBMBGIADACIC0CMIAIAGQBEA3AeAeIAEAEQA/A+BbBEIAGAFQArAgAgAUIAFAEIFgENIADBHIhcAAI/hAHQgJgDhWABg");
	this.shape_36.setTransform(1013.9,273.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B868E").s().p("APaR8QxngCgbgHQAEgMAYg0QAUgtACgLQADgYARg4QARg6ADgWIAFgoIAFgoQAQhZAEgfQADgVAHhtQACg4gCgsQgDgjgHg3QgCgKgIgUQgKgVgBgHQgIgmgNgeQgKgOgrhcIgDgEQgigwgbgYIgIgGIithfIhkglIj6g+Iiug4IjAgpIlohZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAAAIANgyQADgQAHgTQANgpARgYQASgZAXgUIATgPIABAAQAOgBAMgCQADAAAKADIABAAQAXAGAugGQgOAJgQAOQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBIAQIALADQBcAYBZAiIAQAHQA2AVBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA5BPA4IAHAEIBvBEIACACIApAiIB0BfIABABQAiAcBMBGIADACICzCMIAIAGQBFA3AeAeIAEAEQA/A+BaBEIAHAFQArAgAfAUIAFAEIFREOIAABaIkYABItMgCg");
	this.shape_37.setTransform(1013,274);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B868E").s().p("AftSHI++AAQgIgIhBADIhBAFQgBgFAWhBQAWhFACgVQADgtAHg/QAIhDABgRIAHhVIAAgaIAEhWIAGhOIAAgDIADg1QgBgxgGgyQgGgsgKgvQgGgbgJgZQgKgjgRgeQgSgXguhJIgDgEQglgpgggYIgJgEIizhTIhlgjIjeg4IjKg9IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgCQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgPANIgBAAQgfAbgJAUIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGQBaIEDAeIExAzIC1ATIAFABQBmALCJAYIAGABIBvAXIAGABIBIASIALADQBcAaBZAhIAQAHQA3AVBMAiIBUAkIAEACIAyAeIADACIBnBCIAEADICrBuIAHAEIBtBHIACACIApAiIB1BgIABABQAhAbBMBGIADACICzCNIAHAGQA9AxAnAmIADADQA/A/BZBEIAHAFQArAgAfAVIAFAEIFfEPIADBpg");
	this.shape_38.setTransform(1013.7,275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B868E").s().p("AfwSRI+tgEIgrABQgoABgbgHIAniIQgBgIAEgSQADgbACgRQAEggADhsIADh6IgBgsIAAhFIADhNIAAgDIABg2QgCgygHgwQgHgtgLguQgHgagJgZQgNghgSgeQgXgbgvhBIgDgEQgngkgigXIgJgEIi2hNIhlgjIjeg4IjKg8IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgqhAIgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgEggIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQIAAAAQAOAAAMgCQADgBALADIAAAAQAXAHAvgHQgOAKgQANIAAAAQgfAagJAVIAAABQgGAQgMA0IAAABIgKAyIAAAAIAcCWIAAABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIGPBaIEDAeIExAzIC1ATIAFABQBmAKCJAZIAGABQBBAMAuALIAGABIBHASIALADQBcAbBZAiIAQAGICEA2IBUAkIAEACIAyAeIADACIBnBCIAEACQBZA7BTAzIAHAEIBtBIIACACIAoAiIB1BgIABABQAgAbBNBFIADADICzCNIAHAGQA5AuAqAqIAEADQA/A/BYBEIAHAFQArAgAfAWIAFADIFdERIABB6g");
	this.shape_39.setTransform(1013.4,276);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B868E").s().p("AQxSbQwPgCgcgIIAUiCQgFgyAFgoQAEggADhSIADhgIgBhEIABhcQAAgPgMhnIgPh9QgHgsgLguQgHgagKgZQgMgigTgeQgWgbgvhAIgEgEQgmgkgigXIgKgFIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIALADQBcAaBYAiIARAGICDA2IBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTAyIAHAEIBsBJIACACIAoAhIB1BgIABABQAhAcBMBFIADADICzCMIAHAGQA6AvAqApIADAEQA/A+BZBEIAGAFQArAhAgAWIAEADIFeEQIgICPIlVABIq0gBg");
	this.shape_40.setTransform(1013.4,277);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B868E").s().p("AQ6SgQwKgCgcgIIAUiMQgBgKAFiCIAGiWIgBhJIABhhQAAgOgNhhIgRh3QgDgSgJghIgNg0QgHgagKgZQgMgigTgeQgWgbgvhAIgEgEQgmgjgigYIgKgFIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIALADQBcAaBYAiIARAGICDA2IBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTAyIAHAEIBsBJIACACIAoAhIB1BgIABABQAhAcBMBFIADADICzCMIAHAGQA6AvAqApIADAEQA/A+BZBEIAGAFQArAhAgAWIAEADIFWETIAACWIlXABIqtgBg");
	this.shape_41.setTransform(1013,277.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B868E").s().p("ARiSvQvngCgcgIIAKhkQgFgyAFgoQAEgegHhKQgIhOABgIQgViHABgjQAAgOgShrIgWiBQgDgSgTg/IgXhSQgHgagKgZQgMgigTgeQgWgbgvhAIgEgEQgRgQgggYQgdgWgEgCIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIBLAXQBPAaAlAOIA5AXIBbAlIBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTAyIBzBNIACACIAoAhIB1BgIABABQAhAcBMBFIADADIC6CSQA6AvAqApIADAEQA/A+BZBEIAGAFQAdAWBIA9IFAD6IAKC0IlMABIqVgBg");
	this.shape_42.setTransform(1013.5,279);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B868E").s().p("AClS3QgFiMgFgoIgTh4QgMhTABgRQgaiSgEgiQgHgzgLhFQgPhkgHgUIg6iqIgag8QgUgsgJgOQgWgbgvhBIgEgEQgRgOgggZQgdgXgEgBIi2hNIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIBLAYQBPAaAlAOIA5AWIBbAmIBVAkIADACIAyAeIAEACIBnBCIAEACQBZA7BTA1IBzBKIACACIAoAiIB1BgIABABQAhAbBMBFIADADIC6CTQA6AuAqAqIADADQAqAqB/BrQAcAVB6BjIEODcIAAC0QncADniABIn0ABQnZAAgTgFg");
	this.shape_43.setTransform(1013.5,280.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B868E").s().p("ADhTCQgMiMgIgoIgVh2IgTh6QgViCgJgoQgFgUgchkIgliCIgghaIgchQQgFgPgYgtIgig6QgWgbgvg/IgEgDQgRgQgggaQgdgWgEgCIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIBLAXQBPAaAlAOIA5AXIBbAlIBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTA0IBzBLIACACIAoAhIB1BgIABABQAhAcBMBFIADADIC6CSQA6AvAqApIADAEQAqApB1BrQAcAWCEBsIEEDSIAKDIIufADIm5AAQn0AAgWgDg");
	this.shape_44.setTransform(1013.5,281.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B868E").s().p("AETTRIgoi+Igah7QgVhkgDgbQgpiMgJgoQgFgUgchkIgliCIgghaIgchQQgFgPgYgtIgig6QgWgbgvg+IgEgEQgRgQgggaQgdgWgEgCIi2hNIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIBLAXQBPAaAlAOIA5AXIBbAlIBVAlIADACIAyAeIAEACIBnBCIAEACQBZA7BTA0IBzBLIACACIAoAhIB1BgIABABQAhAcBMBFIADADIC6CSQA6AvAqApIADAEQAqApB1BrQAcAWCOB2IEEDSIAADcIuGADImtAAQnnAAgWgDg");
	this.shape_45.setTransform(1013.5,282.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B868E").s().p("AiZR2IAWhAQAQgsACgMQAEgcAMg4QALg1ADgXQAThjABgLIAKhQIAKhaQABgIAAgwQAAgrgBgfQgFhKgFgkQgCgMgRgyQgPgtgIgTQgKgOgrhcIgDgEQgigwgbgYIi1hlIhkglIj6g+Iiug4IjAgpIlohZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAAAIANgyQADgQAHgTQANgpARgYQASgZAXgUIATgPIABAAQAOgBAMgCQADAAAKADIABAAQAXAGAugGQgOAJgQAOQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBIAQIALADQBcAYBZAiIAQAHQA2AVBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA5BPA4IAHAEIBvBEIACACIApAiIB0BfIABABQAiAcBMBGIADACICzCMIAIAGQBFA3AeAeIAEAEQA/A+BaBEIAHAFQArAgAfAUIAFAEIFbEOIAABQQotADoyABIpAABQoqAAgTgFg");
	this.shape_46.setTransform(1013.5,273.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[{t:this.shape_36}]},48).to({state:[{t:this.shape_37}]},6).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},6).to({state:[{t:this.shape_40}]},9).to({state:[{t:this.shape_41}]},9).to({state:[{t:this.shape_42}]},3).to({state:[{t:this.shape_43}]},9).to({state:[{t:this.shape_44}]},9).to({state:[{t:this.shape_45}]},9).to({state:[{t:this.shape_35}]},49).to({state:[{t:this.shape_36}]},72).to({state:[{t:this.shape_46}]},9).to({state:[{t:this.shape_37}]},9).to({state:[{t:this.shape_38}]},9).to({state:[{t:this.shape_39}]},9).to({state:[{t:this.shape_39}]},9).to({state:[{t:this.shape_40}]},9).to({state:[{t:this.shape_40}]},9).wait(25));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.WaterWave1_1,p:{y:415.3}}]}).to({state:[{t:this.WaterWave1_1_1},{t:this.WaterWave2_1}]},48).to({state:[{t:this.WaterWave1_1,p:{y:415.3}}]},112).to({state:[{t:this.WaterWave1_1,p:{y:450.3}}]},72).wait(88));

	// wtsymbol
	this.watertableicon = new lib.SymWaterTable();
	this.watertableicon.parent = this;
	this.watertableicon.setTransform(526.5,354.1,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get(this.watertableicon).wait(40).to({y:356.5},0).wait(8).to({y:358.6},0).wait(9).to({y:359.6},0).wait(9).to({y:361.6},0).wait(9).to({y:366.6},0).wait(9).to({y:367.6},0).wait(9).to({y:368.6},0).wait(9).to({y:370.6},0).wait(6).to({y:372.6},0).wait(3).to({y:376.6},0).wait(49).to({y:354},0).wait(16).to({y:356},0).wait(20).to({y:358},0).wait(36).to({y:359},0).wait(3).to({y:360},0).wait(3).to({y:363},0).wait(6).to({y:364},0).wait(12).to({y:366},0).wait(12).to({y:367},0).wait(6).to({y:368},0).wait(9).to({y:369},0).wait(9).to({y:370},0).wait(28));

	// watertableL
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYIQYBGIM8AiIAGf9Mg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_47.setTransform(363.5,444.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYIQYBGIM4BHIAKfYMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_48.setTransform(363.5,444.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYIQYBGIM4B5IAKemMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_49.setTransform(363.5,444.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYIQYBGIM4CNIAKeSMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_50.setTransform(363.5,444.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYQQKBbASAAIM0CCIAKeIMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_51.setTransform(363.5,444.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYQQKBbASAAIM0CWIAKd0Mg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_52.setTransform(363.5,444.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYQP2BvASAAINICWIAKdgMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_53.setTransform(363.5,444.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYQP2BvASAAINICqIAKdMMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_54.setTransform(363.5,444.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYQP2BvASAAID/AtIEnA3IEiBkIAKcuMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_55.setTransform(363.5,444.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5FAU5MAAAgp2QC2AHEAAdQDrAcDKAjIWNCWMAw6AEYQP2BvASAAID/AtIEnA3IEiCCIAKcQMg3KAAFIr+AAQ5nAA1dgFg");
	this.shape_56.setTransform(363.5,444.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAU5MAAAgp2UACfAAVAoCAEKUAn0AEIAB3AAJQBVAGFKAhQFNAhA0AIQAaAED2AXQEJAeCOArQCMAqCRA9QCRA8ABARIAAbeMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_57.setTransform(364,444.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAU5MAAAgp2UACfAAVAoCAEKUAn0AEIAB3AAJQBVAGFKAhQFNAhA0AIQAaAED2AXQEJAeCOArQCEAnCZBKQCRBFABASIAAbKMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_58.setTransform(364,444.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASc3C2IciC0QB9AUKgBIQKFBFCBAJQBPAFFfAnQFXAlA5AJIDyAlQDoAnCSAsQCIApCjBIQCgBGABARIAAaYMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_59.setTransform(364,445.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASc3C2IciC0QB9AUKgBIQKFBFCBAJQBPAFFfAnQFXAlA5AJQBzARB/AZQDnAsCTAsQCEAoCnBOQCgBKABASIAAaEMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_60.setTransform(364,445.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASc3C2IciC0QB9AUKgBIQKFBFCBAJQBJAFFlAsQFKAoBGALQBzARB/AZQDnAsCTAsQCEAoCnBOQCgBKABASIAAZ6Mg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_61.setTransform(364,445.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBWAOKsA8QKlA7BdARQA/ALF0AqIGVAvQBzARB/AZQDnAsCTAsQCCAnCpBUQCgBOABATIAAZmMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_62.setTransform(364,445.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBWAOKsA8QKlA7BdARQBAALFzAvIGVA0QBzARB/AZQDnAsCTAsQCEAoCnBOQCgBKABASIAAZmMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_63.setTransform(364,445.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBqARLIBHILSBIQAnAGMhBoIDyAlQDoAnCSAsQCEAoCnBOQCgBKABASIAAZmMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_64.setTransform(364,445.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBVAOKpBGQKeBFBeARQBAALF3AvIGbA0QGlBADaBCQCDAnCfBPQCWBJABATIAAZSMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_65.setTransform(364,445.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBVAOKpBGQKeBFBeARQBAALF3AvIGbA0QBAAKC8AqQDtA1CWAtQCJApCZBDQCWBBABARIAAZSMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_66.setTransform(364,445.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCHASdBDFIctDDQBVAOKpBGQKeBFBeARQCSAaK2BoQChAYBhASQD1AsCSAsQCDAnCfBPQCWBJABATIAAY+Mg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_67.setTransform(364,445.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCGASdIDUIcxDSQBUAOKgBLQKUBKBdARQBBALGBAvIGkA0QBdAOCgAgQDwAxCTAtQCHAoCWBEQCRBBABARIAAY0Mg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_68.setTransform(364,445.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCGASdIDUIcxDSQBUAOKgBLQKUBKBdARQBBALGBAvIGkA0QBdAOCgAgQDwAxCTAtQCAAmCdBVQCRBNABAUIAAYWMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_69.setTransform(364,445.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(101,156,197,0.6)").s().p("Eg5AAUqQAAjtAEw+QAGxAgBjtQCGASdIDUIcxDSQBUAOKgBLQKUBKBdARQBBALGBAvIGkA0QBDAKC6ApQDuA1CVAuQB+AmCfBfQCRBWABAVIAAX4Mg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_70.setTransform(364,445.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBUAOKRBLQKFBKBdARQBCALGKA0IGvA5QC5AcApAIQDXAqCKA+QB9A3CPBgQCEBaABATIAKXQMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_71.setTransform(363.5,446.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBUAOKRBLQKFBKBdARQBCALGKA0IGvA5QFvA4DUBeQB/A3CNBbQCEBVABATIAKXQMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_72.setTransform(363.5,446.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBUAOKRBLQKFBKBdARQBuATMNBvQC5AcApAIQDXAqCKA+QB/A3CNBbQCEBVABATIAKXQMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_73.setTransform(363.5,446.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBSANKTBRQKFBPBdARQBuATMgBvQCOAVBHAPQDGAqCLA+QCDA5COBUQCJBSABARIAKXQMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_74.setTransform(363.5,446.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBSANKTBRQKFBPBdARQBuATMgBvQBgAOBvAbQDBAvCMA+QB/A4CXBfQCOBbABASIAKWyMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_75.setTransform(363.5,446.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCFASd/DZIdoDXQBSANKTBRQKFBPBdARQBuATMgB5QBaANBxAcQC7AuCMA/QB+A3CdBlQCTBfABATIAKWeMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_76.setTransform(363.5,446.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCEARd2DkIddDhQBUANKMBRQKABPBfARQBtATM0B5QBaANBxAcQC6AuCOA/QB/A4CgBkQCYBgABASIAKWKMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_77.setTransform(363.5,446.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQCEARd2DkIddDhQBSANKOBWQKABUBfARQBKANGVBBQGCA+BAAKIDLAfQC9AlCLA+QB/A4CgBkQCYBgABASIAKWKMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_78.setTransform(363.5,446.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtQB+ARd2DzIdZDwQBeAPKbBOQKPBNA3AKQBtATM+B5IDLAfQC9AlCLA+QB/A4CgBkQCYBgABASIAKWKMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_79.setTransform(363.5,446.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(101,156,197,0.6)").s().p("Eg47AUlQAAjtgGw5QgEw7AAjtMA9DAH+QBSANKUBWQKDBUBgARQBuATM9B5QBcAOBwAWQC9AnCTAtQB7AlCiB5QCRBsABAYIAKViMg3FAAFIr8AAQ5kAA1dgFg");
	this.shape_80.setTransform(363.5,446.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(101,156,197,0.6)").s().p("Ap6U3QAAjtgFxKQgFxJAAjtQDFAIEcAiQDSAaC3AgIGfArMgABAneg");
	this.shape_81.setTransform(62.5,443.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(101,156,197,0.6)").s().p("Ap5U3QAAjtgGxKQgExJAAjtQDEAIEcAiQDTAaC2AgIGVB5MAAJAmQg");
	this.shape_82.setTransform(62.5,443.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(101,156,197,0.6)").s().p("Ap5U3QAAjtgGxKQgExJAAjtQDEAIEcAiQBQAKCFAiQCXAlAsAIIGGB3MAAJAlzg");
	this.shape_83.setTransform(62.5,443.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(101,156,197,0.6)").s().p("Ap5U3QAAjtgGxKQgExJAAjtQBPADCVAaQC/AiA8AHQBVALB7AYIC/AkIGQBtMAAJAlzg");
	this.shape_84.setTransform(62.5,443.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOAeIE1AzIEYBGICBBQMgAKAlAg");
	this.shape_85.setTransform(63.5,444.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOAeIE1AzIEOBaICLBQMgAKAksg");
	this.shape_86.setTransform(63.5,444.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOAzIE/A7IEEA9ICLBQMgAKAksg");
	this.shape_87.setTransform(63.5,444.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(101,156,197,0.6)").s().p("AqIUtMAAAgpZIErAyIEOAzIE1BFIEEBGICfBuMgAUAj7g");
	this.shape_88.setTransform(64,444.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOA9IErBFIEiBGICBB5MgAKAjmg");
	this.shape_89.setTransform(63.5,444.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOA9IErBFIEiBlICBBuMgAKAjSg");
	this.shape_90.setTransform(63.5,444.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOA9IErBFIEYCDICLBtMgAKAi1g");
	this.shape_91.setTransform(63.5,444.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOA9IEgBQIEjB4ICLBtMgAKAi1g");
	this.shape_92.setTransform(63.5,444.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEOA9IEgBQIEjCLICLB4MgAKAiXg");
	this.shape_93.setTransform(63.5,444.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEEBHIEqBaIEjB3ICLB4MgAKAiXg");
	this.shape_94.setTransform(63.5,444.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErAyIEEBHIEqBaIEZCLICVCDMgAKAh4g");
	this.shape_95.setTransform(63.5,444.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIErA8IEEBQIEgBaIEjCNICVBuMgAKAh4g");
	this.shape_96.setTransform(63.5,444.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUtMAAAgpZIEhBGIEOBGIEgBaIEjCXICVB3MgAKAhlg");
	this.shape_97.setTransform(63.5,444.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UjMAAAgpEIErA7IEOBGIErBkIEOCNICLCBMAAAAhRg");
	this.shape_98.setTransform(63,445.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUjMAAAgpEIErBFIEOBlIErB4IEOCLICVCWMgAKAgBg");
	this.shape_99.setTransform(63.5,445.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UZMAAAgowIErBGIEOBkIErCVIEOC0ICCCqIAJeTg");
	this.shape_100.setTransform(63,446.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UZMAAAgowIErBGIEOBkIErCVIEYD6ICBDIIAAcvg");
	this.shape_101.setTransform(63,446.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UZMAAAgowIErBGIEOBkIECC0IEYEEICqEYIAAa2g");
	this.shape_102.setTransform(63,446.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUZMAAAgowIErBGIEOCLIEMC+IEtE3ICVEEIgKZmg");
	this.shape_103.setTransform(63.5,446.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUZMAAAgowIEXBaIEYCLIEWCqIEtE3ICVEEIgKZmg");
	this.shape_104.setTransform(63.5,446.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(101,156,197,0.6)").s().p("AqDUZMAAAgowIEXBaIEYCLIEDDTIE1E1ICgDdIgKZmg");
	this.shape_105.setTransform(63.5,446.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+UAQAAkogGyIIgExPIEOA8IErCNIEDC+IE1E1ICgDdIgKZmg");
	this.shape_106.setTransform(63,449);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(101,156,197,0.6)").s().p("Ap5UAQAAkogGyIIgExPIEOA8IErCNIEDC+IE1E1ICWDxIAAZSg");
	this.shape_107.setTransform(62.5,449);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(101,156,197,0.6)").s().p("Ap5UAQAAkogGyIIgExPIEYBlIErCLID5CXIE1E1ICWDxIAAZSg");
	this.shape_108.setTransform(62.5,449);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+T2MAAAgnqIEOBaIErCLID5CXIE1ErICWEOIAAY1g");
	this.shape_109.setTransform(63,450);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+T2MAAAgnqIEOBaIErCLID5CXIE1ErICWEtIAAYWg");
	this.shape_110.setTransform(63,450);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+T2MAAAgnqIEOBuIErCBID5C0IE1EEICWEtIAAYWg");
	this.shape_111.setTransform(63,450);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+T2MAAAgnqIEOBuIEhCLIEDCgIErEYICgFBIAAX4g");
	this.shape_112.setTransform(63,450);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+TsQAAkoAEx0IAFw6IEFBjIEhCCIEDCgIErEYICgFBIAAX4g");
	this.shape_113.setTransform(63,451);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+TsQAAkoAEx0IAFw6IEFBjIEhCCIEDCgIEhEtICqFJIAAXbg");
	this.shape_114.setTransform(63,451);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+TsQAAkoAEx0IAFw6IEFBjIEXCNIENCpIEhEjICqE/IAAXbg");
	this.shape_115.setTransform(63,451);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+TsQAAkoAEx0IAFw6IEFBjIEXCNIENCpIEhEjICqFTIAAXHg");
	this.shape_116.setTransform(63,451);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(101,156,197,0.6)").s().p("Ap+TsQAAkoAEx0IAFw6IEFBtIEXCNIENCqIEhEYICqFTIAAXHg");
	this.shape_117.setTransform(63,451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47}]}).to({state:[{t:this.shape_48}]},4).to({state:[{t:this.shape_49}]},4).to({state:[{t:this.shape_50}]},4).to({state:[{t:this.shape_51}]},4).to({state:[{t:this.shape_52}]},4).to({state:[{t:this.shape_53}]},4).to({state:[{t:this.shape_54}]},4).to({state:[{t:this.shape_55}]},4).to({state:[{t:this.shape_56}]},4).to({state:[{t:this.shape_57}]},4).to({state:[{t:this.shape_58}]},4).to({state:[{t:this.shape_59}]},4).to({state:[{t:this.shape_60}]},3).to({state:[{t:this.shape_61}]},3).to({state:[{t:this.shape_62}]},3).to({state:[{t:this.shape_63}]},3).to({state:[{t:this.shape_64}]},3).to({state:[{t:this.shape_65}]},3).to({state:[{t:this.shape_66}]},3).to({state:[{t:this.shape_67}]},3).to({state:[{t:this.shape_68}]},3).to({state:[{t:this.shape_69}]},3).to({state:[{t:this.shape_70}]},3).to({state:[{t:this.shape_71}]},3).to({state:[{t:this.shape_72}]},3).to({state:[{t:this.shape_73}]},3).to({state:[{t:this.shape_74}]},3).to({state:[{t:this.shape_75}]},3).to({state:[{t:this.shape_76}]},3).to({state:[{t:this.shape_77}]},3).to({state:[{t:this.shape_78}]},3).to({state:[{t:this.shape_79}]},3).to({state:[{t:this.shape_80}]},3).to({state:[{t:this.shape_81}]},49).to({state:[{t:this.shape_82}]},4).to({state:[{t:this.shape_83}]},4).to({state:[{t:this.shape_84}]},4).to({state:[{t:this.shape_85}]},4).to({state:[{t:this.shape_86}]},4).to({state:[{t:this.shape_87}]},4).to({state:[{t:this.shape_88}]},4).to({state:[{t:this.shape_89}]},8).to({state:[{t:this.shape_90}]},4).to({state:[{t:this.shape_91}]},4).to({state:[{t:this.shape_92}]},4).to({state:[{t:this.shape_93}]},4).to({state:[{t:this.shape_94}]},4).to({state:[{t:this.shape_95}]},4).to({state:[{t:this.shape_96}]},4).to({state:[{t:this.shape_97}]},4).to({state:[{t:this.shape_98}]},4).to({state:[{t:this.shape_99}]},3).to({state:[{t:this.shape_100}]},3).to({state:[{t:this.shape_101}]},3).to({state:[{t:this.shape_102}]},3).to({state:[{t:this.shape_103}]},3).to({state:[{t:this.shape_104}]},3).to({state:[{t:this.shape_105}]},3).to({state:[{t:this.shape_106}]},3).to({state:[{t:this.shape_107}]},3).to({state:[{t:this.shape_108}]},3).to({state:[{t:this.shape_108}]},3).to({state:[{t:this.shape_109}]},3).to({state:[{t:this.shape_110}]},3).to({state:[{t:this.shape_111}]},3).to({state:[{t:this.shape_112}]},3).to({state:[{t:this.shape_113}]},3).to({state:[{t:this.shape_114}]},3).to({state:[{t:this.shape_115}]},3).to({state:[{t:this.shape_116}]},3).to({state:[{t:this.shape_117}]},3).to({state:[{t:this.shape_117}]},3).wait(25));

	// watertableR
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(101,156,197,0.6)").s().p("AgXP+Q3NAAvUABIAG5KIgCmzIOQAlIanBGQCvAzDLBVQBBAcEdCCQDUBgCOA0QDJBLC+AmIG1gDQEPgBCngBIAKVsMgnQgABg");
	this.shape_118.setTransform(977,475.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(101,156,197,0.6)").s().p("AgXPsQ3NgBvUACIAG5KIgGmOIOUAAIanBFQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gCQEPgBCngCIAKVtMgnQgABg");
	this.shape_119.setTransform(977,477.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(101,156,197,0.6)").s().p("AgXPsQ3NgBvUABIAG5JIgGldIOUgxIanBFQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gDQEPAACngCIAKVsMgnQAAAg");
	this.shape_120.setTransform(977,477.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(101,156,197,0.6)").s().p("AgXPsQ3NgBvUABIAG5JIgGlJIOUhFIanBFQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gDQEPAACngCIAKVsMgnQAAAg");
	this.shape_121.setTransform(977,477.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(101,156,197,0.6)").s().p("AgXPsQ3NgBvUABIAG5JIgGkrIOUhjIanBFQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gDQEPAACngCIAKVsMgnQAAAg");
	this.shape_122.setTransform(977,477.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(101,156,197,0.6)").s().p("AgSPnQ3NgBvUACIAG5KIgQkgIOXhkIauA7QCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gCQEPgBCngCIAKVtMgnQgABg");
	this.shape_123.setTransform(976.5,478);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(101,156,197,0.6)").s().p("AgXPnQ3NgBvUACIAG5KIgGkNIONh3IauA7QCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gCQEPgBCngCIAKVtMgnQgABg");
	this.shape_124.setTransform(977,478);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(101,156,197,0.6)").s().p("AgSPnQ3NgBvUACIAG5KIgQj5IDvg7IDHgcIHhg0IauA7QCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gCQEPgBCngCIAKVtMgnQgABg");
	this.shape_125.setTransform(976.5,478);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(101,156,197,0.6)").s().p("AgXPnQ3NgBvUACIAG5KIgGjQIDlhkIDHgcIHhg0IauA7QCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gCQEPgBCngCIAKVtMgnQgABg");
	this.shape_126.setTransform(977,478);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(101,156,197,0.6)").s().p("EgmuACmQAFtGgBhMQAAhWEzhMQEfhGEygIQDrgFL7AWQF8ALFMAMQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gDQEPAACngCIAAViQu3AA4VAFMgmbAAFIAFs4g");
	this.shape_127.setTransform(976.5,478.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(101,156,197,0.6)").s().p("EgmzgLiQgBhXE5hQQEmhLEwgIQDqgFL7AWQF8ALFMAMQCvAzDLBWQBBAbEdCCQDUBgCOA1QDJBKC+AmIG1gDQEPAACngCIAAViQu3AA4VAFMgmbAAFg");
	this.shape_128.setTransform(976.5,478.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gLPQABgPBfgwQBWgrASgEIDCgkQAWgEHkgoQAZgCNmgYINggXQCvAyDDBUQA/AaEOB7QDIBcCJAyQDBBHC/AmIG1gCQEPgBCngCIAKVjQu3AA4VAEMgmcAAGg");
	this.shape_129.setTransform(977.5,482);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gLKQABgPBfgwQBWgqASgFQAdgFChgYQAXgEHngvQAZgCNrgYINlgXQCuAzDDBRQA7AZEOB6QDGBYCIAxQDABGC+AmIG1gCQEPgBCngCIAKVjQu3AA4VAEMgmcAAGg");
	this.shape_130.setTransform(977.5,482.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(101,156,197,0.6)").s().p("Egm0gLPQABgPBfgqQBTgmAVgFIC+gnQAXgEHngvQAZgCN1gTINvgSQCuAzDABPQA5AZEJB2QDBBXCGAwQC8BEC/AmIG1gCQEPgBCngCIAKVjQu3AA4VAEMgmcAAGg");
	this.shape_131.setTransform(977.5,483);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOrQ3HgBvUACIAFsCQAFsPgBhLQAAhUEzg7QD7gyFWgRQDrgMNUgPIMigOQCvAzCvBNQBAAcDgBsQCrBTB5AuQCtBAC/AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_132.setTransform(976.5,484);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOrQ3HgBvUACIAFr4QAFsEgBhNQAAhTEzhAQEEg3FNgRQF4gTXpggQCvAzCvBNQBAAcDgBsQCrBTB5AuQCtBAC/AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_133.setTransform(976.5,484);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOmQ3HgBvUACIAFr4QAFsEgBhNQAAhTEzhAQEEg3FNgRQDrgMNegPIMrgOQCvA0CtBKQA+AcDbBpQCmBRB4AsQCqA/C+AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_134.setTransform(976.5,484.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOhQ3HgBvUACIAFrzQAFr/gBhNQAAhTEzhAQEEg3FNgRQDrgMNigPIMxgOQCwAzCqBKQA9AaDZBoQCkBNB2ArQCoA+C/AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_135.setTransform(976.5,485);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOhQ3HgBvUACIAFrzQAFr/gBhNQAAhSEzg9QD7gxFWgRQF4gTYGggQCwAzCqBKQA9AaDZBoQCkBNB2ArQCoA+C/AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_136.setTransform(976.5,485);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOcQ3HgBvUACIAFruQAFr6gBhNQAAhTEzhAQEEg4FNgQQDrgMNogPIM1gOQCvA0CqBHQA6AZDYBlQChBMB2AqQCnA8C+AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_137.setTransform(976.5,485.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOXQ3HgBvUACIAFrpQAFr1gBhNQAAhTEvhAQEAg4FMgRQDqgLN7gQINLgMQCvAyCkBHQA5AYDPBjQCaBIBzApQCiA7C+AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_138.setTransform(976.5,486);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOXQ3HgBvUACIAFraQAFrngBhLQAAhWEvhJQEOhBE+gRQF3gSY5gfQCvAyCkBHQA5AYDPBjQCaBIBzApQCiA7C+AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_139.setTransform(976.5,486);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOSQ3HgBvUACIAFrQQAFrcgBhNQAAhUEvhKQEOhBE+gRQF3gSZDgpQCvAyCiBFQA4AYDNBfQCXBHByAoQChA5C+AmIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_140.setTransform(976.5,486.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOIQ3HgBvUACIAA3bQgBhVE0hIQERhCFAgQQF3gTangzQCjA7CWBEQBUAmCPBDQD4ByFGBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_141.setTransform(976.5,487.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(101,156,197,0.6)").s().p("AgYOIQ3HgBvUACIAA3GQgBhWE0hOQEXhHE6gPQF3gTang9QCjA7CWBEQBUAmCPBDQD4ByFGBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_142.setTransform(976.5,487.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(101,156,197,0.6)").s().p("AgYODQ3HgBvUACIAA2yQgBhXE0hSQEchME1gPQF3gTawg+QCjA8CWBCIDfBmQDxBtFIBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_143.setTransform(976.5,488);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(101,156,197,0.6)").s().p("AgYN5Q3HgBvUACIAA2oQgBhWE0hNQEXhHE6gRQF3gSbEg+QCiA8CUA/IDYBfQDjBiFMBPIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_144.setTransform(976.5,489);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(101,156,197,0.6)").s().p("AgYN5Q3HgBvUACIAA2VQgBhVE0hTQEchME1gQQF3gSbEhIQCiA8CUA/IDYBfQDjBiFMBPIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_145.setTransform(976.5,489);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(101,156,197,0.6)").s().p("AgYN0Q3HgBvUACIAA2VQgBhUE0hJQERhCFAgRQF3gSbZhSQCgA8CRA+IDSBbQDYBcFNBQIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_146.setTransform(976.5,489.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(101,156,197,0.6)").s().p("AgYNqQ3HgBvUACIAA2BQgBhVE5hOQEbhGE7gQQF3gTcUhHQCjA7CEA7QBKAgBwA0QC6BUFIBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_147.setTransform(976.5,490.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(101,156,197,0.6)").s().p("AgYNqQ3HgBvUACIAA13QgBhVE5hOQEbhHE7gPQF3gTcUhRQCjA7CEA7QBKAgBwA0QC6BUFIBOIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_148.setTransform(976.5,490.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(101,156,197,0.6)").s().p("AgTNbQ3HgBvUACIgK1YQgBhXE4hSQEhhME2gPQF3gTczhHQEDBeDTBdQCkBCFUBRIG1gCQEPgBCngCIAAVtMgnMgABg");
	this.shape_149.setTransform(976,492);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxATuMAABgndIPuBqMAw8AEYIQYBGMA1oACDIXHI6INwgUIgJVsUg/yAACgq1AAAUgq2AAAgV8gACg");
	this.shape_150.setTransform(676,450.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(101,156,197,0.6)").s().p("EhVnATMMgATgmaIQCAoMAw8AEYIQYBGMA1oACCIXHI6INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_151.setTransform(675,454.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsATCMgAKglyIG5gUIJAAUMAw8AEYIQYBGMA1oACCIXHI6INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_152.setTransform(675.5,455.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(101,156,197,0.6)").s().p("EhVsATCMgAKgleIC+geID7gKIJDAyMAgjACcIQWBeIQYBGMA1oACCIXHI6INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_153.setTransform(675.5,455.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAS9MAAUglAICWgyIDSgKIE3AUIMLBQQCOAIVgBsIW3ByUABQAAGAhJABYMAg6ABWIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_154.setTransform(676,455.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAS9MAAUgkYICWhGIDSgeIE3AUIMLBQQCOAIVgBsIW3ByUABQAAGAhJABYMAg6ABWIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_155.setTransform(676,455.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASzMAAUgkYICWhGIDSgKIFBAUIMBA8QCOAIVgBsIW3ByUABQAAGAhJABYMAg6ABWIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_156.setTransform(676,456.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASzMAAUgjwICghaIDIgeIFBAUIMBA8QCOAIVgBsIW3ByUABQAAGAhJABYMAg6ABWIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_157.setTransform(676,456.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASzMAAUgjwICghaIDIgeIFBAUIMBBGQDgAUUHBhQVTBmBrABUABQAAGAhJABYMAg6ABWIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_158.setTransform(676,456.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASpMAAUgjmICDhQIDRgeIE3AKIM0BQUADqAANAqwADPUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_159.setTransform(676,457.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASkMAAUgi+ICNhkIDHgoIE3AAIM0BQUADqAANAqwADPUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_160.setTransform(676,458.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASkMAAUgigICNhuIDHgoIE3gUIM0BQUADqAANAqwADPUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_161.setTransform(676,458.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASfMAAUgigICNhuIDHgoIE3gKIM0BQUADqAANAqwADFUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_162.setTransform(676,458.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASfMAAKgiMICXhuIDHgyIE3gUIM0BQUADqAANAqwADFUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_163.setTransform(676,458.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASfMAAKgh4ICXhuIDHg8IE3geIM0BQUADqAANAqwADFUABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_164.setTransform(676,458.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASaMAAKgh4ICXhuIDHg8IE3gUIM+BQUADqAANAqmAC7UABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_165.setTransform(676,459.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASaMAAKghkICXh4IDHg8IE3geIM+BQUADqAANAqmAC7UABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_166.setTransform(676,459.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASVMAAKghkICXh4IDHg8IFBgUIM0BGUADqAANAqmAC7UABQAAGAhEABOMAg1ABMIU8ImINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_167.setTransform(676,459.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASVMAAKghaICDhuIDIg8IE1goIM/BQUADrAANArDAC7UABQAAGAhOABTMAhAABRIUdISINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_168.setTransform(676,459.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxASBMAAKggAICDiCIDRhaIE2goIM1A8QCiAJVVBXQU3BUCKAKUABQAAGAhJABOMAg7ABMIUdISINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_169.setTransform(676,461.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxARjIAA+IIB4iCIC/h4IFdhGIMqAeIW3BaQU6BTDSAHMBDxACgIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_170.setTransform(676,464.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxARKIAK8kIB5igIC+iCIFJhQIM0AAIW3BQQUzBJDZAHMBDxACgIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_171.setTransform(676,467.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQ7IAK7AIBui+IDdigIFKhQIMfgKQDeAMTdA6QUmA+DrAIMBDoACWIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_172.setTransform(676,468.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQ7IAA5wICDjcIDSiqIE/hkIMqgeQDeAMTdA6QUmA+DrAIMBDoACWIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_173.setTransform(676,468.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQ7IAA4qICNkYIDIigIE/h4IMqgeQDeAMTdA6QUmA+DrAIMBDoACWIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_174.setTransform(676,468.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQxIAA4qICNkYIDIigIFKhuIMVgUQCfAJUiAzQTGAwFPAMMBDoACWIUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_175.setTransform(676,469.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQxIAA4qICNkYIDIigIFKhuIMVgUQDeAMTdA6QUmA+DsAIUACcAAGAg5AA/MAgcAA9IUAH+INwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_176.setTransform(676,469.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQxIAA4qICNkYIDIigIFKhuIMVgUQDeAMTdA6QUmA+DsAIMBEaACWITXHqINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_177.setTransform(676,469.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQxIAA4qICXkOIC+igIFKh4IMVgUQDeAMTdA6QUmA+DsAIMBEaACWITXHqINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_178.setTransform(676,469.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQnIAA4qICXkOIC+igIFKhuIMVgKQCfAJUcAzIYSA8MBEaACWITXHqINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_179.setTransform(676,470.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQnIAA4WIChkiIC0igIFKhuIMVgKQCzAKUIA3QUPA4EDAJUACcAAGAhOABEMAgwABCITXHqINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_180.setTransform(676,470.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQiIAA4WIChkiIC0igIFKhaIMLgUQCeAJUjAzQTGAwFQAMUACcAAGAhOABEMAgwABCITXHqINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_181.setTransform(676,471.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQiIAA4WIChkiIC0igIFKhaIMLgUQCzAKUIA3QUPA4EDAJUACcAAGAhSAA/MAg2AA9ITXHqINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_182.setTransform(676,471.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQiIAA34IChk2IC9igIFBhkIMLgUQCzAKUIA3QUPA4EDAJUACcAAGAhYABEMAg6ABCITNHgINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_183.setTransform(676,471.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQdIAA34IChk2IC9igIFLhaIMBgUQCfAJUcAzIYSA8UACcAAGAhYABEMAg6ABCITNHgINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_184.setTransform(676,471.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQdIAA34IChk2IC9igIFLhaIMBgUQCzAKUIA3QUPA4EDAJUACcAAGAhYAA/MAg6AA9ITNHgINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_185.setTransform(676,471.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQdIAA34IChk2IC9igIFLhaIMBgUQCzAKUIA3QUPA4EDAJMBFCACWIS5HMINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_186.setTransform(676,471.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQdIAA34IChkYIC9i+IFLhaIMBgUQCzAKUIA3QUPA4EDAJMBFCACWIS5HMINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_187.setTransform(676,471.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(101,156,197,0.6)").s().p("EhVxAQYIAA34IChkYIC9iqIFLhkIL3gUQCzAKUIA3QUOA4EEAJUACcAAGAhmABEMAhKABCIS5HMINwgUIgJVsUg/yAADgq1AAAUgq2AAAgV8gADg");
	this.shape_188.setTransform(676,472.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118}]}).to({state:[{t:this.shape_119}]},4).to({state:[{t:this.shape_120}]},4).to({state:[{t:this.shape_121}]},4).to({state:[{t:this.shape_121}]},4).to({state:[{t:this.shape_122}]},4).to({state:[{t:this.shape_123}]},4).to({state:[{t:this.shape_124}]},4).to({state:[{t:this.shape_125}]},4).to({state:[{t:this.shape_126}]},4).to({state:[{t:this.shape_127}]},4).to({state:[{t:this.shape_128}]},4).to({state:[{t:this.shape_129}]},4).to({state:[{t:this.shape_130}]},3).to({state:[{t:this.shape_131}]},3).to({state:[{t:this.shape_132}]},3).to({state:[{t:this.shape_133}]},3).to({state:[{t:this.shape_134}]},3).to({state:[{t:this.shape_135}]},3).to({state:[{t:this.shape_136}]},3).to({state:[{t:this.shape_137}]},3).to({state:[{t:this.shape_138}]},3).to({state:[{t:this.shape_139}]},3).to({state:[{t:this.shape_140}]},3).to({state:[{t:this.shape_141}]},3).to({state:[{t:this.shape_142}]},3).to({state:[{t:this.shape_143}]},3).to({state:[{t:this.shape_144}]},3).to({state:[{t:this.shape_145}]},3).to({state:[{t:this.shape_146}]},3).to({state:[{t:this.shape_147}]},3).to({state:[{t:this.shape_148}]},3).to({state:[{t:this.shape_148}]},3).to({state:[{t:this.shape_149}]},3).to({state:[{t:this.shape_150}]},49).to({state:[{t:this.shape_151}]},4).to({state:[{t:this.shape_152}]},4).to({state:[{t:this.shape_153}]},4).to({state:[{t:this.shape_154}]},4).to({state:[{t:this.shape_155}]},4).to({state:[{t:this.shape_156}]},4).to({state:[{t:this.shape_157}]},4).to({state:[{t:this.shape_158}]},4).to({state:[{t:this.shape_159}]},4).to({state:[{t:this.shape_160}]},4).to({state:[{t:this.shape_161}]},4).to({state:[{t:this.shape_162}]},4).to({state:[{t:this.shape_163}]},4).to({state:[{t:this.shape_164}]},4).to({state:[{t:this.shape_165}]},4).to({state:[{t:this.shape_166}]},4).to({state:[{t:this.shape_167}]},4).to({state:[{t:this.shape_168}]},4).to({state:[{t:this.shape_169}]},3).to({state:[{t:this.shape_170}]},3).to({state:[{t:this.shape_171}]},3).to({state:[{t:this.shape_172}]},3).to({state:[{t:this.shape_173}]},3).to({state:[{t:this.shape_174}]},3).to({state:[{t:this.shape_175}]},3).to({state:[{t:this.shape_176}]},3).to({state:[{t:this.shape_177}]},3).to({state:[{t:this.shape_178}]},3).to({state:[{t:this.shape_179}]},3).to({state:[{t:this.shape_180}]},3).to({state:[{t:this.shape_181}]},3).to({state:[{t:this.shape_182}]},3).to({state:[{t:this.shape_183}]},3).to({state:[{t:this.shape_184}]},3).to({state:[{t:this.shape_185}]},3).to({state:[{t:this.shape_186}]},3).to({state:[{t:this.shape_187}]},3).to({state:[{t:this.shape_188}]},3).to({state:[{t:this.shape_188}]},3).wait(25));

	// arrows
	this.instance_1 = new lib.SymArrowRchgTween8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1151.4,428,1,1,0,0,0,2.5,6);

	this.instance_2 = new lib.SymArrowRchgTween10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1197.4,430,1,1,0,0,0,2,7);

	this.instance_3 = new lib.SymArrowRchgTween11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1173.4,432,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},48).to({state:[]},112).wait(160));

	// fourcorns
	this.fourcorns = new lib.SymCorns();
	this.fourcorns.parent = this;
	this.fourcorns.setTransform(525,292,1,1,0,0,0,348,66);

	this.timeline.addTween(cjs.Tween.get(this.fourcorns).wait(320));

	// background
	this.instance_4 = new lib.SymBackground();
	this.instance_4.parent = this;
	this.instance_4.setTransform(612,288,1,1,0,0,0,612,288);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(320));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(610,288,1228.2,578.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;