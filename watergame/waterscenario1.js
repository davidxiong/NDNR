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
		{src:"images/waterscenario1_atlas_.png", id:"waterscenario1_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"waterscenario1_atlas_", frames: [[1226,0,92,97],[0,1318,1224,243],[1226,99,71,75],[0,1563,1224,242],[0,1807,1224,241],[0,578,1224,245],[0,1072,1224,244],[0,825,1224,245],[1226,176,25,43],[0,0,1224,576]]}
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



(lib.decidtreepng = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gravelbackgroundpng = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.smalldecidtreepng = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Soil12png = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Soil1png = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Soil5png = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Soil7png = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Soil9png = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.watersquigglepng = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.watertablebgd = function() {
	this.spriteSheet = ss["waterscenario1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.watersquiggle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.watersquigglepng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,43);


(lib.smalldecidtree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smalldecidtreepng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,75);


(lib.decidtree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.decidtreepng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,97);


(lib.SymWaterTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhFhFICLAAIhGCLg");
	this.shape.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,16);


(lib.SymWaterFlow2Slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AgPBFYAAAAABAAACgBYACAAADAAADgBYADgBABgBAEgCYAEgBADgCAEgCYAHgFAHgFAEgIYAEgHgBgLABgJYABgFAAgFAAgDYAAgFgBgFAAgEYAAgFAAgEAAgFYAAgEABgEAAgDYABgPABgJAAAAYAAgCgCgDgCAAYgBAAgCABgBABYAAAAgGAHgJALYgDACgDADgCADYgDADgEADgCAEYgDADgDADgEADYgEADgDAEgDAEYgGAHgIAEgDAJYgDAIABAJACAIYABAEABAEACADYABAEACADABADYACADABACACACYABACAAABAAAAYACACADABADAA");
	this.shape.setTransform(2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("Agfg9YAAAAAAAAgBACYgBACgCACgBADYgBADgCAEgBAEYgBADgBAFAAAEYgBAIAAAJADAIYAEAGAJAFAGAHYAEADADAEAEADYAEADAEADACACYAEADADADADADYAEACADADACACYALAKAHAHAAAAYABACADAAACgCYABgBAAgBAAgCYAAAAgCgJgDgOYAAgEgBgEAAgEYgBgEAAgFgBgEYAAgFAAgFAAgDYgBgFAAgFgBgEYgDgKABgKgFgHYgEgIgIgFgHgDYgEgCgEgCgCgBYgEgBgDgBgEAAYgDgBgDAAgCAAYgCAAgBAAAAAAYgDAAgCABgCAD");
	this.shape_1.setTransform(2.9,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.3,9.3,27.4);


(lib.SymWaterFlow2Fast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("Agfg9YAAAAAAAAgBACYgBACgCACgBADYgBADgCAEgBAEYgBADgBAFAAAEYgBAIAAAJADAIYAEAGAJAFAGAHYAEADADAEAEADYAEADAEADACACYAEADADADADADYAEACADADACACYALAKAHAHAAAAYABACADAAACgCYABgBAAgBAAgCYAAAAgCgJgDgOYAAgEgBgEAAgEYgBgEAAgFgBgEYAAgFAAgFAAgDYgBgFAAgFgBgEYgDgKABgKgFgHYgEgIgIgFgHgDYgEgCgEgCgCgBYgEgBgDgBgEAAYgDgBgDAAgCAAYgCAAgBAAAAAAYgDAAgCABgCAD");
	this.shape.setTransform(2.9,30.5,1,1.495);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AgPBFYAAAAABAAACgBYACAAADAAADgBYADgBABgBAEgCYAEgBADgCAEgCYAHgFAHgFAEgIYAEgHgBgLABgJYABgFAAgFAAgDYAAgFgBgFAAgEYAAgFAAgEAAgFYAAgEABgEAAgDYABgPABgJAAAAYAAgCgCgDgCAAYgBAAgCABgBABYAAAAgGAHgJALYgDACgDADgCADYgDADgEADgCAEYgDADgDADgEADYgEADgDAEgDAEYgGAHgIAEgDAJYgDAIABAJACAIYABAEABAEACADYABAEACADABADYACADABACACACYABACAAABAAAAYACACADABADAA");
	this.shape_1.setTransform(2,9.9,1,1.495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.5,9.3,41);


(lib.SymWaterFlow1E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AA7iZYAAAAgBABgDABYgDACgDACgEADYgEADgFAEgFAFYgFAFgGAFgFAGYgKANgJAPgJASYgIARgDAVgGAUYgDAKgCAIgCALYgCAKgCAKgCAKYgDAJgBAKgDAJYgCAIgCAJgCAHYgHAfgGAUAAAAYgBACABACADABYABAAACgBABgBYAAAAALgSAQgbYAFgGAEgIAFgHYAFgIAFgIAGgIYAFgIAEgJAGgIYAGgJAGgJAFgJYAKgQANgRAHgSYAIgSADgSABgQYABgJAAgHAAgHYAAgHAAgGgBgFYAAgGgBgEgBgDYAAgDgBgBAAAAYAAgDgDgBgDAAYAAAAgBABAAAA");
	this.shape.setTransform(6.7,30.1,1,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AA9CXYAAAAAAgBABgDYABgDAAgEABgFYABgFAAgGABgHYAAgHAAgIAAgIYgCgQgCgSgHgSYgGgSgNgRgJgRYgFgJgGgJgFgIYgGgJgFgIgEgIYgFgJgFgIgFgHYgEgIgFgHgEgHYgQgbgJgSAAAAYgBgCgDAAgCABYgCAAAAACAAACYAAAAAFAUAHAfYACAHABAIACAJYACAJACAJACAKYABAJACAKACALYABAKADAIACAKYAFAUADAVAHARYAIASAJAPAKANYAFAGAFAGAFAEYAFAFAEAEAEADYAEAEAEACACACYADABABABAAAAYACACAEgBABgCYAAgBAAAAABgB");
	this.shape_1.setTransform(7.3,9.9,1,0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.2,14.3,40.5);


(lib.SymWaterFlow1D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AA7iZYAAAAgBABgDABYgDACgDACgEADYgEADgFAEgFAFYgFAFgGAFgFAGYgKANgJAPgJASYgIARgDAVgGAUYgDAKgCAIgCALYgCAKgCAKgCAKYgDAJgBAKgDAJYgCAIgCAJgCAHYgHAfgGAUAAAAYgBACABACADABYABAAACgBABgBYAAAAALgSAQgbYAFgGAEgIAFgHYAFgIAFgIAGgIYAFgIAEgJAGgIYAGgJAGgJAFgJYAKgQANgRAHgSYAIgSADgSABgQYABgJAAgHAAgHYAAgHAAgGgBgFYAAgGgBgEgBgDYAAgDgBgBAAAAYAAgDgDgBgDAAYAAAAgBABAAAA");
	this.shape.setTransform(6.7,34.1,1,0.737);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AA9CXYAAAAAAgBABgDYABgDAAgEABgFYABgFAAgGABgHYAAgHAAgIAAgIYgCgQgCgSgHgSYgGgSgNgRgJgRYgFgJgGgJgFgIYgGgJgFgIgEgIYgFgJgFgIgFgHYgEgIgFgHgEgHYgQgbgJgSAAAAYgBgCgDAAgCABYgCAAAAACAAACYAAAAAFAUAHAfYACAHABAIACAJYACAJACAJACAKYABAJACAKACALYABAKADAIACAKYAFAUADAVAHARYAIASAJAPAKANYAFAGAFAGAFAEYAFAFAEAEAEADYAEAEAEACACACYADABABABAAAAYACACAEgBABgCYAAgBAAAAABgB");
	this.shape_1.setTransform(7.3,11.2,1,0.737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.2,14.3,45.8);


(lib.SymWaterFlow1C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AA7iZYAAAAgBABgDABYgDACgDACgEADYgEADgFAEgFAFYgFAFgGAFgFAGYgKANgJAPgJASYgIARgDAVgGAUYgDAKgCAIgCALYgCAKgCAKgCAKYgDAJgBAKgDAJYgCAIgCAJgCAHYgHAfgGAUAAAAYgBACABACADABYABAAACgBABgBYAAAAALgSAQgbYAFgGAEgIAFgHYAFgIAFgIAGgIYAFgIAEgJAGgIYAGgJAGgJAFgJYAKgQANgRAHgSYAIgSADgSABgQYABgJAAgHAAgHYAAgHAAgGgBgFYAAgGgBgEgBgDYAAgDgBgBAAAAYAAgDgDgBgDAAYAAAAgBABAAAA");
	this.shape.setTransform(6.7,38.2,1,0.824);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AA9CXYAAAAAAgBABgDYABgDAAgEABgFYABgFAAgGABgHYAAgHAAgIAAgIYgCgQgCgSgHgSYgGgSgNgRgJgRYgFgJgGgJgFgIYgGgJgFgIgEgIYgFgJgFgIgFgHYgEgIgFgHgEgHYgQgbgJgSAAAAYgBgCgDAAgCABYgCAAAAACAAACYAAAAAFAUAHAfYACAHABAIACAJYACAJACAJACAKYABAJACAKACALYABAKADAIACAKYAFAUADAVAHARYAIASAJAPAKANYAFAGAFAGAFAEYAFAFAEAEAEADYAEAEAEACACACYADABABABAAAAYACACAEgBABgCYAAgBAAAAABgB");
	this.shape_1.setTransform(7.3,12.5,1,0.824);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,14.3,51.3);


(lib.SymWaterFlow1B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AA7iZYAAAAgBABgDABYgDACgDACgEADYgEADgFAEgFAFYgFAFgGAFgFAGYgKANgJAPgJASYgIARgDAVgGAUYgDAKgCAIgCALYgCAKgCAKgCAKYgDAJgBAKgDAJYgCAIgCAJgCAHYgHAfgGAUAAAAYgBACABACADABYABAAACgBABgBYAAAAALgSAQgbYAFgGAEgIAFgHYAFgIAFgIAGgIYAFgIAEgJAGgIYAGgJAGgJAFgJYAKgQANgRAHgSYAIgSADgSABgQYABgJAAgHAAgHYAAgHAAgGgBgFYAAgGgBgEgBgDYAAgDgBgBAAAAYAAgDgDgBgDAAYAAAAgBABAAAA");
	this.shape.setTransform(6.7,42.2,1,0.912);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AA9CXYAAAAAAgBABgDYABgDAAgEABgFYABgFAAgGABgHYAAgHAAgIAAgIYgCgQgCgSgHgSYgGgSgNgRgJgRYgFgJgGgJgFgIYgGgJgFgIgEgIYgFgJgFgIgFgHYgEgIgFgHgEgHYgQgbgJgSAAAAYgBgCgDAAgCABYgCAAAAACAAACYAAAAAFAUAHAfYACAHABAIACAJYACAJACAJACAKYABAJACAKACALYABAKADAIACAKYAFAUADAVAHARYAIASAJAPAKANYAFAGAFAGAFAEYAFAFAEAEAEADYAEAEAEACACACYADABABABAAAAYACACAEgBABgCYAAgBAAAAABgB");
	this.shape_1.setTransform(7.3,13.9,1,0.912);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,14.3,56.7);


(lib.SymWaterFlow1A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(111,170,221,0.698)").s().p("AA7iZYAAAAgBABgDABYgDACgDACgEADYgEADgFAEgFAFYgFAFgGAFgFAGYgKANgJAPgJASYgIARgDAVgGAUYgDAKgCAIgCALYgCAKgCAKgCAKYgDAJgBAKgDAJYgCAIgCAJgCAHYgHAfgGAUAAAAYgBACABACADABYABAAACgBABgBYAAAAALgSAQgbYAFgGAEgIAFgHYAFgIAFgIAGgIYAFgIAEgJAGgIYAGgJAGgJAFgJYAKgQANgRAHgSYAIgSADgSABgQYABgJAAgHAAgHYAAgHAAgGgBgFYAAgGgBgEgBgDYAAgDgBgBAAAAYAAgDgDgBgDAAYAAAAgBABAAAA");
	this.shape.setTransform(6.7,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(111,170,221,0.698)").s().p("AA9CXYAAAAAAgBABgDYABgDAAgEABgFYABgFAAgGABgHYAAgHAAgIAAgIYgCgQgCgSgHgSYgGgSgNgRgJgRYgFgJgGgJgFgIYgGgJgFgIgEgIYgFgJgFgIgFgHYgEgIgFgHgEgHYgQgbgJgSAAAAYgBgCgDAAgCABYgCAAAAACAAACYAAAAAFAUAHAfYACAHABAIACAJYACAJACAJACAKYABAJACAKACALYABAKADAIACAKYAFAUADAVAHARYAIASAJAPAKANYAFAGAFAGAFAEYAFAFAEAEAEADYAEAEAEACACACYADABABABAAAAYACACAEgBABgCYAAgBAAAAABgB");
	this.shape_1.setTransform(7.3,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.3,14.3,62.2);


(lib.symVLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAjvIAAHf");
	this.shape.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,50);


(lib.SymRunoffArrow5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AC1AoIABgHIsXhSIADgTIMWBSIABgHIGpA+g");
	this.shape.setTransform(60.9,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-1,122.1,14);


(lib.SymRunoffArrow4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AC0BCIABgOIsWhTIAEgsIMWBTIADgNIGnBQg");
	this.shape.setTransform(60.9,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-2.2,122.2,15.2);


(lib.SymRunoffArrow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AC0A9IsWhSIAGg9IMXBSIACgSIGmBfImxAFg");
	this.shape.setTransform(60.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-3,122.3,16.6);


(lib.SymRunoffArrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AC1BDIsXhTIAIhMIMXBUIACgaIGlBsImzATg");
	this.shape.setTransform(60.8,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-3.8,122.4,18.8);


(lib.SymRunoffArrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AC0BJIsXhTIAKheIMXBUIAEggIGiB7ImzAig");
	this.shape.setTransform(60.7,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-4.7,122.5,21.2);


(lib.SymRunoff5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(101,156,197,0.6)").s().p("EBTcAM0ItZkoIttkBIgCAAIgHgBIgcgDIhxgOInCg1I8MjUIgCAAIgHAAIgcgEIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgLImwgxI6/jEIgCAAIgFAAIgWgDIhYgJIlfgmI18iaIgDgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgBgkIAAAAQAAghABgBIgCgDIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQgCgaABAAIUKCCQBaAJC4AWICmATQPZBzMSBVIJNA8UAjmADjAAKAADIakDGIOsB4IPAEjIMCEOQghBagCAAIAAAAg");
	this.shape.setTransform(-492.6,-67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1030.2,-149,1075.2,164);


(lib.SymRunoff4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(101,156,197,0.6)").s().p("EBTgAMnItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFgBIgWgCIhYgJIlfgnI18iaIgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgkIAAAAQAAgiABAAIgCgDIAAgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIADgBIUGB/IFCAgIBQAIIAUADIAFAAIACAAIAAAAUAk1AESAAHAACIAAAAIAAAAIgDgBUAjRAD0AAHAACIAAABIAAgBIgDgBQa9C0AFACIAAAAIAAAAIgCgBIOfB/IABAAIPCEeIMOEDQgbBGgBAAIAAAAg");
	this.shape.setTransform(-493,-65.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1030.2,-146.5,1074.5,161.5);


(lib.SymRunoff3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(101,156,197,0.6)").s().p("EBTmAMQItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIs1haIpKhBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgWQAAgMABgBIUACCQBZAJC4AWICnATQYnC4MRBWQOoBmL2BFII0AxIbCDGIOiB4IO2EYIMMEOQgOAfgBAAIAAgBg");
	this.shape.setTransform(-493.5,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1030,-142,1073.1,157);


(lib.SymRunoff2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(101,156,197,0.6)").s().p("EBTrAMLItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnI18iaIgDgBQgEgcACgBIUACCQBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape.setTransform(-494,-63);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1030,-141,1072.1,156);


(lib.SymRunoff1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(101,156,197,0.6)").s().p("EBTlAMLItZknIttkBIgCAAIgHgBIgcgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhYgJIlfgnIs0hbQpMhDAAgBIAAgZIUACCQBSAIBzAPICPARIBuAKQPYBzMNBUIJJA9QOTBkZwCrIWaCTIOZB4IO/EiIMDEOQgOAVgBAAIgBgBg");
	this.shape.setTransform(-493.5,-63);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1030,-141,1073,156);


(lib.symHLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgxAAIBjAA");
	this.shape.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12,2);


(lib.SymDarken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("EhfngtsMC/PAAAMAAABbZMi/PAAAg");
	this.shape.setTransform(612,292.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("EhfnAttMAAAhbZMC/PAAAMAAABbZg");
	this.shape_1.setTransform(612,292.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1226,587);


(lib.SymArrowRchg12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgWAKIAPgFIgPgnIARgGIANAoIAPgGIgIAvg");
	this.shape.setTransform(1.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.3,4.6,8.3);


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


(lib.SymArrowRchg9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgXAEIAQgCIgKhFIARgCIAIBFIAQgBIgOBHg");
	this.shape.setTransform(1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-0.1,5,14.1);


(lib.SymArrowRchg8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgagGIAPAGIAXg8IAQAGIgYA7IAOAGIgtAyg");
	this.shape.setTransform(2.9,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,5.8,12.4);


(lib.SymArrowRchg7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgSAIIAPgEIgZhTIARgGIAXBVIAQgEIABBag");
	this.shape.setTransform(2.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.3,5.9,17.3);


(lib.SymArrowRchg6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgVAGIAQgDIgUhTIASgEIARBUIAQgCIgEBYg");
	this.shape.setTransform(1.8,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.2,5.3,17.2);


(lib.SymArrowRchg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgXADIAQgCIgKhYIARgCIAJBZIAPAAIgOBag");
	this.shape.setTransform(1,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-0.1,5,18.1);


(lib.SymArrowRchg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgXgBIAPABIAJhUIARACIgKBTIAQACIggBSg");
	this.shape.setTransform(1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-0.1,5,17.2);


(lib.SymArrowRchg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgXgCIAQACIANhZIARACIgPBZIAQACIglBWg");
	this.shape.setTransform(1.5,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.1,5,18.2);


(lib.SymArrowRchg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgXAAIAPAAIAFheIARABIgFBdIAPABIgbBeg");
	this.shape.setTransform(0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,5,19.1);


(lib.SymArrowRchg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E61E8").s().p("AgRAMIAOgHIgvhuIAQgIIAuBxIAPgGIAYB4g");
	this.shape.setTransform(4.6,10.9,1,1,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.4,10.9,22.7);


(lib.RainDrop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,255,0.698)").s().p("AAwj5YAAAAgIAfgNAuYgGAYgHAbgHAdYgHAdgGAfgIAfYgEANgEAPgEAQYgEAPgEAPgDAOYgGAegDAbgCAYYgCAYgBAVAAAOYAAAOABAIAAAAYAAABABABABAAYABAAABAAAAgBYAAAAAEgHAFgNYAGgNAHgTAHgXYAHgXAIgbAEgdYADgPACgPACgQYACgQACgPADgQYAEgeAGgfAEgeYAEgdAEgcADgYYAHgvAEggAAAAYAAgBgBgBgBAAYgBAAgBAAAAAB");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-25.1,10.5,50.3);


(lib.Soil12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Soil12png();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,242);


(lib.Soil9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Soil9png();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,245);


(lib.Soil1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Soil1png();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,241);


(lib.gravelbackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gravelbackgroundpng();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,243);


(lib.Soil7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Soil7png();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,244);


(lib.Soil5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Soil5png();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1224,245);


(lib.SymWFTween2Slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow2Slow();
	this.instance.parent = this;
	this.instance.setTransform(3.5,13.4,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0.6},0).wait(1).to({x:-2.4},0).wait(1).to({x:-5.3},0).wait(1).to({x:-8.3},0).wait(1).to({x:-11.2},0).wait(1).to({x:-14.2},0).wait(1).to({x:-17.2},0).wait(1).to({x:-20.1},0).wait(1).to({x:-23.1},0).wait(1).to({x:-26},0).wait(1).to({x:-29},0).wait(1).to({x:-31.9},0).wait(1).to({x:-34.9},0).wait(1).to({x:-37.9},0).wait(1).to({x:-40.8},0).wait(1).to({x:-43.8},0).wait(1).to({x:-46.7},0).wait(1).to({x:-49.7},0).wait(1).to({x:-52.6},0).wait(1).to({x:-55.6},0).wait(1).to({x:-58.6},0).wait(1).to({x:-61.5},0).wait(1).to({x:-64.5},0).wait(1).to({x:-67.4},0).wait(1).to({x:-70.4},0).wait(1).to({x:-73.3},0).wait(1).to({x:-76.3},0).wait(1).to({x:-79.3},0).wait(1).to({x:-82.2},0).wait(1).to({x:-85.2},0).wait(1).to({x:-88.1},0).wait(1).to({x:-91.1},0).wait(1).to({x:-94.1},0).wait(1).to({x:-97},0).wait(1).to({x:-100},0).wait(1).to({x:-102.9},0).wait(1).to({x:-105.9},0).wait(1).to({x:-108.8},0).wait(1).to({x:-111.8},0).wait(1).to({x:-114.8},0).wait(1).to({x:-117.7},0).wait(1).to({x:-120.7},0).wait(1).to({x:-123.6},0).wait(1).to({x:-126.6},0).wait(1).to({x:-129.5},0).wait(1).to({x:-132.5},0).wait(1).to({x:-135.5},0).wait(1).to({x:-138.4},0).wait(1).to({x:-141.4},0).wait(1).to({x:-144.3},0).wait(1).to({x:-147.3},0).wait(1).to({x:-150.2},0).wait(1).to({x:-153.2},0).wait(1).to({x:-156.2},0).wait(1).to({x:-159.1},0).wait(1).to({x:-162.1},0).wait(1).to({x:-165},0).wait(1).to({x:-168},0).wait(1).to({x:-171},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,14.4,34.2);


(lib.SymWFTween2Fast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow2Fast();
	this.instance.parent = this;
	this.instance.setTransform(3.5,13.4,1,1,0,0,0,3.5,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-2.5},0).wait(1).to({x:-8.5},0).wait(1).to({x:-14.5},0).wait(1).to({x:-20.5},0).wait(1).to({x:-26.5},0).wait(1).to({x:-32.6},0).wait(1).to({x:-38.6},0).wait(1).to({x:-44.6},0).wait(1).to({x:-50.6},0).wait(1).to({x:-56.6},0).wait(1).to({x:-62.6},0).wait(1).to({x:-68.7},0).wait(1).to({x:-74.7},0).wait(1).to({x:-80.7},0).wait(1).to({x:-86.7},0).wait(1).to({x:-92.7},0).wait(1).to({x:-98.7},0).wait(1).to({x:-104.8},0).wait(1).to({x:-110.8},0).wait(1).to({x:-116.8},0).wait(1).to({x:-122.8},0).wait(1).to({x:-128.8},0).wait(1).to({x:-134.8},0).wait(1).to({x:-140.9},0).wait(1).to({x:-146.9},0).wait(1).to({x:-152.9},0).wait(1).to({x:-158.9},0).wait(1).to({x:-164.9},0).wait(1).to({x:-171},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,14.4,47.4);


(lib.SymWFTween1Slow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1E();
	this.instance.parent = this;
	this.instance.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:9.5,y:31.1},0).wait(1).to({x:12.6,y:31.3},0).wait(1).to({x:15.6,y:31.6},0).wait(1).to({x:18.6,y:31.9},0).wait(1).to({x:21.6,y:32.2},0).wait(1).to({x:24.7,y:32.4},0).wait(1).to({x:27.7,y:32.7},0).wait(1).to({x:30.7,y:33},0).wait(1).to({x:33.7,y:33.2},0).wait(1).to({x:36.8,y:33.5},0).wait(1).to({x:39.8,y:33.8},0).wait(1).to({x:42.8,y:34.1},0).wait(1).to({x:45.8,y:34.3},0).wait(1).to({x:48.9,y:34.6},0).wait(1).to({x:51.9,y:34.9},0).wait(1).to({x:54.9,y:35.1},0).wait(1).to({x:57.9,y:35.4},0).wait(1).to({x:61,y:35.7},0).wait(1).to({x:64,y:36},0).wait(1).to({x:67,y:36.2},0).wait(1).to({x:70,y:36.5},0).wait(1).to({x:73.1,y:36.8},0).wait(1).to({x:76.1,y:37},0).wait(1).to({x:79.1,y:37.3},0).wait(1).to({x:82.1,y:37.6},0).wait(1).to({x:85.2,y:37.9},0).wait(1).to({x:88.2,y:38.1},0).wait(1).to({x:91.2,y:38.4},0).wait(1).to({x:94.2,y:38.7},0).wait(1).to({x:97.3,y:38.9},0).wait(1).to({x:100.3,y:39.2},0).wait(1).to({x:103.3,y:39.5},0).wait(1).to({x:106.3,y:39.7},0).wait(1).to({x:109.4,y:40},0).wait(1).to({x:112.4,y:40.3},0).wait(1).to({x:115.4,y:40.6},0).wait(1).to({x:118.4,y:40.8},0).wait(1).to({x:121.5,y:41.1},0).wait(1).to({x:124.5,y:41.4},0).wait(1).to({x:127.5,y:41.6},0).wait(1).to({x:130.5,y:41.9},0).wait(1).to({x:133.6,y:42.2},0).wait(1).to({x:136.6,y:42.5},0).wait(1).to({x:139.6,y:42.7},0).wait(1).to({x:142.6,y:43},0).wait(1).to({x:145.7,y:43.3},0).wait(1).to({x:148.7,y:43.5},0).wait(1).to({x:151.7,y:43.8},0).wait(1).to({x:154.7,y:44.1},0).wait(1).to({x:157.8,y:44.4},0).wait(1).to({x:160.8,y:44.6},0).wait(1).to({x:163.8,y:44.9},0).wait(1).to({x:166.8,y:45.2},0).wait(1).to({x:169.9,y:45.4},0).wait(1).to({x:172.9,y:45.7},0).wait(1).to({x:175.9,y:46},0).wait(1).to({x:178.9,y:46.3},0).wait(1).to({x:182,y:46.5},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,47.4);


(lib.SymWFTween1Fast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1A();
	this.instance.parent = this;
	this.instance.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:12.7,y:31.4},0).wait(1).to({x:18.8,y:31.9},0).wait(1).to({x:25,y:32.5},0).wait(1).to({x:31.1,y:33},0).wait(1).to({x:37.3,y:33.6},0).wait(1).to({x:43.4,y:34.1},0).wait(1).to({x:49.6,y:34.7},0).wait(1).to({x:55.7,y:35.2},0).wait(1).to({x:61.9,y:35.8},0).wait(1).to({x:68.1,y:36.3},0).wait(1).to({x:74.2,y:36.9},0).wait(1).to({x:80.4,y:37.4},0).wait(1).to({x:86.5,y:38},0).wait(1).to({x:92.7,y:38.5},0).wait(1).to({x:98.8,y:39.1},0).wait(1).to({x:105,y:39.6},0).wait(1).to({x:111.1,y:40.2},0).wait(1).to({x:117.3,y:40.7},0).wait(1).to({x:123.4,y:41.3},0).wait(1).to({x:129.6,y:41.8},0).wait(1).to({x:135.8,y:42.4},0).wait(1).to({x:141.9,y:42.9},0).wait(1).to({x:148.1,y:43.5},0).wait(1).to({x:154.2,y:44},0).wait(1).to({x:160.4,y:44.6},0).wait(1).to({x:166.5,y:45.1},0).wait(1).to({x:172.7,y:45.7},0).wait(1).to({x:178.8,y:46.2},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,68.9);


(lib.SymWFTween1E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1E();
	this.instance.parent = this;
	this.instance.setTransform(6.5,20,1,1,0,0,0,6.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:7.8,y:20.1},0).wait(1).to({x:9.1,y:20.2},0).wait(1).to({x:10.4,y:20.3},0).wait(1).to({x:11.6,y:20.5},0).wait(1).to({x:12.9,y:20.6},0).wait(1).to({x:14.2,y:20.7},0).wait(1).to({x:15.5,y:20.8},0).wait(1).to({x:16.8,y:20.9},0).wait(1).to({x:18.1,y:21},0).wait(1).to({x:19.3,y:21.2},0).wait(1).to({x:20.6,y:21.3},0).wait(1).to({x:21.9,y:21.4},0).wait(1).to({x:23.2,y:21.5},0).wait(1).to({x:24.5,y:21.6},0).wait(1).to({x:25.8,y:21.7},0).wait(1).to({x:27,y:21.8},0).wait(1).to({x:28.3,y:22},0).wait(1).to({x:29.6,y:22.1},0).wait(1).to({x:30.9,y:22.2},0).wait(1).to({x:32.2,y:22.3},0).wait(1).to({x:33.5,y:22.4},0).wait(1).to({x:34.8,y:22.5},0).wait(1).to({x:36,y:22.6},0).wait(1).to({x:37.3,y:22.8},0).wait(1).to({x:38.6,y:22.9},0).wait(1).to({x:39.9,y:23},0).wait(1).to({x:41.2,y:23.1},0).wait(1).to({x:42.5,y:23.2},0).wait(1).to({x:43.7,y:23.3},0).wait(1).to({x:45,y:23.5},0).wait(1).to({x:46.3,y:23.6},0).wait(1).to({x:47.6,y:23.7},0).wait(1).to({x:48.9,y:23.8},0).wait(1).to({x:50.2,y:23.9},0).wait(1).to({x:51.4,y:24},0).wait(1).to({x:52.7,y:24.1},0).wait(1).to({x:54,y:24.3},0).wait(1).to({x:55.3,y:24.4},0).wait(1).to({x:56.6,y:24.5},0).wait(1).to({x:57.9,y:24.6},0).wait(1).to({x:59.2,y:24.7},0).wait(1).to({x:60.4,y:24.8},0).wait(1).to({x:61.7,y:24.9},0).wait(1).to({x:63,y:25.1},0).wait(1).to({x:64.3,y:25.2},0).wait(1).to({x:65.6,y:25.3},0).wait(1).to({x:66.9,y:25.4},0).wait(1).to({x:68.1,y:25.5},0).wait(1).to({x:69.4,y:25.6},0).wait(1).to({x:70.7,y:25.8},0).wait(1).to({x:72,y:25.9},0).wait(1).to({x:73.3,y:26},0).wait(1).to({x:74.6,y:26.1},0).wait(1).to({x:75.8,y:26.2},0).wait(1).to({x:77.1,y:26.3},0).wait(1).to({x:78.4,y:26.4},0).wait(1).to({x:79.7,y:26.6},0).wait(1).to({x:81,y:26.7},0).wait(1).to({x:82.3,y:26.8},0).wait(1).to({x:83.6,y:26.9},0).wait(1).to({x:84.8,y:27},0).wait(1).to({x:86.1,y:27.1},0).wait(1).to({x:87.4,y:27.3},0).wait(1).to({x:88.7,y:27.4},0).wait(1).to({x:90,y:27.5},0).wait(1).to({x:91.3,y:27.6},0).wait(1).to({x:92.5,y:27.7},0).wait(1).to({x:93.8,y:27.8},0).wait(1).to({x:95.1,y:27.9},0).wait(1).to({x:96.4,y:28.1},0).wait(1).to({x:97.7,y:28.2},0).wait(1).to({x:99,y:28.3},0).wait(1).to({x:100.2,y:28.4},0).wait(1).to({x:101.5,y:28.5},0).wait(1).to({x:102.8,y:28.6},0).wait(1).to({x:104.1,y:28.7},0).wait(1).to({x:105.4,y:28.9},0).wait(1).to({x:106.7,y:29},0).wait(1).to({x:107.9,y:29.1},0).wait(1).to({x:109.2,y:29.2},0).wait(1).to({x:110.5,y:29.3},0).wait(1).to({x:111.8,y:29.4},0).wait(1).to({x:113.1,y:29.6},0).wait(1).to({x:114.4,y:29.7},0).wait(1).to({x:115.7,y:29.8},0).wait(1).to({x:116.9,y:29.9},0).wait(1).to({x:118.2,y:30},0).wait(1).to({x:119.5,y:30.1},0).wait(1).to({x:120.8,y:30.2},0).wait(1).to({x:122.1,y:30.4},0).wait(1).to({x:123.4,y:30.5},0).wait(1).to({x:124.6,y:30.6},0).wait(1).to({x:125.9,y:30.7},0).wait(1).to({x:127.2,y:30.8},0).wait(1).to({x:128.5,y:30.9},0).wait(1).to({x:129.8,y:31.1},0).wait(1).to({x:131.1,y:31.2},0).wait(1).to({x:132.3,y:31.3},0).wait(1).to({x:133.6,y:31.4},0).wait(1).to({x:134.9,y:31.5},0).wait(1).to({x:136.2,y:31.6},0).wait(1).to({x:137.5,y:31.7},0).wait(1).to({x:138.8,y:31.9},0).wait(1).to({x:140.1,y:32},0).wait(1).to({x:141.3,y:32.1},0).wait(1).to({x:142.6,y:32.2},0).wait(1).to({x:143.9,y:32.3},0).wait(1).to({x:145.2,y:32.4},0).wait(1).to({x:146.5,y:32.5},0).wait(1).to({x:147.8,y:32.7},0).wait(1).to({x:149,y:32.8},0).wait(1).to({x:150.3,y:32.9},0).wait(1).to({x:151.6,y:33},0).wait(1).to({x:152.9,y:33.1},0).wait(1).to({x:154.2,y:33.2},0).wait(1).to({x:155.5,y:33.4},0).wait(1).to({x:156.7,y:33.5},0).wait(1).to({x:158,y:33.6},0).wait(1).to({x:159.3,y:33.7},0).wait(1).to({x:160.6,y:33.8},0).wait(1).to({x:161.9,y:33.9},0).wait(1).to({x:163.2,y:34},0).wait(1).to({x:164.5,y:34.2},0).wait(1).to({x:165.7,y:34.3},0).wait(1).to({x:167,y:34.4},0).wait(1).to({x:168.3,y:34.5},0).wait(1).to({x:169.6,y:34.6},0).wait(1).to({x:170.9,y:34.7},0).wait(1).to({x:172.2,y:34.8},0).wait(1).to({x:173.4,y:35},0).wait(1).to({x:174.7,y:35.1},0).wait(1).to({x:176,y:35.2},0).wait(1).to({x:177.3,y:35.3},0).wait(1).to({x:178.6,y:35.4},0).wait(1).to({x:179.9,y:35.5},0).wait(1).to({x:181.1,y:35.7},0).wait(1).to({x:182.4,y:35.8},0).wait(1).to({x:183.7,y:35.9},0).wait(1).to({x:185,y:36},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,47.4);


(lib.SymWFTween1D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1D();
	this.instance.parent = this;
	this.instance.setTransform(6.5,22.7,1,1,0,0,0,6.5,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:8,y:22.8},0).wait(1).to({x:9.5,y:23},0).wait(1).to({x:11,y:23.1},0).wait(1).to({x:12.5,y:23.2},0).wait(1).to({x:14,y:23.4},0).wait(1).to({x:15.5,y:23.5},0).wait(1).to({x:17,y:23.6},0).wait(1).to({x:18.5,y:23.8},0).wait(1).to({x:20,y:23.9},0).wait(1).to({x:21.5,y:24},0).wait(1).to({x:23,y:24.2},0).wait(1).to({x:24.5,y:24.3},0).wait(1).to({x:26,y:24.4},0).wait(1).to({x:27.5,y:24.6},0).wait(1).to({x:29,y:24.7},0).wait(1).to({x:30.5,y:24.9},0).wait(1).to({x:32,y:25},0).wait(1).to({x:33.5,y:25.1},0).wait(1).to({x:35,y:25.3},0).wait(1).to({x:36.5,y:25.4},0).wait(1).to({x:38,y:25.5},0).wait(1).to({x:39.5,y:25.7},0).wait(1).to({x:41,y:25.8},0).wait(1).to({x:42.5,y:25.9},0).wait(1).to({x:44,y:26.1},0).wait(1).to({x:45.5,y:26.2},0).wait(1).to({x:47,y:26.3},0).wait(1).to({x:48.5,y:26.5},0).wait(1).to({x:50,y:26.6},0).wait(1).to({x:51.5,y:26.7},0).wait(1).to({x:53,y:26.9},0).wait(1).to({x:54.5,y:27},0).wait(1).to({x:56,y:27.1},0).wait(1).to({x:57.5,y:27.3},0).wait(1).to({x:59,y:27.4},0).wait(1).to({x:60.5,y:27.5},0).wait(1).to({x:62,y:27.7},0).wait(1).to({x:63.5,y:27.8},0).wait(1).to({x:65,y:27.9},0).wait(1).to({x:66.5,y:28.1},0).wait(1).to({x:68,y:28.2},0).wait(1).to({x:69.5,y:28.3},0).wait(1).to({x:71,y:28.5},0).wait(1).to({x:72.5,y:28.6},0).wait(1).to({x:74,y:28.8},0).wait(1).to({x:75.5,y:28.9},0).wait(1).to({x:77,y:29},0).wait(1).to({x:78.5,y:29.2},0).wait(1).to({x:80,y:29.3},0).wait(1).to({x:81.5,y:29.4},0).wait(1).to({x:83,y:29.6},0).wait(1).to({x:84.5,y:29.7},0).wait(1).to({x:86,y:29.8},0).wait(1).to({x:87.5,y:30},0).wait(1).to({x:89,y:30.1},0).wait(1).to({x:90.5,y:30.2},0).wait(1).to({x:92,y:30.4},0).wait(1).to({x:93.5,y:30.5},0).wait(1).to({x:95,y:30.6},0).wait(1).to({x:96.5,y:30.8},0).wait(1).to({x:98,y:30.9},0).wait(1).to({x:99.5,y:31},0).wait(1).to({x:101,y:31.2},0).wait(1).to({x:102.5,y:31.3},0).wait(1).to({x:104,y:31.4},0).wait(1).to({x:105.5,y:31.6},0).wait(1).to({x:107,y:31.7},0).wait(1).to({x:108.5,y:31.8},0).wait(1).to({x:110,y:32},0).wait(1).to({x:111.5,y:32.1},0).wait(1).to({x:113,y:32.2},0).wait(1).to({x:114.5,y:32.4},0).wait(1).to({x:116,y:32.5},0).wait(1).to({x:117.5,y:32.6},0).wait(1).to({x:119,y:32.8},0).wait(1).to({x:120.5,y:32.9},0).wait(1).to({x:122,y:33.1},0).wait(1).to({x:123.5,y:33.2},0).wait(1).to({x:125,y:33.3},0).wait(1).to({x:126.5,y:33.5},0).wait(1).to({x:128,y:33.6},0).wait(1).to({x:129.5,y:33.7},0).wait(1).to({x:131,y:33.9},0).wait(1).to({x:132.5,y:34},0).wait(1).to({x:134,y:34.1},0).wait(1).to({x:135.5,y:34.3},0).wait(1).to({x:137,y:34.4},0).wait(1).to({x:138.5,y:34.5},0).wait(1).to({x:140,y:34.7},0).wait(1).to({x:141.5,y:34.8},0).wait(1).to({x:143,y:34.9},0).wait(1).to({x:144.5,y:35.1},0).wait(1).to({x:146,y:35.2},0).wait(1).to({x:147.5,y:35.3},0).wait(1).to({x:149,y:35.5},0).wait(1).to({x:150.5,y:35.6},0).wait(1).to({x:152,y:35.7},0).wait(1).to({x:153.5,y:35.9},0).wait(1).to({x:155,y:36},0).wait(1).to({x:156.5,y:36.1},0).wait(1).to({x:158,y:36.3},0).wait(1).to({x:159.5,y:36.4},0).wait(1).to({x:161,y:36.5},0).wait(1).to({x:162.5,y:36.7},0).wait(1).to({x:164,y:36.8},0).wait(1).to({x:165.5,y:37},0).wait(1).to({x:167,y:37.1},0).wait(1).to({x:168.5,y:37.2},0).wait(1).to({x:170,y:37.4},0).wait(1).to({x:171.5,y:37.5},0).wait(1).to({x:173,y:37.6},0).wait(1).to({x:174.5,y:37.8},0).wait(1).to({x:176,y:37.9},0).wait(1).to({x:177.5,y:38},0).wait(1).to({x:179,y:38.2},0).wait(1).to({x:180.5,y:38.3},0).wait(1).to({x:182,y:38.4},0).wait(1).to({x:183.5,y:38.6},0).wait(1).to({x:185,y:38.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,52.7);


(lib.SymWFTween1C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1C();
	this.instance.parent = this;
	this.instance.setTransform(6.5,25.4,1,1,0,0,0,6.5,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:8.3,y:25.6},0).wait(1).to({x:10.1,y:25.7},0).wait(1).to({x:11.9,y:25.9},0).wait(1).to({x:13.7,y:26},0).wait(1).to({x:15.5,y:26.2},0).wait(1).to({x:17.3,y:26.4},0).wait(1).to({x:19.1,y:26.5},0).wait(1).to({x:20.9,y:26.7},0).wait(1).to({x:22.7,y:26.9},0).wait(1).to({x:24.5,y:27},0).wait(1).to({x:26.3,y:27.2},0).wait(1).to({x:28.1,y:27.3},0).wait(1).to({x:29.9,y:27.5},0).wait(1).to({x:31.7,y:27.7},0).wait(1).to({x:33.5,y:27.8},0).wait(1).to({x:35.3,y:28},0).wait(1).to({x:37.2,y:28.1},0).wait(1).to({x:39,y:28.3},0).wait(1).to({x:40.8,y:28.5},0).wait(1).to({x:42.6,y:28.6},0).wait(1).to({x:44.4,y:28.8},0).wait(1).to({x:46.2,y:29},0).wait(1).to({x:48,y:29.1},0).wait(1).to({x:49.8,y:29.3},0).wait(1).to({x:51.6,y:29.4},0).wait(1).to({x:53.4,y:29.6},0).wait(1).to({x:55.2,y:29.8},0).wait(1).to({x:57,y:29.9},0).wait(1).to({x:58.8,y:30.1},0).wait(1).to({x:60.6,y:30.2},0).wait(1).to({x:62.4,y:30.4},0).wait(1).to({x:64.2,y:30.6},0).wait(1).to({x:66,y:30.7},0).wait(1).to({x:67.8,y:30.9},0).wait(1).to({x:69.6,y:31.1},0).wait(1).to({x:71.4,y:31.2},0).wait(1).to({x:73.2,y:31.4},0).wait(1).to({x:75,y:31.5},0).wait(1).to({x:76.8,y:31.7},0).wait(1).to({x:78.6,y:31.9},0).wait(1).to({x:80.4,y:32},0).wait(1).to({x:82.2,y:32.2},0).wait(1).to({x:84,y:32.3},0).wait(1).to({x:85.8,y:32.5},0).wait(1).to({x:87.6,y:32.7},0).wait(1).to({x:89.4,y:32.8},0).wait(1).to({x:91.2,y:33},0).wait(1).to({x:93,y:33.2},0).wait(1).to({x:94.8,y:33.3},0).wait(1).to({x:96.7,y:33.5},0).wait(1).to({x:98.5,y:33.6},0).wait(1).to({x:100.3,y:33.8},0).wait(1).to({x:102.1,y:34},0).wait(1).to({x:103.9,y:34.1},0).wait(1).to({x:105.7,y:34.3},0).wait(1).to({x:107.5,y:34.5},0).wait(1).to({x:109.3,y:34.6},0).wait(1).to({x:111.1,y:34.8},0).wait(1).to({x:112.9,y:34.9},0).wait(1).to({x:114.7,y:35.1},0).wait(1).to({x:116.5,y:35.3},0).wait(1).to({x:118.3,y:35.4},0).wait(1).to({x:120.1,y:35.6},0).wait(1).to({x:121.9,y:35.7},0).wait(1).to({x:123.7,y:35.9},0).wait(1).to({x:125.5,y:36.1},0).wait(1).to({x:127.3,y:36.2},0).wait(1).to({x:129.1,y:36.4},0).wait(1).to({x:130.9,y:36.6},0).wait(1).to({x:132.7,y:36.7},0).wait(1).to({x:134.5,y:36.9},0).wait(1).to({x:136.3,y:37},0).wait(1).to({x:138.1,y:37.2},0).wait(1).to({x:139.9,y:37.4},0).wait(1).to({x:141.7,y:37.5},0).wait(1).to({x:143.5,y:37.7},0).wait(1).to({x:145.3,y:37.8},0).wait(1).to({x:147.1,y:38},0).wait(1).to({x:148.9,y:38.2},0).wait(1).to({x:150.7,y:38.3},0).wait(1).to({x:152.5,y:38.5},0).wait(1).to({x:154.3,y:38.7},0).wait(1).to({x:156.2,y:38.8},0).wait(1).to({x:158,y:39},0).wait(1).to({x:159.8,y:39.1},0).wait(1).to({x:161.6,y:39.3},0).wait(1).to({x:163.4,y:39.5},0).wait(1).to({x:165.2,y:39.6},0).wait(1).to({x:167,y:39.8},0).wait(1).to({x:168.8,y:39.9},0).wait(1).to({x:170.6,y:40.1},0).wait(1).to({x:172.4,y:40.3},0).wait(1).to({x:174.2,y:40.4},0).wait(1).to({x:176,y:40.6},0).wait(1).to({x:177.8,y:40.8},0).wait(1).to({x:179.6,y:40.9},0).wait(1).to({x:181.4,y:41.1},0).wait(1).to({x:183.2,y:41.2},0).wait(1).to({x:185,y:41.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,58.1);


(lib.SymWFTween1B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1B();
	this.instance.parent = this;
	this.instance.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:8.8,y:31},0).wait(1).to({x:11,y:31.2},0).wait(1).to({x:13.3,y:31.4},0).wait(1).to({x:15.5,y:31.6},0).wait(1).to({x:17.8,y:31.8},0).wait(1).to({x:20.1,y:32},0).wait(1).to({x:22.3,y:32.2},0).wait(1).to({x:24.6,y:32.4},0).wait(1).to({x:26.8,y:32.6},0).wait(1).to({x:29.1,y:32.8},0).wait(1).to({x:31.4,y:33},0).wait(1).to({x:33.6,y:33.2},0).wait(1).to({x:35.9,y:33.4},0).wait(1).to({x:38.1,y:33.6},0).wait(1).to({x:40.4,y:33.8},0).wait(1).to({x:42.7,y:34},0).wait(1).to({x:44.9,y:34.2},0).wait(1).to({x:47.2,y:34.4},0).wait(1).to({x:49.4,y:34.6},0).wait(1).to({x:51.7,y:34.9},0).wait(1).to({x:53.9,y:35.1},0).wait(1).to({x:56.2,y:35.3},0).wait(1).to({x:58.5,y:35.5},0).wait(1).to({x:60.7,y:35.7},0).wait(1).to({x:63,y:35.9},0).wait(1).to({x:65.2,y:36.1},0).wait(1).to({x:67.5,y:36.3},0).wait(1).to({x:69.8,y:36.5},0).wait(1).to({x:72,y:36.7},0).wait(1).to({x:74.3,y:36.9},0).wait(1).to({x:76.5,y:37.1},0).wait(1).to({x:78.8,y:37.3},0).wait(1).to({x:81.1,y:37.5},0).wait(1).to({x:83.3,y:37.7},0).wait(1).to({x:85.6,y:37.9},0).wait(1).to({x:87.8,y:38.1},0).wait(1).to({x:90.1,y:38.3},0).wait(1).to({x:92.4,y:38.5},0).wait(1).to({x:94.6,y:38.7},0).wait(1).to({x:96.9,y:38.9},0).wait(1).to({x:99.1,y:39.1},0).wait(1).to({x:101.4,y:39.3},0).wait(1).to({x:103.7,y:39.5},0).wait(1).to({x:105.9,y:39.7},0).wait(1).to({x:108.2,y:39.9},0).wait(1).to({x:110.4,y:40.1},0).wait(1).to({x:112.7,y:40.3},0).wait(1).to({x:115,y:40.5},0).wait(1).to({x:117.2,y:40.7},0).wait(1).to({x:119.5,y:40.9},0).wait(1).to({x:121.7,y:41.1},0).wait(1).to({x:124,y:41.3},0).wait(1).to({x:126.3,y:41.5},0).wait(1).to({x:128.5,y:41.7},0).wait(1).to({x:130.8,y:41.9},0).wait(1).to({x:133,y:42.1},0).wait(1).to({x:135.3,y:42.3},0).wait(1).to({x:137.6,y:42.5},0).wait(1).to({x:139.8,y:42.7},0).wait(1).to({x:142.1,y:43},0).wait(1).to({x:144.3,y:43.2},0).wait(1).to({x:146.6,y:43.4},0).wait(1).to({x:148.8,y:43.6},0).wait(1).to({x:151.1,y:43.8},0).wait(1).to({x:153.4,y:44},0).wait(1).to({x:155.6,y:44.2},0).wait(1).to({x:157.9,y:44.4},0).wait(1).to({x:160.1,y:44.6},0).wait(1).to({x:162.4,y:44.8},0).wait(1).to({x:164.7,y:45},0).wait(1).to({x:166.9,y:45.2},0).wait(1).to({x:169.2,y:45.4},0).wait(1).to({x:171.4,y:45.6},0).wait(1).to({x:173.7,y:45.8},0).wait(1).to({x:176,y:46},0).wait(1).to({x:178.2,y:46.2},0).wait(1).to({x:180.5,y:46.4},0).wait(1).to({x:182.7,y:46.6},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,63.5);


(lib.SymWFTween1A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymWaterFlow1A();
	this.instance.parent = this;
	this.instance.setTransform(6.5,30.8,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:9.5,y:31.1},0).wait(1).to({x:12.6,y:31.3},0).wait(1).to({x:15.6,y:31.6},0).wait(1).to({x:18.6,y:31.9},0).wait(1).to({x:21.6,y:32.2},0).wait(1).to({x:24.7,y:32.4},0).wait(1).to({x:27.7,y:32.7},0).wait(1).to({x:30.7,y:33},0).wait(1).to({x:33.7,y:33.2},0).wait(1).to({x:36.8,y:33.5},0).wait(1).to({x:39.8,y:33.8},0).wait(1).to({x:42.8,y:34.1},0).wait(1).to({x:45.8,y:34.3},0).wait(1).to({x:48.9,y:34.6},0).wait(1).to({x:51.9,y:34.9},0).wait(1).to({x:54.9,y:35.1},0).wait(1).to({x:57.9,y:35.4},0).wait(1).to({x:61,y:35.7},0).wait(1).to({x:64,y:36},0).wait(1).to({x:67,y:36.2},0).wait(1).to({x:70,y:36.5},0).wait(1).to({x:73.1,y:36.8},0).wait(1).to({x:76.1,y:37},0).wait(1).to({x:79.1,y:37.3},0).wait(1).to({x:82.1,y:37.6},0).wait(1).to({x:85.2,y:37.9},0).wait(1).to({x:88.2,y:38.1},0).wait(1).to({x:91.2,y:38.4},0).wait(1).to({x:94.2,y:38.7},0).wait(1).to({x:97.3,y:38.9},0).wait(1).to({x:100.3,y:39.2},0).wait(1).to({x:103.3,y:39.5},0).wait(1).to({x:106.3,y:39.7},0).wait(1).to({x:109.4,y:40},0).wait(1).to({x:112.4,y:40.3},0).wait(1).to({x:115.4,y:40.6},0).wait(1).to({x:118.4,y:40.8},0).wait(1).to({x:121.5,y:41.1},0).wait(1).to({x:124.5,y:41.4},0).wait(1).to({x:127.5,y:41.6},0).wait(1).to({x:130.5,y:41.9},0).wait(1).to({x:133.6,y:42.2},0).wait(1).to({x:136.6,y:42.5},0).wait(1).to({x:139.6,y:42.7},0).wait(1).to({x:142.6,y:43},0).wait(1).to({x:145.7,y:43.3},0).wait(1).to({x:148.7,y:43.5},0).wait(1).to({x:151.7,y:43.8},0).wait(1).to({x:154.7,y:44.1},0).wait(1).to({x:157.8,y:44.4},0).wait(1).to({x:160.8,y:44.6},0).wait(1).to({x:163.8,y:44.9},0).wait(1).to({x:166.8,y:45.2},0).wait(1).to({x:169.9,y:45.4},0).wait(1).to({x:172.9,y:45.7},0).wait(1).to({x:175.9,y:46},0).wait(1).to({x:178.9,y:46.3},0).wait(1).to({x:182,y:46.5},0).wait(1).to({x:185,y:46.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-3.7,20.4,68.9);


(lib.SymTree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.decidtree();
	this.instance.parent = this;
	this.instance.setTransform(46,48.5,1,1,0,0,0,46,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,97);


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


(lib.SymSmallTree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smalldecidtree();
	this.instance.parent = this;
	this.instance.setTransform(35.5,37.5,1,1,0,0,0,35.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,75);


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


(lib.SymFourTrees = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tree9 = new lib.SymSmallTree();
	this.tree9.parent = this;
	this.tree9.setTransform(617.5,121.5,1,1,0,0,0,35.5,37.5);

	this.tree7 = new lib.SymTree();
	this.tree7.parent = this;
	this.tree7.setTransform(443,90,1,1,0,0,0,46,48.5);

	this.tree5 = new lib.SymSmallTree();
	this.tree5.parent = this;
	this.tree5.setTransform(232.5,81,1,1,0,0,0,35.5,37.5);

	this.tree3 = new lib.SymTree();
	this.tree3.parent = this;
	this.tree3.setTransform(46,48.5,1,1,0,0,0,46,48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tree3},{t:this.tree5},{t:this.tree7},{t:this.tree9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653,159);


(lib.SymArrow5TweenVS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow5();
	this.instance.parent = this;
	this.instance.setTransform(61,6.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:64.2,y:6.8},0).wait(1).to({x:67.3,y:7.2},0).wait(1).to({x:70.5,y:7.5},0).wait(1).to({x:73.6,y:7.9},0).wait(1).to({x:76.8,y:8.2},0).wait(1).to({x:79.9,y:8.5},0).wait(1).to({x:83.1,y:8.9},0).wait(1).to({x:86.2,y:9.2},0).wait(1).to({x:89.4,y:9.6},0).wait(1).to({x:92.5,y:9.9},0).wait(1).to({x:95.7,y:10.2},0).wait(1).to({x:98.8,y:10.6},0).wait(1).to({x:102,y:10.9},0).wait(1).to({x:105.1,y:11.2},0).wait(1).to({x:108.3,y:11.6},0).wait(1).to({x:111.4,y:11.9},0).wait(1).to({x:114.6,y:12.3},0).wait(1).to({x:117.7,y:12.6},0).wait(1).to({x:120.9,y:12.9},0).wait(1).to({x:124.1,y:13.3},0).wait(1).to({x:127.2,y:13.6},0).wait(1).to({x:130.4,y:14},0).wait(1).to({x:133.5,y:14.3},0).wait(1).to({x:136.7,y:14.6},0).wait(1).to({x:139.8,y:15},0).wait(1).to({x:143,y:15.3},0).wait(1).to({x:146.1,y:15.7},0).wait(1).to({x:149.3,y:16},0).wait(1).to({x:152.4,y:16.3},0).wait(1).to({x:155.6,y:16.7},0).wait(1).to({x:158.7,y:17},0).wait(1).to({x:161.9,y:17.3},0).wait(1).to({x:165,y:17.7},0).wait(1).to({x:168.2,y:18},0).wait(1).to({x:171.3,y:18.4},0).wait(1).to({x:174.5,y:18.7},0).wait(1).to({x:177.6,y:19},0).wait(1).to({x:180.8,y:19.4},0).wait(1).to({x:183.9,y:19.7},0).wait(1).to({x:187.1,y:20.1},0).wait(1).to({x:190.3,y:20.4},0).wait(1).to({x:193.4,y:20.7},0).wait(1).to({x:196.6,y:21.1},0).wait(1).to({x:199.7,y:21.4},0).wait(1).to({x:202.9,y:21.8},0).wait(1).to({x:206,y:22.1},0).wait(1).to({x:209.2,y:22.4},0).wait(1).to({x:212.3,y:22.8},0).wait(1).to({x:215.5,y:23.1},0).wait(1).to({x:218.6,y:23.4},0).wait(1).to({x:221.8,y:23.8},0).wait(1).to({x:224.9,y:24.1},0).wait(1).to({x:228.1,y:24.5},0).wait(1).to({x:231.2,y:24.8},0).wait(1).to({x:234.4,y:25.1},0).wait(1).to({x:237.5,y:25.5},0).wait(1).to({x:240.7,y:25.8},0).wait(1).to({x:243.8,y:26.2},0).wait(1).to({x:247,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,125.3,16.3);


(lib.SymArrow5TweenP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow5();
	this.instance.parent = this;
	this.instance.setTransform(61,6.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:66.5,y:7.1},0).wait(1).to({x:71.9,y:7.7},0).wait(1).to({x:77.4,y:8.3},0).wait(1).to({x:82.9,y:8.9},0).wait(1).to({x:88.4,y:9.4},0).wait(1).to({x:93.8,y:10},0).wait(1).to({x:99.3,y:10.6},0).wait(1).to({x:104.8,y:11.2},0).wait(1).to({x:110.2,y:11.8},0).wait(1).to({x:115.7,y:12.4},0).wait(1).to({x:121.2,y:13},0).wait(1).to({x:126.6,y:13.6},0).wait(1).to({x:132.1,y:14.1},0).wait(1).to({x:137.6,y:14.7},0).wait(1).to({x:143.1,y:15.3},0).wait(1).to({x:148.5,y:15.9},0).wait(1).to({x:154,y:16.5},0).wait(1).to({x:159.5,y:17.1},0).wait(1).to({x:164.9,y:17.7},0).wait(1).to({x:170.4,y:18.3},0).wait(1).to({x:175.9,y:18.9},0).wait(1).to({x:181.4,y:19.4},0).wait(1).to({x:186.8,y:20},0).wait(1).to({x:192.3,y:20.6},0).wait(1).to({x:197.8,y:21.2},0).wait(1).to({x:203.2,y:21.8},0).wait(1).to({x:208.7,y:22.4},0).wait(1).to({x:214.2,y:23},0).wait(1).to({x:219.6,y:23.6},0).wait(1).to({x:225.1,y:24.1},0).wait(1).to({x:230.6,y:24.7},0).wait(1).to({x:236.1,y:25.3},0).wait(1).to({x:241.5,y:25.9},0).wait(1).to({x:247,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-1.6,125.3,16.3);


(lib.SymArrow4TweenVS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow4();
	this.instance.parent = this;
	this.instance.setTransform(61,6.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:64.4,y:6.9},0).wait(1).to({x:67.9,y:7.2},0).wait(1).to({x:71.3,y:7.6},0).wait(1).to({x:74.8,y:8},0).wait(1).to({x:78.2,y:8.4},0).wait(1).to({x:81.7,y:8.7},0).wait(1).to({x:85.1,y:9.1},0).wait(1).to({x:88.6,y:9.5},0).wait(1).to({x:92,y:9.8},0).wait(1).to({x:95.4,y:10.2},0).wait(1).to({x:98.9,y:10.6},0).wait(1).to({x:102.3,y:10.9},0).wait(1).to({x:105.8,y:11.3},0).wait(1).to({x:109.2,y:11.7},0).wait(1).to({x:112.7,y:12.1},0).wait(1).to({x:116.1,y:12.4},0).wait(1).to({x:119.6,y:12.8},0).wait(1).to({x:123,y:13.2},0).wait(1).to({x:126.4,y:13.5},0).wait(1).to({x:129.9,y:13.9},0).wait(1).to({x:133.3,y:14.3},0).wait(1).to({x:136.8,y:14.6},0).wait(1).to({x:140.2,y:15},0).wait(1).to({x:143.7,y:15.4},0).wait(1).to({x:147.1,y:15.8},0).wait(1).to({x:150.6,y:16.1},0).wait(1).to({x:154,y:16.5},0).wait(1).to({x:157.4,y:16.9},0).wait(1).to({x:160.9,y:17.2},0).wait(1).to({x:164.3,y:17.6},0).wait(1).to({x:167.8,y:18},0).wait(1).to({x:171.2,y:18.4},0).wait(1).to({x:174.7,y:18.7},0).wait(1).to({x:178.1,y:19.1},0).wait(1).to({x:181.6,y:19.5},0).wait(1).to({x:185,y:19.8},0).wait(1).to({x:188.4,y:20.2},0).wait(1).to({x:191.9,y:20.6},0).wait(1).to({x:195.3,y:20.9},0).wait(1).to({x:198.8,y:21.3},0).wait(1).to({x:202.2,y:21.7},0).wait(1).to({x:205.7,y:22.1},0).wait(1).to({x:209.1,y:22.4},0).wait(1).to({x:212.6,y:22.8},0).wait(1).to({x:216,y:23.2},0).wait(1).to({x:219.4,y:23.5},0).wait(1).to({x:222.9,y:23.9},0).wait(1).to({x:226.3,y:24.3},0).wait(1).to({x:229.8,y:24.6},0).wait(1).to({x:233.2,y:25},0).wait(1).to({x:236.7,y:25.4},0).wait(1).to({x:240.1,y:25.8},0).wait(1).to({x:243.6,y:26.1},0).wait(1).to({x:247,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.6,129.3,20.3);


(lib.SymArrow4TweenP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow4();
	this.instance.parent = this;
	this.instance.setTransform(61,6.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:66.5,y:7.1},0).wait(1).to({x:71.9,y:7.7},0).wait(1).to({x:77.4,y:8.3},0).wait(1).to({x:82.9,y:8.9},0).wait(1).to({x:88.4,y:9.4},0).wait(1).to({x:93.8,y:10},0).wait(1).to({x:99.3,y:10.6},0).wait(1).to({x:104.8,y:11.2},0).wait(1).to({x:110.2,y:11.8},0).wait(1).to({x:115.7,y:12.4},0).wait(1).to({x:121.2,y:13},0).wait(1).to({x:126.6,y:13.6},0).wait(1).to({x:132.1,y:14.1},0).wait(1).to({x:137.6,y:14.7},0).wait(1).to({x:143.1,y:15.3},0).wait(1).to({x:148.5,y:15.9},0).wait(1).to({x:154,y:16.5},0).wait(1).to({x:159.5,y:17.1},0).wait(1).to({x:164.9,y:17.7},0).wait(1).to({x:170.4,y:18.3},0).wait(1).to({x:175.9,y:18.9},0).wait(1).to({x:181.4,y:19.4},0).wait(1).to({x:186.8,y:20},0).wait(1).to({x:192.3,y:20.6},0).wait(1).to({x:197.8,y:21.2},0).wait(1).to({x:203.2,y:21.8},0).wait(1).to({x:208.7,y:22.4},0).wait(1).to({x:214.2,y:23},0).wait(1).to({x:219.6,y:23.6},0).wait(1).to({x:225.1,y:24.1},0).wait(1).to({x:230.6,y:24.7},0).wait(1).to({x:236.1,y:25.3},0).wait(1).to({x:241.5,y:25.9},0).wait(1).to({x:247,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.6,129.3,20.3);


(lib.SymArrow3TweenVS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow3();
	this.instance.parent = this;
	this.instance.setTransform(61,6.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:64.7,y:6.9},0).wait(1).to({x:68.3,y:7.3},0).wait(1).to({x:72,y:7.7},0).wait(1).to({x:75.7,y:8.1},0).wait(1).to({x:79.4,y:8.5},0).wait(1).to({x:83,y:8.9},0).wait(1).to({x:86.7,y:9.4},0).wait(1).to({x:90.4,y:9.8},0).wait(1).to({x:94.1,y:10.2},0).wait(1).to({x:97.7,y:10.6},0).wait(1).to({x:101.4,y:11},0).wait(1).to({x:105.1,y:11.4},0).wait(1).to({x:108.8,y:11.8},0).wait(1).to({x:112.4,y:12.2},0).wait(1).to({x:116.1,y:12.6},0).wait(1).to({x:119.8,y:13},0).wait(1).to({x:123.4,y:13.4},0).wait(1).to({x:127.1,y:13.8},0).wait(1).to({x:130.8,y:14.3},0).wait(1).to({x:134.5,y:14.7},0).wait(1).to({x:138.1,y:15.1},0).wait(1).to({x:141.8,y:15.5},0).wait(1).to({x:145.5,y:15.9},0).wait(1).to({x:149.2,y:16.3},0).wait(1).to({x:152.8,y:16.7},0).wait(1).to({x:156.5,y:17.1},0).wait(1).to({x:160.2,y:17.5},0).wait(1).to({x:163.9,y:17.9},0).wait(1).to({x:167.5,y:18.3},0).wait(1).to({x:171.2,y:18.7},0).wait(1).to({x:174.9,y:19.2},0).wait(1).to({x:178.6,y:19.6},0).wait(1).to({x:182.2,y:20},0).wait(1).to({x:185.9,y:20.4},0).wait(1).to({x:189.6,y:20.8},0).wait(1).to({x:193.2,y:21.2},0).wait(1).to({x:196.9,y:21.6},0).wait(1).to({x:200.6,y:22},0).wait(1).to({x:204.3,y:22.4},0).wait(1).to({x:207.9,y:22.8},0).wait(1).to({x:211.6,y:23.2},0).wait(1).to({x:215.3,y:23.6},0).wait(1).to({x:219,y:24.1},0).wait(1).to({x:222.6,y:24.5},0).wait(1).to({x:226.3,y:24.9},0).wait(1).to({x:230,y:25.3},0).wait(1).to({x:233.7,y:25.7},0).wait(1).to({x:237.3,y:26.1},0).wait(1).to({x:241,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-5.1,132.3,23.3);


(lib.SymArrow3TweenP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow3();
	this.instance.parent = this;
	this.instance.setTransform(61,6.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:66.5,y:7.1},0).wait(1).to({x:71.9,y:7.7},0).wait(1).to({x:77.4,y:8.3},0).wait(1).to({x:82.9,y:8.9},0).wait(1).to({x:88.4,y:9.4},0).wait(1).to({x:93.8,y:10},0).wait(1).to({x:99.3,y:10.6},0).wait(1).to({x:104.8,y:11.2},0).wait(1).to({x:110.2,y:11.8},0).wait(1).to({x:115.7,y:12.4},0).wait(1).to({x:121.2,y:13},0).wait(1).to({x:126.6,y:13.6},0).wait(1).to({x:132.1,y:14.1},0).wait(1).to({x:137.6,y:14.7},0).wait(1).to({x:143.1,y:15.3},0).wait(1).to({x:148.5,y:15.9},0).wait(1).to({x:154,y:16.5},0).wait(1).to({x:159.5,y:17.1},0).wait(1).to({x:164.9,y:17.7},0).wait(1).to({x:170.4,y:18.3},0).wait(1).to({x:175.9,y:18.9},0).wait(1).to({x:181.4,y:19.4},0).wait(1).to({x:186.8,y:20},0).wait(1).to({x:192.3,y:20.6},0).wait(1).to({x:197.8,y:21.2},0).wait(1).to({x:203.2,y:21.8},0).wait(1).to({x:208.7,y:22.4},0).wait(1).to({x:214.2,y:23},0).wait(1).to({x:219.6,y:23.6},0).wait(1).to({x:225.1,y:24.1},0).wait(1).to({x:230.6,y:24.7},0).wait(1).to({x:236.1,y:25.3},0).wait(1).to({x:241.5,y:25.9},0).wait(1).to({x:247,y:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-5.1,132.3,23.3);


(lib.SymArrow2TweenVS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow2();
	this.instance.parent = this;
	this.instance.setTransform(61,7.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:65.2,y:8},0).wait(1).to({x:69.5,y:8.4},0).wait(1).to({x:73.7,y:8.9},0).wait(1).to({x:77.9,y:9.3},0).wait(1).to({x:82.1,y:9.8},0).wait(1).to({x:86.4,y:10.2},0).wait(1).to({x:90.6,y:10.7},0).wait(1).to({x:94.8,y:11.1},0).wait(1).to({x:99,y:11.6},0).wait(1).to({x:103.3,y:12},0).wait(1).to({x:107.5,y:12.5},0).wait(1).to({x:111.7,y:13},0).wait(1).to({x:116,y:13.4},0).wait(1).to({x:120.2,y:13.9},0).wait(1).to({x:124.4,y:14.3},0).wait(1).to({x:128.6,y:14.8},0).wait(1).to({x:132.9,y:15.2},0).wait(1).to({x:137.1,y:15.7},0).wait(1).to({x:141.3,y:16.1},0).wait(1).to({x:145.5,y:16.6},0).wait(1).to({x:149.8,y:17},0).wait(1).to({x:154,y:17.5},0).wait(1).to({x:158.2,y:18},0).wait(1).to({x:162.5,y:18.4},0).wait(1).to({x:166.7,y:18.9},0).wait(1).to({x:170.9,y:19.3},0).wait(1).to({x:175.1,y:19.8},0).wait(1).to({x:179.4,y:20.2},0).wait(1).to({x:183.6,y:20.7},0).wait(1).to({x:187.8,y:21.1},0).wait(1).to({x:192,y:21.6},0).wait(1).to({x:196.3,y:22},0).wait(1).to({x:200.5,y:22.5},0).wait(1).to({x:204.7,y:23},0).wait(1).to({x:209,y:23.4},0).wait(1).to({x:213.2,y:23.9},0).wait(1).to({x:217.4,y:24.3},0).wait(1).to({x:221.6,y:24.8},0).wait(1).to({x:225.9,y:25.2},0).wait(1).to({x:230.1,y:25.7},0).wait(1).to({x:234.3,y:26.1},0).wait(1).to({x:238.5,y:26.6},0).wait(1).to({x:242.8,y:27},0).wait(1).to({x:247,y:27.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-5.5,135,26);


(lib.SymArrow2TweenP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow2();
	this.instance.parent = this;
	this.instance.setTransform(61,7.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:66.5,y:8.1},0).wait(1).to({x:71.9,y:8.7},0).wait(1).to({x:77.4,y:9.3},0).wait(1).to({x:82.9,y:9.9},0).wait(1).to({x:88.4,y:10.4},0).wait(1).to({x:93.8,y:11},0).wait(1).to({x:99.3,y:11.6},0).wait(1).to({x:104.8,y:12.2},0).wait(1).to({x:110.2,y:12.8},0).wait(1).to({x:115.7,y:13.4},0).wait(1).to({x:121.2,y:14},0).wait(1).to({x:126.6,y:14.6},0).wait(1).to({x:132.1,y:15.1},0).wait(1).to({x:137.6,y:15.7},0).wait(1).to({x:143.1,y:16.3},0).wait(1).to({x:148.5,y:16.9},0).wait(1).to({x:154,y:17.5},0).wait(1).to({x:159.5,y:18.1},0).wait(1).to({x:164.9,y:18.7},0).wait(1).to({x:170.4,y:19.3},0).wait(1).to({x:175.9,y:19.9},0).wait(1).to({x:181.4,y:20.4},0).wait(1).to({x:186.8,y:21},0).wait(1).to({x:192.3,y:21.6},0).wait(1).to({x:197.8,y:22.2},0).wait(1).to({x:203.2,y:22.8},0).wait(1).to({x:208.7,y:23.4},0).wait(1).to({x:214.2,y:24},0).wait(1).to({x:219.6,y:24.6},0).wait(1).to({x:225.1,y:25.1},0).wait(1).to({x:230.6,y:25.7},0).wait(1).to({x:236.1,y:26.3},0).wait(1).to({x:241.5,y:26.9},0).wait(1).to({x:247,y:27.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-5.5,135,26);


(lib.SymArrow1TweenVS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow1();
	this.instance.parent = this;
	this.instance.setTransform(40,4.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:44.8,y:5},0).wait(1).to({x:49.5,y:5.6},0).wait(1).to({x:54.3,y:6.1},0).wait(1).to({x:59.1,y:6.7},0).wait(1).to({x:63.8,y:7.2},0).wait(1).to({x:68.6,y:7.7},0).wait(1).to({x:73.4,y:8.3},0).wait(1).to({x:78.2,y:8.8},0).wait(1).to({x:82.9,y:9.3},0).wait(1).to({x:87.7,y:9.9},0).wait(1).to({x:92.5,y:10.4},0).wait(1).to({x:97.2,y:11},0).wait(1).to({x:102,y:11.5},0).wait(1).to({x:106.8,y:12},0).wait(1).to({x:111.5,y:12.6},0).wait(1).to({x:116.3,y:13.1},0).wait(1).to({x:121.1,y:13.7},0).wait(1).to({x:125.8,y:14.2},0).wait(1).to({x:130.6,y:14.7},0).wait(1).to({x:135.4,y:15.3},0).wait(1).to({x:140.2,y:15.8},0).wait(1).to({x:144.9,y:16.3},0).wait(1).to({x:149.7,y:16.9},0).wait(1).to({x:154.5,y:17.4},0).wait(1).to({x:159.2,y:18},0).wait(1).to({x:164,y:18.5},0).wait(1).to({x:168.8,y:19},0).wait(1).to({x:173.5,y:19.6},0).wait(1).to({x:178.3,y:20.1},0).wait(1).to({x:183.1,y:20.7},0).wait(1).to({x:187.8,y:21.2},0).wait(1).to({x:192.6,y:21.7},0).wait(1).to({x:197.4,y:22.3},0).wait(1).to({x:202.2,y:22.8},0).wait(1).to({x:206.9,y:23.3},0).wait(1).to({x:211.7,y:23.9},0).wait(1).to({x:216.5,y:24.4},0).wait(1).to({x:221.2,y:25},0).wait(1).to({x:226,y:25.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-10,138,29);


(lib.SymArrow1TweenP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymRunoffArrow1();
	this.instance.parent = this;
	this.instance.setTransform(40,4.5,1,1,0,0,0,61,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:45.5,y:5.1},0).wait(1).to({x:50.9,y:5.7},0).wait(1).to({x:56.4,y:6.4},0).wait(1).to({x:61.9,y:7},0).wait(1).to({x:67.4,y:7.6},0).wait(1).to({x:72.8,y:8.2},0).wait(1).to({x:78.3,y:8.8},0).wait(1).to({x:83.8,y:9.4},0).wait(1).to({x:89.2,y:10.1},0).wait(1).to({x:94.7,y:10.7},0).wait(1).to({x:100.2,y:11.3},0).wait(1).to({x:105.6,y:11.9},0).wait(1).to({x:111.1,y:12.5},0).wait(1).to({x:116.6,y:13.1},0).wait(1).to({x:122.1,y:13.8},0).wait(1).to({x:127.5,y:14.4},0).wait(1).to({x:133,y:15},0).wait(1).to({x:138.5,y:15.6},0).wait(1).to({x:143.9,y:16.2},0).wait(1).to({x:149.4,y:16.9},0).wait(1).to({x:154.9,y:17.5},0).wait(1).to({x:160.4,y:18.1},0).wait(1).to({x:165.8,y:18.7},0).wait(1).to({x:171.3,y:19.3},0).wait(1).to({x:176.8,y:19.9},0).wait(1).to({x:182.2,y:20.6},0).wait(1).to({x:187.7,y:21.2},0).wait(1).to({x:193.2,y:21.8},0).wait(1).to({x:198.6,y:22.4},0).wait(1).to({x:204.1,y:23},0).wait(1).to({x:209.6,y:23.6},0).wait(1).to({x:215.1,y:24.3},0).wait(1).to({x:220.5,y:24.9},0).wait(1).to({x:226,y:25.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-10,138,29);


(lib.SymArrowRchgTwn12ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg12();
	this.instance.parent = this;
	this.instance.setTransform(1.5,4,1,1,0,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:4.1},0).wait(1).to({x:1.6},0).wait(1).to({y:4.2},0).wait(1).to({y:4.3},0).wait(2).to({x:1.7,y:4.4},0).wait(1).to({y:4.5},0).wait(2).to({x:1.8,y:4.6},0).wait(1).to({y:4.7},0).wait(2).to({y:4.8},0).wait(1).to({x:1.9,y:4.9},0).wait(2).to({y:5},0).wait(1).to({x:2,y:5.1},0).wait(2).to({y:5.2},0).wait(1).to({y:5.3},0).wait(1).to({x:2.1},0).wait(1).to({y:5.4},0).wait(1).to({y:5.5},0).wait(1).to({x:2.2},0).wait(1).to({y:5.6},0).wait(1).to({y:5.7},0).wait(2).to({x:2.3,y:5.8},0).wait(1).to({y:5.9},0).wait(2).to({x:2.4,y:6},0).wait(1).to({y:6.1},0).wait(2).to({y:6.2},0).wait(1).to({x:2.5,y:6.3},0).wait(2).to({y:6.4},0).wait(1).to({x:2.6,y:6.5},0).wait(2).to({y:6.6},0).wait(1).to({y:6.7},0).wait(1).to({x:2.7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.9},0).wait(1).to({x:2.8},0).wait(1).to({y:7},0).wait(1).to({y:7.1},0).wait(2).to({x:2.9,y:7.2},0).wait(1).to({y:7.3},0).wait(2).to({x:3,y:7.4},0).wait(1).to({y:7.5},0).wait(1).to({y:7.6},0).wait(1).to({x:3.1},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(2).to({x:3.2,y:7.9},0).wait(1).to({y:8},0).wait(2).to({x:3.3,y:8.1},0).wait(1).to({y:8.2},0).wait(2).to({y:8.3},0).wait(1).to({x:3.4,y:8.4},0).wait(2).to({y:8.5},0).wait(1).to({x:3.5,y:8.6},0).wait(2).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({x:3.6},0).wait(1).to({y:8.9},0).wait(1).to({y:9},0).wait(1).to({x:3.7},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(2).to({x:3.8,y:9.3},0).wait(1).to({y:9.4},0).wait(2).to({x:3.9,y:9.5},0).wait(1).to({y:9.6},0).wait(2).to({y:9.7},0).wait(1).to({x:4,y:9.8},0).wait(2).to({y:9.9},0).wait(1).to({x:4.1,y:10},0).wait(2).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({x:4.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({x:4.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(2).to({x:4.4,y:10.7},0).wait(1).to({y:10.8},0).wait(2).to({x:4.5,y:10.9},0).wait(1).to({y:11},0).wait(2).to({y:11.1},0).wait(1).to({x:4.6,y:11.2},0).wait(2).to({y:11.3},0).wait(1).to({x:4.7,y:11.4},0).wait(2).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({x:4.8},0).wait(1).to({y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({x:4.9},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(2).to({x:5,y:12.1},0).wait(1).to({y:12.2},0).wait(2).to({x:5.1,y:12.3},0).wait(1).to({y:12.4},0).wait(2).to({y:12.5},0).wait(1).to({x:5.2,y:12.6},0).wait(2).to({y:12.7},0).wait(1).to({x:5.3,y:12.8},0).wait(2).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({x:5.4},0).wait(1).to({y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({x:5.5},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(2).to({x:5.6,y:13.5},0).wait(1).to({y:13.6},0).wait(2).to({x:5.7,y:13.7},0).wait(1).to({y:13.8},0).wait(2).to({y:13.9},0).wait(1).to({x:5.8,y:14},0).wait(2).to({y:14.1},0).wait(1).to({x:5.9,y:14.2},0).wait(2).to({y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({x:6},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({x:6.1,y:14.7},0).wait(2).to({y:14.8},0).wait(1).to({x:6.2,y:14.9},0).wait(2).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({x:6.3},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({x:6.4},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(2).to({x:6.5,y:15.6},0).wait(1).to({y:15.7},0).wait(2).to({x:6.6,y:15.8},0).wait(1).to({y:15.9},0).wait(2).to({y:16},0).wait(1).to({x:6.7,y:16.1},0).wait(2).to({y:16.2},0).wait(1).to({x:6.8,y:16.3},0).wait(2).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({x:6.9},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({x:7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(2).to({x:7.1,y:17},0).wait(1).to({y:17.1},0).wait(2).to({x:7.2,y:17.2},0).wait(1).to({y:17.3},0).wait(2).to({y:17.4},0).wait(1).to({x:7.3,y:17.5},0).wait(2).to({y:17.6},0).wait(1).to({x:7.4,y:17.7},0).wait(2).to({y:17.8},0).wait(1).to({y:17.9},0).wait(1).to({x:7.5},0).wait(1).to({y:18},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,13);


(lib.SymArrowRchgTwn11ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,5.5,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:5.6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.9},0).wait(1).to({y:6},0).wait(1).to({y:6.1},0).wait(1).to({x:0.6,y:6.2},0).wait(1).to({y:6.3},0).wait(1).to({y:6.5},0).wait(1).to({y:6.6},0).wait(1).to({y:6.7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.9},0).wait(1).to({y:7.1},0).wait(1).to({y:7.2},0).wait(1).to({y:7.3},0).wait(1).to({x:0.7,y:7.4},0).wait(1).to({y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({y:7.9},0).wait(1).to({y:8},0).wait(1).to({y:8.1},0).wait(1).to({y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({y:8.6},0).wait(1).to({x:0.8,y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({x:0.9,y:9.9},0).wait(1).to({y:10},0).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({x:1,y:11.2},0).wait(1).to({y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({x:1.1,y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.5},0).wait(1).to({x:1.2,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({x:1.3,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({x:1.4,y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({x:1.5,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.8},0).wait(1).to({y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({x:1.6,y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({y:19.4},0).wait(1).to({y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({x:1.7,y:20},0).wait(1).to({y:20.1},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.7},0).wait(1).to({y:20.8},0).wait(1).to({y:20.9},0).wait(1).to({y:21.1},0).wait(1).to({x:1.8,y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.4},0).wait(1).to({y:21.5},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:21.9},0).wait(1).to({y:22},0).wait(1).to({y:22.1},0).wait(1).to({y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({x:1.9,y:22.5},0).wait(1).to({y:22.6},0).wait(1).to({y:22.7},0).wait(1).to({y:22.8},0).wait(1).to({y:23},0).wait(1).to({y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({y:23.3},0).wait(1).to({y:23.4},0).wait(1).to({y:23.6},0).wait(1).to({x:2,y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({y:23.9},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({y:24.3},0).wait(1).to({y:24.4},0).wait(1).to({y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({x:2.1,y:24.9},0).wait(1).to({y:25},0).wait(1).to({y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.7},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({y:26.1},0).wait(1).to({x:2.2,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({y:26.8},0).wait(1).to({y:26.9},0).wait(1).to({y:27},0).wait(1).to({y:27.2},0).wait(1).to({y:27.3},0).wait(1).to({x:2.3,y:27.4},0).wait(1).to({y:27.5},0).wait(1).to({y:27.6},0).wait(1).to({y:27.7},0).wait(1).to({y:27.9},0).wait(1).to({y:28},0).wait(1).to({y:28.1},0).wait(1).to({y:28.2},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({y:28.6},0).wait(1).to({x:2.4,y:28.7},0).wait(1).to({y:28.8},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.2},0).wait(1).to({y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({x:2.5,y:29.9},0).wait(1).to({y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({y:30.4},0).wait(1).to({y:30.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,16);


(lib.SymArrowRchgTwn10ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg10();
	this.instance.parent = this;
	this.instance.setTransform(2,7,1,1,0,0,0,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.1},0).wait(1).to({x:2.1,y:7.3},0).wait(1).to({y:7.4},0).wait(1).to({x:2.2,y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({x:2.3,y:7.9},0).wait(1).to({y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({x:2.4,y:8.3},0).wait(1).to({y:8.5},0).wait(1).to({x:2.5,y:8.6},0).wait(1).to({y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({x:2.6,y:9},0).wait(1).to({y:9.1},0).wait(1).to({x:2.7,y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({x:2.8,y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:2.9,y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({x:3,y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({x:3.1,y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({x:3.2,y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({x:3.3,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({x:3.4,y:11.8},0).wait(1).to({y:12},0).wait(1).to({x:3.5,y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({x:3.6,y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({x:3.7,y:12.9},0).wait(1).to({y:13},0).wait(1).to({x:3.8,y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({x:3.9,y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:4,y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({x:4.1,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.5},0).wait(1).to({x:4.2,y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({x:4.3,y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.2},0).wait(1).to({x:4.4,y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({x:4.5,y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({x:4.6,y:16},0).wait(1).to({y:16.1},0).wait(1).to({y:16.2},0).wait(1).to({x:4.7,y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({x:4.8,y:16.6},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({x:4.9,y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({x:5,y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({x:5.1,y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({y:18},0).wait(1).to({x:5.2,y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({x:5.3,y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({y:18.7},0).wait(1).to({x:5.4,y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({x:5.5,y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({x:5.6,y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({x:5.7,y:19.9},0).wait(1).to({y:20},0).wait(1).to({x:5.8,y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({x:5.9,y:20.5},0).wait(1).to({y:20.7},0).wait(1).to({y:20.8},0).wait(1).to({x:6,y:20.9},0).wait(1).to({y:21.1},0).wait(1).to({x:6.1,y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({x:6.2,y:21.6},0).wait(1).to({y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:6.3,y:22},0).wait(1).to({y:22.1},0).wait(1).to({x:6.4,y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({y:22.5},0).wait(1).to({x:6.5,y:22.7},0).wait(1).to({y:22.8},0).wait(1).to({x:6.6,y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({x:6.7,y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({y:23.6},0).wait(1).to({x:6.8,y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({x:6.9,y:24},0).wait(1).to({y:24.1},0).wait(1).to({y:24.3},0).wait(1).to({x:7,y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({x:7.1,y:24.7},0).wait(1).to({y:24.8},0).wait(1).to({y:25},0).wait(1).to({x:7.2,y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({x:7.3,y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({x:7.4,y:25.8},0).wait(1).to({y:25.9},0).wait(1).to({y:26},0).wait(1).to({x:7.5,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({x:7.6,y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({x:7.7,y:26.8},0).wait(1).to({y:27},0).wait(1).to({y:27.1},0).wait(1).to({x:7.8,y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({x:7.9,y:27.5},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:8,y:27.9},0).wait(1).to({y:28},0).wait(1).to({y:28.2},0).wait(1).to({x:8.1,y:28.3},0).wait(1).to({y:28.4},0).wait(1).to({x:8.2,y:28.6},0).wait(1).to({y:28.7},0).wait(1).to({y:28.8},0).wait(1).to({x:8.3,y:29},0).wait(1).to({y:29.1},0).wait(1).to({x:8.4,y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({x:8.5,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({y:29.9},0).wait(1).to({x:8.6,y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:8.7,y:30.3},0).wait(1).to({y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({x:8.8,y:30.7},0).wait(1).to({y:30.8},0).wait(1).to({x:8.9,y:31},0).wait(1).to({y:31.1},0).wait(1).to({y:31.2},0).wait(1).to({x:9,y:31.4},0).wait(1).to({y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({x:9.1,y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({x:9.2,y:32.1},0).wait(1).to({y:32.2},0).wait(1).to({y:32.3},0).wait(1).to({x:9.3,y:32.5},0).wait(1).to({y:32.6},0).wait(1).to({y:32.7},0).wait(1).to({x:9.4,y:32.9},0).wait(1).to({y:33},0).wait(1).to({x:9.5,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({y:33.4},0).wait(1).to({x:9.6,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({x:9.7,y:33.8},0).wait(1).to({y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({x:9.8,y:34.2},0).wait(1).to({y:34.3},0).wait(1).to({y:34.5},0).wait(1).to({x:9.9,y:34.6},0).wait(1).to({y:34.7},0).wait(1).to({x:10,y:34.9},0).wait(1).to({y:35},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,19);


(lib.SymArrowRchgTwn9ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg9();
	this.instance.parent = this;
	this.instance.setTransform(1,7,1,1,0,0,0,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.2},0).wait(1).to({y:7.3},0).wait(1).to({x:1.1,y:7.5},0).wait(1).to({y:7.6},0).wait(1).to({y:7.8},0).wait(1).to({y:7.9},0).wait(1).to({y:8.1},0).wait(1).to({x:1.2,y:8.2},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({x:1.3,y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({x:1.4,y:9.9},0).wait(1).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({x:1.5,y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({x:1.6,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({x:1.7,y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:1.8,y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:1.9,y:13.9},0).wait(1).to({y:14},0).wait(1).to({y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({x:2,y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({x:2.1,y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({y:16.2},0).wait(1).to({x:2.2,y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.6},0).wait(1).to({y:16.8},0).wait(1).to({y:17},0).wait(1).to({x:2.3,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({x:2.4,y:17.9},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({x:2.5,y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({y:19.2},0).wait(1).to({x:2.6,y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({x:2.7,y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:20.9},0).wait(1).to({x:2.8,y:21.1},0).wait(1).to({y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({y:21.5},0).wait(1).to({y:21.7},0).wait(1).to({x:2.9,y:21.9},0).wait(1).to({y:22},0).wait(1).to({y:22.2},0).wait(1).to({y:22.3},0).wait(1).to({y:22.5},0).wait(1).to({x:3,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({x:3.1,y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({y:24.1},0).wait(1).to({x:3.2,y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({y:24.9},0).wait(1).to({x:3.3,y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({x:3.4,y:25.8},0).wait(1).to({y:26},0).wait(1).to({y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({x:3.5,y:26.8},0).wait(1).to({y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({x:3.6,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.1},0).wait(1).to({x:3.7,y:28.3},0).wait(1).to({y:28.4},0).wait(1).to({y:28.6},0).wait(1).to({y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({x:3.8,y:29},0).wait(1).to({y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({x:3.9,y:29.8},0).wait(1).to({y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({x:4,y:30.7},0).wait(1).to({y:30.9},0).wait(1).to({y:31},0).wait(1).to({y:31.2},0).wait(1).to({y:31.3},0).wait(1).to({x:4.1,y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({y:31.8},0).wait(1).to({y:32},0).wait(1).to({y:32.1},0).wait(1).to({x:4.2,y:32.3},0).wait(1).to({y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({x:4.3,y:33},0).wait(1).to({y:33.2},0).wait(1).to({y:33.3},0).wait(1).to({y:33.5},0).wait(1).to({y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({x:4.4,y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({x:4.5,y:34.7},0).wait(1).to({y:34.9},0).wait(1).to({y:35},0).wait(1).to({y:35.2},0).wait(1).to({y:35.3},0).wait(1).to({x:4.6,y:35.5},0).wait(1).to({y:35.6},0).wait(1).to({y:35.8},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({x:4.7,y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({x:4.8,y:37},0).wait(1).to({y:37.2},0).wait(1).to({y:37.3},0).wait(1).to({y:37.5},0).wait(1).to({y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({x:4.9,y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({y:38.2},0).wait(1).to({y:38.4},0).wait(1).to({y:38.5},0).wait(1).to({x:5,y:38.7},0).wait(1).to({y:38.8},0).wait(1).to({y:39},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,19);


(lib.SymArrowRchgTwn8ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:6.2},0).wait(1).to({x:2.4,y:6.3},0).wait(1).to({x:2.3,y:6.5},0).wait(1).to({x:2.2,y:6.7},0).wait(1).to({y:6.8},0).wait(1).to({x:2.1,y:7},0).wait(1).to({x:2,y:7.2},0).wait(1).to({x:1.9,y:7.3},0).wait(1).to({y:7.5},0).wait(1).to({x:1.8,y:7.7},0).wait(1).to({x:1.7,y:7.8},0).wait(1).to({x:1.6,y:8},0).wait(1).to({y:8.2},0).wait(1).to({x:1.5,y:8.4},0).wait(1).to({x:1.4,y:8.5},0).wait(1).to({x:1.3,y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({x:1.2,y:9},0).wait(1).to({x:1.1,y:9.2},0).wait(1).to({x:1,y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({x:0.9,y:9.7},0).wait(1).to({x:0.8,y:9.9},0).wait(1).to({x:0.7,y:10},0).wait(1).to({y:10.2},0).wait(1).to({x:0.6,y:10.4},0).wait(1).to({x:0.5,y:10.5},0).wait(1).to({x:0.4,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:0.3,y:11},0).wait(1).to({x:0.2,y:11.2},0).wait(1).to({x:0.1,y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({x:0,y:11.7},0).wait(1).to({x:-0.1,y:11.9},0).wait(1).to({x:-0.2,y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({x:-0.3,y:12.4},0).wait(1).to({x:-0.4,y:12.6},0).wait(1).to({x:-0.5,y:12.7},0).wait(1).to({x:-0.6,y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({x:-0.7,y:13.2},0).wait(1).to({x:-0.8,y:13.4},0).wait(1).to({x:-0.9,y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:-1,y:13.9},0).wait(1).to({x:-1.1,y:14.1},0).wait(1).to({x:-1.2,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({x:-1.3,y:14.6},0).wait(1).to({x:-1.4,y:14.7},0).wait(1).to({x:-1.5,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({x:-1.6,y:15.2},0).wait(1).to({x:-1.7,y:15.4},0).wait(1).to({x:-1.8,y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({x:-1.9,y:15.9},0).wait(1).to({x:-2,y:16.1},0).wait(1).to({x:-2.1,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({x:-2.2,y:16.6},0).wait(1).to({x:-2.3,y:16.8},0).wait(1).to({x:-2.4,y:16.9},0).wait(1).to({y:17.1},0).wait(1).to({x:-2.5,y:17.3},0).wait(1).to({x:-2.6,y:17.4},0).wait(1).to({x:-2.7,y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({x:-2.8,y:17.9},0).wait(1).to({x:-2.9,y:18.1},0).wait(1).to({x:-3,y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({x:-3.1,y:18.6},0).wait(1).to({x:-3.2,y:18.8},0).wait(1).to({x:-3.3,y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({x:-3.4,y:19.3},0).wait(1).to({x:-3.5,y:19.4},0).wait(1).to({x:-3.6,y:19.6},0).wait(1).to({x:-3.7,y:19.8},0).wait(1).to({y:19.9},0).wait(1).to({x:-3.8,y:20.1},0).wait(1).to({x:-3.9,y:20.3},0).wait(1).to({x:-4,y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({x:-4.1,y:20.8},0).wait(1).to({x:-4.2,y:21},0).wait(1).to({x:-4.3,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({x:-4.4,y:21.5},0).wait(1).to({x:-4.5,y:21.6},0).wait(1).to({x:-4.6,y:21.8},0).wait(1).to({y:22},0).wait(1).to({x:-4.7,y:22.1},0).wait(1).to({x:-4.8,y:22.3},0).wait(1).to({x:-4.9,y:22.5},0).wait(1).to({y:22.6},0).wait(1).to({x:-5,y:22.8},0).wait(1).to({x:-5.1,y:23},0).wait(1).to({x:-5.2,y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({x:-5.3,y:23.5},0).wait(1).to({x:-5.4,y:23.6},0).wait(1).to({x:-5.5,y:23.8},0).wait(1).to({y:24},0).wait(1).to({x:-5.6,y:24.2},0).wait(1).to({x:-5.7,y:24.3},0).wait(1).to({x:-5.8,y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({x:-5.9,y:24.8},0).wait(1).to({x:-6,y:25},0).wait(1).to({x:-6.1,y:25.2},0).wait(1).to({y:25.3},0).wait(1).to({x:-6.2,y:25.5},0).wait(1).to({x:-6.3,y:25.7},0).wait(1).to({x:-6.4,y:25.8},0).wait(1).to({x:-6.5,y:26},0).wait(1).to({y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:-6.6,y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({x:-6.7,y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({x:-6.8,y:27.3},0).wait(1).to({y:27.5},0).wait(1).to({x:-6.9,y:27.7},0).wait(1).to({y:27.8},0).wait(1).to({x:-7,y:28},0).wait(1).to({y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:-7.1,y:28.6},0).wait(1).to({y:28.8},0).wait(1).to({x:-7.2,y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({x:-7.3,y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({x:-7.4,y:29.7},0).wait(1).to({y:29.9},0).wait(1).to({x:-7.5,y:30},0).wait(1).to({y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({x:-7.6,y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({x:-7.7,y:31},0).wait(1).to({y:31.1},0).wait(1).to({x:-7.8,y:31.3},0).wait(1).to({y:31.5},0).wait(1).to({x:-7.9,y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({x:-8,y:32.1},0).wait(1).to({y:32.3},0).wait(1).to({y:32.4},0).wait(1).to({x:-8.1,y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({x:-8.2,y:33},0).wait(1).to({y:33.2},0).wait(1).to({x:-8.3,y:33.4},0).wait(1).to({y:33.5},0).wait(1).to({x:-8.4,y:33.7},0).wait(1).to({y:33.9},0).wait(1).to({x:-8.5,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({y:34.5},0).wait(1).to({x:-8.6,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({x:-8.7,y:35},0).wait(1).to({y:35.2},0).wait(1).to({x:-8.8,y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({x:-8.9,y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({x:-9,y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({x:-9.1,y:36.7},0).wait(1).to({y:36.8},0).wait(1).to({x:-9.2,y:37},0).wait(1).to({y:37.2},0).wait(1).to({x:-9.3,y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({x:-9.4,y:37.8},0).wait(1).to({y:38},0).wait(1).to({x:-9.5,y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({x:-9.6,y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:-9.7,y:39.1},0).wait(1).to({y:39.2},0).wait(1).to({x:-9.8,y:39.4},0).wait(1).to({y:39.6},0).wait(1).to({x:-9.9,y:39.8},0).wait(1).to({y:40},0).wait(1).to({x:-10,y:40.2},0).wait(1).to({y:40.3},0).wait(1).to({y:40.5},0).wait(1).to({x:-10.1,y:40.7},0).wait(1).to({y:40.9},0).wait(1).to({x:-10.2,y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({x:-10.3,y:41.4},0).wait(1).to({y:41.6},0).wait(1).to({x:-10.4,y:41.8},0).wait(1).to({y:42},0).wait(1).to({x:-10.5,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:-10.6,y:42.6},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymArrowRchgTwn7ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg7();
	this.instance.parent = this;
	this.instance.setTransform(2.5,8.5,1,1,0,0,0,2.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.6,y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({x:2.7,y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({x:2.8,y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({x:2.9,y:9.8},0).wait(1).to({x:3,y:10},0).wait(1).to({y:10.2},0).wait(1).to({x:3.1,y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({x:3.2,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:3.3,y:11.1},0).wait(1).to({x:3.4,y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({x:3.5,y:11.7},0).wait(1).to({y:11.9},0).wait(1).to({x:3.6,y:12},0).wait(1).to({y:12.2},0).wait(1).to({x:3.7,y:12.4},0).wait(1).to({x:3.8,y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({x:3.9,y:13},0).wait(1).to({y:13.2},0).wait(1).to({x:4,y:13.4},0).wait(1).to({x:4.1,y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({x:4.2,y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({x:4.3,y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({x:4.4,y:14.7},0).wait(1).to({x:4.5,y:14.8},0).wait(1).to({y:15},0).wait(1).to({x:4.6,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({x:4.7,y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({x:4.8,y:16},0).wait(1).to({x:4.9,y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({x:5,y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({x:5.1,y:16.9},0).wait(1).to({y:17.1},0).wait(1).to({x:5.2,y:17.3},0).wait(1).to({x:5.3,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:5.4,y:17.8},0).wait(1).to({y:18},0).wait(1).to({x:5.5,y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({x:5.6,y:18.6},0).wait(1).to({x:5.7,y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({x:5.8,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:5.9,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:6,y:19.9},0).wait(1).to({x:6.1,y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({x:6.2,y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({x:6.3,y:20.8},0).wait(1).to({y:21},0).wait(1).to({x:6.4,y:21.2},0).wait(1).to({x:6.5,y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({x:6.6,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:6.7,y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({x:6.8,y:22.5},0).wait(1).to({x:6.9,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({x:7,y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({x:7.1,y:23.4},0).wait(1).to({x:7.2,y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({x:7.3,y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:7.4,y:24.4},0).wait(1).to({y:24.5},0).wait(1).to({x:7.5,y:24.7},0).wait(1).to({x:7.6,y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({x:7.7,y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({x:7.8,y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({x:7.9,y:26},0).wait(1).to({x:8,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:8.1,y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:8.2,y:27},0).wait(1).to({y:27.2},0).wait(1).to({x:8.3,y:27.3},0).wait(1).to({x:8.4,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:8.5,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({x:8.6,y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:8.7,y:28.7},0).wait(1).to({x:8.8,y:28.8},0).wait(1).to({y:29},0).wait(1).to({x:8.9,y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({x:9,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:9.1,y:30},0).wait(1).to({x:9.2,y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({x:9.3,y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({x:9.4,y:30.9},0).wait(1).to({y:31.1},0).wait(1).to({x:9.5,y:31.3},0).wait(1).to({x:9.6,y:31.5},0).wait(1).to({y:31.6},0).wait(1).to({x:9.7,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:9.8,y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({x:9.9,y:32.6},0).wait(1).to({x:10,y:32.8},0).wait(1).to({y:32.9},0).wait(1).to({x:10.1,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:10.2,y:33.5},0).wait(1).to({x:10.3,y:33.7},0).wait(1).to({y:33.9},0).wait(1).to({x:10.4,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({x:10.5,y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({x:10.6,y:34.8},0).wait(1).to({x:10.7,y:35},0).wait(1).to({y:35.2},0).wait(1).to({x:10.8,y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({x:10.9,y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({x:11,y:36.1},0).wait(1).to({x:11.1,y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({x:11.2,y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({x:11.3,y:37.1},0).wait(1).to({y:37.2},0).wait(1).to({x:11.4,y:37.4},0).wait(1).to({x:11.5,y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({x:11.6,y:38},0).wait(1).to({y:38.2},0).wait(1).to({x:11.7,y:38.4},0).wait(1).to({y:38.5},0).wait(1).to({x:11.8,y:38.7},0).wait(1).to({x:11.9,y:38.9},0).wait(1).to({y:39.1},0).wait(1).to({x:12,y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({x:12.1,y:39.7},0).wait(1).to({y:39.8},0).wait(1).to({x:12.2,y:40},0).wait(1).to({x:12.3,y:40.2},0).wait(1).to({y:40.4},0).wait(1).to({x:12.4,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:12.5,y:41},0).wait(1).to({y:41.2},0).wait(1).to({x:12.6,y:41.3},0).wait(1).to({x:12.7,y:41.5},0).wait(1).to({y:41.7},0).wait(1).to({x:12.8,y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:12.9,y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({x:13,y:42.6},0).wait(1).to({x:13.1,y:42.8},0).wait(1).to({y:43},0).wait(1).to({x:13.2,y:43.2},0).wait(1).to({y:43.4},0).wait(1).to({x:13.3,y:43.6},0).wait(1).to({x:13.4,y:43.8},0).wait(1).to({y:44},0).wait(1).to({x:13.5,y:44.1},0).wait(1).to({y:44.3},0).wait(1).to({x:13.6,y:44.5},0).wait(1).to({y:44.7},0).wait(1).to({x:13.7,y:44.9},0).wait(1).to({x:13.8,y:45.1},0).wait(1).to({y:45.3},0).wait(1).to({x:13.9,y:45.4},0).wait(1).to({y:45.6},0).wait(1).to({x:14,y:45.8},0).wait(1).to({y:46},0).wait(1).to({x:14.1,y:46.2},0).wait(1).to({x:14.2,y:46.4},0).wait(1).to({y:46.6},0).wait(1).to({x:14.3,y:46.8},0).wait(1).to({y:46.9},0).wait(1).to({x:14.4,y:47.1},0).wait(1).to({y:47.3},0).wait(1).to({x:14.5,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,22);


(lib.SymArrowRchgTwn6ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg6();
	this.instance.parent = this;
	this.instance.setTransform(2,8.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7},0).wait(1).to({x:2.1,y:8.9},0).wait(1).to({y:9.1},0).wait(1).to({x:2.2,y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({x:2.3,y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({x:2.4,y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({x:2.5,y:10.6},0).wait(1).to({y:10.7},0).wait(1).to({x:2.6,y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({x:2.7,y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({x:2.8,y:11.9},0).wait(1).to({y:12},0).wait(1).to({x:2.9,y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({x:3,y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:3.1,y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({x:3.2,y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({y:13.9},0).wait(1).to({x:3.3,y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({x:3.4,y:14.5},0).wait(1).to({y:14.7},0).wait(1).to({x:3.5,y:14.8},0).wait(1).to({y:15},0).wait(1).to({x:3.6,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({x:3.7,y:15.8},0).wait(1).to({y:16},0).wait(1).to({x:3.8,y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({x:3.9,y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:4,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:4.1,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:4.2,y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({x:4.3,y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({x:4.4,y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({x:4.5,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({x:4.6,y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({x:4.7,y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({x:4.8,y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({x:4.9,y:21},0).wait(1).to({y:21.2},0).wait(1).to({x:5,y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({x:5.1,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({y:22.1},0).wait(1).to({x:5.2,y:22.3},0).wait(1).to({y:22.5},0).wait(1).to({x:5.3,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({x:5.4,y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({x:5.5,y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({x:5.6,y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:5.7,y:24.4},0).wait(1).to({y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({x:5.8,y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({x:5.9,y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({x:6,y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({y:26},0).wait(1).to({x:6.1,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:6.2,y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:6.3,y:27},0).wait(1).to({y:27.2},0).wait(1).to({y:27.3},0).wait(1).to({x:6.4,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:6.5,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({x:6.6,y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:6.7,y:28.7},0).wait(1).to({y:28.8},0).wait(1).to({y:29},0).wait(1).to({x:6.8,y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({x:6.9,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:7,y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({x:7.1,y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({x:7.2,y:30.9},0).wait(1).to({y:31.1},0).wait(1).to({x:7.3,y:31.3},0).wait(1).to({y:31.5},0).wait(1).to({y:31.6},0).wait(1).to({x:7.4,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:7.5,y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({x:7.6,y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({y:32.9},0).wait(1).to({x:7.7,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:7.8,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({x:7.9,y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({x:8,y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({x:8.1,y:34.8},0).wait(1).to({y:35},0).wait(1).to({x:8.2,y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({x:8.3,y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({x:8.4,y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({x:8.5,y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({x:8.6,y:37.1},0).wait(1).to({y:37.2},0).wait(1).to({x:8.7,y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({x:8.8,y:37.8},0).wait(1).to({y:38},0).wait(1).to({y:38.2},0).wait(1).to({x:8.9,y:38.4},0).wait(1).to({y:38.5},0).wait(1).to({x:9,y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:9.1,y:39.1},0).wait(1).to({y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({x:9.2,y:39.7},0).wait(1).to({y:39.8},0).wait(1).to({x:9.3,y:40},0).wait(1).to({y:40.2},0).wait(1).to({x:9.4,y:40.4},0).wait(1).to({y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:9.5,y:41},0).wait(1).to({y:41.2},0).wait(1).to({x:9.6,y:41.3},0).wait(1).to({y:41.5},0).wait(1).to({x:9.7,y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({x:9.8,y:42.1},0).wait(1).to({y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({x:9.9,y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({x:10,y:43},0).wait(1).to({y:43.2},0).wait(1).to({x:10.1,y:43.4},0).wait(1).to({y:43.6},0).wait(1).to({y:43.8},0).wait(1).to({x:10.2,y:44},0).wait(1).to({y:44.1},0).wait(1).to({x:10.3,y:44.3},0).wait(1).to({y:44.5},0).wait(1).to({x:10.4,y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({y:45.1},0).wait(1).to({x:10.5,y:45.3},0).wait(1).to({y:45.4},0).wait(1).to({x:10.6,y:45.6},0).wait(1).to({y:45.8},0).wait(1).to({x:10.7,y:46},0).wait(1).to({y:46.2},0).wait(1).to({y:46.4},0).wait(1).to({x:10.8,y:46.6},0).wait(1).to({y:46.8},0).wait(1).to({x:10.9,y:46.9},0).wait(1).to({y:47.1},0).wait(1).to({x:11,y:47.3},0).wait(1).to({y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,22);


(lib.SymArrowRchgTwn5ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg5();
	this.instance.parent = this;
	this.instance.setTransform(1,9,1,1,0,0,0,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({x:1.1,y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({x:1.2,y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:1.3,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({x:1.4,y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({x:1.5,y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({y:13},0).wait(1).to({y:13.2},0).wait(1).to({x:1.6,y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.2},0).wait(1).to({x:1.7,y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:1.8,y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({x:1.9,y:15.9},0).wait(1).to({y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({x:2,y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:17},0).wait(1).to({y:17.2},0).wait(1).to({x:2.1,y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({x:2.2,y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:19},0).wait(1).to({x:2.3,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:2.4,y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({x:2.5,y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({y:21.1},0).wait(1).to({y:21.2},0).wait(1).to({x:2.6,y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:22},0).wait(1).to({x:2.7,y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:23},0).wait(1).to({x:2.8,y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({x:2.9,y:23.9},0).wait(1).to({y:24.1},0).wait(1).to({y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({x:3,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({x:3.1,y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:3.2,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({y:27},0).wait(1).to({x:3.3,y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:3.4,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:3.5,y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({x:3.6,y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({y:29.9},0).wait(1).to({y:30.1},0).wait(1).to({x:3.7,y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({x:3.8,y:31},0).wait(1).to({y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({y:31.8},0).wait(1).to({x:3.9,y:32},0).wait(1).to({y:32.2},0).wait(1).to({y:32.3},0).wait(1).to({y:32.5},0).wait(1).to({x:4,y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:4.1,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({x:4.2,y:34.3},0).wait(1).to({y:34.5},0).wait(1).to({y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({x:4.3,y:35},0).wait(1).to({y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({y:35.8},0).wait(1).to({x:4.4,y:36},0).wait(1).to({y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({x:4.5,y:36.8},0).wait(1).to({y:36.9},0).wait(1).to({y:37.1},0).wait(1).to({y:37.3},0).wait(1).to({x:4.6,y:37.5},0).wait(1).to({y:37.7},0).wait(1).to({y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({x:4.7,y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:4.8,y:39},0).wait(1).to({y:39.2},0).wait(1).to({y:39.4},0).wait(1).to({y:39.6},0).wait(1).to({x:4.9,y:39.8},0).wait(1).to({y:40},0).wait(1).to({y:40.2},0).wait(1).to({y:40.4},0).wait(1).to({y:40.6},0).wait(1).to({x:5,y:40.8},0).wait(1).to({y:41},0).wait(1).to({y:41.2},0).wait(1).to({y:41.3},0).wait(1).to({x:5.1,y:41.5},0).wait(1).to({y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:5.2,y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({y:42.7},0).wait(1).to({y:42.9},0).wait(1).to({x:5.3,y:43.1},0).wait(1).to({y:43.3},0).wait(1).to({y:43.4},0).wait(1).to({y:43.6},0).wait(1).to({x:5.4,y:43.8},0).wait(1).to({y:44},0).wait(1).to({y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({y:44.6},0).wait(1).to({x:5.5,y:44.8},0).wait(1).to({y:45},0).wait(1).to({y:45.2},0).wait(1).to({y:45.4},0).wait(1).to({x:5.6,y:45.6},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({y:46.1},0).wait(1).to({x:5.7,y:46.3},0).wait(1).to({y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({x:5.8,y:47.1},0).wait(1).to({y:47.3},0).wait(1).to({y:47.5},0).wait(1).to({y:47.7},0).wait(1).to({x:5.9,y:47.9},0).wait(1).to({y:48},0).wait(1).to({y:48.2},0).wait(1).to({y:48.4},0).wait(1).to({x:6,y:48.6},0).wait(1).to({y:48.8},0).wait(1).to({y:49},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,23);


(lib.SymArrowRchgTwn4ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg4();
	this.instance.parent = this;
	this.instance.setTransform(1,8.5,1,1,0,0,0,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({x:0.9,y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({y:10.1},0).wait(1).to({x:0.8,y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:0.7,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({x:0.6,y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({x:0.5,y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({y:13.5},0).wait(1).to({x:0.4,y:13.7},0).wait(1).to({y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({x:0.3,y:14.5},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({x:0.2,y:15.3},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({x:0.1,y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({x:0,y:16.9},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.5},0).wait(1).to({x:-0.1,y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({x:-0.2,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({x:-0.3,y:19.6},0).wait(1).to({y:19.8},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({x:-0.4,y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({x:-0.5,y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({x:-0.6,y:22},0).wait(1).to({y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({x:-0.7,y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({y:23.6},0).wait(1).to({x:-0.8,y:23.8},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({y:24.4},0).wait(1).to({x:-0.9,y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({y:25},0).wait(1).to({y:25.2},0).wait(1).to({x:-1,y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:-1.1,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:-1.2,y:27},0).wait(1).to({y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:-1.3,y:28},0).wait(1).to({y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({y:28.6},0).wait(1).to({x:-1.4,y:28.8},0).wait(1).to({y:29},0).wait(1).to({y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({x:-1.5,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:-1.6,y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({y:31},0).wait(1).to({x:-1.7,y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:-1.8,y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({x:-1.9,y:33},0).wait(1).to({y:33.2},0).wait(1).to({y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({x:-2,y:33.8},0).wait(1).to({y:34},0).wait(1).to({y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({x:-2.1,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({y:35},0).wait(1).to({y:35.2},0).wait(1).to({x:-2.2,y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({y:35.8},0).wait(1).to({y:36},0).wait(1).to({x:-2.3,y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({y:37},0).wait(1).to({x:-2.4,y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({x:-2.5,y:38},0).wait(1).to({y:38.2},0).wait(1).to({y:38.4},0).wait(1).to({y:38.6},0).wait(1).to({x:-2.6,y:38.8},0).wait(1).to({y:39},0).wait(1).to({y:39.2},0).wait(1).to({y:39.4},0).wait(1).to({x:-2.7,y:39.6},0).wait(1).to({y:39.8},0).wait(1).to({y:40.1},0).wait(1).to({y:40.3},0).wait(1).to({x:-2.8,y:40.5},0).wait(1).to({y:40.7},0).wait(1).to({y:40.9},0).wait(1).to({y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({x:-2.9,y:41.5},0).wait(1).to({y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:-3,y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({y:42.7},0).wait(1).to({y:42.9},0).wait(1).to({x:-3.1,y:43.1},0).wait(1).to({y:43.3},0).wait(1).to({y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:-3.2,y:43.9},0).wait(1).to({y:44.1},0).wait(1).to({y:44.3},0).wait(1).to({y:44.5},0).wait(1).to({x:-3.3,y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({y:45.1},0).wait(1).to({y:45.3},0).wait(1).to({x:-3.4,y:45.5},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({y:46.1},0).wait(1).to({y:46.3},0).wait(1).to({x:-3.5,y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({y:47.1},0).wait(1).to({x:-3.6,y:47.3},0).wait(1).to({y:47.5},0).wait(1).to({y:47.7},0).wait(1).to({y:47.9},0).wait(1).to({x:-3.7,y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({y:48.5},0).wait(1).to({y:48.7},0).wait(1).to({x:-3.8,y:48.9},0).wait(1).to({y:49.1},0).wait(1).to({y:49.3},0).wait(1).to({y:49.5},0).wait(1).to({x:-3.9,y:49.7},0).wait(1).to({y:49.9},0).wait(1).to({y:50.1},0).wait(1).to({y:50.3},0).wait(1).to({x:-4,y:50.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,22);


(lib.SymArrowRchgTwn3ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,9,1,1,0,0,0,1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({x:1.4,y:9.6},0).wait(1).to({y:9.9},0).wait(1).to({x:1.3,y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({x:1.2,y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:1.1,y:11.2},0).wait(1).to({y:11.4},0).wait(1).to({x:1,y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({x:0.9,y:12},0).wait(1).to({y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({x:0.8,y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({x:0.7,y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({x:0.6,y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({y:14},0).wait(1).to({x:0.5,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({x:0.4,y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({x:0.3,y:15},0).wait(1).to({y:15.2},0).wait(1).to({y:15.5},0).wait(1).to({x:0.2,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({x:0.1,y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({x:0,y:16.5},0).wait(1).to({y:16.8},0).wait(1).to({y:17},0).wait(1).to({x:-0.1,y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({x:-0.2,y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({x:-0.3,y:18},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({x:-0.4,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({x:-0.5,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:-0.6,y:19.6},0).wait(1).to({y:19.8},0).wait(1).to({y:20},0).wait(1).to({x:-0.7,y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({x:-0.8,y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({x:-0.9,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({x:-1,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:-1.1,y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({x:-1.2,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:23},0).wait(1).to({x:-1.3,y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({x:-1.4,y:23.6},0).wait(1).to({y:23.9},0).wait(1).to({x:-1.5,y:24.1},0).wait(1).to({y:24.3},0).wait(1).to({x:-1.6,y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({x:-1.7,y:25.1},0).wait(1).to({y:25.4},0).wait(1).to({x:-1.8,y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({x:-1.9,y:26},0).wait(1).to({y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:-2,y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:-2.1,y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({x:-2.2,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({y:27.9},0).wait(1).to({x:-2.3,y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:-2.4,y:28.6},0).wait(1).to({y:28.8},0).wait(1).to({x:-2.5,y:29},0).wait(1).to({y:29.2},0).wait(1).to({y:29.5},0).wait(1).to({x:-2.6,y:29.7},0).wait(1).to({y:29.9},0).wait(1).to({x:-2.7,y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({x:-2.8,y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({y:31},0).wait(1).to({x:-2.9,y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({x:-3,y:31.6},0).wait(1).to({y:31.8},0).wait(1).to({x:-3.1,y:32},0).wait(1).to({y:32.3},0).wait(1).to({y:32.5},0).wait(1).to({x:-3.2,y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({x:-3.3,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:-3.4,y:33.5},0).wait(1).to({y:33.8},0).wait(1).to({y:34},0).wait(1).to({x:-3.5,y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({x:-3.6,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({x:-3.7,y:35.1},0).wait(1).to({y:35.3},0).wait(1).to({y:35.5},0).wait(1).to({x:-3.8,y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({x:-3.9,y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({x:-4,y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({y:37},0).wait(1).to({x:-4.1,y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({x:-4.2,y:37.6},0).wait(1).to({y:37.9},0).wait(1).to({x:-4.3,y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({x:-4.4,y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:-4.5,y:39.1},0).wait(1).to({y:39.4},0).wait(1).to({x:-4.6,y:39.6},0).wait(1).to({y:39.8},0).wait(1).to({x:-4.7,y:40},0).wait(1).to({y:40.2},0).wait(1).to({y:40.4},0).wait(1).to({x:-4.8,y:40.7},0).wait(1).to({y:40.9},0).wait(1).to({x:-4.9,y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({x:-5,y:41.5},0).wait(1).to({y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({x:-5.1,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:-5.2,y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({x:-5.3,y:43},0).wait(1).to({y:43.2},0).wait(1).to({y:43.4},0).wait(1).to({x:-5.4,y:43.7},0).wait(1).to({y:43.9},0).wait(1).to({x:-5.5,y:44.1},0).wait(1).to({y:44.3},0).wait(1).to({x:-5.6,y:44.5},0).wait(1).to({y:44.7},0).wait(1).to({y:45},0).wait(1).to({x:-5.7,y:45.2},0).wait(1).to({y:45.4},0).wait(1).to({x:-5.8,y:45.6},0).wait(1).to({y:45.8},0).wait(1).to({x:-5.9,y:46},0).wait(1).to({y:46.2},0).wait(1).to({y:46.5},0).wait(1).to({x:-6,y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({x:-6.1,y:47.1},0).wait(1).to({y:47.3},0).wait(1).to({x:-6.2,y:47.5},0).wait(1).to({y:47.8},0).wait(1).to({y:48},0).wait(1).to({x:-6.3,y:48.2},0).wait(1).to({y:48.4},0).wait(1).to({x:-6.4,y:48.6},0).wait(1).to({y:48.8},0).wait(1).to({x:-6.5,y:49},0).wait(1).to({y:49.3},0).wait(1).to({y:49.5},0).wait(1).to({x:-6.6,y:49.7},0).wait(1).to({y:49.9},0).wait(1).to({x:-6.7,y:50.1},0).wait(1).to({y:50.3},0).wait(1).to({x:-6.8,y:50.6},0).wait(1).to({y:50.8},0).wait(1).to({y:51},0).wait(1).to({x:-6.9,y:51.2},0).wait(1).to({y:51.4},0).wait(1).to({x:-7,y:51.6},0).wait(1).to({y:51.8},0).wait(1).to({x:-7.1,y:52.1},0).wait(1).to({y:52.3},0).wait(1).to({y:52.5},0).wait(1).to({x:-7.2,y:52.7},0).wait(1).to({y:52.9},0).wait(1).to({x:-7.3,y:53.1},0).wait(1).to({y:53.4},0).wait(1).to({x:-7.4,y:53.6},0).wait(1).to({y:53.8},0).wait(1).to({x:-7.5,y:54},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,23);


(lib.SymArrowRchgTwn2ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg2();
	this.instance.parent = this;
	this.instance.setTransform(0.5,9.5,1,1,0,0,0,0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({y:11.3},0).wait(1).to({x:0.4,y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:0.3,y:13.2},0).wait(1).to({y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({y:15},0).wait(1).to({x:0.2,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.8},0).wait(1).to({x:0.1,y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({x:0,y:18.7},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.8},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({x:-0.1,y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:22},0).wait(1).to({y:22.3},0).wait(1).to({x:-0.2,y:22.5},0).wait(1).to({y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.4},0).wait(1).to({y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({x:-0.3,y:24.2},0).wait(1).to({y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:-0.4,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({y:27.5},0).wait(1).to({y:27.8},0).wait(1).to({x:-0.5,y:28},0).wait(1).to({y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({y:28.6},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({x:-0.6,y:29.7},0).wait(1).to({y:30},0).wait(1).to({y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({y:31.5},0).wait(1).to({x:-0.7,y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:-0.8,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({y:33.9},0).wait(1).to({y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({y:35},0).wait(1).to({y:35.3},0).wait(1).to({x:-0.9,y:35.5},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({y:37},0).wait(1).to({x:-1,y:37.2},0).wait(1).to({y:37.5},0).wait(1).to({y:37.7},0).wait(1).to({y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.6},0).wait(1).to({y:38.8},0).wait(1).to({x:-1.1,y:39},0).wait(1).to({y:39.2},0).wait(1).to({y:39.4},0).wait(1).to({y:39.7},0).wait(1).to({y:39.9},0).wait(1).to({y:40.1},0).wait(1).to({y:40.3},0).wait(1).to({y:40.5},0).wait(1).to({y:40.8},0).wait(1).to({x:-1.2,y:41},0).wait(1).to({y:41.2},0).wait(1).to({y:41.4},0).wait(1).to({y:41.6},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({x:-1.3,y:42.7},0).wait(1).to({y:43},0).wait(1).to({y:43.2},0).wait(1).to({y:43.4},0).wait(1).to({y:43.6},0).wait(1).to({y:43.8},0).wait(1).to({y:44.1},0).wait(1).to({y:44.3},0).wait(1).to({x:-1.4,y:44.5},0).wait(1).to({y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({y:45.2},0).wait(1).to({y:45.4},0).wait(1).to({y:45.6},0).wait(1).to({y:45.8},0).wait(1).to({y:46},0).wait(1).to({y:46.3},0).wait(1).to({x:-1.5,y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({y:47.1},0).wait(1).to({y:47.4},0).wait(1).to({y:47.6},0).wait(1).to({y:47.8},0).wait(1).to({y:48},0).wait(1).to({x:-1.6,y:48.2},0).wait(1).to({y:48.5},0).wait(1).to({y:48.7},0).wait(1).to({y:48.9},0).wait(1).to({y:49.1},0).wait(1).to({y:49.3},0).wait(1).to({y:49.6},0).wait(1).to({y:49.8},0).wait(1).to({x:-1.7,y:50},0).wait(1).to({y:50.2},0).wait(1).to({y:50.4},0).wait(1).to({y:50.7},0).wait(1).to({y:50.9},0).wait(1).to({y:51.1},0).wait(1).to({y:51.3},0).wait(1).to({y:51.5},0).wait(1).to({y:51.8},0).wait(1).to({x:-1.8,y:52},0).wait(1).to({y:52.2},0).wait(1).to({y:52.4},0).wait(1).to({y:52.6},0).wait(1).to({y:52.9},0).wait(1).to({y:53.1},0).wait(1).to({y:53.3},0).wait(1).to({y:53.5},0).wait(1).to({x:-1.9,y:53.7},0).wait(1).to({y:54},0).wait(1).to({y:54.2},0).wait(1).to({y:54.4},0).wait(1).to({y:54.6},0).wait(1).to({y:54.8},0).wait(1).to({y:55.1},0).wait(1).to({y:55.3},0).wait(1).to({x:-2,y:55.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,24);


(lib.SymArrowRchgTwn1ML = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg1();
	this.instance.parent = this;
	this.instance.setTransform(5,11.2,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:5.1,y:11.4},0).wait(1).to({x:5.2,y:11.7},0).wait(1).to({x:5.3,y:11.9},0).wait(1).to({x:5.4,y:12.1},0).wait(1).to({x:5.6,y:12.4},0).wait(1).to({x:5.7,y:12.6},0).wait(1).to({x:5.8,y:12.8},0).wait(1).to({x:5.9,y:13.1},0).wait(1).to({x:6,y:13.3},0).wait(1).to({x:6.1,y:13.5},0).wait(1).to({x:6.2,y:13.8},0).wait(1).to({x:6.3,y:14},0).wait(1).to({x:6.4,y:14.2},0).wait(1).to({x:6.5,y:14.5},0).wait(1).to({x:6.7,y:14.7},0).wait(1).to({x:6.8,y:15},0).wait(1).to({x:6.9,y:15.2},0).wait(1).to({x:7,y:15.4},0).wait(1).to({x:7.1,y:15.7},0).wait(1).to({x:7.2,y:15.9},0).wait(1).to({x:7.3,y:16.1},0).wait(1).to({x:7.4,y:16.4},0).wait(1).to({x:7.5,y:16.6},0).wait(1).to({x:7.6,y:16.8},0).wait(1).to({x:7.8,y:17.1},0).wait(1).to({x:7.9,y:17.3},0).wait(1).to({x:8,y:17.5},0).wait(1).to({x:8.1,y:17.8},0).wait(1).to({x:8.2,y:18},0).wait(1).to({x:8.3,y:18.2},0).wait(1).to({x:8.4,y:18.5},0).wait(1).to({x:8.5,y:18.7},0).wait(1).to({x:8.6,y:18.9},0).wait(1).to({x:8.7,y:19.2},0).wait(1).to({x:8.9,y:19.4},0).wait(1).to({x:9,y:19.6},0).wait(1).to({x:9.1,y:19.9},0).wait(1).to({x:9.2,y:20.1},0).wait(1).to({x:9.3,y:20.3},0).wait(1).to({x:9.4,y:20.6},0).wait(1).to({x:9.5,y:20.8},0).wait(1).to({x:9.6,y:21},0).wait(1).to({x:9.7,y:21.3},0).wait(1).to({x:9.8,y:21.5},0).wait(1).to({x:10,y:21.8},0).wait(1).to({x:10.1,y:22},0).wait(1).to({x:10.2,y:22.2},0).wait(1).to({x:10.3,y:22.5},0).wait(1).to({x:10.4,y:22.7},0).wait(1).to({x:10.5,y:22.9},0).wait(1).to({x:10.6,y:23.2},0).wait(1).to({x:10.7,y:23.4},0).wait(1).to({x:10.8,y:23.6},0).wait(1).to({x:10.9,y:23.9},0).wait(1).to({x:11.1,y:24.1},0).wait(1).to({x:11.2,y:24.3},0).wait(1).to({x:11.3,y:24.6},0).wait(1).to({x:11.4,y:24.8},0).wait(1).to({x:11.5,y:25},0).wait(1).to({x:11.6,y:25.3},0).wait(1).to({x:11.7,y:25.5},0).wait(1).to({x:11.8,y:25.7},0).wait(1).to({x:11.9,y:26},0).wait(1).to({x:12,y:26.2},0).wait(1).to({x:12.2,y:26.4},0).wait(1).to({x:12.3,y:26.7},0).wait(1).to({x:12.4,y:26.9},0).wait(1).to({x:12.5,y:27.1},0).wait(1).to({x:12.6,y:27.4},0).wait(1).to({x:12.7,y:27.6},0).wait(1).to({x:12.8,y:27.8},0).wait(1).to({x:12.9,y:28.1},0).wait(1).to({x:13,y:28.3},0).wait(1).to({x:13.1,y:28.5},0).wait(1).to({x:13.3,y:28.8},0).wait(1).to({x:13.4,y:29},0).wait(1).to({x:13.5,y:29.3},0).wait(1).to({x:13.6,y:29.5},0).wait(1).to({x:13.7,y:29.7},0).wait(1).to({x:13.8,y:30},0).wait(1).to({x:13.9,y:30.2},0).wait(1).to({x:14,y:30.4},0).wait(1).to({x:14.1,y:30.7},0).wait(1).to({x:14.2,y:30.9},0).wait(1).to({x:14.4,y:31.1},0).wait(1).to({x:14.5,y:31.4},0).wait(1).to({x:14.6,y:31.6},0).wait(1).to({x:14.7,y:31.8},0).wait(1).to({x:14.8,y:32.1},0).wait(1).to({x:14.9,y:32.3},0).wait(1).to({x:15,y:32.5},0).wait(1).to({x:15.1,y:32.8},0).wait(1).to({x:15.2,y:33},0).wait(1).to({x:15.3,y:33.2},0).wait(1).to({x:15.5,y:33.5},0).wait(1).to({x:15.6,y:33.7},0).wait(1).to({x:15.7,y:33.9},0).wait(1).to({x:15.8,y:34.2},0).wait(1).to({x:15.9,y:34.4},0).wait(1).to({x:16,y:34.6},0).wait(1).to({x:16.1,y:34.9},0).wait(1).to({x:16.2,y:35.1},0).wait(1).to({x:16.3,y:35.3},0).wait(1).to({x:16.4,y:35.6},0).wait(1).to({x:16.6,y:35.8},0).wait(1).to({x:16.7,y:36.1},0).wait(1).to({x:16.8,y:36.3},0).wait(1).to({x:16.9,y:36.5},0).wait(1).to({x:17,y:36.8},0).wait(1).to({x:17.1,y:37},0).wait(1).to({x:17.2,y:37.2},0).wait(1).to({x:17.3,y:37.5},0).wait(1).to({x:17.4,y:37.7},0).wait(1).to({x:17.5,y:37.9},0).wait(1).to({x:17.7,y:38.2},0).wait(1).to({x:17.8,y:38.4},0).wait(1).to({x:17.9,y:38.6},0).wait(1).to({x:18,y:38.9},0).wait(1).to({x:18.1,y:39.1},0).wait(1).to({x:18.2,y:39.3},0).wait(1).to({x:18.3,y:39.6},0).wait(1).to({x:18.4,y:39.8},0).wait(1).to({x:18.5,y:40},0).wait(1).to({x:18.6,y:40.3},0).wait(1).to({x:18.8,y:40.5},0).wait(1).to({x:18.9,y:40.7},0).wait(1).to({x:19,y:41},0).wait(1).to({x:19.1,y:41.2},0).wait(1).to({x:19.2,y:41.4},0).wait(1).to({x:19.3,y:41.7},0).wait(1).to({x:19.4,y:41.9},0).wait(1).to({x:19.5,y:42.1},0).wait(1).to({x:19.6,y:42.4},0).wait(1).to({x:19.7,y:42.6},0).wait(1).to({x:19.9,y:42.9},0).wait(1).to({x:20,y:43.1},0).wait(1).to({x:20.1,y:43.3},0).wait(1).to({x:20.2,y:43.6},0).wait(1).to({x:20.3,y:43.8},0).wait(1).to({x:20.4,y:44},0).wait(1).to({x:20.5,y:44.3},0).wait(1).to({x:20.6,y:44.5},0).wait(1).to({x:20.7,y:44.7},0).wait(1).to({x:20.8,y:45},0).wait(1).to({x:21,y:45.2},0).wait(1).to({x:21.1,y:45.4},0).wait(1).to({x:21.2,y:45.7},0).wait(1).to({x:21.3,y:45.9},0).wait(1).to({x:21.4,y:46.1},0).wait(1).to({x:21.5,y:46.4},0).wait(1).to({x:21.6,y:46.6},0).wait(1).to({x:21.7,y:46.8},0).wait(1).to({x:21.8,y:47.1},0).wait(1).to({x:21.9,y:47.3},0).wait(1).to({x:22.1,y:47.5},0).wait(1).to({x:22.2,y:47.8},0).wait(1).to({x:22.3,y:48},0).wait(1).to({x:22.4,y:48.2},0).wait(1).to({x:22.5,y:48.5},0).wait(1).to({x:22.6,y:48.7},0).wait(1).to({x:22.7,y:48.9},0).wait(1).to({x:22.8,y:49.2},0).wait(1).to({x:22.9,y:49.4},0).wait(1).to({x:23,y:49.6},0).wait(1).to({x:23.2,y:49.9},0).wait(1).to({x:23.3,y:50.1},0).wait(1).to({x:23.4,y:50.4},0).wait(1).to({x:23.5,y:50.6},0).wait(1).to({x:23.6,y:50.8},0).wait(1).to({x:23.7,y:51.1},0).wait(1).to({x:23.8,y:51.3},0).wait(1).to({x:23.9,y:51.5},0).wait(1).to({x:24,y:51.8},0).wait(1).to({x:24.1,y:52},0).wait(1).to({x:24.3,y:52.2},0).wait(1).to({x:24.4,y:52.5},0).wait(1).to({x:24.5,y:52.7},0).wait(1).to({x:24.6,y:52.9},0).wait(1).to({x:24.7,y:53.2},0).wait(1).to({x:24.8,y:53.4},0).wait(1).to({x:24.9,y:53.6},0).wait(1).to({x:25,y:53.9},0).wait(1).to({x:25.1,y:54.1},0).wait(1).to({x:25.2,y:54.3},0).wait(1).to({x:25.4,y:54.6},0).wait(1).to({x:25.5,y:54.8},0).wait(1).to({x:25.6,y:55},0).wait(1).to({x:25.7,y:55.3},0).wait(1).to({x:25.8,y:55.5},0).wait(1).to({x:25.9,y:55.7},0).wait(1).to({x:26,y:56},0).wait(1).to({x:26.1,y:56.2},0).wait(1).to({x:26.2,y:56.4},0).wait(1).to({x:26.3,y:56.7},0).wait(1).to({x:26.5,y:56.9},0).wait(1).to({x:26.6,y:57.2},0).wait(1).to({x:26.7,y:57.4},0).wait(1).to({x:26.8,y:57.6},0).wait(1).to({x:26.9,y:57.9},0).wait(1).to({x:27,y:58.1},0).wait(1).to({x:27.1,y:58.3},0).wait(1).to({x:27.2,y:58.6},0).wait(1).to({x:27.3,y:58.8},0).wait(1).to({x:27.4,y:59},0).wait(1).to({x:27.6,y:59.3},0).wait(1).to({x:27.7,y:59.5},0).wait(1).to({x:27.8,y:59.7},0).wait(1).to({x:27.9,y:60},0).wait(1).to({x:28,y:60.2},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,15,27.3);


(lib.SymArrowRchgTwn12MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg12();
	this.instance.parent = this;
	this.instance.setTransform(1.5,4,1,1,0,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:4.1},0).wait(1).to({x:1.6,y:4.2},0).wait(1).to({y:4.3},0).wait(1).to({x:1.7,y:4.4},0).wait(1).to({y:4.5},0).wait(1).to({x:1.8,y:4.6},0).wait(1).to({y:4.7},0).wait(1).to({y:4.8},0).wait(1).to({x:1.9,y:4.9},0).wait(1).to({y:5},0).wait(1).to({x:2,y:5.1},0).wait(1).to({y:5.2},0).wait(1).to({x:2.1,y:5.3},0).wait(1).to({y:5.4},0).wait(1).to({y:5.5},0).wait(1).to({x:2.2,y:5.6},0).wait(1).to({y:5.7},0).wait(1).to({x:2.3,y:5.8},0).wait(1).to({y:5.9},0).wait(1).to({x:2.4,y:6},0).wait(1).to({y:6.1},0).wait(1).to({y:6.2},0).wait(1).to({x:2.5,y:6.3},0).wait(1).to({y:6.4},0).wait(1).to({x:2.6,y:6.5},0).wait(1).to({y:6.6},0).wait(1).to({x:2.7,y:6.7},0).wait(1).to({y:6.8},0).wait(1).to({x:2.8,y:6.9},0).wait(1).to({y:7},0).wait(1).to({y:7.1},0).wait(1).to({x:2.9,y:7.2},0).wait(1).to({y:7.3},0).wait(1).to({x:3,y:7.4},0).wait(1).to({y:7.5},0).wait(1).to({x:3.1,y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({x:3.2,y:7.9},0).wait(1).to({y:8},0).wait(1).to({x:3.3,y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({x:3.4,y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({x:3.5,y:8.6},0).wait(1).to({y:8.7},0).wait(1).to({x:3.6,y:8.8},0).wait(1).to({y:8.9},0).wait(1).to({x:3.7,y:9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({x:3.8,y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({x:3.9,y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({x:4,y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:4.1,y:10},0).wait(1).to({y:10.1},0).wait(1).to({x:4.2,y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({x:4.3,y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({x:4.4,y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({x:4.5,y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({x:4.6,y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({x:4.7,y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({x:4.8,y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({x:4.9,y:11.9},0).wait(1).to({y:12},0).wait(1).to({x:5,y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({x:5.1,y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({x:5.2,y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({x:5.3,y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({x:5.4,y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({x:5.5,y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({x:5.6,y:13.5},0).wait(1).to({y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:5.7,y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({x:5.8,y:14},0).wait(1).to({y:14.1},0).wait(1).to({x:5.9,y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({x:6,y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({x:6.1,y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({x:6.2,y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({x:6.3,y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({x:6.4,y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({x:6.5,y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({x:6.6,y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({x:6.7,y:16.1},0).wait(1).to({y:16.2},0).wait(1).to({x:6.8,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({x:6.9,y:16.5},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({x:7,y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({x:7.1,y:17},0).wait(1).to({y:17.1},0).wait(1).to({x:7.2,y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({x:7.3,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:7.4,y:17.7},0).wait(1).to({y:17.8},0).wait(1).to({x:7.5,y:17.9},0).wait(1).to({y:18},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,13);


(lib.SymArrowRchgTwn11MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,5.5,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:5.7},0).wait(1).to({y:5.9},0).wait(1).to({y:6},0).wait(1).to({x:0.6,y:6.2},0).wait(1).to({y:6.4},0).wait(1).to({y:6.6},0).wait(1).to({y:6.8},0).wait(1).to({y:6.9},0).wait(1).to({y:7.1},0).wait(1).to({y:7.3},0).wait(1).to({x:0.7,y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({y:8},0).wait(1).to({y:8.2},0).wait(1).to({y:8.4},0).wait(1).to({y:8.6},0).wait(1).to({x:0.8,y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({x:0.9,y:10},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({x:1,y:11.3},0).wait(1).to({y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({x:1.1,y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({x:1.2,y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:1.3,y:15},0).wait(1).to({y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16.1},0).wait(1).to({x:1.4,y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({x:1.5,y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({x:1.6,y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:1.7,y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({x:1.8,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({y:22},0).wait(1).to({y:22.2},0).wait(1).to({x:1.9,y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({x:2,y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({y:24.7},0).wait(1).to({x:2.1,y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:2.2,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({x:2.3,y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.2},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:2.4,y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:2.5,y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({y:30.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,16);


(lib.SymArrowRchgTwn10MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg10();
	this.instance.parent = this;
	this.instance.setTransform(2,7,1,1,0,0,0,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:7.2},0).wait(1).to({y:7.4},0).wait(1).to({x:2.2,y:7.6},0).wait(1).to({y:7.8},0).wait(1).to({x:2.3,y:8},0).wait(1).to({y:8.2},0).wait(1).to({x:2.4,y:8.4},0).wait(1).to({x:2.5,y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({x:2.6,y:9},0).wait(1).to({y:9.2},0).wait(1).to({x:2.7,y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({x:2.8,y:9.8},0).wait(1).to({x:2.9,y:10},0).wait(1).to({y:10.2},0).wait(1).to({x:3,y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({x:3.1,y:10.8},0).wait(1).to({x:3.2,y:11},0).wait(1).to({y:11.2},0).wait(1).to({x:3.3,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({x:3.4,y:11.8},0).wait(1).to({y:12},0).wait(1).to({x:3.5,y:12.2},0).wait(1).to({x:3.6,y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({x:3.7,y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:3.8,y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({x:3.9,y:13.6},0).wait(1).to({x:4,y:13.8},0).wait(1).to({y:14.1},0).wait(1).to({x:4.1,y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({x:4.2,y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:4.3,y:15.1},0).wait(1).to({x:4.4,y:15.3},0).wait(1).to({y:15.5},0).wait(1).to({x:4.5,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({x:4.6,y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({x:4.7,y:16.5},0).wait(1).to({x:4.8,y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:4.9,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:5,y:17.5},0).wait(1).to({x:5.1,y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({x:5.2,y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({x:5.3,y:18.5},0).wait(1).to({y:18.7},0).wait(1).to({x:5.4,y:18.9},0).wait(1).to({x:5.5,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:5.6,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:5.7,y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({x:5.8,y:20.3},0).wait(1).to({x:5.9,y:20.5},0).wait(1).to({y:20.7},0).wait(1).to({x:6,y:20.9},0).wait(1).to({y:21.1},0).wait(1).to({x:6.1,y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({x:6.2,y:21.7},0).wait(1).to({x:6.3,y:21.9},0).wait(1).to({y:22.1},0).wait(1).to({x:6.4,y:22.3},0).wait(1).to({y:22.5},0).wait(1).to({x:6.5,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({x:6.6,y:23.1},0).wait(1).to({x:6.7,y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({x:6.8,y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({x:6.9,y:24.1},0).wait(1).to({y:24.3},0).wait(1).to({x:7,y:24.5},0).wait(1).to({x:7.1,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({x:7.2,y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({x:7.3,y:25.5},0).wait(1).to({x:7.4,y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({x:7.5,y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({x:7.6,y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({x:7.7,y:26.9},0).wait(1).to({x:7.8,y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({x:7.9,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:8,y:27.9},0).wait(1).to({y:28.2},0).wait(1).to({x:8.1,y:28.4},0).wait(1).to({x:8.2,y:28.6},0).wait(1).to({y:28.8},0).wait(1).to({x:8.3,y:29},0).wait(1).to({y:29.2},0).wait(1).to({x:8.4,y:29.4},0).wait(1).to({y:29.6},0).wait(1).to({x:8.5,y:29.8},0).wait(1).to({x:8.6,y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:8.7,y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({x:8.8,y:30.8},0).wait(1).to({y:31},0).wait(1).to({x:8.9,y:31.2},0).wait(1).to({x:9,y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({x:9.1,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:9.2,y:32.2},0).wait(1).to({x:9.3,y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({x:9.4,y:32.8},0).wait(1).to({y:33},0).wait(1).to({x:9.5,y:33.2},0).wait(1).to({y:33.4},0).wait(1).to({x:9.6,y:33.6},0).wait(1).to({x:9.7,y:33.8},0).wait(1).to({y:34},0).wait(1).to({x:9.8,y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({x:9.9,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({x:10,y:35},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,19);


(lib.SymArrowRchgTwn9MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg9();
	this.instance.parent = this;
	this.instance.setTransform(1,7,1,1,0,0,0,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.2},0).wait(1).to({x:1.1,y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.9},0).wait(1).to({y:8.2},0).wait(1).to({x:1.2,y:8.4},0).wait(1).to({y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({x:1.3,y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({y:9.5},0).wait(1).to({y:9.8},0).wait(1).to({x:1.4,y:10},0).wait(1).to({y:10.2},0).wait(1).to({y:10.5},0).wait(1).to({x:1.5,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({y:11.4},0).wait(1).to({x:1.6,y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:12.1},0).wait(1).to({x:1.7,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:1.8,y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({y:13.7},0).wait(1).to({x:1.9,y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({x:2,y:14.8},0).wait(1).to({y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({x:2.1,y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:16},0).wait(1).to({x:2.2,y:16.2},0).wait(1).to({y:16.4},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:2.3,y:17.1},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({x:2.4,y:17.8},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({x:2.5,y:18.7},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({x:2.6,y:19.4},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({x:2.7,y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({x:2.8,y:21},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({y:21.7},0).wait(1).to({x:2.9,y:22},0).wait(1).to({y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({x:3,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({x:3.1,y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({x:3.2,y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({y:25},0).wait(1).to({x:3.3,y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({x:3.4,y:25.9},0).wait(1).to({y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({y:26.6},0).wait(1).to({x:3.5,y:26.8},0).wait(1).to({y:27},0).wait(1).to({y:27.3},0).wait(1).to({x:3.6,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({y:27.9},0).wait(1).to({y:28.2},0).wait(1).to({x:3.7,y:28.4},0).wait(1).to({y:28.6},0).wait(1).to({y:28.9},0).wait(1).to({x:3.8,y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:3.9,y:30},0).wait(1).to({y:30.3},0).wait(1).to({y:30.5},0).wait(1).to({x:4,y:30.7},0).wait(1).to({y:30.9},0).wait(1).to({y:31.2},0).wait(1).to({x:4.1,y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({y:31.9},0).wait(1).to({y:32.1},0).wait(1).to({x:4.2,y:32.3},0).wait(1).to({y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({x:4.3,y:33},0).wait(1).to({y:33.2},0).wait(1).to({y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({x:4.4,y:33.9},0).wait(1).to({y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({x:4.5,y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({y:35.1},0).wait(1).to({y:35.3},0).wait(1).to({x:4.6,y:35.5},0).wait(1).to({y:35.8},0).wait(1).to({y:36},0).wait(1).to({x:4.7,y:36.2},0).wait(1).to({y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({x:4.8,y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({x:4.9,y:37.8},0).wait(1).to({y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({x:5,y:38.8},0).wait(1).to({y:39},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,19);


(lib.SymArrowRchgTwn8MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.4,y:6.3},0).wait(1).to({x:2.3,y:6.5},0).wait(1).to({x:2.2,y:6.8},0).wait(1).to({x:2.1,y:7},0).wait(1).to({x:2,y:7.3},0).wait(1).to({x:1.9,y:7.5},0).wait(1).to({x:1.8,y:7.8},0).wait(1).to({x:1.6,y:8},0).wait(1).to({x:1.5,y:8.3},0).wait(1).to({x:1.4,y:8.5},0).wait(1).to({x:1.3,y:8.8},0).wait(1).to({x:1.2,y:9},0).wait(1).to({x:1.1,y:9.3},0).wait(1).to({x:1,y:9.5},0).wait(1).to({x:0.8,y:9.8},0).wait(1).to({x:0.7,y:10.1},0).wait(1).to({x:0.6,y:10.3},0).wait(1).to({x:0.5,y:10.6},0).wait(1).to({x:0.4,y:10.8},0).wait(1).to({x:0.3,y:11.1},0).wait(1).to({x:0.2,y:11.3},0).wait(1).to({x:0,y:11.6},0).wait(1).to({x:-0.1,y:11.8},0).wait(1).to({x:-0.2,y:12.1},0).wait(1).to({x:-0.3,y:12.3},0).wait(1).to({x:-0.4,y:12.6},0).wait(1).to({x:-0.5,y:12.8},0).wait(1).to({x:-0.6,y:13.1},0).wait(1).to({x:-0.8,y:13.3},0).wait(1).to({x:-0.9,y:13.6},0).wait(1).to({x:-1,y:13.8},0).wait(1).to({x:-1.1,y:14.1},0).wait(1).to({x:-1.2,y:14.4},0).wait(1).to({x:-1.3,y:14.6},0).wait(1).to({x:-1.4,y:14.9},0).wait(1).to({x:-1.6,y:15.1},0).wait(1).to({x:-1.7,y:15.4},0).wait(1).to({x:-1.8,y:15.6},0).wait(1).to({x:-1.9,y:15.9},0).wait(1).to({x:-2,y:16.1},0).wait(1).to({x:-2.1,y:16.4},0).wait(1).to({x:-2.2,y:16.6},0).wait(1).to({x:-2.3,y:16.9},0).wait(1).to({x:-2.5,y:17.1},0).wait(1).to({x:-2.6,y:17.4},0).wait(1).to({x:-2.7,y:17.6},0).wait(1).to({x:-2.8,y:17.9},0).wait(1).to({x:-2.9,y:18.2},0).wait(1).to({x:-3,y:18.4},0).wait(1).to({x:-3.1,y:18.7},0).wait(1).to({x:-3.3,y:18.9},0).wait(1).to({x:-3.4,y:19.2},0).wait(1).to({x:-3.5,y:19.4},0).wait(1).to({x:-3.6,y:19.7},0).wait(1).to({x:-3.7,y:19.9},0).wait(1).to({x:-3.8,y:20.2},0).wait(1).to({x:-3.9,y:20.4},0).wait(1).to({x:-4.1,y:20.7},0).wait(1).to({x:-4.2,y:20.9},0).wait(1).to({x:-4.3,y:21.2},0).wait(1).to({x:-4.4,y:21.4},0).wait(1).to({x:-4.5,y:21.7},0).wait(1).to({x:-4.6,y:21.9},0).wait(1).to({x:-4.7,y:22.2},0).wait(1).to({x:-4.9,y:22.5},0).wait(1).to({x:-5,y:22.7},0).wait(1).to({x:-5.1,y:23},0).wait(1).to({x:-5.2,y:23.2},0).wait(1).to({x:-5.3,y:23.5},0).wait(1).to({x:-5.4,y:23.7},0).wait(1).to({x:-5.5,y:24},0).wait(1).to({x:-5.7,y:24.2},0).wait(1).to({x:-5.8,y:24.5},0).wait(1).to({x:-5.9,y:24.7},0).wait(1).to({x:-6,y:25},0).wait(1).to({x:-6.1,y:25.2},0).wait(1).to({x:-6.2,y:25.5},0).wait(1).to({x:-6.3,y:25.7},0).wait(1).to({x:-6.5,y:26},0).wait(1).to({regX:2.1,scaleX:1,scaleY:1,rotation:-10.8,x:-5.7,y:25.5},0).wait(1).to({regX:2,x:-5.8,y:25.8},0).wait(1).to({x:-5.9,y:26.1},0).wait(1).to({x:-6,y:26.4},0).wait(1).to({y:26.7},0).wait(1).to({x:-6.1,y:27},0).wait(1).to({x:-6.2,y:27.2},0).wait(1).to({x:-6.3,y:27.5},0).wait(1).to({y:27.8},0).wait(1).to({x:-6.4,y:28.1},0).wait(1).to({x:-6.5,y:28.4},0).wait(1).to({y:28.6},0).wait(1).to({x:-6.6,y:28.9},0).wait(1).to({x:-6.7,y:29.2},0).wait(1).to({x:-6.8,y:29.5},0).wait(1).to({y:29.8},0).wait(1).to({x:-6.9,y:30},0).wait(1).to({x:-7,y:30.3},0).wait(1).to({y:30.6},0).wait(1).to({x:-7.1,y:30.9},0).wait(1).to({x:-7.2,y:31.2},0).wait(1).to({x:-7.3,y:31.4},0).wait(1).to({y:31.7},0).wait(1).to({x:-7.4,y:32},0).wait(1).to({x:-7.5,y:32.3},0).wait(1).to({x:-7.6,y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({x:-7.7,y:33.1},0).wait(1).to({x:-7.8,y:33.4},0).wait(1).to({y:33.7},0).wait(1).to({x:-7.9,y:34},0).wait(1).to({x:-8,y:34.2},0).wait(1).to({x:-8.1,y:34.5},0).wait(1).to({y:34.8},0).wait(1).to({x:-8.2,y:35.1},0).wait(1).to({x:-8.3,y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({x:-8.4,y:35.9},0).wait(1).to({x:-8.5,y:36.2},0).wait(1).to({x:-8.6,y:36.5},0).wait(1).to({y:36.8},0).wait(1).to({x:-8.7,y:37.1},0).wait(1).to({x:-8.8,y:37.3},0).wait(1).to({y:37.6},0).wait(1).to({x:-8.9,y:37.9},0).wait(1).to({x:-9,y:38.2},0).wait(1).to({x:-9.1,y:38.5},0).wait(1).to({y:38.7},0).wait(1).to({x:-9.2,y:39},0).wait(1).to({x:-9.3,y:39.3},0).wait(1).to({x:-9.4,y:39.6},0).wait(1).to({y:39.9},0).wait(1).to({x:-9.5,y:40.1},0).wait(1).to({x:-9.6,y:40.4},0).wait(1).to({y:40.7},0).wait(1).to({x:-9.7,y:41},0).wait(1).to({x:-9.8,y:41.3},0).wait(1).to({x:-9.9,y:41.5},0).wait(1).to({y:41.8},0).wait(1).to({x:-10,y:42.1},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymArrowRchgTwn7MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg7();
	this.instance.parent = this;
	this.instance.setTransform(2.5,8.5,1,1,0,0,0,2.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.6,y:8.8},0).wait(1).to({x:2.7,y:9.1},0).wait(1).to({x:2.8,y:9.3},0).wait(1).to({y:9.6},0).wait(1).to({x:2.9,y:9.9},0).wait(1).to({x:3,y:10.2},0).wait(1).to({x:3.1,y:10.5},0).wait(1).to({x:3.2,y:10.7},0).wait(1).to({x:3.3,y:11},0).wait(1).to({x:3.4,y:11.3},0).wait(1).to({y:11.6},0).wait(1).to({x:3.5,y:11.9},0).wait(1).to({x:3.6,y:12.1},0).wait(1).to({x:3.7,y:12.4},0).wait(1).to({x:3.8,y:12.7},0).wait(1).to({x:3.9,y:13},0).wait(1).to({x:4,y:13.3},0).wait(1).to({x:4.1,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({x:4.2,y:14.1},0).wait(1).to({x:4.3,y:14.4},0).wait(1).to({x:4.4,y:14.7},0).wait(1).to({x:4.5,y:15},0).wait(1).to({x:4.6,y:15.2},0).wait(1).to({x:4.7,y:15.5},0).wait(1).to({y:15.8},0).wait(1).to({x:4.8,y:16.1},0).wait(1).to({x:4.9,y:16.4},0).wait(1).to({x:5,y:16.6},0).wait(1).to({x:5.1,y:16.9},0).wait(1).to({x:5.2,y:17.2},0).wait(1).to({x:5.3,y:17.5},0).wait(1).to({y:17.8},0).wait(1).to({x:5.4,y:18},0).wait(1).to({x:5.5,y:18.3},0).wait(1).to({x:5.6,y:18.6},0).wait(1).to({x:5.7,y:18.9},0).wait(1).to({x:5.8,y:19.2},0).wait(1).to({x:5.9,y:19.4},0).wait(1).to({x:6,y:19.7},0).wait(1).to({y:20},0).wait(1).to({x:6.1,y:20.3},0).wait(1).to({x:6.2,y:20.6},0).wait(1).to({x:6.3,y:20.8},0).wait(1).to({x:6.4,y:21.1},0).wait(1).to({x:6.5,y:21.4},0).wait(1).to({x:6.6,y:21.7},0).wait(1).to({y:22},0).wait(1).to({x:6.7,y:22.2},0).wait(1).to({x:6.8,y:22.5},0).wait(1).to({x:6.9,y:22.8},0).wait(1).to({x:7,y:23.1},0).wait(1).to({x:7.1,y:23.4},0).wait(1).to({x:7.2,y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({x:7.3,y:24.2},0).wait(1).to({x:7.4,y:24.5},0).wait(1).to({x:7.5,y:24.8},0).wait(1).to({x:7.6,y:25.1},0).wait(1).to({x:7.7,y:25.3},0).wait(1).to({x:7.8,y:25.6},0).wait(1).to({x:7.9,y:25.9},0).wait(1).to({y:26.2},0).wait(1).to({x:8,y:26.5},0).wait(1).to({x:8.1,y:26.7},0).wait(1).to({x:8.2,y:27},0).wait(1).to({x:8.3,y:27.3},0).wait(1).to({x:8.4,y:27.6},0).wait(1).to({x:8.5,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({x:8.6,y:28.4},0).wait(1).to({x:8.7,y:28.7},0).wait(1).to({x:8.8,y:29},0).wait(1).to({x:8.9,y:29.3},0).wait(1).to({x:9,y:29.5},0).wait(1).to({x:9.1,y:29.8},0).wait(1).to({y:30.1},0).wait(1).to({x:9.2,y:30.4},0).wait(1).to({x:9.3,y:30.7},0).wait(1).to({x:9.4,y:30.9},0).wait(1).to({x:9.5,y:31.2},0).wait(1).to({x:9.6,y:31.5},0).wait(1).to({x:9.7,y:31.8},0).wait(1).to({x:9.8,y:32.1},0).wait(1).to({y:32.3},0).wait(1).to({x:9.9,y:32.6},0).wait(1).to({x:10,y:32.9},0).wait(1).to({x:10.1,y:33.2},0).wait(1).to({x:10.2,y:33.5},0).wait(1).to({x:10.3,y:33.8},0).wait(1).to({x:10.4,y:34},0).wait(1).to({y:34.3},0).wait(1).to({x:10.5,y:34.6},0).wait(1).to({x:10.6,y:34.9},0).wait(1).to({x:10.7,y:35.2},0).wait(1).to({x:10.8,y:35.4},0).wait(1).to({x:10.9,y:35.7},0).wait(1).to({x:11,y:36},0).wait(1).to({y:36.3},0).wait(1).to({x:11.1,y:36.6},0).wait(1).to({x:11.2,y:36.8},0).wait(1).to({x:11.3,y:37.1},0).wait(1).to({x:11.4,y:37.4},0).wait(1).to({x:11.5,y:37.7},0).wait(1).to({x:11.6,y:38},0).wait(1).to({x:11.7,y:38.2},0).wait(1).to({y:38.5},0).wait(1).to({x:11.8,y:38.8},0).wait(1).to({x:11.9,y:39.1},0).wait(1).to({x:12,y:39.4},0).wait(1).to({x:12.1,y:39.6},0).wait(1).to({x:12.2,y:39.9},0).wait(1).to({x:12.3,y:40.2},0).wait(1).to({y:40.5},0).wait(1).to({x:12.4,y:40.8},0).wait(1).to({x:12.5,y:41},0).wait(1).to({x:12.6,y:41.3},0).wait(1).to({x:12.7,y:41.6},0).wait(1).to({x:12.8,y:41.9},0).wait(1).to({x:12.9,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:13,y:42.7},0).wait(1).to({x:13.1,y:43},0).wait(1).to({x:13.2,y:43.3},0).wait(1).to({x:13.3,y:43.6},0).wait(1).to({x:13.4,y:43.9},0).wait(1).to({x:13.5,y:44.1},0).wait(1).to({x:13.6,y:44.4},0).wait(1).to({y:44.7},0).wait(1).to({x:13.7,y:45},0).wait(1).to({x:13.8,y:45.3},0).wait(1).to({x:13.9,y:45.5},0).wait(1).to({x:14,y:45.8},0).wait(1).to({x:14.1,y:46.1},0).wait(1).to({x:14.2,y:46.4},0).wait(1).to({y:46.7},0).wait(1).to({x:14.3,y:46.9},0).wait(1).to({x:14.4,y:47.2},0).wait(1).to({x:14.5,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,22);


(lib.SymArrowRchgTwn6MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg6();
	this.instance.parent = this;
	this.instance.setTransform(2,8.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:8.8},0).wait(1).to({y:9.1},0).wait(1).to({x:2.2,y:9.3},0).wait(1).to({x:2.3,y:9.6},0).wait(1).to({y:9.9},0).wait(1).to({x:2.4,y:10.2},0).wait(1).to({x:2.5,y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({x:2.6,y:11},0).wait(1).to({y:11.3},0).wait(1).to({x:2.7,y:11.6},0).wait(1).to({x:2.8,y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({x:2.9,y:12.4},0).wait(1).to({x:3,y:12.7},0).wait(1).to({y:13},0).wait(1).to({x:3.1,y:13.3},0).wait(1).to({x:3.2,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({x:3.3,y:14.1},0).wait(1).to({x:3.4,y:14.4},0).wait(1).to({y:14.7},0).wait(1).to({x:3.5,y:15},0).wait(1).to({x:3.6,y:15.2},0).wait(1).to({y:15.5},0).wait(1).to({x:3.7,y:15.8},0).wait(1).to({y:16.1},0).wait(1).to({x:3.8,y:16.4},0).wait(1).to({x:3.9,y:16.6},0).wait(1).to({y:16.9},0).wait(1).to({x:4,y:17.2},0).wait(1).to({x:4.1,y:17.5},0).wait(1).to({y:17.8},0).wait(1).to({x:4.2,y:18},0).wait(1).to({x:4.3,y:18.3},0).wait(1).to({y:18.6},0).wait(1).to({x:4.4,y:18.9},0).wait(1).to({x:4.5,y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({x:4.6,y:19.7},0).wait(1).to({x:4.7,y:20},0).wait(1).to({y:20.3},0).wait(1).to({x:4.8,y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({x:4.9,y:21.1},0).wait(1).to({x:5,y:21.4},0).wait(1).to({y:21.7},0).wait(1).to({x:5.1,y:22},0).wait(1).to({x:5.2,y:22.2},0).wait(1).to({y:22.5},0).wait(1).to({x:5.3,y:22.8},0).wait(1).to({x:5.4,y:23.1},0).wait(1).to({y:23.4},0).wait(1).to({x:5.5,y:23.7},0).wait(1).to({x:5.6,y:23.9},0).wait(1).to({y:24.2},0).wait(1).to({x:5.7,y:24.5},0).wait(1).to({x:5.8,y:24.8},0).wait(1).to({y:25.1},0).wait(1).to({x:5.9,y:25.3},0).wait(1).to({y:25.6},0).wait(1).to({x:6,y:25.9},0).wait(1).to({x:6.1,y:26.2},0).wait(1).to({y:26.5},0).wait(1).to({x:6.2,y:26.7},0).wait(1).to({x:6.3,y:27},0).wait(1).to({y:27.3},0).wait(1).to({x:6.4,y:27.6},0).wait(1).to({x:6.5,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({x:6.6,y:28.4},0).wait(1).to({x:6.7,y:28.7},0).wait(1).to({y:29},0).wait(1).to({x:6.8,y:29.3},0).wait(1).to({x:6.9,y:29.5},0).wait(1).to({y:29.8},0).wait(1).to({x:7,y:30.1},0).wait(1).to({x:7.1,y:30.4},0).wait(1).to({y:30.7},0).wait(1).to({x:7.2,y:30.9},0).wait(1).to({y:31.2},0).wait(1).to({x:7.3,y:31.5},0).wait(1).to({x:7.4,y:31.8},0).wait(1).to({y:32.1},0).wait(1).to({x:7.5,y:32.3},0).wait(1).to({x:7.6,y:32.6},0).wait(1).to({y:32.9},0).wait(1).to({x:7.7,y:33.2},0).wait(1).to({x:7.8,y:33.5},0).wait(1).to({y:33.8},0).wait(1).to({x:7.9,y:34},0).wait(1).to({x:8,y:34.3},0).wait(1).to({y:34.6},0).wait(1).to({x:8.1,y:34.9},0).wait(1).to({x:8.2,y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({x:8.3,y:35.7},0).wait(1).to({y:36},0).wait(1).to({x:8.4,y:36.3},0).wait(1).to({x:8.5,y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({x:8.6,y:37.1},0).wait(1).to({x:8.7,y:37.4},0).wait(1).to({y:37.7},0).wait(1).to({x:8.8,y:38},0).wait(1).to({x:8.9,y:38.2},0).wait(1).to({y:38.5},0).wait(1).to({x:9,y:38.8},0).wait(1).to({x:9.1,y:39.1},0).wait(1).to({y:39.4},0).wait(1).to({x:9.2,y:39.6},0).wait(1).to({x:9.3,y:39.9},0).wait(1).to({y:40.2},0).wait(1).to({x:9.4,y:40.5},0).wait(1).to({y:40.8},0).wait(1).to({x:9.5,y:41},0).wait(1).to({x:9.6,y:41.3},0).wait(1).to({y:41.6},0).wait(1).to({x:9.7,y:41.9},0).wait(1).to({x:9.8,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:9.9,y:42.7},0).wait(1).to({x:10,y:43},0).wait(1).to({y:43.3},0).wait(1).to({x:10.1,y:43.6},0).wait(1).to({x:10.2,y:43.9},0).wait(1).to({y:44.1},0).wait(1).to({x:10.3,y:44.4},0).wait(1).to({x:10.4,y:44.7},0).wait(1).to({y:45},0).wait(1).to({x:10.5,y:45.3},0).wait(1).to({y:45.5},0).wait(1).to({x:10.6,y:45.8},0).wait(1).to({x:10.7,y:46.1},0).wait(1).to({y:46.4},0).wait(1).to({x:10.8,y:46.7},0).wait(1).to({x:10.9,y:46.9},0).wait(1).to({y:47.2},0).wait(1).to({x:11,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,22);


(lib.SymArrowRchgTwn5MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg5();
	this.instance.parent = this;
	this.instance.setTransform(1,9,1,1,0,0,0,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.3},0).wait(1).to({x:1.1,y:9.6},0).wait(1).to({y:9.9},0).wait(1).to({y:10.2},0).wait(1).to({x:1.2,y:10.4},0).wait(1).to({y:10.7},0).wait(1).to({x:1.3,y:11},0).wait(1).to({y:11.3},0).wait(1).to({y:11.6},0).wait(1).to({x:1.4,y:11.9},0).wait(1).to({y:12.2},0).wait(1).to({y:12.5},0).wait(1).to({x:1.5,y:12.7},0).wait(1).to({y:13},0).wait(1).to({y:13.3},0).wait(1).to({x:1.6,y:13.6},0).wait(1).to({y:13.9},0).wait(1).to({y:14.2},0).wait(1).to({x:1.7,y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({x:1.8,y:15},0).wait(1).to({y:15.3},0).wait(1).to({y:15.6},0).wait(1).to({x:1.9,y:15.9},0).wait(1).to({y:16.2},0).wait(1).to({y:16.5},0).wait(1).to({x:2,y:16.8},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:2.1,y:17.6},0).wait(1).to({y:17.9},0).wait(1).to({x:2.2,y:18.2},0).wait(1).to({y:18.5},0).wait(1).to({y:18.8},0).wait(1).to({x:2.3,y:19.1},0).wait(1).to({y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({x:2.4,y:19.9},0).wait(1).to({y:20.2},0).wait(1).to({y:20.5},0).wait(1).to({x:2.5,y:20.8},0).wait(1).to({y:21.1},0).wait(1).to({y:21.4},0).wait(1).to({x:2.6,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:2.7,y:22.2},0).wait(1).to({y:22.5},0).wait(1).to({y:22.8},0).wait(1).to({x:2.8,y:23.1},0).wait(1).to({y:23.4},0).wait(1).to({y:23.7},0).wait(1).to({x:2.9,y:24},0).wait(1).to({y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({x:3,y:24.8},0).wait(1).to({y:25.1},0).wait(1).to({x:3.1,y:25.4},0).wait(1).to({y:25.7},0).wait(1).to({y:26},0).wait(1).to({x:3.2,y:26.3},0).wait(1).to({y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:3.3,y:27.1},0).wait(1).to({y:27.4},0).wait(1).to({y:27.7},0).wait(1).to({x:3.4,y:28},0).wait(1).to({y:28.3},0).wait(1).to({y:28.6},0).wait(1).to({x:3.5,y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({x:3.6,y:29.4},0).wait(1).to({y:29.7},0).wait(1).to({y:30},0).wait(1).to({x:3.7,y:30.3},0).wait(1).to({y:30.6},0).wait(1).to({y:30.9},0).wait(1).to({x:3.8,y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({y:31.7},0).wait(1).to({x:3.9,y:32},0).wait(1).to({y:32.3},0).wait(1).to({y:32.6},0).wait(1).to({x:4,y:32.9},0).wait(1).to({y:33.2},0).wait(1).to({x:4.1,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({y:34},0).wait(1).to({x:4.2,y:34.3},0).wait(1).to({y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({x:4.3,y:35.2},0).wait(1).to({y:35.5},0).wait(1).to({y:35.8},0).wait(1).to({x:4.4,y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({x:4.5,y:36.6},0).wait(1).to({y:36.9},0).wait(1).to({y:37.2},0).wait(1).to({x:4.6,y:37.5},0).wait(1).to({y:37.8},0).wait(1).to({y:38.1},0).wait(1).to({x:4.7,y:38.4},0).wait(1).to({y:38.6},0).wait(1).to({y:38.9},0).wait(1).to({x:4.8,y:39.2},0).wait(1).to({y:39.5},0).wait(1).to({y:39.8},0).wait(1).to({x:4.9,y:40.1},0).wait(1).to({y:40.4},0).wait(1).to({x:5,y:40.7},0).wait(1).to({y:40.9},0).wait(1).to({y:41.2},0).wait(1).to({x:5.1,y:41.5},0).wait(1).to({y:41.8},0).wait(1).to({y:42.1},0).wait(1).to({x:5.2,y:42.4},0).wait(1).to({y:42.7},0).wait(1).to({y:43},0).wait(1).to({x:5.3,y:43.2},0).wait(1).to({y:43.5},0).wait(1).to({x:5.4,y:43.8},0).wait(1).to({y:44.1},0).wait(1).to({y:44.4},0).wait(1).to({x:5.5,y:44.7},0).wait(1).to({y:45},0).wait(1).to({y:45.3},0).wait(1).to({x:5.6,y:45.5},0).wait(1).to({y:45.8},0).wait(1).to({y:46.1},0).wait(1).to({x:5.7,y:46.4},0).wait(1).to({y:46.7},0).wait(1).to({y:47},0).wait(1).to({x:5.8,y:47.3},0).wait(1).to({y:47.6},0).wait(1).to({x:5.9,y:47.8},0).wait(1).to({y:48.1},0).wait(1).to({y:48.4},0).wait(1).to({x:6,y:48.7},0).wait(1).to({y:49},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,23);


(lib.SymArrowRchgTwn4MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg4();
	this.instance.parent = this;
	this.instance.setTransform(1,8.5,1,1,0,0,0,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.8},0).wait(1).to({y:9.1},0).wait(1).to({x:0.9,y:9.4},0).wait(1).to({y:9.7},0).wait(1).to({y:10},0).wait(1).to({x:0.8,y:10.3},0).wait(1).to({y:10.6},0).wait(1).to({y:10.9},0).wait(1).to({x:0.7,y:11.2},0).wait(1).to({y:11.5},0).wait(1).to({y:11.8},0).wait(1).to({x:0.6,y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({x:0.5,y:12.7},0).wait(1).to({y:13},0).wait(1).to({y:13.3},0).wait(1).to({x:0.4,y:13.6},0).wait(1).to({y:13.9},0).wait(1).to({y:14.2},0).wait(1).to({x:0.3,y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({y:15.1},0).wait(1).to({x:0.2,y:15.4},0).wait(1).to({y:15.8},0).wait(1).to({y:16.1},0).wait(1).to({x:0.1,y:16.4},0).wait(1).to({y:16.7},0).wait(1).to({x:0,y:17},0).wait(1).to({y:17.3},0).wait(1).to({y:17.6},0).wait(1).to({x:-0.1,y:17.9},0).wait(1).to({y:18.2},0).wait(1).to({y:18.5},0).wait(1).to({x:-0.2,y:18.8},0).wait(1).to({y:19.1},0).wait(1).to({y:19.4},0).wait(1).to({x:-0.3,y:19.7},0).wait(1).to({y:20},0).wait(1).to({x:-0.4,y:20.3},0).wait(1).to({y:20.6},0).wait(1).to({y:20.9},0).wait(1).to({x:-0.5,y:21.2},0).wait(1).to({y:21.5},0).wait(1).to({y:21.8},0).wait(1).to({x:-0.6,y:22.1},0).wait(1).to({y:22.4},0).wait(1).to({y:22.7},0).wait(1).to({x:-0.7,y:23},0).wait(1).to({y:23.3},0).wait(1).to({y:23.6},0).wait(1).to({x:-0.8,y:23.9},0).wait(1).to({y:24.2},0).wait(1).to({x:-0.9,y:24.5},0).wait(1).to({y:24.8},0).wait(1).to({y:25.1},0).wait(1).to({x:-1,y:25.4},0).wait(1).to({y:25.7},0).wait(1).to({y:26},0).wait(1).to({x:-1.1,y:26.3},0).wait(1).to({y:26.6},0).wait(1).to({y:26.9},0).wait(1).to({x:-1.2,y:27.2},0).wait(1).to({y:27.5},0).wait(1).to({x:-1.3,y:27.8},0).wait(1).to({y:28.1},0).wait(1).to({y:28.4},0).wait(1).to({x:-1.4,y:28.7},0).wait(1).to({y:29},0).wait(1).to({y:29.3},0).wait(1).to({x:-1.5,y:29.7},0).wait(1).to({y:30},0).wait(1).to({y:30.3},0).wait(1).to({x:-1.6,y:30.6},0).wait(1).to({y:30.9},0).wait(1).to({y:31.2},0).wait(1).to({x:-1.7,y:31.5},0).wait(1).to({y:31.8},0).wait(1).to({x:-1.8,y:32.1},0).wait(1).to({y:32.4},0).wait(1).to({y:32.7},0).wait(1).to({x:-1.9,y:33},0).wait(1).to({y:33.3},0).wait(1).to({y:33.6},0).wait(1).to({x:-2,y:33.9},0).wait(1).to({y:34.2},0).wait(1).to({y:34.5},0).wait(1).to({x:-2.1,y:34.8},0).wait(1).to({y:35.1},0).wait(1).to({x:-2.2,y:35.4},0).wait(1).to({y:35.7},0).wait(1).to({y:36},0).wait(1).to({x:-2.3,y:36.3},0).wait(1).to({y:36.6},0).wait(1).to({y:36.9},0).wait(1).to({x:-2.4,y:37.2},0).wait(1).to({y:37.5},0).wait(1).to({y:37.8},0).wait(1).to({x:-2.5,y:38.1},0).wait(1).to({y:38.4},0).wait(1).to({y:38.7},0).wait(1).to({x:-2.6,y:39},0).wait(1).to({y:39.3},0).wait(1).to({x:-2.7,y:39.6},0).wait(1).to({y:39.9},0).wait(1).to({y:40.2},0).wait(1).to({x:-2.8,y:40.5},0).wait(1).to({y:40.8},0).wait(1).to({y:41.1},0).wait(1).to({x:-2.9,y:41.4},0).wait(1).to({y:41.7},0).wait(1).to({y:42},0).wait(1).to({x:-3,y:42.3},0).wait(1).to({y:42.6},0).wait(1).to({x:-3.1,y:42.9},0).wait(1).to({y:43.2},0).wait(1).to({y:43.6},0).wait(1).to({x:-3.2,y:43.9},0).wait(1).to({y:44.2},0).wait(1).to({y:44.5},0).wait(1).to({x:-3.3,y:44.8},0).wait(1).to({y:45.1},0).wait(1).to({y:45.4},0).wait(1).to({x:-3.4,y:45.7},0).wait(1).to({y:46},0).wait(1).to({y:46.3},0).wait(1).to({x:-3.5,y:46.6},0).wait(1).to({y:46.9},0).wait(1).to({x:-3.6,y:47.2},0).wait(1).to({y:47.5},0).wait(1).to({y:47.8},0).wait(1).to({x:-3.7,y:48.1},0).wait(1).to({y:48.4},0).wait(1).to({y:48.7},0).wait(1).to({x:-3.8,y:49},0).wait(1).to({y:49.3},0).wait(1).to({y:49.6},0).wait(1).to({x:-3.9,y:49.9},0).wait(1).to({y:50.2},0).wait(1).to({x:-4,y:50.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,22);


(lib.SymArrowRchgTwn3MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,9,1,1,0,0,0,1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.3},0).wait(1).to({x:1.4,y:9.6},0).wait(1).to({y:10},0).wait(1).to({x:1.3,y:10.3},0).wait(1).to({x:1.2,y:10.6},0).wait(1).to({y:10.9},0).wait(1).to({x:1.1,y:11.3},0).wait(1).to({x:1,y:11.6},0).wait(1).to({y:11.9},0).wait(1).to({x:0.9,y:12.2},0).wait(1).to({x:0.8,y:12.6},0).wait(1).to({y:12.9},0).wait(1).to({x:0.7,y:13.2},0).wait(1).to({x:0.6,y:13.5},0).wait(1).to({y:13.9},0).wait(1).to({x:0.5,y:14.2},0).wait(1).to({x:0.4,y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({x:0.3,y:15.2},0).wait(1).to({y:15.5},0).wait(1).to({x:0.2,y:15.8},0).wait(1).to({x:0.1,y:16.1},0).wait(1).to({y:16.4},0).wait(1).to({x:0,y:16.8},0).wait(1).to({x:-0.1,y:17.1},0).wait(1).to({y:17.4},0).wait(1).to({x:-0.2,y:17.7},0).wait(1).to({x:-0.3,y:18.1},0).wait(1).to({y:18.4},0).wait(1).to({x:-0.4,y:18.7},0).wait(1).to({x:-0.5,y:19},0).wait(1).to({y:19.4},0).wait(1).to({x:-0.6,y:19.7},0).wait(1).to({x:-0.7,y:20},0).wait(1).to({y:20.3},0).wait(1).to({x:-0.8,y:20.7},0).wait(1).to({y:21},0).wait(1).to({x:-0.9,y:21.3},0).wait(1).to({x:-1,y:21.6},0).wait(1).to({y:21.9},0).wait(1).to({x:-1.1,y:22.3},0).wait(1).to({x:-1.2,y:22.6},0).wait(1).to({y:22.9},0).wait(1).to({x:-1.3,y:23.2},0).wait(1).to({x:-1.4,y:23.6},0).wait(1).to({y:23.9},0).wait(1).to({x:-1.5,y:24.2},0).wait(1).to({x:-1.6,y:24.5},0).wait(1).to({y:24.9},0).wait(1).to({x:-1.7,y:25.2},0).wait(1).to({x:-1.8,y:25.5},0).wait(1).to({y:25.8},0).wait(1).to({x:-1.9,y:26.2},0).wait(1).to({y:26.5},0).wait(1).to({x:-2,y:26.8},0).wait(1).to({x:-2.1,y:27.1},0).wait(1).to({y:27.5},0).wait(1).to({x:-2.2,y:27.8},0).wait(1).to({x:-2.3,y:28.1},0).wait(1).to({y:28.4},0).wait(1).to({x:-2.4,y:28.7},0).wait(1).to({x:-2.5,y:29.1},0).wait(1).to({y:29.4},0).wait(1).to({x:-2.6,y:29.7},0).wait(1).to({x:-2.7,y:30},0).wait(1).to({y:30.4},0).wait(1).to({x:-2.8,y:30.7},0).wait(1).to({x:-2.9,y:31},0).wait(1).to({y:31.3},0).wait(1).to({x:-3,y:31.7},0).wait(1).to({y:32},0).wait(1).to({x:-3.1,y:32.3},0).wait(1).to({x:-3.2,y:32.6},0).wait(1).to({y:33},0).wait(1).to({x:-3.3,y:33.3},0).wait(1).to({x:-3.4,y:33.6},0).wait(1).to({y:33.9},0).wait(1).to({x:-3.5,y:34.3},0).wait(1).to({x:-3.6,y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({x:-3.7,y:35.2},0).wait(1).to({x:-3.8,y:35.5},0).wait(1).to({y:35.9},0).wait(1).to({x:-3.9,y:36.2},0).wait(1).to({x:-4,y:36.5},0).wait(1).to({y:36.8},0).wait(1).to({x:-4.1,y:37.2},0).wait(1).to({y:37.5},0).wait(1).to({x:-4.2,y:37.8},0).wait(1).to({x:-4.3,y:38.1},0).wait(1).to({y:38.5},0).wait(1).to({x:-4.4,y:38.8},0).wait(1).to({x:-4.5,y:39.1},0).wait(1).to({y:39.4},0).wait(1).to({x:-4.6,y:39.8},0).wait(1).to({x:-4.7,y:40.1},0).wait(1).to({y:40.4},0).wait(1).to({x:-4.8,y:40.7},0).wait(1).to({x:-4.9,y:41.1},0).wait(1).to({y:41.4},0).wait(1).to({x:-5,y:41.7},0).wait(1).to({x:-5.1,y:42},0).wait(1).to({y:42.3},0).wait(1).to({x:-5.2,y:42.7},0).wait(1).to({y:43},0).wait(1).to({x:-5.3,y:43.3},0).wait(1).to({x:-5.4,y:43.6},0).wait(1).to({y:44},0).wait(1).to({x:-5.5,y:44.3},0).wait(1).to({x:-5.6,y:44.6},0).wait(1).to({y:44.9},0).wait(1).to({x:-5.7,y:45.3},0).wait(1).to({x:-5.8,y:45.6},0).wait(1).to({y:45.9},0).wait(1).to({x:-5.9,y:46.2},0).wait(1).to({x:-6,y:46.6},0).wait(1).to({y:46.9},0).wait(1).to({x:-6.1,y:47.2},0).wait(1).to({x:-6.2,y:47.5},0).wait(1).to({y:47.8},0).wait(1).to({x:-6.3,y:48.2},0).wait(1).to({y:48.5},0).wait(1).to({x:-6.4,y:48.8},0).wait(1).to({x:-6.5,y:49.1},0).wait(1).to({y:49.5},0).wait(1).to({x:-6.6,y:49.8},0).wait(1).to({x:-6.7,y:50.1},0).wait(1).to({y:50.4},0).wait(1).to({x:-6.8,y:50.8},0).wait(1).to({x:-6.9,y:51.1},0).wait(1).to({y:51.4},0).wait(1).to({x:-7,y:51.7},0).wait(1).to({x:-7.1,y:52.1},0).wait(1).to({y:52.4},0).wait(1).to({x:-7.2,y:52.7},0).wait(1).to({x:-7.3,y:53},0).wait(1).to({y:53.4},0).wait(1).to({x:-7.4,y:53.7},0).wait(1).to({x:-7.5,y:54},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,23);


(lib.SymArrowRchgTwn2MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg2();
	this.instance.parent = this;
	this.instance.setTransform(0.5,9.5,1,1,0,0,0,0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.8},0).wait(1).to({y:10.2},0).wait(1).to({y:10.5},0).wait(1).to({y:10.8},0).wait(1).to({y:11.2},0).wait(1).to({x:0.4,y:11.5},0).wait(1).to({y:11.8},0).wait(1).to({y:12.1},0).wait(1).to({y:12.5},0).wait(1).to({y:12.8},0).wait(1).to({y:13.1},0).wait(1).to({x:0.3,y:13.5},0).wait(1).to({y:13.8},0).wait(1).to({y:14.1},0).wait(1).to({y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({x:0.2,y:15.1},0).wait(1).to({y:15.5},0).wait(1).to({y:15.8},0).wait(1).to({y:16.1},0).wait(1).to({y:16.4},0).wait(1).to({y:16.8},0).wait(1).to({x:0.1,y:17.1},0).wait(1).to({y:17.4},0).wait(1).to({y:17.8},0).wait(1).to({y:18.1},0).wait(1).to({y:18.4},0).wait(1).to({x:0,y:18.8},0).wait(1).to({y:19.1},0).wait(1).to({y:19.4},0).wait(1).to({y:19.8},0).wait(1).to({y:20.1},0).wait(1).to({y:20.4},0).wait(1).to({x:-0.1,y:20.8},0).wait(1).to({y:21.1},0).wait(1).to({y:21.4},0).wait(1).to({y:21.7},0).wait(1).to({y:22.1},0).wait(1).to({x:-0.2,y:22.4},0).wait(1).to({y:22.7},0).wait(1).to({y:23.1},0).wait(1).to({y:23.4},0).wait(1).to({y:23.7},0).wait(1).to({y:24.1},0).wait(1).to({x:-0.3,y:24.4},0).wait(1).to({y:24.7},0).wait(1).to({y:25.1},0).wait(1).to({y:25.4},0).wait(1).to({y:25.7},0).wait(1).to({y:26},0).wait(1).to({x:-0.4,y:26.4},0).wait(1).to({y:26.7},0).wait(1).to({y:27},0).wait(1).to({y:27.4},0).wait(1).to({y:27.7},0).wait(1).to({x:-0.5,y:28},0).wait(1).to({y:28.4},0).wait(1).to({y:28.7},0).wait(1).to({y:29},0).wait(1).to({y:29.4},0).wait(1).to({y:29.7},0).wait(1).to({x:-0.6,y:30},0).wait(1).to({y:30.3},0).wait(1).to({y:30.7},0).wait(1).to({y:31},0).wait(1).to({y:31.3},0).wait(1).to({x:-0.7,y:31.7},0).wait(1).to({y:32},0).wait(1).to({y:32.3},0).wait(1).to({y:32.7},0).wait(1).to({y:33},0).wait(1).to({y:33.3},0).wait(1).to({x:-0.8,y:33.7},0).wait(1).to({y:34},0).wait(1).to({y:34.3},0).wait(1).to({y:34.7},0).wait(1).to({y:35},0).wait(1).to({x:-0.9,y:35.3},0).wait(1).to({y:35.6},0).wait(1).to({y:36},0).wait(1).to({y:36.3},0).wait(1).to({y:36.6},0).wait(1).to({y:37},0).wait(1).to({x:-1,y:37.3},0).wait(1).to({y:37.6},0).wait(1).to({y:38},0).wait(1).to({y:38.3},0).wait(1).to({y:38.6},0).wait(1).to({x:-1.1,y:39},0).wait(1).to({y:39.3},0).wait(1).to({y:39.6},0).wait(1).to({y:39.9},0).wait(1).to({y:40.3},0).wait(1).to({y:40.6},0).wait(1).to({x:-1.2,y:40.9},0).wait(1).to({y:41.3},0).wait(1).to({y:41.6},0).wait(1).to({y:41.9},0).wait(1).to({y:42.3},0).wait(1).to({y:42.6},0).wait(1).to({x:-1.3,y:42.9},0).wait(1).to({y:43.3},0).wait(1).to({y:43.6},0).wait(1).to({y:43.9},0).wait(1).to({y:44.2},0).wait(1).to({x:-1.4,y:44.6},0).wait(1).to({y:44.9},0).wait(1).to({y:45.2},0).wait(1).to({y:45.6},0).wait(1).to({y:45.9},0).wait(1).to({y:46.2},0).wait(1).to({x:-1.5,y:46.6},0).wait(1).to({y:46.9},0).wait(1).to({y:47.2},0).wait(1).to({y:47.6},0).wait(1).to({y:47.9},0).wait(1).to({x:-1.6,y:48.2},0).wait(1).to({y:48.6},0).wait(1).to({y:48.9},0).wait(1).to({y:49.2},0).wait(1).to({y:49.5},0).wait(1).to({y:49.9},0).wait(1).to({x:-1.7,y:50.2},0).wait(1).to({y:50.5},0).wait(1).to({y:50.9},0).wait(1).to({y:51.2},0).wait(1).to({y:51.5},0).wait(1).to({x:-1.8,y:51.9},0).wait(1).to({y:52.2},0).wait(1).to({y:52.5},0).wait(1).to({y:52.9},0).wait(1).to({y:53.2},0).wait(1).to({y:53.5},0).wait(1).to({x:-1.9,y:53.8},0).wait(1).to({y:54.2},0).wait(1).to({y:54.5},0).wait(1).to({y:54.8},0).wait(1).to({y:55.2},0).wait(1).to({x:-2,y:55.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,24);


(lib.SymArrowRchgTwn1MH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg1();
	this.instance.parent = this;
	this.instance.setTransform(5,11.2,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:5.2,y:11.6},0).wait(1).to({x:5.3,y:11.9},0).wait(1).to({x:5.5,y:12.3},0).wait(1).to({x:5.7,y:12.6},0).wait(1).to({x:5.8,y:13},0).wait(1).to({x:6,y:13.3},0).wait(1).to({x:6.2,y:13.7},0).wait(1).to({x:6.3,y:14},0).wait(1).to({x:6.5,y:14.4},0).wait(1).to({x:6.7,y:14.7},0).wait(1).to({x:6.8,y:15.1},0).wait(1).to({x:7,y:15.4},0).wait(1).to({x:7.2,y:15.8},0).wait(1).to({x:7.3,y:16.1},0).wait(1).to({x:7.5,y:16.5},0).wait(1).to({x:7.6,y:16.8},0).wait(1).to({x:7.8,y:17.2},0).wait(1).to({x:8,y:17.5},0).wait(1).to({x:8.1,y:17.9},0).wait(1).to({x:8.3,y:18.3},0).wait(1).to({x:8.5,y:18.6},0).wait(1).to({x:8.6,y:19},0).wait(1).to({x:8.8,y:19.3},0).wait(1).to({x:9,y:19.7},0).wait(1).to({x:9.1,y:20},0).wait(1).to({x:9.3,y:20.4},0).wait(1).to({x:9.5,y:20.7},0).wait(1).to({x:9.6,y:21.1},0).wait(1).to({x:9.8,y:21.4},0).wait(1).to({x:10,y:21.8},0).wait(1).to({x:10.1,y:22.1},0).wait(1).to({x:10.3,y:22.5},0).wait(1).to({x:10.5,y:22.8},0).wait(1).to({x:10.6,y:23.2},0).wait(1).to({x:10.8,y:23.5},0).wait(1).to({x:11,y:23.9},0).wait(1).to({x:11.1,y:24.2},0).wait(1).to({x:11.3,y:24.6},0).wait(1).to({x:11.5,y:24.9},0).wait(1).to({x:11.6,y:25.3},0).wait(1).to({x:11.8,y:25.7},0).wait(1).to({x:11.9,y:26},0).wait(1).to({x:12.1,y:26.4},0).wait(1).to({x:12.3,y:26.7},0).wait(1).to({x:12.4,y:27.1},0).wait(1).to({x:12.6,y:27.4},0).wait(1).to({x:12.8,y:27.8},0).wait(1).to({x:12.9,y:28.1},0).wait(1).to({x:13.1,y:28.5},0).wait(1).to({x:13.3,y:28.8},0).wait(1).to({x:13.4,y:29.2},0).wait(1).to({x:13.6,y:29.5},0).wait(1).to({x:13.8,y:29.9},0).wait(1).to({x:13.9,y:30.2},0).wait(1).to({x:14.1,y:30.6},0).wait(1).to({x:14.3,y:30.9},0).wait(1).to({x:14.4,y:31.3},0).wait(1).to({x:14.6,y:31.6},0).wait(1).to({x:14.8,y:32},0).wait(1).to({x:14.9,y:32.4},0).wait(1).to({x:15.1,y:32.7},0).wait(1).to({x:15.3,y:33.1},0).wait(1).to({x:15.4,y:33.4},0).wait(1).to({x:15.6,y:33.8},0).wait(1).to({x:15.8,y:34.1},0).wait(1).to({x:15.9,y:34.5},0).wait(1).to({x:16.1,y:34.8},0).wait(1).to({x:16.3,y:35.2},0).wait(1).to({x:16.4,y:35.5},0).wait(1).to({x:16.6,y:35.9},0).wait(1).to({x:16.7,y:36.2},0).wait(1).to({x:16.9,y:36.6},0).wait(1).to({x:17.1,y:36.9},0).wait(1).to({x:17.2,y:37.3},0).wait(1).to({x:17.4,y:37.6},0).wait(1).to({x:17.6,y:38},0).wait(1).to({x:17.7,y:38.3},0).wait(1).to({x:17.9,y:38.7},0).wait(1).to({x:18.1,y:39},0).wait(1).to({x:18.2,y:39.4},0).wait(1).to({x:18.4,y:39.8},0).wait(1).to({x:18.6,y:40.1},0).wait(1).to({x:18.7,y:40.5},0).wait(1).to({x:18.9,y:40.8},0).wait(1).to({x:19.1,y:41.2},0).wait(1).to({x:19.2,y:41.5},0).wait(1).to({x:19.4,y:41.9},0).wait(1).to({x:19.6,y:42.2},0).wait(1).to({x:19.7,y:42.6},0).wait(1).to({x:19.9,y:42.9},0).wait(1).to({x:20.1,y:43.3},0).wait(1).to({x:20.2,y:43.6},0).wait(1).to({x:20.4,y:44},0).wait(1).to({x:20.6,y:44.3},0).wait(1).to({x:20.7,y:44.7},0).wait(1).to({x:20.9,y:45},0).wait(1).to({x:21.1,y:45.4},0).wait(1).to({x:21.2,y:45.7},0).wait(1).to({x:21.4,y:46.1},0).wait(1).to({x:21.5,y:46.5},0).wait(1).to({x:21.7,y:46.8},0).wait(1).to({x:21.9,y:47.2},0).wait(1).to({x:22,y:47.5},0).wait(1).to({x:22.2,y:47.9},0).wait(1).to({x:22.4,y:48.2},0).wait(1).to({x:22.5,y:48.6},0).wait(1).to({x:22.7,y:48.9},0).wait(1).to({x:22.9,y:49.3},0).wait(1).to({x:23,y:49.6},0).wait(1).to({x:23.2,y:50},0).wait(1).to({x:23.4,y:50.3},0).wait(1).to({x:23.5,y:50.7},0).wait(1).to({x:23.7,y:51},0).wait(1).to({x:23.9,y:51.4},0).wait(1).to({x:24,y:51.7},0).wait(1).to({x:24.2,y:52.1},0).wait(1).to({x:24.4,y:52.4},0).wait(1).to({x:24.5,y:52.8},0).wait(1).to({x:24.7,y:53.1},0).wait(1).to({x:24.9,y:53.5},0).wait(1).to({x:25,y:53.9},0).wait(1).to({x:25.2,y:54.2},0).wait(1).to({x:25.4,y:54.6},0).wait(1).to({x:25.5,y:54.9},0).wait(1).to({x:25.7,y:55.3},0).wait(1).to({x:25.8,y:55.6},0).wait(1).to({x:26,y:56},0).wait(1).to({x:26.2,y:56.3},0).wait(1).to({x:26.3,y:56.7},0).wait(1).to({x:26.5,y:57},0).wait(1).to({x:26.7,y:57.4},0).wait(1).to({x:26.8,y:57.7},0).wait(1).to({x:27,y:58.1},0).wait(1).to({x:27.2,y:58.4},0).wait(1).to({x:27.3,y:58.8},0).wait(1).to({x:27.5,y:59.1},0).wait(1).to({x:27.7,y:59.5},0).wait(1).to({x:27.8,y:59.8},0).wait(1).to({x:28,y:60.2},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,15,27.3);


(lib.SymArrowRchgTwn12M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg12();
	this.instance.parent = this;
	this.instance.setTransform(1.5,4,1,1,0,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:4.1},0).wait(1).to({x:1.6,y:4.2},0).wait(2).to({y:4.3},0).wait(1).to({x:1.7,y:4.4},0).wait(1).to({y:4.5},0).wait(1).to({y:4.6},0).wait(1).to({x:1.8},0).wait(1).to({y:4.7},0).wait(1).to({y:4.8},0).wait(1).to({x:1.9,y:4.9},0).wait(1).to({y:5},0).wait(2).to({x:2,y:5.1},0).wait(1).to({y:5.2},0).wait(1).to({x:2.1,y:5.3},0).wait(1).to({y:5.4},0).wait(2).to({x:2.2,y:5.5},0).wait(1).to({y:5.6},0).wait(1).to({y:5.7},0).wait(1).to({x:2.3,y:5.8},0).wait(1).to({y:5.9},0).wait(2).to({x:2.4,y:6},0).wait(1).to({y:6.1},0).wait(1).to({y:6.2},0).wait(1).to({x:2.5,y:6.3},0).wait(2).to({y:6.4},0).wait(1).to({x:2.6,y:6.5},0).wait(1).to({y:6.6},0).wait(1).to({y:6.7},0).wait(1).to({x:2.7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.9},0).wait(1).to({x:2.8,y:7},0).wait(1).to({y:7.1},0).wait(2).to({x:2.9,y:7.2},0).wait(1).to({y:7.3},0).wait(1).to({y:7.4},0).wait(1).to({x:3,y:7.5},0).wait(2).to({x:3.1,y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({x:3.2,y:7.9},0).wait(2).to({y:8},0).wait(1).to({x:3.3,y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({x:3.4},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({x:3.5,y:8.6},0).wait(1).to({y:8.7},0).wait(2).to({x:3.6,y:8.8},0).wait(1).to({y:8.9},0).wait(1).to({y:9},0).wait(1).to({x:3.7,y:9.1},0).wait(2).to({y:9.2},0).wait(1).to({x:3.8,y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({x:3.9,y:9.6},0).wait(2).to({y:9.7},0).wait(1).to({x:4,y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:4.1,y:10},0).wait(2).to({y:10.1},0).wait(1).to({x:4.2,y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({x:4.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({x:4.4,y:10.7},0).wait(1).to({y:10.8},0).wait(2).to({x:4.5,y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({x:4.6,y:11.2},0).wait(2).to({y:11.3},0).wait(1).to({x:4.7,y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({x:4.8},0).wait(1).to({y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({x:4.9,y:11.9},0).wait(1).to({y:12},0).wait(2).to({x:5,y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({x:5.1,y:12.3},0).wait(1).to({y:12.4},0).wait(2).to({x:5.2,y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({x:5.3,y:12.8},0).wait(1).to({y:12.9},0).wait(2).to({x:5.4,y:13},0).wait(1).to({y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({x:5.5,y:13.3},0).wait(2).to({y:13.4},0).wait(1).to({x:5.6,y:13.5},0).wait(1).to({y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:5.7},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({x:5.8,y:14},0).wait(1).to({y:14.1},0).wait(2).to({x:5.9,y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({x:6,y:14.5},0).wait(2).to({x:6.1,y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({x:6.2,y:14.9},0).wait(2).to({y:15},0).wait(1).to({x:6.3,y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({x:6.4},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({x:6.5,y:15.6},0).wait(1).to({y:15.7},0).wait(2).to({x:6.6,y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({x:6.7,y:16.1},0).wait(2).to({y:16.2},0).wait(1).to({x:6.8,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({x:6.9,y:16.6},0).wait(2).to({y:16.7},0).wait(1).to({x:7,y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({x:7.1,y:17},0).wait(2).to({y:17.1},0).wait(1).to({x:7.2,y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({x:7.3},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:7.4,y:17.7},0).wait(1).to({y:17.8},0).wait(2).to({x:7.5,y:17.9},0).wait(1).to({y:18},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,13);


(lib.SymArrowRchgTwn11M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,5.5,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:5.6},0).wait(1).to({y:5.8},0).wait(1).to({y:5.9},0).wait(1).to({y:6.1},0).wait(1).to({x:0.6,y:6.2},0).wait(1).to({y:6.4},0).wait(1).to({y:6.5},0).wait(1).to({y:6.6},0).wait(1).to({y:6.8},0).wait(1).to({y:6.9},0).wait(1).to({y:7.1},0).wait(1).to({y:7.2},0).wait(1).to({y:7.4},0).wait(1).to({x:0.7,y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({y:7.9},0).wait(1).to({y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({x:0.8,y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({y:8.9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({x:0.9,y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({x:1,y:11.2},0).wait(1).to({y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({x:1.1,y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.8},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.5},0).wait(1).to({x:1.2,y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({x:1.3,y:15},0).wait(1).to({y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({y:16},0).wait(1).to({x:1.4,y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:1.5,y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({x:1.6,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({x:1.7,y:20},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({y:21},0).wait(1).to({x:1.8,y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({y:22},0).wait(1).to({y:22.2},0).wait(1).to({y:22.3},0).wait(1).to({x:1.9,y:22.5},0).wait(1).to({y:22.6},0).wait(1).to({y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({y:23.6},0).wait(1).to({x:2,y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({x:2.1,y:24.9},0).wait(1).to({y:25},0).wait(1).to({y:25.2},0).wait(1).to({y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:25.9},0).wait(1).to({y:26},0).wait(1).to({x:2.2,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({y:26.5},0).wait(1).to({y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({y:27.2},0).wait(1).to({y:27.3},0).wait(1).to({x:2.3,y:27.5},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({y:28.2},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:2.4,y:28.6},0).wait(1).to({y:28.8},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:2.5,y:29.9},0).wait(1).to({y:30.1},0).wait(1).to({y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({y:30.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,16);


(lib.SymArrowRchgTwn10M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg10();
	this.instance.parent = this;
	this.instance.setTransform(2,7,1,1,0,0,0,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.2},0).wait(1).to({x:2.1,y:7.3},0).wait(1).to({y:7.5},0).wait(1).to({x:2.2,y:7.6},0).wait(1).to({y:7.8},0).wait(1).to({x:2.3,y:8},0).wait(1).to({y:8.1},0).wait(1).to({x:2.4,y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({x:2.5,y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({x:2.6,y:8.9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({x:2.7,y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({x:2.8,y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({x:2.9,y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({x:3,y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({x:3.1,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({x:3.2,y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({x:3.3,y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({x:3.4,y:11.8},0).wait(1).to({y:12},0).wait(1).to({x:3.5,y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({x:3.6,y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({x:3.7,y:12.8},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({x:3.8,y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({x:3.9,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({x:4,y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({x:4.1,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({x:4.2,y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({x:4.3,y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.2},0).wait(1).to({x:4.4,y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({x:4.5,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({x:4.6,y:16},0).wait(1).to({y:16.2},0).wait(1).to({x:4.7,y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({x:4.8,y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({x:4.9,y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:5,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:5.1,y:17.8},0).wait(1).to({y:17.9},0).wait(1).to({x:5.2,y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({x:5.3,y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({x:5.4,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({x:5.5,y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({x:5.6,y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({x:5.7,y:19.9},0).wait(1).to({y:20},0).wait(1).to({x:5.8,y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({x:5.9,y:20.5},0).wait(1).to({y:20.7},0).wait(1).to({x:6,y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:21.2},0).wait(1).to({x:6.1,y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({x:6.2,y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({x:6.3,y:22},0).wait(1).to({y:22.1},0).wait(1).to({x:6.4,y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({x:6.5,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({x:6.6,y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({x:6.7,y:23.4},0).wait(1).to({y:23.6},0).wait(1).to({x:6.8,y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({x:6.9,y:24.1},0).wait(1).to({y:24.2},0).wait(1).to({x:7,y:24.4},0).wait(1).to({y:24.5},0).wait(1).to({x:7.1,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25},0).wait(1).to({x:7.2,y:25.2},0).wait(1).to({y:25.3},0).wait(1).to({x:7.3,y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({x:7.4,y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:7.5,y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({x:7.6,y:26.5},0).wait(1).to({y:26.6},0).wait(1).to({x:7.7,y:26.8},0).wait(1).to({y:27},0).wait(1).to({y:27.1},0).wait(1).to({x:7.8,y:27.3},0).wait(1).to({y:27.4},0).wait(1).to({x:7.9,y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:8,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({x:8.1,y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:8.2,y:28.6},0).wait(1).to({y:28.7},0).wait(1).to({x:8.3,y:28.9},0).wait(1).to({y:29},0).wait(1).to({y:29.2},0).wait(1).to({x:8.4,y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({x:8.5,y:29.7},0).wait(1).to({y:29.9},0).wait(1).to({x:8.6,y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:8.7,y:30.3},0).wait(1).to({y:30.5},0).wait(1).to({x:8.8,y:30.7},0).wait(1).to({y:30.8},0).wait(1).to({x:8.9,y:31},0).wait(1).to({y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({x:9,y:31.5},0).wait(1).to({y:31.6},0).wait(1).to({x:9.1,y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({x:9.2,y:32.1},0).wait(1).to({y:32.3},0).wait(1).to({x:9.3,y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({x:9.4,y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({x:9.5,y:33.2},0).wait(1).to({y:33.4},0).wait(1).to({x:9.6,y:33.6},0).wait(1).to({y:33.7},0).wait(1).to({x:9.7,y:33.9},0).wait(1).to({y:34},0).wait(1).to({x:9.8,y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({x:9.9,y:34.5},0).wait(1).to({y:34.7},0).wait(1).to({x:10,y:34.8},0).wait(1).to({y:35},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,19);


(lib.SymArrowRchgTwn9M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg9();
	this.instance.parent = this;
	this.instance.setTransform(1,7,1,1,0,0,0,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.2},0).wait(1).to({y:7.4},0).wait(1).to({x:1.1,y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.9},0).wait(1).to({y:8.1},0).wait(1).to({x:1.2,y:8.3},0).wait(1).to({y:8.5},0).wait(1).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({x:1.3,y:9},0).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({x:1.4,y:9.9},0).wait(1).to({y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({x:1.5,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.2},0).wait(1).to({x:1.6,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({x:1.7,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({x:1.8,y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({x:1.9,y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.5},0).wait(1).to({x:2,y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({x:2.1,y:15.5},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:16},0).wait(1).to({y:16.2},0).wait(1).to({x:2.2,y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:2.3,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.5},0).wait(1).to({y:17.7},0).wait(1).to({x:2.4,y:17.9},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({x:2.5,y:18.8},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:2.6,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({x:2.7,y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({x:2.8,y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({y:21.7},0).wait(1).to({x:2.9,y:21.9},0).wait(1).to({y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({x:3,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({x:3.1,y:23.6},0).wait(1).to({y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({y:24.1},0).wait(1).to({x:3.2,y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({y:24.8},0).wait(1).to({x:3.3,y:25},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({x:3.4,y:25.9},0).wait(1).to({y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({y:26.5},0).wait(1).to({x:3.5,y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({y:27},0).wait(1).to({y:27.2},0).wait(1).to({x:3.6,y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.1},0).wait(1).to({x:3.7,y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({x:3.8,y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({y:29.6},0).wait(1).to({x:3.9,y:29.8},0).wait(1).to({y:30},0).wait(1).to({y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({y:30.5},0).wait(1).to({x:4,y:30.7},0).wait(1).to({y:30.9},0).wait(1).to({y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({x:4.1,y:31.5},0).wait(1).to({y:31.6},0).wait(1).to({y:31.8},0).wait(1).to({y:32},0).wait(1).to({y:32.2},0).wait(1).to({x:4.2,y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({x:4.3,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({x:4.4,y:33.9},0).wait(1).to({y:34},0).wait(1).to({y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({x:4.5,y:34.8},0).wait(1).to({y:35},0).wait(1).to({y:35.1},0).wait(1).to({y:35.3},0).wait(1).to({x:4.6,y:35.5},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({x:4.7,y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({y:37},0).wait(1).to({x:4.8,y:37.2},0).wait(1).to({y:37.3},0).wait(1).to({y:37.5},0).wait(1).to({y:37.7},0).wait(1).to({x:4.9,y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.4},0).wait(1).to({x:5,y:38.6},0).wait(1).to({y:38.8},0).wait(1).to({y:39},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,19);


(lib.SymArrowRchgTwn8M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:6.2},0).wait(1).to({x:2.4,y:6.4},0).wait(1).to({x:2.3,y:6.6},0).wait(1).to({x:2.2,y:6.8},0).wait(1).to({x:2.1,y:7},0).wait(1).to({x:2,y:7.2},0).wait(1).to({x:1.9,y:7.4},0).wait(1).to({x:1.8,y:7.6},0).wait(1).to({x:1.7,y:7.8},0).wait(1).to({x:1.6,y:8},0).wait(1).to({x:1.5,y:8.2},0).wait(1).to({y:8.4},0).wait(1).to({x:1.4,y:8.6},0).wait(1).to({x:1.3,y:8.8},0).wait(1).to({x:1.2,y:9},0).wait(1).to({x:1.1,y:9.2},0).wait(1).to({x:1,y:9.4},0).wait(1).to({x:0.9,y:9.6},0).wait(1).to({x:0.8,y:9.8},0).wait(1).to({x:0.7,y:10},0).wait(1).to({x:0.6,y:10.2},0).wait(1).to({x:0.5,y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({x:0.4,y:10.8},0).wait(1).to({x:0.3,y:11.1},0).wait(1).to({x:0.2,y:11.3},0).wait(1).to({x:0.1,y:11.5},0).wait(1).to({x:0,y:11.7},0).wait(1).to({x:-0.1,y:11.9},0).wait(1).to({x:-0.2,y:12.1},0).wait(1).to({x:-0.3,y:12.3},0).wait(1).to({x:-0.4,y:12.5},0).wait(1).to({x:-0.5,y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({x:-0.6,y:13.1},0).wait(1).to({x:-0.7,y:13.3},0).wait(1).to({x:-0.8,y:13.5},0).wait(1).to({x:-0.9,y:13.7},0).wait(1).to({x:-1,y:13.9},0).wait(1).to({x:-1.1,y:14.1},0).wait(1).to({x:-1.2,y:14.3},0).wait(1).to({x:-1.3,y:14.5},0).wait(1).to({x:-1.4,y:14.7},0).wait(1).to({x:-1.5,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({x:-1.6,y:15.3},0).wait(1).to({x:-1.7,y:15.5},0).wait(1).to({x:-1.8,y:15.7},0).wait(1).to({x:-1.9,y:15.9},0).wait(1).to({x:-2,y:16.1},0).wait(1).to({x:-2.1,y:16.3},0).wait(1).to({x:-2.2,y:16.5},0).wait(1).to({x:-2.3,y:16.7},0).wait(1).to({x:-2.4,y:16.9},0).wait(1).to({y:17.1},0).wait(1).to({x:-2.5,y:17.3},0).wait(1).to({x:-2.6,y:17.5},0).wait(1).to({x:-2.7,y:17.7},0).wait(1).to({x:-2.8,y:17.9},0).wait(1).to({x:-2.9,y:18.1},0).wait(1).to({x:-3,y:18.3},0).wait(1).to({x:-3.1,y:18.5},0).wait(1).to({x:-3.2,y:18.7},0).wait(1).to({x:-3.3,y:18.9},0).wait(1).to({x:-3.4,y:19.1},0).wait(1).to({x:-3.5,y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({x:-3.6,y:19.7},0).wait(1).to({x:-3.7,y:19.9},0).wait(1).to({x:-3.8,y:20.1},0).wait(1).to({x:-3.9,y:20.3},0).wait(1).to({x:-4,y:20.5},0).wait(1).to({x:-4.1,y:20.7},0).wait(1).to({x:-4.2,y:20.9},0).wait(1).to({x:-4.3,y:21.2},0).wait(1).to({x:-4.4,y:21.4},0).wait(1).to({x:-4.5,y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({x:-4.6,y:22},0).wait(1).to({x:-4.7,y:22.2},0).wait(1).to({x:-4.8,y:22.4},0).wait(1).to({x:-4.9,y:22.6},0).wait(1).to({x:-5,y:22.8},0).wait(1).to({x:-5.1,y:23},0).wait(1).to({x:-5.2,y:23.2},0).wait(1).to({x:-5.3,y:23.4},0).wait(1).to({x:-5.4,y:23.6},0).wait(1).to({x:-5.5,y:23.8},0).wait(1).to({y:24},0).wait(1).to({x:-5.6,y:24.2},0).wait(1).to({x:-5.7,y:24.4},0).wait(1).to({x:-5.8,y:24.6},0).wait(1).to({x:-5.9,y:24.8},0).wait(1).to({x:-6,y:25},0).wait(1).to({x:-6.1,y:25.2},0).wait(1).to({x:-6.2,y:25.4},0).wait(1).to({x:-6.3,y:25.6},0).wait(1).to({x:-6.4,y:25.8},0).wait(1).to({x:-6.5,y:26},0).wait(1).to({regX:1.2,regY:5.5,scaleX:1,scaleY:1,rotation:-10.8,y:25.3},0).wait(1).to({regX:1.1,x:-6.6,y:25.5},0).wait(1).to({x:-6.7,y:25.7},0).wait(1).to({y:26},0).wait(1).to({x:-6.8,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:-6.9,y:26.6},0).wait(1).to({x:-7,y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({x:-7.1,y:27.3},0).wait(1).to({y:27.5},0).wait(1).to({x:-7.2,y:27.7},0).wait(1).to({y:28},0).wait(1).to({x:-7.3,y:28.2},0).wait(1).to({x:-7.4,y:28.4},0).wait(1).to({y:28.6},0).wait(1).to({x:-7.5,y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({x:-7.6,y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({x:-7.7,y:29.7},0).wait(1).to({x:-7.8,y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:-7.9,y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({x:-8,y:30.9},0).wait(1).to({y:31.1},0).wait(1).to({x:-8.1,y:31.3},0).wait(1).to({x:-8.2,y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({x:-8.3,y:32},0).wait(1).to({y:32.2},0).wait(1).to({x:-8.4,y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({x:-8.5,y:32.9},0).wait(1).to({x:-8.6,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:-8.7,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({x:-8.8,y:34},0).wait(1).to({y:34.2},0).wait(1).to({x:-8.9,y:34.4},0).wait(1).to({x:-9,y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({x:-9.1,y:35.1},0).wait(1).to({y:35.3},0).wait(1).to({x:-9.2,y:35.5},0).wait(1).to({y:35.7},0).wait(1).to({x:-9.3,y:36},0).wait(1).to({x:-9.4,y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({x:-9.5,y:36.6},0).wait(1).to({y:36.9},0).wait(1).to({x:-9.6,y:37.1},0).wait(1).to({x:-9.7,y:37.3},0).wait(1).to({y:37.5},0).wait(1).to({x:-9.8,y:37.7},0).wait(1).to({y:38},0).wait(1).to({x:-9.9,y:38.2},0).wait(1).to({y:38.4},0).wait(1).to({x:-10,y:38.6},0).wait(1).to({x:-10.1,y:38.9},0).wait(1).to({y:39.1},0).wait(1).to({x:-10.2,y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({x:-10.3,y:39.7},0).wait(1).to({y:40},0).wait(1).to({x:-10.4,y:40.2},0).wait(1).to({x:-10.5,y:40.4},0).wait(1).to({y:40.6},0).wait(1).to({x:-10.6,y:40.9},0).wait(1).to({y:41.1},0).wait(1).to({x:-10.7,y:41.3},0).wait(1).to({y:41.5},0).wait(1).to({x:-10.8,y:41.8},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymArrowRchgTwn7M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg7();
	this.instance.parent = this;
	this.instance.setTransform(2.5,8.5,1,1,0,0,0,2.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.6,y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({x:2.7,y:9.2},0).wait(1).to({x:2.8,y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({x:2.9,y:9.8},0).wait(1).to({x:3,y:10.1},0).wait(1).to({x:3.1,y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({x:3.2,y:10.7},0).wait(1).to({x:3.3,y:11},0).wait(1).to({y:11.2},0).wait(1).to({x:3.4,y:11.4},0).wait(1).to({x:3.5,y:11.6},0).wait(1).to({y:11.9},0).wait(1).to({x:3.6,y:12.1},0).wait(1).to({x:3.7,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({x:3.8,y:12.8},0).wait(1).to({x:3.9,y:13},0).wait(1).to({y:13.2},0).wait(1).to({x:4,y:13.4},0).wait(1).to({x:4.1,y:13.7},0).wait(1).to({x:4.2,y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({x:4.3,y:14.3},0).wait(1).to({x:4.4,y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({x:4.5,y:15},0).wait(1).to({x:4.6,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({x:4.7,y:15.7},0).wait(1).to({x:4.8,y:15.9},0).wait(1).to({y:16.1},0).wait(1).to({x:4.9,y:16.3},0).wait(1).to({x:5,y:16.6},0).wait(1).to({x:5.1,y:16.8},0).wait(1).to({y:17},0).wait(1).to({x:5.2,y:17.2},0).wait(1).to({x:5.3,y:17.5},0).wait(1).to({y:17.7},0).wait(1).to({x:5.4,y:17.9},0).wait(1).to({x:5.5,y:18.1},0).wait(1).to({y:18.4},0).wait(1).to({x:5.6,y:18.6},0).wait(1).to({x:5.7,y:18.8},0).wait(1).to({y:19},0).wait(1).to({x:5.8,y:19.3},0).wait(1).to({x:5.9,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:6,y:19.9},0).wait(1).to({x:6.1,y:20.2},0).wait(1).to({x:6.2,y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({x:6.3,y:20.8},0).wait(1).to({x:6.4,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({x:6.5,y:21.5},0).wait(1).to({x:6.6,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:6.7,y:22.2},0).wait(1).to({x:6.8,y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({x:6.9,y:22.8},0).wait(1).to({x:7,y:23.1},0).wait(1).to({x:7.1,y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({x:7.2,y:23.7},0).wait(1).to({x:7.3,y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:7.4,y:24.4},0).wait(1).to({x:7.5,y:24.6},0).wait(1).to({y:24.9},0).wait(1).to({x:7.6,y:25.1},0).wait(1).to({x:7.7,y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({x:7.8,y:25.8},0).wait(1).to({x:7.9,y:26},0).wait(1).to({y:26.2},0).wait(1).to({x:8,y:26.4},0).wait(1).to({x:8.1,y:26.7},0).wait(1).to({x:8.2,y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({x:8.3,y:27.3},0).wait(1).to({x:8.4,y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:8.5,y:28},0).wait(1).to({x:8.6,y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:8.7,y:28.7},0).wait(1).to({x:8.8,y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({x:8.9,y:29.3},0).wait(1).to({x:9,y:29.6},0).wait(1).to({x:9.1,y:29.8},0).wait(1).to({y:30},0).wait(1).to({x:9.2,y:30.2},0).wait(1).to({x:9.3,y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({x:9.4,y:30.9},0).wait(1).to({x:9.5,y:31.1},0).wait(1).to({y:31.4},0).wait(1).to({x:9.6,y:31.6},0).wait(1).to({x:9.7,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:9.8,y:32.3},0).wait(1).to({x:9.9,y:32.5},0).wait(1).to({y:32.7},0).wait(1).to({x:10,y:32.9},0).wait(1).to({x:10.1,y:33.2},0).wait(1).to({x:10.2,y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({x:10.3,y:33.8},0).wait(1).to({x:10.4,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({x:10.5,y:34.5},0).wait(1).to({x:10.6,y:34.7},0).wait(1).to({y:34.9},0).wait(1).to({x:10.7,y:35.2},0).wait(1).to({x:10.8,y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({x:10.9,y:35.8},0).wait(1).to({x:11,y:36.1},0).wait(1).to({x:11.1,y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({x:11.2,y:36.7},0).wait(1).to({x:11.3,y:37},0).wait(1).to({y:37.2},0).wait(1).to({x:11.4,y:37.4},0).wait(1).to({x:11.5,y:37.6},0).wait(1).to({y:37.9},0).wait(1).to({x:11.6,y:38.1},0).wait(1).to({x:11.7,y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({x:11.8,y:38.8},0).wait(1).to({x:11.9,y:39},0).wait(1).to({y:39.2},0).wait(1).to({x:12,y:39.4},0).wait(1).to({x:12.1,y:39.7},0).wait(1).to({x:12.2,y:39.9},0).wait(1).to({y:40.1},0).wait(1).to({x:12.3,y:40.3},0).wait(1).to({x:12.4,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:12.5,y:41},0).wait(1).to({x:12.6,y:41.2},0).wait(1).to({y:41.4},0).wait(1).to({x:12.7,y:41.7},0).wait(1).to({x:12.8,y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:12.9,y:42.3},0).wait(1).to({x:13,y:42.6},0).wait(1).to({x:13.1,y:42.8},0).wait(1).to({y:43},0).wait(1).to({x:13.2,y:43.2},0).wait(1).to({x:13.3,y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:13.4,y:43.9},0).wait(1).to({x:13.5,y:44.1},0).wait(1).to({y:44.4},0).wait(1).to({x:13.6,y:44.6},0).wait(1).to({x:13.7,y:44.8},0).wait(1).to({y:45},0).wait(1).to({x:13.8,y:45.3},0).wait(1).to({x:13.9,y:45.5},0).wait(1).to({y:45.7},0).wait(1).to({x:14,y:45.9},0).wait(1).to({x:14.1,y:46.2},0).wait(1).to({x:14.2,y:46.4},0).wait(1).to({y:46.6},0).wait(1).to({x:14.3,y:46.8},0).wait(1).to({x:14.4,y:47.1},0).wait(1).to({y:47.3},0).wait(1).to({x:14.5,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,22);


(lib.SymArrowRchgTwn6M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg6();
	this.instance.parent = this;
	this.instance.setTransform(2,8.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({x:2.2,y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({x:2.3,y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({x:2.4,y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({x:2.5,y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({x:2.6,y:11},0).wait(1).to({y:11.2},0).wait(1).to({x:2.7,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({x:2.8,y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({x:2.9,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({x:3,y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:3.1,y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({x:3.2,y:13.7},0).wait(1).to({y:13.9},0).wait(1).to({x:3.3,y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({x:3.4,y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({x:3.5,y:15},0).wait(1).to({x:3.6,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({x:3.7,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({x:3.8,y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({x:3.9,y:16.6},0).wait(1).to({y:16.8},0).wait(1).to({x:4,y:17},0).wait(1).to({y:17.2},0).wait(1).to({x:4.1,y:17.5},0).wait(1).to({y:17.7},0).wait(1).to({x:4.2,y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({x:4.3,y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({x:4.4,y:18.8},0).wait(1).to({y:19},0).wait(1).to({x:4.5,y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({x:4.6,y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({x:4.7,y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({x:4.8,y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({x:4.9,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({x:5,y:21.5},0).wait(1).to({x:5.1,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:5.2,y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({x:5.3,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({x:5.4,y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({x:5.5,y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({x:5.6,y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:5.7,y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({x:5.8,y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({x:5.9,y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({x:6,y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:6.1,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:6.2,y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:6.3,y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({x:6.4,y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:6.5,y:28},0).wait(1).to({x:6.6,y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:6.7,y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({x:6.8,y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({x:6.9,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:7,y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:7.1,y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({x:7.2,y:30.9},0).wait(1).to({y:31.1},0).wait(1).to({x:7.3,y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({x:7.4,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:7.5,y:32.3},0).wait(1).to({y:32.5},0).wait(1).to({x:7.6,y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({x:7.7,y:33.2},0).wait(1).to({y:33.4},0).wait(1).to({x:7.8,y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({x:7.9,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({x:8,y:34.5},0).wait(1).to({x:8.1,y:34.7},0).wait(1).to({y:34.9},0).wait(1).to({x:8.2,y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({x:8.3,y:35.6},0).wait(1).to({y:35.8},0).wait(1).to({x:8.4,y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({x:8.5,y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({x:8.6,y:37},0).wait(1).to({y:37.2},0).wait(1).to({x:8.7,y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({x:8.8,y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({x:8.9,y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({x:9,y:38.8},0).wait(1).to({y:39},0).wait(1).to({x:9.1,y:39.2},0).wait(1).to({y:39.4},0).wait(1).to({x:9.2,y:39.7},0).wait(1).to({y:39.9},0).wait(1).to({x:9.3,y:40.1},0).wait(1).to({y:40.3},0).wait(1).to({x:9.4,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:9.5,y:41},0).wait(1).to({x:9.6,y:41.2},0).wait(1).to({y:41.4},0).wait(1).to({x:9.7,y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({x:9.8,y:42.1},0).wait(1).to({y:42.3},0).wait(1).to({x:9.9,y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({x:10,y:43},0).wait(1).to({y:43.2},0).wait(1).to({x:10.1,y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:10.2,y:43.9},0).wait(1).to({y:44.1},0).wait(1).to({x:10.3,y:44.4},0).wait(1).to({y:44.6},0).wait(1).to({x:10.4,y:44.8},0).wait(1).to({y:45},0).wait(1).to({x:10.5,y:45.3},0).wait(1).to({y:45.5},0).wait(1).to({x:10.6,y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({x:10.7,y:46.2},0).wait(1).to({y:46.4},0).wait(1).to({x:10.8,y:46.6},0).wait(1).to({y:46.8},0).wait(1).to({x:10.9,y:47.1},0).wait(1).to({y:47.3},0).wait(1).to({x:11,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,22);


(lib.SymArrowRchgTwn5M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg5();
	this.instance.parent = this;
	this.instance.setTransform(1,9,1,1,0,0,0,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.2},0).wait(1).to({x:1.1,y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({y:10.1},0).wait(1).to({x:1.2,y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({x:1.3,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.8},0).wait(1).to({x:1.4,y:12},0).wait(1).to({y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({x:1.5,y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({y:13.4},0).wait(1).to({x:1.6,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:14.1},0).wait(1).to({x:1.7,y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({y:14.7},0).wait(1).to({y:15},0).wait(1).to({x:1.8,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.7},0).wait(1).to({x:1.9,y:15.9},0).wait(1).to({y:16.1},0).wait(1).to({y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({x:2,y:16.8},0).wait(1).to({y:17},0).wait(1).to({y:17.3},0).wait(1).to({x:2.1,y:17.5},0).wait(1).to({y:17.7},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({x:2.2,y:18.4},0).wait(1).to({y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({x:2.3,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({y:19.6},0).wait(1).to({x:2.4,y:19.8},0).wait(1).to({y:20},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({x:2.5,y:20.7},0).wait(1).to({y:21},0).wait(1).to({y:21.2},0).wait(1).to({x:2.6,y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.9},0).wait(1).to({y:22.1},0).wait(1).to({x:2.7,y:22.3},0).wait(1).to({y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({x:2.8,y:23},0).wait(1).to({y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({x:2.9,y:23.9},0).wait(1).to({y:24.2},0).wait(1).to({y:24.4},0).wait(1).to({x:3,y:24.6},0).wait(1).to({y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({x:3.1,y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:3.2,y:26.2},0).wait(1).to({y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:3.3,y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({x:3.4,y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:3.5,y:28.8},0).wait(1).to({y:29},0).wait(1).to({y:29.2},0).wait(1).to({x:3.6,y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({y:29.9},0).wait(1).to({y:30.1},0).wait(1).to({x:3.7,y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({x:3.8,y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({y:31.5},0).wait(1).to({y:31.8},0).wait(1).to({x:3.9,y:32},0).wait(1).to({y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({x:4,y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({y:33.4},0).wait(1).to({x:4.1,y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({y:34.1},0).wait(1).to({x:4.2,y:34.3},0).wait(1).to({y:34.5},0).wait(1).to({y:34.7},0).wait(1).to({y:35},0).wait(1).to({x:4.3,y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({y:35.7},0).wait(1).to({x:4.4,y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({x:4.5,y:36.8},0).wait(1).to({y:37},0).wait(1).to({y:37.3},0).wait(1).to({x:4.6,y:37.5},0).wait(1).to({y:37.7},0).wait(1).to({y:38},0).wait(1).to({y:38.2},0).wait(1).to({x:4.7,y:38.4},0).wait(1).to({y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:4.8,y:39.1},0).wait(1).to({y:39.3},0).wait(1).to({y:39.6},0).wait(1).to({x:4.9,y:39.8},0).wait(1).to({y:40},0).wait(1).to({y:40.3},0).wait(1).to({y:40.5},0).wait(1).to({x:5,y:40.7},0).wait(1).to({y:41},0).wait(1).to({y:41.2},0).wait(1).to({x:5.1,y:41.4},0).wait(1).to({y:41.6},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:5.2,y:42.3},0).wait(1).to({y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({x:5.3,y:43},0).wait(1).to({y:43.3},0).wait(1).to({y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:5.4,y:43.9},0).wait(1).to({y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({x:5.5,y:44.6},0).wait(1).to({y:44.9},0).wait(1).to({y:45.1},0).wait(1).to({y:45.3},0).wait(1).to({x:5.6,y:45.6},0).wait(1).to({y:45.8},0).wait(1).to({y:46},0).wait(1).to({x:5.7,y:46.2},0).wait(1).to({y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({x:5.8,y:47.2},0).wait(1).to({y:47.4},0).wait(1).to({y:47.6},0).wait(1).to({x:5.9,y:47.9},0).wait(1).to({y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({y:48.5},0).wait(1).to({x:6,y:48.8},0).wait(1).to({y:49},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,23);


(lib.SymArrowRchgTwn4M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg4();
	this.instance.parent = this;
	this.instance.setTransform(1,8.5,1,1,0,0,0,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7},0).wait(1).to({y:9},0).wait(1).to({y:9.2},0).wait(1).to({x:0.9,y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({x:0.8,y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:0.7,y:11.2},0).wait(1).to({y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({x:0.6,y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({x:0.5,y:12.8},0).wait(1).to({y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({x:0.4,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({x:0.3,y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({y:15},0).wait(1).to({x:0.2,y:15.3},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:16},0).wait(1).to({x:0.1,y:16.2},0).wait(1).to({y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({x:0,y:16.9},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.7},0).wait(1).to({x:-0.1,y:17.9},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({x:-0.2,y:18.6},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({y:19.4},0).wait(1).to({x:-0.3,y:19.6},0).wait(1).to({y:19.8},0).wait(1).to({y:20.1},0).wait(1).to({x:-0.4,y:20.3},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21.1},0).wait(1).to({x:-0.5,y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({y:21.8},0).wait(1).to({x:-0.6,y:22},0).wait(1).to({y:22.3},0).wait(1).to({y:22.5},0).wait(1).to({y:22.7},0).wait(1).to({x:-0.7,y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.5},0).wait(1).to({x:-0.8,y:23.7},0).wait(1).to({y:23.9},0).wait(1).to({y:24.2},0).wait(1).to({y:24.4},0).wait(1).to({x:-0.9,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25.2},0).wait(1).to({x:-1,y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({y:25.9},0).wait(1).to({y:26.1},0).wait(1).to({x:-1.1,y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:-1.2,y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:-1.3,y:28.1},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:-1.4,y:28.8},0).wait(1).to({y:29},0).wait(1).to({y:29.3},0).wait(1).to({x:-1.5,y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:-1.6,y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({y:30.9},0).wait(1).to({x:-1.7,y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({x:-1.8,y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({x:-1.9,y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({x:-2,y:33.8},0).wait(1).to({y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({x:-2.1,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({y:35.1},0).wait(1).to({y:35.3},0).wait(1).to({x:-2.2,y:35.5},0).wait(1).to({y:35.8},0).wait(1).to({y:36},0).wait(1).to({x:-2.3,y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({y:37},0).wait(1).to({x:-2.4,y:37.2},0).wait(1).to({y:37.5},0).wait(1).to({y:37.7},0).wait(1).to({x:-2.5,y:37.9},0).wait(1).to({y:38.2},0).wait(1).to({y:38.4},0).wait(1).to({y:38.7},0).wait(1).to({x:-2.6,y:38.9},0).wait(1).to({y:39.2},0).wait(1).to({y:39.4},0).wait(1).to({x:-2.7,y:39.6},0).wait(1).to({y:39.9},0).wait(1).to({y:40.1},0).wait(1).to({y:40.4},0).wait(1).to({x:-2.8,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({y:41.1},0).wait(1).to({x:-2.9,y:41.3},0).wait(1).to({y:41.6},0).wait(1).to({y:41.8},0).wait(1).to({y:42.1},0).wait(1).to({x:-3,y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({y:42.8},0).wait(1).to({x:-3.1,y:43},0).wait(1).to({y:43.3},0).wait(1).to({y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:-3.2,y:44},0).wait(1).to({y:44.2},0).wait(1).to({y:44.5},0).wait(1).to({x:-3.3,y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({y:45.2},0).wait(1).to({y:45.4},0).wait(1).to({x:-3.4,y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({y:46.2},0).wait(1).to({x:-3.5,y:46.4},0).wait(1).to({y:46.6},0).wait(1).to({y:46.9},0).wait(1).to({y:47.1},0).wait(1).to({x:-3.6,y:47.4},0).wait(1).to({y:47.6},0).wait(1).to({y:47.8},0).wait(1).to({x:-3.7,y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({y:48.6},0).wait(1).to({y:48.8},0).wait(1).to({x:-3.8,y:49.1},0).wait(1).to({y:49.3},0).wait(1).to({y:49.5},0).wait(1).to({x:-3.9,y:49.8},0).wait(1).to({y:50},0).wait(1).to({y:50.3},0).wait(1).to({x:-4,y:50.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,22);


(lib.SymArrowRchgTwn3M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,9,1,1,0,0,0,1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.3},0).wait(1).to({x:1.4,y:9.5},0).wait(1).to({y:9.8},0).wait(1).to({x:1.3,y:10},0).wait(1).to({y:10.3},0).wait(1).to({x:1.2,y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({x:1.1,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({x:1,y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({x:0.9,y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({x:0.8,y:12.6},0).wait(1).to({y:12.9},0).wait(1).to({x:0.7,y:13.1},0).wait(1).to({y:13.4},0).wait(1).to({x:0.6,y:13.7},0).wait(1).to({y:13.9},0).wait(1).to({x:0.5,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({x:0.4,y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:0.3,y:15.2},0).wait(1).to({y:15.5},0).wait(1).to({x:0.2,y:15.7},0).wait(1).to({y:16},0).wait(1).to({x:0.1,y:16.2},0).wait(1).to({x:0,y:16.5},0).wait(1).to({y:16.8},0).wait(1).to({x:-0.1,y:17},0).wait(1).to({y:17.3},0).wait(1).to({x:-0.2,y:17.5},0).wait(1).to({y:17.8},0).wait(1).to({x:-0.3,y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({x:-0.4,y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({x:-0.5,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:-0.6,y:19.6},0).wait(1).to({y:19.9},0).wait(1).to({x:-0.7,y:20.1},0).wait(1).to({y:20.4},0).wait(1).to({x:-0.8,y:20.6},0).wait(1).to({y:20.9},0).wait(1).to({x:-0.9,y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({x:-1,y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:-1.1,y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({x:-1.2,y:22.7},0).wait(1).to({y:23},0).wait(1).to({x:-1.3,y:23.2},0).wait(1).to({y:23.5},0).wait(1).to({x:-1.4,y:23.7},0).wait(1).to({x:-1.5,y:24},0).wait(1).to({y:24.3},0).wait(1).to({x:-1.6,y:24.5},0).wait(1).to({y:24.8},0).wait(1).to({x:-1.7,y:25},0).wait(1).to({y:25.3},0).wait(1).to({x:-1.8,y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({x:-1.9,y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({x:-2,y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:-2.1,y:27.1},0).wait(1).to({y:27.4},0).wait(1).to({x:-2.2,y:27.6},0).wait(1).to({y:27.9},0).wait(1).to({x:-2.3,y:28.1},0).wait(1).to({y:28.4},0).wait(1).to({x:-2.4,y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({x:-2.5,y:29.2},0).wait(1).to({y:29.4},0).wait(1).to({x:-2.6,y:29.7},0).wait(1).to({y:29.9},0).wait(1).to({x:-2.7,y:30.2},0).wait(1).to({y:30.5},0).wait(1).to({x:-2.8,y:30.7},0).wait(1).to({y:31},0).wait(1).to({x:-2.9,y:31.2},0).wait(1).to({x:-3,y:31.5},0).wait(1).to({y:31.8},0).wait(1).to({x:-3.1,y:32},0).wait(1).to({y:32.3},0).wait(1).to({x:-3.2,y:32.5},0).wait(1).to({y:32.8},0).wait(1).to({x:-3.3,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:-3.4,y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({x:-3.5,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({x:-3.6,y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({x:-3.7,y:35.1},0).wait(1).to({y:35.4},0).wait(1).to({x:-3.8,y:35.6},0).wait(1).to({y:35.9},0).wait(1).to({x:-3.9,y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({x:-4,y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({x:-4.1,y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({x:-4.2,y:37.7},0).wait(1).to({y:38},0).wait(1).to({x:-4.3,y:38.2},0).wait(1).to({y:38.5},0).wait(1).to({x:-4.4,y:38.7},0).wait(1).to({x:-4.5,y:39},0).wait(1).to({y:39.3},0).wait(1).to({x:-4.6,y:39.5},0).wait(1).to({y:39.8},0).wait(1).to({x:-4.7,y:40},0).wait(1).to({y:40.3},0).wait(1).to({x:-4.8,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:-4.9,y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({x:-5,y:41.6},0).wait(1).to({y:41.8},0).wait(1).to({x:-5.1,y:42.1},0).wait(1).to({y:42.4},0).wait(1).to({x:-5.2,y:42.6},0).wait(1).to({y:42.9},0).wait(1).to({x:-5.3,y:43.1},0).wait(1).to({y:43.4},0).wait(1).to({x:-5.4,y:43.7},0).wait(1).to({y:43.9},0).wait(1).to({x:-5.5,y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({x:-5.6,y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({x:-5.7,y:45.2},0).wait(1).to({y:45.5},0).wait(1).to({x:-5.8,y:45.7},0).wait(1).to({y:46},0).wait(1).to({x:-5.9,y:46.2},0).wait(1).to({x:-6,y:46.5},0).wait(1).to({y:46.8},0).wait(1).to({x:-6.1,y:47},0).wait(1).to({y:47.3},0).wait(1).to({x:-6.2,y:47.5},0).wait(1).to({y:47.8},0).wait(1).to({x:-6.3,y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({x:-6.4,y:48.6},0).wait(1).to({y:48.8},0).wait(1).to({x:-6.5,y:49.1},0).wait(1).to({y:49.3},0).wait(1).to({x:-6.6,y:49.6},0).wait(1).to({y:49.9},0).wait(1).to({x:-6.7,y:50.1},0).wait(1).to({y:50.4},0).wait(1).to({x:-6.8,y:50.6},0).wait(1).to({y:50.9},0).wait(1).to({x:-6.9,y:51.2},0).wait(1).to({y:51.4},0).wait(1).to({x:-7,y:51.7},0).wait(1).to({y:51.9},0).wait(1).to({x:-7.1,y:52.2},0).wait(1).to({y:52.4},0).wait(1).to({x:-7.2,y:52.7},0).wait(1).to({y:53},0).wait(1).to({x:-7.3,y:53.2},0).wait(1).to({y:53.5},0).wait(1).to({x:-7.4,y:53.7},0).wait(1).to({x:-7.5,y:54},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,23);


(lib.SymArrowRchgTwn2M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg2();
	this.instance.parent = this;
	this.instance.setTransform(0.5,9.5,1,1,0,0,0,0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({y:10.3},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:11.1},0).wait(1).to({x:0.4,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({x:0.3,y:13.2},0).wait(1).to({y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({y:14},0).wait(1).to({y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({x:0.2,y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:16.1},0).wait(1).to({y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({x:0.1,y:16.9},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.7},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.5},0).wait(1).to({x:0,y:18.8},0).wait(1).to({y:19},0).wait(1).to({y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({y:19.8},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({x:-0.1,y:20.6},0).wait(1).to({y:20.9},0).wait(1).to({y:21.1},0).wait(1).to({y:21.4},0).wait(1).to({y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({y:22.2},0).wait(1).to({x:-0.2,y:22.5},0).wait(1).to({y:22.7},0).wait(1).to({y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.5},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({x:-0.3,y:24.3},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({y:25.1},0).wait(1).to({y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({y:25.9},0).wait(1).to({x:-0.4,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({y:27.2},0).wait(1).to({y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:-0.5,y:28},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({y:28.8},0).wait(1).to({y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.6},0).wait(1).to({x:-0.6,y:29.9},0).wait(1).to({y:30.1},0).wait(1).to({y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.9},0).wait(1).to({y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({x:-0.7,y:31.7},0).wait(1).to({y:32},0).wait(1).to({y:32.2},0).wait(1).to({y:32.5},0).wait(1).to({y:32.8},0).wait(1).to({y:33},0).wait(1).to({y:33.3},0).wait(1).to({x:-0.8,y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({y:34.1},0).wait(1).to({y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({y:34.9},0).wait(1).to({y:35.1},0).wait(1).to({x:-0.9,y:35.4},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36.2},0).wait(1).to({y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({y:37},0).wait(1).to({x:-1,y:37.3},0).wait(1).to({y:37.5},0).wait(1).to({y:37.8},0).wait(1).to({y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.6},0).wait(1).to({y:38.8},0).wait(1).to({x:-1.1,y:39.1},0).wait(1).to({y:39.4},0).wait(1).to({y:39.6},0).wait(1).to({y:39.9},0).wait(1).to({y:40.2},0).wait(1).to({y:40.4},0).wait(1).to({y:40.7},0).wait(1).to({x:-1.2,y:41},0).wait(1).to({y:41.2},0).wait(1).to({y:41.5},0).wait(1).to({y:41.8},0).wait(1).to({y:42},0).wait(1).to({y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({x:-1.3,y:42.8},0).wait(1).to({y:43.1},0).wait(1).to({y:43.3},0).wait(1).to({y:43.6},0).wait(1).to({y:43.9},0).wait(1).to({y:44.1},0).wait(1).to({y:44.4},0).wait(1).to({x:-1.4,y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({y:45.2},0).wait(1).to({y:45.5},0).wait(1).to({y:45.7},0).wait(1).to({y:46},0).wait(1).to({y:46.2},0).wait(1).to({x:-1.5,y:46.5},0).wait(1).to({y:46.8},0).wait(1).to({y:47},0).wait(1).to({y:47.3},0).wait(1).to({y:47.6},0).wait(1).to({y:47.8},0).wait(1).to({y:48.1},0).wait(1).to({x:-1.6,y:48.4},0).wait(1).to({y:48.6},0).wait(1).to({y:48.9},0).wait(1).to({y:49.2},0).wait(1).to({y:49.4},0).wait(1).to({y:49.7},0).wait(1).to({y:49.9},0).wait(1).to({x:-1.7,y:50.2},0).wait(1).to({y:50.5},0).wait(1).to({y:50.7},0).wait(1).to({y:51},0).wait(1).to({y:51.3},0).wait(1).to({y:51.5},0).wait(1).to({y:51.8},0).wait(1).to({x:-1.8,y:52.1},0).wait(1).to({y:52.3},0).wait(1).to({y:52.6},0).wait(1).to({y:52.9},0).wait(1).to({y:53.1},0).wait(1).to({y:53.4},0).wait(1).to({y:53.6},0).wait(1).to({x:-1.9,y:53.9},0).wait(1).to({y:54.2},0).wait(1).to({y:54.4},0).wait(1).to({y:54.7},0).wait(1).to({y:55},0).wait(1).to({y:55.2},0).wait(1).to({x:-2,y:55.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,24);


(lib.SymArrowRchgTwn1M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg1();
	this.instance.parent = this;
	this.instance.setTransform(5,11.2,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:5.1,y:11.5},0).wait(1).to({x:5.3,y:11.8},0).wait(1).to({x:5.4,y:12},0).wait(1).to({x:5.5,y:12.3},0).wait(1).to({x:5.7,y:12.6},0).wait(1).to({x:5.8,y:12.9},0).wait(1).to({x:5.9,y:13.2},0).wait(1).to({x:6.1,y:13.5},0).wait(1).to({x:6.2,y:13.7},0).wait(1).to({x:6.3,y:14},0).wait(1).to({x:6.5,y:14.3},0).wait(1).to({x:6.6,y:14.6},0).wait(1).to({x:6.7,y:14.9},0).wait(1).to({x:6.9,y:15.1},0).wait(1).to({x:7,y:15.4},0).wait(1).to({x:7.1,y:15.7},0).wait(1).to({x:7.2,y:16},0).wait(1).to({x:7.4,y:16.3},0).wait(1).to({x:7.5,y:16.6},0).wait(1).to({x:7.6,y:16.8},0).wait(1).to({x:7.8,y:17.1},0).wait(1).to({x:7.9,y:17.4},0).wait(1).to({x:8,y:17.7},0).wait(1).to({x:8.2,y:18},0).wait(1).to({x:8.3,y:18.2},0).wait(1).to({x:8.4,y:18.5},0).wait(1).to({x:8.6,y:18.8},0).wait(1).to({x:8.7,y:19.1},0).wait(1).to({x:8.8,y:19.4},0).wait(1).to({x:9,y:19.6},0).wait(1).to({x:9.1,y:19.9},0).wait(1).to({x:9.2,y:20.2},0).wait(1).to({x:9.4,y:20.5},0).wait(1).to({x:9.5,y:20.8},0).wait(1).to({x:9.6,y:21.1},0).wait(1).to({x:9.8,y:21.3},0).wait(1).to({x:9.9,y:21.6},0).wait(1).to({x:10,y:21.9},0).wait(1).to({x:10.2,y:22.2},0).wait(1).to({x:10.3,y:22.5},0).wait(1).to({x:10.4,y:22.7},0).wait(1).to({x:10.6,y:23},0).wait(1).to({x:10.7,y:23.3},0).wait(1).to({x:10.8,y:23.6},0).wait(1).to({x:10.9,y:23.9},0).wait(1).to({x:11.1,y:24.2},0).wait(1).to({x:11.2,y:24.4},0).wait(1).to({x:11.3,y:24.7},0).wait(1).to({x:11.5,y:25},0).wait(1).to({x:11.6,y:25.3},0).wait(1).to({x:11.7,y:25.6},0).wait(1).to({x:11.9,y:25.8},0).wait(1).to({x:12,y:26.1},0).wait(1).to({x:12.1,y:26.4},0).wait(1).to({x:12.3,y:26.7},0).wait(1).to({x:12.4,y:27},0).wait(1).to({x:12.5,y:27.3},0).wait(1).to({x:12.7,y:27.5},0).wait(1).to({x:12.8,y:27.8},0).wait(1).to({x:12.9,y:28.1},0).wait(1).to({x:13.1,y:28.4},0).wait(1).to({x:13.2,y:28.7},0).wait(1).to({x:13.3,y:28.9},0).wait(1).to({x:13.5,y:29.2},0).wait(1).to({x:13.6,y:29.5},0).wait(1).to({x:13.7,y:29.8},0).wait(1).to({x:13.9,y:30.1},0).wait(1).to({x:14,y:30.3},0).wait(1).to({x:14.1,y:30.6},0).wait(1).to({x:14.3,y:30.9},0).wait(1).to({x:14.4,y:31.2},0).wait(1).to({x:14.5,y:31.5},0).wait(1).to({x:14.6,y:31.8},0).wait(1).to({x:14.8,y:32},0).wait(1).to({x:14.9,y:32.3},0).wait(1).to({x:15,y:32.6},0).wait(1).to({x:15.2,y:32.9},0).wait(1).to({x:15.3,y:33.2},0).wait(1).to({x:15.4,y:33.4},0).wait(1).to({x:15.6,y:33.7},0).wait(1).to({x:15.7,y:34},0).wait(1).to({x:15.8,y:34.3},0).wait(1).to({x:16,y:34.6},0).wait(1).to({x:16.1,y:34.9},0).wait(1).to({x:16.2,y:35.1},0).wait(1).to({x:16.4,y:35.4},0).wait(1).to({x:16.5,y:35.7},0).wait(1).to({x:16.6,y:36},0).wait(1).to({x:16.8,y:36.3},0).wait(1).to({x:16.9,y:36.5},0).wait(1).to({x:17,y:36.8},0).wait(1).to({x:17.2,y:37.1},0).wait(1).to({x:17.3,y:37.4},0).wait(1).to({x:17.4,y:37.7},0).wait(1).to({x:17.6,y:38},0).wait(1).to({x:17.7,y:38.2},0).wait(1).to({x:17.8,y:38.5},0).wait(1).to({x:18,y:38.8},0).wait(1).to({x:18.1,y:39.1},0).wait(1).to({x:18.2,y:39.4},0).wait(1).to({x:18.4,y:39.6},0).wait(1).to({x:18.5,y:39.9},0).wait(1).to({x:18.6,y:40.2},0).wait(1).to({x:18.7,y:40.5},0).wait(1).to({x:18.9,y:40.8},0).wait(1).to({x:19,y:41.1},0).wait(1).to({x:19.1,y:41.3},0).wait(1).to({x:19.3,y:41.6},0).wait(1).to({x:19.4,y:41.9},0).wait(1).to({x:19.5,y:42.2},0).wait(1).to({x:19.7,y:42.5},0).wait(1).to({x:19.8,y:42.7},0).wait(1).to({x:19.9,y:43},0).wait(1).to({x:20.1,y:43.3},0).wait(1).to({x:20.2,y:43.6},0).wait(1).to({x:20.3,y:43.9},0).wait(1).to({x:20.5,y:44.1},0).wait(1).to({x:20.6,y:44.4},0).wait(1).to({x:20.7,y:44.7},0).wait(1).to({x:20.9,y:45},0).wait(1).to({x:21,y:45.3},0).wait(1).to({x:21.1,y:45.6},0).wait(1).to({x:21.3,y:45.8},0).wait(1).to({x:21.4,y:46.1},0).wait(1).to({x:21.5,y:46.4},0).wait(1).to({x:21.7,y:46.7},0).wait(1).to({x:21.8,y:47},0).wait(1).to({x:21.9,y:47.2},0).wait(1).to({x:22.1,y:47.5},0).wait(1).to({x:22.2,y:47.8},0).wait(1).to({x:22.3,y:48.1},0).wait(1).to({x:22.4,y:48.4},0).wait(1).to({x:22.6,y:48.7},0).wait(1).to({x:22.7,y:48.9},0).wait(1).to({x:22.8,y:49.2},0).wait(1).to({x:23,y:49.5},0).wait(1).to({x:23.1,y:49.8},0).wait(1).to({x:23.2,y:50.1},0).wait(1).to({x:23.4,y:50.3},0).wait(1).to({x:23.5,y:50.6},0).wait(1).to({x:23.6,y:50.9},0).wait(1).to({x:23.8,y:51.2},0).wait(1).to({x:23.9,y:51.5},0).wait(1).to({x:24,y:51.8},0).wait(1).to({x:24.2,y:52},0).wait(1).to({x:24.3,y:52.3},0).wait(1).to({x:24.4,y:52.6},0).wait(1).to({x:24.6,y:52.9},0).wait(1).to({x:24.7,y:53.2},0).wait(1).to({x:24.8,y:53.4},0).wait(1).to({x:25,y:53.7},0).wait(1).to({x:25.1,y:54},0).wait(1).to({x:25.2,y:54.3},0).wait(1).to({x:25.4,y:54.6},0).wait(1).to({x:25.5,y:54.8},0).wait(1).to({x:25.6,y:55.1},0).wait(1).to({x:25.8,y:55.4},0).wait(1).to({x:25.9,y:55.7},0).wait(1).to({x:26,y:56},0).wait(1).to({x:26.1,y:56.3},0).wait(1).to({x:26.3,y:56.5},0).wait(1).to({x:26.4,y:56.8},0).wait(1).to({x:26.5,y:57.1},0).wait(1).to({x:26.7,y:57.4},0).wait(1).to({x:26.8,y:57.7},0).wait(1).to({x:26.9,y:57.9},0).wait(1).to({x:27.1,y:58.2},0).wait(1).to({x:27.2,y:58.5},0).wait(1).to({x:27.3,y:58.8},0).wait(1).to({x:27.5,y:59.1},0).wait(1).to({x:27.6,y:59.4},0).wait(1).to({x:27.7,y:59.6},0).wait(1).to({x:27.9,y:59.9},0).wait(1).to({x:28,y:60.2},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,15,27.3);


(lib.SymArrowRchgTwn12L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg12();
	this.instance.parent = this;
	this.instance.setTransform(1.5,4,1,1,0,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:4.1},0).wait(2).to({x:1.6,y:4.2},0).wait(2).to({y:4.3},0).wait(2).to({x:1.7,y:4.4},0).wait(1).to({y:4.5},0).wait(2).to({y:4.6},0).wait(1).to({x:1.8},0).wait(1).to({y:4.7},0).wait(2).to({y:4.8},0).wait(1).to({x:1.9,y:4.9},0).wait(2).to({y:5},0).wait(2).to({x:2,y:5.1},0).wait(2).to({y:5.2},0).wait(1).to({y:5.3},0).wait(1).to({x:2.1},0).wait(1).to({y:5.4},0).wait(2).to({y:5.5},0).wait(1).to({x:2.2},0).wait(1).to({y:5.6},0).wait(1).to({y:5.7},0).wait(2).to({x:2.3,y:5.8},0).wait(2).to({y:5.9},0).wait(1).to({y:6},0).wait(1).to({x:2.4},0).wait(1).to({y:6.1},0).wait(2).to({y:6.2},0).wait(1).to({x:2.5},0).wait(1).to({y:6.3},0).wait(1).to({y:6.4},0).wait(2).to({x:2.6,y:6.5},0).wait(2).to({y:6.6},0).wait(2).to({x:2.7,y:6.7},0).wait(1).to({y:6.8},0).wait(2).to({y:6.9},0).wait(1).to({x:2.8},0).wait(1).to({y:7},0).wait(2).to({y:7.1},0).wait(1).to({x:2.9,y:7.2},0).wait(2).to({y:7.3},0).wait(2).to({x:3,y:7.4},0).wait(2).to({y:7.5},0).wait(1).to({y:7.6},0).wait(2).to({x:3.1,y:7.7},0).wait(2).to({y:7.8},0).wait(2).to({x:3.2,y:7.9},0).wait(1).to({y:8},0).wait(2).to({y:8.1},0).wait(1).to({x:3.3},0).wait(1).to({y:8.2},0).wait(2).to({y:8.3},0).wait(1).to({x:3.4,y:8.4},0).wait(2).to({y:8.5},0).wait(2).to({x:3.5,y:8.6},0).wait(2).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({x:3.6},0).wait(1).to({y:8.9},0).wait(2).to({y:9},0).wait(1).to({x:3.7},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(2).to({x:3.8,y:9.3},0).wait(2).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({x:3.9},0).wait(1).to({y:9.6},0).wait(2).to({y:9.7},0).wait(1).to({x:4},0).wait(1).to({y:9.8},0).wait(1).to({y:9.9},0).wait(2).to({x:4.1,y:10},0).wait(2).to({y:10.1},0).wait(2).to({x:4.2,y:10.2},0).wait(1).to({y:10.3},0).wait(2).to({y:10.4},0).wait(1).to({x:4.3},0).wait(1).to({y:10.5},0).wait(2).to({y:10.6},0).wait(1).to({x:4.4,y:10.7},0).wait(2).to({y:10.8},0).wait(2).to({x:4.5,y:10.9},0).wait(2).to({y:11},0).wait(1).to({y:11.1},0).wait(2).to({x:4.6,y:11.2},0).wait(2).to({y:11.3},0).wait(2).to({x:4.7,y:11.4},0).wait(1).to({y:11.5},0).wait(2).to({y:11.6},0).wait(1).to({x:4.8},0).wait(1).to({y:11.7},0).wait(2).to({y:11.8},0).wait(1).to({x:4.9,y:11.9},0).wait(2).to({y:12},0).wait(2).to({x:5,y:12.1},0).wait(2).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({x:5.1},0).wait(1).to({y:12.4},0).wait(2).to({y:12.5},0).wait(1).to({x:5.2},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(2).to({x:5.3,y:12.8},0).wait(2).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({x:5.4},0).wait(1).to({y:13.1},0).wait(2).to({y:13.2},0).wait(1).to({x:5.5},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(2).to({x:5.6,y:13.5},0).wait(2).to({y:13.6},0).wait(2).to({x:5.7,y:13.7},0).wait(1).to({y:13.8},0).wait(2).to({y:13.9},0).wait(1).to({x:5.8},0).wait(1).to({y:14},0).wait(2).to({y:14.1},0).wait(1).to({x:5.9,y:14.2},0).wait(2).to({y:14.3},0).wait(2).to({x:6,y:14.4},0).wait(2).to({y:14.5},0).wait(1).to({y:14.6},0).wait(2).to({x:6.1,y:14.7},0).wait(2).to({y:14.8},0).wait(2).to({x:6.2,y:14.9},0).wait(1).to({y:15},0).wait(2).to({y:15.1},0).wait(1).to({x:6.3},0).wait(1).to({y:15.2},0).wait(2).to({y:15.3},0).wait(1).to({x:6.4,y:15.4},0).wait(2).to({y:15.5},0).wait(2).to({x:6.5,y:15.6},0).wait(2).to({y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({x:6.6},0).wait(1).to({y:15.9},0).wait(2).to({y:16},0).wait(1).to({x:6.7},0).wait(1).to({y:16.1},0).wait(1).to({y:16.2},0).wait(2).to({x:6.8,y:16.3},0).wait(2).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({x:6.9},0).wait(1).to({y:16.6},0).wait(2).to({y:16.7},0).wait(1).to({x:7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(2).to({x:7.1,y:17},0).wait(2).to({y:17.1},0).wait(2).to({x:7.2,y:17.2},0).wait(1).to({y:17.3},0).wait(2).to({y:17.4},0).wait(1).to({x:7.3},0).wait(1).to({y:17.5},0).wait(2).to({y:17.6},0).wait(1).to({x:7.4,y:17.7},0).wait(2).to({y:17.8},0).wait(2).to({x:7.5,y:17.9},0).wait(2).to({y:18},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,13);


(lib.SymArrowRchgTwn11L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,5.5,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:5.6},0).wait(1).to({y:5.7},0).wait(1).to({y:5.8},0).wait(1).to({y:5.9},0).wait(1).to({y:6},0).wait(1).to({y:6.1},0).wait(1).to({x:0.6,y:6.2},0).wait(1).to({y:6.3},0).wait(1).to({y:6.4},0).wait(1).to({y:6.5},0).wait(1).to({y:6.6},0).wait(1).to({y:6.7},0).wait(1).to({y:6.8},0).wait(1).to({y:6.9},0).wait(1).to({y:7},0).wait(1).to({y:7.1},0).wait(1).to({y:7.2},0).wait(1).to({y:7.3},0).wait(1).to({x:0.7,y:7.4},0).wait(1).to({y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({y:7.9},0).wait(1).to({y:8},0).wait(1).to({y:8.1},0).wait(1).to({y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({y:8.6},0).wait(1).to({x:0.8,y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({y:8.9},0).wait(1).to({y:9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({x:0.9,y:9.9},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({x:1,y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({x:1.1,y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.5},0).wait(1).to({y:13.6},0).wait(1).to({x:1.2,y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({x:1.3,y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({y:16},0).wait(1).to({y:16.1},0).wait(1).to({x:1.4,y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({x:1.5,y:17.4},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.8},0).wait(1).to({y:17.9},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({y:18.6},0).wait(1).to({x:1.6,y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({y:19.4},0).wait(1).to({y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.8},0).wait(1).to({x:1.7,y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.7},0).wait(1).to({y:20.8},0).wait(1).to({y:20.9},0).wait(1).to({y:21},0).wait(1).to({y:21.1},0).wait(1).to({x:1.8,y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.4},0).wait(1).to({y:21.5},0).wait(1).to({y:21.6},0).wait(1).to({y:21.7},0).wait(1).to({y:21.8},0).wait(1).to({y:21.9},0).wait(1).to({y:22},0).wait(1).to({y:22.1},0).wait(1).to({y:22.2},0).wait(1).to({y:22.3},0).wait(1).to({x:1.9,y:22.4},0).wait(1).to({y:22.5},0).wait(1).to({y:22.6},0).wait(1).to({y:22.7},0).wait(1).to({y:22.8},0).wait(1).to({y:22.9},0).wait(1).to({y:23},0).wait(1).to({y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({y:23.3},0).wait(1).to({y:23.4},0).wait(1).to({y:23.5},0).wait(1).to({x:2,y:23.6},0).wait(1).to({y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({y:23.9},0).wait(1).to({y:24},0).wait(1).to({y:24.1},0).wait(1).to({y:24.3},0).wait(1).to({y:24.4},0).wait(1).to({y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({y:24.7},0).wait(1).to({y:24.8},0).wait(1).to({y:24.9},0).wait(1).to({x:2.1,y:25},0).wait(1).to({y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.3},0).wait(1).to({y:25.4},0).wait(1).to({y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.7},0).wait(1).to({y:25.8},0).wait(1).to({y:25.9},0).wait(1).to({y:26},0).wait(1).to({y:26.1},0).wait(1).to({x:2.2,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({y:26.4},0).wait(1).to({y:26.5},0).wait(1).to({y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({y:26.8},0).wait(1).to({y:26.9},0).wait(1).to({y:27},0).wait(1).to({y:27.1},0).wait(1).to({y:27.2},0).wait(1).to({y:27.3},0).wait(1).to({x:2.3,y:27.4},0).wait(1).to({y:27.5},0).wait(1).to({y:27.6},0).wait(1).to({y:27.7},0).wait(1).to({y:27.8},0).wait(1).to({y:27.9},0).wait(1).to({y:28},0).wait(1).to({y:28.1},0).wait(1).to({y:28.2},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({y:28.6},0).wait(1).to({x:2.4,y:28.7},0).wait(1).to({y:28.8},0).wait(1).to({y:28.9},0).wait(1).to({y:29},0).wait(1).to({y:29.1},0).wait(1).to({y:29.2},0).wait(1).to({y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({y:29.6},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({x:2.5,y:29.9},0).wait(1).to({y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.2},0).wait(1).to({y:30.3},0).wait(1).to({y:30.4},0).wait(1).to({y:30.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,16);


(lib.SymArrowRchgTwn10L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg10();
	this.instance.parent = this;
	this.instance.setTransform(2,7,1,1,0,0,0,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.1},0).wait(1).to({x:2.1,y:7.2},0).wait(1).to({y:7.3},0).wait(1).to({y:7.5},0).wait(1).to({x:2.2,y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({x:2.3,y:7.9},0).wait(1).to({y:8},0).wait(1).to({y:8.1},0).wait(1).to({x:2.4,y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({x:2.5,y:8.6},0).wait(1).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({x:2.6,y:9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({x:2.7,y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({x:2.8,y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:2.9,y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({x:3,y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.7},0).wait(1).to({x:3.1,y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({x:3.2,y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({y:11.4},0).wait(1).to({x:3.3,y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({x:3.4,y:11.8},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(1).to({x:3.5,y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({x:3.6,y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({x:3.7,y:12.9},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({x:3.8,y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({x:3.9,y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({x:4,y:13.9},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({x:4.1,y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({x:4.2,y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({x:4.3,y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({x:4.4,y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({x:4.5,y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({x:4.6,y:16},0).wait(1).to({y:16.1},0).wait(1).to({y:16.2},0).wait(1).to({x:4.7,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({x:4.8,y:16.6},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({x:4.9,y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.2},0).wait(1).to({x:5,y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({x:5.1,y:17.8},0).wait(1).to({y:17.9},0).wait(1).to({y:18},0).wait(1).to({x:5.2,y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({x:5.3,y:18.5},0).wait(1).to({y:18.6},0).wait(1).to({y:18.7},0).wait(1).to({x:5.4,y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({x:5.5,y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({y:19.4},0).wait(1).to({x:5.6,y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({x:5.7,y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.1},0).wait(1).to({x:5.8,y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({x:5.9,y:20.5},0).wait(1).to({y:20.7},0).wait(1).to({y:20.8},0).wait(1).to({x:6,y:20.9},0).wait(1).to({y:21},0).wait(1).to({y:21.1},0).wait(1).to({x:6.1,y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({x:6.2,y:21.6},0).wait(1).to({y:21.7},0).wait(1).to({y:21.8},0).wait(1).to({x:6.3,y:21.9},0).wait(1).to({y:22},0).wait(1).to({y:22.1},0).wait(1).to({x:6.4,y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({y:22.5},0).wait(1).to({x:6.5,y:22.6},0).wait(1).to({y:22.7},0).wait(1).to({y:22.8},0).wait(1).to({x:6.6,y:23},0).wait(1).to({y:23.1},0).wait(1).to({y:23.2},0).wait(1).to({x:6.7,y:23.3},0).wait(1).to({y:23.4},0).wait(1).to({y:23.5},0).wait(1).to({x:6.8,y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:23.9},0).wait(1).to({x:6.9,y:24},0).wait(1).to({y:24.1},0).wait(1).to({y:24.2},0).wait(1).to({x:7,y:24.3},0).wait(1).to({y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({y:24.7},0).wait(1).to({x:7.1,y:24.8},0).wait(1).to({y:24.9},0).wait(1).to({y:25},0).wait(1).to({x:7.2,y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({x:7.3,y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.7},0).wait(1).to({x:7.4,y:25.8},0).wait(1).to({y:25.9},0).wait(1).to({y:26},0).wait(1).to({x:7.5,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({y:26.4},0).wait(1).to({x:7.6,y:26.5},0).wait(1).to({y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({x:7.7,y:26.9},0).wait(1).to({y:27},0).wait(1).to({y:27.1},0).wait(1).to({x:7.8,y:27.2},0).wait(1).to({y:27.3},0).wait(1).to({y:27.4},0).wait(1).to({x:7.9,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({y:27.8},0).wait(1).to({x:8,y:27.9},0).wait(1).to({y:28},0).wait(1).to({y:28.1},0).wait(1).to({x:8.1,y:28.2},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:8.2,y:28.6},0).wait(1).to({y:28.7},0).wait(1).to({y:28.8},0).wait(1).to({x:8.3,y:28.9},0).wait(1).to({y:29},0).wait(1).to({y:29.1},0).wait(1).to({x:8.4,y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({y:29.5},0).wait(1).to({x:8.5,y:29.6},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({x:8.6,y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.2},0).wait(1).to({x:8.7,y:30.3},0).wait(1).to({y:30.4},0).wait(1).to({y:30.5},0).wait(1).to({x:8.8,y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({y:30.9},0).wait(1).to({x:8.9,y:31},0).wait(1).to({y:31.1},0).wait(1).to({y:31.2},0).wait(1).to({x:9,y:31.3},0).wait(1).to({y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({y:31.7},0).wait(1).to({x:9.1,y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({y:32},0).wait(1).to({x:9.2,y:32.1},0).wait(1).to({y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({x:9.3,y:32.5},0).wait(1).to({y:32.6},0).wait(1).to({y:32.7},0).wait(1).to({x:9.4,y:32.8},0).wait(1).to({y:32.9},0).wait(1).to({y:33},0).wait(1).to({x:9.5,y:33.2},0).wait(1).to({y:33.3},0).wait(1).to({y:33.4},0).wait(1).to({x:9.6,y:33.5},0).wait(1).to({y:33.6},0).wait(1).to({y:33.7},0).wait(1).to({x:9.7,y:33.9},0).wait(1).to({y:34},0).wait(1).to({y:34.1},0).wait(1).to({x:9.8,y:34.2},0).wait(1).to({y:34.3},0).wait(1).to({y:34.4},0).wait(1).to({x:9.9,y:34.5},0).wait(1).to({y:34.7},0).wait(1).to({y:34.8},0).wait(1).to({x:10,y:34.9},0).wait(1).to({y:35},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,19);


(lib.SymArrowRchgTwn9L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg9();
	this.instance.parent = this;
	this.instance.setTransform(1,7,1,1,0,0,0,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.1},0).wait(1).to({y:7.3},0).wait(1).to({y:7.4},0).wait(1).to({x:1.1,y:7.5},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({y:7.9},0).wait(1).to({y:8},0).wait(1).to({y:8.2},0).wait(1).to({x:1.2,y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.6},0).wait(1).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({x:1.3,y:9.1},0).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({x:1.4,y:9.9},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({x:1.5,y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({x:1.6,y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({x:1.7,y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({x:1.8,y:13},0).wait(1).to({y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:1.9,y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({x:2,y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({x:2.1,y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({y:16.2},0).wait(1).to({x:2.2,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:17},0).wait(1).to({x:2.3,y:17.1},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({x:2.4,y:17.9},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({x:2.5,y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({x:2.6,y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.1},0).wait(1).to({x:2.7,y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:20.9},0).wait(1).to({x:2.8,y:21},0).wait(1).to({y:21.2},0).wait(1).to({y:21.3},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.7},0).wait(1).to({x:2.9,y:21.8},0).wait(1).to({y:22},0).wait(1).to({y:22.1},0).wait(1).to({y:22.2},0).wait(1).to({y:22.3},0).wait(1).to({y:22.5},0).wait(1).to({x:3,y:22.6},0).wait(1).to({y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({y:23},0).wait(1).to({y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({y:23.4},0).wait(1).to({x:3.1,y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({y:23.9},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:3.2,y:24.3},0).wait(1).to({y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({y:24.7},0).wait(1).to({y:24.8},0).wait(1).to({y:25},0).wait(1).to({x:3.3,y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({y:25.5},0).wait(1).to({y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({x:3.4,y:25.9},0).wait(1).to({y:26},0).wait(1).to({y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({y:26.4},0).wait(1).to({y:26.5},0).wait(1).to({x:3.5,y:26.7},0).wait(1).to({y:26.8},0).wait(1).to({y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({y:27.2},0).wait(1).to({y:27.3},0).wait(1).to({x:3.6,y:27.5},0).wait(1).to({y:27.6},0).wait(1).to({y:27.7},0).wait(1).to({y:27.9},0).wait(1).to({y:28},0).wait(1).to({y:28.1},0).wait(1).to({x:3.7,y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({y:28.5},0).wait(1).to({y:28.6},0).wait(1).to({y:28.8},0).wait(1).to({y:28.9},0).wait(1).to({x:3.8,y:29},0).wait(1).to({y:29.2},0).wait(1).to({y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({y:29.6},0).wait(1).to({y:29.7},0).wait(1).to({x:3.9,y:29.8},0).wait(1).to({y:30},0).wait(1).to({y:30.1},0).wait(1).to({y:30.2},0).wait(1).to({y:30.3},0).wait(1).to({y:30.5},0).wait(1).to({x:4,y:30.6},0).wait(1).to({y:30.7},0).wait(1).to({y:30.9},0).wait(1).to({y:31},0).wait(1).to({y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({y:31.4},0).wait(1).to({x:4.1,y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({y:31.8},0).wait(1).to({y:31.9},0).wait(1).to({y:32},0).wait(1).to({y:32.2},0).wait(1).to({x:4.2,y:32.3},0).wait(1).to({y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({y:32.7},0).wait(1).to({y:32.8},0).wait(1).to({y:33},0).wait(1).to({x:4.3,y:33.1},0).wait(1).to({y:33.2},0).wait(1).to({y:33.4},0).wait(1).to({y:33.5},0).wait(1).to({y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({x:4.4,y:33.9},0).wait(1).to({y:34},0).wait(1).to({y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({y:34.4},0).wait(1).to({y:34.5},0).wait(1).to({x:4.5,y:34.7},0).wait(1).to({y:34.8},0).wait(1).to({y:34.9},0).wait(1).to({y:35.1},0).wait(1).to({y:35.2},0).wait(1).to({y:35.3},0).wait(1).to({x:4.6,y:35.5},0).wait(1).to({y:35.6},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36},0).wait(1).to({y:36.1},0).wait(1).to({x:4.7,y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.5},0).wait(1).to({y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({y:36.9},0).wait(1).to({x:4.8,y:37},0).wait(1).to({y:37.2},0).wait(1).to({y:37.3},0).wait(1).to({y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({y:37.7},0).wait(1).to({x:4.9,y:37.8},0).wait(1).to({y:38},0).wait(1).to({y:38.1},0).wait(1).to({y:38.2},0).wait(1).to({y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({x:5,y:38.6},0).wait(1).to({y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({y:39},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,19);


(lib.SymArrowRchgTwn8L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:6.1},0).wait(1).to({x:2.4,y:6.3},0).wait(1).to({y:6.4},0).wait(1).to({x:2.3,y:6.6},0).wait(1).to({x:2.2,y:6.7},0).wait(1).to({y:6.9},0).wait(1).to({x:2.1,y:7},0).wait(1).to({x:2,y:7.1},0).wait(1).to({y:7.3},0).wait(1).to({x:1.9,y:7.4},0).wait(1).to({x:1.8,y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({x:1.7,y:7.9},0).wait(1).to({x:1.6,y:8},0).wait(1).to({y:8.1},0).wait(1).to({x:1.5,y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({x:1.4,y:8.6},0).wait(1).to({x:1.3,y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({x:1.2,y:9},0).wait(1).to({x:1.1,y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({x:1,y:9.4},0).wait(1).to({x:0.9,y:9.6},0).wait(1).to({y:9.7},0).wait(1).to({x:0.8,y:9.9},0).wait(1).to({x:0.7,y:10},0).wait(1).to({y:10.1},0).wait(1).to({x:0.6,y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({x:0.5,y:10.6},0).wait(1).to({x:0.4,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:0.3,y:11},0).wait(1).to({x:0.2,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({x:0.1,y:11.4},0).wait(1).to({x:0,y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({x:-0.1,y:11.9},0).wait(1).to({y:12},0).wait(1).to({x:-0.2,y:12.1},0).wait(1).to({x:-0.3,y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({x:-0.4,y:12.6},0).wait(1).to({x:-0.5,y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({x:-0.6,y:13},0).wait(1).to({x:-0.7,y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({x:-0.8,y:13.4},0).wait(1).to({x:-0.9,y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({x:-1,y:13.9},0).wait(1).to({x:-1.1,y:14},0).wait(1).to({y:14.1},0).wait(1).to({x:-1.2,y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({x:-1.3,y:14.6},0).wait(1).to({x:-1.4,y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:-1.5,y:15},0).wait(1).to({x:-1.6,y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({x:-1.7,y:15.4},0).wait(1).to({x:-1.8,y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({x:-1.9,y:15.9},0).wait(1).to({x:-2,y:16},0).wait(1).to({y:16.1},0).wait(1).to({x:-2.1,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({x:-2.2,y:16.6},0).wait(1).to({x:-2.3,y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:-2.4,y:17},0).wait(1).to({x:-2.5,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:-2.6,y:17.4},0).wait(1).to({x:-2.7,y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({x:-2.8,y:17.9},0).wait(1).to({y:18},0).wait(1).to({x:-2.9,y:18.1},0).wait(1).to({x:-3,y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({x:-3.1,y:18.6},0).wait(1).to({x:-3.2,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({x:-3.3,y:19},0).wait(1).to({x:-3.4,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:-3.5,y:19.4},0).wait(1).to({x:-3.6,y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({x:-3.7,y:19.9},0).wait(1).to({x:-3.8,y:20},0).wait(1).to({y:20.1},0).wait(1).to({x:-3.9,y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({x:-4,y:20.6},0).wait(1).to({x:-4.1,y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({x:-4.2,y:21},0).wait(1).to({x:-4.3,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({x:-4.4,y:21.4},0).wait(1).to({x:-4.5,y:21.6},0).wait(1).to({y:21.7},0).wait(1).to({x:-4.6,y:21.9},0).wait(1).to({x:-4.7,y:22},0).wait(1).to({y:22.1},0).wait(1).to({x:-4.8,y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({x:-4.9,y:22.6},0).wait(1).to({x:-5,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({x:-5.1,y:23},0).wait(1).to({x:-5.2,y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({x:-5.3,y:23.4},0).wait(1).to({x:-5.4,y:23.6},0).wait(1).to({y:23.7},0).wait(1).to({x:-5.5,y:23.9},0).wait(1).to({x:-5.6,y:24},0).wait(1).to({y:24.1},0).wait(1).to({x:-5.7,y:24.3},0).wait(1).to({y:24.4},0).wait(1).to({x:-5.8,y:24.6},0).wait(1).to({x:-5.9,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({x:-6,y:25},0).wait(1).to({x:-6.1,y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({x:-6.2,y:25.4},0).wait(1).to({x:-6.3,y:25.6},0).wait(1).to({y:25.7},0).wait(1).to({x:-6.4,y:25.9},0).wait(1).to({x:-6.5,y:26},0).wait(1).to({y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({x:-6.6,y:26.5},0).wait(1).to({y:26.6},0).wait(1).to({y:26.8},0).wait(1).to({x:-6.7,y:27},0).wait(1).to({y:27.1},0).wait(1).to({x:-6.8,y:27.3},0).wait(1).to({y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({x:-6.9,y:27.8},0).wait(1).to({y:27.9},0).wait(1).to({x:-7,y:28.1},0).wait(1).to({y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:-7.1,y:28.5},0).wait(1).to({y:28.7},0).wait(1).to({x:-7.2,y:28.9},0).wait(1).to({y:29},0).wait(1).to({y:29.2},0).wait(1).to({x:-7.3,y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({x:-7.4,y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({y:30},0).wait(1).to({x:-7.5,y:30.1},0).wait(1).to({y:30.3},0).wait(1).to({x:-7.6,y:30.5},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({x:-7.7,y:30.9},0).wait(1).to({y:31.1},0).wait(1).to({x:-7.8,y:31.3},0).wait(1).to({y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({x:-7.9,y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({y:32},0).wait(1).to({x:-8,y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({x:-8.1,y:32.5},0).wait(1).to({y:32.7},0).wait(1).to({y:32.8},0).wait(1).to({x:-8.2,y:33},0).wait(1).to({y:33.2},0).wait(1).to({x:-8.3,y:33.3},0).wait(1).to({y:33.5},0).wait(1).to({y:33.6},0).wait(1).to({x:-8.4,y:33.8},0).wait(1).to({y:34},0).wait(1).to({x:-8.5,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({y:34.4},0).wait(1).to({x:-8.6,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({x:-8.7,y:34.9},0).wait(1).to({y:35.1},0).wait(1).to({y:35.2},0).wait(1).to({x:-8.8,y:35.4},0).wait(1).to({y:35.5},0).wait(1).to({x:-8.9,y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36},0).wait(1).to({x:-9,y:36.2},0).wait(1).to({y:36.3},0).wait(1).to({x:-9.1,y:36.5},0).wait(1).to({y:36.7},0).wait(1).to({y:36.8},0).wait(1).to({x:-9.2,y:37},0).wait(1).to({y:37.1},0).wait(1).to({y:37.3},0).wait(1).to({x:-9.3,y:37.5},0).wait(1).to({y:37.6},0).wait(1).to({x:-9.4,y:37.8},0).wait(1).to({y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({x:-9.5,y:38.3},0).wait(1).to({y:38.4},0).wait(1).to({x:-9.6,y:38.6},0).wait(1).to({y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:-9.7,y:39},0).wait(1).to({y:39.2},0).wait(1).to({x:-9.8,y:39.4},0).wait(1).to({y:39.5},0).wait(1).to({y:39.7},0).wait(1).to({x:-9.9,y:39.8},0).wait(1).to({y:40},0).wait(1).to({x:-10,y:40.2},0).wait(1).to({y:40.3},0).wait(1).to({y:40.5},0).wait(1).to({x:-10.1,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:-10.2,y:41},0).wait(1).to({y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({x:-10.3,y:41.4},0).wait(1).to({y:41.6},0).wait(1).to({x:-10.4,y:41.8},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:-10.5,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:-10.6,y:42.6},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymArrowRchgTwn7L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg7();
	this.instance.parent = this;
	this.instance.setTransform(2.5,8.5,1,1,0,0,0,2.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7},0).wait(1).to({x:2.6,y:8.8},0).wait(1).to({y:9},0).wait(1).to({x:2.7,y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({x:2.8,y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({x:2.9,y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:3,y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({x:3.1,y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({x:3.2,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:3.3,y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({x:3.4,y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({x:3.5,y:11.7},0).wait(1).to({y:11.9},0).wait(1).to({x:3.6,y:12},0).wait(1).to({y:12.2},0).wait(1).to({x:3.7,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({x:3.8,y:12.7},0).wait(1).to({y:12.8},0).wait(1).to({x:3.9,y:13},0).wait(1).to({y:13.1},0).wait(1).to({x:4,y:13.3},0).wait(1).to({y:13.5},0).wait(1).to({x:4.1,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({x:4.2,y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({x:4.3,y:14.3},0).wait(1).to({y:14.4},0).wait(1).to({x:4.4,y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({x:4.5,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({x:4.6,y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({x:4.7,y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({x:4.8,y:15.9},0).wait(1).to({y:16},0).wait(1).to({x:4.9,y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({x:5,y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({x:5.1,y:16.8},0).wait(1).to({y:17},0).wait(1).to({x:5.2,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:5.3,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:5.4,y:17.8},0).wait(1).to({y:17.9},0).wait(1).to({x:5.5,y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({x:5.6,y:18.6},0).wait(1).to({y:18.7},0).wait(1).to({x:5.7,y:18.9},0).wait(1).to({y:19},0).wait(1).to({x:5.8,y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({x:5.9,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:6,y:19.8},0).wait(1).to({y:20},0).wait(1).to({x:6.1,y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({x:6.2,y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({x:6.3,y:20.8},0).wait(1).to({y:21},0).wait(1).to({x:6.4,y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({x:6.5,y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({x:6.6,y:21.8},0).wait(1).to({y:21.9},0).wait(1).to({x:6.7,y:22.1},0).wait(1).to({y:22.2},0).wait(1).to({x:6.8,y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({x:6.9,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({x:7,y:23},0).wait(1).to({y:23.2},0).wait(1).to({x:7.1,y:23.4},0).wait(1).to({y:23.5},0).wait(1).to({x:7.2,y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({x:7.3,y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:7.4,y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({x:7.5,y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({x:7.6,y:25},0).wait(1).to({y:25.1},0).wait(1).to({x:7.7,y:25.3},0).wait(1).to({y:25.4},0).wait(1).to({x:7.8,y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({x:7.9,y:25.9},0).wait(1).to({y:26.1},0).wait(1).to({x:8,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:8.1,y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({x:8.2,y:26.9},0).wait(1).to({y:27},0).wait(1).to({x:8.3,y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({x:8.4,y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:8.5,y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.2},0).wait(1).to({x:8.6,y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:8.7,y:28.6},0).wait(1).to({y:28.8},0).wait(1).to({x:8.8,y:29},0).wait(1).to({y:29.1},0).wait(1).to({x:8.9,y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({x:9,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({x:9.1,y:29.9},0).wait(1).to({y:30.1},0).wait(1).to({x:9.2,y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({x:9.3,y:30.6},0).wait(1).to({y:30.7},0).wait(1).to({x:9.4,y:30.9},0).wait(1).to({y:31},0).wait(1).to({x:9.5,y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({x:9.6,y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({x:9.7,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:9.8,y:32.2},0).wait(1).to({y:32.3},0).wait(1).to({x:9.9,y:32.5},0).wait(1).to({y:32.6},0).wait(1).to({x:10,y:32.8},0).wait(1).to({y:33},0).wait(1).to({x:10.1,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:10.2,y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({x:10.3,y:33.8},0).wait(1).to({y:33.9},0).wait(1).to({x:10.4,y:34.1},0).wait(1).to({y:34.2},0).wait(1).to({x:10.5,y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({x:10.6,y:34.7},0).wait(1).to({y:34.9},0).wait(1).to({x:10.7,y:35},0).wait(1).to({y:35.2},0).wait(1).to({x:10.8,y:35.4},0).wait(1).to({y:35.5},0).wait(1).to({x:10.9,y:35.7},0).wait(1).to({y:35.8},0).wait(1).to({x:11,y:36},0).wait(1).to({y:36.2},0).wait(1).to({x:11.1,y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({x:11.2,y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({x:11.3,y:37},0).wait(1).to({y:37.1},0).wait(1).to({x:11.4,y:37.3},0).wait(1).to({y:37.4},0).wait(1).to({x:11.5,y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({y:37.9},0).wait(1).to({x:11.6,y:38.1},0).wait(1).to({y:38.2},0).wait(1).to({x:11.7,y:38.4},0).wait(1).to({y:38.5},0).wait(1).to({x:11.8,y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:11.9,y:39},0).wait(1).to({y:39.2},0).wait(1).to({x:12,y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({x:12.1,y:39.7},0).wait(1).to({y:39.8},0).wait(1).to({x:12.2,y:40},0).wait(1).to({y:40.1},0).wait(1).to({x:12.3,y:40.3},0).wait(1).to({y:40.5},0).wait(1).to({x:12.4,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({x:12.5,y:40.9},0).wait(1).to({y:41.1},0).wait(1).to({x:12.6,y:41.3},0).wait(1).to({y:41.4},0).wait(1).to({x:12.7,y:41.6},0).wait(1).to({y:41.7},0).wait(1).to({x:12.8,y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:12.9,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:13,y:42.5},0).wait(1).to({y:42.7},0).wait(1).to({x:13.1,y:42.9},0).wait(1).to({y:43},0).wait(1).to({x:13.2,y:43.2},0).wait(1).to({y:43.3},0).wait(1).to({x:13.3,y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:13.4,y:43.8},0).wait(1).to({y:44},0).wait(1).to({x:13.5,y:44.1},0).wait(1).to({y:44.3},0).wait(1).to({x:13.6,y:44.5},0).wait(1).to({y:44.6},0).wait(1).to({x:13.7,y:44.8},0).wait(1).to({y:44.9},0).wait(1).to({x:13.8,y:45.1},0).wait(1).to({y:45.3},0).wait(1).to({x:13.9,y:45.4},0).wait(1).to({y:45.6},0).wait(1).to({x:14,y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({x:14.1,y:46.1},0).wait(1).to({y:46.2},0).wait(1).to({x:14.2,y:46.4},0).wait(1).to({y:46.5},0).wait(1).to({x:14.3,y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({x:14.4,y:47},0).wait(1).to({y:47.2},0).wait(1).to({x:14.5,y:47.3},0).wait(1).to({y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,22);


(lib.SymArrowRchgTwn6L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg6();
	this.instance.parent = this;
	this.instance.setTransform(2,8.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7},0).wait(1).to({x:2.1,y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.1},0).wait(1).to({x:2.2,y:9.3},0).wait(1).to({y:9.5},0).wait(1).to({x:2.3,y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:2.4,y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({x:2.5,y:10.6},0).wait(1).to({y:10.7},0).wait(1).to({x:2.6,y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({x:2.7,y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({y:11.7},0).wait(1).to({x:2.8,y:11.9},0).wait(1).to({y:12},0).wait(1).to({y:12.2},0).wait(1).to({x:2.9,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({x:3,y:12.7},0).wait(1).to({y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:3.1,y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({y:13.5},0).wait(1).to({x:3.2,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({x:3.3,y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({y:14.3},0).wait(1).to({x:3.4,y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({x:3.5,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({x:3.6,y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({x:3.7,y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({x:3.8,y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({x:3.9,y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({x:4,y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({x:4.1,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({x:4.2,y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({x:4.3,y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({x:4.4,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({x:4.5,y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({y:19.5},0).wait(1).to({x:4.6,y:19.7},0).wait(1).to({y:19.8},0).wait(1).to({x:4.7,y:20},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({x:4.8,y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({x:4.9,y:21},0).wait(1).to({y:21.1},0).wait(1).to({x:5,y:21.3},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({x:5.1,y:21.8},0).wait(1).to({y:21.9},0).wait(1).to({y:22.1},0).wait(1).to({x:5.2,y:22.2},0).wait(1).to({y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({x:5.3,y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({x:5.4,y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({x:5.5,y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({y:23.8},0).wait(1).to({x:5.6,y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:5.7,y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24.6},0).wait(1).to({x:5.8,y:24.8},0).wait(1).to({y:25},0).wait(1).to({y:25.1},0).wait(1).to({x:5.9,y:25.3},0).wait(1).to({y:25.4},0).wait(1).to({y:25.6},0).wait(1).to({x:6,y:25.8},0).wait(1).to({y:25.9},0).wait(1).to({x:6.1,y:26.1},0).wait(1).to({y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({x:6.2,y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:6.3,y:27},0).wait(1).to({y:27.2},0).wait(1).to({x:6.4,y:27.4},0).wait(1).to({y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:6.5,y:27.8},0).wait(1).to({y:28},0).wait(1).to({y:28.2},0).wait(1).to({x:6.6,y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({y:28.6},0).wait(1).to({x:6.7,y:28.8},0).wait(1).to({y:29},0).wait(1).to({x:6.8,y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.4},0).wait(1).to({x:6.9,y:29.6},0).wait(1).to({y:29.8},0).wait(1).to({y:29.9},0).wait(1).to({x:7,y:30.1},0).wait(1).to({y:30.2},0).wait(1).to({x:7.1,y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.7},0).wait(1).to({x:7.2,y:30.9},0).wait(1).to({y:31},0).wait(1).to({y:31.2},0).wait(1).to({x:7.3,y:31.4},0).wait(1).to({y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({x:7.4,y:31.8},0).wait(1).to({y:32},0).wait(1).to({x:7.5,y:32.2},0).wait(1).to({y:32.3},0).wait(1).to({y:32.5},0).wait(1).to({x:7.6,y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({y:33},0).wait(1).to({x:7.7,y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:7.8,y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({x:7.9,y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({y:34.2},0).wait(1).to({x:8,y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({y:34.7},0).wait(1).to({x:8.1,y:34.9},0).wait(1).to({y:35},0).wait(1).to({x:8.2,y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({y:35.5},0).wait(1).to({x:8.3,y:35.7},0).wait(1).to({y:35.8},0).wait(1).to({y:36},0).wait(1).to({x:8.4,y:36.2},0).wait(1).to({y:36.3},0).wait(1).to({x:8.5,y:36.5},0).wait(1).to({y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({x:8.6,y:37},0).wait(1).to({y:37.1},0).wait(1).to({y:37.3},0).wait(1).to({x:8.7,y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({x:8.8,y:37.8},0).wait(1).to({y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({x:8.9,y:38.2},0).wait(1).to({y:38.4},0).wait(1).to({y:38.5},0).wait(1).to({x:9,y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({y:39},0).wait(1).to({x:9.1,y:39.2},0).wait(1).to({y:39.3},0).wait(1).to({x:9.2,y:39.5},0).wait(1).to({y:39.7},0).wait(1).to({y:39.8},0).wait(1).to({x:9.3,y:40},0).wait(1).to({y:40.1},0).wait(1).to({y:40.3},0).wait(1).to({x:9.4,y:40.5},0).wait(1).to({y:40.6},0).wait(1).to({x:9.5,y:40.8},0).wait(1).to({y:40.9},0).wait(1).to({y:41.1},0).wait(1).to({x:9.6,y:41.3},0).wait(1).to({y:41.4},0).wait(1).to({y:41.6},0).wait(1).to({x:9.7,y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:9.8,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:9.9,y:42.5},0).wait(1).to({y:42.7},0).wait(1).to({y:42.9},0).wait(1).to({x:10,y:43},0).wait(1).to({y:43.2},0).wait(1).to({y:43.3},0).wait(1).to({x:10.1,y:43.5},0).wait(1).to({y:43.7},0).wait(1).to({x:10.2,y:43.8},0).wait(1).to({y:44},0).wait(1).to({y:44.1},0).wait(1).to({x:10.3,y:44.3},0).wait(1).to({y:44.5},0).wait(1).to({y:44.6},0).wait(1).to({x:10.4,y:44.8},0).wait(1).to({y:44.9},0).wait(1).to({y:45.1},0).wait(1).to({x:10.5,y:45.3},0).wait(1).to({y:45.4},0).wait(1).to({x:10.6,y:45.6},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({x:10.7,y:46.1},0).wait(1).to({y:46.2},0).wait(1).to({y:46.4},0).wait(1).to({x:10.8,y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({x:10.9,y:46.9},0).wait(1).to({y:47},0).wait(1).to({y:47.2},0).wait(1).to({x:11,y:47.3},0).wait(1).to({y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,22);


(lib.SymArrowRchgTwn5L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg5();
	this.instance.parent = this;
	this.instance.setTransform(1,9,1,1,0,0,0,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.2},0).wait(1).to({y:9.3},0).wait(1).to({x:1.1,y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({x:1.2,y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({x:1.3,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({x:1.4,y:12},0).wait(1).to({y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({x:1.5,y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({x:1.6,y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({x:1.7,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:1.8,y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({x:1.9,y:15.9},0).wait(1).to({y:16},0).wait(1).to({y:16.2},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({x:2,y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({x:2.1,y:17.5},0).wait(1).to({y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({x:2.2,y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({x:2.3,y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({x:2.4,y:19.8},0).wait(1).to({y:20},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({x:2.5,y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({x:2.6,y:21.5},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:22},0).wait(1).to({y:22.1},0).wait(1).to({x:2.7,y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:22.9},0).wait(1).to({x:2.8,y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({y:23.4},0).wait(1).to({y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({x:2.9,y:23.9},0).wait(1).to({y:24.1},0).wait(1).to({y:24.2},0).wait(1).to({y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({x:3,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25.1},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({x:3.1,y:25.6},0).wait(1).to({y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({y:26},0).wait(1).to({x:3.2,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:3.3,y:27},0).wait(1).to({y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({y:27.5},0).wait(1).to({y:27.7},0).wait(1).to({x:3.4,y:27.9},0).wait(1).to({y:28},0).wait(1).to({y:28.2},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({x:3.5,y:28.7},0).wait(1).to({y:28.8},0).wait(1).to({y:29},0).wait(1).to({y:29.2},0).wait(1).to({y:29.3},0).wait(1).to({x:3.6,y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({y:30},0).wait(1).to({y:30.1},0).wait(1).to({x:3.7,y:30.3},0).wait(1).to({y:30.5},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({y:31},0).wait(1).to({x:3.8,y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({y:31.5},0).wait(1).to({y:31.6},0).wait(1).to({y:31.8},0).wait(1).to({x:3.9,y:32},0).wait(1).to({y:32.1},0).wait(1).to({y:32.3},0).wait(1).to({y:32.4},0).wait(1).to({x:4,y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:4.1,y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({x:4.2,y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({y:34.7},0).wait(1).to({y:34.9},0).wait(1).to({x:4.3,y:35.1},0).wait(1).to({y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({y:35.6},0).wait(1).to({y:35.7},0).wait(1).to({x:4.4,y:35.9},0).wait(1).to({y:36},0).wait(1).to({y:36.2},0).wait(1).to({y:36.4},0).wait(1).to({y:36.5},0).wait(1).to({x:4.5,y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({y:37},0).wait(1).to({y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({x:4.6,y:37.5},0).wait(1).to({y:37.7},0).wait(1).to({y:37.9},0).wait(1).to({y:38},0).wait(1).to({y:38.2},0).wait(1).to({x:4.7,y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({y:38.7},0).wait(1).to({y:38.8},0).wait(1).to({x:4.8,y:39},0).wait(1).to({y:39.2},0).wait(1).to({y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({y:39.7},0).wait(1).to({x:4.9,y:39.8},0).wait(1).to({y:40},0).wait(1).to({y:40.1},0).wait(1).to({y:40.3},0).wait(1).to({y:40.5},0).wait(1).to({x:5,y:40.6},0).wait(1).to({y:40.8},0).wait(1).to({y:41},0).wait(1).to({y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({x:5.1,y:41.5},0).wait(1).to({y:41.6},0).wait(1).to({y:41.8},0).wait(1).to({y:42},0).wait(1).to({y:42.1},0).wait(1).to({x:5.2,y:42.3},0).wait(1).to({y:42.4},0).wait(1).to({y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({y:42.9},0).wait(1).to({x:5.3,y:43.1},0).wait(1).to({y:43.3},0).wait(1).to({y:43.4},0).wait(1).to({y:43.6},0).wait(1).to({y:43.8},0).wait(1).to({x:5.4,y:43.9},0).wait(1).to({y:44.1},0).wait(1).to({y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({y:44.6},0).wait(1).to({x:5.5,y:44.7},0).wait(1).to({y:44.9},0).wait(1).to({y:45.1},0).wait(1).to({y:45.2},0).wait(1).to({y:45.4},0).wait(1).to({x:5.6,y:45.6},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({y:46},0).wait(1).to({x:5.7,y:46.2},0).wait(1).to({y:46.4},0).wait(1).to({y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({x:5.8,y:47},0).wait(1).to({y:47.2},0).wait(1).to({y:47.4},0).wait(1).to({y:47.5},0).wait(1).to({y:47.7},0).wait(1).to({x:5.9,y:47.9},0).wait(1).to({y:48},0).wait(1).to({y:48.2},0).wait(1).to({y:48.3},0).wait(1).to({y:48.5},0).wait(1).to({x:6,y:48.7},0).wait(1).to({y:48.8},0).wait(1).to({y:49},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,23);


(lib.SymArrowRchgTwn4L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg4();
	this.instance.parent = this;
	this.instance.setTransform(1,8.5,1,1,0,0,0,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.7},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.2},0).wait(1).to({x:0.9,y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({y:10},0).wait(1).to({x:0.8,y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:0.7,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({x:0.6,y:11.9},0).wait(1).to({y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({x:0.5,y:12.8},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({y:13.3},0).wait(1).to({y:13.5},0).wait(1).to({x:0.4,y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({x:0.3,y:14.5},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({y:15},0).wait(1).to({y:15.2},0).wait(1).to({x:0.2,y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({x:0.1,y:16.1},0).wait(1).to({y:16.2},0).wait(1).to({y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({y:16.8},0).wait(1).to({x:0,y:16.9},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:-0.1,y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({x:-0.2,y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({x:-0.3,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({x:-0.4,y:20.4},0).wait(1).to({y:20.5},0).wait(1).to({y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({y:21.1},0).wait(1).to({x:-0.5,y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:21.9},0).wait(1).to({x:-0.6,y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({y:22.4},0).wait(1).to({y:22.6},0).wait(1).to({x:-0.7,y:22.8},0).wait(1).to({y:23},0).wait(1).to({y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({x:-0.8,y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({y:24.3},0).wait(1).to({x:-0.9,y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({y:25},0).wait(1).to({y:25.2},0).wait(1).to({x:-1,y:25.4},0).wait(1).to({y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({y:26.1},0).wait(1).to({x:-1.1,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.6},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:-1.2,y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:-1.3,y:28},0).wait(1).to({y:28.1},0).wait(1).to({y:28.3},0).wait(1).to({y:28.5},0).wait(1).to({y:28.6},0).wait(1).to({x:-1.4,y:28.8},0).wait(1).to({y:29},0).wait(1).to({y:29.2},0).wait(1).to({y:29.3},0).wait(1).to({x:-1.5,y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({y:30},0).wait(1).to({y:30.2},0).wait(1).to({x:-1.6,y:30.4},0).wait(1).to({y:30.5},0).wait(1).to({y:30.7},0).wait(1).to({y:30.9},0).wait(1).to({y:31},0).wait(1).to({x:-1.7,y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({x:-1.8,y:32.1},0).wait(1).to({y:32.3},0).wait(1).to({y:32.4},0).wait(1).to({y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({x:-1.9,y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({y:33.5},0).wait(1).to({y:33.6},0).wait(1).to({x:-2,y:33.8},0).wait(1).to({y:34},0).wait(1).to({y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({y:34.5},0).wait(1).to({x:-2.1,y:34.7},0).wait(1).to({y:34.8},0).wait(1).to({y:35},0).wait(1).to({y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({x:-2.2,y:35.5},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36},0).wait(1).to({y:36.2},0).wait(1).to({x:-2.3,y:36.4},0).wait(1).to({y:36.6},0).wait(1).to({y:36.7},0).wait(1).to({y:36.9},0).wait(1).to({x:-2.4,y:37.1},0).wait(1).to({y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({x:-2.5,y:37.9},0).wait(1).to({y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({y:38.6},0).wait(1).to({x:-2.6,y:38.8},0).wait(1).to({y:39},0).wait(1).to({y:39.1},0).wait(1).to({y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({x:-2.7,y:39.7},0).wait(1).to({y:39.8},0).wait(1).to({y:40},0).wait(1).to({y:40.2},0).wait(1).to({y:40.3},0).wait(1).to({x:-2.8,y:40.5},0).wait(1).to({y:40.7},0).wait(1).to({y:40.9},0).wait(1).to({y:41},0).wait(1).to({y:41.2},0).wait(1).to({x:-2.9,y:41.4},0).wait(1).to({y:41.5},0).wait(1).to({y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({x:-3,y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({y:42.9},0).wait(1).to({x:-3.1,y:43.1},0).wait(1).to({y:43.3},0).wait(1).to({y:43.4},0).wait(1).to({y:43.6},0).wait(1).to({x:-3.2,y:43.8},0).wait(1).to({y:44},0).wait(1).to({y:44.1},0).wait(1).to({y:44.3},0).wait(1).to({y:44.5},0).wait(1).to({x:-3.3,y:44.6},0).wait(1).to({y:44.8},0).wait(1).to({y:45},0).wait(1).to({y:45.2},0).wait(1).to({y:45.3},0).wait(1).to({x:-3.4,y:45.5},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({y:46},0).wait(1).to({y:46.2},0).wait(1).to({x:-3.5,y:46.4},0).wait(1).to({y:46.5},0).wait(1).to({y:46.7},0).wait(1).to({y:46.9},0).wait(1).to({y:47.1},0).wait(1).to({x:-3.6,y:47.2},0).wait(1).to({y:47.4},0).wait(1).to({y:47.6},0).wait(1).to({y:47.7},0).wait(1).to({y:47.9},0).wait(1).to({x:-3.7,y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({y:48.4},0).wait(1).to({y:48.6},0).wait(1).to({y:48.8},0).wait(1).to({x:-3.8,y:49},0).wait(1).to({y:49.1},0).wait(1).to({y:49.3},0).wait(1).to({y:49.5},0).wait(1).to({y:49.6},0).wait(1).to({x:-3.9,y:49.8},0).wait(1).to({y:50},0).wait(1).to({y:50.2},0).wait(1).to({y:50.3},0).wait(1).to({x:-4,y:50.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,22);


(lib.SymArrowRchgTwn3L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,9,1,1,0,0,0,1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({x:1.4,y:9.6},0).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({x:1.3,y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({x:1.2,y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({x:1.1,y:11},0).wait(1).to({y:11.2},0).wait(1).to({y:11.4},0).wait(1).to({x:1,y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({x:0.9,y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({x:0.8,y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({x:0.7,y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({x:0.6,y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:14},0).wait(1).to({x:0.5,y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({x:0.4,y:14.5},0).wait(1).to({y:14.7},0).wait(1).to({y:14.9},0).wait(1).to({x:0.3,y:15.1},0).wait(1).to({y:15.3},0).wait(1).to({y:15.5},0).wait(1).to({x:0.2,y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({x:0.1,y:16},0).wait(1).to({y:16.2},0).wait(1).to({y:16.4},0).wait(1).to({x:0,y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:-0.1,y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.5},0).wait(1).to({x:-0.2,y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({x:-0.3,y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({x:-0.4,y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:19},0).wait(1).to({x:-0.5,y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({x:-0.6,y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({x:-0.7,y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({x:-0.8,y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({x:-0.9,y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({x:-1,y:21.5},0).wait(1).to({y:21.7},0).wait(1).to({y:21.9},0).wait(1).to({x:-1.1,y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({y:22.5},0).wait(1).to({x:-1.2,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({x:-1.3,y:23},0).wait(1).to({y:23.2},0).wait(1).to({y:23.4},0).wait(1).to({x:-1.4,y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:23.9},0).wait(1).to({x:-1.5,y:24.1},0).wait(1).to({y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({x:-1.6,y:24.7},0).wait(1).to({y:24.9},0).wait(1).to({x:-1.7,y:25},0).wait(1).to({y:25.2},0).wait(1).to({y:25.4},0).wait(1).to({x:-1.8,y:25.6},0).wait(1).to({y:25.8},0).wait(1).to({y:26},0).wait(1).to({x:-1.9,y:26.2},0).wait(1).to({y:26.3},0).wait(1).to({x:-2,y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({x:-2.1,y:27.1},0).wait(1).to({y:27.3},0).wait(1).to({y:27.4},0).wait(1).to({x:-2.2,y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({y:28},0).wait(1).to({x:-2.3,y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({x:-2.4,y:28.5},0).wait(1).to({y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({x:-2.5,y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({x:-2.6,y:29.7},0).wait(1).to({y:29.8},0).wait(1).to({x:-2.7,y:30},0).wait(1).to({y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({x:-2.8,y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({y:30.9},0).wait(1).to({x:-2.9,y:31.1},0).wait(1).to({y:31.3},0).wait(1).to({x:-3,y:31.5},0).wait(1).to({y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({x:-3.1,y:32.1},0).wait(1).to({y:32.2},0).wait(1).to({y:32.4},0).wait(1).to({x:-3.2,y:32.6},0).wait(1).to({y:32.8},0).wait(1).to({y:33},0).wait(1).to({x:-3.3,y:33.2},0).wait(1).to({y:33.3},0).wait(1).to({x:-3.4,y:33.5},0).wait(1).to({y:33.7},0).wait(1).to({y:33.9},0).wait(1).to({x:-3.5,y:34.1},0).wait(1).to({y:34.3},0).wait(1).to({y:34.5},0).wait(1).to({x:-3.6,y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({x:-3.7,y:35},0).wait(1).to({y:35.2},0).wait(1).to({y:35.4},0).wait(1).to({x:-3.8,y:35.6},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({x:-3.9,y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({x:-4,y:36.7},0).wait(1).to({y:36.8},0).wait(1).to({x:-4.1,y:37},0).wait(1).to({y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({x:-4.2,y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({y:38},0).wait(1).to({x:-4.3,y:38.1},0).wait(1).to({y:38.3},0).wait(1).to({x:-4.4,y:38.5},0).wait(1).to({y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:-4.5,y:39.1},0).wait(1).to({y:39.2},0).wait(1).to({y:39.4},0).wait(1).to({x:-4.6,y:39.6},0).wait(1).to({y:39.8},0).wait(1).to({y:40},0).wait(1).to({x:-4.7,y:40.2},0).wait(1).to({y:40.4},0).wait(1).to({x:-4.8,y:40.5},0).wait(1).to({y:40.7},0).wait(1).to({y:40.9},0).wait(1).to({x:-4.9,y:41.1},0).wait(1).to({y:41.3},0).wait(1).to({y:41.5},0).wait(1).to({x:-5,y:41.6},0).wait(1).to({y:41.8},0).wait(1).to({x:-5.1,y:42},0).wait(1).to({y:42.2},0).wait(1).to({y:42.4},0).wait(1).to({x:-5.2,y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({y:42.9},0).wait(1).to({x:-5.3,y:43.1},0).wait(1).to({y:43.3},0).wait(1).to({y:43.5},0).wait(1).to({x:-5.4,y:43.7},0).wait(1).to({y:43.9},0).wait(1).to({x:-5.5,y:44},0).wait(1).to({y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({x:-5.6,y:44.6},0).wait(1).to({y:44.8},0).wait(1).to({y:45},0).wait(1).to({x:-5.7,y:45.1},0).wait(1).to({y:45.3},0).wait(1).to({x:-5.8,y:45.5},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({x:-5.9,y:46.1},0).wait(1).to({y:46.3},0).wait(1).to({y:46.4},0).wait(1).to({x:-6,y:46.6},0).wait(1).to({y:46.8},0).wait(1).to({y:47},0).wait(1).to({x:-6.1,y:47.2},0).wait(1).to({y:47.4},0).wait(1).to({x:-6.2,y:47.5},0).wait(1).to({y:47.7},0).wait(1).to({y:47.9},0).wait(1).to({x:-6.3,y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({y:48.5},0).wait(1).to({x:-6.4,y:48.7},0).wait(1).to({y:48.8},0).wait(1).to({x:-6.5,y:49},0).wait(1).to({y:49.2},0).wait(1).to({y:49.4},0).wait(1).to({x:-6.6,y:49.6},0).wait(1).to({y:49.8},0).wait(1).to({y:49.9},0).wait(1).to({x:-6.7,y:50.1},0).wait(1).to({y:50.3},0).wait(1).to({y:50.5},0).wait(1).to({x:-6.8,y:50.7},0).wait(1).to({y:50.9},0).wait(1).to({x:-6.9,y:51},0).wait(1).to({y:51.2},0).wait(1).to({y:51.4},0).wait(1).to({x:-7,y:51.6},0).wait(1).to({y:51.8},0).wait(1).to({y:52},0).wait(1).to({x:-7.1,y:52.2},0).wait(1).to({y:52.3},0).wait(1).to({x:-7.2,y:52.5},0).wait(1).to({y:52.7},0).wait(1).to({y:52.9},0).wait(1).to({x:-7.3,y:53.1},0).wait(1).to({y:53.3},0).wait(1).to({y:53.4},0).wait(1).to({x:-7.4,y:53.6},0).wait(1).to({y:53.8},0).wait(1).to({x:-7.5,y:54},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,23);


(lib.SymArrowRchgTwn2L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg2();
	this.instance.parent = this;
	this.instance.setTransform(0.5,9.5,1,1,0,0,0,0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.7},0).wait(1).to({y:9.9},0).wait(1).to({y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({y:11.2},0).wait(1).to({x:0.4,y:11.4},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13.1},0).wait(1).to({x:0.3,y:13.3},0).wait(1).to({y:13.5},0).wait(1).to({y:13.6},0).wait(1).to({y:13.8},0).wait(1).to({y:14},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({y:15},0).wait(1).to({x:0.2,y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({y:15.5},0).wait(1).to({y:15.7},0).wait(1).to({y:15.9},0).wait(1).to({y:16.1},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({x:0.1,y:17},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({x:0,y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({y:19.3},0).wait(1).to({y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({x:-0.1,y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:21.2},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:21.9},0).wait(1).to({y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({x:-0.2,y:22.5},0).wait(1).to({y:22.7},0).wait(1).to({y:22.9},0).wait(1).to({y:23.1},0).wait(1).to({y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({y:23.6},0).wait(1).to({y:23.8},0).wait(1).to({y:24},0).wait(1).to({y:24.2},0).wait(1).to({x:-0.3,y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({y:24.8},0).wait(1).to({y:25},0).wait(1).to({y:25.1},0).wait(1).to({y:25.3},0).wait(1).to({y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({x:-0.4,y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({y:26.5},0).wait(1).to({y:26.7},0).wait(1).to({y:26.8},0).wait(1).to({y:27},0).wait(1).to({y:27.2},0).wait(1).to({y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.8},0).wait(1).to({x:-0.5,y:28},0).wait(1).to({y:28.2},0).wait(1).to({y:28.4},0).wait(1).to({y:28.5},0).wait(1).to({y:28.7},0).wait(1).to({y:28.9},0).wait(1).to({y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({y:29.7},0).wait(1).to({x:-0.6,y:29.9},0).wait(1).to({y:30},0).wait(1).to({y:30.2},0).wait(1).to({y:30.4},0).wait(1).to({y:30.6},0).wait(1).to({y:30.8},0).wait(1).to({y:31},0).wait(1).to({y:31.2},0).wait(1).to({y:31.4},0).wait(1).to({y:31.6},0).wait(1).to({x:-0.7,y:31.7},0).wait(1).to({y:31.9},0).wait(1).to({y:32.1},0).wait(1).to({y:32.3},0).wait(1).to({y:32.5},0).wait(1).to({y:32.7},0).wait(1).to({y:32.9},0).wait(1).to({y:33.1},0).wait(1).to({y:33.3},0).wait(1).to({x:-0.8,y:33.4},0).wait(1).to({y:33.6},0).wait(1).to({y:33.8},0).wait(1).to({y:34},0).wait(1).to({y:34.2},0).wait(1).to({y:34.4},0).wait(1).to({y:34.6},0).wait(1).to({y:34.8},0).wait(1).to({y:35},0).wait(1).to({y:35.1},0).wait(1).to({x:-0.9,y:35.3},0).wait(1).to({y:35.5},0).wait(1).to({y:35.7},0).wait(1).to({y:35.9},0).wait(1).to({y:36.1},0).wait(1).to({y:36.3},0).wait(1).to({y:36.5},0).wait(1).to({y:36.6},0).wait(1).to({y:36.8},0).wait(1).to({y:37},0).wait(1).to({x:-1,y:37.2},0).wait(1).to({y:37.4},0).wait(1).to({y:37.6},0).wait(1).to({y:37.8},0).wait(1).to({y:38},0).wait(1).to({y:38.2},0).wait(1).to({y:38.3},0).wait(1).to({y:38.5},0).wait(1).to({y:38.7},0).wait(1).to({y:38.9},0).wait(1).to({x:-1.1,y:39.1},0).wait(1).to({y:39.3},0).wait(1).to({y:39.5},0).wait(1).to({y:39.7},0).wait(1).to({y:39.9},0).wait(1).to({y:40},0).wait(1).to({y:40.2},0).wait(1).to({y:40.4},0).wait(1).to({y:40.6},0).wait(1).to({x:-1.2,y:40.8},0).wait(1).to({y:41},0).wait(1).to({y:41.2},0).wait(1).to({y:41.4},0).wait(1).to({y:41.5},0).wait(1).to({y:41.7},0).wait(1).to({y:41.9},0).wait(1).to({y:42.1},0).wait(1).to({y:42.3},0).wait(1).to({y:42.5},0).wait(1).to({x:-1.3,y:42.7},0).wait(1).to({y:42.9},0).wait(1).to({y:43.1},0).wait(1).to({y:43.2},0).wait(1).to({y:43.4},0).wait(1).to({y:43.6},0).wait(1).to({y:43.8},0).wait(1).to({y:44},0).wait(1).to({y:44.2},0).wait(1).to({y:44.4},0).wait(1).to({x:-1.4,y:44.6},0).wait(1).to({y:44.8},0).wait(1).to({y:44.9},0).wait(1).to({y:45.1},0).wait(1).to({y:45.3},0).wait(1).to({y:45.5},0).wait(1).to({y:45.7},0).wait(1).to({y:45.9},0).wait(1).to({y:46.1},0).wait(1).to({y:46.3},0).wait(1).to({x:-1.5,y:46.5},0).wait(1).to({y:46.6},0).wait(1).to({y:46.8},0).wait(1).to({y:47},0).wait(1).to({y:47.2},0).wait(1).to({y:47.4},0).wait(1).to({y:47.6},0).wait(1).to({y:47.8},0).wait(1).to({y:48},0).wait(1).to({x:-1.6,y:48.1},0).wait(1).to({y:48.3},0).wait(1).to({y:48.5},0).wait(1).to({y:48.7},0).wait(1).to({y:48.9},0).wait(1).to({y:49.1},0).wait(1).to({y:49.3},0).wait(1).to({y:49.5},0).wait(1).to({y:49.7},0).wait(1).to({y:49.8},0).wait(1).to({x:-1.7,y:50},0).wait(1).to({y:50.2},0).wait(1).to({y:50.4},0).wait(1).to({y:50.6},0).wait(1).to({y:50.8},0).wait(1).to({y:51},0).wait(1).to({y:51.2},0).wait(1).to({y:51.4},0).wait(1).to({y:51.5},0).wait(1).to({y:51.7},0).wait(1).to({x:-1.8,y:51.9},0).wait(1).to({y:52.1},0).wait(1).to({y:52.3},0).wait(1).to({y:52.5},0).wait(1).to({y:52.7},0).wait(1).to({y:52.9},0).wait(1).to({y:53},0).wait(1).to({y:53.2},0).wait(1).to({y:53.4},0).wait(1).to({y:53.6},0).wait(1).to({x:-1.9,y:53.8},0).wait(1).to({y:54},0).wait(1).to({y:54.2},0).wait(1).to({y:54.4},0).wait(1).to({y:54.6},0).wait(1).to({y:54.7},0).wait(1).to({y:54.9},0).wait(1).to({y:55.1},0).wait(1).to({y:55.3},0).wait(1).to({x:-2,y:55.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,24);


(lib.SymArrowRchgTwn1L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg1();
	this.instance.parent = this;
	this.instance.setTransform(5,11.2,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:5.1,y:11.4},0).wait(1).to({x:5.2,y:11.6},0).wait(1).to({x:5.3,y:11.8},0).wait(1).to({x:5.4,y:12},0).wait(1).to({x:5.5,y:12.2},0).wait(1).to({x:5.6,y:12.4},0).wait(1).to({x:5.7,y:12.6},0).wait(1).to({x:5.8,y:12.8},0).wait(1).to({y:13},0).wait(1).to({x:5.9,y:13.2},0).wait(1).to({x:6,y:13.4},0).wait(1).to({x:6.1,y:13.6},0).wait(1).to({x:6.2,y:13.8},0).wait(1).to({x:6.3,y:14},0).wait(1).to({x:6.4,y:14.2},0).wait(1).to({x:6.5,y:14.4},0).wait(1).to({x:6.6,y:14.6},0).wait(1).to({x:6.7,y:14.8},0).wait(1).to({x:6.8,y:15},0).wait(1).to({x:6.9,y:15.2},0).wait(1).to({x:7,y:15.4},0).wait(1).to({x:7.1,y:15.6},0).wait(1).to({x:7.2,y:15.8},0).wait(1).to({x:7.3,y:16},0).wait(1).to({x:7.4,y:16.2},0).wait(1).to({x:7.5,y:16.4},0).wait(1).to({y:16.6},0).wait(1).to({x:7.6,y:16.8},0).wait(1).to({x:7.7,y:17},0).wait(1).to({x:7.8,y:17.2},0).wait(1).to({x:7.9,y:17.4},0).wait(1).to({x:8,y:17.6},0).wait(1).to({x:8.1,y:17.8},0).wait(1).to({x:8.2,y:18},0).wait(1).to({x:8.3,y:18.2},0).wait(1).to({x:8.4,y:18.4},0).wait(1).to({x:8.5,y:18.6},0).wait(1).to({x:8.6,y:18.8},0).wait(1).to({x:8.7,y:19},0).wait(1).to({x:8.8,y:19.2},0).wait(1).to({x:8.9,y:19.4},0).wait(1).to({x:9,y:19.6},0).wait(1).to({x:9.1,y:19.8},0).wait(1).to({y:20},0).wait(1).to({x:9.2,y:20.2},0).wait(1).to({x:9.3,y:20.4},0).wait(1).to({x:9.4,y:20.6},0).wait(1).to({x:9.5,y:20.8},0).wait(1).to({x:9.6,y:21},0).wait(1).to({x:9.7,y:21.2},0).wait(1).to({x:9.8,y:21.4},0).wait(1).to({x:9.9,y:21.6},0).wait(1).to({x:10,y:21.8},0).wait(1).to({x:10.1,y:22},0).wait(1).to({x:10.2,y:22.2},0).wait(1).to({x:10.3,y:22.4},0).wait(1).to({x:10.4,y:22.6},0).wait(1).to({x:10.5,y:22.8},0).wait(1).to({x:10.6,y:23},0).wait(1).to({x:10.7,y:23.2},0).wait(1).to({x:10.8,y:23.5},0).wait(1).to({y:23.7},0).wait(1).to({x:10.9,y:23.9},0).wait(1).to({x:11,y:24.1},0).wait(1).to({x:11.1,y:24.3},0).wait(1).to({x:11.2,y:24.5},0).wait(1).to({x:11.3,y:24.7},0).wait(1).to({x:11.4,y:24.9},0).wait(1).to({x:11.5,y:25.1},0).wait(1).to({x:11.6,y:25.3},0).wait(1).to({x:11.7,y:25.5},0).wait(1).to({x:11.8,y:25.7},0).wait(1).to({x:11.9,y:25.9},0).wait(1).to({x:12,y:26.1},0).wait(1).to({x:12.1,y:26.3},0).wait(1).to({x:12.2,y:26.5},0).wait(1).to({x:12.3,y:26.7},0).wait(1).to({x:12.4,y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({x:12.5,y:27.3},0).wait(1).to({x:12.6,y:27.5},0).wait(1).to({x:12.7,y:27.7},0).wait(1).to({x:12.8,y:27.9},0).wait(1).to({x:12.9,y:28.1},0).wait(1).to({x:13,y:28.3},0).wait(1).to({x:13.1,y:28.5},0).wait(1).to({x:13.2,y:28.7},0).wait(1).to({x:13.3,y:28.9},0).wait(1).to({x:13.4,y:29.1},0).wait(1).to({x:13.5,y:29.3},0).wait(1).to({x:13.6,y:29.5},0).wait(1).to({x:13.7,y:29.7},0).wait(1).to({x:13.8,y:29.9},0).wait(1).to({x:13.9,y:30.1},0).wait(1).to({x:14,y:30.3},0).wait(1).to({y:30.5},0).wait(1).to({x:14.1,y:30.7},0).wait(1).to({x:14.2,y:30.9},0).wait(1).to({x:14.3,y:31.1},0).wait(1).to({x:14.4,y:31.3},0).wait(1).to({x:14.5,y:31.5},0).wait(1).to({x:14.6,y:31.7},0).wait(1).to({x:14.7,y:31.9},0).wait(1).to({x:14.8,y:32.1},0).wait(1).to({x:14.9,y:32.3},0).wait(1).to({x:15,y:32.5},0).wait(1).to({x:15.1,y:32.7},0).wait(1).to({x:15.2,y:32.9},0).wait(1).to({x:15.3,y:33.1},0).wait(1).to({x:15.4,y:33.3},0).wait(1).to({x:15.5,y:33.5},0).wait(1).to({x:15.6,y:33.7},0).wait(1).to({x:15.7,y:33.9},0).wait(1).to({y:34.1},0).wait(1).to({x:15.8,y:34.3},0).wait(1).to({x:15.9,y:34.5},0).wait(1).to({x:16,y:34.7},0).wait(1).to({x:16.1,y:34.9},0).wait(1).to({x:16.2,y:35.1},0).wait(1).to({x:16.3,y:35.3},0).wait(1).to({x:16.4,y:35.5},0).wait(1).to({x:16.5,y:35.7},0).wait(1).to({x:16.6,y:35.9},0).wait(1).to({x:16.7,y:36.1},0).wait(1).to({x:16.8,y:36.3},0).wait(1).to({x:16.9,y:36.5},0).wait(1).to({x:17,y:36.7},0).wait(1).to({x:17.1,y:36.9},0).wait(1).to({x:17.2,y:37.1},0).wait(1).to({x:17.3,y:37.3},0).wait(1).to({y:37.5},0).wait(1).to({x:17.4,y:37.7},0).wait(1).to({x:17.5,y:37.9},0).wait(1).to({x:17.6,y:38.1},0).wait(1).to({x:17.7,y:38.3},0).wait(1).to({x:17.8,y:38.5},0).wait(1).to({x:17.9,y:38.7},0).wait(1).to({x:18,y:38.9},0).wait(1).to({x:18.1,y:39.1},0).wait(1).to({x:18.2,y:39.3},0).wait(1).to({x:18.3,y:39.5},0).wait(1).to({x:18.4,y:39.7},0).wait(1).to({x:18.5,y:39.9},0).wait(1).to({x:18.6,y:40.1},0).wait(1).to({x:18.7,y:40.3},0).wait(1).to({x:18.8,y:40.5},0).wait(1).to({x:18.9,y:40.7},0).wait(1).to({x:19,y:40.9},0).wait(1).to({y:41.1},0).wait(1).to({x:19.1,y:41.3},0).wait(1).to({x:19.2,y:41.5},0).wait(1).to({x:19.3,y:41.7},0).wait(1).to({x:19.4,y:41.9},0).wait(1).to({x:19.5,y:42.1},0).wait(1).to({x:19.6,y:42.3},0).wait(1).to({x:19.7,y:42.5},0).wait(1).to({x:19.8,y:42.7},0).wait(1).to({x:19.9,y:42.9},0).wait(1).to({x:20,y:43.1},0).wait(1).to({x:20.1,y:43.3},0).wait(1).to({x:20.2,y:43.5},0).wait(1).to({x:20.3,y:43.7},0).wait(1).to({x:20.4,y:43.9},0).wait(1).to({x:20.5,y:44.1},0).wait(1).to({x:20.6,y:44.3},0).wait(1).to({y:44.5},0).wait(1).to({x:20.7,y:44.7},0).wait(1).to({x:20.8,y:44.9},0).wait(1).to({x:20.9,y:45.1},0).wait(1).to({x:21,y:45.3},0).wait(1).to({x:21.1,y:45.5},0).wait(1).to({x:21.2,y:45.7},0).wait(1).to({x:21.3,y:45.9},0).wait(1).to({x:21.4,y:46.1},0).wait(1).to({x:21.5,y:46.3},0).wait(1).to({x:21.6,y:46.5},0).wait(1).to({x:21.7,y:46.7},0).wait(1).to({x:21.8,y:46.9},0).wait(1).to({x:21.9,y:47.1},0).wait(1).to({x:22,y:47.3},0).wait(1).to({x:22.1,y:47.5},0).wait(1).to({x:22.2,y:47.7},0).wait(1).to({x:22.3,y:48},0).wait(1).to({y:48.2},0).wait(1).to({x:22.4,y:48.4},0).wait(1).to({x:22.5,y:48.6},0).wait(1).to({x:22.6,y:48.8},0).wait(1).to({x:22.7,y:49},0).wait(1).to({x:22.8,y:49.2},0).wait(1).to({x:22.9,y:49.4},0).wait(1).to({x:23,y:49.6},0).wait(1).to({x:23.1,y:49.8},0).wait(1).to({x:23.2,y:50},0).wait(1).to({x:23.3,y:50.2},0).wait(1).to({x:23.4,y:50.4},0).wait(1).to({x:23.5,y:50.6},0).wait(1).to({x:23.6,y:50.8},0).wait(1).to({x:23.7,y:51},0).wait(1).to({x:23.8,y:51.2},0).wait(1).to({x:23.9,y:51.4},0).wait(1).to({y:51.6},0).wait(1).to({x:24,y:51.8},0).wait(1).to({x:24.1,y:52},0).wait(1).to({x:24.2,y:52.2},0).wait(1).to({x:24.3,y:52.4},0).wait(1).to({x:24.4,y:52.6},0).wait(1).to({x:24.5,y:52.8},0).wait(1).to({x:24.6,y:53},0).wait(1).to({x:24.7,y:53.2},0).wait(1).to({x:24.8,y:53.4},0).wait(1).to({x:24.9,y:53.6},0).wait(1).to({x:25,y:53.8},0).wait(1).to({x:25.1,y:54},0).wait(1).to({x:25.2,y:54.2},0).wait(1).to({x:25.3,y:54.4},0).wait(1).to({x:25.4,y:54.6},0).wait(1).to({x:25.5,y:54.8},0).wait(1).to({y:55},0).wait(1).to({x:25.6,y:55.2},0).wait(1).to({x:25.7,y:55.4},0).wait(1).to({x:25.8,y:55.6},0).wait(1).to({x:25.9,y:55.8},0).wait(1).to({x:26,y:56},0).wait(1).to({x:26.1,y:56.2},0).wait(1).to({x:26.2,y:56.4},0).wait(1).to({x:26.3,y:56.6},0).wait(1).to({x:26.4,y:56.8},0).wait(1).to({x:26.5,y:57},0).wait(1).to({x:26.6,y:57.2},0).wait(1).to({x:26.7,y:57.4},0).wait(1).to({x:26.8,y:57.6},0).wait(1).to({x:26.9,y:57.8},0).wait(1).to({x:27,y:58},0).wait(1).to({x:27.1,y:58.2},0).wait(1).to({x:27.2,y:58.4},0).wait(1).to({y:58.6},0).wait(1).to({x:27.3,y:58.8},0).wait(1).to({x:27.4,y:59},0).wait(1).to({x:27.5,y:59.2},0).wait(1).to({x:27.6,y:59.4},0).wait(1).to({x:27.7,y:59.6},0).wait(1).to({x:27.8,y:59.8},0).wait(1).to({x:27.9,y:60},0).wait(1).to({x:28,y:60.2},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,15,27.3);


(lib.SymArrowRchgTwn12H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg12();
	this.instance.parent = this;
	this.instance.setTransform(1.5,4,1,1,0,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.6,y:4.1},0).wait(1).to({y:4.3},0).wait(1).to({x:1.7,y:4.4},0).wait(1).to({y:4.5},0).wait(1).to({x:1.8,y:4.7},0).wait(1).to({y:4.8},0).wait(1).to({x:1.9,y:4.9},0).wait(1).to({x:2,y:5.1},0).wait(1).to({y:5.2},0).wait(1).to({x:2.1,y:5.3},0).wait(1).to({y:5.5},0).wait(1).to({x:2.2,y:5.6},0).wait(1).to({x:2.3,y:5.8},0).wait(1).to({y:5.9},0).wait(1).to({x:2.4,y:6},0).wait(1).to({y:6.2},0).wait(1).to({x:2.5,y:6.3},0).wait(1).to({y:6.4},0).wait(1).to({x:2.6,y:6.6},0).wait(1).to({x:2.7,y:6.7},0).wait(1).to({y:6.8},0).wait(1).to({x:2.8,y:7},0).wait(1).to({y:7.1},0).wait(1).to({x:2.9,y:7.2},0).wait(1).to({y:7.4},0).wait(1).to({x:3,y:7.5},0).wait(1).to({x:3.1,y:7.6},0).wait(1).to({y:7.8},0).wait(1).to({x:3.2,y:7.9},0).wait(1).to({y:8},0).wait(1).to({x:3.3,y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({x:3.4,y:8.4},0).wait(1).to({x:3.5,y:8.6},0).wait(1).to({y:8.7},0).wait(1).to({x:3.6,y:8.8},0).wait(1).to({y:9},0).wait(1).to({x:3.7,y:9.1},0).wait(1).to({x:3.8,y:9.3},0).wait(1).to({y:9.4},0).wait(1).to({x:3.9,y:9.5},0).wait(1).to({y:9.7},0).wait(1).to({x:4,y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({x:4.1,y:10.1},0).wait(1).to({x:4.2,y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({x:4.3,y:10.5},0).wait(1).to({y:10.6},0).wait(1).to({x:4.4,y:10.7},0).wait(1).to({y:10.9},0).wait(1).to({x:4.5,y:11},0).wait(1).to({x:4.6,y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({x:4.7,y:11.4},0).wait(1).to({y:11.5},0).wait(1).to({x:4.8,y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({x:4.9,y:11.9},0).wait(1).to({x:5,y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({x:5.1,y:12.3},0).wait(1).to({y:12.5},0).wait(1).to({x:5.2,y:12.6},0).wait(1).to({x:5.3,y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({x:5.4,y:13},0).wait(1).to({y:13.2},0).wait(1).to({x:5.5,y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({x:5.6,y:13.6},0).wait(1).to({x:5.7,y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({x:5.8,y:14},0).wait(1).to({y:14.1},0).wait(1).to({x:5.9,y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({x:6,y:14.5},0).wait(1).to({x:6.1,y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({x:6.2,y:14.9},0).wait(1).to({y:15},0).wait(1).to({x:6.3,y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({x:6.4,y:15.4},0).wait(1).to({x:6.5,y:15.6},0).wait(1).to({y:15.7},0).wait(1).to({x:6.6,y:15.8},0).wait(1).to({y:16},0).wait(1).to({x:6.7,y:16.1},0).wait(1).to({x:6.8,y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({x:6.9,y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({x:7,y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({x:7.1,y:17.1},0).wait(1).to({x:7.2,y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({x:7.3,y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({x:7.4,y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({x:7.5,y:18},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,13);


(lib.SymArrowRchgTwn11H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg11();
	this.instance.parent = this;
	this.instance.setTransform(0.5,5.5,1,1,0,0,0,0.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:5.7},0).wait(1).to({y:6},0).wait(1).to({x:0.6,y:6.2},0).wait(1).to({y:6.5},0).wait(1).to({y:6.7},0).wait(1).to({y:6.9},0).wait(1).to({y:7.2},0).wait(1).to({x:0.7,y:7.4},0).wait(1).to({y:7.7},0).wait(1).to({y:7.9},0).wait(1).to({y:8.1},0).wait(1).to({y:8.4},0).wait(1).to({x:0.8,y:8.6},0).wait(1).to({y:8.9},0).wait(1).to({y:9.1},0).wait(1).to({y:9.3},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({x:0.9,y:10.1},0).wait(1).to({y:10.3},0).wait(1).to({y:10.5},0).wait(1).to({y:10.8},0).wait(1).to({y:11},0).wait(1).to({x:1,y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.8},0).wait(1).to({y:12},0).wait(1).to({y:12.2},0).wait(1).to({x:1.1,y:12.5},0).wait(1).to({y:12.7},0).wait(1).to({y:13},0).wait(1).to({y:13.2},0).wait(1).to({y:13.4},0).wait(1).to({x:1.2,y:13.7},0).wait(1).to({y:13.9},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.6},0).wait(1).to({x:1.3,y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({y:15.4},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:16.1},0).wait(1).to({x:1.4,y:16.3},0).wait(1).to({y:16.6},0).wait(1).to({y:16.8},0).wait(1).to({y:17},0).wait(1).to({y:17.3},0).wait(1).to({x:1.5,y:17.5},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.5},0).wait(1).to({x:1.6,y:18.7},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({y:19.7},0).wait(1).to({x:1.7,y:19.9},0).wait(1).to({y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.9},0).wait(1).to({x:1.8,y:21.1},0).wait(1).to({y:21.4},0).wait(1).to({y:21.6},0).wait(1).to({y:21.8},0).wait(1).to({y:22.1},0).wait(1).to({y:22.3},0).wait(1).to({x:1.9,y:22.6},0).wait(1).to({y:22.8},0).wait(1).to({y:23},0).wait(1).to({y:23.3},0).wait(1).to({y:23.5},0).wait(1).to({x:2,y:23.8},0).wait(1).to({y:24},0).wait(1).to({y:24.3},0).wait(1).to({y:24.5},0).wait(1).to({y:24.7},0).wait(1).to({x:2.1,y:25},0).wait(1).to({y:25.2},0).wait(1).to({y:25.5},0).wait(1).to({y:25.7},0).wait(1).to({y:25.9},0).wait(1).to({x:2.2,y:26.2},0).wait(1).to({y:26.4},0).wait(1).to({y:26.7},0).wait(1).to({y:26.9},0).wait(1).to({y:27.1},0).wait(1).to({x:2.3,y:27.4},0).wait(1).to({y:27.6},0).wait(1).to({y:27.9},0).wait(1).to({y:28.1},0).wait(1).to({y:28.3},0).wait(1).to({y:28.6},0).wait(1).to({x:2.4,y:28.8},0).wait(1).to({y:29.1},0).wait(1).to({y:29.3},0).wait(1).to({y:29.5},0).wait(1).to({y:29.8},0).wait(1).to({x:2.5,y:30},0).wait(1).to({y:30.3},0).wait(1).to({y:30.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,16);


(lib.SymArrowRchgTwn10H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg10();
	this.instance.parent = this;
	this.instance.setTransform(2,7,1,1,0,0,0,2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:7.3},0).wait(1).to({x:2.2,y:7.5},0).wait(1).to({y:7.8},0).wait(1).to({x:2.3,y:8.1},0).wait(1).to({x:2.4,y:8.3},0).wait(1).to({x:2.5,y:8.6},0).wait(1).to({y:8.9},0).wait(1).to({x:2.6,y:9.2},0).wait(1).to({x:2.7,y:9.4},0).wait(1).to({x:2.8,y:9.7},0).wait(1).to({y:10},0).wait(1).to({x:2.9,y:10.2},0).wait(1).to({x:3,y:10.5},0).wait(1).to({x:3.1,y:10.8},0).wait(1).to({x:3.2,y:11},0).wait(1).to({y:11.3},0).wait(1).to({x:3.3,y:11.6},0).wait(1).to({x:3.4,y:11.8},0).wait(1).to({x:3.5,y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({x:3.6,y:12.7},0).wait(1).to({x:3.7,y:12.9},0).wait(1).to({x:3.8,y:13.2},0).wait(1).to({y:13.5},0).wait(1).to({x:3.9,y:13.7},0).wait(1).to({x:4,y:14},0).wait(1).to({x:4.1,y:14.3},0).wait(1).to({x:4.2,y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({x:4.3,y:15.1},0).wait(1).to({x:4.4,y:15.3},0).wait(1).to({x:4.5,y:15.6},0).wait(1).to({y:15.9},0).wait(1).to({x:4.6,y:16.2},0).wait(1).to({x:4.7,y:16.4},0).wait(1).to({x:4.8,y:16.7},0).wait(1).to({y:17},0).wait(1).to({x:4.9,y:17.2},0).wait(1).to({x:5,y:17.5},0).wait(1).to({x:5.1,y:17.8},0).wait(1).to({x:5.2,y:18},0).wait(1).to({y:18.3},0).wait(1).to({x:5.3,y:18.6},0).wait(1).to({x:5.4,y:18.8},0).wait(1).to({x:5.5,y:19.1},0).wait(1).to({y:19.4},0).wait(1).to({x:5.6,y:19.7},0).wait(1).to({x:5.7,y:19.9},0).wait(1).to({x:5.8,y:20.2},0).wait(1).to({y:20.5},0).wait(1).to({x:5.9,y:20.7},0).wait(1).to({x:6,y:21},0).wait(1).to({x:6.1,y:21.3},0).wait(1).to({x:6.2,y:21.5},0).wait(1).to({y:21.8},0).wait(1).to({x:6.3,y:22.1},0).wait(1).to({x:6.4,y:22.3},0).wait(1).to({x:6.5,y:22.6},0).wait(1).to({y:22.9},0).wait(1).to({x:6.6,y:23.2},0).wait(1).to({x:6.7,y:23.4},0).wait(1).to({x:6.8,y:23.7},0).wait(1).to({y:24},0).wait(1).to({x:6.9,y:24.2},0).wait(1).to({x:7,y:24.5},0).wait(1).to({x:7.1,y:24.8},0).wait(1).to({x:7.2,y:25},0).wait(1).to({y:25.3},0).wait(1).to({x:7.3,y:25.6},0).wait(1).to({x:7.4,y:25.8},0).wait(1).to({x:7.5,y:26.1},0).wait(1).to({y:26.4},0).wait(1).to({x:7.6,y:26.7},0).wait(1).to({x:7.7,y:26.9},0).wait(1).to({x:7.8,y:27.2},0).wait(1).to({y:27.5},0).wait(1).to({x:7.9,y:27.7},0).wait(1).to({x:8,y:28},0).wait(1).to({x:8.1,y:28.3},0).wait(1).to({x:8.2,y:28.5},0).wait(1).to({y:28.8},0).wait(1).to({x:8.3,y:29.1},0).wait(1).to({x:8.4,y:29.3},0).wait(1).to({x:8.5,y:29.6},0).wait(1).to({y:29.9},0).wait(1).to({x:8.6,y:30.2},0).wait(1).to({x:8.7,y:30.4},0).wait(1).to({x:8.8,y:30.7},0).wait(1).to({y:31},0).wait(1).to({x:8.9,y:31.2},0).wait(1).to({x:9,y:31.5},0).wait(1).to({x:9.1,y:31.8},0).wait(1).to({x:9.2,y:32},0).wait(1).to({y:32.3},0).wait(1).to({x:9.3,y:32.6},0).wait(1).to({x:9.4,y:32.8},0).wait(1).to({x:9.5,y:33.1},0).wait(1).to({y:33.4},0).wait(1).to({x:9.6,y:33.7},0).wait(1).to({x:9.7,y:33.9},0).wait(1).to({x:9.8,y:34.2},0).wait(1).to({y:34.5},0).wait(1).to({x:9.9,y:34.7},0).wait(1).to({x:10,y:35},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,19);


(lib.SymArrowRchgTwn9H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg9();
	this.instance.parent = this;
	this.instance.setTransform(1,7,1,1,0,0,0,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:7.3},0).wait(1).to({x:1.1,y:7.6},0).wait(1).to({y:7.9},0).wait(1).to({x:1.2,y:8.2},0).wait(1).to({y:8.5},0).wait(1).to({y:8.8},0).wait(1).to({x:1.3,y:9.2},0).wait(1).to({y:9.5},0).wait(1).to({y:9.8},0).wait(1).to({x:1.4,y:10.1},0).wait(1).to({y:10.4},0).wait(1).to({x:1.5,y:10.7},0).wait(1).to({y:11},0).wait(1).to({y:11.3},0).wait(1).to({x:1.6,y:11.6},0).wait(1).to({y:11.9},0).wait(1).to({x:1.7,y:12.2},0).wait(1).to({y:12.5},0).wait(1).to({y:12.8},0).wait(1).to({x:1.8,y:13.2},0).wait(1).to({y:13.5},0).wait(1).to({y:13.8},0).wait(1).to({x:1.9,y:14.1},0).wait(1).to({y:14.4},0).wait(1).to({x:2,y:14.7},0).wait(1).to({y:15},0).wait(1).to({y:15.3},0).wait(1).to({x:2.1,y:15.6},0).wait(1).to({y:15.9},0).wait(1).to({x:2.2,y:16.2},0).wait(1).to({y:16.5},0).wait(1).to({y:16.8},0).wait(1).to({x:2.3,y:17.2},0).wait(1).to({y:17.5},0).wait(1).to({y:17.8},0).wait(1).to({x:2.4,y:18.1},0).wait(1).to({y:18.4},0).wait(1).to({x:2.5,y:18.7},0).wait(1).to({y:19},0).wait(1).to({y:19.3},0).wait(1).to({x:2.6,y:19.6},0).wait(1).to({y:19.9},0).wait(1).to({x:2.7,y:20.2},0).wait(1).to({y:20.5},0).wait(1).to({y:20.8},0).wait(1).to({x:2.8,y:21.2},0).wait(1).to({y:21.5},0).wait(1).to({y:21.8},0).wait(1).to({x:2.9,y:22.1},0).wait(1).to({y:22.4},0).wait(1).to({x:3,y:22.7},0).wait(1).to({y:23},0).wait(1).to({y:23.3},0).wait(1).to({x:3.1,y:23.6},0).wait(1).to({y:23.9},0).wait(1).to({x:3.2,y:24.2},0).wait(1).to({y:24.5},0).wait(1).to({y:24.8},0).wait(1).to({x:3.3,y:25.2},0).wait(1).to({y:25.5},0).wait(1).to({y:25.8},0).wait(1).to({x:3.4,y:26.1},0).wait(1).to({y:26.4},0).wait(1).to({x:3.5,y:26.7},0).wait(1).to({y:27},0).wait(1).to({y:27.3},0).wait(1).to({x:3.6,y:27.6},0).wait(1).to({y:27.9},0).wait(1).to({x:3.7,y:28.2},0).wait(1).to({y:28.5},0).wait(1).to({y:28.8},0).wait(1).to({x:3.8,y:29.2},0).wait(1).to({y:29.5},0).wait(1).to({y:29.8},0).wait(1).to({x:3.9,y:30.1},0).wait(1).to({y:30.4},0).wait(1).to({x:4,y:30.7},0).wait(1).to({y:31},0).wait(1).to({y:31.3},0).wait(1).to({x:4.1,y:31.6},0).wait(1).to({y:31.9},0).wait(1).to({x:4.2,y:32.2},0).wait(1).to({y:32.5},0).wait(1).to({y:32.8},0).wait(1).to({x:4.3,y:33.2},0).wait(1).to({y:33.5},0).wait(1).to({y:33.8},0).wait(1).to({x:4.4,y:34.1},0).wait(1).to({y:34.4},0).wait(1).to({x:4.5,y:34.7},0).wait(1).to({y:35},0).wait(1).to({y:35.3},0).wait(1).to({x:4.6,y:35.6},0).wait(1).to({y:35.9},0).wait(1).to({x:4.7,y:36.2},0).wait(1).to({y:36.5},0).wait(1).to({y:36.8},0).wait(1).to({x:4.8,y:37.2},0).wait(1).to({y:37.5},0).wait(1).to({y:37.8},0).wait(1).to({x:4.9,y:38.1},0).wait(1).to({y:38.4},0).wait(1).to({x:5,y:38.7},0).wait(1).to({y:39},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,19);


(lib.SymArrowRchgTwn8H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.4,y:6.3},0).wait(1).to({x:2.2,y:6.7},0).wait(1).to({x:2.1,y:7},0).wait(1).to({x:1.9,y:7.4},0).wait(1).to({x:1.8,y:7.7},0).wait(1).to({x:1.6,y:8},0).wait(1).to({x:1.5,y:8.4},0).wait(1).to({x:1.3,y:8.7},0).wait(1).to({x:1.2,y:9.1},0).wait(1).to({x:1,y:9.4},0).wait(1).to({x:0.9,y:9.7},0).wait(1).to({x:0.7,y:10.1},0).wait(1).to({x:0.6,y:10.4},0).wait(1).to({x:0.4,y:10.7},0).wait(1).to({x:0.3,y:11.1},0).wait(1).to({x:0.1,y:11.4},0).wait(1).to({x:0,y:11.8},0).wait(1).to({x:-0.2,y:12.1},0).wait(1).to({x:-0.3,y:12.4},0).wait(1).to({x:-0.5,y:12.8},0).wait(1).to({x:-0.7,y:13.1},0).wait(1).to({x:-0.8,y:13.5},0).wait(1).to({x:-1,y:13.8},0).wait(1).to({x:-1.1,y:14.1},0).wait(1).to({x:-1.3,y:14.5},0).wait(1).to({x:-1.4,y:14.8},0).wait(1).to({x:-1.6,y:15.2},0).wait(1).to({x:-1.7,y:15.5},0).wait(1).to({x:-1.9,y:15.8},0).wait(1).to({x:-2,y:16.2},0).wait(1).to({x:-2.2,y:16.5},0).wait(1).to({x:-2.3,y:16.8},0).wait(1).to({x:-2.5,y:17.2},0).wait(1).to({x:-2.6,y:17.5},0).wait(1).to({x:-2.8,y:17.9},0).wait(1).to({x:-2.9,y:18.2},0).wait(1).to({x:-3.1,y:18.5},0).wait(1).to({x:-3.2,y:18.9},0).wait(1).to({x:-3.4,y:19.2},0).wait(1).to({x:-3.6,y:19.6},0).wait(1).to({x:-3.7,y:19.9},0).wait(1).to({x:-3.9,y:20.2},0).wait(1).to({x:-4,y:20.6},0).wait(1).to({x:-4.2,y:20.9},0).wait(1).to({x:-4.3,y:21.3},0).wait(1).to({x:-4.5,y:21.6},0).wait(1).to({x:-4.6,y:21.9},0).wait(1).to({x:-4.8,y:22.3},0).wait(1).to({x:-4.9,y:22.6},0).wait(1).to({x:-5.1,y:22.9},0).wait(1).to({x:-5.2,y:23.3},0).wait(1).to({x:-5.4,y:23.6},0).wait(1).to({x:-5.5,y:24},0).wait(1).to({x:-5.7,y:24.3},0).wait(1).to({x:-5.8,y:24.6},0).wait(1).to({x:-6,y:25},0).wait(1).to({x:-6.1,y:25.3},0).wait(1).to({x:-6.3,y:25.7},0).wait(1).to({x:-6.5,y:26},0).wait(1).to({regX:2,regY:5.9,scaleX:1,scaleY:1,rotation:-10.8,x:-5.9,y:25.5},0).wait(1).to({x:-6,y:25.9},0).wait(1).to({x:-6.1,y:26.3},0).wait(1).to({x:-6.2,y:26.6},0).wait(1).to({x:-6.3,y:27},0).wait(1).to({x:-6.4,y:27.4},0).wait(1).to({x:-6.5,y:27.8},0).wait(1).to({x:-6.6,y:28.1},0).wait(1).to({y:28.5},0).wait(1).to({x:-6.7,y:28.9},0).wait(1).to({x:-6.8,y:29.3},0).wait(1).to({x:-6.9,y:29.6},0).wait(1).to({x:-7,y:30},0).wait(1).to({x:-7.1,y:30.4},0).wait(1).to({x:-7.2,y:30.8},0).wait(1).to({x:-7.3,y:31.1},0).wait(1).to({x:-7.4,y:31.5},0).wait(1).to({x:-7.5,y:31.9},0).wait(1).to({x:-7.6,y:32.3},0).wait(1).to({x:-7.7,y:32.6},0).wait(1).to({x:-7.8,y:33},0).wait(1).to({x:-7.9,y:33.4},0).wait(1).to({x:-8,y:33.8},0).wait(1).to({y:34.1},0).wait(1).to({x:-8.1,y:34.5},0).wait(1).to({x:-8.2,y:34.9},0).wait(1).to({x:-8.3,y:35.3},0).wait(1).to({x:-8.4,y:35.6},0).wait(1).to({x:-8.5,y:36},0).wait(1).to({x:-8.6,y:36.4},0).wait(1).to({x:-8.7,y:36.8},0).wait(1).to({x:-8.8,y:37.1},0).wait(1).to({x:-8.9,y:37.5},0).wait(1).to({x:-9,y:37.9},0).wait(1).to({x:-9.1,y:38.3},0).wait(1).to({x:-9.2,y:38.6},0).wait(1).to({x:-9.3,y:39},0).wait(1).to({y:39.4},0).wait(1).to({x:-9.4,y:39.8},0).wait(1).to({x:-9.5,y:40.1},0).wait(1).to({x:-9.6,y:40.5},0).wait(1).to({x:-9.7,y:40.9},0).wait(1).to({x:-9.8,y:41.3},0).wait(1).to({x:-9.9,y:41.6},0).wait(1).to({x:-10,y:42},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymArrowRchgTwn7H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg7();
	this.instance.parent = this;
	this.instance.setTransform(2.5,8.5,1,1,0,0,0,2.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.6,y:8.9},0).wait(1).to({x:2.7,y:9.3},0).wait(1).to({x:2.8,y:9.6},0).wait(1).to({x:3,y:10},0).wait(1).to({x:3.1,y:10.4},0).wait(1).to({x:3.2,y:10.8},0).wait(1).to({x:3.3,y:11.1},0).wait(1).to({x:3.4,y:11.5},0).wait(1).to({x:3.5,y:11.9},0).wait(1).to({x:3.7,y:12.3},0).wait(1).to({x:3.8,y:12.6},0).wait(1).to({x:3.9,y:13},0).wait(1).to({x:4,y:13.4},0).wait(1).to({x:4.1,y:13.8},0).wait(1).to({x:4.2,y:14.1},0).wait(1).to({x:4.3,y:14.5},0).wait(1).to({x:4.5,y:14.9},0).wait(1).to({x:4.6,y:15.3},0).wait(1).to({x:4.7,y:15.6},0).wait(1).to({x:4.8,y:16},0).wait(1).to({x:4.9,y:16.4},0).wait(1).to({x:5,y:16.8},0).wait(1).to({x:5.2,y:17.1},0).wait(1).to({x:5.3,y:17.5},0).wait(1).to({x:5.4,y:17.9},0).wait(1).to({x:5.5,y:18.3},0).wait(1).to({x:5.6,y:18.6},0).wait(1).to({x:5.7,y:19},0).wait(1).to({x:5.8,y:19.4},0).wait(1).to({x:6,y:19.8},0).wait(1).to({x:6.1,y:20.1},0).wait(1).to({x:6.2,y:20.5},0).wait(1).to({x:6.3,y:20.9},0).wait(1).to({x:6.4,y:21.3},0).wait(1).to({x:6.5,y:21.6},0).wait(1).to({x:6.7,y:22},0).wait(1).to({x:6.8,y:22.4},0).wait(1).to({x:6.9,y:22.8},0).wait(1).to({x:7,y:23.1},0).wait(1).to({x:7.1,y:23.5},0).wait(1).to({x:7.2,y:23.9},0).wait(1).to({x:7.3,y:24.3},0).wait(1).to({x:7.5,y:24.6},0).wait(1).to({x:7.6,y:25},0).wait(1).to({x:7.7,y:25.4},0).wait(1).to({x:7.8,y:25.8},0).wait(1).to({x:7.9,y:26.1},0).wait(1).to({x:8,y:26.5},0).wait(1).to({x:8.2,y:26.9},0).wait(1).to({x:8.3,y:27.3},0).wait(1).to({x:8.4,y:27.6},0).wait(1).to({x:8.5,y:28},0).wait(1).to({x:8.6,y:28.4},0).wait(1).to({x:8.7,y:28.8},0).wait(1).to({x:8.8,y:29.1},0).wait(1).to({x:9,y:29.5},0).wait(1).to({x:9.1,y:29.9},0).wait(1).to({x:9.2,y:30.3},0).wait(1).to({x:9.3,y:30.6},0).wait(1).to({x:9.4,y:31},0).wait(1).to({x:9.5,y:31.4},0).wait(1).to({x:9.7,y:31.8},0).wait(1).to({x:9.8,y:32.1},0).wait(1).to({x:9.9,y:32.5},0).wait(1).to({x:10,y:32.9},0).wait(1).to({x:10.1,y:33.3},0).wait(1).to({x:10.2,y:33.6},0).wait(1).to({x:10.3,y:34},0).wait(1).to({x:10.5,y:34.4},0).wait(1).to({x:10.6,y:34.8},0).wait(1).to({x:10.7,y:35.1},0).wait(1).to({x:10.8,y:35.5},0).wait(1).to({x:10.9,y:35.9},0).wait(1).to({x:11,y:36.3},0).wait(1).to({x:11.2,y:36.6},0).wait(1).to({x:11.3,y:37},0).wait(1).to({x:11.4,y:37.4},0).wait(1).to({x:11.5,y:37.8},0).wait(1).to({x:11.6,y:38.1},0).wait(1).to({x:11.7,y:38.5},0).wait(1).to({x:11.8,y:38.9},0).wait(1).to({x:12,y:39.3},0).wait(1).to({x:12.1,y:39.6},0).wait(1).to({x:12.2,y:40},0).wait(1).to({x:12.3,y:40.4},0).wait(1).to({x:12.4,y:40.8},0).wait(1).to({x:12.5,y:41.1},0).wait(1).to({x:12.7,y:41.5},0).wait(1).to({x:12.8,y:41.9},0).wait(1).to({x:12.9,y:42.3},0).wait(1).to({x:13,y:42.6},0).wait(1).to({x:13.1,y:43},0).wait(1).to({x:13.2,y:43.4},0).wait(1).to({x:13.3,y:43.8},0).wait(1).to({x:13.5,y:44.1},0).wait(1).to({x:13.6,y:44.5},0).wait(1).to({x:13.7,y:44.9},0).wait(1).to({x:13.8,y:45.3},0).wait(1).to({x:13.9,y:45.6},0).wait(1).to({x:14,y:46},0).wait(1).to({x:14.2,y:46.4},0).wait(1).to({x:14.3,y:46.8},0).wait(1).to({x:14.4,y:47.1},0).wait(1).to({x:14.5,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,22);


(lib.SymArrowRchgTwn6H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg6();
	this.instance.parent = this;
	this.instance.setTransform(2,8.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:8.9},0).wait(1).to({x:2.2,y:9.3},0).wait(1).to({x:2.3,y:9.6},0).wait(1).to({y:10},0).wait(1).to({x:2.4,y:10.4},0).wait(1).to({x:2.5,y:10.8},0).wait(1).to({x:2.6,y:11.1},0).wait(1).to({x:2.7,y:11.5},0).wait(1).to({x:2.8,y:11.9},0).wait(1).to({x:2.9,y:12.3},0).wait(1).to({x:3,y:12.6},0).wait(1).to({y:13},0).wait(1).to({x:3.1,y:13.4},0).wait(1).to({x:3.2,y:13.8},0).wait(1).to({x:3.3,y:14.1},0).wait(1).to({x:3.4,y:14.5},0).wait(1).to({x:3.5,y:14.9},0).wait(1).to({x:3.6,y:15.3},0).wait(1).to({y:15.6},0).wait(1).to({x:3.7,y:16},0).wait(1).to({x:3.8,y:16.4},0).wait(1).to({x:3.9,y:16.8},0).wait(1).to({x:4,y:17.1},0).wait(1).to({x:4.1,y:17.5},0).wait(1).to({x:4.2,y:17.9},0).wait(1).to({x:4.3,y:18.3},0).wait(1).to({y:18.6},0).wait(1).to({x:4.4,y:19},0).wait(1).to({x:4.5,y:19.4},0).wait(1).to({x:4.6,y:19.8},0).wait(1).to({x:4.7,y:20.1},0).wait(1).to({x:4.8,y:20.5},0).wait(1).to({x:4.9,y:20.9},0).wait(1).to({y:21.3},0).wait(1).to({x:5,y:21.6},0).wait(1).to({x:5.1,y:22},0).wait(1).to({x:5.2,y:22.4},0).wait(1).to({x:5.3,y:22.8},0).wait(1).to({x:5.4,y:23.1},0).wait(1).to({x:5.5,y:23.5},0).wait(1).to({y:23.9},0).wait(1).to({x:5.6,y:24.3},0).wait(1).to({x:5.7,y:24.6},0).wait(1).to({x:5.8,y:25},0).wait(1).to({x:5.9,y:25.4},0).wait(1).to({x:6,y:25.8},0).wait(1).to({x:6.1,y:26.1},0).wait(1).to({x:6.2,y:26.5},0).wait(1).to({y:26.9},0).wait(1).to({x:6.3,y:27.3},0).wait(1).to({x:6.4,y:27.6},0).wait(1).to({x:6.5,y:28},0).wait(1).to({x:6.6,y:28.4},0).wait(1).to({x:6.7,y:28.8},0).wait(1).to({x:6.8,y:29.1},0).wait(1).to({y:29.5},0).wait(1).to({x:6.9,y:29.9},0).wait(1).to({x:7,y:30.3},0).wait(1).to({x:7.1,y:30.6},0).wait(1).to({x:7.2,y:31},0).wait(1).to({x:7.3,y:31.4},0).wait(1).to({x:7.4,y:31.8},0).wait(1).to({x:7.5,y:32.1},0).wait(1).to({y:32.5},0).wait(1).to({x:7.6,y:32.9},0).wait(1).to({x:7.7,y:33.3},0).wait(1).to({x:7.8,y:33.6},0).wait(1).to({x:7.9,y:34},0).wait(1).to({x:8,y:34.4},0).wait(1).to({x:8.1,y:34.8},0).wait(1).to({y:35.1},0).wait(1).to({x:8.2,y:35.5},0).wait(1).to({x:8.3,y:35.9},0).wait(1).to({x:8.4,y:36.3},0).wait(1).to({x:8.5,y:36.6},0).wait(1).to({x:8.6,y:37},0).wait(1).to({x:8.7,y:37.4},0).wait(1).to({x:8.8,y:37.8},0).wait(1).to({y:38.1},0).wait(1).to({x:8.9,y:38.5},0).wait(1).to({x:9,y:38.9},0).wait(1).to({x:9.1,y:39.3},0).wait(1).to({x:9.2,y:39.6},0).wait(1).to({x:9.3,y:40},0).wait(1).to({x:9.4,y:40.4},0).wait(1).to({y:40.8},0).wait(1).to({x:9.5,y:41.1},0).wait(1).to({x:9.6,y:41.5},0).wait(1).to({x:9.7,y:41.9},0).wait(1).to({x:9.8,y:42.3},0).wait(1).to({x:9.9,y:42.6},0).wait(1).to({x:10,y:43},0).wait(1).to({y:43.4},0).wait(1).to({x:10.1,y:43.8},0).wait(1).to({x:10.2,y:44.1},0).wait(1).to({x:10.3,y:44.5},0).wait(1).to({x:10.4,y:44.9},0).wait(1).to({x:10.5,y:45.3},0).wait(1).to({x:10.6,y:45.6},0).wait(1).to({x:10.7,y:46},0).wait(1).to({y:46.4},0).wait(1).to({x:10.8,y:46.8},0).wait(1).to({x:10.9,y:47.1},0).wait(1).to({x:11,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,22);


(lib.SymArrowRchgTwn5H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg5();
	this.instance.parent = this;
	this.instance.setTransform(1,9,1,1,0,0,0,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.4},0).wait(1).to({x:1.1,y:9.8},0).wait(1).to({y:10.2},0).wait(1).to({x:1.2,y:10.5},0).wait(1).to({y:10.9},0).wait(1).to({x:1.3,y:11.3},0).wait(1).to({y:11.7},0).wait(1).to({x:1.4,y:12.1},0).wait(1).to({y:12.5},0).wait(1).to({x:1.5,y:12.8},0).wait(1).to({y:13.2},0).wait(1).to({x:1.6,y:13.6},0).wait(1).to({y:14},0).wait(1).to({x:1.7,y:14.4},0).wait(1).to({y:14.8},0).wait(1).to({x:1.8,y:15.2},0).wait(1).to({y:15.5},0).wait(1).to({x:1.9,y:15.9},0).wait(1).to({y:16.3},0).wait(1).to({x:2,y:16.7},0).wait(1).to({y:17.1},0).wait(1).to({x:2.1,y:17.5},0).wait(1).to({y:17.8},0).wait(1).to({x:2.2,y:18.2},0).wait(1).to({y:18.6},0).wait(1).to({x:2.3,y:19},0).wait(1).to({y:19.4},0).wait(1).to({y:19.8},0).wait(1).to({x:2.4,y:20.2},0).wait(1).to({y:20.5},0).wait(1).to({x:2.5,y:20.9},0).wait(1).to({y:21.3},0).wait(1).to({x:2.6,y:21.7},0).wait(1).to({y:22.1},0).wait(1).to({x:2.7,y:22.5},0).wait(1).to({y:22.8},0).wait(1).to({x:2.8,y:23.2},0).wait(1).to({y:23.6},0).wait(1).to({x:2.9,y:24},0).wait(1).to({y:24.4},0).wait(1).to({x:3,y:24.8},0).wait(1).to({y:25.2},0).wait(1).to({x:3.1,y:25.5},0).wait(1).to({y:25.9},0).wait(1).to({x:3.2,y:26.3},0).wait(1).to({y:26.7},0).wait(1).to({x:3.3,y:27.1},0).wait(1).to({y:27.5},0).wait(1).to({x:3.4,y:27.8},0).wait(1).to({y:28.2},0).wait(1).to({x:3.5,y:28.6},0).wait(1).to({y:29},0).wait(1).to({y:29.4},0).wait(1).to({x:3.6,y:29.8},0).wait(1).to({y:30.2},0).wait(1).to({x:3.7,y:30.5},0).wait(1).to({y:30.9},0).wait(1).to({x:3.8,y:31.3},0).wait(1).to({y:31.7},0).wait(1).to({x:3.9,y:32.1},0).wait(1).to({y:32.5},0).wait(1).to({x:4,y:32.8},0).wait(1).to({y:33.2},0).wait(1).to({x:4.1,y:33.6},0).wait(1).to({y:34},0).wait(1).to({x:4.2,y:34.4},0).wait(1).to({y:34.8},0).wait(1).to({x:4.3,y:35.2},0).wait(1).to({y:35.5},0).wait(1).to({x:4.4,y:35.9},0).wait(1).to({y:36.3},0).wait(1).to({x:4.5,y:36.7},0).wait(1).to({y:37.1},0).wait(1).to({x:4.6,y:37.5},0).wait(1).to({y:37.8},0).wait(1).to({x:4.7,y:38.2},0).wait(1).to({y:38.6},0).wait(1).to({x:4.8,y:39},0).wait(1).to({y:39.4},0).wait(1).to({y:39.8},0).wait(1).to({x:4.9,y:40.2},0).wait(1).to({y:40.5},0).wait(1).to({x:5,y:40.9},0).wait(1).to({y:41.3},0).wait(1).to({x:5.1,y:41.7},0).wait(1).to({y:42.1},0).wait(1).to({x:5.2,y:42.5},0).wait(1).to({y:42.8},0).wait(1).to({x:5.3,y:43.2},0).wait(1).to({y:43.6},0).wait(1).to({x:5.4,y:44},0).wait(1).to({y:44.4},0).wait(1).to({x:5.5,y:44.8},0).wait(1).to({y:45.2},0).wait(1).to({x:5.6,y:45.5},0).wait(1).to({y:45.9},0).wait(1).to({x:5.7,y:46.3},0).wait(1).to({y:46.7},0).wait(1).to({x:5.8,y:47.1},0).wait(1).to({y:47.5},0).wait(1).to({x:5.9,y:47.8},0).wait(1).to({y:48.2},0).wait(1).to({x:6,y:48.6},0).wait(1).to({y:49},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,23);


(lib.SymArrowRchgTwn4H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg4();
	this.instance.parent = this;
	this.instance.setTransform(1,8.5,1,1,0,0,0,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:8.9},0).wait(1).to({y:9.3},0).wait(1).to({x:0.9,y:9.7},0).wait(1).to({y:10.1},0).wait(1).to({x:0.8,y:10.5},0).wait(1).to({y:10.9},0).wait(1).to({x:0.7,y:11.3},0).wait(1).to({y:11.7},0).wait(1).to({x:0.6,y:12.1},0).wait(1).to({y:12.5},0).wait(1).to({x:0.5,y:12.9},0).wait(1).to({y:13.3},0).wait(1).to({x:0.4,y:13.8},0).wait(1).to({y:14.2},0).wait(1).to({x:0.3,y:14.6},0).wait(1).to({y:15},0).wait(1).to({x:0.2,y:15.4},0).wait(1).to({y:15.8},0).wait(1).to({x:0.1,y:16.2},0).wait(1).to({y:16.6},0).wait(1).to({x:0,y:17},0).wait(1).to({y:17.4},0).wait(1).to({x:-0.1,y:17.8},0).wait(1).to({y:18.2},0).wait(1).to({x:-0.2,y:18.6},0).wait(1).to({y:19},0).wait(1).to({y:19.4},0).wait(1).to({x:-0.3,y:19.8},0).wait(1).to({y:20.2},0).wait(1).to({x:-0.4,y:20.6},0).wait(1).to({y:21},0).wait(1).to({x:-0.5,y:21.4},0).wait(1).to({y:21.8},0).wait(1).to({x:-0.6,y:22.2},0).wait(1).to({y:22.6},0).wait(1).to({x:-0.7,y:23},0).wait(1).to({y:23.4},0).wait(1).to({x:-0.8,y:23.8},0).wait(1).to({y:24.3},0).wait(1).to({x:-0.9,y:24.7},0).wait(1).to({y:25.1},0).wait(1).to({x:-1,y:25.5},0).wait(1).to({y:25.9},0).wait(1).to({x:-1.1,y:26.3},0).wait(1).to({y:26.7},0).wait(1).to({x:-1.2,y:27.1},0).wait(1).to({y:27.5},0).wait(1).to({x:-1.3,y:27.9},0).wait(1).to({y:28.3},0).wait(1).to({x:-1.4,y:28.7},0).wait(1).to({y:29.1},0).wait(1).to({x:-1.5,y:29.5},0).wait(1).to({y:29.9},0).wait(1).to({y:30.3},0).wait(1).to({x:-1.6,y:30.7},0).wait(1).to({y:31.1},0).wait(1).to({x:-1.7,y:31.5},0).wait(1).to({y:31.9},0).wait(1).to({x:-1.8,y:32.3},0).wait(1).to({y:32.7},0).wait(1).to({x:-1.9,y:33.1},0).wait(1).to({y:33.5},0).wait(1).to({x:-2,y:33.9},0).wait(1).to({y:34.3},0).wait(1).to({x:-2.1,y:34.8},0).wait(1).to({y:35.2},0).wait(1).to({x:-2.2,y:35.6},0).wait(1).to({y:36},0).wait(1).to({x:-2.3,y:36.4},0).wait(1).to({y:36.8},0).wait(1).to({x:-2.4,y:37.2},0).wait(1).to({y:37.6},0).wait(1).to({x:-2.5,y:38},0).wait(1).to({y:38.4},0).wait(1).to({x:-2.6,y:38.8},0).wait(1).to({y:39.2},0).wait(1).to({x:-2.7,y:39.6},0).wait(1).to({y:40},0).wait(1).to({y:40.4},0).wait(1).to({x:-2.8,y:40.8},0).wait(1).to({y:41.2},0).wait(1).to({x:-2.9,y:41.6},0).wait(1).to({y:42},0).wait(1).to({x:-3,y:42.4},0).wait(1).to({y:42.8},0).wait(1).to({x:-3.1,y:43.2},0).wait(1).to({y:43.6},0).wait(1).to({x:-3.2,y:44},0).wait(1).to({y:44.4},0).wait(1).to({x:-3.3,y:44.8},0).wait(1).to({y:45.3},0).wait(1).to({x:-3.4,y:45.7},0).wait(1).to({y:46.1},0).wait(1).to({x:-3.5,y:46.5},0).wait(1).to({y:46.9},0).wait(1).to({x:-3.6,y:47.3},0).wait(1).to({y:47.7},0).wait(1).to({x:-3.7,y:48.1},0).wait(1).to({y:48.5},0).wait(1).to({x:-3.8,y:48.9},0).wait(1).to({y:49.3},0).wait(1).to({x:-3.9,y:49.7},0).wait(1).to({y:50.1},0).wait(1).to({x:-4,y:50.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,22);


(lib.SymArrowRchgTwn3H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,9,1,1,0,0,0,1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.4},0).wait(1).to({x:1.4,y:9.9},0).wait(1).to({x:1.3,y:10.3},0).wait(1).to({x:1.2,y:10.7},0).wait(1).to({x:1.1,y:11.2},0).wait(1).to({x:1,y:11.6},0).wait(1).to({x:0.9,y:12},0).wait(1).to({y:12.5},0).wait(1).to({x:0.8,y:12.9},0).wait(1).to({x:0.7,y:13.3},0).wait(1).to({x:0.6,y:13.8},0).wait(1).to({x:0.5,y:14.2},0).wait(1).to({x:0.4,y:14.6},0).wait(1).to({x:0.3,y:15.1},0).wait(1).to({y:15.5},0).wait(1).to({x:0.2,y:15.9},0).wait(1).to({x:0.1,y:16.4},0).wait(1).to({x:0,y:16.8},0).wait(1).to({x:-0.1,y:17.2},0).wait(1).to({x:-0.2,y:17.7},0).wait(1).to({x:-0.3,y:18.1},0).wait(1).to({x:-0.4,y:18.5},0).wait(1).to({y:19},0).wait(1).to({x:-0.5,y:19.4},0).wait(1).to({x:-0.6,y:19.8},0).wait(1).to({x:-0.7,y:20.3},0).wait(1).to({x:-0.8,y:20.7},0).wait(1).to({x:-0.9,y:21.1},0).wait(1).to({x:-1,y:21.5},0).wait(1).to({y:22},0).wait(1).to({x:-1.1,y:22.4},0).wait(1).to({x:-1.2,y:22.8},0).wait(1).to({x:-1.3,y:23.3},0).wait(1).to({x:-1.4,y:23.7},0).wait(1).to({x:-1.5,y:24.1},0).wait(1).to({x:-1.6,y:24.6},0).wait(1).to({x:-1.7,y:25},0).wait(1).to({y:25.4},0).wait(1).to({x:-1.8,y:25.9},0).wait(1).to({x:-1.9,y:26.3},0).wait(1).to({x:-2,y:26.7},0).wait(1).to({x:-2.1,y:27.2},0).wait(1).to({x:-2.2,y:27.6},0).wait(1).to({x:-2.3,y:28},0).wait(1).to({y:28.5},0).wait(1).to({x:-2.4,y:28.9},0).wait(1).to({x:-2.5,y:29.3},0).wait(1).to({x:-2.6,y:29.8},0).wait(1).to({x:-2.7,y:30.2},0).wait(1).to({x:-2.8,y:30.6},0).wait(1).to({x:-2.9,y:31.1},0).wait(1).to({x:-3,y:31.5},0).wait(1).to({y:31.9},0).wait(1).to({x:-3.1,y:32.4},0).wait(1).to({x:-3.2,y:32.8},0).wait(1).to({x:-3.3,y:33.2},0).wait(1).to({x:-3.4,y:33.7},0).wait(1).to({x:-3.5,y:34.1},0).wait(1).to({x:-3.6,y:34.5},0).wait(1).to({y:35},0).wait(1).to({x:-3.7,y:35.4},0).wait(1).to({x:-3.8,y:35.8},0).wait(1).to({x:-3.9,y:36.3},0).wait(1).to({x:-4,y:36.7},0).wait(1).to({x:-4.1,y:37.1},0).wait(1).to({x:-4.2,y:37.6},0).wait(1).to({y:38},0).wait(1).to({x:-4.3,y:38.4},0).wait(1).to({x:-4.4,y:38.9},0).wait(1).to({x:-4.5,y:39.3},0).wait(1).to({x:-4.6,y:39.7},0).wait(1).to({x:-4.7,y:40.2},0).wait(1).to({x:-4.8,y:40.6},0).wait(1).to({x:-4.9,y:41},0).wait(1).to({y:41.5},0).wait(1).to({x:-5,y:41.9},0).wait(1).to({x:-5.1,y:42.3},0).wait(1).to({x:-5.2,y:42.8},0).wait(1).to({x:-5.3,y:43.2},0).wait(1).to({x:-5.4,y:43.6},0).wait(1).to({x:-5.5,y:44},0).wait(1).to({y:44.5},0).wait(1).to({x:-5.6,y:44.9},0).wait(1).to({x:-5.7,y:45.3},0).wait(1).to({x:-5.8,y:45.8},0).wait(1).to({x:-5.9,y:46.2},0).wait(1).to({x:-6,y:46.6},0).wait(1).to({x:-6.1,y:47.1},0).wait(1).to({x:-6.2,y:47.5},0).wait(1).to({y:47.9},0).wait(1).to({x:-6.3,y:48.4},0).wait(1).to({x:-6.4,y:48.8},0).wait(1).to({x:-6.5,y:49.2},0).wait(1).to({x:-6.6,y:49.7},0).wait(1).to({x:-6.7,y:50.1},0).wait(1).to({x:-6.8,y:50.5},0).wait(1).to({y:51},0).wait(1).to({x:-6.9,y:51.4},0).wait(1).to({x:-7,y:51.8},0).wait(1).to({x:-7.1,y:52.3},0).wait(1).to({x:-7.2,y:52.7},0).wait(1).to({x:-7.3,y:53.1},0).wait(1).to({x:-7.4,y:53.6},0).wait(1).to({x:-7.5,y:54},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,23);


(lib.SymArrowRchgTwn2H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg2();
	this.instance.parent = this;
	this.instance.setTransform(0.5,9.5,1,1,0,0,0,0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:9.9},0).wait(1).to({y:10.4},0).wait(1).to({y:10.8},0).wait(1).to({y:11.3},0).wait(1).to({x:0.4,y:11.7},0).wait(1).to({y:12.2},0).wait(1).to({y:12.6},0).wait(1).to({y:13},0).wait(1).to({x:0.3,y:13.5},0).wait(1).to({y:13.9},0).wait(1).to({y:14.4},0).wait(1).to({y:14.8},0).wait(1).to({x:0.2,y:15.3},0).wait(1).to({y:15.7},0).wait(1).to({y:16.1},0).wait(1).to({y:16.6},0).wait(1).to({x:0.1,y:17},0).wait(1).to({y:17.5},0).wait(1).to({y:17.9},0).wait(1).to({y:18.3},0).wait(1).to({x:0,y:18.8},0).wait(1).to({y:19.2},0).wait(1).to({y:19.7},0).wait(1).to({y:20.1},0).wait(1).to({x:-0.1,y:20.6},0).wait(1).to({y:21},0).wait(1).to({y:21.4},0).wait(1).to({y:21.9},0).wait(1).to({y:22.3},0).wait(1).to({x:-0.2,y:22.8},0).wait(1).to({y:23.2},0).wait(1).to({y:23.7},0).wait(1).to({y:24.1},0).wait(1).to({x:-0.3,y:24.5},0).wait(1).to({y:25},0).wait(1).to({y:25.4},0).wait(1).to({y:25.9},0).wait(1).to({x:-0.4,y:26.3},0).wait(1).to({y:26.8},0).wait(1).to({y:27.2},0).wait(1).to({y:27.6},0).wait(1).to({x:-0.5,y:28.1},0).wait(1).to({y:28.5},0).wait(1).to({y:29},0).wait(1).to({y:29.4},0).wait(1).to({x:-0.6,y:29.8},0).wait(1).to({y:30.3},0).wait(1).to({y:30.7},0).wait(1).to({y:31.2},0).wait(1).to({x:-0.7,y:31.6},0).wait(1).to({y:32.1},0).wait(1).to({y:32.5},0).wait(1).to({y:32.9},0).wait(1).to({y:33.4},0).wait(1).to({x:-0.8,y:33.8},0).wait(1).to({y:34.3},0).wait(1).to({y:34.7},0).wait(1).to({y:35.2},0).wait(1).to({x:-0.9,y:35.6},0).wait(1).to({y:36},0).wait(1).to({y:36.5},0).wait(1).to({y:36.9},0).wait(1).to({x:-1,y:37.4},0).wait(1).to({y:37.8},0).wait(1).to({y:38.3},0).wait(1).to({y:38.7},0).wait(1).to({x:-1.1,y:39.1},0).wait(1).to({y:39.6},0).wait(1).to({y:40},0).wait(1).to({y:40.5},0).wait(1).to({x:-1.2,y:40.9},0).wait(1).to({y:41.3},0).wait(1).to({y:41.8},0).wait(1).to({y:42.2},0).wait(1).to({x:-1.3,y:42.7},0).wait(1).to({y:43.1},0).wait(1).to({y:43.6},0).wait(1).to({y:44},0).wait(1).to({y:44.4},0).wait(1).to({x:-1.4,y:44.9},0).wait(1).to({y:45.3},0).wait(1).to({y:45.8},0).wait(1).to({y:46.2},0).wait(1).to({x:-1.5,y:46.7},0).wait(1).to({y:47.1},0).wait(1).to({y:47.5},0).wait(1).to({y:48},0).wait(1).to({x:-1.6,y:48.4},0).wait(1).to({y:48.9},0).wait(1).to({y:49.3},0).wait(1).to({y:49.8},0).wait(1).to({x:-1.7,y:50.2},0).wait(1).to({y:50.6},0).wait(1).to({y:51.1},0).wait(1).to({y:51.5},0).wait(1).to({x:-1.8,y:52},0).wait(1).to({y:52.4},0).wait(1).to({y:52.8},0).wait(1).to({y:53.3},0).wait(1).to({x:-1.9,y:53.7},0).wait(1).to({y:54.2},0).wait(1).to({y:54.6},0).wait(1).to({y:55.1},0).wait(1).to({x:-2,y:55.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,24);


(lib.SymArrowRchgTwn1H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg1();
	this.instance.parent = this;
	this.instance.setTransform(5,11.2,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:5.2,y:11.7},0).wait(1).to({x:5.4,y:12.1},0).wait(1).to({x:5.7,y:12.6},0).wait(1).to({x:5.9,y:13.1},0).wait(1).to({x:6.1,y:13.6},0).wait(1).to({x:6.3,y:14},0).wait(1).to({x:6.5,y:14.5},0).wait(1).to({x:6.8,y:15},0).wait(1).to({x:7,y:15.4},0).wait(1).to({x:7.2,y:15.9},0).wait(1).to({x:7.4,y:16.4},0).wait(1).to({x:7.7,y:16.9},0).wait(1).to({x:7.9,y:17.3},0).wait(1).to({x:8.1,y:17.8},0).wait(1).to({x:8.3,y:18.3},0).wait(1).to({x:8.5,y:18.7},0).wait(1).to({x:8.8,y:19.2},0).wait(1).to({x:9,y:19.7},0).wait(1).to({x:9.2,y:20.2},0).wait(1).to({x:9.4,y:20.6},0).wait(1).to({x:9.6,y:21.1},0).wait(1).to({x:9.9,y:21.6},0).wait(1).to({x:10.1,y:22},0).wait(1).to({x:10.3,y:22.5},0).wait(1).to({x:10.5,y:23},0).wait(1).to({x:10.8,y:23.5},0).wait(1).to({x:11,y:23.9},0).wait(1).to({x:11.2,y:24.4},0).wait(1).to({x:11.4,y:24.9},0).wait(1).to({x:11.6,y:25.3},0).wait(1).to({x:11.9,y:25.8},0).wait(1).to({x:12.1,y:26.3},0).wait(1).to({x:12.3,y:26.7},0).wait(1).to({x:12.5,y:27.2},0).wait(1).to({x:12.7,y:27.7},0).wait(1).to({x:13,y:28.2},0).wait(1).to({x:13.2,y:28.6},0).wait(1).to({x:13.4,y:29.1},0).wait(1).to({x:13.6,y:29.6},0).wait(1).to({x:13.8,y:30},0).wait(1).to({x:14.1,y:30.5},0).wait(1).to({x:14.3,y:31},0).wait(1).to({x:14.5,y:31.5},0).wait(1).to({x:14.7,y:31.9},0).wait(1).to({x:15,y:32.4},0).wait(1).to({x:15.2,y:32.9},0).wait(1).to({x:15.4,y:33.3},0).wait(1).to({x:15.6,y:33.8},0).wait(1).to({x:15.8,y:34.3},0).wait(1).to({x:16.1,y:34.8},0).wait(1).to({x:16.3,y:35.2},0).wait(1).to({x:16.5,y:35.7},0).wait(1).to({x:16.7,y:36.2},0).wait(1).to({x:16.9,y:36.6},0).wait(1).to({x:17.2,y:37.1},0).wait(1).to({x:17.4,y:37.6},0).wait(1).to({x:17.6,y:38.1},0).wait(1).to({x:17.8,y:38.5},0).wait(1).to({x:18,y:39},0).wait(1).to({x:18.3,y:39.5},0).wait(1).to({x:18.5,y:39.9},0).wait(1).to({x:18.7,y:40.4},0).wait(1).to({x:18.9,y:40.9},0).wait(1).to({x:19.2,y:41.4},0).wait(1).to({x:19.4,y:41.8},0).wait(1).to({x:19.6,y:42.3},0).wait(1).to({x:19.8,y:42.8},0).wait(1).to({x:20,y:43.2},0).wait(1).to({x:20.3,y:43.7},0).wait(1).to({x:20.5,y:44.2},0).wait(1).to({x:20.7,y:44.7},0).wait(1).to({x:20.9,y:45.1},0).wait(1).to({x:21.1,y:45.6},0).wait(1).to({x:21.4,y:46.1},0).wait(1).to({x:21.6,y:46.5},0).wait(1).to({x:21.8,y:47},0).wait(1).to({x:22,y:47.5},0).wait(1).to({x:22.3,y:48},0).wait(1).to({x:22.5,y:48.4},0).wait(1).to({x:22.7,y:48.9},0).wait(1).to({x:22.9,y:49.4},0).wait(1).to({x:23.1,y:49.8},0).wait(1).to({x:23.4,y:50.3},0).wait(1).to({x:23.6,y:50.8},0).wait(1).to({x:23.8,y:51.2},0).wait(1).to({x:24,y:51.7},0).wait(1).to({x:24.2,y:52.2},0).wait(1).to({x:24.5,y:52.7},0).wait(1).to({x:24.7,y:53.1},0).wait(1).to({x:24.9,y:53.6},0).wait(1).to({x:25.1,y:54.1},0).wait(1).to({x:25.3,y:54.5},0).wait(1).to({x:25.6,y:55},0).wait(1).to({x:25.8,y:55.5},0).wait(1).to({x:26,y:56},0).wait(1).to({x:26.2,y:56.4},0).wait(1).to({x:26.5,y:56.9},0).wait(1).to({x:26.7,y:57.4},0).wait(1).to({x:26.9,y:57.8},0).wait(1).to({x:27.1,y:58.3},0).wait(1).to({x:27.3,y:58.8},0).wait(1).to({x:27.6,y:59.3},0).wait(1).to({x:27.8,y:59.7},0).wait(1).to({x:28,y:60.2},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,15,27.3);


(lib.SymArrowRchgTween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg12();
	this.instance.parent = this;
	this.instance.setTransform(1.5,4,1,1,0,0,0,1.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.7,y:4.4},0).wait(1).to({x:1.9,y:4.8},0).wait(1).to({x:2,y:5.2},0).wait(1).to({x:2.2,y:5.6},0).wait(1).to({x:2.4,y:6.1},0).wait(1).to({x:2.6,y:6.5},0).wait(1).to({x:2.7,y:6.9},0).wait(1).to({x:2.9,y:7.3},0).wait(1).to({x:3.1,y:7.7},0).wait(1).to({x:3.3,y:8.1},0).wait(1).to({x:3.4,y:8.5},0).wait(1).to({x:3.6,y:8.9},0).wait(1).to({x:3.8,y:9.4},0).wait(1).to({x:4,y:9.8},0).wait(1).to({x:4.1,y:10.2},0).wait(1).to({x:4.3,y:10.6},0).wait(1).to({x:4.5,y:11},0).wait(1).to({x:4.7,y:11.4},0).wait(1).to({x:4.9,y:11.8},0).wait(1).to({x:5,y:12.2},0).wait(1).to({x:5.2,y:12.6},0).wait(1).to({x:5.4,y:13.1},0).wait(1).to({x:5.6,y:13.5},0).wait(1).to({x:5.7,y:13.9},0).wait(1).to({x:5.9,y:14.3},0).wait(1).to({x:6.1,y:14.7},0).wait(1).to({x:6.3,y:15.1},0).wait(1).to({x:6.4,y:15.5},0).wait(1).to({x:6.6,y:15.9},0).wait(1).to({x:6.8,y:16.4},0).wait(1).to({x:7,y:16.8},0).wait(1).to({x:7.1,y:17.2},0).wait(1).to({x:7.3,y:17.6},0).wait(1).to({x:7.5,y:18},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,13);


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


(lib.SymArrowRchgTween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg9();
	this.instance.parent = this;
	this.instance.setTransform(1,7,1,1,0,0,0,1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.1,y:7.9},0).wait(1).to({x:1.2,y:8.9},0).wait(1).to({x:1.4,y:9.8},0).wait(1).to({x:1.5,y:10.8},0).wait(1).to({x:1.6,y:11.7},0).wait(1).to({x:1.7,y:12.6},0).wait(1).to({x:1.8,y:13.6},0).wait(1).to({x:1.9,y:14.5},0).wait(1).to({x:2.1,y:15.5},0).wait(1).to({x:2.2,y:16.4},0).wait(1).to({x:2.3,y:17.4},0).wait(1).to({x:2.4,y:18.3},0).wait(1).to({x:2.5,y:19.2},0).wait(1).to({x:2.6,y:20.2},0).wait(1).to({x:2.8,y:21.1},0).wait(1).to({x:2.9,y:22.1},0).wait(1).to({x:3,y:23},0).wait(1).to({x:3.1,y:23.9},0).wait(1).to({x:3.2,y:24.9},0).wait(1).to({x:3.4,y:25.8},0).wait(1).to({x:3.5,y:26.8},0).wait(1).to({x:3.6,y:27.7},0).wait(1).to({x:3.7,y:28.6},0).wait(1).to({x:3.8,y:29.6},0).wait(1).to({x:3.9,y:30.5},0).wait(1).to({x:4.1,y:31.5},0).wait(1).to({x:4.2,y:32.4},0).wait(1).to({x:4.3,y:33.4},0).wait(1).to({x:4.4,y:34.3},0).wait(1).to({x:4.5,y:35.2},0).wait(1).to({x:4.6,y:36.2},0).wait(1).to({x:4.8,y:37.1},0).wait(1).to({x:4.9,y:38.1},0).wait(1).to({x:5,y:39},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,19);


(lib.SymArrowRchgTween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg8();
	this.instance.parent = this;
	this.instance.setTransform(2.5,6,1,1,0,0,0,2.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.1,y:7.1},0).wait(1).to({x:1.6,y:8.1},0).wait(1).to({x:1.1,y:9.2},0).wait(1).to({x:0.6,y:10.2},0).wait(1).to({x:0.2,y:11.3},0).wait(1).to({x:-0.3,y:12.3},0).wait(1).to({x:-0.8,y:13.4},0).wait(1).to({x:-1.3,y:14.4},0).wait(1).to({x:-1.7,y:15.5},0).wait(1).to({x:-2.2,y:16.6},0).wait(1).to({x:-2.7,y:17.6},0).wait(1).to({x:-3.2,y:18.7},0).wait(1).to({x:-3.6,y:19.7},0).wait(1).to({x:-4.1,y:20.8},0).wait(1).to({x:-4.6,y:21.8},0).wait(1).to({x:-5.1,y:22.9},0).wait(1).to({x:-5.5,y:23.9},0).wait(1).to({x:-6,y:25},0).wait(1).to({x:-6.5,y:26},0).wait(1).to({rotation:-11},0).wait(1).to({regX:2.4,scaleX:1,scaleY:1,rotation:-10.8,x:-6.8,y:27.2},0).wait(1).to({x:-7.1,y:28.3},0).wait(1).to({x:-7.3,y:29.5},0).wait(1).to({x:-7.6,y:30.6},0).wait(1).to({x:-7.8,y:31.8},0).wait(1).to({x:-8.1,y:32.9},0).wait(1).to({x:-8.3,y:34.1},0).wait(1).to({x:-8.6,y:35.2},0).wait(1).to({x:-8.8,y:36.4},0).wait(1).to({x:-9.1,y:37.5},0).wait(1).to({x:-9.3,y:38.7},0).wait(1).to({x:-9.6,y:39.8},0).wait(1).to({x:-9.8,y:41},0).wait(1).to({regX:2,scaleX:1,scaleY:1,rotation:-11,x:-10,y:42.1},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,17);


(lib.SymArrowRchgTween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg7();
	this.instance.parent = this;
	this.instance.setTransform(2.5,8.5,1,1,0,0,0,2.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.9,y:9.6},0).wait(1).to({x:3.2,y:10.8},0).wait(1).to({x:3.6,y:11.9},0).wait(1).to({x:3.9,y:13.1},0).wait(1).to({x:4.3,y:14.2},0).wait(1).to({x:4.6,y:15.4},0).wait(1).to({x:5,y:16.5},0).wait(1).to({x:5.3,y:17.7},0).wait(1).to({x:5.7,y:18.8},0).wait(1).to({x:6,y:20},0).wait(1).to({x:6.4,y:21.1},0).wait(1).to({x:6.7,y:22.3},0).wait(1).to({x:7.1,y:23.4},0).wait(1).to({x:7.4,y:24.6},0).wait(1).to({x:7.8,y:25.7},0).wait(1).to({x:8.1,y:26.9},0).wait(1).to({x:8.5,y:28},0).wait(1).to({x:8.9,y:29.1},0).wait(1).to({x:9.2,y:30.3},0).wait(1).to({x:9.6,y:31.4},0).wait(1).to({x:9.9,y:32.6},0).wait(1).to({x:10.3,y:33.7},0).wait(1).to({x:10.6,y:34.9},0).wait(1).to({x:11,y:36},0).wait(1).to({x:11.3,y:37.2},0).wait(1).to({x:11.7,y:38.3},0).wait(1).to({x:12,y:39.5},0).wait(1).to({x:12.4,y:40.6},0).wait(1).to({x:12.7,y:41.8},0).wait(1).to({x:13.1,y:42.9},0).wait(1).to({x:13.4,y:44.1},0).wait(1).to({x:13.8,y:45.2},0).wait(1).to({x:14.1,y:46.4},0).wait(1).to({x:14.5,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,10,22);


(lib.SymArrowRchgTween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg6();
	this.instance.parent = this;
	this.instance.setTransform(2,8.5,1,1,0,0,0,2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2.3,y:9.6},0).wait(1).to({x:2.5,y:10.8},0).wait(1).to({x:2.8,y:11.9},0).wait(1).to({x:3.1,y:13.1},0).wait(1).to({x:3.3,y:14.2},0).wait(1).to({x:3.6,y:15.4},0).wait(1).to({x:3.9,y:16.5},0).wait(1).to({x:4.1,y:17.7},0).wait(1).to({x:4.4,y:18.8},0).wait(1).to({x:4.6,y:20},0).wait(1).to({x:4.9,y:21.1},0).wait(1).to({x:5.2,y:22.3},0).wait(1).to({x:5.4,y:23.4},0).wait(1).to({x:5.7,y:24.6},0).wait(1).to({x:6,y:25.7},0).wait(1).to({x:6.2,y:26.9},0).wait(1).to({x:6.5,y:28},0).wait(1).to({x:6.8,y:29.1},0).wait(1).to({x:7,y:30.3},0).wait(1).to({x:7.3,y:31.4},0).wait(1).to({x:7.6,y:32.6},0).wait(1).to({x:7.8,y:33.7},0).wait(1).to({x:8.1,y:34.9},0).wait(1).to({x:8.4,y:36},0).wait(1).to({x:8.6,y:37.2},0).wait(1).to({x:8.9,y:38.3},0).wait(1).to({x:9.1,y:39.5},0).wait(1).to({x:9.4,y:40.6},0).wait(1).to({x:9.7,y:41.8},0).wait(1).to({x:9.9,y:42.9},0).wait(1).to({x:10.2,y:44.1},0).wait(1).to({x:10.5,y:45.2},0).wait(1).to({x:10.7,y:46.4},0).wait(1).to({x:11,y:47.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,9,22);


(lib.SymArrowRchgTween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg5();
	this.instance.parent = this;
	this.instance.setTransform(1,9,1,1,0,0,0,1,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.1,y:10.2},0).wait(1).to({x:1.3,y:11.4},0).wait(1).to({x:1.4,y:12.5},0).wait(1).to({x:1.6,y:13.7},0).wait(1).to({x:1.7,y:14.9},0).wait(1).to({x:1.9,y:16.1},0).wait(1).to({x:2,y:17.2},0).wait(1).to({x:2.2,y:18.4},0).wait(1).to({x:2.3,y:19.6},0).wait(1).to({x:2.5,y:20.8},0).wait(1).to({x:2.6,y:21.9},0).wait(1).to({x:2.8,y:23.1},0).wait(1).to({x:2.9,y:24.3},0).wait(1).to({x:3.1,y:25.5},0).wait(1).to({x:3.2,y:26.6},0).wait(1).to({x:3.4,y:27.8},0).wait(1).to({x:3.5,y:29},0).wait(1).to({x:3.6,y:30.2},0).wait(1).to({x:3.8,y:31.4},0).wait(1).to({x:3.9,y:32.5},0).wait(1).to({x:4.1,y:33.7},0).wait(1).to({x:4.2,y:34.9},0).wait(1).to({x:4.4,y:36.1},0).wait(1).to({x:4.5,y:37.2},0).wait(1).to({x:4.7,y:38.4},0).wait(1).to({x:4.8,y:39.6},0).wait(1).to({x:5,y:40.8},0).wait(1).to({x:5.1,y:41.9},0).wait(1).to({x:5.3,y:43.1},0).wait(1).to({x:5.4,y:44.3},0).wait(1).to({x:5.6,y:45.5},0).wait(1).to({x:5.7,y:46.6},0).wait(1).to({x:5.9,y:47.8},0).wait(1).to({x:6,y:49},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,23);


(lib.SymArrowRchgTween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg4();
	this.instance.parent = this;
	this.instance.setTransform(1,8.5,1,1,0,0,0,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0.9,y:9.7},0).wait(1).to({x:0.8,y:11},0).wait(1).to({x:0.6,y:12.2},0).wait(1).to({x:0.5,y:13.4},0).wait(1).to({x:0.3,y:14.7},0).wait(1).to({x:0.2,y:15.9},0).wait(1).to({x:0,y:17.1},0).wait(1).to({x:-0.1,y:18.4},0).wait(1).to({x:-0.3,y:19.6},0).wait(1).to({x:-0.4,y:20.9},0).wait(1).to({x:-0.6,y:22.1},0).wait(1).to({x:-0.7,y:23.3},0).wait(1).to({x:-0.9,y:24.6},0).wait(1).to({x:-1,y:25.8},0).wait(1).to({x:-1.2,y:27},0).wait(1).to({x:-1.3,y:28.3},0).wait(1).to({x:-1.5,y:29.5},0).wait(1).to({x:-1.6,y:30.7},0).wait(1).to({x:-1.7,y:32},0).wait(1).to({x:-1.9,y:33.2},0).wait(1).to({x:-2,y:34.4},0).wait(1).to({x:-2.2,y:35.7},0).wait(1).to({x:-2.3,y:36.9},0).wait(1).to({x:-2.5,y:38.1},0).wait(1).to({x:-2.6,y:39.4},0).wait(1).to({x:-2.8,y:40.6},0).wait(1).to({x:-2.9,y:41.9},0).wait(1).to({x:-3.1,y:43.1},0).wait(1).to({x:-3.2,y:44.3},0).wait(1).to({x:-3.4,y:45.6},0).wait(1).to({x:-3.5,y:46.8},0).wait(1).to({x:-3.7,y:48},0).wait(1).to({x:-3.8,y:49.3},0).wait(1).to({x:-4,y:50.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,7,22);


(lib.SymArrowRchgTween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,9,1,1,0,0,0,1.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.3,y:10.3},0).wait(1).to({x:1,y:11.6},0).wait(1).to({x:0.8,y:13},0).wait(1).to({x:0.5,y:14.3},0).wait(1).to({x:0.2,y:15.6},0).wait(1).to({x:0,y:16.9},0).wait(1).to({x:-0.3,y:18.3},0).wait(1).to({x:-0.6,y:19.6},0).wait(1).to({x:-0.8,y:20.9},0).wait(1).to({x:-1.1,y:22.2},0).wait(1).to({x:-1.4,y:23.6},0).wait(1).to({x:-1.6,y:24.9},0).wait(1).to({x:-1.9,y:26.2},0).wait(1).to({x:-2.2,y:27.5},0).wait(1).to({x:-2.4,y:28.9},0).wait(1).to({x:-2.7,y:30.2},0).wait(1).to({x:-3,y:31.5},0).wait(1).to({x:-3.2,y:32.8},0).wait(1).to({x:-3.5,y:34.1},0).wait(1).to({x:-3.7,y:35.5},0).wait(1).to({x:-4,y:36.8},0).wait(1).to({x:-4.3,y:38.1},0).wait(1).to({x:-4.5,y:39.4},0).wait(1).to({x:-4.8,y:40.8},0).wait(1).to({x:-5.1,y:42.1},0).wait(1).to({x:-5.3,y:43.4},0).wait(1).to({x:-5.6,y:44.7},0).wait(1).to({x:-5.9,y:46.1},0).wait(1).to({x:-6.1,y:47.4},0).wait(1).to({x:-6.4,y:48.7},0).wait(1).to({x:-6.7,y:50},0).wait(1).to({x:-6.9,y:51.4},0).wait(1).to({x:-7.2,y:52.7},0).wait(1).to({x:-7.5,y:54},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,8,23);


(lib.SymArrowRchgTween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg2();
	this.instance.parent = this;
	this.instance.setTransform(0.5,9.5,1,1,0,0,0,0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:10.9},0).wait(1).to({x:0.4,y:12.2},0).wait(1).to({x:0.3,y:13.6},0).wait(1).to({y:14.9},0).wait(1).to({x:0.2,y:16.3},0).wait(1).to({x:0.1,y:17.6},0).wait(1).to({x:0,y:19},0).wait(1).to({y:20.3},0).wait(1).to({x:-0.1,y:21.7},0).wait(1).to({x:-0.2,y:23},0).wait(1).to({x:-0.3,y:24.4},0).wait(1).to({y:25.7},0).wait(1).to({x:-0.4,y:27.1},0).wait(1).to({x:-0.5,y:28.4},0).wait(1).to({x:-0.6,y:29.8},0).wait(1).to({y:31.1},0).wait(1).to({x:-0.7,y:32.5},0).wait(1).to({x:-0.8,y:33.9},0).wait(1).to({y:35.2},0).wait(1).to({x:-0.9,y:36.6},0).wait(1).to({x:-1,y:37.9},0).wait(1).to({x:-1.1,y:39.3},0).wait(1).to({y:40.6},0).wait(1).to({x:-1.2,y:42},0).wait(1).to({x:-1.3,y:43.3},0).wait(1).to({x:-1.4,y:44.7},0).wait(1).to({y:46},0).wait(1).to({x:-1.5,y:47.4},0).wait(1).to({x:-1.6,y:48.7},0).wait(1).to({x:-1.7,y:50.1},0).wait(1).to({y:51.4},0).wait(1).to({x:-1.8,y:52.8},0).wait(1).to({x:-1.9,y:54.1},0).wait(1).to({x:-2,y:55.5},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,24);


(lib.SymArrowRchgTween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SymArrowRchg1();
	this.instance.parent = this;
	this.instance.setTransform(5,11.2,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:5.7,y:12.6},0).wait(1).to({x:6.4,y:14.1},0).wait(1).to({x:7,y:15.5},0).wait(1).to({x:7.7,y:17},0).wait(1).to({x:8.4,y:18.4},0).wait(1).to({x:9.1,y:19.8},0).wait(1).to({x:9.7,y:21.3},0).wait(1).to({x:10.4,y:22.7},0).wait(1).to({x:11.1,y:24.2},0).wait(1).to({x:11.8,y:25.6},0).wait(1).to({x:12.4,y:27.1},0).wait(1).to({x:13.1,y:28.5},0).wait(1).to({x:13.8,y:29.9},0).wait(1).to({x:14.5,y:31.4},0).wait(1).to({x:15.1,y:32.8},0).wait(1).to({x:15.8,y:34.3},0).wait(1).to({x:16.5,y:35.7},0).wait(1).to({x:17.2,y:37.1},0).wait(1).to({x:17.9,y:38.6},0).wait(1).to({x:18.5,y:40},0).wait(1).to({x:19.2,y:41.5},0).wait(1).to({x:19.9,y:42.9},0).wait(1).to({x:20.6,y:44.3},0).wait(1).to({x:21.2,y:45.8},0).wait(1).to({x:21.9,y:47.2},0).wait(1).to({x:22.6,y:48.7},0).wait(1).to({x:23.3,y:50.1},0).wait(1).to({x:23.9,y:51.6},0).wait(1).to({x:24.6,y:53},0).wait(1).to({x:25.3,y:54.4},0).wait(1).to({x:26,y:55.9},0).wait(1).to({x:26.6,y:57.3},0).wait(1).to({x:27.3,y:58.8},0).wait(1).to({x:28,y:60.2},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,15,27.3);


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



(lib.waterscenario1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{LSOILH:48,LSOILMH:408,LSOILM:768,LSOILML:1128,LSOILL:1488});

	// timeline functions:
	this.frame_0 = function() {
		window.wsgame.SetupWaterTable();
	}
	this.frame_5 = function() {
		window.wsgame.SetupWaterTable();
	}
	this.frame_11 = function() {
		window.wsgame.SetupWaterTable();
	}
	this.frame_17 = function() {
		window.wsgame.SetupWaterTable();
	}
	this.frame_23 = function() {
		window.wsgame.SetupWaterTable();
	}
	this.frame_24 = function() {
		window.wsgame.SetupPrecipitation(1, 150, window.wsgame.hgContainerPH);
	}
	this.frame_29 = function() {
		window.wsgame.SetupPrecipitation(0.9, 125, window.wsgame.hgContainerP2);
	}
	this.frame_35 = function() {
		window.wsgame.SetupPrecipitation(0.8, 100, window.wsgame.hgContainerPM);
	}
	this.frame_41 = function() {
		window.wsgame.SetupPrecipitation(0.7, 75, window.wsgame.hgContainerP4);
	}
	this.frame_47 = function() {
		window.wsgame.SetupPrecipitation(0.6, 50, window.wsgame.hgContainerPL);
	}
	this.frame_48 = function() {
		window.wsgame.SetupSoilTexture(window.wsgame.hgContainerVSL);
	}
	this.frame_168 = function() {
		window.wsgame.SetupSoilTexture2();
	}
	this.frame_407 = function() {
		this.gotoAndPlay("LSOILH");
	}
	this.frame_408 = function() {
		window.wsgame.SetupSoilTexture(window.wsgame.hgContainerVS4);
	}
	this.frame_528 = function() {
		window.wsgame.SetupSoilTexture2();
	}
	this.frame_767 = function() {
		this.gotoAndPlay("LSOILMH");
	}
	this.frame_768 = function() {
		window.wsgame.SetupSoilTexture(window.wsgame.hgContainerVSM);
	}
	this.frame_888 = function() {
		window.wsgame.SetupSoilTexture2();
	}
	this.frame_1127 = function() {
		this.gotoAndPlay("LSOILM");
	}
	this.frame_1128 = function() {
		window.wsgame.SetupSoilTexture(window.wsgame.hgContainerVS2);
	}
	this.frame_1248 = function() {
		window.wsgame.SetupSoilTexture2();
	}
	this.frame_1487 = function() {
		this.gotoAndPlay("LSOILML");
	}
	this.frame_1488 = function() {
		window.wsgame.SetupSoilTexture(window.wsgame.hgContainerVSH);
	}
	this.frame_1608 = function() {
		window.wsgame.SetupSoilTexture2();
	}
	this.frame_1847 = function() {
		this.gotoAndPlay("LSOILL");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6).call(this.frame_11).wait(6).call(this.frame_17).wait(6).call(this.frame_23).wait(1).call(this.frame_24).wait(5).call(this.frame_29).wait(6).call(this.frame_35).wait(6).call(this.frame_41).wait(6).call(this.frame_47).wait(1).call(this.frame_48).wait(120).call(this.frame_168).wait(239).call(this.frame_407).wait(1).call(this.frame_408).wait(120).call(this.frame_528).wait(239).call(this.frame_767).wait(1).call(this.frame_768).wait(120).call(this.frame_888).wait(239).call(this.frame_1127).wait(1).call(this.frame_1128).wait(120).call(this.frame_1248).wait(239).call(this.frame_1487).wait(1).call(this.frame_1488).wait(120).call(this.frame_1608).wait(239).call(this.frame_1847).wait(1));

	// darken
	this.darkening = new lib.SymDarken();
	this.darkening.parent = this;
	this.darkening.setTransform(-612,-292.5,1,1,0,0,0,-612,-292.5);
	this.darkening._off = true;

	this.timeline.addTween(cjs.Tween.get(this.darkening).wait(24).to({_off:false},0).to({_off:true},24).wait(1800));

	// riverflow2
	this.squiggle2 = new lib.SymSquiggle2Tween();
	this.squiggle2.parent = this;
	this.squiggle2.setTransform(914.3,315,1,1,0,0,0,68.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.squiggle2).wait(1848));

	// riverstage
	this.instance = new lib.SymRiverStage();
	this.instance.parent = this;
	this.instance.setTransform(1185,491,1,1,0,0,0,5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1848));

	// horizontalline
	this.text = new cjs.Text("The aquifer and the stream are in equilibrium.", "16px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(127.8,409.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.698)").ss(4,1,1).p("AvoniIgINFILuAAIECCKIDwiKILuAAIATtPg");
	this.shape.setTransform(130.9,446.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("EhfnAAAMC/PAAA");
	this.shape_1.setTransform(612,498.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkBFjIrvAAIAItFIfZgKIgTNPIruAAIjwCKg");
	this.shape_2.setTransform(130.9,446.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]},10).to({state:[]},4).wait(1834));

	// rivertv
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E61E8").s().p("Ak3BhQkwigifhGImuiXMAlpAAAIAAIuIvkALQjugykaiKg");
	this.shape_3.setTransform(1104.8,495.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E61E8").s().p("AAQDlQiWguinhNIkAh+Qhqg1hVgoQirhDi8hFIgxgRMAilAADIBiAAQADALgDAUQgCAUACAKIABHJIgIACIhbABItXAJQhcgOhegYg");
	this.shape_4.setTransform(1108.4,497.2);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E61E8").s().p("AAPDiQiPgoijhHQiCg8h3g6Qh1g7hBgfQi8hRiXg6IgvgRIBJADIf7ABIBgAAQAGAHgDAUQgEATAGAHIgBDQQgCCIABBUIgFAFIheABIstAIQhcgKhYgOg");
	this.shape_5.setTransform(1114.8,498.9);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E61E8").s().p("AAODfQiQglichDQh6g2h8g9QhngzhLgkQi7hViOg4IgugRIA9AFIQmABIOxACIBgAAQAJAHgCCrIgEEaIgEAFIhfABIsZAJQhcgHhUgMg");
	this.shape_6.setTransform(1116.3,499.7);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E61E8").s().p("AgDDYQiMgfiXg8Qh4gwh4g7QhjgyhGgjQhCghiShDQhyg0AJACQAMAEgKgHQHrAAIQACIPzAAQAMACgDCcIgGEIIgBAIIhiABIrvAIQhegBhKgEg");
	this.shape_7.setTransform(1123,501.7);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E61E8").s().p("AiiCjQjMg/kJh7Ihtg1QhigwhLgpIg/gkIegACQACALgBC7QAAC3gBAJIhWABIt5AJQhLgOhYgYg");
	this.shape_8.setTransform(1126.6,502.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E61E8").s().p("AifCZQjKg2j1hvQg5gZgvgXQhYgqhMgpIg9giIdJAAQAFAIABCnQAAClgDAGIhZABItOAJQhJgJhUgRg");
	this.shape_9.setTransform(1131.2,506.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E61E8").s().p("AicCVQjKgzjrhnQgugUg3gaQhXgqhJgnIg6ghIOdAAIMqgBIBWgBQAGAGgCCfQgCCcgFAFIhTABIs6AIQhNgGhMgNg");
	this.shape_10.setTransform(1133.3,507.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E61E8").s().p("AiZCMQjHgtjXhZIhggpQhKgihOgqIg3gfIbEgCQAJACgBCLQgBCKgHABIhUABIsRAIQg7gBhXgEg");
	this.shape_11.setTransform(1137.8,509.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E61E8").s().p("AqFgcQhNgjhGgmIg1geINNgBINNgBIABEBIvhALQj4g0j6hvg");
	this.shape_12.setTransform(1139.7,510.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E61E8").s().p("ALSB6ItrAJIgdgFQjqgyjmhmIgSgIQhAgehAgiIg1gfIYfgBIB7ADIAAECg");
	this.shape_13.setTransform(1140.4,510.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E61E8").s().p("AiwB+QjqgyjmhmIgSgIQhAgehAgiIg1gfIYfgBIBtAAIACAHIABDvIgCAFIhuABItrAJg");
	this.shape_14.setTransform(1140.8,510.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E61E8").s().p("AiwB9QjrgyjghjIgSgIQhAgeg/giIg0geIYdgBIBkAAIAADzIhkACItvAKg");
	this.shape_15.setTransform(1141.3,511.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E61E8").s().p("AivB8QjrgyjfhiIgSgIQhKgigzgcIg0gfIYWgBIBdAAIAGAEIAADsIgDACIhgABItrAKg");
	this.shape_16.setTransform(1143.6,511.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E61E8").s().p("Ap3gWIgSgIQhGghg3geIgGgDIgtgbIYQAAIBbAAIAIACIAADrIgEABIhfABIuGAIQjsgxjchhg");
	this.shape_17.setTransform(1142.9,511.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E61E8").s().p("Ap1gWIgSgIQhCgeg6gfIgzgfIYKAAIBaAAIAJABIAADqIgFABIheABIuCAIQjrgwjchhg");
	this.shape_18.setTransform(1142.2,511.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E61E8").s().p("AqEgdQhGggg8ghIgtgbIZmAAIABDoIviALQj3gzjfhkg");
	this.shape_19.setTransform(1142.3,511.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E61E8").s().p("AkYBrQkwifiehGIkChbIjrhQMAmkAAAIACEiIABEfIvkAKQjvgxkZiKg");
	this.shape_20.setTransform(1101.7,494.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E61E8").s().p("AkEB1QkwifiehGIkChbIkThaQGRgBNWgFQNTgEGSgBQAAC7ADGbIvkAKQjvgxkZiKg");
	this.shape_21.setTransform(1099.7,493.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E61E8").s().p("AjhB/QkwifiehGIkChbIlZhvQGRAAN5gEQN2gGGSAAQAAC7ADGvIvkAKQjvgxkZiKg");
	this.shape_22.setTransform(1096.2,492.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E61E8").s().p("AjICJQkwifiehGIkChbImLiDQGRAAOSgEQOPgGGSAAQAAC7ADHDIvkAKQjvgxkZiKg");
	this.shape_23.setTransform(1093.7,491.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E61E8").s().p("AAtD2QiXguimhNIkAh+Qhqg1hWgoQirhDi7hFIhqgfMAlAgAUQgCABACAsQADAugDAHQgFAKACCnIADEYIgHACIhcABItXAJQhcgOhdgYg");
	this.shape_24.setTransform(1105.6,495.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1E61E8").s().p("ABfEKQiWguinhNIkAiAQhpgzhWgoQirhDi8hFIjYhHMAm4gAUQgCABgCBAQgDBDgCAGQgFAKACClIADEaIgIACIhbABItXAJQhcgOhegYg");
	this.shape_25.setTransform(1100.5,493.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1E61E8").s().p("ACMEUQiXguimhNIkAiAQhqgzhWgoQirhDi7hFIkohlMAn+gAKQADAKgDBFQgDBFADAKIAAHJIgHACIhcABItXAJQhcgOhdgYg");
	this.shape_26.setTransform(1096.1,492.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1E61E8").s().p("ACvEeQiZguikhNIkAiAQhqgzhWgoQirhDi7hFIluh5MApEgAKQADAKgDBPQgDBPADAKIAAHJIgHACIhcABItXAJQhcgOhdgYg");
	this.shape_27.setTransform(1092.6,491.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1E61E8").s().p("ABID/QiQgoiihHQiDg8h3g8Qh0g5hCgfQi8hRiXg6Iilg3MAkigAUQAGAIgEDUQgHEcAAAnIgFAFIheABIstAIQhcgKhXgOg");
	this.shape_28.setTransform(1109.2,496);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E61E8").s().p("AB1EOQiQgoiihHQiDg8h3g8Qh0g5hCgfQi8hRiXg6Ij/hVMAl8gAUQAGAIgEDjIgHFSIgFAFIheABIstAIQhcgKhXgOg");
	this.shape_29.setTransform(1104.7,494.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E61E8").s().p("ACeEdQiSgoighHQiDg8h3g8Qh0g5hCgfQi8hRiXg6IlPhzMAnMgAUQADAEgEBSQgHCxADFUQAAACgFADIheABIstAIQhcgKhXgOg");
	this.shape_30.setTransform(1100.6,493);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E61E8").s().p("ADdEsQiSgoighHQiDg8h3g8Qh0g7hCgdQi8hRiXg6InHibMAowgAKQAHAJAFEAQADCrAADFIgFAFIheABIstAIQhcgKhXgOg");
	this.shape_31.setTransform(1094.3,491.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E61E8").s().p("AA8DxQiQgmidhDQh5g1h9g+QhngzhLgkQi6hUiOg5IiPgzMAjcAAKQAIAGgFC8QgIEEAAAmIgDAGIhgABIsYAIQhcgHhUgLg");
	this.shape_32.setTransform(1111.8,498);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E61E8").s().p("AB9EFQiQgmidhDQh5g1h9g+QhngzhLgkQi6hUiOg5IkRhbMAleAAKQAIAGgFDQQgIEdAAAhIgDAGIhgABIsYAIQhcgHhUgLg");
	this.shape_33.setTransform(1105.3,496);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E61E8").s().p("AC0EZQiSgmibhDQh5g1h9g+Qhng1hLgiQi6hUiOg5Il/iDMAnMAAAQAIAGgFDpIgIFXIgDAGIhgABIsYAIQhcgHhUgLg");
	this.shape_34.setTransform(1099.8,494);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E61E8").s().p("ADzEyQiSgmiahDQh6g1h8g+Qhng1hLgiQi7hUiOg5In3irMAo6gAKQAJAGgBECIgCFwIgEAGIhfABIsZAIQhcgHhUgLg");
	this.shape_35.setTransform(1093.4,491.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E61E8").s().p("AA6DvQiKgfiYg9Qh4gwh3g6QhkgzhFgiQhHgkiShAQh0gzAHACQAMAEh6gsQEbAAdJgKQACAAACC0IABEiIgBAIIhiABIrvAIQhdgChMgDg");
	this.shape_36.setTransform(1116.8,499.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E61E8").s().p("ACFEIQiKgfiYg9Qh4gwh3g6Qhkg1hFggQhHgkiShAQh0gzAHACQAMAEkQheQEbAAffgKQACAAACDNIABE7IgBAIIhiABIrvAIQhdgChMgDg");
	this.shape_37.setTransform(1109.3,496.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E61E8").s().p("ADLEcQiMgfiWg9Qh4gwh3g6Qhkg1hFghQhHgjiShAQh0gzAHACQAMAEmciQMAmGAAAQACAAACDhIABFPIgBAIIhiABIrvAIQhdgChMgDg");
	this.shape_38.setTransform(1102.3,494.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E61E8").s().p("AElE/QiMgfiYg9Qh2gwh3g6Qhkg1hFgiQhHgiiShAQh0gzAHACQAMAEpQjMUAEbAAAAkfgAKQACAAACEEIABFyIgBAIIhiABIrvAIQhdgChMgDg");
	this.shape_39.setTransform(1093.3,491.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},4).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},6).to({state:[{t:this.shape_6}]},6).to({state:[{t:this.shape_7}]},6).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},48).to({state:[{t:this.shape_20}]},24).to({state:[{t:this.shape_21}]},24).to({state:[{t:this.shape_22}]},24).to({state:[{t:this.shape_23}]},24).to({state:[{t:this.shape_22}]},40).to({state:[{t:this.shape_21}]},58).to({state:[{t:this.shape_20}]},59).to({state:[{t:this.shape_3}]},51).to({state:[{t:this.shape_4}]},8).to({state:[{t:this.shape_4}]},48).to({state:[{t:this.shape_24}]},24).to({state:[{t:this.shape_25}]},24).to({state:[{t:this.shape_26}]},24).to({state:[{t:this.shape_27}]},24).to({state:[{t:this.shape_26}]},40).to({state:[{t:this.shape_25}]},58).to({state:[{t:this.shape_24}]},59).to({state:[{t:this.shape_4}]},51).to({state:[{t:this.shape_5}]},8).to({state:[{t:this.shape_5}]},48).to({state:[{t:this.shape_28}]},24).to({state:[{t:this.shape_29}]},24).to({state:[{t:this.shape_30}]},24).to({state:[{t:this.shape_31}]},24).to({state:[{t:this.shape_30}]},40).to({state:[{t:this.shape_29}]},58).to({state:[{t:this.shape_28}]},59).to({state:[{t:this.shape_5}]},51).to({state:[{t:this.shape_6}]},8).to({state:[{t:this.shape_6}]},48).to({state:[{t:this.shape_32}]},24).to({state:[{t:this.shape_33}]},24).to({state:[{t:this.shape_34}]},24).to({state:[{t:this.shape_35}]},24).to({state:[{t:this.shape_34}]},40).to({state:[{t:this.shape_33}]},58).to({state:[{t:this.shape_32}]},59).to({state:[{t:this.shape_6}]},51).to({state:[{t:this.shape_7}]},8).to({state:[{t:this.shape_7}]},48).to({state:[{t:this.shape_36}]},24).to({state:[{t:this.shape_37}]},24).to({state:[{t:this.shape_38}]},24).to({state:[{t:this.shape_39}]},24).to({state:[{t:this.shape_38}]},40).to({state:[{t:this.shape_37}]},58).to({state:[{t:this.shape_36}]},59).to({state:[{t:this.shape_7}]},51).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(1440));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},6).wait(373).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(1080));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},6).wait(727).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(3).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},6).wait(1081).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(1440).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).wait(8));

	// riverflow1
	this.squiggle1_2 = new lib.SymSquiggle1Tween();
	this.squiggle1_2.parent = this;
	this.squiggle1_2.setTransform(1086,412.1,1,1,0,0,0,23.2,48.9);

	this.squiggle1_1 = new lib.SymSquiggle1Tween();
	this.squiggle1_1.parent = this;
	this.squiggle1_1.setTransform(1028.7,389.2,1,1,0,0,0,23.2,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.squiggle1_1,p:{x:1028.7,y:389.2}},{t:this.squiggle1_2,p:{x:1086,y:412.1}}]}).to({state:[{t:this.squiggle1_1,p:{x:1092,y:412.1}},{t:this.squiggle1_2,p:{x:1043.9,y:403.8}}]},4).to({state:[{t:this.squiggle1_1,p:{x:1122,y:443.1}},{t:this.squiggle1_2,p:{x:1067.9,y:411.8}}]},4).to({state:[{t:this.squiggle1_1,p:{x:1122,y:443.1}},{t:this.squiggle1_2,p:{x:1072.9,y:411.8}}]},8).to({state:[{t:this.squiggle1_1,p:{x:1028.7,y:389.2}},{t:this.squiggle1_2,p:{x:1086,y:412.1}}]},8).to({state:[{t:this.squiggle1_1,p:{x:1092,y:412.1}},{t:this.squiggle1_2,p:{x:1043.9,y:403.8}}]},23).to({state:[{t:this.squiggle1_1,p:{x:1028.7,y:389.2}},{t:this.squiggle1_2,p:{x:1086,y:412.1}}]},1).to({state:[{t:this.squiggle1_1,p:{x:1092,y:412.1}},{t:this.squiggle1_2,p:{x:1043.9,y:403.8}}]},1440).wait(360));

	// river
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B868E").s().p("AkgRiQgBAAAuhCQAyhPAPhBQAXheAVhhIAQhPQAFgPAEgnQAIhOgHh2QgDhJgPg0IgqhzQgmhEgZgWIgRgKIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgYQgJghgFghQgFgpAMg7IANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgQANQgfAbgJAUQgGAQgLA2IgLAyIAcCWIBGBkIBOAjQAxAWBdAhICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAaQBGANAvAKIBPAQQBhAYBfAkQA4AWBbArIBSAnIA1AgIBrBEQBdA7BNA7IB4BGICgCCQAhAcBNBIIDACTQBMA9AWAWQBBBBBeBFQAvAjAiAVIFoEOIgCA5g");
	this.shape_40.setTransform(1014.1,356);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B868E").s().p("AhVR1QhaABgYgGIAZhFQASgvAHgMQAkhPAKhEIANhUIADgaIAMhUIAKhNIABgDQADgSACgkQACgugDg2QgDgsgHgxQgDgbgGgZQgIgmgNgeQgKgOgqhcIgDgEQgjgwgbgYIgHgGIithfIhlglIj5g+Iivg4IjAgpIlnhZIlAhuIgEgCQgYgMgigWIgDgCQhIgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgCQgGgqAMg6IAAAAIAOgyQADgQAGgTQAOgpARgYQARgZAXgUIAUgPIABAAQAOgBALgCQADAAALADIABAAQAWAGAvgGQgOAJgQAOQggAagIAVIAAABQgGAQgMA0IAAABIgKAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEBAeIAEABIEtAyIC1ATIAFABQBmAKCJAZIAGABQBCAMAtALIAGABIBIAQIALADQBcAYBZAiIARAHQA1AVBOAjIBTAmIADACIAyAeIAEACIBnBCIAEADQBZA5BPA4IAHAEIBvBEIACACIApAiIB1BfIABABQAhAcBMBGIADACIC0CMIAIAGQBEA3AeAeIAEAEQA/A+BbBEIAGAFQArAgAgAUIAFAEIFgENIADBHIhcAAI/hAHQgJgDhWABg");
	this.shape_41.setTransform(1013.9,357.3);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B868E").s().p("AftSHI++AAQgIgIhBADIhBAFQgBgFAWhBQAWhFACgVQADgtAHg/QAIhDABgRIAHhVIAAgaIAEhWIAGhOIAAgDIADg1QgBgxgGgyQgGgsgKgvQgGgbgJgZQgKgjgRgeQgSgXguhJIgDgEQglgpgggYIgJgEIizhTIhlgjIjeg4IjKg9IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgCQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgPANIgBAAQgfAbgJAUIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGQBaIEDAeIExAzIC1ATIAFABQBmALCJAYIAGABIBvAXIAGABIBIASIALADQBcAaBZAhIAQAHQA3AVBMAiIBUAkIAEACIAyAeIADACIBnBCIAEADICrBuIAHAEIBtBHIACACIApAiIB1BgIABABQAhAbBMBGIADACICzCNIAHAGQA9AxAnAmIADADQA/A/BZBEIAHAFQArAgAfAVIAFAEIFfEPIADBpg");
	this.shape_42.setTransform(1013.7,359);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B868E").s().p("AfwSRI+tgEIgrABQgoABgbgHIAniIQgBgIAEgSQADgbACgRQAEggADhsIADh6IgBgsIAAhFIADhNIAAgDIABg2QgCgygHgwQgHgtgLguQgHgagJgZQgNghgSgeQgXgbgvhBIgDgEQgngkgigXIgJgEIi2hNIhlgjIjeg4IjKg8IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgqhAIgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgEggIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQIAAAAQAOAAAMgCQADgBALADIAAAAQAXAHAvgHQgOAKgQANIAAAAQgfAagJAVIAAABQgGAQgMA0IAAABIgKAyIAAAAIAcCWIAAABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIGPBaIEDAeIExAzIC1ATIAFABQBmAKCJAZIAGABQBBAMAuALIAGABIBHASIALADQBcAbBZAiIAQAGICEA2IBUAkIAEACIAyAeIADACIBnBCIAEACQBZA7BTAzIAHAEIBtBIIACACIAoAiIB1BgIABABQAgAbBNBFIADADICzCNIAHAGQA5AuAqAqIAEADQA/A/BYBEIAHAFQArAgAfAWIAFADIFdERIABB6g");
	this.shape_43.setTransform(1013.4,360);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B868E").s().p("AfzSoI+fgQQgBgKAKgaQAJgbAAgPQgBgcAKgrQAIgigFgUQgTjEgBgzQAAgPgFghQgFghAAgPQgBgBgGhVIgGhrIAAgDIgCg2QgFg0gJgtQgKgtgRgsQgJgZgNgZQgNgfgWgdQgfgkgyguIgEgCQgpgdgngZIgKgDIkihhIjdg5IjKg6IjAgpIlohZIk/huIgDgCQgYgMgigWIgDgCQhIgtg2gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgEggIAAAAQgGgqAMg5IAAgBIAOgyQADgPAGgUQAOgoARgZQARgZAXgUIAUgPQAOgBAMgCQADAAALADQAXAGAvgGQgOAJgQAOIAAAAQgfAagJAVQgGAQgMA0IAAABIgKAyIAAABIAcCVIAAABIBFBjIABABIBMAhIABABQAxAWBcAhIACABICoAeIACAAIGNBZIADABIEAAeIAEAAIEsAyIC1ATIAGABQBlALCJAYIAGABQBCAMAuALIAGABIBGAUIALADQBdAcBXAiIARAGICEA0IBVAjIAEACIAyAeIADACIBnBCIAEACQBZA7BWAwIAHAEIBqBLIACACIAoAiIB1BhIABABQAgAbBNBEIADADICyCOIAHAGQAyAoAyAyIADADQA/A+BYBFIAGAFQArAhAfAWIAFADIFbETIAACkg");
	this.shape_44.setTransform(1013.1,362.3);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B868E").s().p("ACQSuIADheQAEhsgEhBQgBgTAAhDQABg0gHgxIgNiPQAEghgVhyQgUhsgShDQgbhoghg9QgnhLhbg/IhTgyIlZhpIi0gtIjLg5Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgYQgJghgFghQgFgpAMg7IANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgQANQgfAbgJAUQgGAQgLA2IgLAyIAcCWIBGBkIBOAjQAxAWBdAhICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAaQBGANAvAKIBSAYQBkAgBgAkQBbAjCDA1IA1AgIBrBEQBdA9BaAyIBrBNIAoAiIB2BiQAhAcBPBGICyCOQAyApA8A7QBABBBcBHQAuAkAhAXIFyEnIgJClg");
	this.shape_45.setTransform(1014.2,363.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B868E").s().p("AD4TLQgFgCAIg1QAJg1gGgCQACgOgBgiIgBg0QABgTgDhYIgEhTQgDgxgHhAQgEglgYhWIgYhYQgHgagGgmIgUhjQgOhPgbhCQgOghgQghQgPgggZggIgWgaQgigphEgsIgTgNIg9gfIgZgOIhCgUIkXhTIi2grIjLg5Ii6goIluhaIlAhvIgHgCQgXgNgggUIgFgDQhGgtg2guIgEgDQgZgXgqg+IgCgDIgmg7IgBgDIgFgWIgBgDQgJgfgEgfIAAgBQgGgpAMg7IAAgBIAOgxIAAgBQADgOAGgTIABgCQANgmAPgYIACgDQARgXAVgTIADgCIARgOIADgBIAWgCIAEgBIAKACIAEABQAWAGAsgGIACABIgaAUIgEADQgcAXgJATIgDAFQgFAQgLAwIgBAGIgKAsIAAAGIAbCPIACAIIBBBdIAGAGIBFAeIAJAEQAvAVBVAfIALADICdAcIGfBcIDwAcIEqAxIC4AVIAaADQBeAKB4AXIAgAGIBWASIAeAIIAwAOIAiALQBRAaBOAdIAmAPQAwATA+AbIBYAoIAUAIIAnAXIAPAJIBgA9IALAHQBVA4BQAxIAQAKIBrBNIAPANIAaAVIBoBWIAPANIBwBiICOB1IAjAcQAvAmAiAgIAcAbQA4A4BNA+IAXASIBAAwIAPALIFeEiIABDEIhSABItEAGIpBACQlkAAgPgFg");
	this.shape_46.setTransform(1013.4,366.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B868E").s().p("AEjTPQgEgDAIg5QAHg4gEgEIAGhdQABgRgFgsIgGg7QAAgRgPhaIgUh2QgLhbgQhVQgEgGgEgTIgQg+IgahhQgThMgghCQgQgggSghQgQgdgcgfQgLgNgNgMQgjglhHgrQgIgGgMgGQgagOgjgQIgagNIhBgVIkYhSIi2gqIjLg5Ii7goIlvhaIlAhuIgHgDQgXgMgggVIgGgDQhGgtg2guIgEgDQgYgXgqg+IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgEggIAAgBQgGgpAMg7IAAgBIAOgxIAAgBQADgOAGgTIABgCQANgnAQgYIACgCQAQgXAWgTIACgDIARgNIADgBIAXgCIAEgBIAJACIAFABQAWAGArgGIABABIgaAUIgEADQgcAYgJATIgCAFQgGARgKAvIgBAGIgKAsIAAAGIAbCPIADAIIBBBdIAGAFIBFAfIAJAEQAvAVBVAeIALAEICeAcIGfBcIDxAcIErAwIC4AVIAaADQBeALB4AXIAgAHIBWASIAeAJIAwAPIAiAKQBRAbBOAdIAmAPQAwAUA+AcIBXApIAUAJIAmAXIAPAJQA4AiAoAbIAMAHQBVA4BPAyIAQAKIB6BbIAbAVIBoBWIAPAOIBwBiICNB1IAjAcQA0AqAcAcIAcAbQA5A3BNA+IAXASIBAAwIAPAMIFbElIACDKIhSABQmXADmaACIlsABQohAAgPgKg");
	this.shape_47.setTransform(1013.4,367.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B868E").s().p("AGCRXIAKigQgChZgCgYIgNhxQgBgXgFgcIgLg7QgGglgTg5IgdhYIgehUQgRgqgWgzQgdhDgrhEQgTgfgXggQgQgZgkgdQgMgJgPgLQgngehMgrIgUgKQgZgLgngQIgbgLIg/gVIkrhVIimgjIjMg5Ii7gpIlwhaIlBhvIgHgCQgXgMgggUIgGgEQhHgtg1guIgEgDQgZgWgrg/IgCgDIgog+IgFgWIgBgDQgIgfgFgfIAAgCQgGgqAMg6IAAgBIAOgxIAAgBIAJgiIABgCQANgnAQgXIACgDQARgXAVgTIADgCIARgOIAEAAIAWgCIAEAAIAKABIAEABQAXAGArgGIgCACIgaAUIgEADQgcAYgJATIgCAGQgGASgJAtIgBAHIgKAsIAAAGIAbCPIAEAIIBBBdIAHAFIBGAeIAJAEQAwAVBVAfIALACICeAcIGPBaIEDAeIErAyIC5AUIAbADQBeALB4AaIAgAGQAwALAjAJIAhAKIAvAPIAiAMQBRAbBPAdIAmAQQAvAUA+AgIBVArIAUAKIAmAXIAQAJQA3AiApAbIAMAIICiBrIAQALIB6BbIAcAXIBpBXIAQAOIBuBhICMB4IAjAcQA9AxATASIAbAcQA5A2BOA+IAYASQAjAdAcAUIAOALIFXEsIAFATIACDIIhWAAI5zADQgCgKAJiMg");
	this.shape_48.setTransform(1013.6,369.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B868E").s().p("AG0SHQAOhoABgQQAEguAChEQAChFgCgXQgbjagNgqQgIgcgbg6Qgcg+gIgZIgJgYIgZg7QgTgqgbgxQghhAgwhDIgug+QgRgXgngbIgegUQgmgahQgpIgVgKIhBgZIgbgKIg/gWIkrhUIingiIjMg4Ii8gqIlwhaIlChvIgHgBQgXgMgggVIgGgDQhGgtg2guIgEgEQgZgVgrg/IgCgDIgmg8IgCgCIgFgWIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAgBIANgxIAAgBIAKgiIABgBQANgnAQgYIACgCQAQgYAWgTIADgCIARgOIAEAAIAWgDIAEABIAKACIAEABQAXAFArgGIgDADIgaAUIgEACQgcAagIASIgCAGQgGASgKAuIgBAFIgKAtIABAGIAbCQIBGBkIAHAFIBFAeIAKAEQAwAVBVAeIALACICeAcIGQBaIEDAfIEsAxIC6AVIAaADQBfAMB4AZIAgAHIBTAVIAgAKIAvAQIAiALQBRAcBPAeIAnAQQAuAUA+AhIBUAsIATALIAnAWIAQAKIBgA8IAMAIQBWA4BMA1IAPALIB6BcIAcAWIBrBYIAPANIBvBiICLB4IAjAcQBCA2ANANIAcAbQA4A2BPA/IAXASQAkAcAbAUIAOALIEGDxIBZBRIgHACIgDDRIhPAAI5HADQAAgLAPhng");
	this.shape_49.setTransform(1013.8,370.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B868E").s().p("AfxT/I38gKQgKgBgbABQgbACgLgCQABgDAJgMQAJgMABgEIAQhGQANg7AHguQAGglACgeQAHhUgKhxIgCgdIgPhvIgBgLQgDgogLg0IgEgUQgYhxgrhdQgKgZgNgWQgdg3gug/Qg1hHhDhLIgFgGQgXgXhBgmIgFgDQgsgZhOgmIgMgGQgVgJg2gTIgMgEIhOgaIgMgDIkghQIi5glIjLg5Ii6goIlthbIk/huIgDgBQgZgNgigVIgDgCQhHgtg2gvIgCgCQgZgXgsg/IgBgCIgng9IAAgBIgGgXIAAgBQgJgggFghQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoAQgYIABgBQARgYAXgTIABgBIASgPIACgBQANAAAMgCIABAAQADgBAJADIACAAQAWAHAugHIABAAQgNAJgPANIgCABQgeAagJAUIgBACQgGAPgKAzIgBADIgKAwIgBADIAbCTIACADIBGBkIBJAgIAEACQAwAWBaAgIAFABICkAdIGWBbID8AdIErAyIC5AUIALABQBjALCCAdIANADQA8ANAqAMIAMADIBDAXIANAEQBbAfBaAiIANAFQA0AUBRAsIAOAHIBFAmIAOAIIAtAaIANAIIBiA9IAOAJQBUA3BLA0IAOAKIByBaIAUARICGBuIAQAOIDyDhIADADQA0ApAfAdIAaAXIAdAdQA4A2BNA/QAxAoAlAcIAxAsIDtDRIBQBGIAADSg");
	this.shape_50.setTransform(1013.3,371);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2B868E").s().p("AfwT/I4CgHQgHgDgTACQgTACgIgEIALgmIARhGQANg7AGgtQAFgkADggQAGhUgIhwIgCgeIgMhuIgBgMQgDgngLg2IgFgTQgYhwgsheQgLgYgNgXQgeg2gvg+Qg5hJhEhEIgFgFQgWgWhDgnIgFgDQgxgchHgkIgNgFQgUgJg3gTIgLgEIhPgbIgLgDIkhhQIi5glIjLg5Ii6goIluhaIk/huIgDgCQgZgNgigVIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgBgCIgng8IAAgBIgHgYIAAgBQgJgggEggIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoAQgYIABgBQARgYAXgUIABgBIASgOIABgBQAOAAAMgCIABAAQACgBAKADIABAAQAXAHAtgHIABABIgcAVIgCACQgeAZgJAUIgBACQgGAQgKAzIgBADIgKAvIAAADIAbCTIABADIBEBhIADADIBJAgIAEACQAwAWBaAgIAFACICkAdIGXBbID7AdIE2AzICvATIALABQBkAKCCAdIAMADQA8AOAqAMIANADIBCAWIANAFQBcAfBZAiIANAFQA1AUBRAsIANAHQAmAUAgATIANAIIAtAZIANAIIBjA9IANAJQBVA3BLA0IANALIBwBcIAVARQApAlBZBKIAPANIDtDmIADADQAxAnAhAhQATASAHAIIAdAdQA4A2BMBAQAvAnAmAfIAxAsID6DtIBSBPIgFCEIgBAYg");
	this.shape_51.setTransform(1013.4,371);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2B868E").s().p("AfwT/I4IgDQgFgFgRAEQgQAEgFgGIAPgxIARhFQAOg7AFgtQAFgjACghQAGhUgGhxIgCgdIgKhvIgBgMQgDgmgLg3IgFgTQgYhuguhgQgLgYgNgXQggg2gwg8Qg9hLhEg9IgFgFQgWgThFgoIgEgDQg2gghCghIgMgFQgTgJg4gUIgMgEIhOgaIgMgDIkghQIi6gmIjLg5Ii6goIluhaIlAhuIgDgCQgYgMgigWIgDgCQhIgtg2gvIgCgCQgZgWgshAIgBgCIgng8IAAgBIgHgYIAAgBQgJgggEggIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoAQgYIABgBQARgYAXgUIABgBIASgOIACgBQANAAAMgCIABAAQADgBAJADIACAAQAWAHAugHIAAABQgNAJgPAMIgCACQgeAZgJAUIgBADQgGAQgKAyIgBADIgKAwIAAADIAbCTIACADIBEBhIACACIBKAhIAEACQAwAVBaAgIAFACICkAdIGXBbID8AdIErAxIC5AVIAMABQBjALCCAdIANADQA8ANAqAMIAMADIBDAXIANAEQBcAfBZAiIANAGQA1AUBRAsIANAHQAmAUAgATIANAIIAtAZIANAIIBjA9IANAJQBVA4BLA0IANAKIBuBfIAUARQAyAuBOBBIAPANIDnDsIADADQAtAkAkAmIAaAbIAcAdQA4A3BMBBIBUBIIAxAsIEGENIAgAhIAuA1IAEBkg");
	this.shape_52.setTransform(1013.4,371);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2B868E").s().p("AfwUFI4OgMQgDgHgKAGQgLAFgDgIIANg6IARhFQAOg8AFgsQAEgiACgjQAFhTgEhyIgBgdIgIhvIgBgMQgCglgMg4IgEgTQgahtgvhhQgLgXgOgXQggg2gyg7QhBhMhEg2IgGgFQgVgQhHgrIgEgDQg7gig7gfIgMgGQgSgHg5gVIgMgDIhPgbIgLgEIkhhQIi6gmIjLg5Ii6gnIluhbIlAhuIgEgCQgYgMgigWIgDgCQhHgtg3guIgCgCQgZgXgshAIgBgBIgng9IAAgBIgHgXIAAgCQgJgggEggIAAgBQgGgpAMg6IAAgBIAOgxQADgQAGgTQAOgpAQgYIABgBQARgYAXgTIABgCIASgOIACAAQAOgBALgCIABAAIAMADIACAAQAXAGAtgGIAAAAIgcAVIgCACQgeAagJATIgBADQgGAQgKAyIgBADIgKAwIAAADIAbCTIACADIBEBhIADADIBKAgIAEACQAwAVBaAhIAFABICkAdIGXBbID8AdIErAyIC6AUIALABQBkALCCAdIAMADQA9ANAqANIAMADIBDAXIANAEQBbAgBaAhIAOAGQA0AVBQArIAOAHIBFAnIAOAIIAtAZIANAJQA5AiApAbIAOAJQBVA3BLA0IANAMIBsBgIAUASQA6A2BDA5IAOANIDiDxIADADQAqAhAmArQARAQAJAMIAbAfQA4A2BLBCIBUBKIAxAtIESEKIATASIA8BAIADBng");
	this.shape_53.setTransform(1013.4,371.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2B868E").s().p("AHoTPIALg5QAGgYAEgyIAFhDQADghACgkQAFhSgDhzIgBgcIgGhwIAAgMQgCglgNg4IgEgTQgZhsgxhhQgMgYgOgXQghg1gzg6QhGhOhEgwIgGgEQgUgOhJgsIgEgCQhAgng1gbIgMgGQgQgIg7gUIgMgEIhPgbIgLgEIkhhQIi6glIjLg5Ii7goIlzhcIk7htIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgWgshAIgBgCIgng9IgBgBIgGgYIAAgBQgJgggFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgYIABgBQARgYAWgUIABgBIATgOIACgBQANAAALgCIACAAIAMACIACAAQAXAHAtgHIgBABIgcAWIgCABQgeAagIAUIgBACQgGARgLAyIgBADIgJAvIAAADIAbCTIBGBkIADADIBKAgIAEACQAwAWBaAgIAFABIClAdIGPBaIEEAeIErAyIC6AUIALABQBkALCCAdIANADQA8AOAqAMIAMAEIBEAWIANAFQBbAfBZAiIAOAFQA0AWBRArIANAHIBGAnIANAIIAtAZIANAIQA6AjApAbIAOAJQBUA4BLAzIANAMIBrBiIATASQBDBBA3AvIAOANIDdD2IADADQAmAeApAxIAZAdIAaAfQA5A3BKBDIBUBMIAwAtIE4EMIA1BKIAABWIhPAAI4mACQARgKAMgrg");
	this.shape_54.setTransform(1013.3,371.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2B868E").s().p("AfwUJI4fgNQABgMAQg+IAUhLQAOg9AEgsIAFhGQAEhSgBhzIgEiYQgBgPgJgvIgJgxQgahrgyhjQgMgXgPgYQgig1g0g5QhKhPhFgpIgFgDQgVgMhKguIgEgCQhEgqgwgZIgMgFQgPgIg8gVIgMgEIhPgbIgKgDIkshTIiwgjIjLg5Ii7goIlvhbIlAhuIgEgBQgYgNgigVIgDgCQhIgtg3gvIgCgCQgZgWgrhAIgBgCIgng9IgBgBIgHgXIAAgBQgJgggEghIAAgBQgGgpAMg7IAOgyQADgPAGgUQAOgoARgZIABgBQARgYAWgTIABgBIATgPIABAAQAOAAALgCIACAAIAMACIABAAQAXAHAtgHIgBABIgcAWIgCABQgeAagIAUIgBADQgGARgLAxIgBADIgJAwIABADIAbCTIABADIBEBhIBOAiIAEACQAwAWBaAgIAFABIClAdIGYBbID7AdIEsAyIC6AUIAMABQBkALCCAeIAMADQA9ANApAMIANAEIBDAXIANAFQBbAfBZAiIAPAFQA0AWBQArIANAHIBGAnIANAIIAtAaIAOAIQA5AjApAaIAOAJQBVA4BLA0IAMAMIBpBkIATASQBLBKAsAnIAOAMIDXD8IADADQAiAbAsA1IAZAfIAaAfQA5A4BJBFIBTBMIAwAuIE6ELIBABFIADBXg");
	this.shape_55.setTransform(1013.4,372);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2B868E").s().p("AHST6IAchcQAehqAFhBQAIhgABisIgCiYQgBgkgNg5Qgahzg5htQgnhLhNhQQhOhQhFgjQgNgEhYg3QhUg1gugWQgQgIhIgZIhZgfIkshTIi5glIjLg5Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgYQgJghgFghQgFgpAMg7IANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgQANQgfAbgJAUQgGAQgLA2IgLAyIAcCWIBGBkIBOAjQAxAWBdAhICqAeIGQBaIEEAeIEsAyIC6AUQBoALCKAfQBFAQAuANIBPAaQBiAiBgAkQA4AWBbAxIBTAuIA6AiQBCAoAuAdQBcA9BRA4IB0BzQB5B5AbAWIDVEEQAeAZAvA6IAyBAQBnBnCdCTIGGFKIAABWg");
	this.shape_56.setTransform(1013.3,372.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2B868E").s().p("AlbRXIA1hQQA5hVAKgZQALgbAjhoIAihjQALgtAKg3QAVhugCgyQgDg2gShQQgPhCgOgoQgKgbgkgxIgjgsIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgZQgJgggFghQgFgqAMg6IANgyQADgPAHgUQANgpARgYQASgZAXgUIATgPQAPgBAMgCQACAAALADQAXAGAvgGQgOAJgQAOQgfAagJAVQgGAQgLA1IgLAzIAcCWIBGBkIBOAiQAxAWBdAiICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAZQBGANAvALIBPAQQBhAXBfAlQA4AVBbArIBSAoIA1AgIBrBEQBdA7BNA7IB4BGICgCCQAhAbBYA/IC0CWQAcAXAoAbQAkAZAGAFIDmDIIFUD6IAAAog");
	this.shape_57.setTransform(1013.1,354.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2B868E").s().p("Ak/QHQA+hQAKgZIBkjmQALgtAKg3QAVhugCgyQgDg2gShQQgPhCgOgoQgKgbgkgxIgjgsIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgZQgJgggFghQgFgqAMg6IANgyQADgPAHgUQANgpARgYQASgZAXgUIATgPQAPgBAMgCQACAAALADQAXAGAvgGQgOAJgQAOQgfAagJAVQgGAQgLA1IgLAzIAcCWIBGBkIBOAiQAxAWBdAiICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAZQBGANAvALIBPAQQBhAXBfAlQA4AVBbArIBSAoIA1AgIBrBEQBdA7BNA7IB4BGICgCCQAhAbBYA/IC0CWQAcAXAoAbQAkAZAGAFQAfAbDRCZIFKDwIAAAyMgm4AAKg");
	this.shape_58.setTransform(1013.1,353.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B868E").s().p("AlwP7QBVhRAQgWQAegrBai7QAIgoAIgyQAQhkgCgyQgDg6gNhMQgNhJgLghQgKgbgkgxIgjgsIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgZQgJgggFghQgFgqAMg6IANgyQADgPAHgUQANgpARgYQASgZAXgUIATgPQAPgBAMgCQACAAALADQAXAGAvgGQgOAJgQAOQgfAagJAVQgGAQgLA1IgLAzIAcCWIBGBkIBOAiQAxAWBdAiICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAZQBGANAvALIBPAQQBhAXBfAlQA4AVBbArIBSAoIA1AgIBrBEQBdA7BNA7IB4BGICgCCQAhAbBYA/IC0CWQAcAXAoAbQAkAZAGAFQAfAbDRCZIFKDcIAAAyMgn+AAKIBPhNg");
	this.shape_59.setTransform(1013.1,352.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2B868E").s().p("AmTP4QBlhNAZghQAsg6AvhSQAYgpAPgdQAIgoAIgyQAQhkgCgyQgDg6gNhMQgNhJgLghQgKgbgkgxIgjgsIiWhiIhkgoIhugeIiMgeIi0g8Ii6goIlthaIk/huQgZgNgkgXQhJgug4gwQgZgWgthCIgog+IgGgZQgJgggFghQgFgqAMg6IANgyQADgPAHgUQANgpARgYQASgZAXgUIATgPQAPgBAMgCQACAAALADQAXAGAvgGQgOAJgQAOQgfAagJAVQgGAQgLA1IgLAzIAcCWIBGBkIBOAiQAxAWBdAiICqAeIGQBaIEEAeIEsAyIC6AUQBoALCNAZQBGANAvALIBPAQQBhAXBfAlQA4AVBbArIBSAoIA1AgIBrBCQBdA9BNA7IB4BGICgCCQAhAbBYA/IC0CWQAcAXAoAbQAkAZAGAFQAfAbDbCPIFADIIAAA8MgowAAKQgBAABfhGg");
	this.shape_60.setTransform(1013.1,351.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2B868E").s().p("AkCRoQAYgVAjgiQAtgsAGgLIAihLQAQgoAEgeIAOhUIADgaIALhUIAKhNIABgDQAEgSACgkQABgugCg2QgDgsgHgxQgEgbgFgZQgIgmgNgeQgKgOgrhcIgDgEQgigwgbgYIgIgGIithfIhkglIj6g+Iiug4IjAgpIlohZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAAAIANgyQADgQAHgTQANgpARgYQASgZAXgUIATgPIABAAQAOgBAMgCQADAAAKADIABAAQAXAGAugGQgOAJgQAOQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBIAQIALADQBcAYBZAiIAQAHQA2AVBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA5BPA4IAHAEIBvBEIACACIApAiIB0BfIABABQAiAcBMBGIADACICzCMIAIAGQBFA3AeAeIAEAEQA/A+BaBEIAHAFQArAgAfAUIAFAEIFREEIAAAoQpGAIpLAGQr7AJkVAAQiWAAgJgDg");
	this.shape_61.setTransform(1013,356.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2B868E").s().p("AlcRUQAJgIAogVQAogVALgKIAxgtQAVgVAUgiIAng/QAcgxADgSQAShZAEgeIAKhNIABgDQAEgSACgkQABgugCg2QgDgsgHgxQgEgbgFgZQgIgmgNgeQgKgOgrhcIgDgEQgigwgbgYIgIgGIithfIhkglIj6g+Iiug4IjAgpIlohZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgVIgBgDQgJgfgFggIAAgCQgFgqAMg6IAAAAIANgyQADgQAHgTQANgpARgYQASgZAXgUIATgPIABAAQAOgBAMgCQADAAAKADIABAAQAXAGAugGQgOAJgQAOQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBIAQIALADQBcAYBZAiIAQAHQA2AVBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA5BPA4IAHAEIBvBEIACACIApAiIB0BfIABABQAiAcBMBGIADACICzCMIAvAnQAvAnANANIAEAEQAqApB8BQIBQA8IFKDmIAAAoQpcAIpiAGQsZAJkeAAQicAAgJgDg");
	this.shape_62.setTransform(1013,354.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B868E").s().p("AmsRFQAKgJAugOQA1gQAVgLQAUgLAhgeQAigeANgTQAIgMAkgpQAhgoADgRIAZg4QAZg3ACgTIAKhMIABgDQAEgTACgjQABgvgCg1QgDgsgHgxQgEgcgFgZQgIglgNgfQgKgOgrhbIgDgEQgigxgbgYIgIgGIitheIhkgmIj6g9Iiug4IjAgqIlohZIlAhuIgDgBQgYgNgigVIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgWIgBgDQgJgfgFgfIAAgDQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgQANQgfAbgJAUIAAABQgGAQgLA1IAAABIgLAxIAcCWIABABIBFBjIABABIBNAiIABABQAxAVBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBIARIALADQBcAYBZAiIAQAGQA2AWBNAjIBTAmIAEACIAyAeIADACIBnBCIAEADQBaA4BPA4IAHAEIBvBFIACACIApAhIB0BgIABABQAiAbBMBHIADACICzCLIA0AlQA0AlANANIC0B4QBRA9AJAJIEsDSIAAAoQpwAFp2AEQqgAEk/AAQkZAAgMgDg");
	this.shape_63.setTransform(1013,352.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2B868E").s().p("An8Q7QAKgJA9gTQBEgVAVgLQBog4AQgYIAngrQAcgeADgRIAdg4QAcg4ADgSQABgMAUg2QASg0ABgMIAFgyQAEghgBgUQgDgsgHgxQgEgcgFgZQgIglgNgfQgKgOgrhbIgDgEQgigxgbgYIgIgGIitheIhkgmIj6g9Iiug4IjAgqIlohZIlAhuIgDgBQgYgNgigVIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgWIgBgDQgJgfgFgfIAAgDQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgQANQgfAbgJAUIAAABQgGAQgLA1IAAABIgLAxIAcCWIABABIBFBjIABABIBNAiIABABQAxAVBcAhIACAAICoAeIACABIGOBZIADAAIEAAeIAEABIEtAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBIARIALADQBcAYBZAiIAQAGQA2AWBNAjIBTAmIAEACIAyAeIADACIBnBAIAEADQBaA6BPA4IAHAEIBvBFIACACIApAhIB0BgIABABQAiAbBMBHIADACICzCLIA5AlQA5AlANANICqBuQAcAVBSAxIEYDIIAAAoQqEAFqKAEQq1AElJAAQkiAAgMgDg");
	this.shape_64.setTransform(1013,351.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2B868E").s().p("AidQ/QAtgyAIgMQAUgcAXg/QAZhBACgiQACgOAGgeQAGgeABgOIAAgaIAFhWIAFhOIABgDIACg1QgBgxgFgyQgGgsgLgvQgGgbgIgZQgLgjgRgeQgSgXgthJIgEgEQglgpgggYIgIgFIizhSIhlgjIjeg4IjKg9IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrg/IgCgDIgmg7IgCgDIgFgWIgBgDQgIgfgFgfIAAgCQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQIAAAAQAPAAALgCQADgBALADIAAAAQAXAHAvgHQgOAKgQANIAAAAQgfAbgJAUIAAABQgGAQgMA0IAAABIgKAyIAcCWIAAABIBFBjIABABIBNAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBmALCIAYIAGABIBwAXIAGABIBHASIALADQBcAaBZAhIAQAHQA3AVBNAiIBUAkIADACIAyAeIAEACIBnBCIAEADICrBuIAHAEIBtBHIACACIAoAiIB1BgIABABQAhAbBMBGIADACICzCNIAIAGQA9AxAmAmIAEADQA/A/BZBEIAGAFQArAgAgAVIAFAEIFeEPIgBAuMgkEAAKQgBgHAmgpg");
	this.shape_65.setTransform(1013.5,356.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2B868E").s().p("AjZQ6QA+gkAMgQQAlg2AQgbQAjg7ACgeQABgPAKgzQAJgwAAgGQAAgLAKgfQAIgeABgSIAGhOIAAgDIADg1QgBgxgGgyQgGgsgKgvQgGgbgJgZQgKgjgRgeQgSgXguhJIgDgEQglgpgggYIgJgFIizhSIhlgjIjeg4IjKg9IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgCQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgPANIgBAAQgfAbgJAUIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGQBaIEDAeIExAzIC1ATIAFABQBmALCJAYIAGABIBvAXIAGABIBIASIALADQBcAaBZAhIAQAHQA3AVBMAiIBUAkIAEACIAyAeIADACIBnBCIAEADICrBuIAHAEIBtBHIACACIApAiIB1BgIABABQAhAbBMBGIADACICzCNIAHAGQAeAXCeB3QCcB1ARALIFAEEIAKAoMglUAAKQgBgGA5ggg");
	this.shape_66.setTransform(1013.5,355);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2B868E").s().p("AkpQmQBSgoAMgRQAFgIArgzQAhgmAJgXIAdg8QAVgrAAgHQAAgLAPgkQAOgjABgSQAJhwABgcIAAhiQgBhNgEgTQgGgbgJgZQgKgjgRgeQgSgXguhJIgDgEQglgpgggYIgJgFIizhSIhlgjIjeg4IjKg9IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgCQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgPANIgBAAQgfAbgJAUIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGQBaIEDAeIExAzIC1ATIAFABQBmALCJAYIAGABIBvAXIAGABIBIASIALADQBcAaBZAhIAQAHQA3AVBMAiIBUAkIAEACIAyAeIADACIBnBCIAEADICrBuIAHAEIBtBHIACACIApAiIB1BgIABABICeB4ICNBqQFnEKAVAOIEsDwIAKAoMgm4AAKQgBgGBNglg");
	this.shape_67.setTransform(1013.5,353.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2B868E").s().p("AmSQXQBcgoAMgRQAKgPAwgnQArgiAJgWQAFgOAngkQAkgiAAgGQAAgLAPgfQAOgeABgSQABgLAOhBQAPg/AAgLQAAgMAMhPQAMhHgEgSIgEgiQgDgXgDgJQgKgjgRgeQgSgXguhJIgDgEQglgpgggYIgJgFIizhSIhlgjIjeg4IjKg9IjAgpIlnhZIlAhuIgDgCQgYgMgigWIgEgCQhHgtg2gvIgDgCQgZgWgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgCQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQADgBAKADIABAAQAXAHAugHQgOAKgPANIgBAAQgfAbgJAUIAAABQgGAQgLA0IAAABIgLAyIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGQBaIEDAeIExAzIC1ATIAFABQBmALCJAYIAGABIBvAXIAGABIBIASIALADQBcAaBZAhIAQAHQA3AVBMAiIBUAkIAEACIAyAeIADACIBnBAIAEADICrBwIAHAEIBtBHIACACIApAiIB1BgIABABQAOALCfByICcBvQFTD2AVAOIEYDSIAKAyMgomAAKQgBgFBXgmg");
	this.shape_68.setTransform(1013,352);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2B868E").s().p("AP0R9QxTgCgcgIIArhGQAshLADgZQADgaAXhwQAUhpAAgOIAAgtIAAhEIADhOIAAgDIABg2QgCgxgHgxQgHgsgLguQgHgagKgZQgMgigTgeQgWgbgvhAIgEgEQgmglgigYIgKgFIi2hLIhlgiIjeg5IjJg7IjAgqIlohZIk/huIgEgBQgYgNgigVIgDgCQhHgtg3gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgFgfIAAgBQgFgqAMg6IAAAAIANgyQADgPAHgUQANgoARgZQASgZAXgUIATgPIABAAQAOgBAMgCQACAAALADIABAAQAWAGAvgGQgOAJgPAOIgBAAQgfAagJAVIAAAAQgGAQgLA1IAAABIgLAxIAAABIAcCVIABABIBFBjIABABIBMAiIABABQAxAVBcAhIACABICoAeIGPBZIEEAfIEwAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBHATIALADQBcAaBYAiIARAGICDA2IBVAlIADACIAyAeIAEACIBnBCIAEACQBZA5BTA0IAHAEIBsBJIACACIAoAhIB1BgIABABQAhAcBMBFIADADICzCMIAHAGQA6AvAqApIADAEQA/A+BZBEIAGAFQArAhAgAWIAEADIFeEQIACBTIltABIrigBg");
	this.shape_69.setTransform(1013.5,358);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2B868E").s().p("AkMRnIA9g5QBDg+AWgfQAWggAnheQAmhcABgWIANgxQAMgzABgVIADhNIAAgDIABg2QgCgygHgwQgFgtgNguQgHgagKgZQgMghgTgeQgWgbgvhBIgEgEQgmgkgigZIgKgEIi2hLIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIALADQBcAbBYAiIARAGICDA2IBVAkIADACIAyAeIAEACIBnBCIAEACQBZA5BTA1IAHAEIBsBIIACACIAoAiIB1BgIABABQAhAbBMBFIADADICzCNIAHAGQA6AuAqAqIADADQA/A/BZBEIAGAFQArAgAgAWIAEADIFeERIAMArQpKADpQABIpmABQpBAAgTgFg");
	this.shape_70.setTransform(1014,356.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2B868E").s().p("AmEROIBgg5QBmg+AWgfQAPgWA9hKQA1hDABgRIAZhfQAXhhABgQIAAgDIABg2QgCgygHgwQgFgtgNguQgHgagKgZQgMghgTgeQgWgbgvhBIgEgEQgmgkgigZIgKgEIi2hLIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIALADQBcAbBYAiIARAGICDA2IBVAkIADACIAyAeIAEACIBnBCIAEACQBZA5BTA1IAHAEIBsBIIACACIAoAiIB1BgIABABQAhAbBMBFIADADICzCNIAHAGIB6BkQAaAaAqAgIBSA+IGaEYIAUAyQpoADpuABIqFABQpeAAgTgFg");
	this.shape_71.setTransform(1014,353.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2B868E").s().p("AnUQ7IB0g0QB6g5AWgfQAMgSBAg6QA1gwABgQIAdg9QAeg+ABgRIAKhGIALhLQAMhFgCgTQgHgtgLguQgHgagKgZQgMghgTgeQgWgbgvhBIgEgEQgmgkgigZIgKgEIi2hLIhlgjIjeg4IjJg8IjAgpIlohZIk/huIgEgCQgYgMgigWIgDgCQhHgtg3gvIgCgCQgZgWgrhAIgCgDIgmg7IgBgDIgGgVIgBgDQgIgfgFggIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQIABAAQAOAAAMgCQACgBALADIABAAQAWAHAvgHQgOAKgPANIgBAAQgfAagJAVIAAABQgGAQgLA0IAAABIgLAyIAAAAIAcCWIABABIBFBjIABABIBMAhIABABQAxAWBcAhIACAAICoAeIGPBaIEEAeIEwAzIC1ATIAGABQBlAKCJAZIAGABQBCAMAuALIAGABIBHASIALADQBcAbBYAiIARAGICDA2IBVAkIADACIAyAeIAEACIBnBAIAEACQBZA7BTA1IAHAEIBsBIIACACIAoAiIB1BgIABABQAhAbBMBFIADADICzCNIAHAGQAnAfBxBFQAXAWA8AkQBHAqAaAUIFUDmIAKAyQp6AFp/AEQqTAElFAAQk0AAgNgDg");
	this.shape_72.setTransform(1013,351.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2B868E").s().p("AgIRvQAXgYADgGQAqhSAIgcQAWizgCgzIgEhqQgBgBgGhWIgGhrIAAgDIgCg1QgFg0gJgtQgKgtgRgsQgJgZgNgZQgNgfgWgdQgfgkgyguIgEgEQgpgbgngZIgKgEIkihgIjdg6IjKg5IjAgqIlohZIk/huIgDgBQgYgNgigVIgDgCQhIgtg2gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgEgfIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQQAOAAAMgCQADgBALADQAXAHAvgHQgOAKgQANIAAAAQgfAagJAVQgGAQgMA1IAAABIgKAyIAAAAIAcCVIAAABIBFBjIABABIBMAiIABABQAxAWBcAgIACABICoAeIACAAIGNBZIADABIEAAeIAEAAIEsAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBGAVIALADQBdAcBXAhIARAGICEA1IBVAjIAEACIAyAeIADACIBnBCIAEACQBZA6BWAxIAHAEIBqBLIACACIAoAhIB1BhIABABQAgAbBNBFIADADICyCNIAHAGQAyApAyAxIADADQA/A/BYBEIAGAFQArAhAfAXIAFADIFbESIgDBiMghkAAKIAggeg");
	this.shape_73.setTransform(1013.1,359.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2B868E").s().p("AiFRQQAygdADgFQAGgJAqgmQAmglACgGQAziCAJgyQAEgWAEghQADgigBgVQgBgBgDhZIgDhuIAAgDIgCg1QgFg0gJgtQgKgtgRgsQgJgZgNgZQgNgfgWgdQgfgkgyguIgEgEQgpgdgngXIgKgEIkihgIjdg6IjKg5IjAgqIlohZIk/huIgDgBQgYgNgigVIgDgCQhIgtg2gvIgCgCQgZgXgrg/IgCgDIgmg7IgBgDIgGgWIgBgDQgIgfgEgfIAAgBQgGgpAMg6IAAgBIAOgyQADgPAGgUQAOgoARgZQARgYAXgUIAUgQQAOAAAMgCQADgBALADQAXAHAvgHQgOAKgQANIAAAAQgfAagJAVQgGAQgMA1IAAABIgKAyIAAAAIAcCVIAAABIBFBjIABABIBMAiIABABQAxAWBcAgIACABICoAeIACAAIGNBZIADABIEAAeIAEAAIEsAyIC1ATIAGABQBlALCJAZIAGABQBCAMAuAKIAGABIBGAVIALADQBdAcBXAhIARAGICEA1IBVAjIAEACIAyAeIADACIBnBCIAEACQBZA4BWAzIAHAEIBqBLIACACIAoAhIB1BhIABABQAgAbBNBFIADADICyCNIAHAGQAyApAyAxIADADQA/A/BYBEIAGAFQArAhAfAXIAFADIFbESIgDAwMgj6AAKQAFgFA0gfg");
	this.shape_74.setTransform(1013.1,357);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2B868E").s().p("AlIRbQAFgFBMgaQBMgYADgFQAFgJA0gmQAzgmACgFIApgzQApg6AGgfIARhBQANgwAAgRIAGhQQAHhUAAgQIAAgDIgDg1QgEg0gKgtQgKgtgRgsQgJgZgMgZQgNgfgXgdQgfgkgxguIgFgEQgogdgngZIgLgEIkhheIjeg6IjKg5IjAgqIlnhZIk/huIgDgBQgZgNgigVIgDgCQhHgtg2gvIgDgCQgZgXgqg/IgCgDIgmg7IgCgDIgFgWIgBgDQgIgfgFgfIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgPANIgBAAQgfAagJAVQgGAQgLA1IAAABIgLAyIAAAAIAcCVIAAABIBFBjIABABIBNAiIABABQAxAWBcAgIACABICoAeIACAAIGNBZIADABIEAAeIAEAAIEsAyIC1ATIAFABQBmALCJAZIAGABQBBAMAuAKIAGABIBHAVIALADQBcAcBYAhIAQAGICFA1IBVAjIAEACIAyAeIADACIBnBCIAEACQBYA4BWAzIAHAEIBrBLIACACIAoAhIB0BhIABABQAhAbBNBFIADADICyCNIAHAGIBxBaQA8A8BaBGIBQA8IFUDwIAAAyg");
	this.shape_75.setTransform(1013,354.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2B868E").s().p("Al5QeQB0gdADgFQAFgJBIgmQBHgmACgFIAoglQApgpAJgWQAHgUAYg0QAagyALgSQAXh5AAgdIAAgDIgDg1QgEg0gKgtQgKgtgRgsQgJgZgMgZQgNgfgXgdQgfgkgxguIgFgEQgogdgngZIgLgEIkhheIjeg6IjKg5IjAgqIlnhZIk/huIgDgBQgZgNgigVIgDgCQhHgtg2gvIgDgCQgZgXgqg/IgCgDIgmg7IgCgDIgFgWIgBgDQgIgfgFgfIAAgBQgFgpAMg6IAAgBIANgyQADgPAHgUQANgoARgZQASgYAXgUIATgQQAPAAAMgCQACgBALADQAXAHAvgHQgOAKgPANIgBAAQgfAagJAVQgGAQgLA1IAAABIgLAyIAAAAIAcCVIAAABIBFBjIABABIBNAiIABABQAxAWBcAgIACABICoAeIACAAIGNBZIADABIEAAeIAEAAIEsAyIC1ATIAFABQBmALCJAZIAGABQBBAMAuAKIAGABIBHAVIALADQBcAcBYAhIAQAGICFA1IBVAjIAEACIAyAeIADACIBnBAIAEACQBYA6BWAzIAHAEIBrBLIACACIAoAhIB0BhIABABQAhAbBNBFIADADICyCNIAHAGIBxBaQAYAYAxAiQBFAwASAOIBaA8IFADIIAAAeMgowAAUQAFgFB0gfg");
	this.shape_76.setTransform(1013,352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},4).to({state:[{t:this.shape_52}]},2).to({state:[{t:this.shape_53}]},2).to({state:[{t:this.shape_54}]},2).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},2).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},5).to({state:[{t:this.shape_42}]},6).to({state:[{t:this.shape_43}]},6).to({state:[{t:this.shape_44}]},6).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},48).to({state:[{t:this.shape_57}]},24).to({state:[{t:this.shape_58}]},24).to({state:[{t:this.shape_59}]},24).to({state:[{t:this.shape_60}]},24).to({state:[{t:this.shape_59}]},40).to({state:[{t:this.shape_58}]},58).to({state:[{t:this.shape_57}]},59).to({state:[{t:this.shape_40}]},51).to({state:[{t:this.shape_41}]},8).to({state:[{t:this.shape_41}]},48).to({state:[{t:this.shape_61}]},24).to({state:[{t:this.shape_62}]},24).to({state:[{t:this.shape_63}]},24).to({state:[{t:this.shape_64}]},24).to({state:[{t:this.shape_63}]},40).to({state:[{t:this.shape_62}]},58).to({state:[{t:this.shape_61}]},59).to({state:[{t:this.shape_41}]},51).to({state:[{t:this.shape_42}]},8).to({state:[{t:this.shape_42}]},48).to({state:[{t:this.shape_65}]},24).to({state:[{t:this.shape_66}]},24).to({state:[{t:this.shape_67}]},24).to({state:[{t:this.shape_68}]},24).to({state:[{t:this.shape_67}]},40).to({state:[{t:this.shape_66}]},58).to({state:[{t:this.shape_65}]},59).to({state:[{t:this.shape_42}]},51).to({state:[{t:this.shape_43}]},8).to({state:[{t:this.shape_43}]},48).to({state:[{t:this.shape_69}]},24).to({state:[{t:this.shape_70}]},24).to({state:[{t:this.shape_71}]},24).to({state:[{t:this.shape_72}]},24).to({state:[{t:this.shape_71}]},40).to({state:[{t:this.shape_70}]},58).to({state:[{t:this.shape_69}]},59).to({state:[{t:this.shape_43}]},51).to({state:[{t:this.shape_44}]},8).to({state:[{t:this.shape_44}]},48).to({state:[{t:this.shape_73}]},24).to({state:[{t:this.shape_74}]},24).to({state:[{t:this.shape_75}]},24).to({state:[{t:this.shape_76}]},24).to({state:[{t:this.shape_75}]},40).to({state:[{t:this.shape_74}]},58).to({state:[{t:this.shape_73}]},59).to({state:[{t:this.shape_44}]},51).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).to({_off:true},1).wait(23).to({_off:false},0).to({_off:true},5).wait(19).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(1440));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(1).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},6).wait(373).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(1080));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(2).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},6).wait(727).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(720));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(3).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},6).wait(1081).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).to({_off:true},8).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(4).to({_off:false},0).to({_off:true},1).wait(42).to({_off:false},0).to({_off:true},1).wait(1440).to({_off:false},0).wait(48).to({_off:true},24).wait(280).to({_off:false},0).wait(8));

	// roArrow1
	this.instance_1 = new lib.SymRunoffArrow5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126,355.5,1,1,0,0,0,61,6.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.SymRunoffArrow4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(126,356,1,1,0,0,0,61,6.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.SymRunoffArrow3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(105,351,1,1,0,0,0,61,6.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.SymRunoffArrow2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(105,351.5,1,1,0,0,0,61,6.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.SymRunoffArrow1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(105,349,1,1,0,0,0,61,6.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).wait(1).to({x:130.8,y:356},0).wait(1).to({x:135.5,y:356.6},0).wait(1).to({x:140.3,y:357.1},0).wait(1).to({x:145.1,y:357.7},0).wait(1).to({x:149.8,y:358.2},0).wait(1).to({x:154.6,y:358.7},0).wait(1).to({x:159.4,y:359.3},0).wait(1).to({x:164.2,y:359.8},0).wait(1).to({x:168.9,y:360.3},0).wait(1).to({x:173.7,y:360.9},0).wait(1).to({x:178.5,y:361.4},0).wait(1).to({x:183.2,y:362},0).wait(1).to({x:188,y:362.5},0).wait(1).to({x:192.8,y:363},0).wait(1).to({x:197.5,y:363.6},0).wait(1).to({x:202.3,y:364.1},0).wait(1).to({x:207.1,y:364.7},0).wait(1).to({x:211.8,y:365.2},0).wait(1).to({x:216.6,y:365.7},0).wait(1).to({x:221.4,y:366.3},0).wait(1).to({x:226.2,y:366.8},0).wait(1).to({x:230.9,y:367.3},0).wait(1).to({x:235.7,y:367.9},0).wait(1).to({x:240.5,y:368.4},0).wait(1).to({x:245.2,y:369},0).wait(1).to({x:250,y:369.5},0).wait(1).to({x:254.8,y:370},0).wait(1).to({x:259.5,y:370.6},0).wait(1).to({x:264.3,y:371.1},0).wait(1).to({x:269.1,y:371.7},0).wait(1).to({x:273.8,y:372.2},0).wait(1).to({x:278.6,y:372.7},0).wait(1).to({x:283.4,y:373.3},0).wait(1).to({x:288.2,y:373.8},0).wait(1).to({x:292.9,y:374.3},0).wait(1).to({x:297.7,y:374.9},0).wait(1).to({x:302.5,y:375.4},0).wait(1).to({x:307.2,y:376},0).wait(1).to({x:312,y:376.5},0).wait(1).to({x:316.8,y:377},0).wait(1).to({x:321.6,y:377.5},0).wait(1).to({x:326.5,y:378},0).wait(1).to({x:331.3,y:378.5},0).wait(1).to({x:336.1,y:379},0).wait(1).to({x:340.9,y:379.5},0).wait(1).to({x:345.7,y:380},0).wait(1).to({x:350.6,y:380.5},0).wait(1).to({x:355.4,y:381},0).wait(1).to({x:360.2,y:381.5},0).wait(1).to({x:365,y:382},0).wait(1).to({x:369.8,y:382.5},0).wait(1).to({x:374.7,y:383},0).wait(1).to({x:379.5,y:383.5},0).wait(1).to({x:384.3,y:384},0).wait(1).to({x:389.1,y:384.5},0).wait(1).to({x:393.9,y:385},0).wait(1).to({x:398.8,y:385.5},0).wait(1).to({x:403.6,y:386},0).wait(1).to({x:408.4,y:386.5},0).wait(1).to({x:413.2,y:387},0).wait(1).to({x:418.1,y:387.5},0).wait(1).to({x:422.9,y:388},0).wait(1).to({x:427.7,y:388.5},0).wait(1).to({x:432.5,y:389},0).wait(1).to({x:437.3,y:389.5},0).wait(1).to({x:442.2,y:390},0).wait(1).to({x:447,y:390.5},0).wait(1).to({x:451.8,y:391},0).wait(1).to({x:456.6,y:391.5},0).wait(1).to({x:461.4,y:392},0).wait(1).to({x:466.3,y:392.5},0).wait(1).to({x:471.1,y:393},0).wait(1).to({x:475.9,y:393.5},0).wait(1).to({x:480.7,y:394},0).wait(1).to({x:485.5,y:394.5},0).wait(1).to({x:490.4,y:395},0).wait(1).to({x:495.2,y:395.5},0).wait(1).to({x:500,y:396},0).wait(1).to({x:504.8,y:396.5},0).wait(1).to({x:509.5,y:397},0).wait(1).to({x:514.3,y:397.5},0).wait(1).to({x:519.1,y:397.9},0).wait(1).to({x:523.8,y:398.4},0).wait(1).to({x:528.6,y:398.9},0).wait(1).to({x:533.4,y:399.4},0).wait(1).to({x:538.2,y:399.9},0).wait(1).to({x:542.9,y:400.4},0).wait(1).to({x:547.7,y:400.9},0).wait(1).to({x:552.5,y:401.4},0).wait(1).to({x:557.2,y:401.8},0).wait(1).to({x:562,y:402.3},0).wait(1).to({x:566.8,y:402.8},0).wait(1).to({x:571.5,y:403.3},0).wait(1).to({x:576.3,y:403.8},0).wait(1).to({x:581.1,y:404.3},0).wait(1).to({x:585.8,y:404.8},0).wait(1).to({x:590.6,y:405.3},0).wait(1).to({x:595.4,y:405.7},0).wait(1).to({x:600.2,y:406.2},0).wait(1).to({x:604.9,y:406.7},0).wait(1).to({x:609.7,y:407.2},0).wait(1).to({x:614.5,y:407.7},0).wait(1).to({x:619.2,y:408.2},0).wait(1).to({x:624,y:408.7},0).wait(1).to({x:628.8,y:409.2},0).wait(1).to({x:633.5,y:409.6},0).wait(1).to({x:638.3,y:410.1},0).wait(1).to({x:643.1,y:410.6},0).wait(1).to({x:647.8,y:411.1},0).wait(1).to({x:652.6,y:411.6},0).wait(1).to({x:657.4,y:412.1},0).wait(1).to({x:662.2,y:412.6},0).wait(1).to({x:666.9,y:413.1},0).wait(1).to({x:671.7,y:413.5},0).wait(1).to({x:676.5,y:414},0).wait(1).to({x:681.2,y:414.5},0).wait(1).to({x:686,y:415},0).wait(1).to({x:690,y:415.5},0).wait(1).to({x:694.1,y:415.9},0).wait(1).to({x:698.1,y:416.4},0).wait(1).to({x:702.1,y:416.8},0).wait(1).to({x:706.1,y:417.3},0).wait(1).to({x:710.2,y:417.8},0).wait(1).to({x:714.2,y:418.2},0).wait(1).to({x:718.2,y:418.7},0).wait(1).to({x:722.2,y:419.2},0).wait(1).to({x:726.3,y:419.6},0).wait(1).to({x:730.3,y:420.1},0).wait(1).to({x:734.3,y:420.5},0).wait(1).to({x:738.3,y:421},0).wait(1).to({x:742.4,y:421.5},0).wait(1).to({x:746.4,y:421.9},0).wait(1).to({x:750.4,y:422.4},0).wait(1).to({x:754.4,y:422.8},0).wait(1).to({x:758.5,y:423.3},0).wait(1).to({x:762.5,y:423.8},0).wait(1).to({x:766.5,y:424.2},0).wait(1).to({x:770.5,y:424.7},0).wait(1).to({x:774.6,y:425.2},0).wait(1).to({x:778.6,y:425.6},0).wait(1).to({x:782.6,y:426.1},0).wait(1).to({x:786.6,y:426.5},0).wait(1).to({x:790.7,y:427},0).wait(1).to({x:794.7,y:427.5},0).wait(1).to({x:798.7,y:427.9},0).wait(1).to({x:802.7,y:428.4},0).wait(1).to({x:806.8,y:428.8},0).wait(1).to({x:810.8,y:429.3},0).wait(1).to({x:814.8,y:429.8},0).wait(1).to({x:818.8,y:430.2},0).wait(1).to({x:822.9,y:430.7},0).wait(1).to({x:826.9,y:431.2},0).wait(1).to({x:830.9,y:431.6},0).wait(1).to({x:834.9,y:432.1},0).wait(1).to({x:839,y:432.5},0).wait(1).to({x:843,y:433},0).wait(1).to({regX:60.5,regY:5.6,scaleX:0.91,scaleY:0.87,skewX:11,skewY:10.8,x:947.9,y:454.4},0).wait(1).to({x:951.9,y:455.7},0).wait(1).to({x:955.9,y:457},0).wait(1).to({x:959.8,y:458.3},0).wait(1).to({x:963.8,y:459.5},0).wait(1).to({x:967.8,y:460.8},0).wait(1).to({x:971.8,y:462.1},0).wait(1).to({x:975.8,y:463.4},0).wait(1).to({x:979.8,y:464.6},0).wait(1).to({x:983.7,y:465.9},0).wait(1).to({x:987.7,y:467.2},0).wait(1).to({x:991.7,y:468.5},0).wait(1).to({x:995.7,y:469.7},0).wait(1).to({x:999.7,y:471},0).wait(1).to({x:1003.6,y:472.3},0).wait(1).to({x:1007.6,y:473.5},0).wait(1).to({x:1011.6,y:474.8},0).wait(1).to({x:1015.6,y:476.1},0).wait(1).to({x:1019.6,y:477.4},0).wait(1).to({x:1023.6,y:478.6},0).wait(1).to({x:1027.5,y:479.9},0).wait(1).to({x:1031.5,y:481.2},0).wait(1).to({x:1035.5,y:482.5},0).wait(1).to({x:1039.5,y:483.7},0).wait(1).to({x:1043.5,y:485},0).wait(1).to({x:1047.5,y:486.3},0).wait(1).to({x:1051.4,y:487.5},0).wait(1).to({x:1055.4,y:488.8},0).wait(1).to({x:1059.4,y:490.1},0).wait(1).to({x:1063.4,y:491.4},0).wait(1).to({x:1067.4,y:492.6},0).wait(1).to({x:1071.3,y:493.9},0).wait(1).to({x:1075.3,y:495.2},0).wait(1).to({x:1079.3,y:496.5},0).wait(1).to({x:1083.3,y:497.7},0).wait(1).to({x:1087.3,y:499},0).wait(1).to({x:1091.3,y:500.3},0).wait(1).to({x:1095.2,y:501.6},0).wait(1).to({x:1099.2,y:502.8},0).to({_off:true},1).wait(1460));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(552).to({_off:false},0).wait(1).to({x:130.8,y:356.6},0).wait(1).to({x:135.5,y:357.1},0).wait(1).to({x:140.3,y:357.7},0).wait(1).to({x:145.1,y:358.2},0).wait(1).to({x:149.8,y:358.8},0).wait(1).to({x:154.6,y:359.3},0).wait(1).to({x:159.4,y:359.9},0).wait(1).to({x:164.2,y:360.4},0).wait(1).to({x:168.9,y:361},0).wait(1).to({x:173.7,y:361.5},0).wait(1).to({x:178.5,y:362.1},0).wait(1).to({x:183.2,y:362.6},0).wait(1).to({x:188,y:363.2},0).wait(1).to({x:192.8,y:363.7},0).wait(1).to({x:197.5,y:364.3},0).wait(1).to({x:202.3,y:364.8},0).wait(1).to({x:207.1,y:365.4},0).wait(1).to({x:211.8,y:365.9},0).wait(1).to({x:216.6,y:366.5},0).wait(1).to({x:221.4,y:367},0).wait(1).to({x:226.2,y:367.6},0).wait(1).to({x:230.9,y:368.1},0).wait(1).to({x:235.7,y:368.7},0).wait(1).to({x:240.5,y:369.2},0).wait(1).to({x:245.2,y:369.8},0).wait(1).to({x:250,y:370.3},0).wait(1).to({x:254.8,y:370.9},0).wait(1).to({x:259.5,y:371.4},0).wait(1).to({x:264.3,y:372},0).wait(1).to({x:269.1,y:372.5},0).wait(1).to({x:273.8,y:373.1},0).wait(1).to({x:278.6,y:373.6},0).wait(1).to({x:283.4,y:374.2},0).wait(1).to({x:288.2,y:374.7},0).wait(1).to({x:292.9,y:375.3},0).wait(1).to({x:297.7,y:375.8},0).wait(1).to({x:302.5,y:376.4},0).wait(1).to({x:307.2,y:376.9},0).wait(1).to({x:312,y:377.5},0).wait(1).to({x:316.8,y:378},0).wait(1).to({x:321.6,y:378.5},0).wait(1).to({x:326.5,y:379},0).wait(1).to({x:331.3,y:379.6},0).wait(1).to({x:336.1,y:380.1},0).wait(1).to({x:340.9,y:380.6},0).wait(1).to({x:345.7,y:381.1},0).wait(1).to({x:350.6,y:381.6},0).wait(1).to({x:355.4,y:382.1},0).wait(1).to({x:360.2,y:382.6},0).wait(1).to({x:365,y:383.1},0).wait(1).to({x:369.8,y:383.7},0).wait(1).to({x:374.7,y:384.2},0).wait(1).to({x:379.5,y:384.7},0).wait(1).to({x:384.3,y:385.2},0).wait(1).to({x:389.1,y:385.7},0).wait(1).to({x:393.9,y:386.2},0).wait(1).to({x:398.8,y:386.7},0).wait(1).to({x:403.6,y:387.2},0).wait(1).to({x:408.4,y:387.8},0).wait(1).to({x:413.2,y:388.3},0).wait(1).to({x:418.1,y:388.8},0).wait(1).to({x:422.9,y:389.3},0).wait(1).to({x:427.7,y:389.8},0).wait(1).to({x:432.5,y:390.3},0).wait(1).to({x:437.3,y:390.8},0).wait(1).to({x:442.2,y:391.3},0).wait(1).to({x:447,y:391.9},0).wait(1).to({x:451.8,y:392.4},0).wait(1).to({x:456.6,y:392.9},0).wait(1).to({x:461.4,y:393.4},0).wait(1).to({x:466.3,y:393.9},0).wait(1).to({x:471.1,y:394.4},0).wait(1).to({x:475.9,y:394.9},0).wait(1).to({x:480.7,y:395.4},0).wait(1).to({x:485.5,y:396},0).wait(1).to({x:490.4,y:396.5},0).wait(1).to({x:495.2,y:397},0).wait(1).to({x:500,y:397.5},0).wait(1).to({x:504.8,y:398},0).wait(1).to({x:509.5,y:398.4},0).wait(1).to({x:514.3,y:398.9},0).wait(1).to({x:519.1,y:399.3},0).wait(1).to({x:523.8,y:399.8},0).wait(1).to({x:528.6,y:400.3},0).wait(1).to({x:533.4,y:400.7},0).wait(1).to({x:538.2,y:401.2},0).wait(1).to({x:542.9,y:401.7},0).wait(1).to({x:547.7,y:402.1},0).wait(1).to({x:552.5,y:402.6},0).wait(1).to({x:557.2,y:403},0).wait(1).to({x:562,y:403.5},0).wait(1).to({x:566.8,y:404},0).wait(1).to({x:571.5,y:404.4},0).wait(1).to({x:576.3,y:404.9},0).wait(1).to({x:581.1,y:405.3},0).wait(1).to({x:585.8,y:405.8},0).wait(1).to({x:590.6,y:406.3},0).wait(1).to({x:595.4,y:406.7},0).wait(1).to({x:600.2,y:407.2},0).wait(1).to({x:604.9,y:407.7},0).wait(1).to({x:609.7,y:408.1},0).wait(1).to({x:614.5,y:408.6},0).wait(1).to({x:619.2,y:409},0).wait(1).to({x:624,y:409.5},0).wait(1).to({x:628.8,y:410},0).wait(1).to({x:633.5,y:410.4},0).wait(1).to({x:638.3,y:410.9},0).wait(1).to({x:643.1,y:411.3},0).wait(1).to({x:647.8,y:411.8},0).wait(1).to({x:652.6,y:412.3},0).wait(1).to({x:657.4,y:412.7},0).wait(1).to({x:662.2,y:413.2},0).wait(1).to({x:666.9,y:413.7},0).wait(1).to({x:671.7,y:414.1},0).wait(1).to({x:676.5,y:414.6},0).wait(1).to({x:681.2,y:415},0).wait(1).to({x:686,y:415.5},0).wait(1).to({x:690.1,y:416},0).wait(1).to({x:694.2,y:416.5},0).wait(1).to({x:698.3,y:417},0).wait(1).to({x:702.4,y:417.4},0).wait(1).to({x:706.5,y:417.9},0).wait(1).to({x:710.6,y:418.4},0).wait(1).to({x:714.7,y:418.9},0).wait(1).to({x:718.8,y:419.4},0).wait(1).to({x:722.9,y:419.9},0).wait(1).to({x:727,y:420.4},0).wait(1).to({x:731.1,y:420.9},0).wait(1).to({x:735.2,y:421.3},0).wait(1).to({x:739.3,y:421.8},0).wait(1).to({x:743.4,y:422.3},0).wait(1).to({x:747.5,y:422.8},0).wait(1).to({x:751.6,y:423.3},0).wait(1).to({x:755.7,y:423.8},0).wait(1).to({x:759.8,y:424.3},0).wait(1).to({x:763.9,y:424.8},0).wait(1).to({x:768.1,y:425.2},0).wait(1).to({x:772.2,y:425.7},0).wait(1).to({x:776.3,y:426.2},0).wait(1).to({x:780.4,y:426.7},0).wait(1).to({x:784.5,y:427.2},0).wait(1).to({x:788.6,y:427.7},0).wait(1).to({x:792.7,y:428.2},0).wait(1).to({x:796.8,y:428.7},0).wait(1).to({x:800.9,y:429.1},0).wait(1).to({x:805,y:429.6},0).wait(1).to({x:809.1,y:430.1},0).wait(1).to({x:813.2,y:430.6},0).wait(1).to({x:817.3,y:431.1},0).wait(1).to({x:821.4,y:431.6},0).wait(1).to({x:825.5,y:432.1},0).wait(1).to({x:829.6,y:432.6},0).wait(1).to({x:833.7,y:433},0).wait(1).to({x:837.8,y:433.5},0).wait(1).to({x:841.9,y:434},0).wait(1).to({x:846,y:434.5},0).wait(1).to({regX:60.9,regY:5.8,scaleX:0.9,scaleY:0.83,skewX:12.8,skewY:10.8,x:954.3,y:456.7},0).wait(1).to({regX:61,regY:5.9,x:958.5,y:458.1},0).wait(1).to({x:962.7,y:459.4},0).wait(1).to({x:966.9,y:460.7},0).wait(1).to({x:971.1,y:462.1},0).wait(1).to({x:975.3,y:463.4},0).wait(1).to({x:979.5,y:464.7},0).wait(1).to({x:983.7,y:466},0).wait(1).to({x:987.9,y:467.3},0).wait(1).to({x:992.1,y:468.6},0).wait(1).to({x:996.2,y:469.9},0).wait(1).to({x:1000.4,y:471.3},0).wait(1).to({x:1004.6,y:472.6},0).wait(1).to({x:1008.8,y:473.9},0).wait(1).to({x:1013,y:475.2},0).wait(1).to({x:1017.2,y:476.5},0).wait(1).to({x:1021.4,y:477.8},0).wait(1).to({x:1025.6,y:479.1},0).wait(1).to({x:1029.8,y:480.5},0).wait(1).to({x:1034,y:481.8},0).wait(1).to({x:1038.1,y:483.1},0).wait(1).to({x:1042.3,y:484.4},0).wait(1).to({x:1046.5,y:485.7},0).wait(1).to({x:1050.7,y:487},0).wait(1).to({x:1054.9,y:488.3},0).wait(1).to({x:1059.1,y:489.7},0).wait(1).to({x:1063.3,y:491},0).wait(1).to({x:1067.5,y:492.3},0).wait(1).to({x:1071.7,y:493.6},0).wait(1).to({x:1075.9,y:494.9},0).wait(1).to({x:1080,y:496.2},0).wait(1).to({x:1084.2,y:497.5},0).wait(1).to({x:1088.4,y:498.9},0).wait(1).to({x:1092.6,y:500.2},0).wait(1).to({x:1096.8,y:501.5},0).wait(1).to({x:1101,y:502.8},0).wait(1).to({x:1105.2,y:504.1},0).wait(1).to({x:1109.4,y:505.4},0).wait(1).to({x:1113.6,y:506.7},0).to({_off:true},1).wait(1100));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(912).to({_off:false},0).wait(1).to({x:109.8,y:351.5},0).wait(1).to({x:114.5,y:352.1},0).wait(1).to({x:119.3,y:352.6},0).wait(1).to({x:124.1,y:353.1},0).wait(1).to({x:128.8,y:353.6},0).wait(1).to({x:133.6,y:354.2},0).wait(1).to({x:138.4,y:354.7},0).wait(1).to({x:143.2,y:355.2},0).wait(1).to({x:147.9,y:355.7},0).wait(1).to({x:152.7,y:356.3},0).wait(1).to({x:157.5,y:356.8},0).wait(1).to({x:162.2,y:357.3},0).wait(1).to({x:167,y:357.8},0).wait(1).to({x:171.8,y:358.4},0).wait(1).to({x:176.5,y:358.9},0).wait(1).to({x:181.3,y:359.4},0).wait(1).to({x:186.1,y:359.9},0).wait(1).to({x:190.8,y:360.5},0).wait(1).to({x:195.6,y:361},0).wait(1).to({x:200.4,y:361.5},0).wait(1).to({x:205.2,y:362},0).wait(1).to({x:209.9,y:362.6},0).wait(1).to({x:214.7,y:363.1},0).wait(1).to({x:219.5,y:363.6},0).wait(1).to({x:224.2,y:364.1},0).wait(1).to({x:229,y:364.7},0).wait(1).to({x:233.8,y:365.2},0).wait(1).to({x:238.5,y:365.7},0).wait(1).to({x:243.3,y:366.2},0).wait(1).to({x:248.1,y:366.8},0).wait(1).to({x:252.8,y:367.3},0).wait(1).to({x:257.6,y:367.8},0).wait(1).to({x:262.4,y:368.3},0).wait(1).to({x:267.2,y:368.9},0).wait(1).to({x:271.9,y:369.4},0).wait(1).to({x:276.7,y:369.9},0).wait(1).to({x:281.5,y:370.4},0).wait(1).to({x:286.2,y:371},0).wait(1).to({x:291,y:371.5},0).wait(1).to({x:295.8,y:372},0).wait(1).to({x:300.6,y:372.6},0).wait(1).to({x:305.5,y:373.1},0).wait(1).to({x:310.3,y:373.7},0).wait(1).to({x:315.1,y:374.2},0).wait(1).to({x:319.9,y:374.7},0).wait(1).to({x:324.7,y:375.3},0).wait(1).to({x:329.6,y:375.8},0).wait(1).to({x:334.4,y:376.3},0).wait(1).to({x:339.2,y:376.9},0).wait(1).to({x:344,y:377.4},0).wait(1).to({x:348.8,y:378},0).wait(1).to({x:353.7,y:378.5},0).wait(1).to({x:358.5,y:379},0).wait(1).to({x:363.3,y:379.6},0).wait(1).to({x:368.1,y:380.1},0).wait(1).to({x:372.9,y:380.7},0).wait(1).to({x:377.8,y:381.2},0).wait(1).to({x:382.6,y:381.7},0).wait(1).to({x:387.4,y:382.3},0).wait(1).to({x:392.2,y:382.8},0).wait(1).to({x:397.1,y:383.3},0).wait(1).to({x:401.9,y:383.9},0).wait(1).to({x:406.7,y:384.4},0).wait(1).to({x:411.5,y:385},0).wait(1).to({x:416.3,y:385.5},0).wait(1).to({x:421.2,y:386},0).wait(1).to({x:426,y:386.6},0).wait(1).to({x:430.8,y:387.1},0).wait(1).to({x:435.6,y:387.7},0).wait(1).to({x:440.4,y:388.2},0).wait(1).to({x:445.3,y:388.7},0).wait(1).to({x:450.1,y:389.3},0).wait(1).to({x:454.9,y:389.8},0).wait(1).to({x:459.7,y:390.3},0).wait(1).to({x:464.5,y:390.9},0).wait(1).to({x:469.4,y:391.4},0).wait(1).to({x:474.2,y:392},0).wait(1).to({x:479,y:392.5},0).wait(1).to({x:483.8,y:393},0).wait(1).to({x:488.5,y:393.5},0).wait(1).to({x:493.3,y:394},0).wait(1).to({x:498.1,y:394.5},0).wait(1).to({x:502.8,y:395},0).wait(1).to({x:507.6,y:395.5},0).wait(1).to({x:512.4,y:396},0).wait(1).to({x:517.2,y:396.5},0).wait(1).to({x:521.9,y:397},0).wait(1).to({x:526.7,y:397.5},0).wait(1).to({x:531.5,y:398},0).wait(1).to({x:536.2,y:398.5},0).wait(1).to({x:541,y:399},0).wait(1).to({x:545.8,y:399.5},0).wait(1).to({x:550.5,y:400},0).wait(1).to({x:555.3,y:400.5},0).wait(1).to({x:560.1,y:401},0).wait(1).to({x:564.8,y:401.5},0).wait(1).to({x:569.6,y:402},0).wait(1).to({x:574.4,y:402.5},0).wait(1).to({x:579.2,y:403},0).wait(1).to({x:583.9,y:403.5},0).wait(1).to({x:588.7,y:404},0).wait(1).to({x:593.5,y:404.5},0).wait(1).to({x:598.2,y:405},0).wait(1).to({x:603,y:405.5},0).wait(1).to({x:607.8,y:406},0).wait(1).to({x:612.5,y:406.5},0).wait(1).to({x:617.3,y:407},0).wait(1).to({x:622.1,y:407.5},0).wait(1).to({x:626.8,y:408},0).wait(1).to({x:631.6,y:408.5},0).wait(1).to({x:636.4,y:409},0).wait(1).to({x:641.2,y:409.5},0).wait(1).to({x:645.9,y:410},0).wait(1).to({x:650.7,y:410.5},0).wait(1).to({x:655.5,y:411},0).wait(1).to({x:660.2,y:411.5},0).wait(1).to({x:665,y:412},0).wait(1).to({x:669.6,y:412.5},0).wait(1).to({x:674.2,y:413},0).wait(1).to({x:678.8,y:413.5},0).wait(1).to({x:683.5,y:414.1},0).wait(1).to({x:688.1,y:414.6},0).wait(1).to({x:692.7,y:415.1},0).wait(1).to({x:697.3,y:415.6},0).wait(1).to({x:701.9,y:416.1},0).wait(1).to({x:706.5,y:416.6},0).wait(1).to({x:711.2,y:417.1},0).wait(1).to({x:715.8,y:417.6},0).wait(1).to({x:720.4,y:418.2},0).wait(1).to({x:725,y:418.7},0).wait(1).to({x:729.6,y:419.2},0).wait(1).to({x:734.2,y:419.7},0).wait(1).to({x:738.8,y:420.2},0).wait(1).to({x:743.5,y:420.7},0).wait(1).to({x:748.1,y:421.2},0).wait(1).to({x:752.7,y:421.7},0).wait(1).to({x:757.3,y:422.3},0).wait(1).to({x:761.9,y:422.8},0).wait(1).to({x:766.5,y:423.3},0).wait(1).to({x:771.2,y:423.8},0).wait(1).to({x:775.8,y:424.3},0).wait(1).to({x:780.4,y:424.8},0).wait(1).to({x:785,y:425.3},0).wait(1).to({x:789.6,y:425.8},0).wait(1).to({x:794.2,y:426.4},0).wait(1).to({x:798.8,y:426.9},0).wait(1).to({x:803.5,y:427.4},0).wait(1).to({x:808.1,y:427.9},0).wait(1).to({x:812.7,y:428.4},0).wait(1).to({x:817.3,y:428.9},0).wait(1).to({x:821.9,y:429.4},0).wait(1).to({x:826.5,y:429.9},0).wait(1).to({x:831.2,y:430.5},0).wait(1).to({x:835.8,y:431},0).wait(1).to({x:840.4,y:431.5},0).wait(1).to({x:845,y:432},0).wait(1).to({regX:61.1,scaleX:0.9,scaleY:0.75,skewX:16.6,skewY:11.1,x:949.4,y:454.8},0).wait(1).to({x:953.6,y:456.2},0).wait(1).to({x:957.8,y:457.5},0).wait(1).to({x:961.9,y:458.9},0).wait(1).to({x:966.1,y:460.2},0).wait(1).to({x:970.3,y:461.6},0).wait(1).to({x:974.5,y:462.9},0).wait(1).to({x:978.7,y:464.2},0).wait(1).to({x:982.8,y:465.6},0).wait(1).to({x:987,y:466.9},0).wait(1).to({x:991.2,y:468.3},0).wait(1).to({x:995.4,y:469.6},0).wait(1).to({x:999.6,y:470.9},0).wait(1).to({x:1003.7,y:472.3},0).wait(1).to({x:1007.9,y:473.6},0).wait(1).to({x:1012.1,y:475},0).wait(1).to({x:1016.3,y:476.3},0).wait(1).to({x:1020.5,y:477.6},0).wait(1).to({x:1024.6,y:479},0).wait(1).to({x:1028.8,y:480.3},0).wait(1).to({x:1033,y:481.7},0).wait(1).to({x:1037.2,y:483},0).wait(1).to({x:1041.3,y:484.4},0).wait(1).to({x:1045.5,y:485.7},0).wait(1).to({x:1049.7,y:487},0).wait(1).to({x:1053.9,y:488.4},0).wait(1).to({x:1058.1,y:489.7},0).wait(1).to({x:1062.2,y:491.1},0).wait(1).to({x:1066.4,y:492.4},0).wait(1).to({x:1070.6,y:493.7},0).wait(1).to({x:1074.8,y:495.1},0).wait(1).to({x:1079,y:496.4},0).wait(1).to({x:1083.1,y:497.8},0).wait(1).to({x:1087.3,y:499.1},0).wait(1).to({x:1091.5,y:500.4},0).wait(1).to({x:1095.7,y:501.8},0).wait(1).to({x:1099.9,y:503.1},0).wait(1).to({x:1104,y:504.5},0).wait(1).to({x:1108.2,y:505.8},0).to({_off:true},1).wait(740));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1272).to({_off:false},0).wait(1).to({x:109.8,y:352},0).wait(1).to({x:114.5,y:352.6},0).wait(1).to({x:119.3,y:353.1},0).wait(1).to({x:124.1,y:353.7},0).wait(1).to({x:128.8,y:354.2},0).wait(1).to({x:133.6,y:354.7},0).wait(1).to({x:138.4,y:355.3},0).wait(1).to({x:143.2,y:355.8},0).wait(1).to({x:147.9,y:356.3},0).wait(1).to({x:152.7,y:356.9},0).wait(1).to({x:157.5,y:357.4},0).wait(1).to({x:162.2,y:358},0).wait(1).to({x:167,y:358.5},0).wait(1).to({x:171.8,y:359},0).wait(1).to({x:176.5,y:359.6},0).wait(1).to({x:181.3,y:360.1},0).wait(1).to({x:186.1,y:360.7},0).wait(1).to({x:190.8,y:361.2},0).wait(1).to({x:195.6,y:361.7},0).wait(1).to({x:200.4,y:362.3},0).wait(1).to({x:205.2,y:362.8},0).wait(1).to({x:209.9,y:363.3},0).wait(1).to({x:214.7,y:363.9},0).wait(1).to({x:219.5,y:364.4},0).wait(1).to({x:224.2,y:365},0).wait(1).to({x:229,y:365.5},0).wait(1).to({x:233.8,y:366},0).wait(1).to({x:238.5,y:366.6},0).wait(1).to({x:243.3,y:367.1},0).wait(1).to({x:248.1,y:367.7},0).wait(1).to({x:252.8,y:368.2},0).wait(1).to({x:257.6,y:368.7},0).wait(1).to({x:262.4,y:369.3},0).wait(1).to({x:267.2,y:369.8},0).wait(1).to({x:271.9,y:370.3},0).wait(1).to({x:276.7,y:370.9},0).wait(1).to({x:281.5,y:371.4},0).wait(1).to({x:286.2,y:372},0).wait(1).to({x:291,y:372.5},0).wait(1).to({x:295.8,y:373},0).wait(1).to({x:300.6,y:373.6},0).wait(1).to({x:305.4,y:374.1},0).wait(1).to({x:310.2,y:374.7},0).wait(1).to({x:315,y:375.2},0).wait(1).to({x:319.8,y:375.7},0).wait(1).to({x:324.6,y:376.3},0).wait(1).to({x:329.4,y:376.8},0).wait(1).to({x:334.2,y:377.3},0).wait(1).to({x:338.9,y:377.9},0).wait(1).to({x:343.7,y:378.4},0).wait(1).to({x:348.5,y:379},0).wait(1).to({x:353.3,y:379.5},0).wait(1).to({x:358.1,y:380},0).wait(1).to({x:362.9,y:380.6},0).wait(1).to({x:367.7,y:381.1},0).wait(1).to({x:372.5,y:381.7},0).wait(1).to({x:377.3,y:382.2},0).wait(1).to({x:382.1,y:382.7},0).wait(1).to({x:386.9,y:383.3},0).wait(1).to({x:391.7,y:383.8},0).wait(1).to({x:396.5,y:384.3},0).wait(1).to({x:401.3,y:384.9},0).wait(1).to({x:406.1,y:385.4},0).wait(1).to({x:410.9,y:386},0).wait(1).to({x:415.7,y:386.5},0).wait(1).to({x:420.5,y:387},0).wait(1).to({x:425.3,y:387.6},0).wait(1).to({x:430.1,y:388.1},0).wait(1).to({x:434.8,y:388.7},0).wait(1).to({x:439.6,y:389.2},0).wait(1).to({x:444.4,y:389.7},0).wait(1).to({x:449.2,y:390.3},0).wait(1).to({x:454,y:390.8},0).wait(1).to({x:458.8,y:391.3},0).wait(1).to({x:463.6,y:391.9},0).wait(1).to({x:468.4,y:392.4},0).wait(1).to({x:473.2,y:393},0).wait(1).to({x:478,y:393.5},0).wait(1).to({x:482.8,y:394},0).wait(1).to({x:487.5,y:394.4},0).wait(1).to({x:492.3,y:394.9},0).wait(1).to({x:497.1,y:395.4},0).wait(1).to({x:501.8,y:395.9},0).wait(1).to({x:506.6,y:396.3},0).wait(1).to({x:511.4,y:396.8},0).wait(1).to({x:516.2,y:397.3},0).wait(1).to({x:520.9,y:397.8},0).wait(1).to({x:525.7,y:398.2},0).wait(1).to({x:530.5,y:398.7},0).wait(1).to({x:535.2,y:399.2},0).wait(1).to({x:540,y:399.7},0).wait(1).to({x:544.8,y:400.1},0).wait(1).to({x:549.5,y:400.6},0).wait(1).to({x:554.3,y:401.1},0).wait(1).to({x:559.1,y:401.6},0).wait(1).to({x:563.8,y:402},0).wait(1).to({x:568.6,y:402.5},0).wait(1).to({x:573.4,y:403},0).wait(1).to({x:578.2,y:403.5},0).wait(1).to({x:582.9,y:403.9},0).wait(1).to({x:587.7,y:404.4},0).wait(1).to({x:592.5,y:404.9},0).wait(1).to({x:597.2,y:405.4},0).wait(1).to({x:602,y:405.8},0).wait(1).to({x:606.8,y:406.3},0).wait(1).to({x:611.5,y:406.8},0).wait(1).to({x:616.3,y:407.3},0).wait(1).to({x:621.1,y:407.7},0).wait(1).to({x:625.8,y:408.2},0).wait(1).to({x:630.6,y:408.7},0).wait(1).to({x:635.4,y:409.2},0).wait(1).to({x:640.2,y:409.6},0).wait(1).to({x:644.9,y:410.1},0).wait(1).to({x:649.7,y:410.6},0).wait(1).to({x:654.5,y:411.1},0).wait(1).to({x:659.2,y:411.5},0).wait(1).to({x:664,y:412},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regX:54,regY:4.2,scaleX:0.9,scaleY:0.81,skewX:13.3,skewY:10.5,x:951.4,y:452.9},0).wait(1).to({x:955.5,y:454.2},0).wait(1).to({x:959.6,y:455.5},0).wait(1).to({x:963.7,y:456.8},0).wait(1).to({x:967.8,y:458.2},0).wait(1).to({x:971.9,y:459.5},0).wait(1).to({x:976,y:460.8},0).wait(1).to({x:980.2,y:462.1},0).wait(1).to({x:984.3,y:463.4},0).wait(1).to({x:988.4,y:464.7},0).wait(1).to({x:992.5,y:466},0).wait(1).to({x:996.6,y:467.4},0).wait(1).to({x:1000.7,y:468.7},0).wait(1).to({x:1004.9,y:470},0).wait(1).to({x:1009,y:471.3},0).wait(1).to({x:1013.1,y:472.6},0).wait(1).to({x:1017.2,y:473.9},0).wait(1).to({x:1021.3,y:475.2},0).wait(1).to({x:1025.4,y:476.6},0).wait(1).to({x:1029.5,y:477.9},0).wait(1).to({x:1033.7,y:479.2},0).wait(1).to({x:1037.8,y:480.5},0).wait(1).to({x:1041.9,y:481.8},0).wait(1).to({x:1046,y:483.1},0).wait(1).to({x:1050.1,y:484.4},0).wait(1).to({x:1054.2,y:485.8},0).wait(1).to({x:1058.4,y:487.1},0).wait(1).to({x:1062.5,y:488.4},0).wait(1).to({x:1066.6,y:489.7},0).wait(1).to({x:1070.7,y:491},0).wait(1).to({x:1074.8,y:492.3},0).wait(1).to({x:1078.9,y:493.6},0).wait(1).to({x:1083,y:495},0).wait(1).to({x:1087.2,y:496.3},0).wait(1).to({x:1091.3,y:497.6},0).wait(1).to({x:1095.4,y:498.9},0).wait(1).to({x:1099.5,y:500.2},0).wait(1).to({x:1103.6,y:501.5},0).wait(1).to({x:1107.7,y:502.8},0).to({_off:true},1).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1632).to({_off:false},0).wait(1).to({x:109.8,y:349.5},0).wait(1).to({x:114.5,y:350.1},0).wait(1).to({x:119.3,y:350.6},0).wait(1).to({x:124.1,y:351.2},0).wait(1).to({x:128.8,y:351.7},0).wait(1).to({x:133.6,y:352.2},0).wait(1).to({x:138.4,y:352.8},0).wait(1).to({x:143.2,y:353.3},0).wait(1).to({x:147.9,y:353.8},0).wait(1).to({x:152.7,y:354.4},0).wait(1).to({x:157.5,y:354.9},0).wait(1).to({x:162.2,y:355.5},0).wait(1).to({x:167,y:356},0).wait(1).to({x:171.8,y:356.5},0).wait(1).to({x:176.5,y:357.1},0).wait(1).to({x:181.3,y:357.6},0).wait(1).to({x:186.1,y:358.2},0).wait(1).to({x:190.8,y:358.7},0).wait(1).to({x:195.6,y:359.2},0).wait(1).to({x:200.4,y:359.8},0).wait(1).to({x:205.2,y:360.3},0).wait(1).to({x:209.9,y:360.8},0).wait(1).to({x:214.7,y:361.4},0).wait(1).to({x:219.5,y:361.9},0).wait(1).to({x:224.2,y:362.5},0).wait(1).to({x:229,y:363},0).wait(1).to({x:233.8,y:363.5},0).wait(1).to({x:238.5,y:364.1},0).wait(1).to({x:243.3,y:364.6},0).wait(1).to({x:248.1,y:365.2},0).wait(1).to({x:252.8,y:365.7},0).wait(1).to({x:257.6,y:366.2},0).wait(1).to({x:262.4,y:366.8},0).wait(1).to({x:267.2,y:367.3},0).wait(1).to({x:271.9,y:367.8},0).wait(1).to({x:276.7,y:368.4},0).wait(1).to({x:281.5,y:368.9},0).wait(1).to({x:286.2,y:369.5},0).wait(1).to({x:291,y:370},0).wait(1).to({x:295.8,y:370.5},0).wait(1).to({x:300.6,y:371.1},0).wait(1).to({x:305.4,y:371.6},0).wait(1).to({x:310.2,y:372.2},0).wait(1).to({x:315,y:372.7},0).wait(1).to({x:319.8,y:373.2},0).wait(1).to({x:324.6,y:373.8},0).wait(1).to({x:329.4,y:374.3},0).wait(1).to({x:334.2,y:374.8},0).wait(1).to({x:338.9,y:375.4},0).wait(1).to({x:343.7,y:375.9},0).wait(1).to({x:348.5,y:376.5},0).wait(1).to({x:353.3,y:377},0).wait(1).to({x:358.1,y:377.5},0).wait(1).to({x:362.9,y:378.1},0).wait(1).to({x:367.7,y:378.6},0).wait(1).to({x:372.5,y:379.2},0).wait(1).to({x:377.3,y:379.7},0).wait(1).to({x:382.1,y:380.2},0).wait(1).to({x:386.9,y:380.8},0).wait(1).to({x:391.7,y:381.3},0).wait(1).to({x:396.5,y:381.8},0).wait(1).to({x:401.3,y:382.4},0).wait(1).to({x:406.1,y:382.9},0).wait(1).to({x:410.9,y:383.5},0).wait(1).to({x:415.7,y:384},0).wait(1).to({x:420.5,y:384.5},0).wait(1).to({x:425.3,y:385.1},0).wait(1).to({x:430.1,y:385.6},0).wait(1).to({x:434.8,y:386.2},0).wait(1).to({x:439.6,y:386.7},0).wait(1).to({x:444.4,y:387.2},0).wait(1).to({x:449.2,y:387.8},0).wait(1).to({x:454,y:388.3},0).wait(1).to({x:458.8,y:388.8},0).wait(1).to({x:463.6,y:389.4},0).wait(1).to({x:468.4,y:389.9},0).wait(1).to({x:473.2,y:390.5},0).wait(1).to({x:478,y:391},0).wait(1).to({x:482.8,y:391.5},0).wait(1).to({x:487.5,y:392.1},0).wait(1).to({x:492.3,y:392.6},0).wait(1).to({x:497.1,y:393.2},0).wait(1).to({x:501.8,y:393.7},0).wait(1).to({x:506.6,y:394.2},0).wait(1).to({x:511.4,y:394.8},0).wait(1).to({x:516.2,y:395.3},0).wait(1).to({x:520.9,y:395.8},0).wait(1).to({x:525.7,y:396.4},0).wait(1).to({x:530.5,y:396.9},0).wait(1).to({x:535.2,y:397.5},0).wait(1).to({x:540,y:398},0).wait(1).to({x:544.8,y:398.5},0).wait(1).to({x:549.5,y:399.1},0).wait(1).to({x:554.3,y:399.6},0).wait(1).to({x:559.1,y:400.2},0).wait(1).to({x:563.8,y:400.7},0).wait(1).to({x:568.6,y:401.2},0).wait(1).to({x:573.4,y:401.8},0).wait(1).to({x:578.2,y:402.3},0).wait(1).to({x:582.9,y:402.8},0).wait(1).to({x:587.7,y:403.4},0).wait(1).to({x:592.5,y:403.9},0).wait(1).to({x:597.2,y:404.5},0).wait(1).to({x:602,y:405},0).wait(1).to({x:606.8,y:405.5},0).wait(1).to({x:611.5,y:406.1},0).wait(1).to({x:616.3,y:406.6},0).wait(1).to({x:621.1,y:407.2},0).wait(1).to({x:625.8,y:407.7},0).wait(1).to({x:630.6,y:408.2},0).wait(1).to({x:635.4,y:408.8},0).wait(1).to({x:640.2,y:409.3},0).wait(1).to({x:644.9,y:409.8},0).wait(1).to({x:649.7,y:410.4},0).wait(1).to({x:654.5,y:410.9},0).wait(1).to({x:659.2,y:411.5},0).wait(1).to({x:664,y:412},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regY:6.4,scaleX:0.9,scaleY:0.83,skewX:12.5,skewY:10.5,x:953.4,y:455},0).wait(1).to({x:957.6,y:456.3},0).wait(1).to({x:961.8,y:457.6},0).wait(1).to({x:966,y:458.9},0).wait(1).to({x:970.3,y:460.2},0).wait(1).to({x:974.5,y:461.5},0).wait(1).to({x:978.7,y:462.8},0).wait(1).to({x:983,y:464.1},0).wait(1).to({x:987.2,y:465.4},0).wait(1).to({x:991.4,y:466.7},0).wait(1).to({x:995.7,y:468.1},0).wait(1).to({x:999.9,y:469.4},0).wait(1).to({x:1004.1,y:470.7},0).wait(1).to({x:1008.4,y:472},0).wait(1).to({x:1012.6,y:473.3},0).wait(1).to({x:1016.8,y:474.6},0).wait(1).to({x:1021,y:475.9},0).wait(1).to({x:1025.3,y:477.2},0).wait(1).to({x:1029.5,y:478.5},0).wait(1).to({x:1033.7,y:479.8},0).wait(1).to({x:1038,y:481.2},0).wait(1).to({x:1042.2,y:482.5},0).wait(1).to({x:1046.4,y:483.8},0).wait(1).to({x:1050.7,y:485.1},0).wait(1).to({x:1054.9,y:486.4},0).wait(1).to({x:1059.1,y:487.7},0).wait(1).to({x:1063.4,y:489},0).wait(1).to({x:1067.6,y:490.3},0).wait(1).to({x:1071.8,y:491.6},0).wait(1).to({x:1076,y:492.9},0).wait(1).to({x:1080.3,y:494.3},0).wait(1).to({x:1084.5,y:495.6},0).wait(1).to({x:1088.7,y:496.9},0).wait(1).to({x:1093,y:498.2},0).wait(1).to({x:1097.2,y:499.5},0).wait(1).to({x:1101.4,y:500.8},0).wait(1).to({x:1105.7,y:502.1},0).wait(1).to({x:1109.9,y:503.4},0).wait(1).to({x:1114.1,y:504.7},0).to({_off:true},1).wait(20));

	// roArrow2
	this.instance_6 = new lib.SymRunoffArrow5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(312,376.5,1,1,0,0,0,61,6.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.SymRunoffArrow4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(312,377.5,1,1,0,0,0,61,6.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.SymRunoffArrow3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(291,371.5,1,1,0,0,0,61,6.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.SymRunoffArrow2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(291,372.5,1,1,0,0,0,61,6.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.SymRunoffArrow1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(291,370,1,1,0,0,0,61,6.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(192).to({_off:false},0).wait(1).to({x:316.8,y:377},0).wait(1).to({x:321.6,y:377.5},0).wait(1).to({x:326.5,y:378},0).wait(1).to({x:331.3,y:378.5},0).wait(1).to({x:336.1,y:379},0).wait(1).to({x:340.9,y:379.5},0).wait(1).to({x:345.7,y:380},0).wait(1).to({x:350.6,y:380.5},0).wait(1).to({x:355.4,y:381},0).wait(1).to({x:360.2,y:381.5},0).wait(1).to({x:365,y:382},0).wait(1).to({x:369.8,y:382.5},0).wait(1).to({x:374.7,y:383},0).wait(1).to({x:379.5,y:383.5},0).wait(1).to({x:384.3,y:384},0).wait(1).to({x:389.1,y:384.5},0).wait(1).to({x:393.9,y:385},0).wait(1).to({x:398.8,y:385.5},0).wait(1).to({x:403.6,y:386},0).wait(1).to({x:408.4,y:386.5},0).wait(1).to({x:413.2,y:387},0).wait(1).to({x:418.1,y:387.5},0).wait(1).to({x:422.9,y:388},0).wait(1).to({x:427.7,y:388.5},0).wait(1).to({x:432.5,y:389},0).wait(1).to({x:437.3,y:389.5},0).wait(1).to({x:442.2,y:390},0).wait(1).to({x:447,y:390.5},0).wait(1).to({x:451.8,y:391},0).wait(1).to({x:456.6,y:391.5},0).wait(1).to({x:461.4,y:392},0).wait(1).to({x:466.3,y:392.5},0).wait(1).to({x:471.1,y:393},0).wait(1).to({x:475.9,y:393.5},0).wait(1).to({x:480.7,y:394},0).wait(1).to({x:485.5,y:394.5},0).wait(1).to({x:490.4,y:395},0).wait(1).to({x:495.2,y:395.5},0).wait(1).to({x:500,y:396},0).wait(1).to({x:504.8,y:396.5},0).wait(1).to({x:509.5,y:397},0).wait(1).to({x:514.3,y:397.5},0).wait(1).to({x:519.1,y:397.9},0).wait(1).to({x:523.8,y:398.4},0).wait(1).to({x:528.6,y:398.9},0).wait(1).to({x:533.4,y:399.4},0).wait(1).to({x:538.2,y:399.9},0).wait(1).to({x:542.9,y:400.4},0).wait(1).to({x:547.7,y:400.9},0).wait(1).to({x:552.5,y:401.4},0).wait(1).to({x:557.2,y:401.8},0).wait(1).to({x:562,y:402.3},0).wait(1).to({x:566.8,y:402.8},0).wait(1).to({x:571.5,y:403.3},0).wait(1).to({x:576.3,y:403.8},0).wait(1).to({x:581.1,y:404.3},0).wait(1).to({x:585.8,y:404.8},0).wait(1).to({x:590.6,y:405.3},0).wait(1).to({x:595.4,y:405.7},0).wait(1).to({x:600.2,y:406.2},0).wait(1).to({x:604.9,y:406.7},0).wait(1).to({x:609.7,y:407.2},0).wait(1).to({x:614.5,y:407.7},0).wait(1).to({x:619.2,y:408.2},0).wait(1).to({x:624,y:408.7},0).wait(1).to({x:628.8,y:409.2},0).wait(1).to({x:633.5,y:409.6},0).wait(1).to({x:638.3,y:410.1},0).wait(1).to({x:643.1,y:410.6},0).wait(1).to({x:647.8,y:411.1},0).wait(1).to({x:652.6,y:411.6},0).wait(1).to({x:657.4,y:412.1},0).wait(1).to({x:662.2,y:412.6},0).wait(1).to({x:666.9,y:413.1},0).wait(1).to({x:671.7,y:413.5},0).wait(1).to({x:676.5,y:414},0).wait(1).to({x:681.2,y:414.5},0).wait(1).to({x:686,y:415},0).wait(1).to({x:690,y:415.5},0).wait(1).to({x:694.1,y:415.9},0).wait(1).to({x:698.1,y:416.4},0).wait(1).to({x:702.1,y:416.8},0).wait(1).to({x:706.1,y:417.3},0).wait(1).to({x:710.2,y:417.8},0).wait(1).to({x:714.2,y:418.2},0).wait(1).to({x:718.2,y:418.7},0).wait(1).to({x:722.2,y:419.2},0).wait(1).to({x:726.3,y:419.6},0).wait(1).to({x:730.3,y:420.1},0).wait(1).to({x:734.3,y:420.5},0).wait(1).to({x:738.3,y:421},0).wait(1).to({x:742.4,y:421.5},0).wait(1).to({x:746.4,y:421.9},0).wait(1).to({x:750.4,y:422.4},0).wait(1).to({x:754.4,y:422.8},0).wait(1).to({x:758.5,y:423.3},0).wait(1).to({x:762.5,y:423.8},0).wait(1).to({x:766.5,y:424.2},0).wait(1).to({x:770.5,y:424.7},0).wait(1).to({x:774.6,y:425.2},0).wait(1).to({x:778.6,y:425.6},0).wait(1).to({x:782.6,y:426.1},0).wait(1).to({x:786.6,y:426.5},0).wait(1).to({x:790.7,y:427},0).wait(1).to({x:794.7,y:427.5},0).wait(1).to({x:798.7,y:427.9},0).wait(1).to({x:802.7,y:428.4},0).wait(1).to({x:806.8,y:428.8},0).wait(1).to({x:810.8,y:429.3},0).wait(1).to({x:814.8,y:429.8},0).wait(1).to({x:818.8,y:430.2},0).wait(1).to({x:822.9,y:430.7},0).wait(1).to({x:826.9,y:431.2},0).wait(1).to({x:830.9,y:431.6},0).wait(1).to({x:834.9,y:432.1},0).wait(1).to({x:839,y:432.5},0).wait(1).to({x:843,y:433},0).wait(1).to({regX:60.5,regY:5.6,scaleX:0.91,scaleY:0.87,skewX:11,skewY:10.8,x:947.9,y:454.4},0).wait(1).to({x:951.9,y:455.7},0).wait(1).to({x:955.9,y:457},0).wait(1).to({x:959.8,y:458.3},0).wait(1).to({x:963.8,y:459.5},0).wait(1).to({x:967.8,y:460.8},0).wait(1).to({x:971.8,y:462.1},0).wait(1).to({x:975.8,y:463.4},0).wait(1).to({x:979.8,y:464.6},0).wait(1).to({x:983.7,y:465.9},0).wait(1).to({x:987.7,y:467.2},0).wait(1).to({x:991.7,y:468.5},0).wait(1).to({x:995.7,y:469.7},0).wait(1).to({x:999.7,y:471},0).wait(1).to({x:1003.6,y:472.3},0).wait(1).to({x:1007.6,y:473.5},0).wait(1).to({x:1011.6,y:474.8},0).wait(1).to({x:1015.6,y:476.1},0).wait(1).to({x:1019.6,y:477.4},0).wait(1).to({x:1023.6,y:478.6},0).wait(1).to({x:1027.5,y:479.9},0).wait(1).to({x:1031.5,y:481.2},0).wait(1).to({x:1035.5,y:482.5},0).wait(1).to({x:1039.5,y:483.7},0).wait(1).to({x:1043.5,y:485},0).wait(1).to({x:1047.5,y:486.3},0).wait(1).to({x:1051.4,y:487.5},0).wait(1).to({x:1055.4,y:488.8},0).wait(1).to({x:1059.4,y:490.1},0).wait(1).to({x:1063.4,y:491.4},0).wait(1).to({x:1067.4,y:492.6},0).wait(1).to({x:1071.3,y:493.9},0).wait(1).to({x:1075.3,y:495.2},0).wait(1).to({x:1079.3,y:496.5},0).wait(1).to({x:1083.3,y:497.7},0).wait(1).to({x:1087.3,y:499},0).wait(1).to({x:1091.3,y:500.3},0).wait(1).to({x:1095.2,y:501.6},0).wait(1).to({x:1099.2,y:502.8},0).to({_off:true},1).wait(1499));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(552).to({_off:false},0).wait(1).to({x:316.8,y:378},0).wait(1).to({x:321.6,y:378.5},0).wait(1).to({x:326.5,y:379},0).wait(1).to({x:331.3,y:379.6},0).wait(1).to({x:336.1,y:380.1},0).wait(1).to({x:340.9,y:380.6},0).wait(1).to({x:345.7,y:381.1},0).wait(1).to({x:350.6,y:381.6},0).wait(1).to({x:355.4,y:382.1},0).wait(1).to({x:360.2,y:382.6},0).wait(1).to({x:365,y:383.1},0).wait(1).to({x:369.8,y:383.7},0).wait(1).to({x:374.7,y:384.2},0).wait(1).to({x:379.5,y:384.7},0).wait(1).to({x:384.3,y:385.2},0).wait(1).to({x:389.1,y:385.7},0).wait(1).to({x:393.9,y:386.2},0).wait(1).to({x:398.8,y:386.7},0).wait(1).to({x:403.6,y:387.2},0).wait(1).to({x:408.4,y:387.8},0).wait(1).to({x:413.2,y:388.3},0).wait(1).to({x:418.1,y:388.8},0).wait(1).to({x:422.9,y:389.3},0).wait(1).to({x:427.7,y:389.8},0).wait(1).to({x:432.5,y:390.3},0).wait(1).to({x:437.3,y:390.8},0).wait(1).to({x:442.2,y:391.3},0).wait(1).to({x:447,y:391.9},0).wait(1).to({x:451.8,y:392.4},0).wait(1).to({x:456.6,y:392.9},0).wait(1).to({x:461.4,y:393.4},0).wait(1).to({x:466.3,y:393.9},0).wait(1).to({x:471.1,y:394.4},0).wait(1).to({x:475.9,y:394.9},0).wait(1).to({x:480.7,y:395.4},0).wait(1).to({x:485.5,y:396},0).wait(1).to({x:490.4,y:396.5},0).wait(1).to({x:495.2,y:397},0).wait(1).to({x:500,y:397.5},0).wait(1).to({x:504.8,y:398},0).wait(1).to({x:509.5,y:398.4},0).wait(1).to({x:514.3,y:398.9},0).wait(1).to({x:519.1,y:399.3},0).wait(1).to({x:523.8,y:399.8},0).wait(1).to({x:528.6,y:400.3},0).wait(1).to({x:533.4,y:400.7},0).wait(1).to({x:538.2,y:401.2},0).wait(1).to({x:542.9,y:401.7},0).wait(1).to({x:547.7,y:402.1},0).wait(1).to({x:552.5,y:402.6},0).wait(1).to({x:557.2,y:403},0).wait(1).to({x:562,y:403.5},0).wait(1).to({x:566.8,y:404},0).wait(1).to({x:571.5,y:404.4},0).wait(1).to({x:576.3,y:404.9},0).wait(1).to({x:581.1,y:405.3},0).wait(1).to({x:585.8,y:405.8},0).wait(1).to({x:590.6,y:406.3},0).wait(1).to({x:595.4,y:406.7},0).wait(1).to({x:600.2,y:407.2},0).wait(1).to({x:604.9,y:407.7},0).wait(1).to({x:609.7,y:408.1},0).wait(1).to({x:614.5,y:408.6},0).wait(1).to({x:619.2,y:409},0).wait(1).to({x:624,y:409.5},0).wait(1).to({x:628.8,y:410},0).wait(1).to({x:633.5,y:410.4},0).wait(1).to({x:638.3,y:410.9},0).wait(1).to({x:643.1,y:411.3},0).wait(1).to({x:647.8,y:411.8},0).wait(1).to({x:652.6,y:412.3},0).wait(1).to({x:657.4,y:412.7},0).wait(1).to({x:662.2,y:413.2},0).wait(1).to({x:666.9,y:413.7},0).wait(1).to({x:671.7,y:414.1},0).wait(1).to({x:676.5,y:414.6},0).wait(1).to({x:681.2,y:415},0).wait(1).to({x:686,y:415.5},0).wait(1).to({x:690.1,y:416},0).wait(1).to({x:694.2,y:416.5},0).wait(1).to({x:698.3,y:417},0).wait(1).to({x:702.4,y:417.4},0).wait(1).to({x:706.5,y:417.9},0).wait(1).to({x:710.6,y:418.4},0).wait(1).to({x:714.7,y:418.9},0).wait(1).to({x:718.8,y:419.4},0).wait(1).to({x:722.9,y:419.9},0).wait(1).to({x:727,y:420.4},0).wait(1).to({x:731.1,y:420.9},0).wait(1).to({x:735.2,y:421.3},0).wait(1).to({x:739.3,y:421.8},0).wait(1).to({x:743.4,y:422.3},0).wait(1).to({x:747.5,y:422.8},0).wait(1).to({x:751.6,y:423.3},0).wait(1).to({x:755.7,y:423.8},0).wait(1).to({x:759.8,y:424.3},0).wait(1).to({x:763.9,y:424.8},0).wait(1).to({x:768.1,y:425.2},0).wait(1).to({x:772.2,y:425.7},0).wait(1).to({x:776.3,y:426.2},0).wait(1).to({x:780.4,y:426.7},0).wait(1).to({x:784.5,y:427.2},0).wait(1).to({x:788.6,y:427.7},0).wait(1).to({x:792.7,y:428.2},0).wait(1).to({x:796.8,y:428.7},0).wait(1).to({x:800.9,y:429.1},0).wait(1).to({x:805,y:429.6},0).wait(1).to({x:809.1,y:430.1},0).wait(1).to({x:813.2,y:430.6},0).wait(1).to({x:817.3,y:431.1},0).wait(1).to({x:821.4,y:431.6},0).wait(1).to({x:825.5,y:432.1},0).wait(1).to({x:829.6,y:432.6},0).wait(1).to({x:833.7,y:433},0).wait(1).to({x:837.8,y:433.5},0).wait(1).to({x:841.9,y:434},0).wait(1).to({x:846,y:434.5},0).wait(1).to({regX:60.9,regY:5.8,scaleX:0.9,scaleY:0.83,skewX:12.8,skewY:10.8,x:954.3,y:456.7},0).wait(1).to({regX:61,regY:5.9,x:958.5,y:458.1},0).wait(1).to({x:962.7,y:459.4},0).wait(1).to({x:966.9,y:460.7},0).wait(1).to({x:971.1,y:462.1},0).wait(1).to({x:975.3,y:463.4},0).wait(1).to({x:979.5,y:464.7},0).wait(1).to({x:983.7,y:466},0).wait(1).to({x:987.9,y:467.3},0).wait(1).to({x:992.1,y:468.6},0).wait(1).to({x:996.2,y:469.9},0).wait(1).to({x:1000.4,y:471.3},0).wait(1).to({x:1004.6,y:472.6},0).wait(1).to({x:1008.8,y:473.9},0).wait(1).to({x:1013,y:475.2},0).wait(1).to({x:1017.2,y:476.5},0).wait(1).to({x:1021.4,y:477.8},0).wait(1).to({x:1025.6,y:479.1},0).wait(1).to({x:1029.8,y:480.5},0).wait(1).to({x:1034,y:481.8},0).wait(1).to({x:1038.1,y:483.1},0).wait(1).to({x:1042.3,y:484.4},0).wait(1).to({x:1046.5,y:485.7},0).wait(1).to({x:1050.7,y:487},0).wait(1).to({x:1054.9,y:488.3},0).wait(1).to({x:1059.1,y:489.7},0).wait(1).to({x:1063.3,y:491},0).wait(1).to({x:1067.5,y:492.3},0).wait(1).to({x:1071.7,y:493.6},0).wait(1).to({x:1075.9,y:494.9},0).wait(1).to({x:1080,y:496.2},0).wait(1).to({x:1084.2,y:497.5},0).wait(1).to({x:1088.4,y:498.9},0).wait(1).to({x:1092.6,y:500.2},0).wait(1).to({x:1096.8,y:501.5},0).wait(1).to({x:1101,y:502.8},0).wait(1).to({x:1105.2,y:504.1},0).wait(1).to({x:1109.4,y:505.4},0).wait(1).to({x:1113.6,y:506.7},0).to({_off:true},1).wait(1139));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(912).to({_off:false},0).wait(1).to({x:295.8,y:372},0).wait(1).to({x:300.6,y:372.6},0).wait(1).to({x:305.5,y:373.1},0).wait(1).to({x:310.3,y:373.7},0).wait(1).to({x:315.1,y:374.2},0).wait(1).to({x:319.9,y:374.7},0).wait(1).to({x:324.7,y:375.3},0).wait(1).to({x:329.6,y:375.8},0).wait(1).to({x:334.4,y:376.3},0).wait(1).to({x:339.2,y:376.9},0).wait(1).to({x:344,y:377.4},0).wait(1).to({x:348.8,y:378},0).wait(1).to({x:353.7,y:378.5},0).wait(1).to({x:358.5,y:379},0).wait(1).to({x:363.3,y:379.6},0).wait(1).to({x:368.1,y:380.1},0).wait(1).to({x:372.9,y:380.7},0).wait(1).to({x:377.8,y:381.2},0).wait(1).to({x:382.6,y:381.7},0).wait(1).to({x:387.4,y:382.3},0).wait(1).to({x:392.2,y:382.8},0).wait(1).to({x:397.1,y:383.3},0).wait(1).to({x:401.9,y:383.9},0).wait(1).to({x:406.7,y:384.4},0).wait(1).to({x:411.5,y:385},0).wait(1).to({x:416.3,y:385.5},0).wait(1).to({x:421.2,y:386},0).wait(1).to({x:426,y:386.6},0).wait(1).to({x:430.8,y:387.1},0).wait(1).to({x:435.6,y:387.7},0).wait(1).to({x:440.4,y:388.2},0).wait(1).to({x:445.3,y:388.7},0).wait(1).to({x:450.1,y:389.3},0).wait(1).to({x:454.9,y:389.8},0).wait(1).to({x:459.7,y:390.3},0).wait(1).to({x:464.5,y:390.9},0).wait(1).to({x:469.4,y:391.4},0).wait(1).to({x:474.2,y:392},0).wait(1).to({x:479,y:392.5},0).wait(1).to({x:483.8,y:393},0).wait(1).to({x:488.5,y:393.5},0).wait(1).to({x:493.3,y:394},0).wait(1).to({x:498.1,y:394.5},0).wait(1).to({x:502.8,y:395},0).wait(1).to({x:507.6,y:395.5},0).wait(1).to({x:512.4,y:396},0).wait(1).to({x:517.2,y:396.5},0).wait(1).to({x:521.9,y:397},0).wait(1).to({x:526.7,y:397.5},0).wait(1).to({x:531.5,y:398},0).wait(1).to({x:536.2,y:398.5},0).wait(1).to({x:541,y:399},0).wait(1).to({x:545.8,y:399.5},0).wait(1).to({x:550.5,y:400},0).wait(1).to({x:555.3,y:400.5},0).wait(1).to({x:560.1,y:401},0).wait(1).to({x:564.8,y:401.5},0).wait(1).to({x:569.6,y:402},0).wait(1).to({x:574.4,y:402.5},0).wait(1).to({x:579.2,y:403},0).wait(1).to({x:583.9,y:403.5},0).wait(1).to({x:588.7,y:404},0).wait(1).to({x:593.5,y:404.5},0).wait(1).to({x:598.2,y:405},0).wait(1).to({x:603,y:405.5},0).wait(1).to({x:607.8,y:406},0).wait(1).to({x:612.5,y:406.5},0).wait(1).to({x:617.3,y:407},0).wait(1).to({x:622.1,y:407.5},0).wait(1).to({x:626.8,y:408},0).wait(1).to({x:631.6,y:408.5},0).wait(1).to({x:636.4,y:409},0).wait(1).to({x:641.2,y:409.5},0).wait(1).to({x:645.9,y:410},0).wait(1).to({x:650.7,y:410.5},0).wait(1).to({x:655.5,y:411},0).wait(1).to({x:660.2,y:411.5},0).wait(1).to({x:665,y:412},0).wait(1).to({x:669.6,y:412.5},0).wait(1).to({x:674.2,y:413},0).wait(1).to({x:678.8,y:413.5},0).wait(1).to({x:683.5,y:414.1},0).wait(1).to({x:688.1,y:414.6},0).wait(1).to({x:692.7,y:415.1},0).wait(1).to({x:697.3,y:415.6},0).wait(1).to({x:701.9,y:416.1},0).wait(1).to({x:706.5,y:416.6},0).wait(1).to({x:711.2,y:417.1},0).wait(1).to({x:715.8,y:417.6},0).wait(1).to({x:720.4,y:418.2},0).wait(1).to({x:725,y:418.7},0).wait(1).to({x:729.6,y:419.2},0).wait(1).to({x:734.2,y:419.7},0).wait(1).to({x:738.8,y:420.2},0).wait(1).to({x:743.5,y:420.7},0).wait(1).to({x:748.1,y:421.2},0).wait(1).to({x:752.7,y:421.7},0).wait(1).to({x:757.3,y:422.3},0).wait(1).to({x:761.9,y:422.8},0).wait(1).to({x:766.5,y:423.3},0).wait(1).to({x:771.2,y:423.8},0).wait(1).to({x:775.8,y:424.3},0).wait(1).to({x:780.4,y:424.8},0).wait(1).to({x:785,y:425.3},0).wait(1).to({x:789.6,y:425.8},0).wait(1).to({x:794.2,y:426.4},0).wait(1).to({x:798.8,y:426.9},0).wait(1).to({x:803.5,y:427.4},0).wait(1).to({x:808.1,y:427.9},0).wait(1).to({x:812.7,y:428.4},0).wait(1).to({x:817.3,y:428.9},0).wait(1).to({x:821.9,y:429.4},0).wait(1).to({x:826.5,y:429.9},0).wait(1).to({x:831.2,y:430.5},0).wait(1).to({x:835.8,y:431},0).wait(1).to({x:840.4,y:431.5},0).wait(1).to({x:845,y:432},0).wait(1).to({regX:61.1,scaleX:0.9,scaleY:0.75,skewX:16.6,skewY:11.1,x:949.4,y:454.8},0).wait(1).to({x:953.6,y:456.2},0).wait(1).to({x:957.8,y:457.5},0).wait(1).to({x:961.9,y:458.9},0).wait(1).to({x:966.1,y:460.2},0).wait(1).to({x:970.3,y:461.6},0).wait(1).to({x:974.5,y:462.9},0).wait(1).to({x:978.7,y:464.2},0).wait(1).to({x:982.8,y:465.6},0).wait(1).to({x:987,y:466.9},0).wait(1).to({x:991.2,y:468.3},0).wait(1).to({x:995.4,y:469.6},0).wait(1).to({x:999.6,y:470.9},0).wait(1).to({x:1003.7,y:472.3},0).wait(1).to({x:1007.9,y:473.6},0).wait(1).to({x:1012.1,y:475},0).wait(1).to({x:1016.3,y:476.3},0).wait(1).to({x:1020.5,y:477.6},0).wait(1).to({x:1024.6,y:479},0).wait(1).to({x:1028.8,y:480.3},0).wait(1).to({x:1033,y:481.7},0).wait(1).to({x:1037.2,y:483},0).wait(1).to({x:1041.3,y:484.4},0).wait(1).to({x:1045.5,y:485.7},0).wait(1).to({x:1049.7,y:487},0).wait(1).to({x:1053.9,y:488.4},0).wait(1).to({x:1058.1,y:489.7},0).wait(1).to({x:1062.2,y:491.1},0).wait(1).to({x:1066.4,y:492.4},0).wait(1).to({x:1070.6,y:493.7},0).wait(1).to({x:1074.8,y:495.1},0).wait(1).to({x:1079,y:496.4},0).wait(1).to({x:1083.1,y:497.8},0).wait(1).to({x:1087.3,y:499.1},0).wait(1).to({x:1091.5,y:500.4},0).wait(1).to({x:1095.7,y:501.8},0).wait(1).to({x:1099.9,y:503.1},0).wait(1).to({x:1104,y:504.5},0).wait(1).to({x:1108.2,y:505.8},0).to({_off:true},1).wait(779));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1272).to({_off:false},0).wait(1).to({x:295.8,y:373},0).wait(1).to({x:300.6,y:373.6},0).wait(1).to({x:305.4,y:374.1},0).wait(1).to({x:310.2,y:374.7},0).wait(1).to({x:315,y:375.2},0).wait(1).to({x:319.8,y:375.7},0).wait(1).to({x:324.6,y:376.3},0).wait(1).to({x:329.4,y:376.8},0).wait(1).to({x:334.2,y:377.3},0).wait(1).to({x:338.9,y:377.9},0).wait(1).to({x:343.7,y:378.4},0).wait(1).to({x:348.5,y:379},0).wait(1).to({x:353.3,y:379.5},0).wait(1).to({x:358.1,y:380},0).wait(1).to({x:362.9,y:380.6},0).wait(1).to({x:367.7,y:381.1},0).wait(1).to({x:372.5,y:381.7},0).wait(1).to({x:377.3,y:382.2},0).wait(1).to({x:382.1,y:382.7},0).wait(1).to({x:386.9,y:383.3},0).wait(1).to({x:391.7,y:383.8},0).wait(1).to({x:396.5,y:384.3},0).wait(1).to({x:401.3,y:384.9},0).wait(1).to({x:406.1,y:385.4},0).wait(1).to({x:410.9,y:386},0).wait(1).to({x:415.7,y:386.5},0).wait(1).to({x:420.5,y:387},0).wait(1).to({x:425.3,y:387.6},0).wait(1).to({x:430.1,y:388.1},0).wait(1).to({x:434.8,y:388.7},0).wait(1).to({x:439.6,y:389.2},0).wait(1).to({x:444.4,y:389.7},0).wait(1).to({x:449.2,y:390.3},0).wait(1).to({x:454,y:390.8},0).wait(1).to({x:458.8,y:391.3},0).wait(1).to({x:463.6,y:391.9},0).wait(1).to({x:468.4,y:392.4},0).wait(1).to({x:473.2,y:393},0).wait(1).to({x:478,y:393.5},0).wait(1).to({x:482.8,y:394},0).wait(1).to({x:487.5,y:394.4},0).wait(1).to({x:492.3,y:394.9},0).wait(1).to({x:497.1,y:395.4},0).wait(1).to({x:501.8,y:395.9},0).wait(1).to({x:506.6,y:396.3},0).wait(1).to({x:511.4,y:396.8},0).wait(1).to({x:516.2,y:397.3},0).wait(1).to({x:520.9,y:397.8},0).wait(1).to({x:525.7,y:398.2},0).wait(1).to({x:530.5,y:398.7},0).wait(1).to({x:535.2,y:399.2},0).wait(1).to({x:540,y:399.7},0).wait(1).to({x:544.8,y:400.1},0).wait(1).to({x:549.5,y:400.6},0).wait(1).to({x:554.3,y:401.1},0).wait(1).to({x:559.1,y:401.6},0).wait(1).to({x:563.8,y:402},0).wait(1).to({x:568.6,y:402.5},0).wait(1).to({x:573.4,y:403},0).wait(1).to({x:578.2,y:403.5},0).wait(1).to({x:582.9,y:403.9},0).wait(1).to({x:587.7,y:404.4},0).wait(1).to({x:592.5,y:404.9},0).wait(1).to({x:597.2,y:405.4},0).wait(1).to({x:602,y:405.8},0).wait(1).to({x:606.8,y:406.3},0).wait(1).to({x:611.5,y:406.8},0).wait(1).to({x:616.3,y:407.3},0).wait(1).to({x:621.1,y:407.7},0).wait(1).to({x:625.8,y:408.2},0).wait(1).to({x:630.6,y:408.7},0).wait(1).to({x:635.4,y:409.2},0).wait(1).to({x:640.2,y:409.6},0).wait(1).to({x:644.9,y:410.1},0).wait(1).to({x:649.7,y:410.6},0).wait(1).to({x:654.5,y:411.1},0).wait(1).to({x:659.2,y:411.5},0).wait(1).to({x:664,y:412},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regX:54,regY:4.2,scaleX:0.9,scaleY:0.81,skewX:13.3,skewY:10.5,x:951.4,y:452.9},0).wait(1).to({x:955.5,y:454.2},0).wait(1).to({x:959.6,y:455.5},0).wait(1).to({x:963.7,y:456.8},0).wait(1).to({x:967.8,y:458.2},0).wait(1).to({x:971.9,y:459.5},0).wait(1).to({x:976,y:460.8},0).wait(1).to({x:980.2,y:462.1},0).wait(1).to({x:984.3,y:463.4},0).wait(1).to({x:988.4,y:464.7},0).wait(1).to({x:992.5,y:466},0).wait(1).to({x:996.6,y:467.4},0).wait(1).to({x:1000.7,y:468.7},0).wait(1).to({x:1004.9,y:470},0).wait(1).to({x:1009,y:471.3},0).wait(1).to({x:1013.1,y:472.6},0).wait(1).to({x:1017.2,y:473.9},0).wait(1).to({x:1021.3,y:475.2},0).wait(1).to({x:1025.4,y:476.6},0).wait(1).to({x:1029.5,y:477.9},0).wait(1).to({x:1033.7,y:479.2},0).wait(1).to({x:1037.8,y:480.5},0).wait(1).to({x:1041.9,y:481.8},0).wait(1).to({x:1046,y:483.1},0).wait(1).to({x:1050.1,y:484.4},0).wait(1).to({x:1054.2,y:485.8},0).wait(1).to({x:1058.4,y:487.1},0).wait(1).to({x:1062.5,y:488.4},0).wait(1).to({x:1066.6,y:489.7},0).wait(1).to({x:1070.7,y:491},0).wait(1).to({x:1074.8,y:492.3},0).wait(1).to({x:1078.9,y:493.6},0).wait(1).to({x:1083,y:495},0).wait(1).to({x:1087.2,y:496.3},0).wait(1).to({x:1091.3,y:497.6},0).wait(1).to({x:1095.4,y:498.9},0).wait(1).to({x:1099.5,y:500.2},0).wait(1).to({x:1103.6,y:501.5},0).wait(1).to({x:1107.7,y:502.8},0).to({_off:true},1).wait(419));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1632).to({_off:false},0).wait(1).to({x:295.8,y:370.5},0).wait(1).to({x:300.6,y:371.1},0).wait(1).to({x:305.4,y:371.6},0).wait(1).to({x:310.2,y:372.2},0).wait(1).to({x:315,y:372.7},0).wait(1).to({x:319.8,y:373.2},0).wait(1).to({x:324.6,y:373.8},0).wait(1).to({x:329.4,y:374.3},0).wait(1).to({x:334.2,y:374.8},0).wait(1).to({x:338.9,y:375.4},0).wait(1).to({x:343.7,y:375.9},0).wait(1).to({x:348.5,y:376.5},0).wait(1).to({x:353.3,y:377},0).wait(1).to({x:358.1,y:377.5},0).wait(1).to({x:362.9,y:378.1},0).wait(1).to({x:367.7,y:378.6},0).wait(1).to({x:372.5,y:379.2},0).wait(1).to({x:377.3,y:379.7},0).wait(1).to({x:382.1,y:380.2},0).wait(1).to({x:386.9,y:380.8},0).wait(1).to({x:391.7,y:381.3},0).wait(1).to({x:396.5,y:381.8},0).wait(1).to({x:401.3,y:382.4},0).wait(1).to({x:406.1,y:382.9},0).wait(1).to({x:410.9,y:383.5},0).wait(1).to({x:415.7,y:384},0).wait(1).to({x:420.5,y:384.5},0).wait(1).to({x:425.3,y:385.1},0).wait(1).to({x:430.1,y:385.6},0).wait(1).to({x:434.8,y:386.2},0).wait(1).to({x:439.6,y:386.7},0).wait(1).to({x:444.4,y:387.2},0).wait(1).to({x:449.2,y:387.8},0).wait(1).to({x:454,y:388.3},0).wait(1).to({x:458.8,y:388.8},0).wait(1).to({x:463.6,y:389.4},0).wait(1).to({x:468.4,y:389.9},0).wait(1).to({x:473.2,y:390.5},0).wait(1).to({x:478,y:391},0).wait(1).to({x:482.8,y:391.5},0).wait(1).to({x:487.5,y:392.1},0).wait(1).to({x:492.3,y:392.6},0).wait(1).to({x:497.1,y:393.2},0).wait(1).to({x:501.8,y:393.7},0).wait(1).to({x:506.6,y:394.2},0).wait(1).to({x:511.4,y:394.8},0).wait(1).to({x:516.2,y:395.3},0).wait(1).to({x:520.9,y:395.8},0).wait(1).to({x:525.7,y:396.4},0).wait(1).to({x:530.5,y:396.9},0).wait(1).to({x:535.2,y:397.5},0).wait(1).to({x:540,y:398},0).wait(1).to({x:544.8,y:398.5},0).wait(1).to({x:549.5,y:399.1},0).wait(1).to({x:554.3,y:399.6},0).wait(1).to({x:559.1,y:400.2},0).wait(1).to({x:563.8,y:400.7},0).wait(1).to({x:568.6,y:401.2},0).wait(1).to({x:573.4,y:401.8},0).wait(1).to({x:578.2,y:402.3},0).wait(1).to({x:582.9,y:402.8},0).wait(1).to({x:587.7,y:403.4},0).wait(1).to({x:592.5,y:403.9},0).wait(1).to({x:597.2,y:404.5},0).wait(1).to({x:602,y:405},0).wait(1).to({x:606.8,y:405.5},0).wait(1).to({x:611.5,y:406.1},0).wait(1).to({x:616.3,y:406.6},0).wait(1).to({x:621.1,y:407.2},0).wait(1).to({x:625.8,y:407.7},0).wait(1).to({x:630.6,y:408.2},0).wait(1).to({x:635.4,y:408.8},0).wait(1).to({x:640.2,y:409.3},0).wait(1).to({x:644.9,y:409.8},0).wait(1).to({x:649.7,y:410.4},0).wait(1).to({x:654.5,y:410.9},0).wait(1).to({x:659.2,y:411.5},0).wait(1).to({x:664,y:412},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regY:6.4,scaleX:0.9,scaleY:0.83,skewX:12.5,skewY:10.5,x:953.4,y:455},0).wait(1).to({x:957.6,y:456.3},0).wait(1).to({x:961.8,y:457.6},0).wait(1).to({x:966,y:458.9},0).wait(1).to({x:970.3,y:460.2},0).wait(1).to({x:974.5,y:461.5},0).wait(1).to({x:978.7,y:462.8},0).wait(1).to({x:983,y:464.1},0).wait(1).to({x:987.2,y:465.4},0).wait(1).to({x:991.4,y:466.7},0).wait(1).to({x:995.7,y:468.1},0).wait(1).to({x:999.9,y:469.4},0).wait(1).to({x:1004.1,y:470.7},0).wait(1).to({x:1008.4,y:472},0).wait(1).to({x:1012.6,y:473.3},0).wait(1).to({x:1016.8,y:474.6},0).wait(1).to({x:1021,y:475.9},0).wait(1).to({x:1025.3,y:477.2},0).wait(1).to({x:1029.5,y:478.5},0).wait(1).to({x:1033.7,y:479.8},0).wait(1).to({x:1038,y:481.2},0).wait(1).to({x:1042.2,y:482.5},0).wait(1).to({x:1046.4,y:483.8},0).wait(1).to({x:1050.7,y:485.1},0).wait(1).to({x:1054.9,y:486.4},0).wait(1).to({x:1059.1,y:487.7},0).wait(1).to({x:1063.4,y:489},0).wait(1).to({x:1067.6,y:490.3},0).wait(1).to({x:1071.8,y:491.6},0).wait(1).to({x:1076,y:492.9},0).wait(1).to({x:1080.3,y:494.3},0).wait(1).to({x:1084.5,y:495.6},0).wait(1).to({x:1088.7,y:496.9},0).wait(1).to({x:1093,y:498.2},0).wait(1).to({x:1097.2,y:499.5},0).wait(1).to({x:1101.4,y:500.8},0).wait(1).to({x:1105.7,y:502.1},0).wait(1).to({x:1109.9,y:503.4},0).wait(1).to({x:1114.1,y:504.7},0).to({_off:true},1).wait(59));

	// roArrow3
	this.instance_11 = new lib.SymRunoffArrow5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(500,396,1,1,0,0,0,61,6.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.SymRunoffArrow4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(500,397.5,1,1,0,0,0,61,6.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.SymRunoffArrow3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(479,392.5,1,1,0,0,0,61,6.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.SymRunoffArrow2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(478,393.5,1,1,0,0,0,61,6.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.SymRunoffArrow1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(478,391,1,1,0,0,0,61,6.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(192).to({_off:false},0).wait(1).to({x:504.8,y:396.5},0).wait(1).to({x:509.5,y:397},0).wait(1).to({x:514.3,y:397.5},0).wait(1).to({x:519.1,y:397.9},0).wait(1).to({x:523.8,y:398.4},0).wait(1).to({x:528.6,y:398.9},0).wait(1).to({x:533.4,y:399.4},0).wait(1).to({x:538.2,y:399.9},0).wait(1).to({x:542.9,y:400.4},0).wait(1).to({x:547.7,y:400.9},0).wait(1).to({x:552.5,y:401.4},0).wait(1).to({x:557.2,y:401.8},0).wait(1).to({x:562,y:402.3},0).wait(1).to({x:566.8,y:402.8},0).wait(1).to({x:571.5,y:403.3},0).wait(1).to({x:576.3,y:403.8},0).wait(1).to({x:581.1,y:404.3},0).wait(1).to({x:585.8,y:404.8},0).wait(1).to({x:590.6,y:405.3},0).wait(1).to({x:595.4,y:405.7},0).wait(1).to({x:600.2,y:406.2},0).wait(1).to({x:604.9,y:406.7},0).wait(1).to({x:609.7,y:407.2},0).wait(1).to({x:614.5,y:407.7},0).wait(1).to({x:619.2,y:408.2},0).wait(1).to({x:624,y:408.7},0).wait(1).to({x:628.8,y:409.2},0).wait(1).to({x:633.5,y:409.6},0).wait(1).to({x:638.3,y:410.1},0).wait(1).to({x:643.1,y:410.6},0).wait(1).to({x:647.8,y:411.1},0).wait(1).to({x:652.6,y:411.6},0).wait(1).to({x:657.4,y:412.1},0).wait(1).to({x:662.2,y:412.6},0).wait(1).to({x:666.9,y:413.1},0).wait(1).to({x:671.7,y:413.5},0).wait(1).to({x:676.5,y:414},0).wait(1).to({x:681.2,y:414.5},0).wait(1).to({x:686,y:415},0).wait(1).to({x:690,y:415.5},0).wait(1).to({x:694.1,y:415.9},0).wait(1).to({x:698.1,y:416.4},0).wait(1).to({x:702.1,y:416.8},0).wait(1).to({x:706.1,y:417.3},0).wait(1).to({x:710.2,y:417.8},0).wait(1).to({x:714.2,y:418.2},0).wait(1).to({x:718.2,y:418.7},0).wait(1).to({x:722.2,y:419.2},0).wait(1).to({x:726.3,y:419.6},0).wait(1).to({x:730.3,y:420.1},0).wait(1).to({x:734.3,y:420.5},0).wait(1).to({x:738.3,y:421},0).wait(1).to({x:742.4,y:421.5},0).wait(1).to({x:746.4,y:421.9},0).wait(1).to({x:750.4,y:422.4},0).wait(1).to({x:754.4,y:422.8},0).wait(1).to({x:758.5,y:423.3},0).wait(1).to({x:762.5,y:423.8},0).wait(1).to({x:766.5,y:424.2},0).wait(1).to({x:770.5,y:424.7},0).wait(1).to({x:774.6,y:425.2},0).wait(1).to({x:778.6,y:425.6},0).wait(1).to({x:782.6,y:426.1},0).wait(1).to({x:786.6,y:426.5},0).wait(1).to({x:790.7,y:427},0).wait(1).to({x:794.7,y:427.5},0).wait(1).to({x:798.7,y:427.9},0).wait(1).to({x:802.7,y:428.4},0).wait(1).to({x:806.8,y:428.8},0).wait(1).to({x:810.8,y:429.3},0).wait(1).to({x:814.8,y:429.8},0).wait(1).to({x:818.8,y:430.2},0).wait(1).to({x:822.9,y:430.7},0).wait(1).to({x:826.9,y:431.2},0).wait(1).to({x:830.9,y:431.6},0).wait(1).to({x:834.9,y:432.1},0).wait(1).to({x:839,y:432.5},0).wait(1).to({x:843,y:433},0).wait(1).to({regX:60.5,regY:5.6,scaleX:0.91,scaleY:0.87,skewX:11,skewY:10.8,x:947.9,y:454.4},0).wait(1).to({x:951.9,y:455.7},0).wait(1).to({x:955.9,y:457},0).wait(1).to({x:959.8,y:458.3},0).wait(1).to({x:963.8,y:459.5},0).wait(1).to({x:967.8,y:460.8},0).wait(1).to({x:971.8,y:462.1},0).wait(1).to({x:975.8,y:463.4},0).wait(1).to({x:979.8,y:464.6},0).wait(1).to({x:983.7,y:465.9},0).wait(1).to({x:987.7,y:467.2},0).wait(1).to({x:991.7,y:468.5},0).wait(1).to({x:995.7,y:469.7},0).wait(1).to({x:999.7,y:471},0).wait(1).to({x:1003.6,y:472.3},0).wait(1).to({x:1007.6,y:473.5},0).wait(1).to({x:1011.6,y:474.8},0).wait(1).to({x:1015.6,y:476.1},0).wait(1).to({x:1019.6,y:477.4},0).wait(1).to({x:1023.6,y:478.6},0).wait(1).to({x:1027.5,y:479.9},0).wait(1).to({x:1031.5,y:481.2},0).wait(1).to({x:1035.5,y:482.5},0).wait(1).to({x:1039.5,y:483.7},0).wait(1).to({x:1043.5,y:485},0).wait(1).to({x:1047.5,y:486.3},0).wait(1).to({x:1051.4,y:487.5},0).wait(1).to({x:1055.4,y:488.8},0).wait(1).to({x:1059.4,y:490.1},0).wait(1).to({x:1063.4,y:491.4},0).wait(1).to({x:1067.4,y:492.6},0).wait(1).to({x:1071.3,y:493.9},0).wait(1).to({x:1075.3,y:495.2},0).wait(1).to({x:1079.3,y:496.5},0).wait(1).to({x:1083.3,y:497.7},0).wait(1).to({x:1087.3,y:499},0).wait(1).to({x:1091.3,y:500.3},0).wait(1).to({x:1095.2,y:501.6},0).wait(1).to({x:1099.2,y:502.8},0).to({_off:true},1).wait(1538));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(552).to({_off:false},0).wait(1).to({x:504.8,y:398},0).wait(1).to({x:509.5,y:398.4},0).wait(1).to({x:514.3,y:398.9},0).wait(1).to({x:519.1,y:399.3},0).wait(1).to({x:523.8,y:399.8},0).wait(1).to({x:528.6,y:400.3},0).wait(1).to({x:533.4,y:400.7},0).wait(1).to({x:538.2,y:401.2},0).wait(1).to({x:542.9,y:401.7},0).wait(1).to({x:547.7,y:402.1},0).wait(1).to({x:552.5,y:402.6},0).wait(1).to({x:557.2,y:403},0).wait(1).to({x:562,y:403.5},0).wait(1).to({x:566.8,y:404},0).wait(1).to({x:571.5,y:404.4},0).wait(1).to({x:576.3,y:404.9},0).wait(1).to({x:581.1,y:405.3},0).wait(1).to({x:585.8,y:405.8},0).wait(1).to({x:590.6,y:406.3},0).wait(1).to({x:595.4,y:406.7},0).wait(1).to({x:600.2,y:407.2},0).wait(1).to({x:604.9,y:407.7},0).wait(1).to({x:609.7,y:408.1},0).wait(1).to({x:614.5,y:408.6},0).wait(1).to({x:619.2,y:409},0).wait(1).to({x:624,y:409.5},0).wait(1).to({x:628.8,y:410},0).wait(1).to({x:633.5,y:410.4},0).wait(1).to({x:638.3,y:410.9},0).wait(1).to({x:643.1,y:411.3},0).wait(1).to({x:647.8,y:411.8},0).wait(1).to({x:652.6,y:412.3},0).wait(1).to({x:657.4,y:412.7},0).wait(1).to({x:662.2,y:413.2},0).wait(1).to({x:666.9,y:413.7},0).wait(1).to({x:671.7,y:414.1},0).wait(1).to({x:676.5,y:414.6},0).wait(1).to({x:681.2,y:415},0).wait(1).to({x:686,y:415.5},0).wait(1).to({x:690.1,y:416},0).wait(1).to({x:694.2,y:416.5},0).wait(1).to({x:698.3,y:417},0).wait(1).to({x:702.4,y:417.4},0).wait(1).to({x:706.5,y:417.9},0).wait(1).to({x:710.6,y:418.4},0).wait(1).to({x:714.7,y:418.9},0).wait(1).to({x:718.8,y:419.4},0).wait(1).to({x:722.9,y:419.9},0).wait(1).to({x:727,y:420.4},0).wait(1).to({x:731.1,y:420.9},0).wait(1).to({x:735.2,y:421.3},0).wait(1).to({x:739.3,y:421.8},0).wait(1).to({x:743.4,y:422.3},0).wait(1).to({x:747.5,y:422.8},0).wait(1).to({x:751.6,y:423.3},0).wait(1).to({x:755.7,y:423.8},0).wait(1).to({x:759.8,y:424.3},0).wait(1).to({x:763.9,y:424.8},0).wait(1).to({x:768.1,y:425.2},0).wait(1).to({x:772.2,y:425.7},0).wait(1).to({x:776.3,y:426.2},0).wait(1).to({x:780.4,y:426.7},0).wait(1).to({x:784.5,y:427.2},0).wait(1).to({x:788.6,y:427.7},0).wait(1).to({x:792.7,y:428.2},0).wait(1).to({x:796.8,y:428.7},0).wait(1).to({x:800.9,y:429.1},0).wait(1).to({x:805,y:429.6},0).wait(1).to({x:809.1,y:430.1},0).wait(1).to({x:813.2,y:430.6},0).wait(1).to({x:817.3,y:431.1},0).wait(1).to({x:821.4,y:431.6},0).wait(1).to({x:825.5,y:432.1},0).wait(1).to({x:829.6,y:432.6},0).wait(1).to({x:833.7,y:433},0).wait(1).to({x:837.8,y:433.5},0).wait(1).to({x:841.9,y:434},0).wait(1).to({x:846,y:434.5},0).wait(1).to({regX:60.9,regY:5.8,scaleX:0.9,scaleY:0.83,skewX:12.8,skewY:10.8,x:954.3,y:456.7},0).wait(1).to({regX:61,regY:5.9,x:958.5,y:458.1},0).wait(1).to({x:962.7,y:459.4},0).wait(1).to({x:966.9,y:460.7},0).wait(1).to({x:971.1,y:462.1},0).wait(1).to({x:975.3,y:463.4},0).wait(1).to({x:979.5,y:464.7},0).wait(1).to({x:983.7,y:466},0).wait(1).to({x:987.9,y:467.3},0).wait(1).to({x:992.1,y:468.6},0).wait(1).to({x:996.2,y:469.9},0).wait(1).to({x:1000.4,y:471.3},0).wait(1).to({x:1004.6,y:472.6},0).wait(1).to({x:1008.8,y:473.9},0).wait(1).to({x:1013,y:475.2},0).wait(1).to({x:1017.2,y:476.5},0).wait(1).to({x:1021.4,y:477.8},0).wait(1).to({x:1025.6,y:479.1},0).wait(1).to({x:1029.8,y:480.5},0).wait(1).to({x:1034,y:481.8},0).wait(1).to({x:1038.1,y:483.1},0).wait(1).to({x:1042.3,y:484.4},0).wait(1).to({x:1046.5,y:485.7},0).wait(1).to({x:1050.7,y:487},0).wait(1).to({x:1054.9,y:488.3},0).wait(1).to({x:1059.1,y:489.7},0).wait(1).to({x:1063.3,y:491},0).wait(1).to({x:1067.5,y:492.3},0).wait(1).to({x:1071.7,y:493.6},0).wait(1).to({x:1075.9,y:494.9},0).wait(1).to({x:1080,y:496.2},0).wait(1).to({x:1084.2,y:497.5},0).wait(1).to({x:1088.4,y:498.9},0).wait(1).to({x:1092.6,y:500.2},0).wait(1).to({x:1096.8,y:501.5},0).wait(1).to({x:1101,y:502.8},0).wait(1).to({x:1105.2,y:504.1},0).wait(1).to({x:1109.4,y:505.4},0).wait(1).to({x:1113.6,y:506.7},0).to({_off:true},1).wait(1178));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(912).to({_off:false},0).wait(1).to({x:483.8,y:393},0).wait(1).to({x:488.5,y:393.5},0).wait(1).to({x:493.3,y:394},0).wait(1).to({x:498.1,y:394.5},0).wait(1).to({x:502.8,y:395},0).wait(1).to({x:507.6,y:395.5},0).wait(1).to({x:512.4,y:396},0).wait(1).to({x:517.2,y:396.5},0).wait(1).to({x:521.9,y:397},0).wait(1).to({x:526.7,y:397.5},0).wait(1).to({x:531.5,y:398},0).wait(1).to({x:536.2,y:398.5},0).wait(1).to({x:541,y:399},0).wait(1).to({x:545.8,y:399.5},0).wait(1).to({x:550.5,y:400},0).wait(1).to({x:555.3,y:400.5},0).wait(1).to({x:560.1,y:401},0).wait(1).to({x:564.8,y:401.5},0).wait(1).to({x:569.6,y:402},0).wait(1).to({x:574.4,y:402.5},0).wait(1).to({x:579.2,y:403},0).wait(1).to({x:583.9,y:403.5},0).wait(1).to({x:588.7,y:404},0).wait(1).to({x:593.5,y:404.5},0).wait(1).to({x:598.2,y:405},0).wait(1).to({x:603,y:405.5},0).wait(1).to({x:607.8,y:406},0).wait(1).to({x:612.5,y:406.5},0).wait(1).to({x:617.3,y:407},0).wait(1).to({x:622.1,y:407.5},0).wait(1).to({x:626.8,y:408},0).wait(1).to({x:631.6,y:408.5},0).wait(1).to({x:636.4,y:409},0).wait(1).to({x:641.2,y:409.5},0).wait(1).to({x:645.9,y:410},0).wait(1).to({x:650.7,y:410.5},0).wait(1).to({x:655.5,y:411},0).wait(1).to({x:660.2,y:411.5},0).wait(1).to({x:665,y:412},0).wait(1).to({x:669.6,y:412.5},0).wait(1).to({x:674.2,y:413},0).wait(1).to({x:678.8,y:413.5},0).wait(1).to({x:683.5,y:414.1},0).wait(1).to({x:688.1,y:414.6},0).wait(1).to({x:692.7,y:415.1},0).wait(1).to({x:697.3,y:415.6},0).wait(1).to({x:701.9,y:416.1},0).wait(1).to({x:706.5,y:416.6},0).wait(1).to({x:711.2,y:417.1},0).wait(1).to({x:715.8,y:417.6},0).wait(1).to({x:720.4,y:418.2},0).wait(1).to({x:725,y:418.7},0).wait(1).to({x:729.6,y:419.2},0).wait(1).to({x:734.2,y:419.7},0).wait(1).to({x:738.8,y:420.2},0).wait(1).to({x:743.5,y:420.7},0).wait(1).to({x:748.1,y:421.2},0).wait(1).to({x:752.7,y:421.7},0).wait(1).to({x:757.3,y:422.3},0).wait(1).to({x:761.9,y:422.8},0).wait(1).to({x:766.5,y:423.3},0).wait(1).to({x:771.2,y:423.8},0).wait(1).to({x:775.8,y:424.3},0).wait(1).to({x:780.4,y:424.8},0).wait(1).to({x:785,y:425.3},0).wait(1).to({x:789.6,y:425.8},0).wait(1).to({x:794.2,y:426.4},0).wait(1).to({x:798.8,y:426.9},0).wait(1).to({x:803.5,y:427.4},0).wait(1).to({x:808.1,y:427.9},0).wait(1).to({x:812.7,y:428.4},0).wait(1).to({x:817.3,y:428.9},0).wait(1).to({x:821.9,y:429.4},0).wait(1).to({x:826.5,y:429.9},0).wait(1).to({x:831.2,y:430.5},0).wait(1).to({x:835.8,y:431},0).wait(1).to({x:840.4,y:431.5},0).wait(1).to({x:845,y:432},0).wait(1).to({regX:61.1,scaleX:0.9,scaleY:0.75,skewX:16.6,skewY:11.1,x:949.4,y:454.8},0).wait(1).to({x:953.6,y:456.2},0).wait(1).to({x:957.8,y:457.5},0).wait(1).to({x:961.9,y:458.9},0).wait(1).to({x:966.1,y:460.2},0).wait(1).to({x:970.3,y:461.6},0).wait(1).to({x:974.5,y:462.9},0).wait(1).to({x:978.7,y:464.2},0).wait(1).to({x:982.8,y:465.6},0).wait(1).to({x:987,y:466.9},0).wait(1).to({x:991.2,y:468.3},0).wait(1).to({x:995.4,y:469.6},0).wait(1).to({x:999.6,y:470.9},0).wait(1).to({x:1003.7,y:472.3},0).wait(1).to({x:1007.9,y:473.6},0).wait(1).to({x:1012.1,y:475},0).wait(1).to({x:1016.3,y:476.3},0).wait(1).to({x:1020.5,y:477.6},0).wait(1).to({x:1024.6,y:479},0).wait(1).to({x:1028.8,y:480.3},0).wait(1).to({x:1033,y:481.7},0).wait(1).to({x:1037.2,y:483},0).wait(1).to({x:1041.3,y:484.4},0).wait(1).to({x:1045.5,y:485.7},0).wait(1).to({x:1049.7,y:487},0).wait(1).to({x:1053.9,y:488.4},0).wait(1).to({x:1058.1,y:489.7},0).wait(1).to({x:1062.2,y:491.1},0).wait(1).to({x:1066.4,y:492.4},0).wait(1).to({x:1070.6,y:493.7},0).wait(1).to({x:1074.8,y:495.1},0).wait(1).to({x:1079,y:496.4},0).wait(1).to({x:1083.1,y:497.8},0).wait(1).to({x:1087.3,y:499.1},0).wait(1).to({x:1091.5,y:500.4},0).wait(1).to({x:1095.7,y:501.8},0).wait(1).to({x:1099.9,y:503.1},0).wait(1).to({x:1104,y:504.5},0).wait(1).to({x:1108.2,y:505.8},0).to({_off:true},1).wait(818));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1272).to({_off:false},0).wait(1).to({x:482.8,y:394},0).wait(1).to({x:487.5,y:394.4},0).wait(1).to({x:492.3,y:394.9},0).wait(1).to({x:497.1,y:395.4},0).wait(1).to({x:501.8,y:395.9},0).wait(1).to({x:506.6,y:396.3},0).wait(1).to({x:511.4,y:396.8},0).wait(1).to({x:516.2,y:397.3},0).wait(1).to({x:520.9,y:397.8},0).wait(1).to({x:525.7,y:398.2},0).wait(1).to({x:530.5,y:398.7},0).wait(1).to({x:535.2,y:399.2},0).wait(1).to({x:540,y:399.7},0).wait(1).to({x:544.8,y:400.1},0).wait(1).to({x:549.5,y:400.6},0).wait(1).to({x:554.3,y:401.1},0).wait(1).to({x:559.1,y:401.6},0).wait(1).to({x:563.8,y:402},0).wait(1).to({x:568.6,y:402.5},0).wait(1).to({x:573.4,y:403},0).wait(1).to({x:578.2,y:403.5},0).wait(1).to({x:582.9,y:403.9},0).wait(1).to({x:587.7,y:404.4},0).wait(1).to({x:592.5,y:404.9},0).wait(1).to({x:597.2,y:405.4},0).wait(1).to({x:602,y:405.8},0).wait(1).to({x:606.8,y:406.3},0).wait(1).to({x:611.5,y:406.8},0).wait(1).to({x:616.3,y:407.3},0).wait(1).to({x:621.1,y:407.7},0).wait(1).to({x:625.8,y:408.2},0).wait(1).to({x:630.6,y:408.7},0).wait(1).to({x:635.4,y:409.2},0).wait(1).to({x:640.2,y:409.6},0).wait(1).to({x:644.9,y:410.1},0).wait(1).to({x:649.7,y:410.6},0).wait(1).to({x:654.5,y:411.1},0).wait(1).to({x:659.2,y:411.5},0).wait(1).to({x:664,y:412},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regX:54,regY:4.2,scaleX:0.9,scaleY:0.81,skewX:13.3,skewY:10.5,x:951.4,y:452.9},0).wait(1).to({x:955.5,y:454.2},0).wait(1).to({x:959.6,y:455.5},0).wait(1).to({x:963.7,y:456.8},0).wait(1).to({x:967.8,y:458.2},0).wait(1).to({x:971.9,y:459.5},0).wait(1).to({x:976,y:460.8},0).wait(1).to({x:980.2,y:462.1},0).wait(1).to({x:984.3,y:463.4},0).wait(1).to({x:988.4,y:464.7},0).wait(1).to({x:992.5,y:466},0).wait(1).to({x:996.6,y:467.4},0).wait(1).to({x:1000.7,y:468.7},0).wait(1).to({x:1004.9,y:470},0).wait(1).to({x:1009,y:471.3},0).wait(1).to({x:1013.1,y:472.6},0).wait(1).to({x:1017.2,y:473.9},0).wait(1).to({x:1021.3,y:475.2},0).wait(1).to({x:1025.4,y:476.6},0).wait(1).to({x:1029.5,y:477.9},0).wait(1).to({x:1033.7,y:479.2},0).wait(1).to({x:1037.8,y:480.5},0).wait(1).to({x:1041.9,y:481.8},0).wait(1).to({x:1046,y:483.1},0).wait(1).to({x:1050.1,y:484.4},0).wait(1).to({x:1054.2,y:485.8},0).wait(1).to({x:1058.4,y:487.1},0).wait(1).to({x:1062.5,y:488.4},0).wait(1).to({x:1066.6,y:489.7},0).wait(1).to({x:1070.7,y:491},0).wait(1).to({x:1074.8,y:492.3},0).wait(1).to({x:1078.9,y:493.6},0).wait(1).to({x:1083,y:495},0).wait(1).to({x:1087.2,y:496.3},0).wait(1).to({x:1091.3,y:497.6},0).wait(1).to({x:1095.4,y:498.9},0).wait(1).to({x:1099.5,y:500.2},0).wait(1).to({x:1103.6,y:501.5},0).wait(1).to({x:1107.7,y:502.8},0).to({_off:true},1).wait(458));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1632).to({_off:false},0).wait(1).to({x:482.8,y:391.5},0).wait(1).to({x:487.5,y:392.1},0).wait(1).to({x:492.3,y:392.6},0).wait(1).to({x:497.1,y:393.2},0).wait(1).to({x:501.8,y:393.7},0).wait(1).to({x:506.6,y:394.2},0).wait(1).to({x:511.4,y:394.8},0).wait(1).to({x:516.2,y:395.3},0).wait(1).to({x:520.9,y:395.8},0).wait(1).to({x:525.7,y:396.4},0).wait(1).to({x:530.5,y:396.9},0).wait(1).to({x:535.2,y:397.5},0).wait(1).to({x:540,y:398},0).wait(1).to({x:544.8,y:398.5},0).wait(1).to({x:549.5,y:399.1},0).wait(1).to({x:554.3,y:399.6},0).wait(1).to({x:559.1,y:400.2},0).wait(1).to({x:563.8,y:400.7},0).wait(1).to({x:568.6,y:401.2},0).wait(1).to({x:573.4,y:401.8},0).wait(1).to({x:578.2,y:402.3},0).wait(1).to({x:582.9,y:402.8},0).wait(1).to({x:587.7,y:403.4},0).wait(1).to({x:592.5,y:403.9},0).wait(1).to({x:597.2,y:404.5},0).wait(1).to({x:602,y:405},0).wait(1).to({x:606.8,y:405.5},0).wait(1).to({x:611.5,y:406.1},0).wait(1).to({x:616.3,y:406.6},0).wait(1).to({x:621.1,y:407.2},0).wait(1).to({x:625.8,y:407.7},0).wait(1).to({x:630.6,y:408.2},0).wait(1).to({x:635.4,y:408.8},0).wait(1).to({x:640.2,y:409.3},0).wait(1).to({x:644.9,y:409.8},0).wait(1).to({x:649.7,y:410.4},0).wait(1).to({x:654.5,y:410.9},0).wait(1).to({x:659.2,y:411.5},0).wait(1).to({x:664,y:412},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regY:6.4,scaleX:0.9,scaleY:0.83,skewX:12.5,skewY:10.5,x:953.4,y:455},0).wait(1).to({x:957.6,y:456.3},0).wait(1).to({x:961.8,y:457.6},0).wait(1).to({x:966,y:458.9},0).wait(1).to({x:970.3,y:460.2},0).wait(1).to({x:974.5,y:461.5},0).wait(1).to({x:978.7,y:462.8},0).wait(1).to({x:983,y:464.1},0).wait(1).to({x:987.2,y:465.4},0).wait(1).to({x:991.4,y:466.7},0).wait(1).to({x:995.7,y:468.1},0).wait(1).to({x:999.9,y:469.4},0).wait(1).to({x:1004.1,y:470.7},0).wait(1).to({x:1008.4,y:472},0).wait(1).to({x:1012.6,y:473.3},0).wait(1).to({x:1016.8,y:474.6},0).wait(1).to({x:1021,y:475.9},0).wait(1).to({x:1025.3,y:477.2},0).wait(1).to({x:1029.5,y:478.5},0).wait(1).to({x:1033.7,y:479.8},0).wait(1).to({x:1038,y:481.2},0).wait(1).to({x:1042.2,y:482.5},0).wait(1).to({x:1046.4,y:483.8},0).wait(1).to({x:1050.7,y:485.1},0).wait(1).to({x:1054.9,y:486.4},0).wait(1).to({x:1059.1,y:487.7},0).wait(1).to({x:1063.4,y:489},0).wait(1).to({x:1067.6,y:490.3},0).wait(1).to({x:1071.8,y:491.6},0).wait(1).to({x:1076,y:492.9},0).wait(1).to({x:1080.3,y:494.3},0).wait(1).to({x:1084.5,y:495.6},0).wait(1).to({x:1088.7,y:496.9},0).wait(1).to({x:1093,y:498.2},0).wait(1).to({x:1097.2,y:499.5},0).wait(1).to({x:1101.4,y:500.8},0).wait(1).to({x:1105.7,y:502.1},0).wait(1).to({x:1109.9,y:503.4},0).wait(1).to({x:1114.1,y:504.7},0).to({_off:true},1).wait(98));

	// roArrow4
	this.instance_16 = new lib.SymRunoffArrow5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(686,415,1,1,0,0,0,61,6.5);
	this.instance_16._off = true;

	this.instance_17 = new lib.SymRunoffArrow4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(686,415.5,1,1,0,0,0,61,6.5);
	this.instance_17._off = true;

	this.instance_18 = new lib.SymRunoffArrow3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(665,412,1,1,0,0,0,61,6.5);
	this.instance_18._off = true;

	this.instance_19 = new lib.SymRunoffArrow2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(664,412,1,1,0,0,0,61,6.5);
	this.instance_19._off = true;

	this.instance_20 = new lib.SymRunoffArrow1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(664,412,1,1,0,0,0,61,6.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(192).to({_off:false},0).wait(1).to({x:690,y:415.5},0).wait(1).to({x:694.1,y:415.9},0).wait(1).to({x:698.1,y:416.4},0).wait(1).to({x:702.1,y:416.8},0).wait(1).to({x:706.1,y:417.3},0).wait(1).to({x:710.2,y:417.8},0).wait(1).to({x:714.2,y:418.2},0).wait(1).to({x:718.2,y:418.7},0).wait(1).to({x:722.2,y:419.2},0).wait(1).to({x:726.3,y:419.6},0).wait(1).to({x:730.3,y:420.1},0).wait(1).to({x:734.3,y:420.5},0).wait(1).to({x:738.3,y:421},0).wait(1).to({x:742.4,y:421.5},0).wait(1).to({x:746.4,y:421.9},0).wait(1).to({x:750.4,y:422.4},0).wait(1).to({x:754.4,y:422.8},0).wait(1).to({x:758.5,y:423.3},0).wait(1).to({x:762.5,y:423.8},0).wait(1).to({x:766.5,y:424.2},0).wait(1).to({x:770.5,y:424.7},0).wait(1).to({x:774.6,y:425.2},0).wait(1).to({x:778.6,y:425.6},0).wait(1).to({x:782.6,y:426.1},0).wait(1).to({x:786.6,y:426.5},0).wait(1).to({x:790.7,y:427},0).wait(1).to({x:794.7,y:427.5},0).wait(1).to({x:798.7,y:427.9},0).wait(1).to({x:802.7,y:428.4},0).wait(1).to({x:806.8,y:428.8},0).wait(1).to({x:810.8,y:429.3},0).wait(1).to({x:814.8,y:429.8},0).wait(1).to({x:818.8,y:430.2},0).wait(1).to({x:822.9,y:430.7},0).wait(1).to({x:826.9,y:431.2},0).wait(1).to({x:830.9,y:431.6},0).wait(1).to({x:834.9,y:432.1},0).wait(1).to({x:839,y:432.5},0).wait(1).to({x:843,y:433},0).wait(1).to({regX:60.5,regY:5.6,scaleX:0.91,scaleY:0.87,skewX:11,skewY:10.8,x:947.9,y:454.4},0).wait(1).to({x:951.9,y:455.7},0).wait(1).to({x:955.9,y:457},0).wait(1).to({x:959.8,y:458.3},0).wait(1).to({x:963.8,y:459.5},0).wait(1).to({x:967.8,y:460.8},0).wait(1).to({x:971.8,y:462.1},0).wait(1).to({x:975.8,y:463.4},0).wait(1).to({x:979.8,y:464.6},0).wait(1).to({x:983.7,y:465.9},0).wait(1).to({x:987.7,y:467.2},0).wait(1).to({x:991.7,y:468.5},0).wait(1).to({x:995.7,y:469.7},0).wait(1).to({x:999.7,y:471},0).wait(1).to({x:1003.6,y:472.3},0).wait(1).to({x:1007.6,y:473.5},0).wait(1).to({x:1011.6,y:474.8},0).wait(1).to({x:1015.6,y:476.1},0).wait(1).to({x:1019.6,y:477.4},0).wait(1).to({x:1023.6,y:478.6},0).wait(1).to({x:1027.5,y:479.9},0).wait(1).to({x:1031.5,y:481.2},0).wait(1).to({x:1035.5,y:482.5},0).wait(1).to({x:1039.5,y:483.7},0).wait(1).to({x:1043.5,y:485},0).wait(1).to({x:1047.5,y:486.3},0).wait(1).to({x:1051.4,y:487.5},0).wait(1).to({x:1055.4,y:488.8},0).wait(1).to({x:1059.4,y:490.1},0).wait(1).to({x:1063.4,y:491.4},0).wait(1).to({x:1067.4,y:492.6},0).wait(1).to({x:1071.3,y:493.9},0).wait(1).to({x:1075.3,y:495.2},0).wait(1).to({x:1079.3,y:496.5},0).wait(1).to({x:1083.3,y:497.7},0).wait(1).to({x:1087.3,y:499},0).wait(1).to({x:1091.3,y:500.3},0).wait(1).to({x:1095.2,y:501.6},0).wait(1).to({x:1099.2,y:502.8},0).to({_off:true},1).wait(1577));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(552).to({_off:false},0).wait(1).to({x:690.1,y:416},0).wait(1).to({x:694.2,y:416.5},0).wait(1).to({x:698.3,y:417},0).wait(1).to({x:702.4,y:417.4},0).wait(1).to({x:706.5,y:417.9},0).wait(1).to({x:710.6,y:418.4},0).wait(1).to({x:714.7,y:418.9},0).wait(1).to({x:718.8,y:419.4},0).wait(1).to({x:722.9,y:419.9},0).wait(1).to({x:727,y:420.4},0).wait(1).to({x:731.1,y:420.9},0).wait(1).to({x:735.2,y:421.3},0).wait(1).to({x:739.3,y:421.8},0).wait(1).to({x:743.4,y:422.3},0).wait(1).to({x:747.5,y:422.8},0).wait(1).to({x:751.6,y:423.3},0).wait(1).to({x:755.7,y:423.8},0).wait(1).to({x:759.8,y:424.3},0).wait(1).to({x:763.9,y:424.8},0).wait(1).to({x:768.1,y:425.2},0).wait(1).to({x:772.2,y:425.7},0).wait(1).to({x:776.3,y:426.2},0).wait(1).to({x:780.4,y:426.7},0).wait(1).to({x:784.5,y:427.2},0).wait(1).to({x:788.6,y:427.7},0).wait(1).to({x:792.7,y:428.2},0).wait(1).to({x:796.8,y:428.7},0).wait(1).to({x:800.9,y:429.1},0).wait(1).to({x:805,y:429.6},0).wait(1).to({x:809.1,y:430.1},0).wait(1).to({x:813.2,y:430.6},0).wait(1).to({x:817.3,y:431.1},0).wait(1).to({x:821.4,y:431.6},0).wait(1).to({x:825.5,y:432.1},0).wait(1).to({x:829.6,y:432.6},0).wait(1).to({x:833.7,y:433},0).wait(1).to({x:837.8,y:433.5},0).wait(1).to({x:841.9,y:434},0).wait(1).to({x:846,y:434.5},0).wait(1).to({regX:60.9,regY:5.8,scaleX:0.9,scaleY:0.83,skewX:12.8,skewY:10.8,x:954.3,y:456.7},0).wait(1).to({regX:61,regY:5.9,x:958.5,y:458.1},0).wait(1).to({x:962.7,y:459.4},0).wait(1).to({x:966.9,y:460.7},0).wait(1).to({x:971.1,y:462.1},0).wait(1).to({x:975.3,y:463.4},0).wait(1).to({x:979.5,y:464.7},0).wait(1).to({x:983.7,y:466},0).wait(1).to({x:987.9,y:467.3},0).wait(1).to({x:992.1,y:468.6},0).wait(1).to({x:996.2,y:469.9},0).wait(1).to({x:1000.4,y:471.3},0).wait(1).to({x:1004.6,y:472.6},0).wait(1).to({x:1008.8,y:473.9},0).wait(1).to({x:1013,y:475.2},0).wait(1).to({x:1017.2,y:476.5},0).wait(1).to({x:1021.4,y:477.8},0).wait(1).to({x:1025.6,y:479.1},0).wait(1).to({x:1029.8,y:480.5},0).wait(1).to({x:1034,y:481.8},0).wait(1).to({x:1038.1,y:483.1},0).wait(1).to({x:1042.3,y:484.4},0).wait(1).to({x:1046.5,y:485.7},0).wait(1).to({x:1050.7,y:487},0).wait(1).to({x:1054.9,y:488.3},0).wait(1).to({x:1059.1,y:489.7},0).wait(1).to({x:1063.3,y:491},0).wait(1).to({x:1067.5,y:492.3},0).wait(1).to({x:1071.7,y:493.6},0).wait(1).to({x:1075.9,y:494.9},0).wait(1).to({x:1080,y:496.2},0).wait(1).to({x:1084.2,y:497.5},0).wait(1).to({x:1088.4,y:498.9},0).wait(1).to({x:1092.6,y:500.2},0).wait(1).to({x:1096.8,y:501.5},0).wait(1).to({x:1101,y:502.8},0).wait(1).to({x:1105.2,y:504.1},0).wait(1).to({x:1109.4,y:505.4},0).wait(1).to({x:1113.6,y:506.7},0).to({_off:true},1).wait(1217));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(912).to({_off:false},0).wait(1).to({x:669.6,y:412.5},0).wait(1).to({x:674.2,y:413},0).wait(1).to({x:678.8,y:413.5},0).wait(1).to({x:683.5,y:414.1},0).wait(1).to({x:688.1,y:414.6},0).wait(1).to({x:692.7,y:415.1},0).wait(1).to({x:697.3,y:415.6},0).wait(1).to({x:701.9,y:416.1},0).wait(1).to({x:706.5,y:416.6},0).wait(1).to({x:711.2,y:417.1},0).wait(1).to({x:715.8,y:417.6},0).wait(1).to({x:720.4,y:418.2},0).wait(1).to({x:725,y:418.7},0).wait(1).to({x:729.6,y:419.2},0).wait(1).to({x:734.2,y:419.7},0).wait(1).to({x:738.8,y:420.2},0).wait(1).to({x:743.5,y:420.7},0).wait(1).to({x:748.1,y:421.2},0).wait(1).to({x:752.7,y:421.7},0).wait(1).to({x:757.3,y:422.3},0).wait(1).to({x:761.9,y:422.8},0).wait(1).to({x:766.5,y:423.3},0).wait(1).to({x:771.2,y:423.8},0).wait(1).to({x:775.8,y:424.3},0).wait(1).to({x:780.4,y:424.8},0).wait(1).to({x:785,y:425.3},0).wait(1).to({x:789.6,y:425.8},0).wait(1).to({x:794.2,y:426.4},0).wait(1).to({x:798.8,y:426.9},0).wait(1).to({x:803.5,y:427.4},0).wait(1).to({x:808.1,y:427.9},0).wait(1).to({x:812.7,y:428.4},0).wait(1).to({x:817.3,y:428.9},0).wait(1).to({x:821.9,y:429.4},0).wait(1).to({x:826.5,y:429.9},0).wait(1).to({x:831.2,y:430.5},0).wait(1).to({x:835.8,y:431},0).wait(1).to({x:840.4,y:431.5},0).wait(1).to({x:845,y:432},0).wait(1).to({regX:61.1,scaleX:0.9,scaleY:0.75,skewX:16.6,skewY:11.1,x:949.4,y:454.8},0).wait(1).to({x:953.6,y:456.2},0).wait(1).to({x:957.8,y:457.5},0).wait(1).to({x:961.9,y:458.9},0).wait(1).to({x:966.1,y:460.2},0).wait(1).to({x:970.3,y:461.6},0).wait(1).to({x:974.5,y:462.9},0).wait(1).to({x:978.7,y:464.2},0).wait(1).to({x:982.8,y:465.6},0).wait(1).to({x:987,y:466.9},0).wait(1).to({x:991.2,y:468.3},0).wait(1).to({x:995.4,y:469.6},0).wait(1).to({x:999.6,y:470.9},0).wait(1).to({x:1003.7,y:472.3},0).wait(1).to({x:1007.9,y:473.6},0).wait(1).to({x:1012.1,y:475},0).wait(1).to({x:1016.3,y:476.3},0).wait(1).to({x:1020.5,y:477.6},0).wait(1).to({x:1024.6,y:479},0).wait(1).to({x:1028.8,y:480.3},0).wait(1).to({x:1033,y:481.7},0).wait(1).to({x:1037.2,y:483},0).wait(1).to({x:1041.3,y:484.4},0).wait(1).to({x:1045.5,y:485.7},0).wait(1).to({x:1049.7,y:487},0).wait(1).to({x:1053.9,y:488.4},0).wait(1).to({x:1058.1,y:489.7},0).wait(1).to({x:1062.2,y:491.1},0).wait(1).to({x:1066.4,y:492.4},0).wait(1).to({x:1070.6,y:493.7},0).wait(1).to({x:1074.8,y:495.1},0).wait(1).to({x:1079,y:496.4},0).wait(1).to({x:1083.1,y:497.8},0).wait(1).to({x:1087.3,y:499.1},0).wait(1).to({x:1091.5,y:500.4},0).wait(1).to({x:1095.7,y:501.8},0).wait(1).to({x:1099.9,y:503.1},0).wait(1).to({x:1104,y:504.5},0).wait(1).to({x:1108.2,y:505.8},0).to({_off:true},1).wait(857));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1272).to({_off:false},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regX:54,regY:4.2,scaleX:0.9,scaleY:0.81,skewX:13.3,skewY:10.5,x:951.4,y:452.9},0).wait(1).to({x:955.5,y:454.2},0).wait(1).to({x:959.6,y:455.5},0).wait(1).to({x:963.7,y:456.8},0).wait(1).to({x:967.8,y:458.2},0).wait(1).to({x:971.9,y:459.5},0).wait(1).to({x:976,y:460.8},0).wait(1).to({x:980.2,y:462.1},0).wait(1).to({x:984.3,y:463.4},0).wait(1).to({x:988.4,y:464.7},0).wait(1).to({x:992.5,y:466},0).wait(1).to({x:996.6,y:467.4},0).wait(1).to({x:1000.7,y:468.7},0).wait(1).to({x:1004.9,y:470},0).wait(1).to({x:1009,y:471.3},0).wait(1).to({x:1013.1,y:472.6},0).wait(1).to({x:1017.2,y:473.9},0).wait(1).to({x:1021.3,y:475.2},0).wait(1).to({x:1025.4,y:476.6},0).wait(1).to({x:1029.5,y:477.9},0).wait(1).to({x:1033.7,y:479.2},0).wait(1).to({x:1037.8,y:480.5},0).wait(1).to({x:1041.9,y:481.8},0).wait(1).to({x:1046,y:483.1},0).wait(1).to({x:1050.1,y:484.4},0).wait(1).to({x:1054.2,y:485.8},0).wait(1).to({x:1058.4,y:487.1},0).wait(1).to({x:1062.5,y:488.4},0).wait(1).to({x:1066.6,y:489.7},0).wait(1).to({x:1070.7,y:491},0).wait(1).to({x:1074.8,y:492.3},0).wait(1).to({x:1078.9,y:493.6},0).wait(1).to({x:1083,y:495},0).wait(1).to({x:1087.2,y:496.3},0).wait(1).to({x:1091.3,y:497.6},0).wait(1).to({x:1095.4,y:498.9},0).wait(1).to({x:1099.5,y:500.2},0).wait(1).to({x:1103.6,y:501.5},0).wait(1).to({x:1107.7,y:502.8},0).to({_off:true},1).wait(497));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1632).to({_off:false},0).wait(1).to({x:668.8,y:412.5},0).wait(1).to({x:673.5,y:413.1},0).wait(1).to({x:678.3,y:413.6},0).wait(1).to({x:683.1,y:414.2},0).wait(1).to({x:687.8,y:414.7},0).wait(1).to({x:692.6,y:415.2},0).wait(1).to({x:697.4,y:415.8},0).wait(1).to({x:702.2,y:416.3},0).wait(1).to({x:706.9,y:416.8},0).wait(1).to({x:711.7,y:417.4},0).wait(1).to({x:716.5,y:417.9},0).wait(1).to({x:721.2,y:418.5},0).wait(1).to({x:726,y:419},0).wait(1).to({x:730.8,y:419.5},0).wait(1).to({x:735.5,y:420.1},0).wait(1).to({x:740.3,y:420.6},0).wait(1).to({x:745.1,y:421.2},0).wait(1).to({x:749.8,y:421.7},0).wait(1).to({x:754.6,y:422.2},0).wait(1).to({x:759.4,y:422.8},0).wait(1).to({x:764.2,y:423.3},0).wait(1).to({x:768.9,y:423.8},0).wait(1).to({x:773.7,y:424.4},0).wait(1).to({x:778.5,y:424.9},0).wait(1).to({x:783.2,y:425.5},0).wait(1).to({x:788,y:426},0).wait(1).to({x:792.8,y:426.5},0).wait(1).to({x:797.5,y:427.1},0).wait(1).to({x:802.3,y:427.6},0).wait(1).to({x:807.1,y:428.2},0).wait(1).to({x:811.8,y:428.7},0).wait(1).to({x:816.6,y:429.2},0).wait(1).to({x:821.4,y:429.8},0).wait(1).to({x:826.2,y:430.3},0).wait(1).to({x:830.9,y:430.8},0).wait(1).to({x:835.7,y:431.4},0).wait(1).to({x:840.5,y:431.9},0).wait(1).to({x:845.2,y:432.5},0).wait(1).to({x:850,y:433},0).wait(1).to({regY:6.4,scaleX:0.9,scaleY:0.83,skewX:12.5,skewY:10.5,x:953.4,y:455},0).wait(1).to({x:957.6,y:456.3},0).wait(1).to({x:961.8,y:457.6},0).wait(1).to({x:966,y:458.9},0).wait(1).to({x:970.3,y:460.2},0).wait(1).to({x:974.5,y:461.5},0).wait(1).to({x:978.7,y:462.8},0).wait(1).to({x:983,y:464.1},0).wait(1).to({x:987.2,y:465.4},0).wait(1).to({x:991.4,y:466.7},0).wait(1).to({x:995.7,y:468.1},0).wait(1).to({x:999.9,y:469.4},0).wait(1).to({x:1004.1,y:470.7},0).wait(1).to({x:1008.4,y:472},0).wait(1).to({x:1012.6,y:473.3},0).wait(1).to({x:1016.8,y:474.6},0).wait(1).to({x:1021,y:475.9},0).wait(1).to({x:1025.3,y:477.2},0).wait(1).to({x:1029.5,y:478.5},0).wait(1).to({x:1033.7,y:479.8},0).wait(1).to({x:1038,y:481.2},0).wait(1).to({x:1042.2,y:482.5},0).wait(1).to({x:1046.4,y:483.8},0).wait(1).to({x:1050.7,y:485.1},0).wait(1).to({x:1054.9,y:486.4},0).wait(1).to({x:1059.1,y:487.7},0).wait(1).to({x:1063.4,y:489},0).wait(1).to({x:1067.6,y:490.3},0).wait(1).to({x:1071.8,y:491.6},0).wait(1).to({x:1076,y:492.9},0).wait(1).to({x:1080.3,y:494.3},0).wait(1).to({x:1084.5,y:495.6},0).wait(1).to({x:1088.7,y:496.9},0).wait(1).to({x:1093,y:498.2},0).wait(1).to({x:1097.2,y:499.5},0).wait(1).to({x:1101.4,y:500.8},0).wait(1).to({x:1105.7,y:502.1},0).wait(1).to({x:1109.9,y:503.4},0).wait(1).to({x:1114.1,y:504.7},0).to({_off:true},1).wait(137));

	// roArrow5
	this.instance_21 = new lib.SymRunoffArrow5();
	this.instance_21.parent = this;
	this.instance_21.setTransform(947.9,454.4,0.908,0.873,0,11,10.8,60.5,5.6);
	this.instance_21._off = true;

	this.instance_22 = new lib.SymRunoffArrow4();
	this.instance_22.parent = this;
	this.instance_22.setTransform(954.3,456.7,0.899,0.827,0,12.8,10.8,60.9,5.8);
	this.instance_22._off = true;

	this.instance_23 = new lib.SymRunoffArrow3();
	this.instance_23.parent = this;
	this.instance_23.setTransform(949.4,454.8,0.897,0.745,0,16.6,11.1,61.1,6.5);
	this.instance_23._off = true;

	this.instance_24 = new lib.SymRunoffArrow2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(951.4,452.9,0.898,0.808,0,13.3,10.5,54,4.2);
	this.instance_24._off = true;

	this.instance_25 = new lib.SymRunoffArrow1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(953.4,455,0.898,0.829,0,12.5,10.5,61,6.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(192).to({_off:false},0).wait(1).to({x:951.9,y:455.7},0).wait(1).to({x:955.9,y:457},0).wait(1).to({x:959.8,y:458.3},0).wait(1).to({x:963.8,y:459.5},0).wait(1).to({x:967.8,y:460.8},0).wait(1).to({x:971.8,y:462.1},0).wait(1).to({x:975.8,y:463.4},0).wait(1).to({x:979.8,y:464.6},0).wait(1).to({x:983.7,y:465.9},0).wait(1).to({x:987.7,y:467.2},0).wait(1).to({x:991.7,y:468.5},0).wait(1).to({x:995.7,y:469.7},0).wait(1).to({x:999.7,y:471},0).wait(1).to({x:1003.6,y:472.3},0).wait(1).to({x:1007.6,y:473.5},0).wait(1).to({x:1011.6,y:474.8},0).wait(1).to({x:1015.6,y:476.1},0).wait(1).to({x:1019.6,y:477.4},0).wait(1).to({x:1023.6,y:478.6},0).wait(1).to({x:1027.5,y:479.9},0).wait(1).to({x:1031.5,y:481.2},0).wait(1).to({x:1035.5,y:482.5},0).wait(1).to({x:1039.5,y:483.7},0).wait(1).to({x:1043.5,y:485},0).wait(1).to({x:1047.5,y:486.3},0).wait(1).to({x:1051.4,y:487.5},0).wait(1).to({x:1055.4,y:488.8},0).wait(1).to({x:1059.4,y:490.1},0).wait(1).to({x:1063.4,y:491.4},0).wait(1).to({x:1067.4,y:492.6},0).wait(1).to({x:1071.3,y:493.9},0).wait(1).to({x:1075.3,y:495.2},0).wait(1).to({x:1079.3,y:496.5},0).wait(1).to({x:1083.3,y:497.7},0).wait(1).to({x:1087.3,y:499},0).wait(1).to({x:1091.3,y:500.3},0).wait(1).to({x:1095.2,y:501.6},0).wait(1).to({x:1099.2,y:502.8},0).wait(1).to({regY:5.5,scaleY:0.87,x:1103.2,y:504.1},0).to({_off:true},1).wait(1616));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(552).to({_off:false},0).wait(1).to({regX:61,regY:5.9,x:958.5,y:458.1},0).wait(1).to({x:962.7,y:459.4},0).wait(1).to({x:966.9,y:460.7},0).wait(1).to({x:971.1,y:462.1},0).wait(1).to({x:975.3,y:463.4},0).wait(1).to({x:979.5,y:464.7},0).wait(1).to({x:983.7,y:466},0).wait(1).to({x:987.9,y:467.3},0).wait(1).to({x:992.1,y:468.6},0).wait(1).to({x:996.2,y:469.9},0).wait(1).to({x:1000.4,y:471.3},0).wait(1).to({x:1004.6,y:472.6},0).wait(1).to({x:1008.8,y:473.9},0).wait(1).to({x:1013,y:475.2},0).wait(1).to({x:1017.2,y:476.5},0).wait(1).to({x:1021.4,y:477.8},0).wait(1).to({x:1025.6,y:479.1},0).wait(1).to({x:1029.8,y:480.5},0).wait(1).to({x:1034,y:481.8},0).wait(1).to({x:1038.1,y:483.1},0).wait(1).to({x:1042.3,y:484.4},0).wait(1).to({x:1046.5,y:485.7},0).wait(1).to({x:1050.7,y:487},0).wait(1).to({x:1054.9,y:488.3},0).wait(1).to({x:1059.1,y:489.7},0).wait(1).to({x:1063.3,y:491},0).wait(1).to({x:1067.5,y:492.3},0).wait(1).to({x:1071.7,y:493.6},0).wait(1).to({x:1075.9,y:494.9},0).wait(1).to({x:1080,y:496.2},0).wait(1).to({x:1084.2,y:497.5},0).wait(1).to({x:1088.4,y:498.9},0).wait(1).to({x:1092.6,y:500.2},0).wait(1).to({x:1096.8,y:501.5},0).wait(1).to({x:1101,y:502.8},0).wait(1).to({x:1105.2,y:504.1},0).wait(1).to({x:1109.4,y:505.4},0).wait(1).to({x:1113.6,y:506.7},0).wait(1).to({x:1117.8,y:508.1},0).to({_off:true},1).wait(1256));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(912).to({_off:false},0).wait(1).to({x:953.6,y:456.2},0).wait(1).to({x:957.8,y:457.5},0).wait(1).to({x:961.9,y:458.9},0).wait(1).to({x:966.1,y:460.2},0).wait(1).to({x:970.3,y:461.6},0).wait(1).to({x:974.5,y:462.9},0).wait(1).to({x:978.7,y:464.2},0).wait(1).to({x:982.8,y:465.6},0).wait(1).to({x:987,y:466.9},0).wait(1).to({x:991.2,y:468.3},0).wait(1).to({x:995.4,y:469.6},0).wait(1).to({x:999.6,y:470.9},0).wait(1).to({x:1003.7,y:472.3},0).wait(1).to({x:1007.9,y:473.6},0).wait(1).to({x:1012.1,y:475},0).wait(1).to({x:1016.3,y:476.3},0).wait(1).to({x:1020.5,y:477.6},0).wait(1).to({x:1024.6,y:479},0).wait(1).to({x:1028.8,y:480.3},0).wait(1).to({x:1033,y:481.7},0).wait(1).to({x:1037.2,y:483},0).wait(1).to({x:1041.3,y:484.4},0).wait(1).to({x:1045.5,y:485.7},0).wait(1).to({x:1049.7,y:487},0).wait(1).to({x:1053.9,y:488.4},0).wait(1).to({x:1058.1,y:489.7},0).wait(1).to({x:1062.2,y:491.1},0).wait(1).to({x:1066.4,y:492.4},0).wait(1).to({x:1070.6,y:493.7},0).wait(1).to({x:1074.8,y:495.1},0).wait(1).to({x:1079,y:496.4},0).wait(1).to({x:1083.1,y:497.8},0).wait(1).to({x:1087.3,y:499.1},0).wait(1).to({x:1091.5,y:500.4},0).wait(1).to({x:1095.7,y:501.8},0).wait(1).to({x:1099.9,y:503.1},0).wait(1).to({x:1104,y:504.5},0).wait(1).to({x:1108.2,y:505.8},0).wait(1).to({x:1112.4,y:507.2},0).to({_off:true},1).wait(896));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1272).to({_off:false},0).wait(1).to({x:955.5,y:454.2},0).wait(1).to({x:959.6,y:455.5},0).wait(1).to({x:963.7,y:456.8},0).wait(1).to({x:967.8,y:458.2},0).wait(1).to({x:971.9,y:459.5},0).wait(1).to({x:976,y:460.8},0).wait(1).to({x:980.2,y:462.1},0).wait(1).to({x:984.3,y:463.4},0).wait(1).to({x:988.4,y:464.7},0).wait(1).to({x:992.5,y:466},0).wait(1).to({x:996.6,y:467.4},0).wait(1).to({x:1000.7,y:468.7},0).wait(1).to({x:1004.9,y:470},0).wait(1).to({x:1009,y:471.3},0).wait(1).to({x:1013.1,y:472.6},0).wait(1).to({x:1017.2,y:473.9},0).wait(1).to({x:1021.3,y:475.2},0).wait(1).to({x:1025.4,y:476.6},0).wait(1).to({x:1029.5,y:477.9},0).wait(1).to({x:1033.7,y:479.2},0).wait(1).to({x:1037.8,y:480.5},0).wait(1).to({x:1041.9,y:481.8},0).wait(1).to({x:1046,y:483.1},0).wait(1).to({x:1050.1,y:484.4},0).wait(1).to({x:1054.2,y:485.8},0).wait(1).to({x:1058.4,y:487.1},0).wait(1).to({x:1062.5,y:488.4},0).wait(1).to({x:1066.6,y:489.7},0).wait(1).to({x:1070.7,y:491},0).wait(1).to({x:1074.8,y:492.3},0).wait(1).to({x:1078.9,y:493.6},0).wait(1).to({x:1083,y:495},0).wait(1).to({x:1087.2,y:496.3},0).wait(1).to({x:1091.3,y:497.6},0).wait(1).to({x:1095.4,y:498.9},0).wait(1).to({x:1099.5,y:500.2},0).wait(1).to({x:1103.6,y:501.5},0).wait(1).to({x:1107.7,y:502.8},0).wait(1).to({x:1111.9,y:504.2},0).to({_off:true},1).wait(536));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1632).to({_off:false},0).wait(1).to({x:957.6,y:456.3},0).wait(1).to({x:961.8,y:457.6},0).wait(1).to({x:966,y:458.9},0).wait(1).to({x:970.3,y:460.2},0).wait(1).to({x:974.5,y:461.5},0).wait(1).to({x:978.7,y:462.8},0).wait(1).to({x:983,y:464.1},0).wait(1).to({x:987.2,y:465.4},0).wait(1).to({x:991.4,y:466.7},0).wait(1).to({x:995.7,y:468.1},0).wait(1).to({x:999.9,y:469.4},0).wait(1).to({x:1004.1,y:470.7},0).wait(1).to({x:1008.4,y:472},0).wait(1).to({x:1012.6,y:473.3},0).wait(1).to({x:1016.8,y:474.6},0).wait(1).to({x:1021,y:475.9},0).wait(1).to({x:1025.3,y:477.2},0).wait(1).to({x:1029.5,y:478.5},0).wait(1).to({x:1033.7,y:479.8},0).wait(1).to({x:1038,y:481.2},0).wait(1).to({x:1042.2,y:482.5},0).wait(1).to({x:1046.4,y:483.8},0).wait(1).to({x:1050.7,y:485.1},0).wait(1).to({x:1054.9,y:486.4},0).wait(1).to({x:1059.1,y:487.7},0).wait(1).to({x:1063.4,y:489},0).wait(1).to({x:1067.6,y:490.3},0).wait(1).to({x:1071.8,y:491.6},0).wait(1).to({x:1076,y:492.9},0).wait(1).to({x:1080.3,y:494.3},0).wait(1).to({x:1084.5,y:495.6},0).wait(1).to({x:1088.7,y:496.9},0).wait(1).to({x:1093,y:498.2},0).wait(1).to({x:1097.2,y:499.5},0).wait(1).to({x:1101.4,y:500.8},0).wait(1).to({x:1105.7,y:502.1},0).wait(1).to({x:1109.9,y:503.4},0).wait(1).to({x:1114.1,y:504.7},0).wait(1).to({x:1118.4,y:506.1},0).to({_off:true},1).wait(176));

	// roMoving
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(101,156,197,0.6)").s().p("EBTlAMLItZknIttkBIgCAAIgGgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgIgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIs1hbQpLhDAAgBIAAgZIUACCQBSAIBzAPICPARIBuAKQPYBzMNBUIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAVgBAAIgBgBg");
	this.shape_77.setTransform(531.7,418);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(101,156,197,0.6)").s().p("EBTCAMIItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmQkiggwUh2QgIgBAJgaIS0B7QBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_78.setTransform(535.3,418.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(101,156,197,0.6)").s().p("EBSzAMGItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIqDhIIqWhLQgKgBAYgZISKB3QBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_79.setTransform(536.8,418.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(101,156,197,0.6)").s().p("EBScAMDItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIzoiNQgLgBAKgNIANgMIRbBxQBSAIBzAPICPARIBuAKQPYBzMOBUIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_80.setTransform(539.1,418.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(101,156,197,0.6)").s().p("EBSCAMAItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnQiEgOmvgxIqChIQgLgBAKgNIANgNIQoBsQBTAIByAPICPARIBuAKQPZBzMNBUIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAVgCAAIAAgBg");
	this.shape_81.setTransform(541.6,419.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(101,156,197,0.6)").s().p("EBRmAL+ItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIoMg7IpthGQgNgBAGgOIAIgNIP3BnQBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_82.setTransform(544.5,419.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(101,156,197,0.6)").s().p("EBRDAL7ItaknIttkCIgBAAIgHgBIgcgDIhxgNInDg2I8LjUIgCAAIgHAAIgcgDIhxgLInCgqI8EirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgXgCIhXgKIlfgmInng2IpVhEIABgdIO6BhQBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_83.setTransform(548,419.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(101,156,197,0.6)").s().p("EBQuAL4ItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnInMgzIo/hAQgLgBAGgPIAHgOIOIBbQBSAIBzAPICPARIBuAKQPYBzMOBUIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_84.setTransform(550.1,419.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(101,156,197,0.6)").s().p("EBQMAL1ItZknIttkCIgCAAIgGgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgIgBIgagDIhsgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIvOhtIACgeINMBVQBSAIBzAOICPASIBuAKQPYByMNBVIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_85.setTransform(553.4,420.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(101,156,197,0.6)").s().p("EBP3ALyItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIuehnQgKgBAGgPIAIgPIMZBQQBTAIByAPICPARIBuAKQPZBzMNBUIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAVgCAAIAAgBg");
	this.shape_86.setTransform(555.5,420.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(101,156,197,0.6)").s().p("EBPZALvItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnItghgQgNgBAGgQIAJgPILdBKQBTAIByAPICPARIBuAKQPZBzMNBUIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAVgCAAIAAgBg");
	this.shape_87.setTransform(558.5,420.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(101,156,197,0.6)").s().p("EBPAALtItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIsvhaQgKgBAEgQIAGgQIKuBFQBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_88.setTransform(561.1,421.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(101,156,197,0.6)").s().p("EBOrALrItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIsGhWQgIgBADgQIAFgQIKFBBQBTAIByAOICPASIBuAKQPZByMNBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_89.setTransform(563.1,421.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(101,156,197,0.6)").s().p("EBOOALoItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIrKhQQgMgBAGgQIAIgQIJHA7QBTAIByAOICPASIBuAKQPZByMNBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_90.setTransform(566,421.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(101,156,197,0.6)").s().p("EBNyALlItZknIttkCIgCAAIgGgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgIgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIqbhKIAQghIILA1QBSAIBzAOICPASIBuAKQPYByMNBVIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_91.setTransform(568.8,421.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(101,156,197,0.6)").s().p("EBNYALiItZknIttkBIgCAAIgGgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgIgBIgagDIhsgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIpmhEIAMghIHaAvQBSAIBzAPICPARIBuAKQPYBzMNBUIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_92.setTransform(571.4,422.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(101,156,197,0.6)").s().p("EBM2ALfItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIoig8IACgjIGfApQBSAIBzAPICPARIBuAKQPYBzMOBUIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_93.setTransform(574.9,422.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(101,156,197,0.6)").s().p("EBMXALcItZknIttkCIgCAAIgGgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgIgBIgagDIhsgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmInlg2IANgjIFYAjQBSAIBzAOICPASIBuAKQPYByMNBVIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_94.setTransform(577.9,422.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(101,156,197,0.6)").s().p("EBL+ALaItZknIttkCIgCAAIgGgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgIgBIgagDIhsgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmImygxIABgkIExAfQBSAIBzAOICPASIBuAKQPYByMNBVIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_95.setTransform(580.4,423);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(101,156,197,0.6)").s().p("EBLlALXItZknIttkBIgCAAIgGgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgIgBIgagDIhsgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnImBgrIADgkID+AZQBSAIBzAPICPARIBuAKQPYBzMNBUIJIA9QOUBjZwCsIWaCTIOZB4IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_96.setTransform(582.9,423.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(101,156,197,0.6)").s().p("EBLNALVItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIlQgmIAEglIDLAVQBTAIByAOICPASIBuAKQPZByMNBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_97.setTransform(585.3,423.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(101,156,197,0.6)").s().p("EBKzALSItaknIttkCIgBAAIgHgBIgcgDIhxgNInDg2I8LjUIgCAAIgHAAIgcgDIhxgLInCgqI8EirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgXgCIhXgKIlfgmIkcggIAKglICRAPQBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_98.setTransform(588,423.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(101,156,197,0.6)").s().p("EBKbALPItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIjsgbIANgkIBeAJQBSAIBzAOICPASIBuAKQPYByMOBVIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_99.setTransform(590.4,424.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(101,156,197,0.6)").s().p("EBKCALNItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIi6gUIABgnIA4AFQBSAIBzAPICPARIBuAKQPYBzMOBUIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_100.setTransform(592.9,424.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(101,156,197,0.6)").s().p("EBJoALKItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIiGgPIAFgnQBTAIByAPICPARIBuAKQPZBzMNBUIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAVgCAAIAAgBg");
	this.shape_101.setTransform(595.4,424.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(101,156,197,0.6)").s().p("EBJOALIItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInAgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIhLgJQgEgKgCgKQgEgUAMABICjATIB5APIBuAKQPYByMOBVIJIA9QOTBjZxCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_102.setTransform(598.1,424.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(101,156,197,0.6)").s().p("EBI0ALFItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIgXgDQgEgKgCgKQgEgUALABICFAQIBkAMIBuAKQPZByMNBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_103.setTransform(600.6,425.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(101,156,197,0.6)").s().p("EBIbALCItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlFgjQgEgKgBgKQgEgUAKABIC4AWIBuAKQPZByMNBVIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_104.setTransform(603.1,425.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(101,156,197,0.6)").s().p("EBH7AK+ItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIkLgdIADgnIDqAZQPZBzMNBUIJIA9QOUBjZwCsIWaCTIOYB4IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_105.setTransform(606.3,425.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(101,156,197,0.6)").s().p("EBHhAK7ItZknIttkBIgCAAIgGgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgIgBIgagDIhsgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIjYgYIAEgmIC3ATQPYBzMNBUIJIA9QOUBjZwCsIWaCUIOZB3IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_106.setTransform(608.9,426);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(101,156,197,0.6)").s().p("EBHIAK5ItZknIttkCIgCAAIgGgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInAgqI8GirIgCAAIgIgBIgagDIhsgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIilgSIACgnICGAPQPYByMNBVIJIA9QOUBjZwCsIWaCVIOZB2IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_107.setTransform(611.4,426.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(101,156,197,0.6)").s().p("EBGrAK2ItaknItskCIgCAAIgHgBIgcgDIhxgNInDg2I8LjUIgCAAIgHAAIgcgDIhxgLInAgqI8GirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgXgCIhXgKIhrgLIADgoIBKAJQPYByMOBVIJIA9QOUBjZwCsIWaCVIOYB2IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_108.setTransform(614.4,426.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(101,156,197,0.6)").s().p("EBGRAKyItZknIttkBIgCAAIgGgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgIgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIg4gGIAMgmIAPABQPYBzMNBUIJIA9QOUBjZwCsIWaCVIOZB2IO/EiIMDEOQgOAUgBAAIgBAAg");
	this.shape_109.setTransform(616.9,426.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(101,156,197,0.6)").s().p("EBF3AKwItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIgDgnQPOBxMEBTQGCAqC/ATQOUBjZwCsIWaCVIOYB2IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_110.setTransform(619.5,427.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(101,156,197,0.6)").s().p("EBFjAKtItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIgsgFQgDgKgCgJQgDgUAKABQO5BvL0BRQF6ApC8ASQOTBjZxCsIWaCVIOYB2IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_111.setTransform(621.6,427.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(101,156,197,0.6)").s().p("EBFLAKqItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDQgCgJABgKQAAgTALABQOkBtLiBPQFyAnC3ASQOTBjZxCsIWaCVIOYB2IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_112.setTransform(624,427.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(101,156,197,0.6)").s().p("EBEqAKmItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInAgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxI6bi/QgCgKABgJQADgSAPABQOFBpLLBMQFmAmCxASQOTBjZxCsIWaCVIOYB2IPAEiIMCEOQgOAUgBAAIAAAAg");
	this.shape_113.setTransform(627.3,428.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(101,156,197,0.6)").s().p("EBERAKkItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI5ni5IgEgTQgCgTAIABQN1BmK/BLQFfAmCuARQOUBjZwCsIWaCVIOYB2IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_114.setTransform(629.7,428.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(101,156,197,0.6)").s().p("EBD9AKhItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI5Ai1QgDgKAAgJQgCgTAJABQVtCgKrBDQOUBjZwCsIWaCVIOYB2IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_115.setTransform(631.7,428.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(101,156,197,0.6)").s().p("EBDcAKdItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI4BiuIALgkQNHBgKaBHQFMAkClAQQOUBjZwCsIWaCVIOYB2IPAEiIMCEOQgNAUgCAAIAAAAg");
	this.shape_116.setTransform(635,429);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(101,156,197,0.6)").s().p("EBC1AKWItFkhItokAIgCAAIgGgBIgdgDIhwgOIl0guIgCAAIgGAAIgigFIghgEIhsgMIo5hCIxdiEIgCAAIgIgBIgbgDIhwgKIm9grIpBg3IgCAAIgGAAIghgDIiLgOIosg1IncgtIgCAAIgHgBIgbgDIhrgMImtgwIy+iJIgCAAIgGgBIgggEIiFgOIiOgQIALgkIAQABIDBAXQLCBPJFA+QFJAlCmAPIWKCXIRsB3ILBBJILRBMIOTB2IO7EhIL+ENIgGAHQgIAMgCAAIgPgEg");
	this.shape_117.setTransform(637.4,429.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(101,156,197,0.6)").s().p("EBCtAKXIgPgEItBkfItjj/IgBAAIgHgBIgcgEIhvgNIlygvIgCAAIgGgBIgigEIghgDIhsgNIo1hBIxYiEIgCAAIgHgBIgbgDIhvgKIm6grIo+g3IgCAAIgGgBIgigDIiKgNIopg0InZgtIgCAAIgHgBIgagDIhrgMImrgwIy4iHIgCAAIgGgBIgfgEIiFgPIiNgQIAKgkIAQACIDBAWQK7BPJFA+QFGAjCnARQI3A9NKBYIRmB2IK9BKILNBLIONB3IO2EgIL5ELIgEAHQgIANgCAAIAAgBg");
	this.shape_118.setTransform(639.8,429.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(101,156,197,0.6)").s().p("EBCGAKRIs8keItej+IgCAAIgGgBIgcgDIhugOIlwgvIgCAAIgGgBIghgEIghgEIhrgNIoyhBIxSiDIgCAAIgGAAIgcgDIhvgLIm3gqIo7g3IgCAAIgGgBIghgDIiKgNIomg1InWgsIgCAAIgGgBIgbgDIhqgMImogvIyziHIgCAAIgGgBIgfgEIiEgOIiMgQIAKgkIAPABIDAAWQK0BPJGA+QFCAjCpAQIV5CVIReB1IK6BJILJBLIGxA2IHXBDIOwEdIL1EKIgDAHQgKANAAAAIgQgEg");
	this.shape_119.setTransform(642.2,429.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(101,156,197,0.6)").s().p("EBBvAKOIs3kbItaj9IgBAAIgHgBIgcgEIhtgOIltgwIgCAAIgGgBIghgEIghgEIhqgMIowhBIxLiDIgCAAIgHAAIgbgDIhugKIm1grIo3g3IgCAAIgGgBIghgDIiKgNIojg0InTgsIgCAAIgHgBIgagDIhpgMImmguIysiGIgCAAIgGgBIgggEIiDgPIiMgPIALgkIAOABIC/AWQKtBNJHA/IHoAzIVxCUIRYB0IK2BIILFBLIGuA2IHVBEIOqEcILyEJIgEAGQgJANgBAAIgPgEg");
	this.shape_120.setTransform(644.5,430.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(101,156,197,0.6)").s().p("EBBYAKLIszkZItUj8IgCAAIgGgBIgcgEIhsgOQiEgTjngfIgCAAIgGgBIghgDIghgFIhqgLIoshAIxFiDIgCAAIgHAAIgbgDIhtgKImygqIo1g3IgCAAIgGgBIghgEIiIgNIohg0InQgsIgCAAIgGgBIgbgCIhogMImkguIymiEIgCAAIgGgBIgfgFIiDgOIiLgPIALgkIAOABIC9AVQKmBMJIA/QE7AiCqAQIVqCUIRRB0IKyBIILBBLIGsA1IHSBFIOlEbILtEGIgEAHQgIANgBAAQgIgBgHgDg");
	this.shape_121.setTransform(646.9,430.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(101,156,197,0.6)").s().p("EBBAAKKIsukZItQj6IgBAAIgGgBIgcgFIhrgOQiEgTjlgfIgBAAIgHgBIgggFIghgDIhpgMIophAIxAiBIgCAAIgGAAIgbgDIhsgLImwgqIoxg3IgCAAIgHgCIgggDIiIgMIoeg0InNgsIgCAAIgHgBIgagCIhogMImhguIygiDIgCAAIgGgBIgfgEIiCgOIiKgPIAKgkIAOAAIC8AVQKfBMJJA/QE3AiCrAQQIxA8MxBXIRLByIKuBIIK9BLIGqA1IHOBHIOgEZILpEFIgDAHQgJAMgBAAQgIgBgHgBg");
	this.shape_122.setTransform(649.3,430.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(101,156,197,0.6)").s().p("EBApAKHIsqkXItKj5IgCAAIgGgBIgbgEIhrgPQiFgUjhgfIgCAAIgGgCIgggEIghgDIhpgMIomhAIw5iAIgCAAIgHAAIgagEIhsgKImtgqIoug3IgCAAIgGgBIgggDIiHgNIocgzInLgsIgBAAIgHAAIgagDIhmgMImfgtIyaiCIgCAAIgGgBIgggEIiBgOIiJgQIAKgjIANAAIC7AVQKZBLJIA/QE0AgCtARIVaCSIRDByIKrBIIK5BKIGnA1IHLBHIObEZILlEDIgDAHQgJAMgBAAQgIAAgGgCg");
	this.shape_123.setTransform(651.7,430.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(101,156,197,0.6)").s().p("EBASAKFIslkWItGj4IgCAAIgGgBIgbgEIhqgPQiEgVjfggIgCAAIgGgBIghgDIgggEIhogMIojg/Iwzh/IgCAAIgGgBIgbgDIhrgKImqgrIorg3IgCAAIgHgBIgggCIiGgOIoYgyInJgrIgBAAIgHgBIgZgDIhngMImcgtIyUiAIgCAAIgGgBIgfgFIiBgNIiIgQIAJgjIANgBIC7AVQKQBKJKA/QEwAhCuARQIuA8MkBUIQ9BzIKmBGIK2BLIGlA0IHIBJIOWEXILgECIgDAHIgJAMQgIgBgGgBg");
	this.shape_124.setTransform(654,431.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(101,156,197,0.6)").s().p("EA/6AKCIsgkTItBj4IgBAAIgHgBIgagDIhqgQQiEgVjcggIgCAAIgGgBIghgEIgggEIhngMIogg/Iwth/IgCAAIgGAAIgbgDIhqgKImngrIopg3IgCAAIgGAAIgggDIiGgNIoVgyInFgrIgCAAIgGgBIgagDIhmgLImZgtIyOiAIgCAAIgHgBIgegEIiAgOIiIgPIAJgjIANgBIC5AVQKKBJJLA/QEsAgCvARIVKCQIQ2BxIKiBGIKyBMIGjA0IHFBJIOQEWILcEAIgCAHQgIALgCABQgHAAgHgCg");
	this.shape_125.setTransform(656.4,431.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(101,156,197,0.6)").s().p("EA/jAKAIsckTIs8j1IgBAAIgHgBIgagEIhpgQQiEgWjaggIgCAAIgGgBIgggEIgggEIhngMIocg+Iwoh+IgBAAIgHgBIgagDIhqgKImkgqIolg3IgCAAIgHgBIgggDIiFgNIoSgyInDgrIgBAAIgHgBIgZgCIhlgLImXgtIyIh+IgCAAIgHgBIgegEIiAgOIiGgPIAIgjIAMgCIC5AVQKDBJJLA+QEpAgCwASQIqA7MYBTIQwBxIKeBFIKuBLIGgA0IHCBLIOLEUILYEAIgCAGQgIALgCABIgDABQgFAAgFgCg");
	this.shape_126.setTransform(658.8,431.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(101,156,197,0.6)").s().p("EA/LAJ+IsWkRIs4j0IgBAAIgHgBIgagFIhngQQiFgWjXghIgCAAIgGgBIgggEIgggDIhmgMIoag+Iwhh+IgCAAIgGAAIgagDIhpgKImigqIoig3IgCAAIgGgBIgggDIiEgNIoQgyInAgqIgCAAIgGgBIgYgDIhmgLImUgsIyCh9IgCAAIgHgBIgegEIh+gOIiHgPIAJgiIALgDIC4AVQJ8BIJMA+IHXAyIU6CNIQoBwIKbBFIKqBLIGeA0IG/BMIOGETILTD+IgCAGIgJAMIgFAAIgJgBg");
	this.shape_127.setTransform(661.2,431.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(101,156,197,0.6)").s().p("EA+0AJ7IsSkPIsyjzIgCAAIgGgBIgagFQgmgHhBgJQiFgXjUghIgCAAIgHgBIgfgEIgggEIhlgLIoXg+Iwbh9IgBAAIgHAAIgZgDIhpgKImfgqIofg3IgCAAIgGgBIghgDIiDgNIoNgyIm8gqIgCAAIgHgBIgZgCIhkgLImSgrIx7h9IgCAAIgHgBIgegEIh+gOIiFgPIAIgiIALgCIC2AUQJ1BHJNA/IHUAxIUyCNIQiBuIKXBFIKmBLIGbA0IG9BNIOAERILQD9IgCAFQgHAMgDABIgEAAIgJgBg");
	this.shape_128.setTransform(663.5,432.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(101,156,197,0.6)").s().p("EA+dAJ4IsOkNIstjyIgCAAIgGgBIgZgEIhngRQiFgYjRghIgCAAIgHgBIgfgEIgggEIhlgLIoTg9IwVh8IgCAAIgGgBIgagDIhngKImdgqIocg3IgCAAIgGgBIgggDIiDgMIoKgyIm6gqIgBAAIgGgBIgZgCIhkgLImPgrIx2h7IgCAAIgHgBIgegEIh9gOIiFgPIAIgiIALgDIC2AVQJtBGJOA+QEeAfCzASIUrCMIQbBuIKTBFIKiBLIGZAzIG5BOIN7EQILMD7IgCAGQgHALgCABIgGABIgHgCg");
	this.shape_129.setTransform(665.9,432.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(101,156,197,0.6)").s().p("EA+FAJ2IsJkMIspjxIgBAAIgGgBIgZgEIhmgRQiFgZjPghIgCAAIgGgBIgggEIgfgDIhlgMIoQg9IwPh7IgBAAIgGAAIgagDIhngLImagqIoZg3IgCAAIgGgBIgfgDIiDgMIoHgxIm3gqIgCAAIgGgBIgYgCIhjgLImNgqIxwh7IgCAAIgHgBIgegDIh8gOIiEgPIAIgiIAKgDIC1AUQJmBFJPA/IHOAxIUjCLIQVBtIKOBEIKfBLIGWAzIG3BQIN1EOILID6IgBAFIgKAMIgHABIgGgBg");
	this.shape_130.setTransform(668.3,432.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(101,156,197,0.6)").s().p("EA9uAJ0IsEkKIjmhIIo+ioIgBAAIgGgBIgagFQgmgHg+gKQiGgZjMgiIgCAAIgGgBIgggEIgfgDIhkgMIoNg8IwJh7IgBAAIgGAAIgagDIhmgKImXgqIoWg3IgCAAIgGgBIgggDIiBgNIoFgwIm0gqIgCAAIgFgBIgZgCIhigLImLgqIxqh5IgCAAIgGgBIgegDIh8gOIiDgPIAIgiIAKgDICzAUQJgBEJPA/QEWAeC2ASIUbCKIQOBtIKKBEIKbBLIGUAyIG0BRINwENILDD4IgBAFQgHALgCABIgIABIgFAAg");
	this.shape_131.setTransform(670.6,432.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(101,156,197,0.6)").s().p("EA9XAJxIsAkIIjlhHIo6ioIgBAAIgGgBIgZgEIhkgSQiGgajKgiIgBAAIgHgBIgfgEIgfgDIhjgMIoKg8IwDh6IgCAAIgGAAIgYgDIhmgKImVgqIoTg3IgBAAIgHgBIgfgDIiBgMIoCgxImxgpIgBAAIgHgBIgXgCIhigKImJgqIxkh4IgCAAIgGgBIgegEIh7gOIiCgOIAIgiIAJgEICzAUQJYBEJPA+IHLAwQIgA7LyBPIQHBsIKHBDIKXBLIGRAyIGxBSINsEMIK+D2IAAAGIgKAMIgHABIgFgBg");
	this.shape_132.setTransform(673,433.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(101,156,197,0.6)").s().p("EA9AAJvIr8kHIjjhHIo3imIgBAAIgGgBIgZgFIhjgSQiGgajHgjIgBAAIgHgBIgfgEIgegDIhkgLIoGg8Iv9h5IgCAAIgGgBIgYgCIhlgLImSgqIoQg3IgCAAIgGAAIgfgDIiAgNIn/gwImvgpIgCAAIgFgBIgYgCIhigKImFgqIxeh2IgCAAIgHgBIgdgEIh7gOIiBgOIAHgiIAJgEICxAUQJSBCJQA/IHIAwIULCIIQABsIKDBCIKTBLIGPAyIGuBUINmEKIK6D1IAAAFIgJAMIgIABIgEAAg");
	this.shape_133.setTransform(675.4,433.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(101,156,197,0.6)").s().p("EA8oAJsIr3kFIjhhHIo0imIgBAAIgGgBIgZgEQgngIg7gKQiGgcjEgiIgCAAIgGgBIgggEIgegDIhigMIoEg7Iv3h4IgBAAIgGgBIgZgCIhkgLImPgqIoNg3IgCAAIgGgBIgfgDIh/gMIn9gwImrgoIgCAAIgGgBIgXgDIhhgKImDgpIxYh1IgCAAIgHgBIgdgEIh6gNIiAgPIAGghIAJgFICwAUQJLBBJRA/QEMAdC5ATQIeA6LlBNIP6BrIJ/BCIKPBLIGMAyIGrBVIKqDOIC3A6IK2D0IAAAFIgJAMQgFACgDAAIgEgBg");
	this.shape_134.setTransform(677.8,433.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(101,156,197,0.6)").s().p("EA8RAJqIrykEIjhhHIowikIgBAAIgGgBIgYgFQgogIg5gKQiIgcjBgjIgBAAIgHgBIgfgEIgegDIhhgMIoBg7Ivxh3IgCAAIgFAAIgZgDIhjgLImMgpIoKg3IgCAAIgGgBIgggDIh+gMIn6gwImogoIgCAAIgGgBIgXgDIhggKImBgoIxSh1IgCAAIgHgBIgdgDIh5gOIiAgOIAHghIAJgFICuATQJEBBJSA/IHCAvIT8CHIPyBqIJ8BCIKKBLIGLAxIGoBWIKmDNIC1A6IKyDyIAAAFIgJAMQgFACgDAAIgDAAg");
	this.shape_135.setTransform(680.2,433.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(101,156,197,0.6)").s().p("EA75AJnIrtkCIjfhGIotikIgBAAIgGgBIgYgFIhhgSQiGgdi/gjIgCAAIgGgBIgfgEIgegDIhhgLIn+g7Ivqh3IgCAAIgFAAIgZgDIhjgKImJgqIoHg3IgCAAIgGgBIgfgDIh+gMIn2gvImngpIgBAAIgGAAIgXgCIhfgKIl+goIxMh0IgCAAIgHgBIgdgDIh5gOIh/gOIAGghIAJgGICuAUQI8BAJTA/IHAAvITzCGIPtBpIJ2BBIKIBLIGHAxIGlBXINWEGIKuDxIABAEIgJAMQgFADgEAAIgDgBg");
	this.shape_136.setTransform(682.5,434.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(101,156,197,0.6)").s().p("EA7iAJlIrpkBIjehGIooiiIgCAAIgFgBIgYgFIhhgTQiHgdi7gkIgCAAIgGgBIgfgEIgdgDIhigLIn6g6Ivlh3IgBAAIgGAAIgXgDIhjgKImHgqIoDg3IgCAAIgHAAIgegDIh9gMIn0gwImkgoIgBAAIgFAAIgYgCIhegKIl8goIxGhyIgCAAIgHgBIgdgEIh4gNIh+gOIAGghIAIgGICtATQI2A/JSA/IG+AvITsCFIPmBpIJyBBIKEBLIGFAwIGiBYIKeDLICzA6IKqDvIAAAFIgJAMQgFACgDAAIgDAAg");
	this.shape_137.setTransform(684.9,434.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(101,156,197,0.6)").s().p("EA7KAJiIrkj/IjchGIomiiIgBAAIgGgBIgXgEQgogJg4gLQiHgei5gjIgCAAIgGgBIgfgEIgdgDIhggMIn4g5Iveh2IgCAAIgFAAIgYgDIhigKImEgqIoAg3IgCAAIgHgBIgegDIh9gLInxgvImggoIgCAAIgFAAIgXgDIhegKIl5gnIxAhxIgCAAIgHgBIgdgDIh3gOIh9gOIAFggIAIgHICsATQIuA+JUA/IG7AvITkCEIPfBoIJuBBIKABLIGDAwIGfBZIKaDKICxA5IKmDuIABAFIgJALQgFAEgEAAIgCgBg");
	this.shape_138.setTransform(687.3,434.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(101,156,197,0.6)").s().p("EA6zAJgIrgj+IjbhGIoiigIgBAAIgGgBIgXgFQgngJg3gLQiIgei2gkIgCAAIgGgBIgfgEIgdgDIhggLIn0g6IvZh0IgBAAIgFgBIgYgCIhhgLImCgpQjjgakZgdIgDAAIgGgBIgfgDIh7gMInugvImegnIgCAAIgFAAIgXgDIhdgKIl3gmIw6hwIgCAAIgHgBIgdgEIh2gNIh9gOIAGggIAHgHICqATQIoA9JVA/IG4AvITcCDIPZBnIJqBAIJ8BLIGBAwIGcBbIKVDIICxA5IKhDtIACAEIgJAMQgGADgDAAIgCAAg");
	this.shape_139.setTransform(689.7,435);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(101,156,197,0.6)").s().p("EA6cAJdIrcj8IjZhFIofigIgBAAIgFgBIgXgFIhegUQiIgfizgkIgCAAIgHgBIgegEIgdgDIhfgLInxg5IvTh0IgBAAIgFAAIgYgDIhggLIl/gpIn6g3IgCAAIgHgBIgegDIh7gLInrgvImcgnIgBAAIgFAAIgXgDIhdgJIl0gnIw0hvIgCAAIgGgBIgdgDIh2gNIh8gOIAFggIAHgIICqATQIgA9JVA/IG3AuITUCCIPRBnIJnA/IJ4BLIF+AwIGZBcIKSDHICvA5IKdDrIACAEIgJAMQgFAEgEAAIgBgBg");
	this.shape_140.setTransform(692.1,435.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(101,156,197,0.6)").s().p("EA6EAJbIrXj6IjXhGIocieIgBAAIgFgBIgXgFQgogKg1gKQiIggixglIgBAAIgHgBIgegEIgdgDIhfgLInug5IvMhzIgBAAIgGAAIgXgDIhggKIl7gqIn3g3IgCAAIgHAAIgegDIh6gMInpguImZgnIgBAAIgFAAIgXgDIhcgJIlxgmIwuhuIgCAAIgHgBIgdgDIh1gNIh7gOIAFggIAGgIICpATQIZA7JWBAIG0AtITMCCIPLBlIJjBAIJ0BLIF8AvIGWBdIKNDGICuA5IKZDpIACAEQgGAKgDACQgFAEgDAAIgCAAg");
	this.shape_141.setTransform(694.5,435.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(101,156,197,0.6)").s().p("EA5sAJYIrSj5IjWhFIoYidIgBAAIgFgBIgXgGQgogJg0gLQiIggivglIgBAAIgHgBIgegEIgcgDIhfgLInqg5IvHhyIgBAAIgFAAIgXgDIhfgKIl6gqIn0g3IgCAAIgGgBIgegDIh6gLInmguImVgnIgCAAIgFAAIgWgCIhcgKIlvglIwohtIgCAAIgGgBIgdgDIh0gNIh6gOIAEggIAGgIICoATQISA6JXBAIGxAtITECBIPEBlIJfA/IJwBLIF6AvIGTBeIKJDEICtA5IKVDoIACAEIgJAMQgGAFgDAAIgBgBg");
	this.shape_142.setTransform(696.9,435.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(101,156,197,0.6)").s().p("EA5VAJWIrOj3IjUhGIoVicIgBAAIgFgBIgXgFIhbgVQiJghirglIgBAAIgHgBIgegEIgcgDIhegLInog4IvAhyIgCAAIgEAAIgYgDIhdgKIl3gqInxg3IgDAAIgGAAIgegDIh4gMInkgtImTgnIgBAAIgEAAIgXgCIhbgJIlsgmIwjhrIgBAAIgHgBIgdgDIh0gNIh4gOIADggIAHgIICmASQILA6JYA/IGuAuIS9B/IO9BlIJbA+IJsBLIF4AvIGPBfIKGDDICsA5IKQDnIACAEIgJALQgFAFgDAAIgBAAg");
	this.shape_143.setTransform(699.3,436);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(101,156,197,0.6)").s().p("EA4+AJTIrJj1IjThFIoSicIgBAAIgFgBIgWgFIhbgVQiIgiipglIgCAAIgHgBIgdgEIgcgDIhdgLInlg3Iu6hxIgCAAIgEgBIgXgCIhegLIl0gpInug3IgCAAIgHgBIgdgDIh4gLInhguImPgmIgCAAIgFAAIgWgCIhagJIlqglIwchqIgCAAIgHgBIgcgEIhzgMIh5gOIAEggIAGgIIClASQIEA5JYA/IGsAtIS1B/IO3BjIJXA/IJoBLIF1AvIGNBgIKBDCICrA4IKMDlIADAEIgJAMQgGAEgCAAIgBAAg");
	this.shape_144.setTransform(701.6,436.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(101,156,197,0.6)").s().p("EA4nAJRIuWk5IoPiaIgBAAIgEgBIgXgGIhagVQiIgiimgmIgCAAIgHgBIgegEIgcgDIhcgLInig3Iu0hwIgBAAIgFAAIgWgDIhdgKIlygqInqg3IgCAAIgHAAIgdgDIh4gMInegtImNgmIgBAAIgFAAIgWgCIhZgJIlogkIwWhqIgCAAIgGgBIgdgDIhygNIh4gNIAEggIAFgJICkASQH9A4JZBAIGqAtIStB+IOwBiIJTA+IJlBLIFxAwIGLBgIJ9DBIMxEcIADADIgIAMQgGAFgDAAIAAAAg");
	this.shape_145.setTransform(704,436.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(101,156,197,0.6)").s().p("EA4PAJOIuQk3IoLiZIgBAAIgFgBIgWgGIhZgVQiJgjijgnIgCAAIgHgBIgdgDIgcgDIhcgLIneg3IuuhvIgBAAIgFgBIgXgCIhcgLIlvgpQjfgakIgdIgCAAIgHgBIgdgDIh3gLInbgtImKglIgBAAIgFAAIgWgDIhZgJIllgjIwQhoIgCAAIgHgBIgcgEIhygMIh2gOIADgfIAEgKICkASQH2A3JZBAIGoAtISlB9IOpBiIJPA9IJhBLIFvAwIGIBhIJ4C/IMtEbIADADIgJAMQgFAGgDAAIAAgBg");
	this.shape_146.setTransform(706.4,436.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(101,156,197,0.6)").s().p("EA33AJMIuKk1IoHiZIgBAAIgEgBIgXgFIhXgWQiKgkiggmIgCAAIgHgBIgegEIgbgDIhbgLIncg2IuohvIgBAAIgEAAIgXgDIhbgKIlsgqInlg3IgCAAIgGAAIgegDIh2gLInYgtImHglIgCAAIgEAAIgWgDIhZgIIligkIwKhnIgCAAIgHgBIgbgDIhygNIh2gNIAEgfIADgKICjASQHwA2JZBAIGlAsISdB8IOjBhIJLA9IJdBLIFtAwIGFBiIJ0C+IMmEZIAFADIgJAMQgGAGgCAAIgBAAg");
	this.shape_147.setTransform(708.8,437.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(101,156,197,0.6)").s().p("EA3gAJJIuEkzIoEiYIgBAAIgEgBIgWgFIhXgWQiKgliegmIgBAAIgHgBIgegEIgbgDIhbgLInYg2IuihuIgBAAIgEAAIgXgCIhagLIlqgpInhg3IgCAAIgHgBIgdgDIh2gLInVgsImEglIgCAAIgEAAIgVgDIhZgIIlggjIwEhmIgCAAIgGgBIgcgDIhwgNIh2gNIADgfIAEgKIChARQHoA2JbA/IGiAtISWB7IObBgIJIA9IJZBLIFrAvIGBBkIJwC8IMiEYIAEADIgJALQgFAGgDAAIAAAAg");
	this.shape_148.setTransform(711.2,437.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(101,156,197,0.6)").s().p("EA3IAJHIt+kyIoAiWIgBAAIgEgBIgWgGIhWgWQiKglibgnIgCAAIgHgBIgdgEIgagDIhbgKInVg2IuchuIgBAAIgFAAIgWgCIhagLIlmgpInfg3IgCAAIgGAAIgdgDIh1gLInSgtImCgkIgBAAIgFAAIgVgCIhYgJIldgjIv+hkIgCAAIgHgBIgcgEIhwgMIh0gNIADgfIADgLIChASQHhA0JbBAIGgAsISNB6IOVBgIJEA8IJVBLIFoAvIF/BlIJsC7IMcEWIAEADIgJAMQgFAGgCAAIgBAAg");
	this.shape_149.setTransform(713.6,437.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(101,156,197,0.6)").s().p("EA2xAJEIt4kwIn9iVIgBAAIgFgBIgVgGIhWgXQiJgliZgoIgCAAIgGgBIgegDIgagDIhagLInSg1IuWhtIgBAAIgEAAIgWgCIhagLIlkgpInbg3IgCAAIgHgBIgcgDIh1gKInPgsIl/glIgBAAIgFAAIgUgCIhXgIIlbgjIv4hjIgCAAIgHgBIgcgDIhvgNIhzgNIACgeIADgMICfASQHaA0JcA/IGeAsISFB5IOOBgIJAA7IJRBLIFmAvIF8BmIJoC6IMXEUIAEADIgJALQgFAIgCAAIAAgBg");
	this.shape_150.setTransform(716,437.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(101,156,197,0.6)").s().p("EA2aAJCItykuIn6iVIgBAAIgEgBIgVgGIhWgWQiJgniXgoIgBAAIgHgBIgdgDIgagDIhagLInOg1IuQhrIgBAAIgEAAIgWgDIhZgLIlhgpInZg3IgCAAIgHAAIgcgDIhzgLInNgsIl8gkIgBAAIgFAAIgVgCIhVgIIlZgiIvyhjIgCAAIgHgBIgcgDIhugMIhzgNIACgeIADgMICeARQHUAzJcBAIGbArIR+B5IOHBeII8A8IJNBLIFkAuIF5BnIJjC5IMSESIAEADIgIAMQgGAHgBAAIAAAAg");
	this.shape_151.setTransform(718.4,438.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(101,156,197,0.6)").s().p("EA2CAI/ItsksIn2iTIgBAAIgEgBIgVgGIhUgXIkehQIgBAAIgHgBIgdgDIgagDIhZgKInMg1IuJhrIgBAAIgFAAIgVgDIhYgKIlfgpQjbgbj6gcIgCAAIgHgBIgcgDIhzgLInKgrIl5gkIgBAAIgFAAIgUgCIhWgIIlWghIvshiIgCAAIgHgBIgbgDIhugMIhygNIACgeIACgMICdARIQqByIGYArIR2B4IOBBdII4A7IJJBLIFhAuIF2BoIJgC4IMMERIAFACIgJAMQgFAHgBAAIgBAAg");
	this.shape_152.setTransform(720.7,438.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(101,156,197,0.6)").s().p("EA1qAI9ItlkrInziSIgBAAIgEgBIgVgGIhTgXQiKgoiRgoIgCAAIgGgBIgdgEIgagDIhYgKInJg0IuEhrIAAAAIgFAAIgVgCIhYgLIlcgpInRg3IgDAAIgGAAIgcgDIhygLInIgrIl2gkIgBAAIgFAAIgUgCIhVgIIlTghIvmhgIgCAAIgHgBIgcgDIhsgMIhygNIACgeIABgNICdARIQjBxIGWArIRuB3IN6BdIIzA6IJGBLIFfAuIFzBqIJbC2IMHEPIAFADIgIALQgGAIgBAAIgBAAg");
	this.shape_153.setTransform(723.1,438.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(101,156,197,0.6)").s().p("EA1TAI6ItgkpInviRIgBAAIgEgBIgUgGIhTgYIkZhRIgBAAIgHgBIgdgDIgagDIhXgJInGg1It9hqIgBAAIgEAAIgWgDIhWgKIlZgpInPg3IgCAAIgHgBIgdgDIhxgKInEgrIl0gjIgBAAIgEAAIgUgCIhVgIIlRghIvghfIgCAAIgHgBIgbgDIhsgMIhwgNIABgeIABgMICbAQQG+AxJfBAIGUAqIRmB2INzBcIIwA6IJCBLIFcAuIPHEgIMBENIAGACIgIAMQgGAIgBAAIAAAAg");
	this.shape_154.setTransform(725.5,438.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(101,156,197,0.6)").s().p("EA07AI4ItZknIttkCIgCAAIgGgBIgdgDIhwgLInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgIgBIgbgDIhrgMIhvgNIACgrICZARQOUBjZyCsIWYCVIOZB4IO/EgIMDEOQgOAUgBAAIgBAAg");
	this.shape_155.setTransform(727.9,439.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(101,156,197,0.6)").s().p("EA0UAIwItEkgItmkAIgCAAIgHgBIgcgDIhwgMIm+g2IhrgNIgCAAIgHgBIgkgEIiXgRIpghJItvhpIgDAAIgGAAIgcgDIhwgLIm+gqIvihfIgCAAIgHgBIglgDIiWgOIpUg5IgCAAIgHgBIgDgBIgYgCIhrgMIhvgNIACgiIABgIICZAQQOUBjZfCqIG0AtIPaBoIORB5IO6EeIL9EMIgEAGQgLAOgBAAIgPgFg");
	this.shape_156.setTransform(730.3,439.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(101,156,197,0.6)").s().p("EA0MAIyIgQgEIs+keItgj+IgCAAIgHgBIgcgEIhugNIm8g2IhpgNIgCAAIgHgBIgkgEIiWgSIpchIItphoIgCAAIgHAAIgbgDIhvgLIm7gqIvbheIgCAAIgHgBIgkgDIiWgPIpQg4IgCAAIgHgBIgDgBIgXgCIhqgMIhugMIACgjIAAgHICYAQQOVBjZMCoIGwAtIPUBnIOKB6IOzEcIL3ELIgDAFQgKAOgBAAIAAAAg");
	this.shape_157.setTransform(732.7,439.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(101,156,197,0.6)").s().p("EAzkAIsIs4kcItaj9IgBAAIgHgBIgbgEIhvgOIm3g2IhpgNIgBAAIgIgBIgkgEIiVgSIpXhHItjhoIgCAAIgHAAIgbgDIhugLIm4gqIvUheIgCAAIgHgBIgkgDIiUgOIpNg5IgCAAIgGAAIgEgBIgWgCIhpgMIhugMIACgiIAAgIICYAQQOVBjY5CmIGtAtIPNBnIOEB7IOrEbILyEIIgCAFQgLAPgBAAIgQgEg");
	this.shape_158.setTransform(735.1,439.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(101,156,197,0.6)").s().p("EAzNAIpIsykZItVj8IgBAAIgHgBIgbgEIhtgNQiWgTkeglIhogNIgCAAIgHgBIgjgFIiUgRIpUhHItdhnIgCAAIgGAAIgbgDIhugKIm0gqIvNhfIgCAAIgHgBIgkgCIiTgPIpIg4IgCAAIgHgBIgDAAIgXgCIhogLIhtgNIACgiIABgHICVAQQOXBjYlCkIGqAsIPGBnIN9B9IOlEYILtEHIgDAFQgKAOgBAAIgPgEg");
	this.shape_159.setTransform(737.5,440.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(101,156,197,0.6)").s().p("EAy1AInIsskYItOj6IgCAAIgGgBIgbgEIhsgOQiXgUkagkIhngOIgCAAIgHgBIgjgEIiTgRIpQhHItWhmIgCAAIgGAAIgbgDIhtgKImxgqIvGheIgCAAIgHgBIgkgDIiSgOIpEg4IgCAAIgHgBIgDAAIgWgDIhogLIhsgMIACgiIABgGICVAPQOXBjYRCiIGoAsIO/BmID6AhIJ8BdIOeEXILoEFIgDAFQgKAOgBAAQgIgBgHgCg");
	this.shape_160.setTransform(739.9,440.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(101,156,197,0.6)").s().p("EAyeAIlIsnkWItIj5IgBAAIgHgBIgbgEIhrgOQiWgUkWglIhmgOIgCAAIgHgBIgkgEIiSgSIpLhGItQhlIgCAAIgHAAIgagDIhsgKImugqIu/heIgCAAIgHgBIgjgDIiSgOIpAg3IgCAAIgGgBIgEAAIgWgDIhngLIhqgMIgBAAIADghIAAgHICUAQQOYBjX+CgIGkArIO5BmID4AhIJ3BeIOYEWILiEDIgDAEQgJAOgCABIgOgDg");
	this.shape_161.setTransform(742.3,440.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(101,156,197,0.6)").s().p("EAyGAIjIshkUItBj3IgCAAIgGgCIgbgEIhqgOQiXgVkSglIhlgPIgDAAIgGgBIgjgDIiRgRIpIhGItKhkIgCAAIgGgBIgbgDIhrgKImqgpIu4hfIgCAAIgIAAIgjgDIiQgOIo8g3IgCAAIgGgBIgEAAIgVgCIhngLIhpgMIACghIAAgHICTAQQOZBjXrCdIGgAsIOyBlID3AhIJxBgIOSETILcECIgCAEQgKANgBABQgIgBgGgBg");
	this.shape_162.setTransform(744.8,440.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(101,156,197,0.6)").s().p("EAxvAIgIsbkSIs8j2IgBAAIgHgBIgagDIhpgPQiXgWkPgmIhkgOIgCAAIgHgBIgjgEIiQgRIpDhEItEhkIgCAAIgGgBIgagDIhqgKImngpIuyheIgCAAIgHgBIgjgDIiPgOIo4g2IgCAAIgGgBIgEAAIgWgCIhlgLIhpgMIACghIABgGICSAQQOZBjXXCbIGeArIOrBlID1AhIJtBhIOKERILXEAIgCAFQgJANgBAAQgIAAgGgCg");
	this.shape_163.setTransform(747.1,441.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(101,156,197,0.6)").s().p("EAxXAIdIsVkPIs2j0IgBAAIgGgBIgagEIhogQQiYgWkKgmIhkgOIgCAAIgHgBIgjgEIiPgRIo/hFIs+hjIgBAAIgGAAIgagDIhpgKImkgqIurhdIgCAAIgHgBIgjgDIiOgNIo0g2IgCAAIgGgBIgDAAIgWgDIhkgLIhpgLIAAAAIACghIABgGICRAQQOaBjXECZIGbArIOkBlIDzAgIJoBjIODEQILSD9IgBAEIgLAPQgIgBgGgCg");
	this.shape_164.setTransform(749.5,441.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(101,156,197,0.6)").s().p("EAw/AIbIsPkOIsvjyIgCAAIgFgBIgbgEQglgHhCgJQiXgXkHgmIhjgPIgCAAIgHgBIgigEIiPgQIo6hEIs4hjIgCAAIgGAAIgagDIhogKImhgpIujhdIgCAAIgHgBIgigDIiOgOIowg1IgBAAIgHgBIgDgBIgWgCIhjgKIhogMIACghIABgFICQAPQOcBjWvCYIGYAqIOeBlIDxAgIJiBjIN+EPILMD7IgCAFQgJANgBABIgDAAQgGAAgFgCg");
	this.shape_165.setTransform(752,441.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(101,156,197,0.6)").s().p("EAwnAIZIsJkMIspjxIgBAAIgGgBIgagEQgmgHhAgJQiYgYkDgmIhigPIgCAAIgHgBIgigEIiNgRIo3hDIsyhiIgBAAIgGAAIgagDIhngKImdgpIudhdIgCAAIgHgBIgjgDIiMgNIosg1IgBAAIgGgBIgDgBIgWgCIhigKIhogMIAAAAIACggIACgGICOAQQOdBjWcCVIGVAqIOWBlIDvAgIJfBjIN1EOILID6IgCAEIgKAOIgDABQgGAAgFgCg");
	this.shape_166.setTransform(754.4,441.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(101,156,197,0.6)").s().p("EAwQAIWIsEkJIsjjwIgBAAIgGgBIgagEIhlgQQiXgZkAgmIhhgQIgCAAIgHgBIgigDIiMgRIozhDIsrhhIgCAAIgGAAIgZgDIhngKImagpIuVhdIgCAAIgHAAIgigDIiMgOIong0IgCAAIgGgBIgEgBIgUgCIhjgKIhmgLIADghIABgFICNAPQOdBjWJCUIGSApIOQBlIDtAfIJZBlINwENILCD3IgCAFQgIAMgCABIgFABIgIgCg");
	this.shape_167.setTransform(756.8,442.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(101,156,197,0.6)").s().p("EAv5AIUIr/kIIscjuIgBAAIgGgBIgagEQglgHg/gJQiYgZj8gnIhggQIgCAAIgGgBIgigEIiMgQIouhDIslhgIgCAAIgFAAIgagDIhlgKImXgpIuPhcIgCAAIgHgBIgigDIiLgNIojg0IgCAAIgFgBIgEgBIgUgCIhigKIhlgLIAAAAIACggIABgFICNAPQOdBjV2CRIGOApIOJBlIDsAfIJUBmIJpC6IEABRIK8D2IgBAEIgKAOIgFAAIgHgBg");
	this.shape_168.setTransform(759.2,442.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(101,156,197,0.6)").s().p("EAvhAISIr5kGIkvheInniPIgBAAIgFgBIgZgEIhkgQQiYgaj4gnIhfgQIgDAAIgGgBIgigEIiKgQIoqhCIsghgIgBAAIgGAAIgZgDIhlgKImTgpIuIhcIgCAAIgHgBIgigDIiJgNIofg0IgCAAIgFAAIgFgBIgUgCIhhgKIhkgLIgBAAIADggIACgFICLAPQOeBjVjCQIGLAoIOCBlIDqAfIJQBnINhEJIK3D0IAAAEIgLAOIgFABIgHgBg");
	this.shape_169.setTransform(761.6,442.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(101,156,197,0.6)").s().p("EAvJAIPIrykDIkuheInjiOIgBAAIgFgBIgZgEIhjgRQiYgaj0gnIhfgRIgCAAIgHgBIghgDIiJgRIomhBIsZhfIgCAAIgFAAIgZgCIhkgLImQgoIuBhcIgCAAIgHgBIgigDIiIgNIobg0IgCAAIgGAAIgDgBIgUgCIhggKIhkgLIAAAAIACgfIACgFICKAPQOfBjVPCNIGIApIN8BkIDoAeIJKBpIJfC3ID8BRIKyDyIAAAEIgLANIgGABIgGgBg");
	this.shape_170.setTransform(764,442.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(101,156,197,0.6)").s().p("EAuxAINIrskCIkrhdInfiMIgBAAIgGgBIgYgFIhigRQiYgbjxgoIhegQIgBAAIgHgBIgigEIiIgQIoihBIsTheIgBAAIgGAAIgYgCIhjgLImNgoIt6hcIgCAAIgHgBIghgDIiIgNIoXgzIgCAAIgFAAIgEgBIgUgCIhfgKIhjgLIAAAAIACgfIADgEICIAOQOgBjU8CMIGFAoIN1BkIDmAeIJFBrIJaC1ID6BQIKtDwIAAAEIgLAOIgGAAIgGAAg");
	this.shape_171.setTransform(766.4,443.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(101,156,197,0.6)").s().p("EAuZAIKIrmj/IkohdInciLIgBAAIgGgBIgYgFQgmgHg6gKQiYgcjugoIhdgQIgBAAIgIgBIgggEIiHgQIofhAIsNheIgBAAIgFAAIgYgCIhjgKImKgpItzhcIgBAAIgIAAIghgDIiGgNIoTgzIgCAAIgFAAIgEgBIgUgCIhdgKIhjgKIACggIACgEICIAPQOhBjUoCJIGCAoINuBkIDkAeIJABsIJWC0ID4BPIKoDvIAAADIgKAOIgIABIgFgBg");
	this.shape_172.setTransform(768.8,443.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(101,156,197,0.6)").s().p("EAuCAIIIrhj+IkmhcInXiLIgCAAIgFgBIgYgEQgmgIg6gKQiYgcjpgoIhcgRIgCAAIgHgBIghgEIiGgQIoahAIsGhcIgCAAIgFAAIgYgDIhigKImGgoItshcIgCAAIgHgBIghgDIiFgMIoPgyIgCAAIgFgBIgEgBIgTgCIhegJIhhgLIgBAAIADgfIACgDICHAOQOiBjUUCHIF/AoINnBjIDjAeII7BtIJQCzID3BPIKiDtIAAADIgKAOIgIABIgEAAg");
	this.shape_173.setTransform(771.2,443.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(101,156,197,0.6)").s().p("EAtrAIFIrbj7IkkhcInUiKIgBAAIgFgBIgYgEQgmgIg5gKQiYgdjmgoIhbgSIgCAAIgHgBIghgDIiEgQIoWg/IsBhcIgBAAIgFAAIgYgDIhhgKImDgoItlhbIgCAAIgHgBIghgDIiEgNIoLgxIgCAAIgFgBIgDgBIgUgCIhcgJIhhgLIgBAAIADgeIADgEICFAOQOjBjUBCGIF7AnINhBjIDhAeII2BuIJMCyID0BOIKdDrIAAAEIgKANIgIACIgDgBg");
	this.shape_174.setTransform(773.6,444);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(101,156,197,0.6)").s().p("EAtSAIDIrVj6IkhhbInQiIIgBAAIgFgBIgYgFIhegSQiYgejigpIhbgRIgBAAIgHgBIghgEIiEgPIoRg/Ir7hbIgBAAIgFAAIgYgDIhggKIl/goItehbIgDAAIgHgBIgggDIiDgMIoHgyIgCAAIgFAAIgEgBIgTgCIhcgJIhfgKIgBAAIADgfIACgDICFAOQOjBjTuCDIF5AnINZBjIDfAdIIxBxIJHCvIDzBPIKXDpIABADIgKANQgFACgDAAIgEAAg");
	this.shape_175.setTransform(776,444.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(101,156,197,0.6)").s().p("EAs7AIAIrPj3IkfhbInNiHIgBAAIgFgBIgXgFIhdgSQiZgfjegpIhagRIgBAAIgHgBIgggEIiDgPIoNg/Ir1haIgCAAIgEAAIgYgDIhfgKIl8goItXhbIgDAAIgHAAIgggDIiCgNIoDgxIgBAAIgFAAIgEgBIgTgCIhbgJIhfgKIgBAAIADgeIADgEICDAPQOkBjTbCAIF1AnINTBjIDdAdIIsByIJDCuIDwBOIKSDnIABADIgKAOQgFACgDAAIgDgBg");
	this.shape_176.setTransform(778.4,444.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(101,156,197,0.6)").s().p("EAsjAH+IrJj2IkdhaInIiHIgBAAIgFgBIgXgEIhcgTQiZgfjagpIhZgSIgCAAIgHgBIgggEIiCgPIoJg+IruhZIgCAAIgFgBIgXgCIhegKIl5goItQhbIgDAAIgHgBIgfgDIiCgMIn/gwIgBAAIgFgBIgEAAIgSgCIhbgKIhegKIgBAAIADgdIADgDICDAOQOkBjTHB+IFzAnINMBiIDbAdIInBzII+CtIDuBOIKNDlIABADIgKAOQgFACgEAAIgCAAg");
	this.shape_177.setTransform(780.8,444.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(101,156,197,0.6)").s().p("EAsLAH7IrDjzIkahaInFiGIgBAAIgFgBIgXgEQgmgJg1gKQiZggjWgpIhYgTIgCAAIgHgBIgggDIiBgPIoEg+IrphYIgCAAIgEgBIgXgCIhegKIl1goItKhaIgCAAIgHgBIgggDIiAgMIn6gwIgCAAIgFgBIgDgBIgTgBIhZgJIhegKIgBAAIAEgeIACgDICCAOQOmBjSzB9IFvAmINFBiIDaAdIIiB0II5CsIDsBNIKHDkIABADIgJANQgFADgDAAIgDgBg");
	this.shape_178.setTransform(783.3,445);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(101,156,197,0.6)").s().p("EAr0AH5Iq+jyIkXhZInCiEIgBAAIgFgBIgWgFQgmgJg0gKQiZghjTgqIhXgSIgCAAIgHgBIgggEIiAgOIoAg9IrihYIgCAAIgFgBIgWgCIhdgKIlygoItChaIgDAAIgHgBIgfgDIh/gMIn4gvIAAAAIgFgBIgEgBIgSgBIhZgJIhdgKIAAAAIACgeIADgCICBAOQOmBjSgB6IFsAmIM/BiIDYAdIIdB2II0CqIDrBMIKBDiIABADIgJANQgFADgDAAIgCAAg");
	this.shape_179.setTransform(785.7,445.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(101,156,197,0.6)").s().p("EArcAH2Iq4jvIkVhZIm9iDIgCAAIgEgBIgXgFQglgJg0gKQiZgijPgqIhXgSIgBAAIgHgBIgggEIh+gPIn9g8IrchXIgBAAIgFgBIgWgCIhcgKIlvgnQlegnneg0IgCAAIgHAAIgfgDIh/gMInygvIgCAAIgEgBIgEgBIgSgCIhYgIIhcgKIAAAAIADgdIADgCIB/ANQOnBjSNB5IFpAlIM3BiIDWAcIIYB4IIwCoIDpBNIJ8DgIABACIgJANQgFADgDAAIgCAAg");
	this.shape_180.setTransform(788.1,445.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(101,156,197,0.6)").s().p("EArEAH0IqyjuIkThZIm6iCIgBAAIgEgBIgWgEIhYgUQiZgijMgqIhWgTIgCAAIgHgBIgegEIh+gOIn4g8IrXhXIgBAAIgFAAIgVgCIhbgKIltgoIs0haIgCAAIgIAAIgegDIh9gMInvgvIgBAAIgFAAIgDgBIgSgCIhYgJIhbgJIAAAAIACgdIAEgCIB+ANQOoBjR5B3IFmAlIMxBiIDUAcIITB4IIrCoIDmBMIJ4DeIACACIgKANQgGAEgDAAIgBAAg");
	this.shape_181.setTransform(790.5,445.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(101,156,197,0.6)").s().p("EAqtAHxIqtjrIkQhZIm2iAIgBAAIgFgBIgVgFQgmgJgygLQiZgjjHgqIhWgTIgBAAIgHgBIgfgEIh9gPIn0g7IrQhWIgCAAIgDAAIgXgCIhagKIlogoIsuhZIgDAAIgGgBIgfgDIh9gMInqguIgBAAIgFAAIgDgBIgSgCIhWgJIhbgJIgBAAIAEgdIADgCIB+AOQOoBjRmB0IFiAlIMrBiIDSAbIIOB6IInCmIDjBMIJzDcIACACIgKAOQgFAEgDAAIgBgBg");
	this.shape_182.setTransform(792.9,446.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(101,156,197,0.6)").s().p("EAqVAHvIqnjpIkOhZImyh/IgBAAIgEgBIgWgFIhWgUQiagkjEgqIhUgUIgBAAIgHgBIgfgDIh8gPInwg7IrKhVIgBAAIgEAAIgWgCIhZgKIllgnIsnhaIgDAAIgHgBIgegDIh7gLInnguIgBAAIgEgBIgEAAIgRgCIhWgJIhagJIAAAAIADgcIADgCIB8ANQOqBjRSBzIFgAkIMjBhIDRAcIIJB7IIhClIDjBLIJsDbIACACIgJANQgGAEgCAAIgBAAg");
	this.shape_183.setTransform(795.3,446.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(101,156,197,0.6)").s().p("EAp9AHsIusk/Imuh+IgBAAIgFgBIgVgFIhVgUQiagljAgrIhUgTIgBAAIgHgBIgfgEIh6gOInsg7IrEhUIgBAAIgEAAIgWgCIhYgKIlignIsghaIgDAAIgHAAIgegDIh6gMInigtIgCAAIgEgBIgEAAIgRgCIhVgJIhYgJIgBAAIADgcIAEgBIB7ANQOqBjQ/BwIFcAkIMdBhIDPAcIIEB9IIdCjIDgBLIJnDYIACACIgJANQgFAEgDAAIgBAAg");
	this.shape_184.setTransform(797.7,446.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(101,156,197,0.6)").s().p("EAplAHqIujk9Imrh+IgCAAIgDgBIgWgEQglgKgvgLQiagli9grIhRgUIgCAAIgHgBIgegEIh6gOInog6Iq9hTIgCAAIgEAAIgVgDIhYgJIlegnIsZhaIgCAAIgHAAIgegDIh6gMInegtIgBAAIgFAAIgDgBIgRgCIhUgIIhYgJIgBAAIADgcIAEgBIB6ANQOrBjQrBuIFZAkIMWBhIDNAbIH/B+IIZCiIDeBKIJiDXIACACIgJANQgGAFgCAAIgBAAg");
	this.shape_185.setTransform(800.2,446.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(101,156,197,0.6)").s().p("EApNAHnIubk6Imnh8IgBAAIgEgBIgVgFIhTgVQiagmi5grIhSgUIgBAAIgHgBIgfgEIh4gOInkg6Iq3hSIgBAAIgEAAIgVgDIhXgJIlcgnIsShZIgCAAIgHgBIgegDIh4gLInagtIgCAAIgDAAIgEgBIgRgCIhTgIIhXgJIgBAAIADgcIAEAAIB5AMQOsBjQYBtIFWAjIMPBhIDLAbIH6B/IIUChIM5EeIACACIgJANQgFAFgDAAIgBAAg");
	this.shape_186.setTransform(802.6,447.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(101,156,197,0.6)").s().p("EAo2AHlIuTk4Imkh7IgBAAIgDgBIgVgFIhTgVQiagni1grIhRgVIgBAAIgHgBIgegDIh4gOInfg5IqyhSIgBAAIgEAAIgUgDIhWgJIlYgnIsMhZIgCAAIgHgBIgdgDIh4gLInWgsIgBAAIgEAAIgEgBIgQgCIhTgIIhWgJIgBAAIADgbIAEgBIB4ANQOtBjQEBqIFTAjIMJBhIDJAaIH1CBIIPCfIMxEdIADACIgJANQgFAFgDAAIAAAAg");
	this.shape_187.setTransform(805,447.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(101,156,197,0.6)").s().p("EAoeAHiIuLk1Imfh6IgBAAIgEgBIgVgFIhRgVQibgoixgsIhQgUIgCAAIgHgBIgdgEIh2gNIncg5IqshRIAAAAIgEAAIgVgDIhVgJIlUgnIsFhZIgCAAIgHAAIgdgDIh3gLInSgsIgBAAIgEAAIgDgBIgRgCIhSgIIhWgIIAAAAIADgcIAEAAIB3ANQOtBjPxBoIFQAiIMCBhIDIAaIHwCDIIKCdIMqEaIADACIgJANQgGAFgCAAIAAAAg");
	this.shape_188.setTransform(807.4,447.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(101,156,197,0.6)").s().p("EAoGAHgIuDkzImbh5IgBAAIgDgBIgVgFIhQgWQibgoiugsIhPgVIgBAAIgHgBIgegEIh2gNInWg4IqmhRIgBAAIgDAAIgUgCIhVgKIlRgmIr+hZIgCAAIgHAAIgdgDIh2gLInOgsIAAAAIgEAAIgEgBIgRgBIhQgIIhVgJIgBAAIADgbIAFAAIB2ANQOtBjPeBmIFNAiIL7BgIDGAaIHrCEIIFCcIMjEYIADACIgJANQgGAGgBAAIgBAAg");
	this.shape_189.setTransform(809.8,447.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(101,156,197,0.6)").s().p("EAnvAHdIt7kwImXh4IgBAAIgEgBIgUgFIhQgWQibgpipgsIhPgVIgBAAIgHgBIgegEIh0gNInTg4IqfhQIgBAAIgEAAIgTgCIhUgKIlPgmIr2hYIgCAAIgHgBIgdgDIh1gLInKgrIgBAAIgDAAIgEgBIgQgCIhQgHIhUgJIgBAAIADgaIAFAAIB1AMQOuBjPLBkIFJAiIL0BgIDEAaIHmCFIIBCbIMcEWIADABIgIANQgHAGgBAAIAAAAg");
	this.shape_190.setTransform(812.2,448.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(101,156,197,0.6)").s().p("EAnXAHbItykuImUh3IgCAAIgDgBIgUgFIhOgWQibgqimgsIhOgWIgBAAIgHgBIgdgDIh0gOInPg3IqZhPIgBAAIgDAAIgUgCIhTgJIlLgnIrvhYIgCAAIgHAAIgdgDIhzgLInGgrIgBAAIgEAAIgEgBIgPgCIhQgHIhTgIIgBAAIAEgbIAEAAIB0ANQOwBjO2BiIFHAhILtBgIDCAaIHhCGIH8CaIMVETIADACIgJAMQgFAHgBAAIgBAAg");
	this.shape_191.setTransform(814.6,448.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(101,156,197,0.6)").s().p("EAm/AHYItqkrImRh2IAAAAIgDgBIgUgFIhOgWQiagrijgtIhNgVIgBAAIgHgBIgdgEIhzgNInLg2IqShPIgBAAIgEAAIgTgCIhSgJIlHgnIrphYIgCAAIgHAAIgdgDIhygLInCgqIgBAAIgEAAIgEgBIgPgCIhOgHIhTgIIgBAAIAEgbIAEABIBzAMQOwBjOjBgIFEAhILmBgIDBAZIPTEgIMNESIAEABIgJANQgFAHgCAAIAAgBg");
	this.shape_192.setTransform(817.1,448.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(101,156,197,0.6)").s().p("EAmnAHWIthkpImNh1IgBAAIgDgBIgUgFIhMgXIk6hYIhMgVIgBAAIgHgBIgdgEIhygNInGg2IqNhOIgBAAIgDAAIgTgCIhSgJIlEgmIrihYIgCAAIgHgBIgcgDIhxgKIm+gqIgBAAIgDAAIgEgBIgPgCIhOgHIhSgIIgBAAIAEgaIAEABIByAMQOxBjOQBeIFAAhILgBfIC/AZIPJEgIMGEPIAEABIgJANQgFAHgCAAIAAAAg");
	this.shape_193.setTransform(819.5,448.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(101,156,197,0.6)").s().p("EAmQAHUItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqIiugRIAEgaQSZB8RIBxIOWB4IPAEgIMCEOQgOAUgBAAIAAAAg");
	this.shape_194.setTransform(821.9,449.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(101,156,197,0.6)").s().p("AYpCtItmj+IgBAAIgHgBIgdgDIhvgOQiWgTkpgjIjggcIgCAAIgHAAIgngGIiegTIp/hLIrOhVIgCAAIgHgBIgcgDIhvgKIm+grIisgQIgBAAIAEgZIARABIP8BrITCB/IOOB4IO4EeILtEHIAPAGIgOASIgBABg");
	this.shape_195.setTransform(823.9,449.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(101,156,197,0.6)").s().p("AYcCtItfj8IgCAAIgGgBIgcgEIhvgNIm6g3IjegcIgDAAIgHgBIgmgFIidgTIp6hLIrIhUIgCAAIgHgBIgbgDIhvgKIm6gqIirgRIADgZIARABIP0BpIS3B/IOHB7IOwEcILoEFIANAFIgNASIgBABg");
	this.shape_196.setTransform(825.9,449.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(101,156,197,0.6)").s().p("AYOCtItXj6IgCAAIgHgCIgbgDIhugNQiVgVkhgkIjcgcIgDAAIgHgBIgmgFIicgTIp1hKIrBhTIgCAAIgHgBIgbgDIhugLIm2gpIiqgQIAAAAIADgaIARABIPrBpISuB+IN/B8IOpEZILhEEIANAEIgNATIgBABg");
	this.shape_197.setTransform(827.9,449.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(101,156,197,0.6)").s().p("AYBCtItRj5IgCAAIgGgBIgbgDIhsgOQiWgVkdgkIjagdIgDAAIgHgBIglgFIibgSIpwhKIq8hTIgCAAIgHAAIgbgDIhsgKImzgqIiogRIAEgZIAQABIPiBnISkB+IN4B+IOhEYILbEAIANAGIgNASIgCABg");
	this.shape_198.setTransform(829.9,450.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(101,156,197,0.6)").s().p("AX0CtItKj3IgBAAIgHgBIgbgEIhrgNQiWgWkZglIjYgdIgCAAIgHgBIgmgEIiZgSIprhKIq2hSIgCAAIgGgBIgbgCIhsgKImugrIingQIgBAAIAEgYIAQAAIPaBmISbB+INvB/IOZEVILWD/IAMAGIgNARIgBABg");
	this.shape_199.setTransform(831.9,450.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(101,156,197,0.6)").s().p("AXmCtItCj1IgCAAIgGgBIgbgEIhrgOQiVgWkUglIjWgdIgEAAIgGgBIgmgFIiXgSIpnhJIqvhRIgCAAIgHgBIgagDIhrgKImqgpIimgQIgBAAIAEgZIAPAAIPSBlISRB9INnCBIOTEUILPD8IAMAGIgNARIgCABg");
	this.shape_200.setTransform(833.9,450.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(101,156,197,0.6)").s().p("AXZCuIs8j0IgBAAIgHgBIgagEIhpgOQiWgXkQglIjVgeIgCAAIgHgBIglgEIiXgSIphhIIqphRIgDAAIgFgBIgbgCIhqgLImngpIikgQIAAAAIADgZIAPAAIPKBlISHB8INgCCIOKESILJD6IAMAGQgKAPgEACIgBABg");
	this.shape_201.setTransform(835.9,450.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(101,156,197,0.6)").s().p("AXMCuIs1jyIgBAAIgHgBIgagEIhogOQiVgYkNglIjSgeIgDAAIgHgBIglgFIiVgSIpdhHIqjhQIgCAAIgGgBIgagCIhpgLImjgpIijgQIAAAAIADgYIAOgBIPCBkIR+B8IBfAMIL4B3IODEQILDD4IALAGQgKAPgDACIgBABg");
	this.shape_202.setTransform(837.9,450.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(101,156,197,0.6)").s().p("AW/CuIsujwIgCAAIgGgBIgZgEIhogPQiVgXkJgmIjQgfIgDAAIgGgBIglgEIiVgSIpXhHIqdhPIgCAAIgGgBIgagCIhngLImfgpIiigQIgBAAIADgYIAPgBIO5BjIRzB8IBgAMILxB4IN7EOIK9D2IAKAGIgNARIgBABg");
	this.shape_203.setTransform(839.9,451.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(101,156,197,0.6)").s().p("AWxCuIsnjuIgBAAIgGgBIgagEIhmgPQiVgZkFglIjOggIgDAAIgHAAIgjgFIiUgRIpShGIqYhQIgBAAIgGAAIgagCIhngKImbgpIiggRIgBAAIADgXIAOgCIOxBiIRqB8IBeALILrB7INzEMIK3DzIAKAGIgNASIgBAAg");
	this.shape_204.setTransform(841.9,451.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(101,156,197,0.6)").s().p("AWkCvIsgjtIgBAAIgGgBIgagEIhlgPQiVgakBglIjMggIgCAAIgHgBIgkgEIiSgRIpOhHIqRhOIgBAAIgGAAIgagDIhlgJImYgqIifgPIgBAAIADgYIAOgCIOoBiIRhB6IBdAMILkB7INrEKIKxDyIAKAHIgNARIgBAAg");
	this.shape_205.setTransform(843.9,451.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(101,156,197,0.6)").s().p("AWXCvIsZjrIgBAAIgGgBIgZgEQglgHg/gJQiVgZj9gmIjKggIgDAAIgHgBIgjgFIiRgRIpJhFIqLhNIgCAAIgFgBIgZgCIhlgLImUgoIiegQIAAAAIADgXIAMgDIOhBgIRXB7IBcAMILdB9INjEIIKsDvIAIAHIgMARIgBAAg");
	this.shape_206.setTransform(845.9,451.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(101,156,197,0.6)").s().p("AWJCvIsRjpIgCAAIgFgBIgZgEIhjgPQiVgbj5gmIjIghIgDAAIgHgBIgjgFIiQgRIpDhEIqFhNIgCAAIgGAAIgYgDIhkgJImQgpIicgPIgBAAIADgYIAMgDIOYBgIROB6IBbALILWB/INcEGIKlDtIAIAHIgMARIgBAAg");
	this.shape_207.setTransform(847.9,452);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(101,156,197,0.6)").s().p("AV8CvIsKjnIgCAAIgFgBIgZgEIhigQQiVgbj1gmIjGgiIgCAAIgHgBIgjgEIiPgRIo/hEIp+hMIgCAAIgGAAIgYgDIhjgKImMgoIibgQIgBAAIADgXIAMgDIOQBfIRDB6IBbALILPCAINUEEIKgDsIAHAGIgMAQIgBABg");
	this.shape_208.setTransform(849.9,452.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(101,156,197,0.6)").s().p("AVvCwIlThpImxh9IgBAAIgFgBIgZgEQglgHg8gJQiVgcjxgnIjEghIgCAAIgHgBIgjgEIiNgRIo6hEIp5hLIgBAAIgGAAIgYgDIhigKImIgoIiagPIgBAAIADgXIAMgEIOHBeIQ6B5IBaAMILICBINMECIKaDqIAHAGIgMAQIgBABg");
	this.shape_209.setTransform(851.9,452.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(101,156,197,0.6)").s().p("AViCwIlQhoImth8IgBAAIgGgBIgYgEIhggRQiUgcjugnIjCgiIgCAAIgHgBIgigEIiNgQIo0hDIpzhLIgCAAIgFAAIgYgDIhhgKImEgnIiYgQIgCAAIADgXIALgEIOABeIQwB4IBZAMILBCCIIKCcIE7BkIKTDoIAHAGIgMAQIgBABg");
	this.shape_210.setTransform(853.9,452.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(101,156,197,0.6)").s().p("AVUCwIlMhnImqh7IAAAAIgGgBIgYgEIhfgRQiUgdjpgnIjBgiIgCAAIgHgBIgigEIiLgRIovhCIpthKIgCAAIgFAAIgYgDIhggJImBgoIiXgQIAAAAIACgWIALgFIN3BdIQmB4IBZALIK6CFIIFCaIE4BkIKNDlQADAEADACIgLAQIgBABg");
	this.shape_211.setTransform(856,452.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(101,156,197,0.6)").s().p("AVHCwIlJhmImlh6IgCAAIgFgBIgXgFQglgHg5gJQiVgdjlgoIi+gjIgCAAIgHgBIgigEIiKgRIorhBIpmhJIgCAAIgFgBIgXgCIhggJIl9goIiVgPIgBAAIADgXIAKgEINvBbIQdB4IBXALIKzCFIIACaIE1BiIKIDkIAFAGQgJAOgCACIgBAAg");
	this.shape_212.setTransform(857.9,453);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(101,156,197,0.6)").s().p("AU6CxIlHhmImhh6IgBAAIgFgBIgXgDIhegRQiUgfjhgnIi8gkIgCAAIgHAAIgigEIiIgQIomhBIphhJIgCAAIgFgBIgWgCIhfgKIl5gnIiUgPIgBAAIACgWIAKgGINnBbIQTB3IBXAMIKsCHIH7CYIEyBiIKCDhIAFAGQgJAOgCACIgBAAg");
	this.shape_213.setTransform(860,453.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(101,156,197,0.6)").s().p("AUsCxIlChmImeh3IgCAAIgEgBIgYgFIhbgRQiUgejegoIi6gkIgCAAIgHgBIgigEIiHgQIoghAIpbhIIgBAAIgGAAIgWgCIhegKIl1goIiSgPIgCAAIADgWIAJgGINeBaIQKB4IBWALIKkCIIH3CWIEwBiIJ7DfIAFAHIgLAPIgBAAg");
	this.shape_214.setTransform(862,453.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(101,156,197,0.6)").s().p("AUfCyIlAhlImah3IgBAAIgFgBIgXgEIhagSQiUgfjagoIi4gkIgCAAIgHgBIghgFIiGgPIochAIpVhHIgBAAIgFAAIgXgDIhcgKIlxgmIiRgQIgCAAIADgVIAJgGINVBZIQAB2IBVALIKeCLIHzCUIEsBhIJ2DdIAEAHIgMAPIgBAAg");
	this.shape_215.setTransform(864,453.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(101,156,197,0.6)").s().p("AUSCyIk9hlImVh1IgCAAIgEgBIgXgFQglgIg1gJQiUggjWgoIi1glIgCAAIgHgBIgigEIiFgQIoXg/IpOhGIgBAAIgFAAIgWgDIhcgKIltgmIiPgQIgDAAIADgVIAJgGINNBYIP2B2IBVALIKWCLIHuCUIEpBgIJxDbIACAHQgJAOgBABIgBAAg");
	this.shape_216.setTransform(866,453.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(101,156,197,0.6)").s().p("AUECyIk5hkImSh0IgBAAIgFgBIgWgFQglgIg0gJQiUghjRgoIi0glIgDAAIgHgBIgggFIiEgPIoSg/IpIhFIgBAAIgFAAIgWgDIhbgJIlqgnIiOgPIgBAAIACgWIAIgGINFBXIPtB2IBTAKIKQCOIHpCSIEmBgIJrDYIACAHQgJAOgCABIgBAAg");
	this.shape_217.setTransform(868,454);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(101,156,197,0.6)").s().p("AT3CyIk2hjImOhzIgBAAIgFgBIgWgFIhYgSQiTghjOgoIiygmIgCAAIgHgBIghgEIiCgPIoNg+IpChFIgCAAIgEAAIgWgDIhZgJIlngnIiMgPIgCAAIACgVIAIgHIM9BWIPjB2IBSAKIKJCPIHlCQIEjBgIJkDWIACAHQgJAOgCABIgBAAg");
	this.shape_218.setTransform(870,454.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(101,156,197,0.6)").s().p("ATqCzIkzhjImLhyIgBAAIgEgBIgWgFQgkgIgygKQiUgijKgpIiwglIgCAAIgHgBIgggEIiBgQIoIg9Io9hEIgBAAIgEAAIgWgDIhYgJIljgnIiLgPIgCAAIADgVIAHgHIM0BVIPaB1IBRALIKCCQIHgCPIEgBfIJeDUIACAIQgJANgCABIgBAAg");
	this.shape_219.setTransform(872,454.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(101,156,197,0.6)").s().p("ATdCzIkwhiImHhxIgBAAIgEgBIgWgFIhVgTQiUgijGgpIiugmIgCAAIgHgBIgggEIiAgPIoDg9Io2hEIgBAAIgEAAIgWgCIhXgJIlfgmIiKgQIgCAAIADgUIAGgIIMtBUIPPB1IBRAKIJ7CSIHbCNIEdBfIJZDSIABAHQgJAOgCABIgBAAg");
	this.shape_220.setTransform(874,454.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(101,156,197,0.6)").s().p("ATPCzIkthiImChwIgBAAIgEgBIgWgEIhUgSQiUgkjCgpIisgmIgBAAIgHgBIgggFIh/gOIn+g9IowhCIgBAAIgFAAIgVgDIhWgKIlbgmIiIgPIgDAAIADgUIAGgIIMkBUIPGB0IBQAKIJ0CTIHWCNIEbBdIJSDQIABAIQgJANgCABIgBAAg");
	this.shape_221.setTransform(876,454.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(101,156,197,0.6)").s().p("ATCCzIkqhhIl/huIgBAAIgDgBIgWgFQgkgJgvgKQiTgki+gpIiqgnIgDAAIgGgBIgggEIh+gPIn5g8IoqhCIgBAAIgEAAIgUgCIhWgJIlXgmIiHgPIgCAAIACgUIAGgJIMbBTIO9B0IBPAKIJtCUIHSCLIEXBdIJMDOIAAAIQgJANgBABIgBAAg");
	this.shape_222.setTransform(878,455.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(101,156,197,0.6)").s().p("AS1CzIknhgIl6huIgCAAIgEgBIgVgEIhSgTQiTgli6gpIiogoIgCAAIgHgBIgggDIh8gPIn0g7IokhCIgBAAIgEAAIgVgCIhUgKIlTglIiGgPIgDAAIADgUIAFgJIMUBSIOzBzIBOAKIJmCXIHMCJIEVBdIJGDLIAAAIQgJANgBABIgBAAg");
	this.shape_223.setTransform(880,455.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(101,156,197,0.6)").s().p("Ac1GVIqOjhIkjhgIl3htIgBAAIgFgBIgUgEIhRgTQiTgmi3gpIilgoIgCAAIgHgBIgfgEIh7gPInvg6IofhBIgBAAIgDAAIgVgCIhUgJIlPgmIiFgPIgCAAIADgUIAFgJIMLBRIOpBzIBNAKIJgCYIHICIINREmIAAAHQgJANgBABIgCAAg");
	this.shape_224.setTransform(882.1,455.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(101,156,197,0.6)").s().p("AchGTIuok+IlzhsIgBAAIgEgBIgUgEIhQgUQiUgliygqIikgpIgBAAIgHgBIgfgEIh6gOInqg6IoYhAIgBAAIgEAAIgUgCIhTgJIlLgmIiDgPIgDAAIADgTIAEgKIMDBRIOfByIBNAKIJZCZIHCCGINKEkIgCAIIgKANIgBAAg");
	this.shape_225.setTransform(884.1,455.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(101,156,197,0.6)").s().p("AcMGRIuek8IlvhqIgBAAIgDgBIgUgEIhQgUQiTgmiugqIiigpIgCAAIgHgBIgegEIh5gOInlg6IoSg/IgBAAIgEAAIgTgCIhSgJIlIglIiBgPIgDAAIACgUIAEgKIL7BQIOWByIBLAKIJSCaIG+CFINBEhIgDAIIgJANIgCAAg");
	this.shape_226.setTransform(886.1,455.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(101,156,197,0.6)").s().p("Ab4GPIuUk5IlrhoIgBAAIgEgBIgTgFIhOgUQiTgnirgqIiggqIgBAAIgHgBIgegEIh4gNIngg5IoMg/IgBAAIgEAAIgTgCIhRgJIlEglIiAgPIgDAAIADgTIADgLILyBPIOMByIBLAJIJLCcIG6CEIM3EeIgDAIQgIAMgCABIgBAAg");
	this.shape_227.setTransform(888.1,456.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(101,156,197,0.6)").s().p("AbkGMIuKk1IlohoIgBAAIgDAAIgUgGIhNgUQiTgoimgqIiegqIgCAAIgHgBIgdgDIh3gOInbg5IoGg9IgBAAIgDAAIgUgCIhPgJIlAglIh/gPIgDAAIACgTIADgKILqBNIODBxIBKAKIJECeIG0CBIMvEcIgDAIQgJAMgBAAIgBAAg");
	this.shape_228.setTransform(890.2,456.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(101,156,197,0.6)").s().p("AbPGKIt/kyIlkhnIgBAAIgDgBIgUgEIhMgUQiSgpijgrIicgqIgBAAIgIgBIgdgEIh1gNInXg4In/g9IgBAAIgEAAIgTgCIhPgKIk8gkIh9gOIgDAAIACgTIADgMILhBOIN5BwIBJAJII9CfIGwCCIMmEYIgEAIQgIAMgCAAIgBAAg");
	this.shape_229.setTransform(892.2,456.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(101,156,197,0.6)").s().p("Aa7GIIt2kvIlghlIgBAAIgDgBIgTgGIhLgUIkxhUIiagqIgCAAIgHgBIgdgEIh0gNInSg4In5g8IgBAAIgDAAIgTgCIhOgJIk5gkIh8gQIgCAAIACgSIACgLILZBLINvBxIBJAKII2CgIGrB/IMdEWIgEAJQgJAMgBgBIgBAAg");
	this.shape_230.setTransform(894.3,456.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(101,156,197,0.6)").s().p("AanGGIttksIlbhlIgBAAIgEgBIgSgEIhKgVIkthVIiYgrIgCAAIgHgBIgdgDIhzgOInMg3Inzg7IgBAAIgEAAIgSgCIhMgJIk2glIh6gOIgDAAIACgSIACgNILRBMINmBwIBHAJIIvCiIGnB+IMTETIgEAJQgJAMgBgBIgBAAg");
	this.shape_231.setTransform(896.3,456.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(101,156,197,0.6)").s().p("AaTGEIgBAAItikqIlYhjIgBAAIgDgBIgSgFIhJgVIkphVIiWgsIgCAAIgHgBIgdgDIhxgNInHg3Inug6IgBAAIgDAAIgSgCIhMgJIkxgkIh5gPIgDAAIACgSIACgMILIBKINbBvIBHAKIPKEfIMLERIgGAJQgHALgBAAIgBAAg");
	this.shape_232.setTransform(898.3,457.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(101,156,197,0.6)").s().p("AZ/GCItZknItrj/IgCAAIgHgBIgcgEIhxgNInCg1Ivwh4IADgeILABJIOYB4IO+EgIMCEOQgNAUgCAAIAAAAg");
	this.shape_233.setTransform(900.3,457.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(101,156,197,0.6)").s().p("AZKF4Is3kaItWj7IgBAAIgIgBIgbgDIhtgPImUg1IgBAAIgHgBIgbgDIgIgBIiJgRIothBIkdgiIADgeIATAAIKcBIIGIAzIH6BIIOoEbILxEIIgEAGQgIANgCAAIgPgFg");
	this.shape_234.setTransform(904.2,457.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(101,156,197,0.6)").s().p("AYlF1IsjkUItDj2IgCAAIgGgBIgbgEIhqgPQiPgWj5gjIgCAAIgGgBIgbgDIgIgBIiGgQIohhBIkWghIACgdIARgBIKOBHIF+AxIHtBOIOSEVILfEBIgCAGQgIANgCAAQgIgBgGgCg");
	this.shape_235.setTransform(908.1,458.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(101,156,197,0.6)").s().p("AYAFyIsRkNIsujxIgCAAIgFgBIgagEQgngHhBgKQiPgZjugkIgBAAIgHgBIgagDIgHgBIiEgQIoUg/IkRggIADgcIAOgEIJ/BHIF1AxIHgBSIN8EPILOD8IgBAFIgKANIgDAAQgGAAgEgCg");
	this.shape_236.setTransform(912,458.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(101,156,197,0.6)").s().p("AXbFvIr+kHIj1hMIoligIgBAAIgGgBIgZgFIhkgRQiRgcjhglIgBAAIgHgBIgZgDIgIgBIiBgQIoJg9IkKggIADgbIANgGIJwBHIFrAvIHTBYINmEJIK8D1IABAFIgKANIgHABIgFgBg");
	this.shape_237.setTransform(915.8,458.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(101,156,197,0.6)").s().p("AW1FrIrqkBIjvhLIoYicIgBAAIgFgBIgZgEQgngJg5gKQiSgfjVgmIgBAAIgHgBIgZgDIgHgBIh+gPIn+g8IkDgfIADgaIALgIIJgBHIFjAuIHGBcIKNDEIDDA/IKqDwIACAEIgKANQgEACgDAAIgEgBg");
	this.shape_238.setTransform(919.8,459.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(101,156,197,0.6)").s().p("AWPFnIrXj6IjohKIoKiYIgBAAIgFgBIgYgFIhdgTQiTgijIgoIgCAAIgHgBIgYgCIgHgBIh8gPInxg7Ij9gdIADgaIAJgKIJRBHIFaAtIG5BhIJ8C/IC+A+IKZDqIACAEIgJAMQgFADgEAAIgCgBg");
	this.shape_239.setTransform(923.7,459.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(101,156,197,0.6)").s().p("AVqFkIrFj0IjhhJIn9iUIgBAAIgEgBIgXgFIhbgVQiUgki7gpIgCAAIgGgBIgYgDIgIgBIh4gOInmg5Ij2gdIADgZIAHgMIJCBHIFQArIGsBnIJsC6IM/EgIAEAEIgJAMQgFAEgDAAIgBAAg");
	this.shape_240.setTransform(927.6,460.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(101,156,197,0.6)").s().p("AVEFgIuMk2InviPIgBAAIgFgBIgVgGIhYgWQiVgnivgqIgCAAIgGgBIgXgCIgHgBIh2gOInag4IjwgcIACgZIAFgNII0BGIFHArIGfBrIJbC1IMpEaIAEADIgJALQgFAGgCAAIgBAAg");
	this.shape_241.setTransform(931.5,460.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(101,156,197,0.6)").s().p("AUeFcItzkuInhiMIgBAAIgEgBIgVgGIhUgWQiWgqijgrIgCAAIgHgBIgWgDIgHgBIhzgNInOg3IjpgcIACgXIADgPIIlBGIE+ApIGRBwIJLCwIMRETIAGACIgIAMQgGAHgCAAIAAAAg");
	this.shape_242.setTransform(935.5,461.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(101,156,197,0.6)").s().p("AT4FYItZknItrj/IgCAAIgGgBIgdgEIhwgNInDg1IjigbIACgoINMBuIO9EgIMDEOQgOAVgBAAIgBgBg");
	this.shape_243.setTransform(939.4,461.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(101,156,197,0.6)").s().p("ATKFSIs6kcItOj5IgCAAIgGgBIgcgEIhsgOQiWgUkbglIitgXIgDAAIgHgBIgkgEIAAAAIADgnIADAAIMqB0IOeEYILgECIAHADQgNAUgBAAIgDgBg");
	this.shape_244.setTransform(943.8,462.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(101,156,197,0.6)").s().p("ASfFMIsfkTIswjxIgCAAIgGAAIgagFIhogOQiWgYkLgmIingYIgCAAIgHgBIgjgEIADglIACgBIMNB6IN+EPILHD5IAGAEQgMATgCAAIgCgBg");
	this.shape_245.setTransform(948.1,462.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(101,156,197,0.6)").s().p("AR0FHIsDkJIlJhkInKiHIgBAAIgGgBIgagEIhjgQQiWgaj6gnIiggaIgDAAIgHgBIgigEIAAAAIADgkIACAAILvCAINfEHIKtDwIAGAEQgNASgCAAIgBAAg");
	this.shape_246.setTransform(952.5,463.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(101,156,197,0.6)").s().p("ARIFBIrmj/Ik+hhIm5iDIgBAAIgFgBIgYgDQglgIg6gJQiWgejpgoIibgbIgCAAIgHgBIghgEIAAAAIADgjIACAAIBAAIIKRB9IIcClIEjBaIKVDoIADAEQgLAQgCABIgCAAg");
	this.shape_247.setTransform(956.9,463.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(101,156,197,0.6)").s().p("AQdE8IrLj2IkwhfImoh9IgCAAIgEgBIgXgEIhbgSQiWghjZgoIiUgdIgCAAIgHgBIgggEIAAAAIADghIACgCIA+AJIJ1CDIIICeIEXBZIJ8DfIACAEQgLAQgBABIgBAAIgBAAg");
	this.shape_248.setTransform(961.2,464.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(101,156,197,0.6)").s().p("APxE2IqujsIklhdImWh4IgCAAIgEgBIgVgEQgmgJgygKQiVgkjIgpIiOgfIgCAAIgHgBIgfgEIAAAAIAEggIABgBIA7AIIJaCKIH0CYIEMBWIJjDWIAAAFQgKAPgCABIgBAAIgBAAg");
	this.shape_249.setTransform(965.6,464.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(101,156,197,0.6)").s().p("AEzBOIkXhaImHh0IgBAAIgEgBIgVgFIhSgUQiVgmi4gqIiHghIgCAAIgHgBIgegDIAAAAIADgfIABgCIA6AIII+CQIHfCSINLEiIgBAFIgMAPIgBAAg");
	this.shape_250.setTransform(970,465.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(101,156,197,0.6)").s().p("AAYgGIl2hvIgBAAIgDgBIgTgEIhPgVQiVgqingrIiBgiIgCAAIgHgBIgdgEIAAAAIAEgdIAAgCIA3AIIIjCWIHLCMIMmEWIgCAGQgJANgCABIgBABg");
	this.shape_251.setTransform(974.5,466.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(101,156,197,0.6)").s().p("ANuElItaklItrkCIgBAAIgHgBIgdgDIAEgeIA1AHIO+EgIMCEOQgOAUgBAAIAAAAg");
	this.shape_252.setTransform(978.9,466.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(101,156,197,0.6)").s().p("ANbEhItZklItrkBIATgcIO+EhIMCENQgNAVgCAAIAAgBg");
	this.shape_253.setTransform(980.7,467);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(101,156,197,0.6)").s().p("AMnETItXklIsFjjIANgdINcEFIMCEMQgNAUgCAAIAAAAg");
	this.shape_254.setTransform(985.9,468.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(101,156,197,0.6)").s().p("ALnD/IsWkQIrqjbIgBAAIANgdIM/D9ILpEDIgDAEQgLAPgBAAIglgLg");
	this.shape_255.setTransform(988.7,469.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(101,156,197,0.6)").s().p("ALOD2Ir7kFIrQjWIAAAAIALgbIMiD0ILOD6IgCAFQgKANgBAAQgSgDgRgHg");
	this.shape_256.setTransform(991.5,470.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(101,156,197,0.6)").s().p("AK0DvIrfj8Iq2jPIgBAAIALgaIAcAFILoDlIK2DyIgCADQgKAOgBABQgSgEgQgFg");
	this.shape_257.setTransform(994.2,471);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(101,156,197,0.6)").s().p("AKbDnIrEjzIqcjIIgBAAIALgZIAZAEILNDdIKcDpIgCAEQgJANgCAAQgQgCgPgFg");
	this.shape_258.setTransform(997,471.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(101,156,197,0.6)").s().p("AKCDfIqpjpIqCjCIgBAAIAKgYIAYADIKxDWIKCDfIgBAEIgKANQgQgBgOgFg");
	this.shape_259.setTransform(999.7,472.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(101,156,197,0.6)").s().p("AJoDYIqNjgIppi7IgBAAIAKgYIAXACIKVDOIJpDWIgBAEIgKANQgQAAgNgEg");
	this.shape_260.setTransform(1002.5,473.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(101,156,197,0.6)").s().p("AJPDQIpzjXIpOi0IgBAAIAKgXIAUAAIJ6DHIJPDOIgBADIgJAMIgIABQgLAAgIgDg");
	this.shape_261.setTransform(1005.3,474.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(101,156,197,0.6)").s().p("AI2DIIpYjNIo0iuIgBAAIAJgVIATgBIJeC/II1DFIAAADIgJAMIgLAAQgIAAgGgCg");
	this.shape_262.setTransform(1008,475.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(101,156,197,0.6)").s().p("AIcDBIo8jEIoainIgBAAIAIgUIARgDIJCC4IIcC8IAAADIgIALQgIABgGAAIgKgBg");
	this.shape_263.setTransform(1010.8,476);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(101,156,197,0.6)").s().p("AICC5Iogi6IoBihIAAAAIAHgTIAQgEIImCxIICCyIABADIgJALQgIACgGAAIgIgBg");
	this.shape_264.setTransform(1013.6,476.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(101,156,197,0.6)").s().p("AHpCyIoGiyInniZIAHgTIAOgGIIKCqIHpCqIABACIgIAKQgJAFgGAAIgFgBg");
	this.shape_265.setTransform(1016.4,477.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(101,156,197,0.6)").s().p("AHPCqInqiqInNiRIAGgSIANgHIHuCiIHPChIABACIgIAKQgIAGgGAAIgEgBg");
	this.shape_266.setTransform(1019.2,478.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(101,156,197,0.6)").s().p("AG2CiInQigImyiLIgBAAIAHgRIALgIIHSCbIG1CXIACACIgHAKQgJAHgFAAIgDgBg");
	this.shape_267.setTransform(1021.9,479.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(101,156,197,0.6)").s().p("AGcCbIm0iXImZiEIAAAAIAGgQIAJgKIG3CUIGbCOIACACIgHAJQgIAIgFAAIgCAAg");
	this.shape_268.setTransform(1024.7,480.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(101,156,197,0.6)").s().p("AGDCTIsYkLIAFgPIAIgLIGaCLIGCCGIACACIgGAJQgJAJgDAAIgBAAg");
	this.shape_269.setTransform(1027.5,481.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(101,156,197,0.6)").s().p("AFpCLIrjj7IALgaILnEBIADACIgGAIQgJAKgCAAIgBAAg");
	this.shape_270.setTransform(1030.3,481.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(101,156,197,0.6)").s().p("AFQCDIqujrIAIgbIK1DyQgOAVgBAAIAAgBg");
	this.shape_271.setTransform(1033.1,482.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(101,156,197,0.6)").s().p("EBTrAMLItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnI18iaIgDgBQgEgcACgBIUACCQBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_272.setTransform(539.5,420.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(101,156,197,0.6)").s().p("EBTUAMIItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnI1FiUQgJgIgEgIQgJgQAZADITBB7QBaAJC4AWMAneAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_273.setTransform(541.7,420.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(101,156,197,0.6)").s().p("EBSvAMFItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnI0KiNIADgeISGB1QBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_274.setTransform(545.5,421.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(101,156,197,0.6)").s().p("EBSYAMDItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIzXiIQgEgIgBgIQgCgPALABIRSBwQBZAJC4AVMAnfAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_275.setTransform(547.8,421.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(101,156,197,0.6)").s().p("EBR/AMAItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIyliCIgFgQQgCgQALABIQgBrQBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_276.setTransform(550.3,421.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(101,156,197,0.6)").s().p("EBRkAL+ItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIx0h9IAFggQMmBTDIAUQBZAJC4AVMAnfAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_277.setTransform(553,421.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(101,156,197,0.6)").s().p("EBRNAL7ItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIxBh3QgEgJgBgIQgCgQAKABIO9BhQBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_278.setTransform(555.3,422.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(101,156,197,0.6)").s().p("EBQ3AL5ItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIwZhzIgBgQQABgRAJABIOPBdQBaAJC4AWMAneAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_279.setTransform(557.4,422.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(101,156,197,0.6)").s().p("EBQYAL2ItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgGgBIgVgCIhYgKIlfgmIvchtIACggINZBXQBZAJC4AVMAnfAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_280.setTransform(560.6,422.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(101,156,197,0.6)").s().p("EBQCAL0ItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIuqhnQgEgJgBgJQgEgRALABIHJAwIFeAjQBZAJC4AVMAnfAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_281.setTransform(562.8,422.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(101,156,197,0.6)").s().p("EBPrALyItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIuBhjQgCgIABgJQABgRALABQKHBEBuAKQBaAJC4AVMAneAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_282.setTransform(565,423.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(101,156,197,0.6)").s().p("EBPOALvItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmItHhcQgCgJABgJQABgRANABQIGA3CzARQBZAJC4AVMAnfAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_283.setTransform(568,423.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("rgba(101,156,197,0.6)").s().p("EBO3ALsItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIsVhWIgEgSQgDgSAIABQHiAzCxAQQBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_284.setTransform(570.3,423.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(101,156,197,0.6)").s().p("EBOfALqItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIrhhRQgFgJgCgJQgFgTAKABQG5AvCpAQQBZAJC4AWMAnfAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_285.setTransform(572.7,423.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("rgba(101,156,197,0.6)").s().p("EBOFALnItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIqwhLIgGgTQgDgSALABQGGAqCnAPQBaAJC4AWMAneAEhQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_286.setTransform(575.2,424.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(101,156,197,0.6)").s().p("EBNvALlItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmIqKhIQAAgJABgJQACgRALABQGDApB4ALQBZAJC4AVMAnfAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_287.setTransform(577.5,424.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(101,156,197,0.6)").s().p("EBNSALiItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIpLhBQgDgJgCgJQgCgSAKABIHHAuQBaAJC4AVMAneAEiQOMBaMSBMII0A2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_288.setTransform(580.3,424.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(101,156,197,0.6)").s().p("EBM9ALfItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIomg9QAAgJABgJQADgRAKABQFZAkA+AFQBZAJC4AWMAnfAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_289.setTransform(582.5,424.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(101,156,197,0.6)").s().p("EBMhALdItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInCgqI8EirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIlfgmInog3QgDgJgCgJQgDgTAKABIFlAlQBZAJC4AVMAnfAEiQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_290.setTransform(585.3,425.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("rgba(101,156,197,0.6)").s().p("EBMKALaItZknItukBIgBAAIgHgBIgdgEIhwgNInCg1I8NjUIgBAAIgIgBIgbgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgGAAIgVgDIhYgJIlfgnInAgxIACgkIE9AfQBZAJC4AWMAnfAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_291.setTransform(587.6,425.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("rgba(101,156,197,0.6)").s().p("EBLsALXItZknItukBIgBAAIgHgBIgdgEIhwgNInCg1I8NjUIgBAAIgIgBIgbgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgGAAIgVgDIhYgJIlfgnImEgqIABglIECAZQBZAJC4AWMAnfAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_292.setTransform(590.6,425.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("rgba(101,156,197,0.6)").s().p("EBLTALVItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmIlSglIABgmIDQAVQBaAJC4AVMAneAEiQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_293.setTransform(593,426);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("rgba(101,156,197,0.6)").s().p("EBK6ALSItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIkggfIADgmICcAPQBaAJC4AWMAneAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_294.setTransform(595.5,426.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("rgba(101,156,197,0.6)").s().p("EBKhALQItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgGgBIgVgCIhYgKIlfgmIjugaIAEgnIBpALQBZAJC4AVMAnfAEiQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_295.setTransform(598.1,426.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("rgba(101,156,197,0.6)").s().p("EBKIALNItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKInBgrI8FirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnIi8gVIADgmIA4AFQBaAJC4AWMAneAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_296.setTransform(600.5,426.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("rgba(101,156,197,0.6)").s().p("EBJvALKItZknItukBIgBAAIgHgBIgdgEIhwgNInCg1I8NjUIgBAAIgIgBIgbgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgGAAIgVgDIhYgJIlfgnIiKgPIAJgnQBZAJC4AWMAnfAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_297.setTransform(603.1,427);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(101,156,197,0.6)").s().p("EBJZALIItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIhZgKQgDgKgBgKQgDgUAKABQBqALB8APMAnfAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_298.setTransform(605.3,427.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("rgba(101,156,197,0.6)").s().p("EBJFALGItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIgxgFQgDgKgBgLQgCgUAIABIC/AWMAnfAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_299.setTransform(607.3,427.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(101,156,197,0.6)").s().p("EBIsALDItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIlfgnQgDgKgBgKQgDgUALABICNAQMAneAEhQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgDAegBAAIgBAAg");
	this.shape_300.setTransform(609.7,427.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(101,156,197,0.6)").s().p("EBIQALAItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIkrggIANgnMAouAErQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_301.setTransform(612.5,428.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(101,156,197,0.6)").s().p("EBHzAK9ItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgGgBIgVgCIhYgKIjwgaIgBgnMAoBAElQOMBaMUBMIIyA2IbCC8IOiB4IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_302.setTransform(615.5,428.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(101,156,197,0.6)").s().p("EBHaAK6ItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInAgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxI6/jDIgBAAIgGgBIgWgCIhXgKIi/gVIAGgmMAnJAEfQOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_303.setTransform(618,428.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(101,156,197,0.6)").s().p("EBHAAK3ItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIiLgPIACgnMAmZAEZQOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_304.setTransform(620.6,428.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(101,156,197,0.6)").s().p("EBGqAK0ItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIhfgLIAIgmMAlnAEUQOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_305.setTransform(622.8,429.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(101,156,197,0.6)").s().p("EBGSAKyItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIgvgFIALgmMAk0AEPQOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_306.setTransform(625.1,429.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(101,156,197,0.6)").s().p("EBF6AKvItZknIttkBIgBAAIgHgBIgdgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJIAHgnMAkJAEKQOMBaMVBMIIxA2IbDC+IOiB2IPAEiIL4EEQgEAfgBAAIgBgBg");
	this.shape_307.setTransform(627.5,429.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(101,156,197,0.6)").s().p("EBFhAKtItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgGgBIgVgCIglgEIADgnMAjaAEFQOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_308.setTransform(630.1,430);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(101,156,197,0.6)").s().p("EBFFAKpItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAQgFgBAKglMAieAD9QOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_309.setTransform(632.9,430.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(101,156,197,0.6)").s().p("EBEqAKmItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwQysiHnmg4IACgmMAhtAD4QOMBaMUBMIIyA2IbCC+IOiB2IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_310.setTransform(635.6,430.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(101,156,197,0.6)").s().p("EBERAKjItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgcgDIhwgLInAgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxI5gi4IAEglMAg5ADxQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_311.setTransform(638.1,431);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(101,156,197,0.6)").s().p("EBD7AKgItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI41ivIAAgoMAgRADrQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_312.setTransform(640.3,431.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(101,156,197,0.6)").s().p("EBDiAKbItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI4DilIAAgoIffDhQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_313.setTransform(642.8,431.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(101,156,197,0.6)").s().p("EBDJAKWItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8NjUIgBAAIgIAAIgbgDIhxgLIm/gqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI3RilIAAgeIetDXQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_314.setTransform(645.3,432.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(101,156,197,0.6)").s().p("EBCyAKYItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhvgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwI2jijIADglId8DbQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_315.setTransform(647.5,432);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(101,156,197,0.6)").s().p("EBCTAKVItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhvgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI1licIACglIc/DVQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_316.setTransform(650.6,432.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(101,156,197,0.6)").s().p("EBCAAKSItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhvgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI0/iXIAOgkIcNDPQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_317.setTransform(652.5,432.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(101,156,197,0.6)").s().p("EBBnAKQItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhvgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxI0NiSIADglIbmDLQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_318.setTransform(655,432.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(101,156,197,0.6)").s().p("EBBOAKNItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8MjUIgCAAIgHAAIgagDIhwgLInCgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxIzaiMIADglIa0DFQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_319.setTransform(657.6,433.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(101,156,197,0.6)").s().p("EBA1AKKItZknIttkBIgBAAIgHgBIgdgEIhxgNInCg1I8MjUIgCAAIgHgBIgagDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIypiHIADglIaCC/QOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL4EEQgEAegBAAIgBAAg");
	this.shape_320.setTransform(660,433.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(101,156,197,0.6)").s().p("EBAcAKHItZknItukBIgBAAIgHgBIgdgEIhwgNInCg1I8LjUIgBAAIgIgBIgbgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIx3iCIACglIZRC6QOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_321.setTransform(662.6,433.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(101,156,197,0.6)").s().p("EA/9AKEItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8KjUIgCAAIgHAAIgcgDIhxgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxIw5h6IAAglIYVCzQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_322.setTransform(665.6,434.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(101,156,197,0.6)").s().p("EA/qAKCItZknIttkCIgBAAIgHgBIgdgDIhxgNInCg2I8KjUIgCAAIgHAAIgcgDIhwgLInCgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxIwUh2IACglIXuCvQOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL4EEQgEAegBAAIgBAAg");
	this.shape_323.setTransform(667.5,434.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(101,156,197,0.6)").s().p("EA/MAJ+ItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8KjUIgCAAIgHgBIgcgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIvXhwIAEgkIWvCnQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_324.setTransform(670.5,434.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(101,156,197,0.6)").s().p("EA+4AJ8ItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg2I8KjUIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxIuuhrIABgkIWKCjQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_325.setTransform(672.6,434.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(101,156,197,0.6)").s().p("EA+kAJ5ItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8KjUIgCAAIgHgBIgcgDIhwgKInCgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwIuGhnIAMgjIVXCdQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_326.setTransform(674.6,435.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(101,156,197,0.6)").s().p("EA+LAJ2ItZknIttkBIgBAAIgHgBIgdgEIhxgNInCg1I8KjUIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwItWhhIAOgkIUkCYQOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL4EEQgEAfgBAAIgBgBg");
	this.shape_327.setTransform(677,435.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(101,156,197,0.6)").s().p("EA9yAJ0ItZknItukCIgBAAIgHgBIgdgDIhwgNInCg2I8LjUIgBAAIgIAAIgbgDIhxgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxIsjhbIAMgkITzCTQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_328.setTransform(679.6,435.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(101,156,197,0.6)").s().p("EA9SAJwItZknIttkBIgBAAIgHgBIgdgEIhxgNInCg1I8KjUIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIrkhVIAIgjIS4CLQOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL3EEQgDAegBAAIgBAAg");
	this.shape_329.setTransform(682.7,436);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(101,156,197,0.6)").s().p("EA82AJtItZknItukBIgBAAIgHgBIgdgEIhwgNInCgzI8LjWIgBAAIgIgBIgbgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIqrhOIAEgkISDCFQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_330.setTransform(685.6,436.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(101,156,197,0.6)").s().p("EA8jAJrItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxIqEhJIADgkIReCBQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_331.setTransform(687.5,436.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(101,156,197,0.6)").s().p("EA7rAJlItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxIoUg9IABgkIPwB1QOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_332.setTransform(693.1,437.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(101,156,197,0.6)").s().p("EA7XAJiItaknIttkBIgBAAIgHgBIgdgEIhwgNInDgzI8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwInsg5IACgkIPHBwQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_333.setTransform(695.1,437.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(101,156,197,0.6)").s().p("EA69AJgItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg0I8KjWIgCAAIgHAAIgcgDIhxgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxIm5gyIABglIOUBrQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_334.setTransform(697.6,437.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(101,156,197,0.6)").s().p("EA6gAJcItZknIttkBIgBAAIgHgBIgdgEIhxgNInCgzI8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIl/gsIACgkINZBjQOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL4EEQgEAegBAAIgBAAg");
	this.shape_335.setTransform(700.5,438);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(101,156,197,0.6)").s().p("EA6MAJZItZknItukBIgBAAIgHgBIgdgEIhwgNInCgzI8LjWIgBAAIgIgBIgbgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIlXgnIANgjIMmBdQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_336.setTransform(702.6,438.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(101,156,197,0.6)").s().p("EA5uAJWItZknIttkBIgCAAIgHgBIgcgEIhxgNInCgzI8KjWIgCAAIgHgBIgcgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIkbggIABglIL2BYQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_337.setTransform(705.5,438.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(101,156,197,0.6)").s().p("EA5aAJTItZknIttkBIgBAAIgHgBIgdgEIhxgNInCgzI8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhrgMImwgwIj0gcIAPgjILBBSQOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL4EEQgEAfgBAAIgBgBg");
	this.shape_338.setTransform(707.5,438.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(101,156,197,0.6)").s().p("EA48AJRItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg0I8KjWIgCAAIgHAAIgcgDIhxgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxIi2gUIgBglIKTBNQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_339.setTransform(710.5,439.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(101,156,197,0.6)").s().p("EA4mAJOItZknIttkCIgBAAIgHgBIgdgDIhxgNInCg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8HirIgCAAIgHgBIgbgDIhrgMImwgxIiLgPIAIgkIJfBHQOMBaMVBMIIzA2IbBC+IOiB2IPAEiIL3EEQgDAegBAAIgBAAg");
	this.shape_340.setTransform(712.7,439.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(101,156,197,0.6)").s().p("EA4PAJLItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxIhcgKIANgjIIsBBQOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_341.setTransform(715.1,439.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(101,156,197,0.6)").s().p("EA33AJIItaknIttkBIgBAAIgHgBIgdgEIhwgNInDgzI8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwIgsgFIADgkIIGA8QOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAfgBAAIAAgBg");
	this.shape_342.setTransform(717.5,440);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(101,156,197,0.6)").s().p("EA3hAJGItaknIttkCIgBAAIgHgBIgdgDIhwgNInDg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgHgBIgbgDIhsgMImwgxIALgjIHSA3QOMBaMUBMII0A2IbAC+IOiB2IPAEiIL4EEQgEAegBAAIAAAAg");
	this.shape_343.setTransform(719.7,440.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(101,156,197,0.6)").s().p("EA3DAJDItZknIttkCIgBAAIgHgBIgdgDIhxgNInCg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8HirIgCAAIgHgBIgbgDIhrgMIl1gqIAAgkIGhAxQOMBaMVBMIIzA2IbBC+IOiB3IPAEhIL4EEQgEAegBAAIgBAAg");
	this.shape_344.setTransform(722.6,440.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(101,156,197,0.6)").s().p("EA2sAI/ItZknItukBIgBAAIgHgBIgdgEIhwgNInCgzI8LjWIgBAAIgIgBIgbgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMIlHglIAOghIFlApQOMBaMUBMII0A2IbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_345.setTransform(725,440.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(101,156,197,0.6)").s().p("EA2SAI8ItZknIttkBIgBAAIgHgBIgdgEIhxgNInCgzI8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhrgMIkTgfIAMgiIEzAkQOMBaMVBMIIzA2IbBC+IOiB4IPAEgIL4EEQgEAfgBAAIgBgBg");
	this.shape_346.setTransform(727.5,441.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(101,156,197,0.6)").s().p("EA15AI5ItZknIttkBIgCAAIgHgBIgcgEIhxgMInCg0I8KjWIgCAAIgHgBIgcgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMIjhgZIANgiIEAAeQOMBaMUBMII0A2IbAC+IOiB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_347.setTransform(730,441.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(101,156,197,0.6)").s().p("EA1gAI2ItZknIttkBIgCAAIgHgBIgcgEIhxgLInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMIivgTIALgiIDQAYQOMBaMUBMII0A2IbAC+IOiB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_348.setTransform(732.5,441.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(101,156,197,0.6)").s().p("EA1HAI0ItZknIttkCIgBAAIgHgBIgdgDIhxgLInCg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8HirIgCAAIgHgBIgbgDIhrgMIh+gOIALgiICfATQOMBaMVBMIIzA2IbBC+IOiB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_349.setTransform(735,442.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(101,156,197,0.6)").s().p("EA0uAIxItZknItukCIgBAAIgHgBIgdgDIhwgLInCg2I8LjWIgBAAIgIAAIgbgDIhxgLInBgqI8HirIgCAAIgHgBIgbgDIhrgMIhLgJIAKghIBtANQOMBaMUBMII0A2IbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_350.setTransform(737.6,442.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(101,156,197,0.6)").s().p("EA0aAIvItZknIttkCIgBAAIgHgBIgdgDIhxgLInCg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8HirIgCAAIgHgBIgbgDIhrgMIgkgEIAEgiIBMAJQOMBaMVBMIIzA2IbBC+IOiB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_351.setTransform(739.5,442.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(101,156,197,0.6)").s().p("EAz8AIqItZknIttkBIgBAAIgHgBIgdgCIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgCAAIgHgBIgbgDIhTgJIAUggQOMBaMVBMIIzA2IbBC+IOiB4IPAEgIL4EEQgEAfgBAAIgBgBg");
	this.shape_352.setTransform(742.5,443);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(101,156,197,0.6)").s().p("EAzjAIoItZknIttkBIgCAAIgHAAIgcgDIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIgggDQAAgJABgIQADgRAJABQXJCSLfBFIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_353.setTransform(745,443.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(101,156,197,0.6)").s().p("EAzJAImItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8GirIgCAAIgHgBQgGAAgBgSQAAgSALABQNmBXLzBIIIdA0IbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_354.setTransform(747.7,443.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(101,156,197,0.6)").s().p("EAyvAIkItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI7cinQgDgJgCgKQgDgSALABQNSBVLiBHIIQAzIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_355.setTransform(750.3,443.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(101,156,197,0.6)").s().p("EAyaAIiItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI60ijIgDgSQgCgSAIABQM9BSLZBGIIGAyIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_356.setTransform(752.4,443.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(101,156,197,0.6)").s().p("EAx9AIfItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqI55ieQgEgJgCgJQgDgRAMABQVDCFKdA/IbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_357.setTransform(755.2,444.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(101,156,197,0.6)").s().p("EAxmAIcItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrI5QiZQgBgJACgJQACgRALABQMWBPKsBBIHrAvIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_358.setTransform(757.6,444.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(101,156,197,0.6)").s().p("EAxPAIbItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqI4giVIgDgSQgCgSAIAAQMHBOKfBBIHhAuIbAC+IOiB4IPAEgIL4EEQgDAegCAAIAAAAg");
	this.shape_359.setTransform(759.8,444.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(101,156,197,0.6)").s().p("EAw3AIZItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI3riQQgEgKgCgJQgDgSAKABQL2BMKKA/IHVAtIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_360.setTransform(762.3,444.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(101,156,197,0.6)").s().p("EAwcAIWItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI24iMQgDgJAAgJQgBgRAMABQLfBKJ2A8IHGAsIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_361.setTransform(765,445.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(101,156,197,0.6)").s().p("EAwCAITItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqI2IiHQgBgJAAgIQACgRALABQLKBHJjA7IG5AqIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_362.setTransform(767.5,445.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(101,156,197,0.6)").s().p("EAvmAIQItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrI1MiBQgDgJgCgJQgCgRAKABQK4BGJPA5IGsAoIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_363.setTransform(770.3,445.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(101,156,197,0.6)").s().p("EAvRAIOItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrI0lh9QgCgJAAgJQAAgRAIABQKkBEJDA4IGiAnIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_364.setTransform(772.4,445.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(101,156,197,0.6)").s().p("EAu4AILItZknItuj/IgBAAIgHgBIgdgEIhwgNInCg1I8LjWIgBAAIgIgBIgbgDIhxgKInBgrIz0h5QgBgIABgIQACgRALABQKNBCIwA1IGUAmIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_365.setTransform(775,446.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(101,156,197,0.6)").s().p("EAueAIJItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIzBh0QgBgJACgIQADgRAKABQJ5BAIdA0IGHAlIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_366.setTransform(777.5,446.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(101,156,197,0.6)").s().p("EAuDAIHItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIyHhvQgDgIgBgJQgCgRAJABQJjA9IQAzIF7AkIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_367.setTransform(780.2,446.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(101,156,197,0.6)").s().p("EAtqAIEItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIxThpQgEgJgBgJQgCgRAKABQJRA8H7AwIFvAjIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_368.setTransform(782.8,446.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(101,156,197,0.6)").s().p("EAtWAICItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIwrhlIgEgSQgCgRAIABQI+A6HxAvIFlAiIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_369.setTransform(784.8,447);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(101,156,197,0.6)").s().p("EAs9AH/ItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIv5hgQgDgJgBgIQgDgRALABQIqA4HeAtIFYAgIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_370.setTransform(787.3,447.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(101,156,197,0.6)").s().p("EAsiAH8ItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIvGhbQgCgJABgIQACgQAMABQISA1HJArIFJAfIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_371.setTransform(790,447.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(101,156,197,0.6)").s().p("EAsJAH6ItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIuVhXQgBgIACgIQADgRALABQNNBVGkAmIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_372.setTransform(792.5,447.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(101,156,197,0.6)").s().p("EArtAH4ItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqItZhSQgDgIgBgJQgDgRAKABQMtBSGUAlIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_373.setTransform(795.3,448.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(101,156,197,0.6)").s().p("EArYAH2ItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIsxhOIgEgRQgBgQAIABQMSBOGGAkIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_374.setTransform(797.3,448.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(101,156,197,0.6)").s().p("EArAAHzItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIr+hIQgDgJgCgIQgDgRAKABQLxBKF2AjIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_375.setTransform(799.8,448.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(101,156,197,0.6)").s().p("EAqmAHxItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrIrMhDQgEgJgBgJQgDgRALABQLOBIFlAhIbAC+IOiB4IPAEgIL4EEQgDAegBAAIgBAAg");
	this.shape_376.setTransform(802.3,448.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(101,156,197,0.6)").s().p("EAqOAHvItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqIqag/QgEgJgBgIQgDgSAKABQKuBFFVAgIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_377.setTransform(804.8,449);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(101,156,197,0.6)").s().p("EAp1AHtItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIppg6QgEgJgCgJQgDgRAJABQKOBBFFAfIbAC+IOiB4IPAEgIL4EEQgDAegCAAIAAAAg");
	this.shape_378.setTransform(807.2,449.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(101,156,197,0.6)").s().p("EApXAHqItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIotg0QgEgJgCgJQgDgRANABQJkA9EvAdIbAC+IOiB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_379.setTransform(810.2,449.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(101,156,197,0.6)").s().p("EApCAHnItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIoEgwQgDgIgBgJQgBgRAIABINsBVIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_380.setTransform(812.4,449.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(101,156,197,0.6)").s().p("EAoqAHlItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrInVgrQgDgJgBgJQgCgRAKABIM7BRIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_381.setTransform(814.7,449.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(101,156,197,0.6)").s().p("EAoYAHjItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrIm1goQgBgJACgIQACgQAIAAIMUBNIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_382.setTransform(816.5,450.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(101,156,197,0.6)").s().p("EAoKAHiItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrImXglIgCgRQgBgSAFABIL/BLIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_383.setTransform(817.9,450.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(101,156,197,0.6)").s().p("EAnzAHgItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrIlmghQgEgJgBgIQgDgSALABILNBHIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_384.setTransform(820.2,450.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(101,156,197,0.6)").s().p("EAniAHfItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgEIhxgKInBgqIlFgeQgDgJgBgJQgCgRAGAAIKvBFIbCC+IOgB3IPAEhIL4EEQgEAegBAAIAAAAg");
	this.shape_385.setTransform(821.9,450.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(101,156,197,0.6)").s().p("EAnTAHdItZknItuj/IgBAAIgHgBIgdgEIhwgNInCg1I8LjWIgBAAIgIgBIgbgDIhxgKInBgrIkngbIgEgRQgCgRAHAAIKQBBIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_386.setTransform(823.5,450.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(101,156,197,0.6)").s().p("EAm/AHbItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIkAgYQgCgIgBgJQgBgRAJABIJlA9IbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_387.setTransform(825.4,451);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(101,156,197,0.6)").s().p("EAmsAHZItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIjXgUIgEgRQgDgRAIABIJBA5IbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_388.setTransform(827.4,451.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(101,156,197,0.6)").s().p("EAmbAHXItZknIttkAIgBAAIgHgBIgdgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqIi8gSIAQgfIIWA1IbDC+IOgB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_389.setTransform(829,451.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(101,156,197,0.6)").s().p("EAmMAHWItZknItukAIgBAAIgHgBIgdgDIhwgNInCg2I8LjWIgBAAIgIAAIgbgEIhxgKInBgqIidgPIADgQQAEgQAGAAIH6AzIbCC+IOgB3IPAEhIL4EEQgEAegBAAIAAAAg");
	this.shape_390.setTransform(830.6,451.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(101,156,197,0.6)").s().p("EAl6AHUItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIh1gLIgCgQQgBgQAGAAIHdAvIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_391.setTransform(832.4,451.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(101,156,197,0.6)").s().p("EAliAHSItaknIttkAIgBAAIgHgBIgdgDIhwgNInDg2I8KjWIgCAAIgHAAIgcgDIhwgLInCgqIhCgGQgEgJgBgIQgDgRALABIGqArIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_392.setTransform(834.8,451.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(101,156,197,0.6)").s().p("EAlLAHQItZknIttkAIgCAAIgHgBIgcgDIhxgNInCg2I8KjWIgCAAIgHAAIgcgDIhxgLInBgqIgbgDQgBgIABgIQADgQAKABIF4AmIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_393.setTransform(837,452.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(101,156,197,0.6)").s().p("EAk0AHNItaknIttj/IgBAAIgHgBIgdgEIhwgNInDg1I8KjWIgCAAIgHgBIgcgDIhwgKImqgoIgEgRQgCgQAIABIFRAhIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_394.setTransform(839.4,452.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(101,156,197,0.6)").s().p("EAkgAHLItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKImCglIgEgQQgCgQAIABQEpAcAAABIbCC+IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_395.setTransform(841.3,452.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(101,156,197,0.6)").s().p("EAkLAHJItZknItuj/IgBAAIgHgBIgdgEIhwgNInAg1I8NjWIgBAAIgIgBIgbgDIhxgKIlcghIAEgfIfDDXIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_396.setTransform(843.5,452.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(101,156,197,0.6)").s().p("EAj2AHHItaknIttkAIgBAAIgHgBIgdgDIhwgNInBg2I8MjWIgCAAIgHAAIgcgDIhwgLIkygcIACgfIebDTIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_397.setTransform(845.6,453);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(101,156,197,0.6)").s().p("EAjjAHFItZknItukAIgBAAIgHgBIgdgDIhwgNInAg2I8NjWIgBAAIgIAAIgbgDIhxgLIkMgZIAEgeIdzDPIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_398.setTransform(847.5,453.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(101,156,197,0.6)").s().p("EAjJAHCItZknIttkAIgCAAIgHgBIgcgDIhxgNInAg2I8MjWIgCAAIgHAAIgcgDIhxgLIjYgUIADgdIdADJIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_399.setTransform(850,453.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(101,156,197,0.6)").s().p("EAi6AHAItZknIttj/IgCAAIgHgBIgcgEIhxgNInAg1I8MjWIgCAAIgHgBIgcgDIhxgKIi6gSIACgdIcjDGIOgB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_400.setTransform(851.5,453.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(101,156,197,0.6)").s().p("EAisAG+ItaknIttj/IgBAAIgHgBIgdgEIhwgNInBg1I8MjWIgCAAIgHgBIgcgDIhwgKIiegPIAHgcIcCDCIOgB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_401.setTransform(853,453.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(101,156,197,0.6)").s().p("EAicAG8ItZknIttj/IgBAAIgHgBIgdgEIhxgNInAg1I8MjWIgCAAIgHgBIgcgDIhwgKIh/gNIALgaIbfC+IOgB4IPAEgIL4EEQgEAfgBAAIgBgBg");
	this.shape_402.setTransform(854.5,454);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(101,156,197,0.6)").s().p("EAiCAG6ItZknIttj/IgBAAIgHgBIgdgEIhxgNInAg1I8MjWIgCAAIgHgBIgcgDIhwgKIhLgIIABgaIa1C5IOgB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_403.setTransform(857.1,454.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(101,156,197,0.6)").s().p("EAhqAG3ItaknIttj/IgBAAIgHgBIgdgEIhwgNInBg1I8MjWIgCAAIgHgBIgcgDIhwgKIgagDIACgaIaDC0IOgB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_404.setTransform(859.6,454.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(101,156,197,0.6)").s().p("EAhdAG1ItZknItuj/IgBAAIgHgBIgdgEIhwgNInAg1I8NjWIgBAAIgIgBIgbgDIhxgKIAPgYIZcCvIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_405.setTransform(860.9,454.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(101,156,197,0.6)").s().p("EAhHAG0ItZknIttkAIgBAAIgHgBIgdgDIhxgNInAg2I8MjWIgCAAIgHAAIgcgDIhFgHIADgZIY9CtIOgB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_406.setTransform(863,454.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(101,156,197,0.6)").s().p("EAg0AGyItaknIttkAIgBAAIgHgBIgdgDIhwgNInBg2I8MjWIgCAAIgHAAIgcgDIgegDIAEgZIYVCpIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_407.setTransform(865,455.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(101,156,197,0.6)").s().p("EAglAGvItaknIttj/IgBAAIgHgBIgdgEIhwgNInBg1I8MjWIgCAAIgHgBIgcgDIAOgXIXtCkIOgB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_408.setTransform(866.5,455.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(101,156,197,0.6)").s().p("EAgTAGuItZknIttkAIgCAAIgHgBIgcgDIhxgNInAg2I8MjWIgCAAQgBAAAEgMIAFgLIXPChIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_409.setTransform(868.2,455.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(101,156,197,0.6)").s().p("Af/GsItZknItukAIgBAAIgHgBIgdgDIhwgNInAg2I7gjQQgJgBAFgMIAFgMIWoCdIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_410.setTransform(870.3,455.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(101,156,197,0.6)").s().p("AfoGqItZknItukAIgBAAIgHgBIgdgDIhwgNInAg2I64jLIACgaIV/CZIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_411.setTransform(872.6,455.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(101,156,197,0.6)").s().p("AfKGmItZknItuj/IgBAAIgHgBIgdgEIhwgNInAg1I58jFIAEgZIVBCRIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_412.setTransform(875.6,456.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(101,156,197,0.6)").s().p("Ae8GlItaknIttkAIgBAAIgHgBIgdgDIhwgNInBg2I5fjBIAEgaIUlCPIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_413.setTransform(877,456.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(101,156,197,0.6)").s().p("AesGjItZknIttj/IgCAAIgHgBIgcgEIhxgNInAg1I5Ai+IACgaIUHCLIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_414.setTransform(878.5,456.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(101,156,197,0.6)").s().p("AeYGhItZknIttj/IgBAAIgHgBIgdgEIhxgNInAg1I4Yi5IACgbITgCHIOgB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_415.setTransform(880.5,456.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(101,156,197,0.6)").s().p("AeEGfItZknIttkAIgCAAIgHgBIgcgDIhxgNInAg2I3wi0IACgbIS3CDIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_416.setTransform(882.5,457);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(101,156,197,0.6)").s().p("AdwGdItZknItukAIgBAAIgHgBIgdgDIhwgNInAg2I3IiwIACgbISPB/IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_417.setTransform(884.6,457.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(101,156,197,0.6)").s().p("AddGaItZknItuj/IgBAAIgHgBIgdgEIhwgNInAg1I2iisIAEgbIRnB6IOgB4IPAEgIL4EEQgEAfgBAAIAAgBg");
	this.shape_418.setTransform(886.5,457.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(101,156,197,0.6)").s().p("AdIGYItZknIttj/IgCAAIgHgBIgcgEIhvgNInCg1I14inIACgbIQ/B1IOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_419.setTransform(888.5,457.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(101,156,197,0.6)").s().p("AcwGWItaknIttkAIgBAAIgHgBIgdgDIhugNInDg2I1GigIgBgdIQRBxIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_420.setTransform(891,457.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(101,156,197,0.6)").s().p("AcgGUItaknIttkAIgBAAIgHgBIgdgDIhugNInDg2I0nicIACgdIPvBtIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_421.setTransform(892.6,458.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(101,156,197,0.6)").s().p("AcHGRItZknIttkAIgBAAIgHgBIgdgDIhvgNInCg2Iz2iXIAEgcIO8BnIOgB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_422.setTransform(895,458.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(101,156,197,0.6)").s().p("AbyGPItZknIttkAIgBAAIgHgBIgdgDIhvgNInCg2IzMiSIAFgdIORBjIOgB4IPAEgIL3EEQgDAegBAAIgBAAg");
	this.shape_423.setTransform(897.1,458.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(101,156,197,0.6)").s().p("AbeGMItZknIttj/IgCAAIgHgBIgagEIhxgNInCg1IykiOIAKgcINjBdIOgB4IPAEgIL4EEQgEAegBAAIAAAAg");
	this.shape_424.setTransform(899.1,458.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(101,156,197,0.6)").s().p("AbKGKItZknIttj/IgBAAIgFgBIgdgEIhxgNInCg1Ix9iJIALgdIM8BZIOgB4IPAEgIL3EEQgDAegBAAIgBAAg");
	this.shape_425.setTransform(901.1,459);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(101,156,197,0.6)").s().p("Aa3GJItZknItrkAIgBAAIgHgBIgdgDIhxgNInCg2IxWiEIADgfIMdBXIOgB4IPAEgIL4EEQgEAegBAAIgBAAg");
	this.shape_426.setTransform(903,459.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(101,156,197,0.6)").s().p("AaeGGItZknItrkAIgCAAIgHgBIgcgDIhxgNInCg2Iwkh+IADgfILqBRIOiB4IO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_427.setTransform(905.5,459.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(101,156,197,0.6)").s().p("AaKGDItZknItrj/IgCAAIgHgBIgcgEIhxgNInCg1Iv8h6IAOgeIK3BLIOiB4IO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_428.setTransform(907.5,459.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(101,156,197,0.6)").s().p("AZoF/ItZknItsj/IgBAAIgHgBIgdgEIhwgNInCg1Iu4hyIAOgeIJzBDIOiB4IO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_429.setTransform(911,460.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(101,156,197,0.6)").s().p("AY/F7ItZknItrj/IgBAAIgHgBIgdgEIhxgNInCg1ItnhoIAGghIIrA8IOiB4IO+EgIL4EEQgEAfgBAAIgBgBg");
	this.shape_430.setTransform(915,460.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(101,156,197,0.6)").s().p("AYSF3ItaknItrkAIgBAAIgHgBIgdgDIhwgNInDg2IsLhdIADgiIHSAzIOiB4IO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_431.setTransform(919.6,461);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(101,156,197,0.6)").s().p("AXpFyItZknItrj/IgBAAIgHgBIgdgEIhxgNInCg1Iq7hUIACgjIGDAqIOiB4IO+EgIL3EEQgDAfgBAAIgBgBg");
	this.shape_432.setTransform(923.6,461.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(101,156,197,0.6)").s().p("AW9FtItZknItrj/IgCAAIgHgBIgcgEIhxgNInCg1IpihKIAFgjIEmAgIOiB4IO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_433.setTransform(928,461.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(101,156,197,0.6)").s().p("AWQFpItZknItrkAIgBAAIgHgBIgdgDIhxgNInCg2IoJg+IAFglIDOAXIOiB4IO+EgIL4EEQgEAegBAAIgBAAg");
	this.shape_434.setTransform(932.5,462.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(101,156,197,0.6)").s().p("AVeFjItZknItrj/IgBAAIgHgBIgdgEIhxgNInCg1ImlgzIAEglIQNCDIO+EgIL4EEQgEAegBAAIgBAAg");
	this.shape_435.setTransform(937.5,462.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(101,156,197,0.6)").s().p("AUsFdItZknItrkAIgCAAIgHgBIgcgDIhxgNInCg2IlAgmIACglIOpB3IO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_436.setTransform(942.5,463.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(101,156,197,0.6)").s().p("AT6FWItaknItrj/IgBAAIgHgBIgdgEIhwgNInDg1IjbgbIACgkINFBqIO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_437.setTransform(947.6,464.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(101,156,197,0.6)").s().p("ATcFSItaknItrj/IgBAAIgHgBIgdgEIhwgNInDg1IifgUIACgiIMJBhIO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_438.setTransform(950.6,464.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(101,156,197,0.6)").s().p("AS4FNItaknItrj/IgBAAIgHgBIgdgEIhwgNInDg1IhXgLIAOghIK1BXIO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_439.setTransform(954.2,465.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(101,156,197,0.6)").s().p("ASMFIItZknItrj/IgCAAIgHgBIgcgEIhxgNInCg1IADgjIJoBOIO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_440.setTransform(958.5,465.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(101,156,197,0.6)").s().p("ARsFDItZknItrj/IgCAAIgHgBIgcgEIhxgNIl6gtQgOgBAKgQQAGgIAIgIIIZBEIO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_441.setTransform(961.7,466.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(101,156,197,0.6)").s().p("ARLFAItaknItrj/IgBAAIgHgBIgdgEIhwgNIlAgmIADghIHmA9IO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_442.setTransform(965.1,466.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(101,156,197,0.6)").s().p("AQsE8ItaknItrj/IgBAAIgHgBIgdgEIhwgNIkCgfIADghIGoA2IO+EgIL4EEQgEAfgBAAIAAgBg");
	this.shape_443.setTransform(968.2,466.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("rgba(101,156,197,0.6)").s().p("AQAE3ItZknItskAIgBAAIgHgBIgdgDIhwgNIiqgVIADggIFQArIO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_444.setTransform(972.6,467.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(101,156,197,0.6)").s().p("APdEyItZknItrj/IgBAAIgHgBIgdgEIhxgNIhkgMIADggIELAiIO+EgIL4EEQgEAfgBAAIgBgBg");
	this.shape_445.setTransform(976,467.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(101,156,197,0.6)").s().p("AOrEsItZknItskAIgBAAIgHgBIgdgDIhwgNIACgfICnAVIO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_446.setTransform(981.1,468.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(101,156,197,0.6)").s().p("AOIEnItZknItrkAIgCAAIgHgBIgcgDIgrgFIAMgdIBXALIO+EgIL4EEQgEAegBAAIAAAAg");
	this.shape_447.setTransform(984.5,469);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(101,156,197,0.6)").s().p("ANhEhItZklItrkBIgCAAQgBgBALgNIALgOIO+EhIL4EDQgEAfgBAAIAAgBg");
	this.shape_448.setTransform(988.4,469.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(101,156,197,0.6)").s().p("AM4EXItYklIscjqIALgeIN2ENIL4ECQgEAegBAAIAAAAg");
	this.shape_449.setTransform(992.6,470.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(101,156,197,0.6)").s().p("AMVEOItXklIrVjVIgDghIM9D7IL4ECQgEAegBAAIgBAAg");
	this.shape_450.setTransform(996,471.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(101,156,197,0.6)").s().p("AL2EEItXklIqajDIAEgfIL7DnIL3ECQgDAegBAAIgBAAg");
	this.shape_451.setTransform(999.1,472.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(101,156,197,0.6)").s().p("ALYD6ItYklIpcixIAHgeIK8DUIL2ECQgEAfgBAAIAAgBg");
	this.shape_452.setTransform(1002.2,473.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(101,156,197,0.6)").s().p("AK1DvItXklIoXidIALgcIJyC+IL2ECQgEAfgBAAIAAgBg");
	this.shape_453.setTransform(1005.7,474.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(101,156,197,0.6)").s().p("AKSDkItXklInRiIIAQgaIInCnIL2ECQgEAegBAAIAAAAg");
	this.shape_454.setTransform(1009.2,475.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(101,156,197,0.6)").s().p("AJwDaItYklImMh0IAKgbIHpCUIL2ECQgEAfgBAAIAAgBg");
	this.shape_455.setTransform(1012.6,476.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(101,156,197,0.6)").s().p("AJXDSItXklIlbhmIAPgYIGzCDIL2ECQgEAegBAAIgBAAg");
	this.shape_456.setTransform(1015,477.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(101,156,197,0.6)").s().p("AI5DKItXklIkfhVIAGgaIF/B0IL2ECQgEAfgBAAIAAgBg");
	this.shape_457.setTransform(1018,478.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(101,156,197,0.6)").s().p("AIgDCItXklIjthGIANgYIFHBjIL2ECQgEAegBAAIgBAAg");
	this.shape_458.setTransform(1020.5,479.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(101,156,197,0.6)").s().p("AIBC6ItYklIisgzIgCgbIEVBTIL2ECQgEAegBAAIAAAAg");
	this.shape_459.setTransform(1023.7,479.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(101,156,197,0.6)").s().p("AHoCxItXklIh9glIALgXIDYBBIL2ECQgEAegBAAIAAAAg");
	this.shape_460.setTransform(1026.1,480.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(101,156,197,0.6)").s().p("AHGCoItXklIg5gQIAAgbICfAwIL2ECQgEAfgBAAIAAgBg");
	this.shape_461.setTransform(1029.6,481.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(101,156,197,0.6)").s().p("AGqCfItYklIAFgYIBiAdIL2ECQgEAegBAAIAAAAg");
	this.shape_462.setTransform(1032.4,482.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(101,156,197,0.6)").s().p("AGJCWIsXkPIACgcIAlALIL2ECQgEAegBAAIgBAAg");
	this.shape_463.setTransform(1035.6,483.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(101,156,197,0.6)").s().p("AFvCNIrjj9IAJgcILfD7QgDAegBAAIgBAAg");
	this.shape_464.setTransform(1038.2,484.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(101,156,197,0.6)").s().p("AFcCGIq9jwIAKgbIK5DtQgEAegBAAIgBAAg");
	this.shape_465.setTransform(1040.1,485.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(101,156,197,0.6)").s().p("AFHB+IqSjhIAKgbIKNDeQgDAfgBAAIgBgBg");
	this.shape_466.setTransform(1042.2,485.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(101,156,197,0.6)").s().p("AE0B3IpsjUIANgaIJkDQQgEAfgBAAIAAgBg");
	this.shape_467.setTransform(1044.2,486.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(101,156,197,0.6)").s().p("EBTmAMQItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInCgrI8EirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDIhXgJIlfgnIs1haIpKhBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgWQAAgMABgBIUACCQBZAJC4AWICnATQYnC4MRBWQOoBmL2BFII0AxIbCDGIOiB4IO2EYIMMEOQgOAfgBAAIAAgBg");
	this.shape_468.setTransform(531.7,417.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(101,156,197,0.6)").s().p("EBSoAMAIsvkYItpkAIgBAAIgHgBIgcgEIhwgNIkdgjIgCAAIgHgBIgegEIh8gOIgLgBIofhBIzaiRIgDAAIgGgBIgcgDIhwgKIm/grIlWggIgCAAIgFgBIghgDIiEgNIoRgzIrqhGIgCAAIgHgBIgbgDIhrgMImugwItchiIgCAAIgGgBIgfgDIh/gOIn8g5Ii5gWIgCAAIgFAAIgXgDIhWgJIlegmIsxhbIpFhAIgCAAIgCAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIgBgVQgBgNABAAIARABIAfADITKB9QBaAJC2AVICmATIPvB1QNCBgH8A4QFfAmFFAhQF8AnFKAgIEtAcIIxAxIa7DFIOdB5IOzEXIMIENIgOAcIAAABIgngNg");
	this.shape_469.setTransform(534,417.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(101,156,197,0.6)").s().p("EBSRAL+IsqkXItlj/IgBAAIgHgBIgcgEIhwgNIkbgkIgCAAIgGgBIgggEIh7gOIgLgBIochBIzViRIgCAAIgHAAIgbgDIhwgLIm9gqIlTghIgCAAIgHgBIgfgDIiFgMIoOgzIrnhGIgCAAIgHgBIgbgDIhqgMImsgvItYhhIgCAAIgGgBIgfgDIh/gOIn5g5Ii5gWIgCAAIgFAAIgWgDIhXgJIlbgmIsthaIpEhAIgCAAIgCgBIgCgDIgBgVQgBgMABgBIAQABIAfACITFB9QBbAJC0AVIClATIPrB0QM7BfH+A4QFcAmFEAhILDBGIEqAcQIkAwAMACIazDEIOZB5IOuEWIMFEMIgNAcIAAABQgUgFgTgHg");
	this.shape_470.setTransform(536.3,418);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(101,156,197,0.6)").s().p("EBR7AL8IsnkVItgj/IgCAAIgHgCIgcgDIhugOIkaglIgCAAIgHgBIgegDIh7gPIgLgBIoahAIzQiQIgCAAIgGAAIgcgEIhvgKIm6gqIlTghIgCAAIgGgBIgfgDIiEgNIoNgyIrjhGIgCAAIgGgBIgbgDIhqgMImqgvItVhgIgCAAIgGgBIgegCIh+gPIn4g4Ii4gWIgCAAIgFAAIgWgDIhWgJIlagmIsphZIpChAIgCAAIgDgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgCgUIAAAAQgBgLABgBIAQAAIAeABITAB9QBcAJCyAVICkATIPmBzQM1BfH+A4QFbAlFDAgQGGAoE5AeIEpAcQIcAwASACIarDEIOVB5IOqEVIMBELIgLAcIgBABQgUgFgSgGg");
	this.shape_471.setTransform(538.7,418.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(101,156,197,0.6)").s().p("EBRlAL5IsjkTItdj/IgCAAIgGgBIgcgDIhugPIkYglIgCAAIgHgBIgfgDIh6gPIgKgBIoYg/IzKiQIgCAAIgHAAIgbgEIhugKIm4grIlSggIgCAAIgGgBIgfgEIiEgLIoKgzIrghFIgCAAIgHgCIgagDIhpgLImogvItRhfIgCAAIgGgBIgfgDIh9gOIn2g4Ii3gWIgBAAIgFAAIgWgDIhWgJIlYgmIslhZIpChAIgCAAIgCAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgDgUIAAAAQgBgLABgBIAQAAIAeABIS7B8QBcAJCwAVICjATIPhBzQMwBeH+A3QFaAlFBAgIK6BGIEoAcQIUAvAZADIajDDIJCBLIFPAvIOlEUIL+EJIgKAbIgBABQgTgDgSgHg");
	this.shape_472.setTransform(541,418.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(101,156,197,0.6)").s().p("EBROAL4IsfkUItZj9IgCAAIgGgBIgcgDIhtgPIkWgmIgDAAIgGgBIgfgEIh5gOIgLgBIoVhAIzFiPIgCAAIgGAAIgcgCIhtgLIm2grIlQghIgCAAIgGgBIgggCIiCgNIoJgyIrchFIgCAAIgHgBIgagDIhpgLImlgvItOheIgCAAIgGgBIgegDIh9gOIn0g4Ii2gWIgBAAIgFAAIgWgDIhVgJIlXglIshhZIpAhAIgCAAIgCAAIgCgDIgDgUQgCgLABgBIAQAAIAegBIS2B9IEKAdICjATIPdByQMpBdH/A3QFYAlFAAhIK2BFIEnAcQILAtAgAEIabDDII/BKIFNAxIOhESIL7EJQgJAVAAAFIgBABQgTgDgSgFg");
	this.shape_473.setTransform(543.3,418.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(101,156,197,0.6)").s().p("EBQ4AL2IsckSItVj8IgBAAIgHgBIgbgDIhtgQQhrgPiqgXIgCAAIgGgBIgfgFIh5gNIgLgBIoThAIy/iOIgCAAIgGAAIgbgEIhtgKIm0grIlOggIgCAAIgHgBIgfgDIiCgMIoGgyIrZhFIgCAAIgHgBIgagDIhogMImkgtItJheIgCAAIgGgBIgfgDIh8gOInyg4Ii1gVIgBAAIgFAAIgWgDIhVgJIlVgmIsdhYQnwg2hPgKIgCAAIgCgBIgCgDIgDgTQgCgKABgBIAQgBIAdgBISxB8QBdAJCsAVICiATIPYBxQMjBcIAA4IKUBEIKzBFIElAbQIDAuAmAFIaUDBII8BLIFMAxIOcERIL4EHQgIAWgBAEIAAABQgTgCgRgFg");
	this.shape_474.setTransform(545.7,419);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(101,156,197,0.6)").s().p("EBQiAL0IsYkRItRj7IgCAAIgGgBIgbgEIhsgPIkTgoIgDAAIgGgBIgfgDIh4gOIgLgBIoQg/Iy6iOIgCAAIgGAAIgbgDIhtgLImxgqIlNghIgCAAIgGgBIgggDIiBgMIoEgyIrWhFIgCAAIgGAAIgagDIhogMImhgtItGhdIgCAAIgHgBIgegDIh8gOInvg4Ii0gVIgCAAIgFAAIgVgCIhVgKIlTglIsZhYIo+hAIgCAAIgCAAIAAAAIgCgDIgEgTIAAAAQgCgKABgCIAQgBIAdgBISsB8QBdAJCqAUIChATIPTBxQMeBbIAA3QFVAlE8AgIKvBDIEkAcQH7AtAsAGIaMDAII6BKIFKAzIOYEQIL0EGQgHAVAAAEIgBABQgSAAgRgGg");
	this.shape_475.setTransform(548,419.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(101,156,197,0.6)").s().p("EBQMALyIsVkPItNj6IgBAAIgHgBIgbgEIhrgQIkRgoIgDAAIgGgBIgfgEIh3gOIgLgBIoOg/Iy0iMIgCAAIgGgBIgbgDIhsgKImvgrIlMghIgCAAIgGgBIgggDIiBgMIoCgxIrShFIgBAAIgHAAIgagDIhngMImfgtItChcIgCAAIgHgBIgegDIh7gOInug4IizgUIgBAAIgFAAIgVgDIhVgJIlRglIsWhYIo8g/IgCAAIgCgBIAAAAIgCgDQgBgCgDgQIgBAAQgCgKACgCIAPgBIAcgCISnB7IEGAeIChASIPOBxQMXBaIBA3QFTAlE7AfIKrBDIEjAcQHzAtAyAGIaFDAII3BJIFIA0IOUEPILwEEQgGAVAAAEIAAABIgDAAQgRAAgPgFg");
	this.shape_476.setTransform(550.3,419.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(101,156,197,0.6)").s().p("EBP1ALwIsQkNItKj6IgBAAIgGgBIgbgEIhrgPQhrgSilgYIgCAAIgGgBIgfgEIh3gOIgLgBIoLg+IyviMIgCAAIgGgBIgbgDIhrgKImtgrIlKghIgCAAIgHgBIgfgDIiAgMIoAgxIrPhEIgCAAIgGgBIgagCIhmgMImegtIs+hbIgCAAIgGgBIgegDIh7gOInsg3IiygUIgBAAIgFgBIgVgCIhUgJIlQglIsRhYIo7g/IgCAAIgDgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQgCgDgDgPIgBAAQgCgKABgCIAPgCIAcgDISiB8IEFAdICgATIPJBwQMRBZIBA3QFSAkE6AgIKnBCIEhAcQHrAsA5AHIZ9C/II0BJIFGA1IOQEOILtEDQgGAUABAFIAAABIgGAAQgPAAgOgFg");
	this.shape_477.setTransform(552.6,419.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(101,156,197,0.6)").s().p("EBPgALuIsOkMItFj4IgBAAIgHgBIgagFIhqgQQhsgSiigYIgDAAIgGgBIgfgEIh2gOIgLgBIoJg+IypiLIgCAAIgGgBIgbgDIhrgKImqgrIlJghIgCAAIgHgBIgfgDIiAgMIn9gxIrMhDIgBAAIgHgBIgZgDIhmgLImbgtIs7haIgCAAIgGgBIgegDIh7gOInpg3IixgUIgBAAIgFgBIgVgCIhUgJIlOglIsOhXIo6g/IgBAAIgDgBIgCgDIgFgRIAAAAQgDgJACgDIAOgCIAcgDISdB7QBfAKCkAUICfASIPEBvQMMBZICA3QFQAkE4AfIKjBBIEgAdQHjArA/AIIZ1C+IIyBJIFFA2IOLEMILpECQgFAUABAEIAAABIgLABQgMAAgKgEg");
	this.shape_478.setTransform(554.9,419.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(101,156,197,0.6)").s().p("EBPJALsIsKkLItBj3IgBAAIgGgBIgbgFIhpgQIkNgrIgCAAIgGgBIgfgEIh2gOIgLgBIoGg+IykiKIgCAAIgGgBIgagDIhrgKImogrIlIghIgCAAIgGgBIgfgDIh/gMIn8gxIrIhDIgBAAIgHgBIgZgCIhmgLImZgtIs3hZIgCAAIgGgBIgegDIh6gOInng3IiwgUIgBAAIgFgBIgVgCIhTgJIlNglIsKhWIo4hAIgCAAIgCAAIgBAAIgBgDQgCgCgEgOIgBAAQgCgJABgDIAOgDIAcgEISYB8QBgAKCiATICeASIO/BuQMGBZICA3QFPAjE3AfIKfBBIEfAcQHaArBGAJIZtC9IIvBJIFDA2IOHEMILmEBQgEATABAEIAAABIgNACQgLAAgJgEg");
	this.shape_479.setTransform(557.3,420.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(101,156,197,0.6)").s().p("EBOzALqIsGkKIs9j2IgCAAIgGgBIgagFIhogRQhsgSiggZIgCAAIgGgBIgfgEIh1gOIgLgBIoEg9IyfiLIgBAAIgGAAIgbgDIhpgLImmgqIlHghIgCAAIgGgBIgfgDIh/gMIn5gwIrEhEIgCAAIgGAAIgZgDIhmgLImXgsIszhZIgCAAIgGgBIgegDIh5gNInmg3IivgUIgBAAIgFgBIgVgCIhSgJIlLglIsGhWIo3g/IgCAAIgCAAIgBAAIgBgDQgCgCgFgOIAAAAQgDgJACgDIANgDIAcgEISSB7IEBAdICdASIO7BuQL/BXIDA3QFOAjE1AfIKbBAIEeAdQHSAqBMAJIZlC9IItBIIFBA4IODEKILiEAQgDATACAEIgBABQgJACgHAAQgJAAgHgDg");
	this.shape_480.setTransform(559.6,420.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(101,156,197,0.6)").s().p("EBOdALoIsDkJIs5j1IgCAAIgGgBIgagEIhngRQhsgUiegZIgCAAIgGgBIgfgEIh1gOIgKgBIoCg9IyZiKIgCAAIgGAAIgagDIhpgKImkgrIlFgiIgCAAIgGAAIgfgDIh+gMIn4gwIrBhDIgBAAIgGAAIgZgDIhlgLImVgrIsvhZIgCAAIgHgBIgdgDIh5gNInkg3IiugUIgBAAIgFAAIgUgDIhTgJIlJgkIsChVIo2hAIgBAAIgDAAIAAAAIgCgDQgCgCgFgNIAAAAQgDgJABgDIAOgDIAbgGISNB7IEAAdICcASIO2BtQL5BXIEA3IJ/BBIKYBAIEcAdQHKAqBSAJIRkCAIQkCEIFAA5IN+EJILfD+QgDATADAEIgBABQgJADgIAAQgIAAgGgDg");
	this.shape_481.setTransform(561.9,420.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(101,156,197,0.6)").s().p("EBOGALmIr/kHIs1j1IgBAAIgGgBIgagEQgogIg/gKQhsgUicgZIgCAAIgHgBIgegEIh1gOIgKgBIn/g9IyUiIIgCAAIgGgBIgagDIhogKImhgrIlEghIgCAAIgHgBIgegDIh+gMIn1gwIq+hCIgBAAIgGgBIgZgDIhkgKImTgsIsshXIgCAAIgGgBIgegDIh4gOInig2IitgTIgBAAIgEgBIgVgCIhSgJIlIgkIr+hWIo0g/IgCAAIgCAAIgBAAIgCgDQgCgCgFgNIAAAAQgDgIABgDIANgEIAbgGISIB7QBiAKCcATICcASIOxBsQLzBWIFA3QFKAiEyAeIKTBAIEbAcQHCAqBZAKIZWC8IIoBHIE9A5IN7EJILbD9QgCASACAEIAAABQgKADgJAAQgGAAgGgCg");
	this.shape_482.setTransform(564.3,420.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(101,156,197,0.6)").s().p("EBNvALkIr7kGIsyj0IgBAAIgGgBIgZgEIhngSQhsgViagZIgCAAIgHgBIgegEIh0gOIgKgBIn9g8IyPiJIgBAAIgGAAIgagDIhogLImegqIlDgiIgCAAIgHAAIgegDIh9gMInzgwIq6hCIgCAAIgGgBIgZgCIhjgLImRgrIsohWIgCAAIgGgBIgegDIh4gOInfg2IisgTIgBAAIgFgBIgVgCIhRgJIlGgkIr6hVIozg/IgCAAIgDgBIgCgCQgCgCgFgMIgBAAQgDgIABgEIANgEIAagHISEB7ID8AdICbASIOtBsQLtBUIFA3IJ5BBIKPA+IEaAdQG6ApBfALIZPC7IIkBHIE8A6IN2EHILYD8QgCARAEAFIAAABQgLAEgJAAQgGAAgFgCg");
	this.shape_483.setTransform(566.7,421.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(101,156,197,0.6)").s().p("EBNZALiIr4kFIstjzIgCAAIgFgBIgagEQgogIg+gKQhsgViYgbIgCAAIgHgBIgegDIh0gOIgKgBIn6g8IyJiIIgCAAIgGAAIgZgDIhogLImcgqIlBgiIgCAAIgHgBIgegDIh9gLInxgwIq3hCIgBAAIgGAAIgZgDIhjgKImOgrIslhWIgCAAIgGgBIgdgDIh4gNIndg2IirgTIgBAAIgFgBIgUgCIhRgJIlFgkIr2hUIoyg/IgBAAIgDgBIgBAAIgBgCQgDgCgFgMIgBAAQgDgIABgDIANgFIAZgHIR/B7ID7AcICaASIOoBrQLnBUIFA3QFHAiEvAeIKMA+IEZAcQGxApBlAMIRVB+IQVCCIE6A7INyEGILUD8QgBAQAEAEIgBABQgLAFgJAAQgFAAgEgBg");
	this.shape_484.setTransform(569,421.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(101,156,197,0.6)").s().p("EBNCALfIr0kEIsqjxIgBAAIgGgBIgZgEIhlgTQhtgViWgbIgCAAIgHgBIgegEIhzgNIgKgBIn4g8IyEiHIgBAAIgGgBIgZgDIhngKImagrIlAghIgCAAIgHgBIgegDIh8gLInvgwIqzhCIgCAAIgGAAIgYgCIhjgLImMgqIshhVIgCAAIgGgBIgdgDIh3gNIncg2IiqgTIgBAAIgEgBIgVgCIhQgJIlDgkIryhUIoxg/IgBAAIgDAAIgBAAIgBgCQgDgCgGgMIgBAAQgDgHABgEIANgFIAZgIIR5B6ID6AcICaASIOiBrQLhBUIGA2QFGAiEuAdQHJArC+ATIEYAcQGpAoBsANIROB9IQQCDIE5A8INtEFILRD5QAAAQAEAFIAAABQgMAGgJAAQgEAAgEgCg");
	this.shape_485.setTransform(571.4,421.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(101,156,197,0.6)").s().p("EBMrALdIrwkDIjMg/IpaixIgBAAIgGgBIgZgFQgogIg8gLQhtgWiVgaIgCAAIgGgBIgegEIhzgOIgKgBIn1g7Ix/iHIgBAAIgGAAIgZgDIhmgLImYgqIk/giIgCAAIgGAAIgegDIh8gMIntgvIqvhBIgCAAIgGgBIgYgCIhigLImLgpIschVIgCAAIgHgBIgdgDIh2gNInag1IipgUIgBAAIgEAAIgVgCIhQgJIlBgkIruhUIovg+IgCAAIgDgBIAAAAIgCgCQgDgCgGgLIgBAAQgDgHABgEIAMgFIAZgJIR0B7QBlAKCUASICYARIOeBqQLbBTIHA2QFEAiEsAdIKEA9IEWAdQGhAnByANIRKB9IQLCCIE2A9INqEEILND5QAAAPAFAEIAAABQgNAIgJAAIgHgCg");
	this.shape_486.setTransform(573.8,421.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(101,156,197,0.6)").s().p("EBMUALbIrskCIjLg/IpXiwIgBAAIgGgBIgZgFIhjgTQhtgXiTgbIgCAAIgHgBIgegDIhygOIgKgBInzg7Ix5iGIgBAAIgGAAIgZgDIhmgLImVgqIk+giIgCAAIgGgBIgegDIh7gLInrgvIqshBIgCAAIgFAAIgYgDIhigKImIgpIsZhUIgCAAIgHgBIgdgDIh2gNInXg1IiogUIgBAAIgFAAIgUgCIhQgJIk/gjIrrhUIotg+IgCAAIgDgBIAAAAIgCgCQgEgCgFgKIgBAAQgEgHABgEIAMgGIAYgJIRwB6ID3AcICYARIOZBqQLVBRIHA3QFCAhErAdIKAA9IEVAcQGZAnB4AOIREB8IQGCCIE1A+INlECILLD4QAAAPAFAEIAAABQgNAIgJAAIgGgBg");
	this.shape_487.setTransform(576.2,422.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(101,156,197,0.6)").s().p("EBL9ALZIrpkAIjJhAIpUivIgCAAIgFgBIgZgFIhjgTQhtgXiRgcIgCAAIgHgBIgegDIhxgOIgKgBInxg6IxziFIgCAAIgFgBIgZgDIhlgLImTgrIk8ghIgCAAIgHAAIgegEIh7gLInoguIqphBIgBAAIgGgBIgYgDIhhgKImGgoIsWhTIgCAAIgGgBIgdgDIh1gNInWg1IimgTIgCAAIgEAAIgUgDIhPgJIk+gjIrnhTIosg/IgCAAIgDAAIgBAAIgBgCQgEgCgGgJIgBAAQgEgHABgFIAMgGIAYgKIRrB6ID1AcICXARIOUBqQLQBRIHA2QFBAgEpAeQHYArCkAQIEUAdQGRAmB+APIQ/B8IQBCBIEzA/INhEBILHD3QABAOAGAEIgBABQgMAJgJAAIgGgBg");
	this.shape_488.setTransform(578.6,422.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(101,156,197,0.6)").s().p("EBLmALXIrlj/IjJhAIpRiuIgBAAIgFgBIgZgFIhigUQhtgXiQgcIgCAAIgGgBIgegEIhxgNIgKgBInvg7IxtiEIgCAAIgFAAIgZgDIhkgLImSgrIk6ghIgCAAIgHgBIgegDIh6gLInmgvIqmhAIgBAAIgFgBIgYgCIhhgKImEgpIsShSIgCAAIgGgBIgdgDIh1gNInUg1IilgSIgBAAIgEgBIgUgCIhPgJIk9gjIrihSIorg/IgCAAIgDAAIgBAAIgBgCQgEgCgHgJIgBAAQgEgHACgEIALgHIAYgLIRlB6ID0AcICXARIOPBpQLJBQIIA2QFAAhEnAcIJ5A8IESAcQGJAmCEAQIQ6B7IP8CAIExBAINdEAILDD1QACAOAGAFIAAABQgNAKgJAAIgFgBg");
	this.shape_489.setTransform(581,422.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(101,156,197,0.6)").s().p("EBLQALVIrij+IjHhAIpPitIgBAAIgFgBIgZgFIhhgUQhtgYiOgcIgCAAIgHgBIgegEIhwgNIgKgBInsg7IxoiDIgCAAIgFAAIgZgDIhjgLImPgrIk6giIgCAAIgGAAIgegDIh6gMInkguIqihAIgBAAIgFAAIgYgDIhggKImCgoIsOhRIgCAAIgHgBIgdgDIh0gNInSg1IikgSIgBAAIgEAAIgUgDIhPgIIk6gjIrfhTIoqg+IgCAAIgDgBIAAAAIgCgBQgEgCgHgJIgBAAQgEgGABgFIAMgHIAXgLIRgB6IDzAbICVARIOLBoQLDBPIJA2QE+AhEmAcIJ0A7IERAdQGBAlCLAQIQ0B7IP3CAIEwBAILiDaIM2EaQADANAGAEIAAABQgOALgIAAIgEAAg");
	this.shape_490.setTransform(583.3,422.9);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(101,156,197,0.6)").s().p("EBK5ALSIrej9IjHg/IpLitIgBAAIgGgBIgYgFIhggUQhugZiMgcIgCAAIgHgBIgdgEIhwgNIgKgBInqg6IxjiDIgBAAIgFAAIgZgDIhjgLImMgrIk5ghIgCAAIgGgBIgegDIh5gLIniguIqehAIgCAAIgFAAIgXgDIhggKImAgnIsKhRIgCAAIgHgBIgdgDIhzgNInQg0IijgTIgCAAIgEAAIgUgCIhOgJIk5gjIrbhSIoog+IgCAAIgDAAIAAAAIgCgCQgEgCgHgIIgBAAQgFgGACgFIALgIIAWgLIRcB5IDxAcICVARIOFBnQK+BOIJA2QE8AhElAcQHmAsCKAOIEQAdQF5AkCRARIQvB6IPyCAIEuBCILeDYIMyEYQAEANAGAFIAAABQgNAMgJAAIgDgBg");
	this.shape_491.setTransform(585.7,423.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(101,156,197,0.6)").s().p("EBKiALQIraj7IjGg/IpIisIgBAAIgFgBIgYgFIhggVQhugZiKgdIgCAAIgHgBIgegDIhvgNIgKgBInng6IxdiCIgCAAIgFgBIgYgDIhjgKImKgrIk3giIgCAAIgGgBIgegDIh5gLInfguIqcg/IgBAAIgFAAIgXgDIhggKIl9gnIsHhQIgCAAIgHgBIgcgDIhzgNInOg0IiigSIgCAAIgEAAIgTgCIhOgJIk3gjIrXhRIong+IgCAAIgDgBIgBAAIgCgBQgEgCgHgIIgCAAQgEgGABgFIALgIIAWgMIRXB5IDwAbICUARIOABnQK4BOIKA1QE6AhEkAbIJsA6IEOAdQFxAkCYASIQpB5IPtB/IEsBDILbDXIMuEXQAEANAHAEIAAABQgOAMgIAAIgDAAg");
	this.shape_492.setTransform(588.1,423.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(101,156,197,0.6)").s().p("EBKLALOIrWj7IjFg/IpFirIgCAAIgFgBIgXgFIhggVQhugZiIgdIgCAAIgHgBIgdgEIhvgNIgKgBInlg5IxYiCIgBAAIgFAAIgYgDIhigLImIgrIk2giIgCAAIgGAAIgegDIh4gMIndgtIqYg/IgCAAIgFAAIgXgDIhfgKIl7gmIsDhQIgCAAIgHgBIgcgDIhzgMInMg0IihgTIgBAAIgEAAIgUgCIhNgIIk2gjIrThRIolg+IgCAAIgEgBIAAAAIgCgBQgEgCgIgHIgBAAQgFgGACgFIAKgIIAWgNIRRB5IDvAbICTARIN8BmQKxBNILA1QE5AgEiAcQHwAtB4AMIENAdQFpAjCeATIQkB4IPoB/IEqBEILXDWIMqEWQAFAMAIAEIgBABQgNAOgIAAIgDAAg");
	this.shape_493.setTransform(590.5,423.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(101,156,197,0.6)").s().p("EBJ1ALMIrTj5IjEg/IpCirIgBAAIgFgBIgYgFIhfgVQhugaiHgdIgBAAIgHgBIgegEIhugNIgKgBInig5IxTiBIgBAAIgFAAIgYgDIhhgLImGgrIk0giIgCAAIgHgBIgdgDIh4gLInbgtIqUg/IgCAAIgFAAIgXgCIhegKIl6gnIr/hOIgCAAIgGgBIgdgDIhygNInKgzIiggSIgBAAIgEgBIgUgCIhMgIIk0gjIrQhRIokg9IgCAAIgDgBIgBAAIgCgBQgEgCgIgHIgBAAQgFgFABgFIALgJIAVgOIRMB5IDtAbICTARIN3BlQKrBMIMA2QE3AgEgAbQH1AtBwAMIEMAcQFgAjCkAUIQfB4IPjB+IEpBEILTDVIMmEVQAFAMAIAEIAAABQgOAPgHAAIgCAAg");
	this.shape_494.setTransform(592.8,423.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(101,156,197,0.6)").s().p("EBJeALJIrQj3IjCg/IpAiqIgBAAIgFgBIgXgFIhegVQhugbiFgeIgCAAIgHgBIgdgDIhugNIgKgBInfg5IxOiAIgBAAIgFgBIgYgDIhhgKImDgrIkzgiIgCAAIgHgBIgdgDIh3gLInZgtIqRg+IgBAAIgFgBIgXgCIhegKIl3gmIr8hNIgCAAIgGgBIgdgDIhxgNInIgzIifgSIgCAAIgDAAIgUgDIhMgIIkzgiIrLhRIojg+IgCAAIgDAAIgBAAIgCgBQgFgCgHgHIgCAAQgFgEABgGIALgJIAUgPIRIB6IDsAaICRARINzBlQKlBLIMA1QE1AgEfAbQH6AuBnAKIEKAdQFZAiCqAUIQaB5IPeB8IEnBGILQDUIMiEUQAFAKAJAFIAAABQgOAQgHAAIgCgBg");
	this.shape_495.setTransform(595.2,424.2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(101,156,197,0.6)").s().p("EBJHALHIrMj2IjBg/Io9ipIgBAAIgFgBIgXgFIhegWQhugbiDgeIgCAAIgHgBIgdgDIhtgNIgKgBIndg5IxIiAIgCAAIgEAAIgYgDIhggLImBgqIkygiIgCAAIgHgBIgdgDIh2gLInXgtIqOg+IgBAAIgFAAIgXgDIhdgJIl1gmIr4hNIgCAAIgGgBIgdgDIhxgMInGgzIiegSIgBAAIgEAAIgTgDIhMgIIkxgiIrHhQIoig+IgCAAIgDAAIgBAAIgCgBQgFgCgIgGIgBAAQgGgFACgFIAKgKIAUgPIRCB5IDrAaICRARINtBkQKfBKINA2QE0AfEdAbQH/AuBeAKIEJAcQFQAiCxAVIQVB5IPZB7IElBGILMDTIMeETQAGAKAJAEIAAABQgOARgGAAIgCAAg");
	this.shape_496.setTransform(597.6,424.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(101,156,197,0.6)").s().p("EBIwALFIrIj2IjAg+Io6ioIgBAAIgFgBIgXgFIhdgXQhugbiCgeIgBAAIgHgBIgdgEIhtgNIgKgBInag4IxDh/IgBAAIgFAAIgYgDIhfgLIl/grIkwgiIgCAAIgHgBIgdgDIh2gLInVgsIqKg+IgBAAIgFAAIgXgDIhcgJIl0glIrzhMIgCAAIgHgBIgcgDIhxgNInEgzIidgSIgBAAIgEAAIgTgCIhMgIIkvgiIrDhQIogg+IgCAAIgEAAIgBAAIgBgBQgGgBgIgGIgCAAQgFgEABgGIAKgLIAUgPIQ9B5IDpAaICRAQINoBkQKZBKINA1QEzAfEcAbQIDAuBWAJIEIAcQFIAiC3AVIQPB4IPUB7IEjBHILJDSIMaESQAHAJAJAFIAAABQgPASgGAAIgBAAg");
	this.shape_497.setTransform(600,424.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(101,156,197,0.6)").s().p("EBIaALDIrFj1Ii/g+Io3inIgBAAIgFgBIgXgFIhcgXQhvgch/gfIgCAAIgHgBIgdgDIhsgNIgKgBInYg4Iw9h+IgCAAIgEAAIgYgDIhfgLIl8grIkvgiIgCAAIgHgBIgdgDIh1gLInTgsIqHg+IgBAAIgFAAIgWgCIhcgJIlxglIrwhMIgCAAIgHgBIgcgDIhwgMInCgzIicgSIgBAAIgEAAIgTgCIhMgIIktgiIrAhPIofg+IgBAAIgEAAIgBAAIgCgBQgFgCgJgFIgBAAQgGgEACgGIAJgLIAUgQIQ4B5IDnAaICQARINkBiQKTBJIOA2QExAeEaAbQIIAuBNAIIEHAdQE/AhC+AWIQKB3IPPB7IEiBIILEDRIMWEQQAIAJAJAEIAAABQgOAUgFAAIgBAAg");
	this.shape_498.setTransform(602.4,425);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(101,156,197,0.6)").s().p("EBIDALAIt/kxIo0imIgBAAIgFgBIgWgFIhcgXQhvgdh+gfIgBAAIgHgBIgdgDIhsgNIgJgBInWg4Iw4h+IgBAAIgFAAIgXgDIhfgLIl6gqIktgjIgCAAIgHAAIgdgDIh1gLInQgsIqEg9IgBAAIgFgBIgWgCIhbgJIlwglIrshKIgCAAIgHgBIgcgDIhvgNInAgyIibgRIgBAAIgEgBIgTgCIhLgIIksgiIq7hPIoeg9IgCAAIgEgBIAAAAIgCAAQgGgCgJgFIgBAAQgGgDABgHIAJgLIAUgRIQzB5IDmAaICPARINfBiQKNBIIOA1IJJA5IJRA1IEFAdQE4AhDEAXIQEB3IPKB5IEgBKILBDPIMSEPQAIAJAKAEIAAABQgOAVgFAAIgBgBg");
	this.shape_499.setTransform(604.7,425.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(101,156,197,0.6)").s().p("EBHsAK+It6kwIoyilIgBAAIgEgBIgXgFIhagYQhvgdh9gfIgBAAIgHgBIgdgEIhrgMIgKgBInTg4Iwzh9IgBAAIgEAAIgXgDIhegLIl4grIksgiIgCAAIgHAAIgdgDIh0gLInPgsIp/g9IgCAAIgEAAIgWgCIhbgJIluglIrohJIgCAAIgHgBIgcgDIhvgNIm+gyIiagRIgBAAIgDAAIgUgDIhKgIIkqghIq4hPIocg9IgCAAIgEgBIAAAAIgCAAQgGgCgJgEIgCAAQgGgDACgHIAIgMIATgRIQuB4IDlAaICOARINaBhQKHBHIPA2QEuAeEYAaIJNA1IEEAdQEvAgDLAXIP/B3IPFB5IEeBKIK+DPIMNENQAJAJALAEIAAABQgPAVgEAAIgBAAg");
	this.shape_500.setTransform(607.1,425.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(101,156,197,0.6)").s().p("EBHVAK8It2kvIouikIgBAAIgEgBIgXgGIhagYIjpg9IgCAAIgHgBIgdgDIhqgNIgKgBInRg3Iwth8IgBAAIgEAAIgXgDIhegLIl1grIkrgiIgCAAIgHgBIgdgDIhzgLInNgsIp8g8IgBAAIgFAAIgWgCIhagJIlrgkIrlhJIgCAAIgHgBIgcgDIhugNIm8gyIiZgRIgBAAIgEAAIgTgCIhKgIIkogiIq0hOIobg9IgCAAIgEAAIgBAAIgBgBIgQgFIgCAAQgGgDACgHIAIgMIATgSIQpB4IDjAaICOAQINVBhQKBBHIPA1QEtAeEWAZQIVAvA0AGIEDAdQEnAfDRAZIP6B1IPAB5IEcBLIK6DOIMJEMQAKAIALAEIAAABQgOAXgEAAIgBAAg");
	this.shape_501.setTransform(609.5,425.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(101,156,197,0.6)").s().p("EBG/AK5ItxktIosijIgBAAIgEgBIgWgGIhagYQhvgeh5ggIgBAAIgHgBIgdgDIhqgNIgJgBInPg3Iwoh7IgBAAIgEgBIgXgDIhdgKIlzgrIkpgjIgCAAIgHAAIgdgDIhzgLInKgsIp5g8IgBAAIgFAAIgWgCIhagJIlpgjIrhhJIgCAAIgHgBIgbgDIhugMIm6gyIiYgRIgBAAIgEAAIgTgCIhJgIIknghIqwhOIoag9IgBAAIgEgBIgBAAIgCAAQgGgBgKgEIgCAAQgGgDACgHIAIgMIASgTIQkB4IDiAaICMAQINRBhQJ7BFIQA1QErAeEUAZIJGA0IEBAdQEfAfDXAZIP1B1IO7B5IEbBMIK2DMIMFELQALAIALAEIAAABQgOAYgEAAIAAgBg");
	this.shape_502.setTransform(611.9,426);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(101,156,197,0.6)").s().p("EBGoAK3IttksIooiiIgBAAIgFgBIgVgGIhZgYIjmg/IgCAAIgHgBIgdgEIhpgMIgKgBInMg3Iwih7IgBAAIgEAAIgXgDIhcgLIlxgrIkogiIgCAAIgHAAIgdgDIhygLInIgsIp2g7IgBAAIgEAAIgWgCIhagJIlmgjIrehIIgCAAIgHgBIgbgDIhugMIm4gyIiXgRIgBAAIgDAAIgTgCIhJgIIklghIqshNIoZg9IgBAAIgEgBIgBAAIgCAAQgHgBgKgEIgBAAQgHgCACgHIAIgNIARgTIQgB4IDgAZICMAQINMBgQJ1BFIQA1QEpAdETAaIJCAzIEAAdIH0A4IPwB0IO2B4IEZBNIKyDMIMCEKQAKAGAMAFIAAABQgOAYgDAAIAAAAg");
	this.shape_503.setTransform(614.3,426.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(101,156,197,0.6)").s().p("EBGRAK1ItokrIomiiIgBAAIgEgBIgVgGIhYgYIjlhAIgCAAIgHgBIgdgDIhpgMIgJgBInKg3Iwch6IgBAAIgFAAIgWgDIhcgLIlugrIkngjIgCAAIgHAAIgcgDIhzgLInFgrIpzg7IgBAAIgEAAIgVgDIhagIIlkgjIrahHIgCAAIgHgBIgbgDIhtgMIm2gxIiWgRIgBAAIgEAAIgSgCIhJgIIkjghIqphNIoXg9IgBAAIgEgBIgBAAIgCAAIgRgEIgCAAQgGgCABgHQACgFAGgIIARgUIQaB3IDfAaICLAQINHBfQJvBEIRA1II6A2II9AzID/AdIHzA4IPpB0IOxB3IEYBPIKvDKIL9EIQALAHANAEIAAABQgOAagDAAIAAAAg");
	this.shape_504.setTransform(616.7,426.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(101,156,197,0.6)").s().p("EBF6AKzItjkqIoiihIgCAAIgEgBIgVgGIhXgZIjkhAIgBAAIgHgBIgdgDIhogNIgJgBInIg2IwXh5IgBAAIgEAAIgXgDIhbgLIlsgrIkmgjIgCAAIgGAAIgdgDIhxgLInEgrIpvg7IgBAAIgEAAIgVgCIhZgJIljgiIrWhGIgCAAIgHgBIgbgDIhsgMIm0gxIiVgRIgBAAIgDAAIgTgCIhIgIIkighIqlhNIoVg8IgCAAIgEgBIgBAAIgCAAIgRgDIgCAAQgHgCACgIIAHgNIARgVIQVB4IDeAZICKAQINCBeQJpBEISA0QEmAdEQAZII6AyID9AdIHxA5IPlBzIOsB3IPAEYIL6EIIAZAKIgBABQgOAbgCAAIAAAAg");
	this.shape_505.setTransform(619,426.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(101,156,197,0.6)").s().p("EBFjAKwItekoIogigIgBAAIgEgBIgVgGIhXgZIjhhBIgCAAIgHgBIgdgEIhogMIgJgBInFg1IwRh6IgBAAIgFAAIgWgDIhagLIlqgrIkkgiIgCAAIgHgBIgcgDIhygKInBgrIpsg7IgBAAIgEAAIgVgCIhYgIIlggiIrThFIgCAAIgHgBIgbgDIhsgMImygxIiUgRIgBAAIgDAAIgSgCIhIgIIkgghIqhhMIoUg9IgCAAIgEAAIgBAAIgCAAIgSgDIgCAAQgGgBABgIQACgGAFgIIARgWIQQB4IDcAZICJAQIM+BeQJjBCISA1IIzA1II2AyID8AdIHvA5IPfByIOnB3IO8EYIL1EGIAaAJIAAABQgOAdgBAAIgBgBg");
	this.shape_506.setTransform(621.4,427.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(101,156,197,0.6)").s().p("EBFNAKuItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDQgMgBAOgWIAQgWQXGCsLhBRQOoBmL4BFIIyAxIbCDIIOiB2IO2EYIMMEOQgOAegBAAIAAAAg");
	this.shape_507.setTransform(623.8,427.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(101,156,197,0.6)").s().p("EBE0AKrItVklItokBIgBAAIgHgBIgcgDIhwgNQh1gPjQgZIgCAAIgGgBIghgEIhSgKIg6gHIo2hBIySiLIgCAAIgHAAIgcgDIhwgLIm9gqIn+gxIgCAAIgGgBIgigDIiKgNIoqg1IohgzIgCAAIgHgBIgbgDIhrgMImtgwIyHiDIgCAAIgGgBIgggEIiGgPImBgrIgCAAIgFgBIgVgCIgBAAQgMgCAOgWIAPgWIADAAIG4AzQRzCEJuBFIFUAkQGMAqFdAiQE5AfEhAbQIpAwAGABIa5DHIOdB3IOwEXILuEDIAaAKIgHAPQgIAPgBAAIAAgBg");
	this.shape_508.setTransform(626.2,427.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(101,156,197,0.6)").s().p("EBEcAKoItQkjItkj/IgBAAIgHgBIgcgEIhvgOIlCgoIgCAAIgGgBIgigEIhRgKIg6gHIozhAIyMiKIgCAAIgHgBIgcgDIhvgKIm6grIn8gxIgCAAIgGgBIghgDIiKgNIong0Ioeg0IgCAAIgHgBIgagCIhrgMImrgwIyAiCIgCAAIgHgBIgfgEIiFgOIl/grIgCAAIgFgBIgVgCIgBAAQgLgCANgWIAPgWIADAAIG2AzQRpCDJvBEIFSAkQGQAqFUAiQE3AfEfAaIIuAxIavDHIOXB4IOsEVILqECIAYAKIgHAPQgHAOgBAAIAAgBg");
	this.shape_509.setTransform(628.6,427.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(101,156,197,0.6)").s().p("EBEEAKmItMkiItfj+IgBAAIgHgBIgcgEIhugOQh1gQjLgZIgCAAIgGgBIghgEIhRgKIg6gHIowhAIyGiJIgCAAIgHgBIgbgDIhvgKIm3grIn5gxIgCAAIgGgBIghgDIiKgNIokg0IobgzIgCAAIgHgBIgagDIhqgLImogvIx7iBIgCAAIgGgBIgggEIiEgPIl9grIgBAAIgGAAIgUgDIgBAAQgLgCANgVIAPgWIADAAIGzAzQRgCBJwBEIFPAkQGVAqFLAhQE1AfEeAaQIZAvASADIamDFIOSB5IOnEUILmEBIAXAKIgHAOQgHAOgBAAIAAAAg");
	this.shape_510.setTransform(631,428.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(101,156,197,0.6)").s().p("EBDrAKjItHkhItaj9IgBAAIgHgBIgcgDIhtgPIk+gqIgCAAIgGgBIghgDIhRgKIg5gHIothAIyAiJIgCAAIgGAAIgbgDIhugLIm1gqIn3gxIgCAAIgGgBIghgDIiIgNIoig0IoYgyIgCAAIgGgBIgbgDIhpgMImmgvIx0h/IgCAAIgGgBIgggEIiEgPIl6gqIgCAAIgFgBIgUgCIgBAAQgLgCANgVIAOgWIADAAIGxAyQRWCAJxBEIFOAkILbBKIJQA5QIQAuAYAEIadDEIGjA0IHqBGIOiETILhD/IAXAKIgHAPQgHANgCAAIAAAAg");
	this.shape_511.setTransform(633.4,428.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(101,156,197,0.6)").s().p("EBDTAKgItDkfItVj8IgBAAIgHgBIgbgDIhtgPQh1gRjHgaIgCAAIgGgBIghgEIhQgJIg5gHIoqhAIx5iHIgCAAIgHgBIgbgDIhtgKImygrIn0gxIgCAAIgGgBIghgDIiIgNIofgzIoVgzIgBAAIgHAAIgagDIhpgMImjguIxvh/IgCAAIgGgBIgfgDIiDgPIl4gqIgCAAIgFgBIgVgCIAAAAQgLgDANgUIAOgWIADAAIGvAyQRMB+JyBEIFMAjILWBKQEyAfEbAaQIIAuAeAEIaUDDIGgA0IHnBHIOcESILeD+IAWAKIgHAPQgHAMgCAAIAAAAg");
	this.shape_512.setTransform(635.8,428.7);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(101,156,197,0.6)").s().p("EBC7AKdIs+kdItQj6IgCAAIgGgBIgbgEIhsgPQh2gRjEgbIgCAAIgGgBIghgEIhQgJIg4gHIong/Ix0iHIgBAAIgHgBIgbgDIhsgKImwgrInxgxIgCAAIgGAAIghgDIiHgNIocgzIoSgzIgCAAIgGgBIgagCIhogMImhguIxoh9IgCAAIgHgBIgfgEIiCgOIl2gqIgCAAIgFgBIgUgCIgBAAQgKgDAMgUIAOgWIADAAIGtAxQRCB+JzBEIFKAiILRBJQEwAfEaAaQIAAuAkAEIaKDDIGeAzIHkBJIOYEQILZD9IAVAKIgHAPQgHALgCAAIAAAAg");
	this.shape_513.setTransform(638.1,428.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(101,156,197,0.6)").s().p("EBCjAKaIs6kcItLj5IgCAAIgGgBIgbgEIhrgPQh2gSjCgaIgCAAIgGgBIghgEIhPgKIg4gGIokg/IxtiHIgCAAIgHAAIgagDIhsgKImtgrInvgxIgCAAIgGgBIgggDIiHgNIoZgyIoPgyIgCAAIgGgBIgagDIhngLImfguIxih8IgCAAIgGgBIgfgEIiCgOIl0gqIgBAAIgFAAIgUgDIgBAAQgKgDAMgUIAOgWIADAAIGqAyQQ5B8JzBDIFJAjILMBIIJHA5QH3AtAqAFIaCDCIGbAzIHhBKIOSEPILWD7IAUALIgHAOQgHAMgCAAIAAgBg");
	this.shape_514.setTransform(640.5,429.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(101,156,197,0.6)").s().p("EBCKAKYIs0kbItHj4IgCAAIgGgBIgbgEIhqgPQh2gSjAgbIgCAAIgGgBIgggEIhPgKIg4gGIohg/IxniGIgCAAIgGAAIgbgDIhrgKImqgrInsgxIgCAAIgGgBIghgDIiGgMIoWgzIoMgxIgBAAIgHgBIgZgDIhngLImdgtIxbh7IgCAAIgGgBIgfgEIiBgPIlygpIgBAAIgFgBIgUgCIgBAAQgJgDALgUIAOgWIACAAIGoAxQQwB7J0BEIFHAiILHBHIJEA5QHuAsAxAGIZ4DBIGZAzIHeBLIONEOILSD6IATALIgHAOQgHALgDAAIAAAAg");
	this.shape_515.setTransform(642.9,429.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(101,156,197,0.6)").s().p("EBByAKVIswkZItCj3IgCAAIgGgBIgagEIhqgQQh2gTi9gbIgCAAIgHgBIgggEIhOgJIg4gHIoeg+IxhiFIgBAAIgHAAIgagDIhrgLImngqInqgxIgCAAIgGgBIgggDIiFgNIoUgyIoIgxIgCAAIgHgBIgZgDIhmgLImagsIxWh6IgCAAIgGgBIgfgEIiAgOIlvgqIgCAAIgFAAIgUgDIAAAAQgJgDALgTIANgWIADAAIGmAwQQmB6J1BDIFEAiILDBHQEqAeEXAbQHmAsA2AGIZvDAIGXAzIHbBMIOIENILND4IASALIgHAOQgGALgCAAIgBAAg");
	this.shape_516.setTransform(645.3,429.8);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(101,156,197,0.6)").s().p("EBBaAKSIsskXIs9j1IgCAAIgGgBIgagEIhpgQQh2gUi7gbIgCAAIgGgBIghgEIhOgKIg3gGIobg+IxaiEIgCAAIgGgBIgbgCIhpgLImlgqInngxIgCAAIgGgBIgggDIiFgNIoRgyIoFgxIgCAAIgGgBIgagCIhlgLImYgtIxPh4IgCAAIgGgBIgfgEIiAgOIltgpIgBAAIgFgBIgUgCIgBAAQgIgEALgTIANgVIADgBIGjAxQQdB4J1BDIFDAiIK+BGII9A5QHgArA7AHIZlC/IGVAyIHYBOIOCELILKD3IARALIgHAPQgHAJgCAAIAAAAg");
	this.shape_517.setTransform(647.7,430);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(101,156,197,0.6)").s().p("EBBBAKPIsnkVIs4j1IgCAAIgGgBIgagEQgmgHhCgJQh2gUi5gcIgCAAIgGgBIgggEIhOgJIg3gHIoYg9IxUiEIgCAAIgGAAIgagDIhpgKImigqInlgxIgCAAIgGgBIgggDIiEgNIoOgyIoCgwIgCAAIgGgBIgZgDIhlgLImVgsIxJh3IgCAAIgHgBIgegEIh/gOIlrgpIgBAAIgFAAIgUgDIgBAAQgIgEALgSIANgWIACgBIGhAxQQTB3J3BDIFBAhIK5BFII6A5QHYArBAAIIZcC+IGTAyIHVBPIN9EKILGD1IAQAMIgHAOQgGAKgDAAIgBgBg");
	this.shape_518.setTransform(650.1,430.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(101,156,197,0.6)").s().p("EBApAKNIsikUIs0j0IgCAAIgGgBIgagEQgmgHhBgJQh2gVi3gcIgCAAIgGgBIgggEIhNgJIg3gHIoVg9IxOiCIgCAAIgGgBIgZgDIhpgKImfgqInigxIgCAAIgGgBIgggDIiDgNIoMgxIn/gxIgCAAIgGAAIgZgDIhkgLImTgrIxDh3IgCAAIgGgBIgegDIh/gPIlogoIgCAAIgEAAIgUgDIgBAAQgHgEAKgSIAMgWIADgBIGfAwQQJB2J3BDIFAAhIK0BFII3A5QHPApBGAJIOXBqIRNCFIHSBQIN4EJILBD0QAIAHAIAFIgHAOQgHAJgDAAIAAAAg");
	this.shape_519.setTransform(652.5,430.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(101,156,197,0.6)").s().p("EBARAKKIsekTIsvjyIgBAAIgGgBIgagEQgmgHhAgKQh3gVi0gdIgCAAIgGgBIgggDIhNgKIg3gGIoRg9IxIiCIgCAAIgGAAIgZgDIhogKImdgrInfgxIgCAAIgGAAIgggDIiDgNIoIgxIn8gwIgCAAIgGgBIgZgDIhkgKImQgrIw9h2IgCAAIgGgBIgegDIh+gOIlmgpIgBAAIgFAAIgUgCIAAAAQgIgFAKgSIANgVIACgBIGdAwQP/B0J4BDIE+AhIKvBDII0A5QHHAqBMAJIORBpIRHCFIHPBRINzEIIK9DyQAHAHAIAFIgHAOQgHAJgCAAIgBAAg");
	this.shape_520.setTransform(654.9,430.8);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(101,156,197,0.6)").s().p("EA/5AKHIsakRIsqjxIgBAAIgGgBIgZgEIhmgRQh3gWiygdIgCAAIgGgBIgggDIhMgKIg3gGIoOg9IxCiBIgBAAIgGAAIgagDIhngKImagqIndgxIgCAAIgGgBIgfgDIiCgNIoGgxIn5gvIgCAAIgGgBIgYgDIhkgKImNgrIw3h0IgCAAIgGgBIgfgEIh8gOIlkgoIgCAAIgEAAIgUgDIgBAAQgGgEAJgSIAMgVIADgBIGaAvQP2B0J5BCIE7AhIKrBCIIxA5QG+ApBTAKIOMBpIRACEIHMBSINuEHIK5DxIAOAMIgHAOQgGAIgDAAIgBAAg");
	this.shape_521.setTransform(657.3,431.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(101,156,197,0.6)").s().p("EA/gAKEIsUkPIsmjwIgBAAIgGgBIgZgEIhlgRQh3gXiwgdIgBAAIgHgBIgfgEIhMgJIg2gGIoMg8Iw8iAIgBAAIgGgBIgZgDIhngKImXgqInagxIgCAAIgGgBIgggDIiBgMIoDgxIn2gwIgCAAIgGAAIgYgDIhjgKImLgqIwwh0IgCAAIgHgBIgegDIh8gOIligoIgBAAIgFAAIgTgDIgBAAQgGgEAJgSIAMgVIACgBIGZAvQPsByJ6BCIE5AgIKmBDIIuA5QG2AoBYALIOHBoIQ6CDIHJBUINpEFIK1DwIAMAMIgGAOQgHAHgDAAIgBAAg");
	this.shape_522.setTransform(659.7,431.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(101,156,197,0.6)").s().p("EA/IAKBIsQkNIjBg8IpgizIgBAAIgGgBIgZgFIhkgRQh3gXitgdIgCAAIgHgBIgfgEIhLgJIg2gGIoJg8Iw1iAIgCAAIgGAAIgZgDIhmgKImUgqInYgxIgCAAIgGgBIgfgDIiBgNIoAgwInzgvIgCAAIgFgBIgYgCIhjgLImIgpIwrhzIgCAAIgGgBIgegDIh7gOIlggoIgBAAIgFAAIgTgCIgBAAQgGgFAJgRIAMgWIACgBIGWAvQPjBxJ6BCIE4AgIKhBBIIrA5QGtAoBfALIOBBoIQ0CDIHGBVIKNDBIDWBDIKxDuIAMANIgHANQgGAIgDAAIgBgBg");
	this.shape_523.setTransform(662.1,431.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(101,156,197,0.6)").s().p("EA+wAJ/IsMkMIi/g8IpdiyIgBAAIgGgBIgZgEQgngIg8gKQh3gYirgdIgCAAIgGgBIgggEIhLgJIg1gGIoGg8Iwvh/IgCAAIgFAAIgZgDIhlgKImSgqInVgxIgCAAIgGgBIgggDIh/gMIn+gwInwgvIgBAAIgGgBIgYgCIhigLImGgpIwkhxIgCAAIgHgBIgdgEIh7gNIldgoIgCAAIgEAAIgTgCIgBAAQgGgFAJgRIALgWIACgBIGUAvQPaBvJ7BCIE2AgQHSAsDKAVIIoA5QGlAnBkAMIN8BnIQuCCIHDBWIKJDAIDVBDIKtDtQAFAHAGAGIgHANQgGAHgEAAIAAAAg");
	this.shape_524.setTransform(664.5,431.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(101,156,197,0.6)").s().p("EA+XAJ8IsHkKIi+g8IpZixIgBAAIgGgBIgYgEQgngIg8gKQh3gZipgdIgCAAIgGgBIgfgEIhLgJIg1gGIoDg7Iwph+IgBAAIgGgBIgZgDIhkgKImQgqInSgxIgCAAIgGgBIgfgDIh/gMIn7gwIntgvIgBAAIgGAAIgYgDIhhgKImDgpQmhgrp9hFIgCAAIgHgBIgegDIh6gOIlbgnIgBAAIgEAAIgUgCIAAAAQgFgGAIgQIALgWIACgBIGSAuQPPBvJ8BCIE0AfIKYBAQEZAeEMAbQGcAmBrANIN2BmIQnCCIHABXIKGC/IDUBDIKpDrQAEAIAGAGIgHANQgGAGgDAAIgCAAg");
	this.shape_525.setTransform(666.9,432.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(101,156,197,0.6)").s().p("EA9/AJ5IsCkJIi9g8IpWivIgBAAIgGgBIgYgFIhigSQh3gZingeIgCAAIgGgBIgfgEIhKgJIg1gGIoAg6Iwih+IgCAAIgFAAIgZgDIhkgKImNgqInPgxIgCAAIgGgBIgfgDIh/gMIn4gwInqguIgBAAIgGgBIgXgCIhhgKImBgpIwYhvIgCAAIgGgBIgegDIh5gOIlZgmIgBAAIgFgBIgTgCIAAAAQgFgGAIgQIALgVIACgBIGPAuQPGBtJ9BBIEyAfQHcAtC3ATIIhA4QGUAmBxAOINyBmIQgCBIG9BYIKCC+IDSBCIKlDrQAFAIAFAFIgHAOQgGAFgDAAIgCAAg");
	this.shape_526.setTransform(669.3,432.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(101,156,197,0.6)").s().p("EA9nAJ2Ir+kHIi8g7IpRivIgBAAIgGgBIgYgFQgngIg6gKQh4gaikgeIgCAAIgGgBIgfgEIhKgIIg1gHIn8g6Iwdh9IgBAAIgGAAIgYgDIhjgKImKgqInNgxIgCAAIgHgBIgegDIh+gMIn1gvInnguIgBAAIgGgBIgXgCIhggKIl/goIwShuIgCAAIgGgBIgegDIh4gOIlXgnIgBAAIgEAAIgTgCIgBAAQgEgGAHgQIALgVIACgBIGNAtQO8BsJ+BCIEwAeQHgAtCvASIIeA5QGLAlB3AOINsBlIQbCBIG6BaIJ+C8IDRBDIKhDoQADAIAFAGIgHANQgGAFgDAAIgCAAg");
	this.shape_527.setTransform(671.6,432.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(101,156,197,0.6)").s().p("EA9PAJzIr5kGIi7g7IpOitIgBAAIgGgBIgYgFIhggTQh4gaiigfIgCAAIgGgBIgfgDIhJgJIg1gGIn5g6IwWh8IgCAAIgFAAIgYgDIhjgKImHgqInKgxIgCAAIgHgBIgfgDIh9gMInygvInkguIgBAAIgGAAIgXgDIhfgKIl9gnIwLhtIgCAAIgHgBIgdgDIh4gOIlUgmIgBAAIgFAAIgSgDIgBAAQgEgGAHgPIALgWIABgBIGLAuQOzBqJ/BBIEuAfQHkAtCmARIIaA4QGEAlB8APINoBlIQUCAIG3BbIJ6C7IDPBCIKdDoIAIAOIgHANQgGAFgEAAIgBgBg");
	this.shape_528.setTransform(674,433);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(101,156,197,0.6)").s().p("EA82AJwIr0kEIi6g7IpKisIgBAAIgGgBIgXgFIhggTQh4gbiggfIgBAAIgHgBIgfgDIhIgJIg1gGIn2g6IwQh7IgBAAIgGAAIgYgDIhigKImFgqInHgxIgCAAIgHgBIgegDIh8gMInwgvInhgtIgBAAIgFgBIgXgCIhfgKIl6gnIwFhrIgCAAIgHgBIgdgEIh3gNIlTgmIgBAAIgEgBIgTgCIAAAAQgEgGAHgPIAKgWIACgBIGJAtQOpBqJ/BBIEtAeIKFA9IIXA4QF7AlCDAPINiBkIQNCAIG0BcIJ3C6IDOBCIKZDmIAGAPIgGANQgFAEgEAAIgDgBg");
	this.shape_529.setTransform(676.4,433.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(101,156,197,0.6)").s().p("EA8eAJuIrwkDIi4g7IpHirIgBAAIgGgBIgXgFQgogJg3gKQh4gbieggIgBAAIgHgBIgegDIhJgJIg0gGInzg5IwKh7IgBAAIgFAAIgYgDIhhgKImDgqInEgxIgCAAIgHgBIgegDIh8gLIntgvInegtIgBAAIgFgBIgXgCIhegKIl4gnIv/hqIgCAAIgGgBIgdgDIh3gOIlQglIgBAAIgEgBIgTgCIAAAAQgEgGAHgPIAKgWIACgBIGGAtQOgBoKABBIErAeQHtAtCTAPIIUA5QFyAjCJARINdBjIQHB/IGxBdIJzC5IDNBCIKVDlQACAJADAGIgGANQgGADgEAAIgCAAg");
	this.shape_530.setTransform(678.8,433.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(101,156,197,0.6)").s().p("EA8GAJrIrskBIi3g7IpDiqIgBAAIgGgBIgXgFQgogKg2gKQh4gcibgfIgCAAIgHgBIgegEIhIgIIg0gHInwg4IwDh6IgCAAIgFAAIgYgDIhggKImAgqInCgxIgCAAIgHgBIgegDIh7gMInqguInagtIgCAAIgFAAIgXgDIhdgJIl1gnIv5hpIgCAAIgHgBIgdgDIh2gNIlNgmIgBAAIgEAAIgTgCIAAAAQgDgHAGgPIAKgVIABgBIGEAsQOXBnKABBIEpAdQHyAuCKAOIIRA4QFqAkCPAQINXBjIQBB/IGuBeIJvC4IDLBCIKRDjQACAJADAGIgHANQgFADgEAAIgCAAg");
	this.shape_531.setTransform(681.2,433.8);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(101,156,197,0.6)").s().p("EA7tAJoIrmj/Ii2g7IpAipIgBAAIgGgBIgXgFQgngKg2gKQh4gciZggIgCAAIgGgBIgfgEIhHgIIgzgGInug5Iv9h5IgCAAIgFAAIgXgDIhggKIl9gqIm/gxIgCAAIgHgBIgegDIh6gLInoguInXgtIgCAAIgFAAIgWgDIhdgJIlzgmIvzhoIgCAAIgGgBIgdgEIh1gNIlMglIgBAAIgEAAIgSgCQgDgHAGgPIAJgVIACgBIGCAsQOMBlKCBBIEnAdQH2AuCBANIIOA5QFhAiCVASINSBiIP7B+IGrBgIJrC2IDKBCIKNDiQABAJADAGIgHANQgFACgEAAIgDAAg");
	this.shape_532.setTransform(683.6,434);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(101,156,197,0.6)").s().p("EA7VAJlIrij+Ii1g6Io8ipIgBAAIgFgBIgXgFIhcgUQh4gdiXggIgCAAIgHgBIgegEIhHgIIgzgGInqg4Iv3h4IgCAAIgFAAIgYgDIhegLIl6gpIm+gxIgCAAIgHgBIgdgDIh6gMInlgtInUgtIgBAAIgFAAIgXgCIhcgKIlwglIvshnIgDAAIgGgBIgdgEIh1gNIlIglIgCAAIgEAAIgSgCIgBAAQgCgHAHgOIAIgWIACgBIF/AsQOEBkKCBBIElAcQH6AvB4AMIILA4QFZAiCbATINNBhIP0B+IGoBhIJnC1IDJBCIKJDgIADAQIgHAMQgEADgEAAIgEgBg");
	this.shape_533.setTransform(686,434.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(101,156,197,0.6)").s().p("EA69AJiIuRk2Io5inIgBAAIgFgBIgWgGIhcgUQh4geiVggIgCAAIgHgBIgegEIhGgIIgzgGInng4Ivxh3IgBAAIgFAAIgYgDIhegKIl4gqIm6gxIgCAAIgHgBIgdgDIh5gLInjguInQgsIgCAAIgFAAIgWgDIhbgJIluglIvnhmIgCAAIgGgBIgdgDIh0gNIlHglIgBAAIgEAAIgSgCIAAAAQgCgIAGgNIAIgWIACgBIF9AsQN5BjKEBAIEjAcQH/AvBuALIIIA4QFQAiCiATINHBhIPuB9IGlBiIJjC1IDIBBIKFDfIACAQIgHAMQgEACgDAAIgFgBg");
	this.shape_534.setTransform(688.4,434.6);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(101,156,197,0.6)").s().p("EA6lAJfIuMk1Io1imIgBAAIgFgBIgWgFIhbgVQh4geiTghIgCAAIgGgBIgegDIhGgIIgzgGInkg4Ivrh2IgBAAIgFgBIgXgCIhegLIl1gqIm3gxIgCAAIgHAAIgegDIh4gLInfguInOgsIgCAAIgEAAIgWgCIhbgJIlsglIvghlIgCAAIgHgBIgcgDIhzgNIlFgkIgBAAIgEgBIgSgCQgCgHAGgOIAIgVIABgBIF8ArQNvBiKEBAIEiAcQIDAuBlALIIFA4QFIAhCnAUINCBgIPoB8IGiBkIJfCzINHEfQAAAKACAGIgHANIgHABIgFgBg");
	this.shape_535.setTransform(690.8,434.9);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(101,156,197,0.6)").s().p("EA6MAJdIuFk0IoyilIgBAAIgFgBIgWgFIhagVQh4gfiRghIgBAAIgHgBIgegDIhFgIIgzgGInhg3Ivlh2IgBAAIgFAAIgWgDIhegLIlygpIm1gxIgCAAIgHgBIgdgDIh3gLIndgtInLgsIgBAAIgFAAIgWgCIhagJIlpgkIvbhkIgCAAIgGgBIgdgDIhygNIlCglIgCAAIgDAAIgSgCQgCgIAGgNIAHgVIACgBIF5AqQNmBhKFBAIEfAcQIIAuBcAKIICA4QE/AhCtAUIM+BgIPhB8IGfBkIJbCzINCEdIAAAQIgGAMIgHABIgGAAg");
	this.shape_536.setTransform(693.2,435.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(101,156,197,0.6)").s().p("EA50AJaIuAkyIouikIgBAAIgFgBIgWgFQgogKgxgLQh4gfiPgiIgBAAIgHgBIgegDIhFgIIgygGIneg3Iveh1IgCAAIgEAAIgXgDIhcgKIlwgqImygxIgCAAIgHgBIgdgDIh3gLInagtInIgrIgBAAIgFAAIgWgCIhZgJIlngkIvUhjIgCAAIgHgBIgcgDIhygNIlAgkIgBAAIgDAAIgSgCIgBAAQAAgIAFgNIAHgVIACgCIF2ArQNdBfKFBAIEeAcQIMAvBTAIIH+A5QE4AfCzAVIM4BgIPbB7IGcBmIJYCxIM8EcIgBAQIgGAMIgGABIgHgBg");
	this.shape_537.setTransform(695.6,435.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(101,156,197,0.6)").s().p("EA5cAJXIt6kwIorijIgBAAIgEgBIgWgFIhYgWQh5ggiMghIgCAAIgHgBIgdgEIhFgIIgygGInag2IvZh0IgBAAIgFgBIgWgCIhcgLIltgpImwgxIgCAAIgHgBIgdgDIh2gLInXgtInFgrIgBAAIgFAAIgVgCIhZgJIlkgjIvOhiIgCAAIgHgBIgcgDIhxgMIk+gkIgBAAIgEAAIgSgDQAAgIAFgMIAHgVIABgCIF1AqQNSBeKHBAIEcAbQIRAvBJAIIH7A4QEvAgC5AVIMzBfIPVB6IGZBoIJUCwIM2EaIgBAQIgHANIgEAAIgIgBg");
	this.shape_538.setTransform(698,435.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(101,156,197,0.6)").s().p("EA5CAJUIt0kuIoniiIAAAAIgFgBIgWgGIhXgWQh5ggiKgiIgCAAIgGgBIgegDIhEgIIgygGInXg2IvTh0IgBAAIgEAAIgXgDIhagKIlrgqImtgxIgCAAIgHAAIgdgDIh1gLInVgtInCgqIgBAAIgEAAIgWgDIhYgIIligjIvHhhIgCAAIgHgBIgcgDIhxgMIk7gkIgCAAIgCAAIgSgCQgBgJAFgMIAHgVIABgCIFyAqQNKBdKHBAIEaAbQIVAvBAAHIH4A4QEnAfC/AWIMuBeIPOB6IGWBoIJQCvIMyEZIgDARIgGAMIgDABQgGAAgFgCg");
	this.shape_539.setTransform(700.5,436);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(101,156,197,0.6)").s().p("EA4qAJRItuksIokihIgBAAIgEgBIgWgGIhWgWQh6ghiHgiIgCAAIgGgBIgegDIhDgIIgygGInUg2IvMhzIgCAAIgEAAIgWgCIhbgLIlngpImrgxIgCAAIgHgBIgdgDIh0gLInSgsIm/gqIgBAAIgEAAIgVgDIhYgIIlggjIvBhfIgCAAIgHgBIgcgDIhvgNIk6gjIgBAAIgDAAIgSgCQAAgJAEgMIAHgVIABgCIFwAqQNABcKIA/IEYAbQIaAvA3AGIH1A4QEeAeDFAXIMpBeIPIB5IGTBqIJMCuIMsEXIgDARIgHAMIgDAAQgFAAgFgCg");
	this.shape_540.setTransform(702.9,436.2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(101,156,197,0.6)").s().p("EA4SAJOItpkrIogifIgBAAIgEgBIgVgGIhWgXIj/hDIgBAAIgHgBIgdgEIhEgIIgxgGInRg1IvGhyIgBAAIgFAAIgWgDIhZgKIllgqImogxIgCAAIgHAAIgdgDIh0gLInPgsIm7gqIgCAAIgEAAIgVgCIhXgJIldgiIu7heIgCAAIgHgBIgcgDIhvgMIk3gkIgBAAIgDAAIgSgCIAAAAQABgJADgLIAHgVIABgCIFuApQM2BbKJA/IEWAaQIeAwAuAFIHyA4IHhA1IMjBdIPBB5IGQBrIJJCsIMmEWIgEARIgGAMQgHAAgGgCg");
	this.shape_541.setTransform(705.3,436.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(101,156,197,0.6)").s().p("EA35AJLItjkpIocifIgBAAIgFgBIgUgGIhWgWQh5giiDgjIgCAAIgHgBIgdgEIhCgHIgxgGInPg1Iu/hxIgBAAIgFAAIgWgDIhZgKIligqImlgxIgCAAIgHgBIgdgDIhzgKInNgsIm4gqIgBAAIgEAAIgVgCIhXgIIlagiIu1hdIgCAAIgHgBIgcgDIhugMIk1gjIgBAAIgDAAIgSgCQABgKAEgLIAGgVIABgCIFsAqQMsBZKKA+IEUAaIJHA0IHvA4IHfA2IMdBcIO8B5IGNBsIJECrIMiEUIgFASIgHAMQgHgBgGgCg");
	this.shape_542.setTransform(707.7,436.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(101,156,197,0.6)").s().p("EA3gAJIItdkoIoZidIAAAAIgFgBIgVgGIhUgXIj6hGIgBAAIgHgBIgdgDIhDgIIgwgFInMg1Iu6hxIAAAAIgFAAIgVgCIhZgLIlfgpImjgxIgCAAIgHgBIgdgDIhygLInJgrIm2gpIgBAAIgEAAIgVgCIhWgJIlYghIuvhcIgCAAIgHgBIgbgDIhugMIkzgjIgBAAIgCAAIgSgCIAEgUIAGgVIABgCIFqApQMiBXKLA/IETAaQInAwAbADIHrA4IHcA2IMZBcIO2B3IGKBuIJACqIMcETIgGARQgFAMgBAAIgOgDg");
	this.shape_543.setTransform(710.2,437.1);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(101,156,197,0.6)").s().p("EA3VAJIIgOgDItXkmIoVidIgBAAIgEgBIgUgFIhUgYIj4hGIgCAAIgHgBIgcgEIhCgHIgwgGInJg0IuzhwIgBAAIgFAAIgVgDIhYgKIldgqImggxIgCAAIgHAAIgcgDIhygLInHgrImygpIgBAAIgEAAIgVgCIhVgIIlWghIuphbIgCAAIgGgBIgcgDIhtgMIkwgjIgBAAIgDAAIgRgCIAEgUIAGgVIABgCIFnApQMZBWKMA/IEQAZQIrAwATADIHoA4IHaA2IMTBbIOvB3IGHBuII9CqIMWERIgGASIgHAMIAAgBg");
	this.shape_544.setTransform(712.6,437.4);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(101,156,197,0.6)").s().p("EA28AJGIgNgFItSkjIoRicIgBAAIgEgBIgUgGIhTgYIj2hHIgCAAIgHgBIgdgDIhBgIIgwgFInFg0IuuhvIgBAAIgDAAIgVgDIhXgKIlbgqImegxIgCAAIgHAAIgcgDIhxgLInEgrImvgpIgBAAIgEAAIgUgCIhWgIIlTggIuihaIgCAAIgHgBIgbgDIhtgMIkugiIgBAAIgCAAIgSgCIAFgUIAFgVIABgCIFlAoQMQBVKMA/IEPAZII5AyIHlA4IHXA1IMOBbIOoB3IO+EXIMREQIgIASQgFAMgBAAIgBAAg");
	this.shape_545.setTransform(715,437.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(101,156,197,0.6)").s().p("EA2kAJDItZknIttkBIgCAAIgHgBIgcgEIhxgNInCgzI8KjWIgCAAIgHgBIgcgDIhxgKInBgrI8HirIgCAAIgHgBIgbgDIhrgMIlBgkIALgrIFiAoQOpBmL3BFII0AxIbADIIOiB3IO2EXIMMEOQgOAfgBAAIAAgBg");
	this.shape_546.setTransform(717.4,438);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(101,156,197,0.6)").s().p("EA2MAJBItUklItnkAIgBAAIgHgBIgcgEIhwgNIm/g1Ig3gGIgCAAIgHgBIgkgEIiVgSIpchIIuphvIgCAAIgHgBIgcgDIhvgKIm+grIuThXIgCAAIgHgBIgkgDIiVgOIpVg5IhRgIIgCAAIgHgBIgbgDIhqgMIk/gjIALgrIAGABIFaAmQFaAmFAAhQIfA4HbArIIxAxIa0DHIOcB3IOvEXILuEDIAYAJIgJAUIgGAKIAAAAg");
	this.shape_547.setTransform(719.8,438.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(101,156,197,0.6)").s().p("EA10AI+ItOkjIthj+IgBAAIgHgBIgcgEIhvgOIm7g1Ig3gHIgCAAIgHgBIgkgEIiUgRIpYhIIuihvIgCAAIgHAAIgbgDIhwgKIm7grIuMhXIgCAAIgHgBIgjgDIiUgOIpRg4IhRgIIgCAAIgHgBIgbgDIhqgMIk8gjIALgrIAGABIFXAmIKWBGQIbA4HYArIIuAxIapDGIOUB4IOpEVILpECIAXAJIgJAUIgGAKIAAgBg");
	this.shape_548.setTransform(722.2,438.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(101,156,197,0.6)").s().p("EA1cAI8ItIkhItbj+IgCAAIgHgBIgbgDIhugOQiWgSkigkIg2gHIgCAAIgHgBIgkgEIiTgSIpUhHIuchuIgBAAIgHAAIgbgDIhvgKIm3grIuHhXIgCAAIgHgBIgjgDIiUgOIpMg4IhQgHIgCAAIgHgBIgbgDIhpgMIk6gjIALgqIAFABIFWAlQFYAlE4AgQIYA4HWArIIpAxIaeDFIOOB6IOhETILkD/IAXAKIgJAUIgGAJIAAAAg");
	this.shape_549.setTransform(724.6,438.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(101,156,197,0.6)").s().p("EA1EAI5ItCkfItVj8IgCAAIgGgBIgcgDIhtgOQiWgTkeglIg2gHIgCAAIgHgBIgjgEIiTgRIpQhHIuVhtIgCAAIgHAAIgbgDIhtgLIm0gqIuBhWIgCAAIgHgBIgjgDIiSgPIpJg3IhPgIIgCAAIgHgBIgagDIhogLIk5gjIALgpIAGAAIFTAmIKMBEQISA3HTArQIRAuAXAEIaRDDIOHB7IOcERILeD+IAWAKIgJATQgFAJgBAAIAAAAg");
	this.shape_550.setTransform(727,439);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("rgba(101,156,197,0.6)").s().p("EA0sAI2Is8kdItQj6IgBAAIgGgBIgcgEIhrgOQiYgTkaglIg1gHIgCAAIgHgBIgjgEIiSgSIpMhGIuOhsIgDAAIgGAAIgagDIhtgLImxgqIt6hWIgDAAIgGgBIgjgDIiSgOIpFg3IhPgIIgBAAIgHgBIgZgDIhpgLIk1giIgBAAIAMgqIAFABIFQAlIKIBDQINA3HSArQIHAuAdAEId+DiIKHBcIOWEQILZD8IAVAKIgJATQgFAJgBAAIAAgBg");
	this.shape_551.setTransform(729.4,439.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(101,156,197,0.6)").s().p("EA0UAI0Is3kbItJj5IgBAAIgHgBIgbgEIhrgOQiXgUkWglIg1gIIgCAAIgHgBIgjgEIiRgRIpHhGIuJhrIgCAAIgGAAIgbgDIhsgLImugqIt0hWIgBAAIgIgBIgigDIiRgOIpBg3IhOgHIgCAAIgGgBIgZgDIhogLIkzgiIgBAAIALgpIAGAAIFOAlIKCBCQIKA3HPArQH+AtAiAFIZ6DBID3AgIKCBdIOQEOILUD7IAUAKIgJATQgFAIgBAAIAAAAg");
	this.shape_552.setTransform(731.8,439.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("rgba(101,156,197,0.6)").s().p("EAz8AIxIsxkZItDj3IgCAAIgGgBIgbgEIhqgPQiXgVkTglIg0gHIgCAAIgHgBIgjgEIiPgRIpEhFIuChrIgCAAIgHgBIgagCIhrgLImrgqItthWIgCAAIgHgBIgjgDIiPgOIo+g2IhNgHIgBAAIgHgBIgZgDIhngLIkxgiIgBAAIAMgpIAFAAIFLAlIJ+BBQIGA3HMArQH2AtAnAFIdkDfIJ9BfIOIENILQD4IATALIgJATQgFAIgBAAIAAgBg");
	this.shape_553.setTransform(734.1,439.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(101,156,197,0.6)").s().p("EAzjAIvIsrkXIs9j2IgBAAIgGgBIgbgEIhpgPQiXgWkPglIg0gIIgCAAIgHgBIgjgEIiOgRIpAhEIt8hqIgCAAIgGgBIgagCIhqgLImogqItnhWIgCAAIgHgBIgigDIiPgNIo6g2IhMgIIgCAAIgGAAIgZgDIhmgLIkvgiIgBAAIAMgoIAFAAIFJAkIJ5BBQIBA2HKArQHtAsAtAGIdWDeIJ4BgIOCELILKD3IATALIgJASQgFAIgCAAIAAAAg");
	this.shape_554.setTransform(736.5,440);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("rgba(101,156,197,0.6)").s().p("EAzLAIsIslkVIs3j0IgBAAIgGgBIgbgEIhogPQiYgXkLgmIgzgHIgCAAIgHgBIgjgEIiNgRIo8hEIt2hpIgBAAIgHgBIgZgDIhqgKImkgqIthhWIgCAAIgHAAIgigDIiOgOIo2g2IhLgHIgCAAIgGgBIgZgCIhlgLIktghIgBAAIAMgoIAFgBIFGAkQFTAjEiAdQH9A2HHArQHkAsAzAGIdIDdIJ0BhIN7EKILFD1IASAKIgJATQgFAIgCAAIAAgBg");
	this.shape_555.setTransform(738.9,440.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(101,156,197,0.6)").s().p("EAyzAIqIsfkTIsxjzIgCAAIgFgBIgagEQgngGhBgJQiYgXkHgmIg0gIIgCAAIgHgBIghgEIiNgRIo3hEItwhoIgCAAIgGAAIgagDIhogLImhgpItbhWIgCAAIgHgBIgigDIiNgNIoyg1IhKgIIgCAAIgGAAIgZgDIhkgLIkrghIALgnIAFgBIFEAjIJwBAQH5A1HDAsQHcAqA4AHIc8DcIJuBjIN1EIILADzIARALIgJASQgFAHgCAAIAAAAg");
	this.shape_556.setTransform(741.3,440.5);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("rgba(101,156,197,0.6)").s().p("EAybAInIsZkRIsrjxIgCAAIgFgBIgagEIhngQQiYgYkEgmIgzgIIgCAAIgHgBIgigEIiLgQIo0hDItphoIgBAAIgGgBIgagCIhngLImegpItWhWIgBAAIgIAAIghgDIiLgOIoug1IhKgHIgCAAIgGgBIgZgCIhjgLIkqggIAMgoIAFAAIFCAiQFQAjEaAcQH1A1HCAsQHSAqA/AHIctDbIJqBkINtEGIK8DyIAQALIgJASQgFAGgCAAIAAAAg");
	this.shape_557.setTransform(743.7,440.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(101,156,197,0.6)").s().p("EAyDAIlIsUkPIsljwIgBAAIgGgBIgZgEIhmgQQiYgZkAgmIgzgIIgBAAIgHgBIgigEIiLgRIovhCItjhnIgCAAIgFgBIgagCIhmgLImbgpQlWgjn5gyIgCAAIgHgBIghgDIiLgOIoqg0IhJgHIgCAAIgGgBIgYgDIhjgKIknggIALgnIAFgBIE/AjIJnA+QHvA0HAAsQHKApBDAJIchDZIJkBlINoEFIK1DwIAPALIgIASQgFAGgCAAIAAAAg");
	this.shape_558.setTransform(746.1,441);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("rgba(101,156,197,0.6)").s().p("EAxrAIiIsOkNIsfjuIgBAAIgGgBIgZgEQgmgHg/gKQiYgZj9gnIgygIIgCAAIgHgBIghgEIiKgQIorhCItdhmIgBAAIgGgBIgZgCIhmgLImXgpQlVgjn0gyIgCAAIgHgBIghgDIiKgNIomg0IhJgHIgBAAIgGgBIgYgDIhigKIklggIALgnIAFAAIE9AiIJhA9QHsA0G9AsQHBApBJAJIcTDXIJfBnINhEDIKxDuIAOAMIgIASQgFAFgCAAIAAAAg");
	this.shape_559.setTransform(748.5,441.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(101,156,197,0.6)").s().p("EAxTAIgIsJkLIsYjtIgCAAIgFgBIgZgEIhkgRQiZgaj4gnIgygIIgCAAIgHgBIghgEIiJgQIonhCItWhmIgCAAIgFAAIgZgDIhlgKImUgpItDhVIgCAAIgHgBIghgDIiJgNIoig0IhIgHIgCAAIgFAAIgYgDIhhgKIkjgfIALgnIAFgBIE6AiIJdA8QHnA0G7AsQG4AoBPAKIcFDWIJaBoIJFCrIEWBXIKsDsIANALIgIASQgFAGgCAAIAAAAg");
	this.shape_560.setTransform(750.9,441.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("rgba(101,156,197,0.6)").s().p("EAw7AIdIsDkJIkMhTIoGiYIgCAAIgFgBIgZgFIhjgQQiYgbj1gnIgygJIgBAAIgHgBIgigEIiHgQIokhBItPhlIgCAAIgFAAIgZgDIhkgKImRgpIs9hVIgCAAIgHgBIgggDIiIgNIofgzIhHgHIgBAAIgGgBIgYgCIhggKIkhgfIAAAAIAMgmIAEgBIE4AhIJYA8QHjAzG4AsQGwAoBUAKIb4DVIJVBpIJACqIEUBWIKnDrIAMALIgIASQgFAFgCAAIAAAAg");
	this.shape_561.setTransform(753.2,441.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(101,156,197,0.6)").s().p("EAwjAIbIr9kHIkKhTIoDiXIgBAAIgFgBIgZgFQgmgHg8gKQiZgbjxgoIgxgIIgCAAIgHgBIghgEIiGgQIoghBItJhkIgBAAIgGAAIgYgDIhkgKImNgpIs3hVIgCAAIgHAAIgggDIiHgNIobgzIhGgHIgCAAIgFgBIgYgCIhfgKIkfgfIAAAAIAMgmIAEgBIE1AhIJUA7QHfAzG1AsQGnAnBaALIbqDTIJQBsII8CoIESBWIKiDoIALAMIgIASQgFAFgCAAIAAAAg");
	this.shape_562.setTransform(755.6,442);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("rgba(101,156,197,0.6)").s().p("EAwLAIYIr3kFIkIhSIn/iWIgCAAIgEgBIgZgFIhhgRQiZgcjtgoIgxgJIgCAAIgHgBIgggEIiGgQIochAItChjIgCAAIgFAAIgYgDIhjgKImKgpIsxhUIgBAAIgIgBIgfgDIiGgNIoYgzIhFgGIgCAAIgFgBIgYgDIhegJIkdgfIAAAAIAMglIAEgBIEzAgIJPA6QHaAzGzAsQGeAmBfAMIKABKIReCIIJLBtII3CnIEQBVIKcDnIALAMIgIASQgEAEgDAAIAAAAg");
	this.shape_563.setTransform(758,442.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(101,156,197,0.6)").s().p("EAvzAIVIrykDIkGhSIn6iVIgBAAIgGgBIgYgEIhggSQiZgcjqgoIgwgJIgCAAIgHgBIgggEIiFgQIoYhAIs8hiIgCAAIgFAAIgXgDIhigKImHgpIsrhUIgCAAIgHgBIgfgDIiGgNIoTgyIhFgHIgBAAIgFAAIgYgDIhdgJIkbgeIAAAAIAMgmIAEgBIExAgQFJAhEBAZQHWAyGwAsQGVAmBmAMIJ6BJIRUCIIJHBuIIzCmIEOBVIKXDlQAFAHAFAFIgIARQgFAFgCAAIAAgBg");
	this.shape_564.setTransform(760.4,442.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("rgba(101,156,197,0.6)").s().p("EAvaAITIrrkBIkEhSIn3iUIgBAAIgFgBIgYgEQgmgIg5gKQiagdjmgpIgvgJIgCAAIgHgBIgggEIiEgPIoThAIs3hhIgBAAIgFAAIgYgDIhhgKImEgpIsjhUIgCAAIgHgBIghgDIiDgMIoQgyIhEgHIgBAAIgFAAIgYgDIhcgJIkYgeIgBAAIAMglIAEgBIEuAfIJGA5QHRAyGuAsQGMAlBrANIJ2BJIRMCHIJCBvIIuClIELBUIKSDkIAKAMIgIARQgFAEgCAAIgBAAg");
	this.shape_565.setTransform(762.8,442.7);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(101,156,197,0.6)").s().p("EAvCAIRIrlj/IkChSInziSIgBAAIgFgBIgYgFQgmgIg4gKQiZgejjgpIgvgJIgCAAIgHgBIgggEIiDgPIoPg/IswhhIgBAAIgFAAIgYgDIhggKImAgoQlOgknQgwIgCAAIgHgBIgggDIiDgNIoLgxIhEgHIgBAAIgFAAIgXgDIhcgJIkWgdIgBAAIAMglIAEgCIEsAgIJBA4QHNAyGrAsQGEAkBwAOIJxBIIRDCGII9BxIIqCjIEKBUIKNDiQADAHAFAFIgIARQgEAEgDAAIgBAAg");
	this.shape_566.setTransform(765.2,442.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("rgba(101,156,197,0.6)").s().p("EAuqAIOIrgj9Ij/hRInviRIgCAAIgEgBIgYgFQgmgIg3gKQiagfjfgpIgugKIgCAAIgHgBIgggDIiCgQIoLg+IsphgIgCAAIgFAAIgXgDIhfgKIl+goQlMgknLgwIgCAAIgHgBIgggDIiCgMIoHgxIhDgHIgBAAIgFAAIgXgDIhcgJIkTgdIgBAAIAMgkIAEgCIEpAfII8A3QHJAyGpAsQF7AkB2AOIJsBHIQ7CGII3ByIImCiIEHBUIKIDgIAIAMIgIARQgEADgDAAIgBAAg");
	this.shape_567.setTransform(767.6,443.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(101,156,197,0.6)").s().p("EAuSAIMIraj7Ij+hRInriRIgBAAIgFgBIgXgEQgmgJg2gKQiagfjbgpIgugKIgCAAIgHgBIgggEIiBgPIoHg+IsjhfIgBAAIgFAAIgXgDIhfgKIl6goIsRhUIgCAAIgHgBIgggDIiBgMIoDgxIhCgGIgCAAIgEgBIgXgCIhbgJIkRgdIgBAAIAMgkIAEgCIEnAfII3A2QHFAyGmAsQFyAjB8APIJnBHIQyCEIIyB0IIiChIEFBTIKDDeQADAIAEAFIgJARQgEADgCAAIgBAAg");
	this.shape_568.setTransform(770,443.4);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("rgba(101,156,197,0.6)").s().p("EAt5AIJIrTj5Ij7hQInoiQIgBAAIgFgBIgXgEIhbgTQiaggjYgqIgugKIgBAAIgHgBIgfgDIiBgPIoDg+IsdheIgBAAIgEAAIgXgDIhegKIl3goIsLhUIgCAAIgHgBIgfgDIiAgMIoAgwIhBgGIgBAAIgGgBIgVgCIhagJIkQgdIgBAAIAMgjIAEgCIElAeQFEAgDuAWQHBAxGjAsQFpAiCBAQIJjBGIQqCEIItB1IIdCfIEDBUIJ9DcQADAIAEAFIgJARQgDACgDAAIgCAAg");
	this.shape_569.setTransform(772.4,443.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(101,156,197,0.6)").s().p("EAthAIGIrOj3Ij5hQInjiOIgBAAIgFgBIgWgEIhbgUQibghjUgpIgtgKIgBAAIgIgBIgegEIiAgPIn/g8IsWheIgCAAIgEgBIgXgCIhdgKIlzgoIsFhUIgCAAIgHAAIgfgDIh/gMIn7gwIhBgHIgCAAIgFAAIgVgCIhagJIkNgcIAAAAIALgkIADgCIEjAeQFEAfDqAWQG8AxGhAsQFgAiCHAQIJeBGIQgCDIIpB2IIZCeIEBBTIJ4DbIAGANIgJAQQgDADgDAAIgCgBg");
	this.shape_570.setTransform(774.8,443.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("rgba(101,156,197,0.6)").s().p("EAtJAIEIrIj1Ij2hQIngiNIgBAAIgFgBIgWgFIhagTQiagijRgqIgtgKIgBAAIgHgBIgfgDIh+gPIn7g8IsQhdIgCAAIgEgBIgWgCIhcgKIlxgoIr+hTIgCAAIgHgBIgggDIh+gMIn3gwIhAgGIgCAAIgEAAIgWgDIhZgIIkKgcIgBAAIAMgjIADgCIEfAdQFDAfDnAVQG4AxGfAsQFWAhCNARIJZBFIQZCDIIjB3IIVCdID+BTIJ0DZIADANIgIAQQgDACgCAAIgDAAg");
	this.shape_571.setTransform(777.1,444.2);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(101,156,197,0.6)").s().p("EAsxAIBIrCjzIj1hPInciMIgBAAIgEgBIgWgFIhZgTQibgjjMgqIgtgKIgBAAIgHgBIgfgEIh9gOIn4g8IsJhdIgBAAIgEAAIgXgCIhbgKIlsgoIr6hTIgBAAIgIgBIgegDIh9gMIn0gvIhAgGIgBAAIgEAAIgWgDIhYgIIkJgcIAAAAIALgiIAEgDIEdAdQFCAfDjAVINPBcQFPAhCSARIJUBFIQQCBIIeB5IIRCcID8BSIJuDXIADAOIgIAQIgGACIgCgBg");
	this.shape_572.setTransform(779.5,444.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("rgba(101,156,197,0.6)").s().p("EAsZAH/Iq8jxIjzhPInYiLIgBAAIgEgBIgXgFQgmgJgygLQiagjjJgqIgsgLIgBAAIgIgBIgegDIh8gPIn0g7IsChcIgCAAIgEAAIgVgCIhcgKIlpgoIrzhTIgCAAIgHgBIgegDIh8gLInwgvIg/gGIgBAAIgEgBIgWgCIhXgIIkHgbIgBAAIANgjIADgCIEaAcQFBAfDgAUQGvAwGZAsQFGAgCYASIJPBEIQHCBIIZB6IINCbID5BSIJqDVQABAIABAGIgIAQIgFABIgDAAg");
	this.shape_573.setTransform(781.9,444.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(101,156,197,0.6)").s().p("EAsBAH8Iq3jvIjwhPInUiJIgBAAIgFgBIgVgFIhXgUQibgkjFgrIgsgKIgBAAIgHgBIgfgEIh7gOInvg7Ir9hbIgBAAIgEAAIgWgCIhZgKIlngoIrshTIgCAAIgHgBIgfgDIh7gLInsgvIg+gGIgBAAIgEAAIgVgCIhXgJIkEgaIgBAAIAMgiIADgDIEYAcQFAAfDcATINCBcQE8AgCeASIJKBEIP+CAIIVB7IIICaID4BRIJkDUQAAAIABAGIgIAPIgFACIgDgBg");
	this.shape_574.setTransform(784.3,444.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("rgba(101,156,197,0.6)").s().p("EArpAH6Iugk8InQiIIgBAAIgEgBIgVgFIhWgVQibgkjCgrIgrgLIgBAAIgHgBIgfgDIh6gPInrg6Ir2haIgBAAIgFAAIgVgCIhZgKIljgoIrmhTIgCAAIgHAAIgegDIh7gMInoguIg9gGIgBAAIgEAAIgVgCIhWgJIkCgaIgBAAIAMgiIADgCIEWAbQE/AfDXATIM8BbQEzAfCkATIJFBDIP1B/IIQB+IIECXINUEjIABAPIgIAPIgFABIgDAAg");
	this.shape_575.setTransform(786.7,445.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(101,156,197,0.6)").s().p("EArRAH3IuXk5InNiHIgBAAIgEgBIgVgFIhVgVQibgli+grIgrgLIgBAAIgIgBIgdgEIh6gOInng6IrvhZIgCAAIgEAAIgVgCIhYgLIlggnQlCglmegtIgCAAIgHgBIgegDIh6gMInkgtIg8gGIgCAAIgDAAIgVgDIhVgIIkAgaIgBAAIAMghIADgDIETAbQE/AeDUATIMzBbQErAeCpAUIJBBCIPtB/IILB/IH/CWINNEhIAAAPIgHAPIgFABIgEgBg");
	this.shape_576.setTransform(789.1,445.4);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("rgba(101,156,197,0.6)").s().p("EAq4AH0IuQk2InIiGIgBAAIgDgBIgVgGIhVgUQibgmi6gsIgqgLIgCAAIgHgBIgegDIh4gOInjg6IrqhYIgBAAIgDAAIgWgDIhXgKIlcgnIrbhSIgCAAIgHgBIgegDIh4gLIngguIg8gFIgBAAIgEgBIgVgCIhTgIIj/gZIAAAAIAMghIACgDIESAaQE8AeDRASIMtBbQEiAeCvAUII7BCIPkB+IIHCAIH6CVINGEfIgBAOQgGAPgCABIgDAAIgFgBg");
	this.shape_577.setTransform(791.5,445.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(101,156,197,0.6)").s().p("EAqgAHyIuIk1InEiFIgBAAIgEgBIgVgFIhTgVQicgmi2gsIgqgLIgBAAIgHgBIgegEIh4gOIneg5IrkhXIgBAAIgDAAIgVgDIhXgKIlZgnIrUhSIgCAAIgHgBIgdgDIh4gLIncgtIg7gGIgCAAIgDAAIgVgCIhTgIIj8gZIgBAAIAMghIADgDIEPAaQE8AeDMASIMnBaQEZAdC0AVII3BBIPcB+IIACBIH3CUIM/EdIgCAOIgIAPIgDABIgFgBg");
	this.shape_578.setTransform(793.9,445.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("rgba(101,156,197,0.6)").s().p("EAqIAHvIuBkyInAiEIgBAAIgEgBIgUgFIhSgVQicgoizgsIgpgLIgCAAIgHgBIgdgDIh3gOInag4IrehXIAAAAIgEgBIgVgCIhVgKIlWgnIrOhSIgCAAIgHAAIgdgDIh3gMInZgsIg6gGIgBAAIgDAAIgVgCIhSgIIj6gZIgBAAIAMggIACgEIENAaQE7AeDIARIMgBaQERAdC5AVIIyBBIPUB8IH7CDIHyCTIM4EaIgCAPIgIAPIgCABIgGgCg");
	this.shape_579.setTransform(796.4,446.2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(101,156,197,0.6)").s().p("EApuAHtIt3kwIm9iDIgBAAIgDgBIgUgFIhTgWQibgoivgsIgpgLIgBAAIgIgBIgdgEIh1gNInXg4IrWhXIgBAAIgEAAIgUgCIhWgKIlSgnIrIhSIgCAAIgHAAIgdgDIh1gLInVgtIg5gFIgCAAIgEAAIgUgCIhRgIIj4gZIAAAAIAMggIACgDIEKAZQE5AeDGAQIMZBaIHHAyIIsBAIPLB8IH3CEIHuCSIMxEYIgEAPIgIAPIgCAAIgHgBg");
	this.shape_580.setTransform(798.8,446.4);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("rgba(101,156,197,0.6)").s().p("EApWAHqItwktIm4iCIgCAAIgDgBIgUgFIhQgWQidgpiqgsIgpgMIgCAAIgHgBIgdgDIh0gOInTg3IrQhWIgBAAIgEAAIgUgCIhUgKIlQgnIrBhSIgCAAIgHAAIgcgDIh1gLInRgsIg5gFIgBAAIgEAAIgUgCIhRgIIj1gYIgBAAIAMggIADgEIEHAZQE5AdDBAQIMTBaIHEAyIInBAIPCB7IHyCFIHqCQIMpEXIgEAPIgIAPIgJgCg");
	this.shape_581.setTransform(801.2,446.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(101,156,197,0.6)").s().p("EAo+AHnItokrIm1iAIgBAAIgDgBIgUgFIhQgXIlDhWIgpgLIgBAAIgHgBIgdgEIh0gNInOg3IrKhVIgBAAIgDAAIgUgCIhTgKIlNgnIq7hRIgCAAIgHgBIgdgDIhzgLInNgrIg4gGIgCAAIgDAAIgTgCIhRgHIjzgYIgBAAIAMggIADgDIEEAZQE4AcC+AQIMLBZQD2AbDLAYIIjA+IO6B7IHsCGIHlCPIMiEVIgFAPIgHAOIgJgCg");
	this.shape_582.setTransform(803.6,446.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("rgba(101,156,197,0.6)").s().p("EAomAHlIthkpImwh/IgBAAIgEgBIgTgGIhPgWQidgqijgtIgogMIgCAAIgHgBIgdgDIhygOInLg2IrDhUIgBAAIgDAAIgUgCIhSgKIlJgnIq2hSIgCAAIgHAAIgcgDIhzgKInIgsIg4gFIgBAAIgDAAIgTgCIhQgIIjygXIgBAAIANgfIACgEIECAYQE3AdC7APIMEBYIG+A0IIdA+IOxB5IPJEWIMaESIgFAPIgHAPIgJgCg");
	this.shape_583.setTransform(806.1,447.2);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(101,156,197,0.6)").s().p("EAoVAHkIgJgCItYknImth+IgBAAIgDgBIgTgFIhOgXIk8hYIgogMIgCAAIgGgBIgdgDIhxgNInHg2Iq9hUIgBAAIgDAAIgTgCIhSgKIlGgmIqvhRIgCAAIgHgBIgcgDIhygLInFgqIg2gGIgBAAIgEAAIgTgCIhPgHIjvgXIgBAAIAMgfIACgEIEBAYQE2AcC2APIL+BYIG6AzIIYA+IOqB5IO+EVIMUERIgHAPIgHAPIgBgBg");
	this.shape_584.setTransform(808.5,447.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("rgba(101,156,197,0.6)").s().p("EAn9AHiItZknIttj/IgCAAIgHgBIgcgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhxgKInBgrImJglIAOgiQHvAuD2ATIbCDIIOgB4IO2EWIMMEOQgOAegBAAIAAAAg");
	this.shape_585.setTransform(810.9,447.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(101,156,197,0.6)").s().p("EAnmAHgItSklItlj9IgCAAIgGgBIgdgEIhwgNIm9g2IligrIgDAAIgHgBIgogFIimgUIqehPIoihBIgCAAIgHgBIgcgDIhvgKIm+grImFgkIAOgjIAXACQHXAtDwASIaPDDIO8B9IOuEUILoECIAcAKIgKAVIgFAJIAAAAg");
	this.shape_586.setTransform(813.3,448);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("rgba(101,156,197,0.6)").s().p("EAnPAHdItLkiItdj8IgBAAIgHgBIgcgDIhugOIm6g3IlegrIgDAAIgHgBIgogFIikgUIqZhPIodhAIgCAAIgGAAIgcgDIhugLIm5gqImDgkIAPgiIAWABQHRAsDxATIZ/DBIOzB/IOlESILjD/IAaALIgKAVQgEAIgBAAIAAAAg");
	this.shape_587.setTransform(815.5,448.3);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(101,156,197,0.6)").s().p("EAm4AHaItDkfItWj6IgBAAIgHgBIgcgEIhtgNIm1g4IlagsIgEAAIgGgBIgogEIijgUIqShOIoZhAIgCAAIgHAAIgbgDIhtgLIm0gqImAgkIAPgiIAVABQHLAsDxATIZxDAIOpCAIOdEQILcD9IAZALIgKAUIgEAJIAAgBg");
	this.shape_588.setTransform(817.9,448.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("rgba(101,156,197,0.6)").s().p("EAmhAHYIs8kdItOj4IgBAAIgHgBIgbgEIhsgNQiVgVkcgkIlXgsIgDAAIgHgBIgngFIiigTIqNhOIoTg/IgCAAIgGAAIgagDIhtgLImxgpIl7glIAOghIAVAAQHFAsDxATIZhC+IOhCCIOUEOILWD7IAYAKIgKAVIgEAIIAAAAg");
	this.shape_589.setTransform(820.2,448.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(101,156,197,0.6)").s().p("EAmJAHVIs0kaItGj2IgBAAIgHgBIgbgEIhrgOQiUgVkYgkIlUgtIgDAAIgHgBIgngFIiggTIqHhNIoNg+IgCAAIgHgBIgagCIhsgLImsgpIl4gkIAOghIAVAAQG/ArDwATIZTC9IOXCDIOMEMILPD5IAYAKIgKAVQgEAHgBAAIAAAAg");
	this.shape_590.setTransform(822.5,449);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("rgba(101,156,197,0.6)").s().p("EAlyAHSIstkXIs+j0IgBAAIgGgBIgbgEIhqgOQiUgVkUglIlQgtIgDAAIgHgBIgngFIiegTIqChMIoIg+IgCAAIgGgBIgbgCIhqgLImogpIl1gkIAOghIAVAAQG5AqDwAUIZEC8IOOCFIOEEJILID2IAXALIgKAVQgEAHgBAAIAAgBg");
	this.shape_591.setTransform(824.8,449.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(101,156,197,0.6)").s().p("EAlaAHQIskkUIs2jzIgCAAIgGgBIgbgDIhogPQiUgWkQgkIlNguIgCAAIgHgBIgngFIidgTIp7hMIoEg9IgCAAIgGAAIgagDIhpgKImkgpIlxgkIANggIAUgBQGzAqDxAUIY0C6IOGCGIN7EIILCD0IAVALIgJAUQgEAGgCAAIAAAAg");
	this.shape_592.setTransform(827.1,449.5);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("rgba(101,156,197,0.6)").s().p("EAlDAHOIsdkSIsvjxIgBAAIgGgBIgbgDQgkgGhDgJQiUgXkLgkIlJgvIgDAAIgHgBIgmgFIicgSIp2hLIn9g9IgDAAIgFAAIgagDIhpgKImggpIltgkIAOggIATgBQGsAqDxAUIYmC5IN9CHINyEGIK7DxIAVAMIgJATQgFAHgBAAIAAAAg");
	this.shape_593.setTransform(829.4,449.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(101,156,197,0.6)").s().p("EAksAHLIsWkPIsmjvIgCAAIgGgBIgagEIhmgOQiTgXkIglIlFgwIgEAAIgHgBIglgEIibgTIpvhKIn5g8IgCAAIgGAAIgagDIhngKImbgpIlrgjIAOggIATgCQGmApDxAVIYWC3IN0CKINrEDIK0DvIAUAMIgJATQgFAHgBAAIAAgBg");
	this.shape_594.setTransform(831.7,450);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("rgba(101,156,197,0.6)").s().p("EAkVAHJIsPkNIsejtIgCAAIgFgBIgagEIhmgOQiTgYkDglIlCgwIgCAAIgIgBIglgFIiZgSIprhKInzg7IgCAAIgGAAIgZgDIhmgKImYgoIlmgkIANgfIASgCQGhAoDwAVIYJC2INqCLINhEBIKuDtIAUALIgKAUQgEAGgBAAIAAAAg");
	this.shape_595.setTransform(834,450.2);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(101,156,197,0.6)").s().p("EAj9AHHIsGkLIsXjqIgCAAIgGgBIgZgEIhkgPQiTgZj/glIk/gwIgCAAIgHgBIglgFIiYgSIpkhJInvg6IgCAAIgGgBIgZgDIhlgKImTgoIljgjIANgfIASgDQGbApDwAVIX5C0INhCMIHNCGIGNB5IKnDrIASAMIgJATQgEAGgCAAIAAAAg");
	this.shape_596.setTransform(836.3,450.4);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("rgba(101,156,197,0.6)").s().p("EAjmAHEIr/kIIsPjoIgBAAIgGgBIgZgEQglgHg+gIQiTgaj7glIk7gxIgDAAIgHgBIglgFIiWgRIpehJInqg6IgCAAIgFAAIgZgDIhkgKImPgnIlggkIANgeIASgDQGUAoDxAVIXqCzINYCNIHJCFIGIB4IKhDpIARAMIgJATQgEAFgCAAIAAAAg");
	this.shape_597.setTransform(838.6,450.7);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(101,156,197,0.6)").s().p("EAjPAHCIr4kGIsHjmIgBAAIgGgBIgZgEIhigQQiSgZj3gmIk4gyIgCAAIgHgBIglgEIiUgSIpZhHInlg6IgBAAIgGAAIgYgDIhjgKImLgnIldgjIANgfIASgDQGOAnDwAWIXcCyINPCPIHECDIGEB3IKbDnIAQAMIgJATQgEAFgCAAIAAAAg");
	this.shape_598.setTransform(840.9,450.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("rgba(101,156,197,0.6)").s().p("EAi3AG/IrvkDImDh3Il9htIgCAAIgFgBIgYgFIhhgPQiSgajzgmIk0gyIgDAAIgGgBIglgFIiUgRIpThHIneg5IgCAAIgGAAIgYgDIhigKImHgnIlYgjIAMgeIARgEQGJAnDvAWIXNCwINHCRIG/CBIGAB3IKUDkIAPANIgJASQgEAGgBAAIgBgBg");
	this.shape_599.setTransform(843.3,451.2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(101,156,197,0.6)").s().p("EAigAG9IrokAIl/h2Il5htIgBAAIgFgBIgYgEIhhgQQiSgbjuglIkxgzIgCAAIgHgBIgkgFIiSgRIpNhGInbg4IgBAAIgGgBIgXgCIhhgKImCgnIlWgjIAMgeIARgEQGCAnDxAWIW9CuIM9CSIG7CBIF9B2IKNDiQAGAHAIAFIgJATQgDAEgCAAIgBAAg");
	this.shape_600.setTransform(845.6,451.4);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("rgba(101,156,197,0.6)").s().p("EAiJAG6Irhj9IrwjhIgBAAIgGgBIgXgEIhfgQQiSgbjqgmIktg0IgDAAIgHgBIgjgEIiRgRIpHhGInVg3IgCAAIgFgBIgYgCIhggKIl+gnIlSgjIANgdIAQgFQF8AmDwAXIWuCtIM1CUIG2B/IF5B1IKGDfIAOANIgJASQgEAFgCAAIAAgBg");
	this.shape_601.setTransform(847.9,451.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(101,156,197,0.6)").s().p("EAhyAG4Iraj7Il2h1IlxhqIgBAAIgGgBIgYgEQgjgHg6gJQiRgcjngmIkpg0IgDAAIgHgBIgjgFIiQgRIpBhFInQg2IgCAAIgEgBIgXgCIhggKIl6gnIlPgiIANgdIAPgFQF2AlDxAXIWgCsIMrCVIGyB9IF0B1IKADdIAMANIgIASQgDAEgCAAIgBAAg");
	this.shape_602.setTransform(850.2,451.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("rgba(101,156,197,0.6)").s().p("EAhbAG1IrTj4Ilyh0IluhpIgBAAIgFgBIgXgEIhdgRQiRgcjigmIkmg1IgCAAIgHgBIgjgEIiOgRIo8hEInLg2IgBAAIgFgBIgXgCIhegKIl2gnIlLgiIAMgdIAPgFQFwAlDwAXIWRCqIMiCXIGuB8IFwB0IJ6DbQAFAHAGAGIgJASQgDAEgCAAIAAgBg");
	this.shape_603.setTransform(852.5,452.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(101,156,197,0.6)").s().p("EAhDAGzIrLj2IluhyIlphpIgCAAIgFgBIgXgEQgkgHg3gJQiRgejegmIkjg1IgCAAIgHgBIgigEIiNgRIo3hDInFg2IgBAAIgFAAIgXgDIhcgKIlzgmIlHgiIAMgcIAPgGQFpAlDxAWIWCCqIMZCXIGpB8IFtByIJyDZQAFAIAGAFIgJASQgDADgCAAIgBAAg");
	this.shape_604.setTransform(854.8,452.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("rgba(101,156,197,0.6)").s().p("EAgsAGxIrDjzIlrhzIllhnIgBAAIgFgBIgXgEIhagRQiRgdjagnIkfg2IgCAAIgHgBIgjgEIiLgQIowhDInAg1IgCAAIgFAAIgWgDIhcgJIltgnIlFgiIANgcIAOgGIJUA8IVzCnIMQCaIGkB5IFpBzIJsDWIAKANIgJASQgDADgCAAIgBAAg");
	this.shape_605.setTransform(857.1,452.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(101,156,197,0.6)").s().p("EAgVAGuIq8jwIlnhyIlhhmIgBAAIgGgBIgVgEQglgIg0gJQiRgejWgnIkcg2IgCAAIgHgBIgigFIiKgQIoqhCIm7g0IgCAAIgEAAIgXgDIhagJIlqgmIlBgiIANgcIANgHIJOA8IVkCmIMHCbIGhB4IFkByIJlDUQAFAHAEAGIgIARQgDAEgDAAIAAgBg");
	this.shape_606.setTransform(859.4,452.8);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("rgba(101,156,197,0.6)").s().p("Af9GsIq0juIlihxIlehlIgCAAIgEgBIgWgEIhYgRQiQgfjSgnIkYg3IgCAAIgHgBIgigEIiIgQIolhBIm2g0IgBAAIgFAAIgWgDIhagJIllgmIk9giIAMgbIANgHIJHA7IVWClIL+CcIGbB3IFhBxIJfDRQAEAIAEAGIgJARQgDADgCAAIgBAAg");
	this.shape_607.setTransform(861.7,453.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(101,156,197,0.6)").s().p("AfnGpIqtjrIlehwIlbhkIgBAAIgEgBIgXgEQgjgIgzgJQiQggjNgnIkVg4IgCAAIgHgBIgigEIiHgQIofhAImwgzIgCAAIgFAAIgVgDIhYgJIligmIk6ghIAMgcIANgHQFSAjDwAYIVGCjIL1CeIGXB2IFdBwIJYDPQADAIAEAGIgJARQgDADgCAAIAAgBg");
	this.shape_608.setTransform(864,453.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("rgba(101,156,197,0.6)").s().p("AfPGnIqljpIlbhvIlWhiIgBAAIgFgBIgVgFIhWgRQiPggjKgnIkRg5IgCAAIgHgBIghgEIiGgPIoZhAImrgzIgCAAIgEAAIgWgCIhXgKIldglIk3giIAMgaIANgIII7A6IU3CjILsCfIGTB0IFZBvIJRDNIAHAOIgJARQgDACgDAAIAAAAg");
	this.shape_609.setTransform(866.3,453.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(101,156,197,0.6)").s().p("Ae4GkIqejmIlWhuIlThiIgBAAIgEgBIgWgEQgjgIgxgJQiPghjGgnIkOg5IgCAAIgHgBIgggEIiEgQIoUg/ImmgyIgCAAIgEAAIgVgCIhWgKIlZglIkzghIALgbIAMgIII2A6IUoChILjChIGOBzIFVBuIJLDLQACAIADAGIgIARIgFACIgBgBg");
	this.shape_610.setTransform(868.6,453.8);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(101,156,197,0.6)").s().p("AegGiIqVjjIlThuIlPhgIgBAAIgFgBIgUgFIhTgRQiQgijBgnIkKg5IgCAAIgHgBIgggEIiEgQIoNg+ImhgxIgCAAIgEgBIgUgCIhWgJIlVglIkvghIAMgaIALgJIIvA6IUZCfILbCiIGJByIFRBuIJEDIIAFAPIgIAQIgFABIgCAAg");
	this.shape_611.setTransform(871,454);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("rgba(101,156,197,0.6)").s().p("AeJGgIqOjhIlPhtIlKhfIgCAAIgEgBIgUgFIhTgSQiPghi8goIkIg6IgCAAIgHgBIgfgEIiCgPIoIg+ImcgwIgBAAIgFgBIgUgCIhVgJIlQglIksghIAMgaIALgJIIpA6IUKCeILRCkIGGBwIFNBtII9DGQABAJADAGIgIAQIgFABIgCAAg");
	this.shape_612.setTransform(873.3,454.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("rgba(101,156,197,0.6)").s().p("AdyGdIqHjeIlKhsIlIheIgBAAIgDgBIgVgFIhSgSQiNgii6goIkDg7IgCAAIgHgBIgggEIiAgPIoCg9ImWgwIgCAAIgEAAIgUgCIhTgJIlMglIkpggIALgaIAKgJIIjA5IT8CdILIClIGBBvIFIBsII4DEIADAPIgIAPIgFABIgCAAg");
	this.shape_613.setTransform(875.6,454.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("rgba(101,156,197,0.6)").s().p("AdbGbIqAjcIlGhrIlEhdIgBAAIgEgBIgUgFIhQgSQiOgji1goIkAg7IgCAAIgHgBIgfgEIh/gPIn8g8ImSgwIgBAAIgEAAIgUgCIhSgJIlIglIklggIALgZIAKgKIIdA5ITtCbIK+CnIF9BuIFFBrIIxDCQAAAIABAHIgIAPIgEABIgCAAg");
	this.shape_614.setTransform(877.9,454.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("rgba(101,156,197,0.6)").s().p("AdDGYIp3jZIlDhqIk/hcIgBAAIgEgBIgUgFQgjgJgsgJQiOgkixgoIj8g8IgCAAIgHgBIgfgEIh9gOIn3g8ImMgvIgCAAIgDAAIgUgCIhRgJIlEgkIkighIALgZIAKgKIIXA5ITeCaIK1CoIF4BtIFBBqIIqC/IABAPIgIAQIgEABIgDgBg");
	this.shape_615.setTransform(880.2,455);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("rgba(101,156,197,0.6)").s().p("AcsGWIpxjXIk+hpIk7hbIgBAAIgFgBIgTgFIhOgTQiNgjitgoIj4g9IgDAAIgGgBIgggEIh7gOInxg8ImHguIgBAAIgFAAIgTgCIhQgJIk/gkIkfggIALgYIAJgLIIRA5ITPCYIKtCqIFzBrIE9BpIIkC+IgBAOIgIAQIgDAAIgDAAg");
	this.shape_616.setTransform(882.5,455.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("rgba(101,156,197,0.6)").s().p("AcUGTIujk9Ik4hZIgBAAIgEgBIgTgFIhMgTQiOgkiogoIj1g+IgCAAIgHgBIgfgEIh6gOInsg6ImCguIgBAAIgDAAIgTgCIhQgJIk7gkIkbgfIALgZIAJgLIIKA5ITBCXIKjCrIFvBqINWEjIgBAQIgIAOIgEABIgDgBg");
	this.shape_617.setTransform(884.9,455.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("rgba(101,156,197,0.6)").s().p("Ab8GRIuXk5Ik0hZIgBAAIgEgBIgSgFIhMgTQiOglikgoIjyg+IgBAAIgIgBIgdgEIh6gOInlg6Il9gsIgBAAIgDAAIgTgDIhOgJIk4gjIkXggIAKgYIAJgMIIFA5ISwCWIKbCsIFrBpINLEgIgCAQIgIAOIgDABIgEgBg");
	this.shape_618.setTransform(887.2,455.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("rgba(101,156,197,0.6)").s().p("AblGPIuNk2IkwhZIgBAAIgDAAIgSgFIhLgTQiNgmiggoIjvg/IgBAAIgHgBIgegDIh3gOIngg5Il4gsIgBAAIgEAAIgSgDIhNgJIkzgjIkUggIAKgXIAJgMIH+A4ISiCUIKSCuIFlBoINBEdIgCAQIgIAOIgHAAg");
	this.shape_619.setTransform(889.6,455.9);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("rgba(101,156,197,0.6)").s().p("AbNGMIuAkzIkshYIgCAAIgDgBIgTgDIhJgTQiNgnibgoIjrg/IgCAAIgHgBIgegEIh2gOInZg4IlzgrIgBAAIgDgBIgTgCIhMgJIkugjIkSgfIALgYIAIgMIH3A4ISVCTIKICvIFhBmIM3EbIgEAQQgHAOgBAAIgHgBg");
	this.shape_620.setTransform(891.9,456.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("rgba(101,156,197,0.6)").s().p("Aa1GJIt1kvIkohXIgBAAIgEgBIgSgDIhIgTQiMgoiYgoIjohAIgBAAIgHgBIgegEIh0gNInUg4IlugrIgBAAIgDAAIgSgCIhLgJIkrgiIkNggIALgXIAHgNIHyA4ISECSIKACwIFdBlIMsEXIgFAQIgIAPIgHgCg");
	this.shape_621.setTransform(894.3,456.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("rgba(101,156,197,0.6)").s().p("AaeGHItqksIklhWIgBAAIgDgBIgRgEIhIgTQiMgoiTgoIjkhBIgCAAIgHgBIgdgDIhzgNInOg3IlpgrIgBAAIgDAAIgSgCIhKgJIkmgiIkKggIAKgWIAHgNIHsA4IR2CPIJ2CyIFZBkIMhEUIgGAQIgHAOIgHgBg");
	this.shape_622.setTransform(896.6,456.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("rgba(101,156,197,0.6)").s().p("AaGGEItekoIkhhVIgBAAIgDgBIgRgFIhGgSIkchRIjghBIgCAAIgHgBIgdgEIhygNInIg2IljgqIgBAAIgDAAIgRgCIhJgJIkjgiIkGgfIAKgWIAGgOIHmA4IRnCOIPBEWIMXERIgHAQIgHAOIgHgCg");
	this.shape_623.setTransform(899,456.9);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("rgba(101,156,197,0.6)").s().p("AZ1GEItZknItrkAIgCAAIgHgBIgcgDIhxgNInCg2Ivch1IAQgkIKVBNIOiB4IO0EWIMMEOQgOAegBAAIAAAAg");
	this.shape_624.setTransform(901.3,457.2);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("rgba(101,156,197,0.6)").s().p("AYsFzIsekTItaj7IgBAAIgHgBIgcgEIhtgOQiYgUkhglIgMgCIgDAAIgFgBIgigEIiKgQIozhCIjTgaIgEAAIAQgjIAKAAIJ9BKIGWA1IH2BGIOhERIL9EJIgLAbIgBABQgUgFgVgGg");
	this.shape_625.setTransform(904.7,457.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("rgba(101,156,197,0.6)").s().p("AYPFxIsPkNItIj3IgCAAIgGgBIgbgEIhrgPQiYgXkWglIgNgDIgBAAIgHgBIghgDIiIgRIophBIjOgYIgEAAIAQgjIAKgBIJuBKIGLAzIHrBJIOPENILuEDIgIAaIgBABQgUgBgSgHg");
	this.shape_626.setTransform(908,457.8);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("rgba(101,156,197,0.6)").s().p("AXxFwIr/kIIs3jzIgBAAIgHgBIgagEIhogQQiZgakKgmIgNgCIgCAAIgGgBIghgEIiGgQIoehAIjKgYIgDAAIAPgiIAJgCIJgBIIGBAyIHgBOIN8EHILeD/QgFATAAAFIAAABIgIAAQgPAAgNgEg");
	this.shape_627.setTransform(911.3,458.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("rgba(101,156,197,0.6)").s().p("AXUFtIrwkDIsljvIgCAAIgGgBIgZgEIhmgQQiagcj/goIgMgCIgCAAIgGgBIgggEIiEgQIoUg+IjGgYIgDAAIAPgiIAJgCIJRBHIF2AxIHVBRINqEDILPD5QgEASADAEIgBABQgJADgIAAQgJAAgHgDg");
	this.shape_628.setTransform(914.6,458.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("rgba(101,156,197,0.6)").s().p("AW1FqIrgj9IkUhWIoAiVIgBAAIgGgBIgYgEIhjgSQicgejzgpIgMgCIgCAAIgHgBIgfgEIiBgPIoKg+IjCgXIgCAAIAOghIAIgDIJEBGIFrAvIHKBVINXD+IK/D0QgBAQADAFIAAABQgLAFgKAAQgFAAgFgCg");
	this.shape_629.setTransform(918.1,458.9);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("rgba(101,156,197,0.6)").s().p("AWVFnIrPj4IkPhVIn0iRIgBAAIgFgBIgZgFQgngIg5gKQidghjngqIgMgDIgBAAIgHgBIgfgDIh/gPIoAg9Ii+gWIgCAAIAPggIAHgEII2BFIFgAtIG+BZIKODAIC2A5IKxDvQABAPAFAEIgBABQgMAIgKAAIgHgBg");
	this.shape_630.setTransform(921.6,459.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("rgba(101,156,197,0.6)").s().p("AV2FjIq/jyIkJhUInpiOIgBAAIgFgBIgYgFIhegTQidgkjcgrIgMgCIgBAAIgHgBIgfgEIh8gPIn2g7Ii6gWIgBAAIAOgfIAHgEIInBDIFVAsIG0BdIKAC7ICyA5IKiDqQACANAGAEIAAABQgOALgJAAIgEgBg");
	this.shape_631.setTransform(925,459.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("rgba(101,156,197,0.6)").s().p("AVXFgIqwjsIkBhUInfiLIgBAAIgFgBIgXgFIhbgUQiegmjRgsIgLgDIgCAAIgGgBIgfgDIh6gPInsg6Ii1gVIgCAAIAPgfIAFgFIIaBCIFLArIGpBhIJwC3ICuA4IKTDkQAFAMAGAEIAAABQgOAPgHAAIgDgBg");
	this.shape_632.setTransform(928.5,460.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("rgba(101,156,197,0.6)").s().p("AU4FdIqgjnIj8hTInTiIIgCAAIgEgBIgWgFIhZgVQifgojFgtIgLgDIgCAAIgHgBIgegEIh3gOInhg4IiygWIgBAAIANgeIAGgFIILBBIFAApIGeBlIJiCzICqA3IKEDfQAGAKAJAEIAAABQgPASgGAAIgBAAg");
	this.shape_633.setTransform(932,460.7);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("rgba(101,156,197,0.6)").s().p("AUYFaIuGk0InIiEIgBAAIgEgBIgWgGIhVgWQihgri5guIgLgCIgCAAIgHgBIgdgEIh1gOInXg3IiugVIAAAAIANgdIAFgHIH9BAIE1AoIGTBpIJUCuIMZERQAJAIAKAEIAAABQgPAWgEAAIgBAAg");
	this.shape_634.setTransform(935.5,461.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("rgba(101,156,197,0.6)").s().p("AT5FWItwktIm9iCIgBAAIgEgBIgUgFIhUgXQihgtiugvIgLgDIgBAAIgHgBIgdgEIhzgNInNg3IipgUIAAAAIAMgdIAFgHIHvA/IEqAnIGIBsIJFCqIMGELQALAGAMAFIAAABQgPAagDAAIAAgBg");
	this.shape_635.setTransform(939,461.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("rgba(101,156,197,0.6)").s().p("ATaFTItaknItrkAIgBAAIgHgBIgdgDIhwgNInDg2IilgTIARgkQL/BiABABIO0EWIMMEOQgOAegBAAIAAAAg");
	this.shape_636.setTransform(942.5,462.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("rgba(101,156,197,0.6)").s().p("AS4FOItEkfItTj6IgCAAIgHgBIgbgEIhtgNQiWgVkfgkIhzgPIgDAAIgHgBIgkgEIARgjIAKAAIAsAGQKeBaAZAIIObEQILUD6IAgAOIgEAJQgKASgBAAIAAAAg");
	this.shape_637.setTransform(945.7,462.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("rgba(101,156,197,0.6)").s().p("ASWFJIstkXIs+j1IgBAAIgGgBIgbgDIhpgPQiXgXkRglIhwgQIgCAAIgHgBIgkgEIARghIAKgBIArAGQJ1BZAxAOIOCEKILAD0IAdAPIgFAIQgJARgCAAIAAgBg");
	this.shape_638.setTransform(949,462.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("rgba(101,156,197,0.6)").s().p("ARzFFIsXkQIsljvIgCAAIgFgBIgagEIhmgPQiXgZkEgmIhsgRIgCAAIgHgBIgjgEIARggIAJgBIAqAFQJNBYBIAWIIjChIFGBiIKtDtQAMAJAMAHIgFAIQgIAOgDAAIgBAAg");
	this.shape_639.setTransform(952.3,463.3);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("rgba(101,156,197,0.6)").s().p("ARRFAIsAkIIkhhXInuiSIgBAAIgGgBIgZgEIhigQQiXgcj2gnIhpgRIgDAAIgGgBIgigEIARgfIAJgCIAoAGQIlBWBgAdIISCcIE9BhIKaDmQAJAKAKAHIgEAIQgIAMgEAAIgBgBg");
	this.shape_640.setTransform(955.5,463.7);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("rgba(101,156,197,0.6)").s().p("AQvE8IrqkBIkYhWIngiNIgBAAIgFgBIgYgEQglgIg6gJQiXgejpgoIhlgTIgDAAIgHgBIghgEIASgdIAIgCIAnAFQH8BVB3AkIIECYIEzBeIKHDgQAGALAJAHIgFAIQgIAJgEAAIgBAAg");
	this.shape_641.setTransform(958.8,464.1);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("rgba(101,156,197,0.6)").s().p("AQNE3IrTj5IkQhUInRiJIgBAAIgFgBIgXgEIhcgSQiXghjbgoIhjgUIgCAAIgHgBIgggEIASgcIAHgCIAnAEQHSBUCQArIH0CUIEpBcIJ0DZQAEAMAGAHIgDAIQgIAGgFAAIgCAAg");
	this.shape_642.setTransform(962,464.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("rgba(101,156,197,0.6)").s().p("APrEyIq+jwIkHhTInCiFIgBAAIgFgBIgVgFIhZgSQiXgjjOgqIhfgUIgCAAIgHgBIgfgEIARgaIAHgEIAmAFQGpBSCoAyIHlCPIEfBbIJgDTQACAMAEAIIgDAHQgHAEgEAAIgEgBg");
	this.shape_643.setTransform(965.3,464.9);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("rgba(101,156,197,0.6)").s().p("APJEtIqnjpIj/hRIm0iBIgBAAIgEgBIgVgEQglgKgwgKQiXgljAgrIhcgVIgCAAIgHgBIgfgEIASgZIAHgEIAkAFQGBBRC/A4IHVCLIEWBZIJNDMQAAAOACAHIgEAHQgFADgEAAIgGgCg");
	this.shape_644.setTransform(968.5,465.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("rgba(101,156,197,0.6)").s().p("AOlEpIuGkyImmh8IgBAAIgEgBIgUgFIhRgUQiYgoiygrIhZgWIgCAAIgHgBIgegEIATgYIAGgEIAjAEQFYBQDXBAIHGCGINGEcQgDAPAAAHIgEAHIgFAAQgGAAgFgBg");
	this.shape_645.setTransform(971.9,465.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("rgba(101,156,197,0.6)").s().p("AOBEjItnkoImYh4IgBAAIgDgBIgTgFIhOgVQiYgqilgsIhWgXIgBAAIgHgBIgdgEIASgWIAGgGIAiAEQEvBPDvBHIG2CBIMpEVIgHAXIgEAGQgIgBgIgDg");
	this.shape_646.setTransform(975.4,466.3);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("rgba(101,156,197,0.6)").s().p("ANuEjItaklItrkBIgBAAIgHgBIgdgEIAYgbIAhAEIO0EYIMMEMQgOAfgBAAIAAgBg");
	this.shape_647.setTransform(978.9,466.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("rgba(101,156,197,0.6)").s().p("ANHEcItYklItEj1IAQgdIOPENIMMEMQgOAegBAAIAAAAg");
	this.shape_648.setTransform(982.8,467.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("rgba(101,156,197,0.6)").s().p("ALpD+Ir5kFIsejrIAOgcINmEAILqEBIgCADQgLAZgCAAIg4gRg");
	this.shape_649.setTransform(986.6,468.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("rgba(101,156,197,0.6)").s().p("ALHD0IrVj5Ir6jhIAOgbIAyAMIMKDoILHD0IgBAEQgLAXgBAAQgbgGgagIg");
	this.shape_650.setTransform(990.4,469.9);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("rgba(101,156,197,0.6)").s().p("AKlDqIqyjtIrVjYIAOgZIAvAJILjDeIKkDoIgBAEQgJAVgCABQgagEgXgHg");
	this.shape_651.setTransform(994.3,471);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("rgba(101,156,197,0.6)").s().p("AKDDfIqPjgIqvjPIAMgXIArAGIK+DUIKCDcIgBADQgJAVgBABQgYgBgWgIg");
	this.shape_652.setTransform(998.1,472.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("rgba(101,156,197,0.6)").s().p("AJhDVIpsjVIqKjEIAMgWIAnADIKYDKIJgDQIgBAEIgKAUIgFAAQgUAAgRgGg");
	this.shape_653.setTransform(1001.9,473.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("rgba(101,156,197,0.6)").s().p("AI/DKIpIjJIpli5IALgVIAkABIJxC/II9DEIAAAEIgJATIgOABQgNAAgMgFg");
	this.shape_654.setTransform(1005.7,474.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("rgba(101,156,197,0.6)").s().p("AIdDAIoli+IpAiuIAKgUIAhgCIJLC1IIbC5IAAADIgJARQgKADgJAAQgIAAgIgDg");
	this.shape_655.setTransform(1009.6,475.7);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("rgba(101,156,197,0.6)").s().p("AH7C3IoCiyIobilIAKgTIAdgFIIlCsIH5CtIAAACIgIARQgMAFgJAAQgGAAgFgCg");
	this.shape_656.setTransform(1013.4,476.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("rgba(101,156,197,0.6)").s().p("AHYCtIneimIn2ibIAJgRIAagIIH+CiIHWChIABACIgIAPQgMAHgJAAIgHgBg");
	this.shape_657.setTransform(1017.3,477.9);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("rgba(101,156,197,0.6)").s().p("AG2CjIm7iaInQiRIAIgRIAWgKIHYCYIG0CVIABACIgHAOQgMAKgJAAIgEgBg");
	this.shape_658.setTransform(1021.1,479.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("rgba(101,156,197,0.6)").s().p("AGUCYImYiNImriHIAHgQIATgMIGyCNIGSCJIABACIgGANQgMAMgHAAIgDgBg");
	this.shape_659.setTransform(1024.9,480.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("rgba(101,156,197,0.6)").s().p("AFzCPIl2iBImFh+IAGgOIAPgQIL7EBIABABIgFANQgLAOgFAAIgBAAg");
	this.shape_660.setTransform(1028.8,481.4);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("rgba(101,156,197,0.6)").s().p("AFQCEIqyjpIAFgMIAMgTIKyDrIACABIgFALQgKASgEAAIAAgBg");
	this.shape_661.setTransform(1032.6,482.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("rgba(101,156,197,0.6)").s().p("AEuB6IpqjTIANggIJsDVQgOAegBAAIAAAAg");
	this.shape_662.setTransform(1036.5,483.7);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("rgba(101,156,197,0.6)").s().p("EBTgAMnItZknIttkBIgCAAIgHgCIgcgDIhxgNInCg1I8MjVIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFAAIgWgDIhYgKIlfgmI18iaIgDgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgkIAAgBQAAggABgBIgCgDIAAgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIADgBIUGCAIFCAfIBQAIIAUACIAFABIACAAIAAAAUAk1AESAAHAACIAAAAIAAAAIgDgBUAjRAD0AAHAACIAAAAIAAAAIgDgBQa9C0AFACIAAAAIAAAAIgCgCIOfCAIABABIPCEcIMOEEQgbBGgBAAIAAAAg");
	this.shape_663.setTransform(542.2,418.3);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("rgba(101,156,197,0.6)").s().p("EBS5AMcQgsgOgrgPIrrj/ItpkBIgCAAIgHgBIgcgEIhwgNIlDgoIgCAAIgGAAIgggFIhVgKIgvgFIoWg/IzAiOIgCAAIgHgBIgcgDIhwgLIm/gqIlOggIgCAAIgGgBIgggDIiDgNIoJgxIr8hJIgCAAIgGgBIgbgDIhrgLImugxIsqhbIgCAAIgGgBIgegDIh9gOInzg4Ij5gdIgBAAIgGAAIgVgDIhYgKIldgmI1DiTIgCAAIgFgBIgbgEIgRgCIgDgBIgCgDIgBgjIAAgBQgBggABgBIgCgCQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIADgBIAzADIBDAGISJBzIFAAgIBQAIIAUACIAFAAIACAAIAAAAITNCQIAEAAIRhCEIgDgBIYaCpIAEAAIKwBLIgDgBIVKCOIAEAAIFuAnIgDgBIOcCAIAAAAIOJEMINAETIgZBEg");
	this.shape_664.setTransform(544.4,418.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("rgba(101,156,197,0.6)").s().p("EBSkAMYQgrgLgrgPIrnj/ItmkAIgBAAIgHgBIgcgDIhvgOIlCgoIgCAAIgGgBIgfgFIhWgKIgugFIoUg/Iy7iOIgCAAIgHgBIgcgCIhvgLIm9grIlNgfIgCAAIgGgCIgggDIiDgMIoHgxIr4hJIgCAAIgHgBIgagCIhrgMImsgwIsmhbIgCAAIgGgBIgegCIh9gPInxg4Ij3gcIgCAAIgFAAIgWgDIhXgKIlcgmI09iTIgCAAIgFgBIgcgDIgQgCIgDgBIgCgDIgCgjIAAAAIgBghIgCgCIAAgCIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADgBIAxACQAiABAhAEISEBzIE+AgIBQAIIAUACIAFAAIACAAIAAAAITGCPIADgBQRICBAXADIgDgBIYSCoIADAAQKgBJAPADIgCgBIVCCMIAEAAQFlAnAJACIgDgCIKlBdIAAAAIDzAjIAAABIOGELIM8ERIgXBDg");
	this.shape_665.setTransform(546.6,418.8);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("rgba(101,156,197,0.6)").s().p("EBSgAMZIAAABIAAgBgEBSQAMTQgrgIgpgOIrlj/Itij+IgBAAIgHgBIgcgFIhugNIlAgqIgCAAIgGgBIgggDIhUgKIgvgGIoRg/Iy3iNIgCAAIgGgBIgcgCIhvgLIm7gqIlMghIgCAAIgGgBIgfgCIiDgNIoFgxIr1hIIgCAAIgGgBIgbgDIhqgMImqgvIsjhaIgCAAIgGgBIgegDIh8gOInwg4Ij2gcIgBAAIgGAAIgVgDIhXgKIlagmI04iSIgCAAIgFgBIgbgDIgRgCIgDgCIgCgCIgCgiIAAAAIgCghQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBIADgBIAwABQAgAAAhADIR/B0IE9AfIBPAIIAUACIAFABIACAAIAAAAIS/CNIAEAAIRbCDIgDgBIYKCoIAEAAIKtBLIgDgCIU8CMIAEAAIFtApIgCgCIOUCBIAAABIOBEJIM6EQQgWBCABAAg");
	this.shape_666.setTransform(548.7,419);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("rgba(101,156,197,0.6)").s().p("EBR8AMQQgrgHgogOIrhj9Itfj+IgBAAIgHgBIgcgEIhugOIk+grIgCAAIgGgBIgfgDIhUgKIgvgGIoPg+IyxiNIgCAAIgHAAIgbgDIhvgLIm5gqIlKghIgCAAIgHgBIgfgDIiCgMIoDgxIryhHIgBAAIgHgBIgbgDIhpgMImogvIsghZIgCAAIgGgBIgegDIh7gOInug4Ij1gcIgCAAIgFAAIgWgDIhWgJIlYgmI0ziSIgCAAIgFgBIgbgDIgRgCIgDgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIgEggIAAgBQgBgegBgBIgDgCIAAgCIAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIACgBIAvAAQAggCAgADIR6BzIE7AgIBPAIIAUACIAFABIACAAIAAAAIS5CNIADAAIRYCCIgDgCIYCCnIAEAAQKOBHAdAEIgCgBIU1CLIAEAAQFbAmASADIgCgBIKfBcIDwAkIABABIN9EIIM2EQQgVBAADABg");
	this.shape_667.setTransform(550.9,419.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("rgba(101,156,197,0.6)").s().p("EBR2AMSIAAAAIAAAAgEBRnAMNQgqgFgngNIrej8Itbj+IgBAAIgHgBIgbgEIhugOIk8gsIgCAAIgGgBIgfgEIhUgJIgugGIoOg+IysiMIgCAAIgGAAIgcgDIhtgLIm3grIlKggIgCAAIgGgBIgfgDIiCgMIoBgxIruhHIgCAAIgHgBIgagDIhpgLImmgvIsdhZIgCAAIgGgBIgegDIh7gNInsg4Ij0gcIgBAAIgFgBIgWgCIhVgJIlYgmI0tiSIgCAAIgFgBIgbgDIgQgCIgDgBIgCgDIgEggIAAAAQgCgdgBgBIgDgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADgCIAtgBQAggDAfADIR1BzIE6AgIBPAIIATACIAGABIABAAIABAAISxCMIADAAIRVCBIgDgBIX7CmIADgBQKGBHAkAFIgCgCIUuCLIADAAQFWAlAXAEIgCgCIKdBcIDvAlIAAABIN6EHIMyEOQgSA/ADABg");
	this.shape_668.setTransform(553,419.4);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("rgba(101,156,197,0.6)").s().p("EBRTAMKQgqgCgmgNIrbj7ItXj9IgBAAIgGgBIgcgEIhtgPQh2gSjEgaIgCAAIgGgBIgfgEIhUgKIgugFIoLg+IyoiMIgBAAIgHAAIgbgDIhtgLIm1gqIlIghIgCAAIgHgBIgfgDIiBgMIn/gwIrrhHIgCAAIgHgBIgagDIhogLImlgvIsZhYIgCAAIgGgBIgdgDIh7gNInrg4IjygcIgBAAIgGAAIgVgCIhVgKIlWgmI0oiRIgCAAIgFgBIgagCIgRgCIgDgCIgCgDIgFgfIAAAAQgCgcgBgBIgDgCIgBgDIAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIACgCIAtgCQAegFAfADIRwBzIE5AgIBOAIIAUACIAFABIABAAIABAAISqCLIADAAIRSCBIgCgCIXyCmIADgBIKoBLIgCgBIUoCKIADAAQFRAlAcAEIgCgBIKZBbIABAAIDtAmIABAAIN2EHIMvENQgSA9AEABg");
	this.shape_669.setTransform(555.2,419.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("rgba(101,156,197,0.6)").s().p("EBQ/AMHQgqAAgkgNIrYj6ItTj8IgCAAIgGgBIgcgEIhsgPQh3gSjCgbIgBAAIgHgBIgfgEIhTgKIgugFIoJg+IyiiLIgCAAIgHAAIgagDIhtgLImzgrIlHggIgCAAIgGgBIgfgDIiBgMIn9gwIrohHIgCAAIgGgBIgagDIhogLImjguIsWhXIgCAAIgGgBIgdgDIh7gOInog3IjxgcIgCAAIgFAAIgVgDIhVgJIlUglI0jiRIgBAAIgGgBIgagDIgQgCIgEgBIgBgDIgGgeQgDgcgCgBIgCgCIgBgCIAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIACgBIArgEQAegGAeADIRrBzIE3AgIBOAIIAUACIAFAAIABAAIABAAISkCLIADAAIROCAIgCgBIXqCkIADAAIKmBKIgBgBIUhCJIADAAQFMAlAgAFIgCgCIKXBbIDtAnIAAAAINzEGIMrELQgQA8AFACg");
	this.shape_670.setTransform(557.3,419.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("rgba(101,156,197,0.6)").s().p("EBQqAMEQgpACgjgMIrVj5ItQj7IgBAAIgHgBIgbgEIhrgQQh4gSi/gcIgCAAIgGgBIgfgEIhUgJIgtgGIoHg9IydiKIgCAAIgHgBIgagDIhtgKImwgrIlGghIgCAAIgGAAIgfgDIiAgNIn7gwIrlhGIgCAAIgGgBIgagDIhogLImgguIsThWIgCAAIgGgBIgegDIh5gOInng3IjwgbIgBAAIgGgBIgVgCIhUgJIlTgmI0ciQIgDAAIgEgBIgbgDIgQgCIgDgBIgCgDIgHgdIAAAAQgCgbgDgBQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgCIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIAqgFQAdgIAeADIRlBzIE3AgIBNAIIAUACIAEABIACAAIAAAAISeCJIACAAIRLCAIgBgCIXjCkIACAAIKlBKIgCgBIUbCIIACAAQFIAlAkAFIgBgBIKUBaIDrAnIABABINvEEIMoELQgPA5AFADg");
	this.shape_671.setTransform(559.5,419.7);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("rgba(101,156,197,0.6)").s().p("EBQWAMCQgoAEgjgMIrSj4ItLj6IgCAAIgGgBIgbgEIhrgQQh4gUi9gbIgDAAIgFgBIgggEIhSgKIgugFIoEg9IyZiKIgBAAIgHAAIgagDIhsgLImvgrIlFggIgBAAIgHgBIgegDIiAgMIn6gwIrhhGIgCAAIgGgBIgZgDIhogLImfgtIsOhWIgCAAIgHgBIgdgDIh6gOInlg3IjugbIgBAAIgGAAIgVgDIhUgJIlRglI0YiQIgCAAIgFgBIgZgDIgRgBIgDgCIgCgCIgHgdIAAAAQgEgagCgBIgDgCIgBgCIAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIADgBIAogHQAcgJAeADIRgBzIE1AgIBNAIIATACIAGABIACAAIAAAAISWCJIADgBIRHB/IgCgBIXbCjIADAAIKjBKIgBgBIUUCHIADAAQFCAkAoAGIgBgBIKRBaIDrAoIAAAAINrEDIMlEKQgNA4AGADg");
	this.shape_672.setTransform(561.7,419.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("rgba(101,156,197,0.6)").s().p("EBQCAL/QgpAGghgMIrOj2ItJj6IgBAAIgGgBIgbgEQgngHhDgJQh4gUi8gcIgCAAIgGgBIgfgEIhSgKIgtgFIoCg9IyUiJIgCAAIgGgBIgbgDIhrgKImsgrIlEghIgCAAIgGAAIgfgDIh+gMIn4gwIrfhGIgBAAIgHgBIgZgDIhngLImdgsIsMhWIgCAAIgGgBIgdgDIh5gNInkg3IjsgbIgCAAIgFAAIgVgDIhUgJIlQglI0RiPIgCAAIgGgBIgagDIgQgCIgDgBIgBgDIgJgbIAAgBQgDgZgEgBIgCgCIgBgCIAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAAAAAIAogHQAcgLAcADIRbBzIE0AgIBMAIIAUACIAFAAIABAAIABAAISQCJIACgBIREB/IgBgCIXTCiIACAAIKiBKIgCgBIUOCHIACAAQE+AjAtAHIgBgBIKOBZIAAABIDpAoIABAAINnECIMhEJQgLA2AHADg");
	this.shape_673.setTransform(563.8,420);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("rgba(101,156,197,0.6)").s().p("EBOlAL5IrLj1ItFj5IgBAAIgGgBIgbgEQgngHhDgKQh4gVi5gcIgCAAIgHgBIgegEIhSgJIgtgGIoAg8IyPiJIgCAAIgGAAIgagDIhrgLImqgrIlDggIgCAAIgGgBIgegDIh/gMIn2gwIrbhFIgBAAIgHgBIgZgDIhmgLImbgsIsJhVIgCAAIgGgBIgdgDIh5gNInhg3IjsgaIgCAAIgEgBIgWgCIhTgJIlOglI0MiPIgCAAIgFgBIgagDIgQgCIgEgBIgBgCIgJgbQgEgZgEgBIgCgCIgCgCIAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAmgJQAbgMAcADIRWBzIEyAgIBMAIIAUACIAFABIABAAIABAAISJCHIACAAIRBB9IgBgBIXLChIACAAIKgBKIgBgBIUHCGIACAAQE5AjAxAHIgBgBIKMBZIDoAqINkEBIMeEHQgKA1AIADIgJgDQgSAEgPAAQgVAAgSgHg");
	this.shape_674.setTransform(566,420.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("rgba(101,156,197,0.6)").s().p("EBOSAL4IrIj1ItBj4IgBAAIgGgBIgbgEQgngHhCgKQh4gVi4gdIgCAAIgGgBIgegEIhSgJIgtgGIn+g8IyKiIIgCAAIgGAAIgagDIhqgLImogrIlBghIgCAAIgHAAIgegDIh+gMIn0gwIrYhFIgBAAIgGgBIgagCIhlgLImZgsIsGhUIgCAAIgGgBIgdgDIh4gNIngg3IjrgbIgBAAIgFAAIgVgCIhTgJIlMglI0HiPIgCAAIgFAAIgagDIgQgCIgDgBIgCgDIgKgaQgEgXgEgBIgDgCIgBgCIAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIACgCIAlgKQAagNAcADIRRBzIEwAgIBMAIIAUACIAFAAIABAAIABAAISDCHIABAAIQ+B9IgBgCIXDChIACgBIKfBKIgBgBQPWBnEqAfIACgBQE0AjA2AIIgBgBIKJBZIDnAqINgEAIMaEGQgIAyAHAFIgGgDQgUAFgRAAQgSAAgQgFg");
	this.shape_675.setTransform(568.1,420.3);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("rgba(101,156,197,0.6)").s().p("EBN/AL3IrGj0IkDhQIo6inIgBAAIgGgBIgagEQgogIhBgKQh5gWi1gdIgCAAIgGgBIgfgDIhRgKIgtgFIn7g8IyGiIIgBAAIgGAAIgagDIhqgLImmgrIlAggIgCAAIgGgBIgegDIh+gMInygvIrUhFIgCAAIgGgBIgZgCIhlgLImXgsIsDhTIgCAAIgGgBIgdgDIh3gNIneg3IjqgaIgBAAIgFAAIgVgDIhTgJIlLglI0BiNIgCAAIgFgBIgagDIgQgCIgDgBIgCgCIgKgZIAAgBQgFgWgEgCIgDgBIgCgCIAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIACgCIAjgLQAagOAbACIRMBzIEvAgIBMAIIATACIAFAAIACAAIAAAAIR8CGIACAAIQ6B8IgBgBIW8CgIABgBIKdBJIAAAAIAAAAIgBgBIT6CGIACgBQEvAjA6AIIgBgBIKGBZIABAAIDlAqIABAAINcD/IMXEFQgIAxAKAFIgHgDQgVAHgTAAQgPAAgNgEg");
	this.shape_676.setTransform(570.4,420.5);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("rgba(101,156,197,0.6)").s().p("EBNrAL1IrDjyIkChQIo3inIgCAAIgFgBIgbgEQgngIhAgKQh5gWi0geIgCAAIgGgBIgfgDIhQgKIgtgFIn5g8IyBiHIgBAAIgGAAIgagDIhpgLImkgrIk/ggIgCAAIgGgBIgegDIh9gMInwgvIrShFIgBAAIgGAAIgZgDIhlgLImVgrIr/hTIgCAAIgGgBIgdgDIh3gNIndg2IjogaIgBAAIgFAAIgVgDIhSgJIlJglIz8iNIgCAAIgFgBIgagCIgQgCIgDgBIgCgCIgLgZIAAAAQgFgWgFgBIgDgCIgBgCIAAAAIABgDIACgCIAigNQAZgQAaADIRHBzIEuAfIBLAIIAUACIAFABIABAAIABAAIR1CFIACAAIQ2B7IAAAAIWzCeIACAAIKbBJIgBgBITzCEIACAAQEqAiA/AJIgBgBIKEBYIAAAAIDkArIABAAINYD+IMUEEQgGAwAKAEIgGgCQgWAJgUAAQgNAAgLgEg");
	this.shape_677.setTransform(572.7,420.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("rgba(101,156,197,0.6)").s().p("EBNXAL0IrAjyIkAhQIo1ilIgBAAIgGgBIgagFQgogIg/gKQh6gXixgeIgCAAIgGgBIgfgEIhQgJIgtgFIn3g8Ix7iGIgCAAIgGAAIgagDIhogLImigrIk9ghIgCAAIgHgBIgegDIh8gLInugvIrPhEIgBAAIgGgBIgZgDIhkgKImTgrIr8hSIgCAAIgGgBIgdgDIh3gNInag2IjngaIgCAAIgEgBIgVgCIhSgJIlIglIz2iMIgCAAIgFgBIgagDIgPgCIgDgBIgCgCIgMgXIAAgBQgGgUgFgCIgDgBIgCgCIAAgBIABgDIACgCIAhgOQAYgRAaADIRCByIEtAgIBKAIIAUACIAFABIABAAIABAAIRuCEIACAAIQzB7IAAgBIWsCeIABgBIKaBJIgBgBQPjBpEJAbIACgBQElAiBEAJIgBgBIKABYIABABIDjArIAAAAINVD9IMQEDQgEAuALAFIgFgCQgYALgUAAQgLAAgKgDg");
	this.shape_678.setTransform(574.9,421);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("rgba(101,156,197,0.6)").s().p("EBNEALyIq9jwIj/hQIozilIgBAAIgGgBIgagFQgogIg+gKQh6gYivgeIgCAAIgHgBIgegEIhQgJIgsgFIn2g7Ix2iGIgCAAIgFAAIgZgDIhpgLImfgrIk8ghIgCAAIgHgBIgegDIh8gLInsgvIrLhEIgCAAIgFgBIgZgCIhjgLImSgqIr4hSIgDAAIgGgBIgcgDIh3gNInYg1IjngaIgBAAIgEgBIgVgCIhSgJIlGgkIzxiNIgCAAIgFAAIgZgDIgQgCIgDgBIgBgCIgOgXQgFgUgGgBIgDgCIgCgCIAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAIABgCIAggPQAXgTAaADIQ8ByIErAgIBLAIIATACIAFAAIACAAIABAAIRnCEIABgBIQwB7IAAgBIWkCdIACAAIKXBIIAAgBITlCDIACAAQEgAhBIAKIgBgBIJ+BYIDjAsINRD8IMMECQgCArALAGIgDgBQgZANgUAAQgKAAgIgDg");
	this.shape_679.setTransform(577.2,421.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("rgba(101,156,197,0.6)").s().p("EBMwALxIq5jvIj/hQIowikIgBAAIgGgBIgZgFQgpgIg9gKQh6gZitgeIgCAAIgHgBIgegEIhQgJIgsgGInzg7IxxiFIgCAAIgFAAIgagDIhngLImdgrIk8ghIgCAAIgGAAIgegDIh8gMInqgvIrIhDIgBAAIgGgBIgYgCIhkgLImPgqIr1hRIgCAAIgHgBIgcgDIh2gNInXg1IjlgaIgBAAIgEAAIgVgCIhRgJIlFglIzriMIgCAAIgFAAIgagDIgPgCIgDgBIgCgCIgOgWQgGgTgGgBIgDgCIgCgCIAAAAIABgDIACgCIAegRQAXgUAZADIQ4ByIEpAgIBKAIIATACIAGABIABAAIABAAIRhCDIABgBIQtB6IgBgBIWdCcIABgBIKWBJIAAgBITfCCIABAAQEbAgBNALIAAgBIJ7BYIDhAtINND6IMJEBQgBAoALAHIgBAAQgaAQgUAAQgJAAgHgDg");
	this.shape_680.setTransform(579.4,421.5);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("rgba(101,156,197,0.6)").s().p("EBMbALwIq2jvIj9hPIouikIgBAAIgFgBIgagFQgogIg9gLQh6gZisgeIgCAAIgGgBIgegEIhQgJIgsgGInwg6IxtiFIgBAAIgGAAIgZgDIhngLImbgrIk6ghIgCAAIgHgBIgegDIh7gLInogvIrFhDIgBAAIgGgBIgYgCIhjgKImNgqIryhQIgCAAIgHgBIgcgDIh1gNInWg1IjjgaIgBAAIgFAAIgUgCIhRgJIlDglIzmiLIgCAAIgFgBIgZgCIgQgCIgDgBIgCgCIgOgVIAAAAQgHgTgGgBIgDgBIgCgCIAAgBIABgDIABgCIAegSQAWgVAYADIQzByIEoAgIBJAIIAUACIAFAAIABAAIABAAIRaCCIABAAIQqB5IAAgBIWUCcIABgBIKVBIIAAgBQPwBqDoAYIABgBQEWAhBSALIgBgBIJ4BXIABAAIDfAuIABAAINJD5IMGEAQAAAoANAHIgBgBQgbASgUAAQgHAAgHgCg");
	this.shape_681.setTransform(581.7,421.7);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("rgba(101,156,197,0.6)").s().p("EBMHALuIqzjtIj8hQIorijIgBAAIgFgBIgagEQgpgJg8gLQh6gZipgfIgCAAIgGgBIgfgEIhPgJIgrgGInvg6IxoiEIgBAAIgFAAIgagDIhmgLImZgrIk5ghIgCAAIgHgBIgegDIh6gLInmgvIrBhDIgCAAIgGAAIgYgDIhigKImLgpIrwhQIgBAAIgHgBIgcgDIh1gNInUg0IjhgaIgCAAIgEAAIgUgCIhRgJIlCglIzgiKIgCAAIgFgBIgZgDIgQgCIgDAAIgBgCIgQgUIAAgBQgHgRgGgCIgEgBIgCgCIAAAAIABgDIABgCIAdgTQAVgXAXACIQuBzIEnAfIBJAIIATACIAGABIABAAIABAAIRTCBIABAAIQmB4IAAgBIWNCbIAAgBIKUBIIAAgBITSCBIABAAQERAgBWAMIAAgBIJ1BWIAAABIDeAuIABAAINGD4IMCD/QACApAOAEIgBAAQgbAUgUAAQgGAAgGgCg");
	this.shape_682.setTransform(584,422);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("rgba(101,156,197,0.6)").s().p("EBLzALtIqwjtIj7hPIooiiIgCAAIgFgBIgZgFIhkgUQh7gbingfIgCAAIgHgBIgegDIhOgKIgsgEInsg7IxjiDIgCAAIgFAAIgZgDIhmgLImXgrIk4ghIgCAAIgGgBIgegDIh6gMInkgtIq+hDIgCAAIgFgBIgYgCIhigLImJgpIrshOIgCAAIgGgBIgdgDIh0gNInSg1IjhgZIgBAAIgEAAIgVgDIhPgJIlBgjIzbiLIgCAAIgFAAIgZgDIgPgCIgDgBIgCgBQgHgKgJgKQgHgRgIgBIgCgCIgDgBIAAgBIABgDIACgCIAagUQAVgYAXACIQpByIElAgIBJAIIATACIAFABIACAAIAAAAQNXBjD2AdIABgBQNIBgDbAYIAAAAIWFCZIAAAAIKSBHIAAgBITLCBIAAgBQENAgBaAMIAAAAIJzBWIAAAAIDeAvIAAAAINCD3IL/D+QADAmAPAGQgcAWgTAAQgFAAgFgBgEBMsALYIAAAAIABABIgBgBgEBMsALYIAAAAg");
	this.shape_683.setTransform(586.3,422.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("rgba(101,156,197,0.6)").s().p("EBLfALrIqtjrIj6hQIolihIgCAAIgFgBIgZgFIhjgUQh8gbilggIgBAAIgHgBIgegDIhOgKIgsgEInqg7IxeiCIgBAAIgGAAIgYgDIhmgLImUgsIk3ghIgCAAIgHAAIgdgDIh6gMInigtIq7hDIgBAAIgGAAIgYgDIhhgKImHgpIrphNIgCAAIgGgBIgdgDIh0gNInPg1IjggZIgBAAIgEAAIgVgDIhPgJIk/gjIzWiKIgBAAIgGgBIgYgDIgPgBIgEgBIgCgCQgHgJgJgJQgIgQgIgCIgDgBIgCgCIAAAAIABgEIABgCIAagVQATgaAXADQKLBFGZAtIEjAfIBJAIIATACIAFABIACAAIAAAAIRHCAIAAgBIQgB4IAAgBIV9CZIAAgBIKQBHIAAAAITFB/IAAgBQEIAgBfANIAAgBIJwBWIDcAwIAAAAIM/D2IL7D8QAFAnAQAFQgcAZgTAAQgEAAgEgCg");
	this.shape_684.setTransform(588.6,422.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("rgba(101,156,197,0.6)").s().p("EBLKALpIqqjqIj4hQIojigIgBAAIgGgBIgZgFIhigVQh8gbijggIgCAAIgGgBIgegEIhOgJIgrgFInog6IxZiCIgBAAIgGAAIgYgDIhlgLImTgrIk2ghIgCAAIgGgBIgegDIh4gLInhguIq3hCIgCAAIgFgBIgYgCIhggKImGgoIrlhNIgCAAIgHgBIgcgDIh0gNInOg1IjegZIgBAAIgFAAIgUgCIhPgJIk9gkIzRiJIgBAAIgGgBIgXgCIgQgCIgDgBIgCgBQgIgJgKgJIAAAAQgIgPgHgCIgEgBIgCgCIAAAAIAAgEIACgCIAYgWQATgbAXACIQeByIEiAgIBIAIIATACIAGAAIABAAIABAAIRAB/IAAAAIQcB2IABAAIV0CYIAAgBIKPBHIAAgBIS+B/IABgBQECAgBkANIAAAAIJtBVIAAAAIDbAwIAAABIM7D0IL4D8QAGAkARAGIABAAQgcAcgSAAIgIgCg");
	this.shape_685.setTransform(590.9,422.8);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("rgba(101,156,197,0.6)").s().p("EBK2ALoIqnjpIj4hPIogigIgCAAIgEgBIgZgFIhjgVQh7gcihghIgCAAIgGgBIgegDIhOgKIgrgEInlg6IxUiBIgCAAIgGgBIgYgDIhkgKImQgsIk1ghIgCAAIgHgBIgdgDIh4gLInfgtIq1hCIgBAAIgFgBIgYgCIhggKImEgoIrihMIgCAAIgGgBIgdgDIhygNInNg0IjcgZIgCAAIgEAAIgUgDIhPgJIk8gjIzKiJIgCAAIgFgBIgZgCIgOgCIgEgBIgCgBQgIgIgKgJIAAAAQgIgPgJgBIgCgBIgDgCIAAAAIAAgEIACgCIAWgYQATgcAWACIQZByIEgAgIBIAIIAUACIAFABIABAAIABAAIQ5B+IgBgBIQaB2IAAgBIVuCYIAAAAIAAAAIAAgBIKMBHIABgBIS3B+IAAgBQD/AfBnAOIAAAAIJrBVIAAAAIDZAxIABAAIM3D0IL1D6QAHAjASAGIADABQgdAdgSAAIgGgBg");
	this.shape_686.setTransform(593.3,423);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("rgba(101,156,197,0.6)").s().p("EBKhALmIqjjoIj2hPIoeigIgCAAIgFgBIgZgFIhhgVQh8gcifghIgBAAIgHgBIgegEIhNgJIgsgFInig5IxQiBIgBAAIgGAAIgXgDIhlgLImOgsIkzghIgCAAIgHAAIgdgDIh4gMIndgtIqwhCIgCAAIgFAAIgYgCIhfgKImCgoIrfhLIgCAAIgHgBIgcgDIhygNInKg0IjdgZIgBAAIgDAAIgVgCIhOgJIk6gjIzGiJIgBAAIgGAAIgXgDIgPgCIgEAAIgCgCQgIgIgLgIQgIgOgKgBIgCgBIgDgCIAAAAIABgEIABgCQAKgMALgNQASgeAVADIQVByIEeAfIBIAIIATACIAFABIACAAIAAAAQNwBmDDAXIAAgBIQWB2IAAgBIVmCXIAAgBIKKBGIABAAISwB9IAAAAQD6AeBsAPIAAgBIJoBVIDZAxIAAABIMzDyILxD5QAKAiASAGIAEABQgdAggRAAIgGgBg");
	this.shape_687.setTransform(595.6,423.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("rgba(101,156,197,0.6)").s().p("EBKNALlIqhjoIj0hPIocieIgBAAIgGgBIgYgFIhhgWQh8gdidghIgCAAIgGgBIgegEIhNgJIgrgFInhg5IxKiAIgCAAIgFAAIgYgDIhjgLImMgsIkyghIgCAAIgHgBIgdgDIh4gLInagtIquhBIgCAAIgFgBIgXgCIhfgKImAgnIrchLIgCAAIgGgBIgcgDIhygNInJgzIjbgZIgBAAIgEAAIgUgCIhOgJIk4gjIzAiIIgCAAIgFgBIgYgDIgPgBIgDgBIgCgBIgUgPQgJgNgKgCIgCgBIgEgBIAAgBIABgDIABgCQAKgOALgNQARgfAUACIQQByIEeAgIBHAIIASACIAGAAIABAAIABAAQN2BnC1AWIAAgBIQTB1IAAgBIVeCWIAAgBIKJBGIABAAISqB+IAAAAQD0AcBxAPIAAAAIJlBUIAAAAIDYAyIAAABIMvDxILuD4QALAgATAHIAFABQgdAjgRAAIgEgBg");
	this.shape_688.setTransform(597.9,423.5);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("rgba(101,156,197,0.6)").s().p("EBJ4ALjIqdjmIjzhPIoaieIgBAAIgFgBIgYgFIhhgWQh8geibghIgCAAIgHgBIgdgEIhNgJIgqgFIngg5IxEh/IgCAAIgFgBIgYgDIhigKImKgsIkxghIgCAAIgHgBIgdgDIh4gLInYgtIqrhBIgBAAIgFAAIgXgDIhfgJIl9gnIrZhKIgCAAIgHgBIgcgDIhygNInHgzIjZgZIgBAAIgDAAIgUgCIhOgJIk3gjIy6iIIgCAAIgGAAIgYgDIgOgCIgEAAIgCgBIgUgPQgJgMgKgBIgEgBIgDgCIAAAAIABgEIABgCIATgcQARggATACIQLByIEdAfIBGAIIATACIAGABIABAAIABAAQN8BoCoAUIAAgBIQPB0IABAAIVVCVIAAgBIKIBGIABgBISjB+IgBgBQDwAcB2AQIAAAAIJiBTIAAABIDWAyIAAABIMtDwILpD3QANAfAUAGIAGACQgdAlgQAAIgEgBg");
	this.shape_689.setTransform(600.2,423.8);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("rgba(101,156,197,0.6)").s().p("EBJlALiIqbjmIjyhPIoYidIgBAAIgEgBIgYgFIhggWQh9gfiZghIgCAAIgHgBIgdgEIhMgJIgqgFIneg4IxAiAIgBAAIgFAAIgYgDIhigLImIgrIkvghIgDAAIgGgBIgegDIh2gLInWgtIqohBIgBAAIgGAAIgWgCIhfgKIl8gmIrUhKIgDAAIgGgBIgcgDIhxgNInFgzIjYgYIgBAAIgFAAIgTgCIhOgJIk1gjIy1iHIgBAAIgGgBIgXgCIgPgCIgDAAIgDgBQgJgHgMgHIAAAAQgKgLgKgCIgDgBIgEgBIAAgBIABgDIABgCIASgdQAPgiAUACIQGByIEaAfIBHAIIATACIAFABIACAAIAAAAIQeB7IAAAAIAAAAIAAgBIQMBzIAAAAIVOCUIgBgBIKHBGIABgBIScB+IAAgBQDrAbB6ARIAAgBIJfBUIAAAAIDWAzIAAABIMoDvILmD2QAOAdAWAHIAGACQgdAngOAAIgDAAg");
	this.shape_690.setTransform(602.5,424);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("rgba(101,156,197,0.6)").s().p("EBJQALgIqYjkIjxhPIoUicIgBAAIgFgBIgYgGIhfgWQh9gfiXgjIgCAAIgGgBIgegDIhMgJIgqgFInbg4Iw7h/IgBAAIgFAAIgYgDIhhgLImGgrIkvgiIgCAAIgHAAIgdgDIh2gLInUgtIqlhAIgBAAIgFgBIgXgCIhdgJIl6gmIrShJIgCAAIgHgBIgcgDIhwgNInEgzIjXgYIgBAAIgEAAIgTgCIhNgJIk0gjIywiGIgBAAIgGgBIgXgDIgPgBIgDgBIgCgBIgWgMIAAgBQgKgKgLgCIgDAAIgEgCIAAAAIABgEIABgCIARgeQAOgjATACIQBBxIEZAgIBGAIIATACIAGAAIABAAIABAAIQXB7IgBgBIQJBzIABgBIVGCUIgBgBIKFBFIABgBISWB9IgBgBIFkAsIABAAIJcBTIABABIDTAzIABABIMkDuILjD1QAPAbAXAIIAHACQgdAqgOAAIgCgBg");
	this.shape_691.setTransform(604.8,424.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("rgba(101,156,197,0.6)").s().p("EBI8ALfIqVjkIjwhPIoSibIgBAAIgFgBIgXgGIhfgWQh9ggiVgjIgCAAIgGgBIgegDIhLgJIgrgFInYg4Iw2h+IgCAAIgFAAIgXgDIhhgLImEgrIktgiIgCAAIgHgBIgdgDIh2gLInSgsIqihAIgBAAIgEAAIgXgCIhdgKIl4gmIrPhIIgCAAIgHgBIgbgDIhwgMInCgzIjWgYIgBAAIgEAAIgUgCIhLgJIkzgjIyqiGIgCAAIgFAAIgXgDIgPgCIgDAAIgDgBIgWgMQgLgJgLgCIgDgBIgDgBIAAgBIAAgDIABgDQAGgPAKgQQANglASACIP8ByIEYAfIBFAIIATACIAGABIABAAIABAAQOPBqCCAQIgBgBIQFByIABAAQSvCCCQAQIgCgBIKEBFIABAAISPB8IgBgBQDhAaCDASIAAAAIJaBTIAAAAIDUA0IAAABIMgDtILgD0QAQAZAYAIIAIACQgdAtgNAAIgBAAg");
	this.shape_692.setTransform(607.2,424.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("rgba(101,156,197,0.6)").s().p("EBInALdIqRjiIjvhPIoQibIgBAAIgEgBIgYgFIhegXQh9ghiTgjIgCAAIgHgBIgdgDIhLgJIgqgFInWg4Iwyh9IgBAAIgFAAIgXgDIhhgLImBgsIksghIgCAAIgHgBIgdgDIh1gLInRgsIqehAIgBAAIgFAAIgWgCIhdgJIl2gmIrMhHIgCAAIgGgBIgcgDIhwgNInAgyIjUgYIgBAAIgEAAIgTgCIhMgJIkxgjIyliFIgBAAIgGgBIgXgCIgOgCIgEAAIgCgBIgYgLQgKgJgMgCIgDAAIgEgCIABgEIAAgCQAHgRAIgQQANgmASACIP2ByIEXAfIBFAIIATACIAFABIABAAIABAAQOVBqB1APIgBgBIQCBxIACAAQS0CDCCAPIgBgCIKBBFIACAAQQlBwBjAMIgBgCQDcAaCIATIABAAIJWBSIABAAIDRA2IMdDsILdDyQASAZAYAIIAJACQgdAvgMAAIgBAAg");
	this.shape_693.setTransform(609.5,424.8);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("rgba(101,156,197,0.6)").s().p("EBITALbIt8kvIoNibIgBAAIgFgBIgXgFIhdgXQh+giiRgjIgCAAIgGgBIgegDIhKgJIgqgFInUg3Iwth9IgBAAIgFAAIgXgDIhggLImAgsIkqghIgCAAIgHgBIgdgDIh0gLInPgsIqbg/IgBAAIgFgBIgWgCIhdgJIl0glIrIhHIgCAAIgHgBIgbgDIhwgMIm+gzIjTgXIgBAAIgDAAIgUgCIhMgJIkvgjIyfiFIgCAAIgFAAIgXgDIgOgBIgEgBIgCAAIgYgLQgMgIgMgBIgDgBIgEgBIABgEIAAgDIAOgiQAMgnARACIPxBxIEWAgIBFAIIASACIAGAAIABAAIABAAQObBsBoANIgBgCIP+BxIACAAQS8CEBzANIgCgBIKABEIACAAQQpBxBZAKIgBgBQDXAZCMAUIABgBIJTBSIABABIDQA2IMaDqILZDyQATAXAZAIIAKADQgcAxgLAAIgBAAg");
	this.shape_694.setTransform(611.8,425);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("rgba(101,156,197,0.6)").s().p("EBH+ALZIt3kuIoLiaIgBAAIgEgBIgYgFIhcgYQh/giiOgjIgCAAIgHgBIgcgEIhLgJIgqgEInSg4Iwoh8IgBAAIgEAAIgXgDIhggLIl9grIkpgiIgCAAIgHgBIgdgDIh0gLInNgrIqYg/IgBAAIgEgBIgWgCIhdgJIlyglIrFhGIgCAAIgHgBIgbgDIhvgMIm8gyIjSgYIgBAAIgDAAIgUgCIhLgJIkugiIyaiEIgBAAIgGgBIgWgDIgPgBIgDgBIgDAAIgYgJIAAgBQgMgHgMgCIgDAAIgFgBIAAgEIABgDIANgjQALgpARACIPrBxIEUAgIBFAIIATACIAFABIABAAIACAAIP8B3IgCgBIP8BwIABAAQTCCEBlAMIgBgBIJ+BEIACAAQQuBxBNAJIgCgBIFkAtIABAAIJRBRIAAABIDPA2IABAAIMVDqILVDxQAWAVAZAIIAKAEQgbA0gKAAIgBgBg");
	this.shape_695.setTransform(614.1,425.3);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("rgba(101,156,197,0.6)").s().p("EBHqALYIt0kuIoHiZIgCAAIgEgBIgXgFIhcgYIkLhGIgCAAIgHgBIgdgEIhKgJIgpgEInQg3Iwjh8IgBAAIgFAAIgWgDIhfgLIl7gsIkpghIgCAAIgHgBIgcgDIh0gLInLgrIqUg/IgBAAIgFAAIgWgCIhbgKIlwgkIrChFIgCAAIgHgBIgcgDIhugNIm6gxIjRgYIgBAAIgDAAIgUgCIhLgJIksgiIyUiEIgCAAIgFAAIgXgDIgOgCIgEAAIgCAAIgagJQgMgGgNgCIgDgBIgEgBIABgEIAAgCQAEgTAHgSQALgqAQACIPnBxIESAfIBFAIIASACIAGABIABAAIABAAQOoBtBOAKIgCgBIP4BvIACAAIUfCPIgCgBIJ9BEIACAAQQyByBCAIIgBgCIFiAuIABgBIJPBSIDOA3IMSDpILSDvQAXAUAaAJIAMADQgcA3gIAAIgBAAg");
	this.shape_696.setTransform(616.4,425.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("rgba(101,156,197,0.6)").s().p("EBHVALWItvksIoFiYIgBAAIgEgBIgXgGIhbgYQh/gjiLgkIgCAAIgHgBIgcgEIhKgJIgqgEInNg3Iweh7IgBAAIgFAAIgWgDIhfgLIl5gsIkngiIgCAAIgHAAIgcgDIhzgLInKgrIqRg/IgBAAIgEAAIgWgCIhbgJIlugkIq/hFIgCAAIgHgBIgbgDIhugMIm5gyIjPgXIgBAAIgDAAIgUgCIhKgJIkrgiIyPiDIgBAAIgGgBIgWgCIgOgCIgEAAIgCgBIgbgHQgMgGgNgCIgDAAIgFgBIABgEIAAgDQAEgTAGgTQAKgrAQACIPhBxIERAfIBEAIIATACIAFABIACAAIAAAAQOuBtBCAJIgDgCIP1BwIADgBIUWCPIgBgBIJ7BDIACAAQQ2ByA4AHIgCgBIFiAtIABAAIJMBRIAAAAIDNA4IMODoILPDuQAYASAbAJIANAEQgcA5gHAAIgBAAg");
	this.shape_697.setTransform(618.7,425.8);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("rgba(101,156,197,0.6)").s().p("EBHBALVItrksIoDiXIgBAAIgEgBIgXgGIhagYIkIhIIgBAAIgHgBIgdgEIhKgJIgpgEInLg3Iwah6IgBAAIgEAAIgXgDIhdgLIl3gsIkngiIgCAAIgGAAIgdgDIhygLInHgrIqOg/IgBAAIgFAAIgVgCIhbgJIlsgjIq7hEIgCAAIgHgBIgbgDIhugNIm3gxIjOgXIgBAAIgEAAIgTgCIhKgJIkpgiIyJiDIgBAAIgGAAIgWgDIgPgBIgDAAIgCgBIgcgHQgNgEgNgCIgDgBIgEgBIAAgEIAAgCQADgUAGgTQAIgtAQABIPcByIERAfIBDAIIASACIAGABIABAAIABAAQO0BuA0AHIgCgCIPxBvIADAAIUPCNIgCgBIJ6BEIACgBIRnB5IgCgCIFhAuIACAAIJJBQIAAABIDMA4IMKDnILMDtQAaARAcAJIAMAEQgbA8gGAAIAAAAg");
	this.shape_698.setTransform(621.1,426.1);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("rgba(101,156,197,0.6)").s().p("EBGsALTItmkqIoAiXIgBAAIgFgBIgWgFIhagZIkGhKIgCAAIgHgBIgcgDIhKgJIgpgEInJg3IwUh5IgBAAIgEAAIgXgDIhdgLIl1gsIklgiIgCAAIgHgBIgcgDIhygKInFgrIqLg+IgBAAIgEAAIgWgCIhagJIlqgjIq4hEIgCAAIgHgBIgbgDIhtgMIm1gxIjNgXIgBAAIgDAAIgUgCIhJgJIkogiIyEiCIgBAAIgGgBIgWgCIgOgCIgDAAIgDAAIgcgGQgNgEgOgCIgDAAIgFgBIAAgEIABgDQACgUAFgUQAJgvAOACIPYBxIEOAfIBDAIIASACIAGABIABAAIABAAQO7BvAnAGIgDgCIPvBuIACAAIUICNIgDgCIJ4BEIADAAQQ/BzAhAEIgCgBIFhAuIACAAIJGBQIAAAAIPSEfILHDsQAbAPAdAKIAPAEQgcA+gFAAIAAAAg");
	this.shape_699.setTransform(623.4,426.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("rgba(101,156,197,0.6)").s().p("EBGYALSItikpIn+iWIgBAAIgEgBIgWgGIhagaIkEhKIgCAAIgHgBIgcgDIhJgJIgpgEInHg2IwPh5IgBAAIgEAAIgWgDIhdgLIlzgsIkkgiIgCAAIgHgBIgcgDIhxgKInEgrIqHg+IgBAAIgEAAIgWgCIhZgJIlogiIq1hDIgCAAIgHgBIgcgDIhsgMImzgxIjMgXIgBAAIgDAAIgTgCIhKgJIkmghIx+iCIgCAAIgFgBIgWgDIgOgBIgEAAIgCAAIgdgFQgNgEgPgCIgDAAIgFgBIABgEIAAgDQABgVAFgUQAIgwAOACIPSBxIENAfIBDAIIASACIAGABIABAAIABAAQPBBvAaAEIgDgBIPrBtIADAAQTiCIAeAEIgDgBIJ2BDIADAAQRDBzAXAEIgCgCIFgAuIACAAIJDBQIABAAIPMEeILEDsQAdANAeAKIAPAFQgbBBgEAAIAAAAg");
	this.shape_700.setTransform(625.7,426.6);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("rgba(101,156,197,0.6)").s().p("EBGDALQItdkoIn8iWIgBAAIgEgBIgWgFIhZgaIkChLIgCAAIgHgBIgcgEIhJgIIgpgFInEg2IwLh4IgBAAIgEAAIgWgDIhcgLIlxgsIkigiIgCAAIgHgBIgcgDIhxgKInCgrIqEg9IgBAAIgEAAIgVgCIhZgJIlngiIqxhCIgCAAIgHgBIgbgDIhsgMImygxIjKgXIgBAAIgDAAIgUgCIhIgIIklgiIx5iBIgBAAIgGgBIgWgCIgOgCIgDAAIgDAAIgdgEIgdgFIgDAAIgFgBIAAgEIAAgDQABgVAEgVQAHgyAOACIPNBxIEMAfIBCAIIASACIAGABIABAAIABAAQPHBwANADIgDgCIPoBtIADAAQTpCJAPACIgDgBIJ1BDIADAAQRHB0AMACIgDgCIFhAvIACAAIJABPIAAAAIPIEeILBDqQAeAMAeAKIARAFQgbBEgDAAIAAAAg");
	this.shape_701.setTransform(628,426.9);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("rgba(101,156,197,0.6)").s().p("EBFvALOItZknIttkBIgCAAIgHgBIgcgEIhxgNInCg1I8MjUIgCAAIgHgBIgcgDIhxgKIm/grI8HirIgCAAIgHgBIgbgDIhrgMImwgwI6/jEIgCAAIgFAAIgWgDIhYgJQABgaADgZQAGgzANACUAj4AELAAEAACIAAAAIAAAAIgDgCUAjRAD1AAHAACIAAAAIAAAAIgDgCQa9C2AFACIAAAAIAAAAIgCgBIOfB9IABABIPCEdIMOEDQgbBGgBAAIAAAAg");
	this.shape_702.setTransform(630.3,427.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("rgba(101,156,197,0.6)").s().p("EA4DAGmItpkBIgCAAIgGAAIgcgEIhxgNIlFgoIgCAAIgHgBIghgEIhQgKIg7gGIozhDIyViJIgCAAIgHgBIgbgDIhxgKIm8grInugvIgCAAIgHgBIghgDIiKgNIomg1Io2g1IgCAAIgHgBIgbgDIhrgMImtgwIxjh/IgDAAIgGAAIgggEIiFgPImmgwIgBAAIgFAAIgWgDIhXgKQABgZADgZQAFgyANAAIAJABIJZBHIAEAAQZ9DCAOACIgDgBISKB9IAEAAQQ0B2AJACIgDgCIQtBxIADAAQKCBFAIABIgDgBIObB+IABABIO9EcIL1D7IAUAHQgZBCgDADg");
	this.shape_703.setTransform(632.7,427.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("rgba(101,156,197,0.6)").s().p("EA3wAGlItkj/IgCAAIgGgBIgcgEIhvgOIlFgoIgCAAIgGgBIghgEIhQgKIg7gHIovhCIyPiIIgCAAIgHgBIgcgDIhvgLIm6gqInsgvIgCAAIgGgBIghgDIiJgNIokg0Ioyg2IgCAAIgHgBIgbgDIhqgLImrgwIxeh9IgCAAIgHgBIgggFIiEgOImjgwIgBAAIgGgBIgWgCIhWgJQAAgZADgaQAHgxAMABIAJAAIJVBGIAEABIaDDBIgCgBISCB9IAEAAQQlB0AUADIgDgBIQlBwIAEAAQJ4BEAPADIgCgCIOVB/IABABIO4EaILyD6IASAIQgYBBgDADg");
	this.shape_704.setTransform(635,427.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("rgba(101,156,197,0.6)").s().p("EA3dAGjItfj+IgCAAIgHgBIgcgDIhugOIlCgqIgCAAIgGgBIgigEIhPgJIg6gHIoshCIyKiIIgBAAIgHAAIgcgDIhugLIm4gqInpgvIgCAAIgHgBIgggDIiKgOIoggzIovg1IgDAAIgGgBIgagDIhrgMImogvIxYh8IgCAAIgHgBIgfgEIiEgPImhgvIgBAAIgGgBIgVgCIhXgKQABgZADgZQAGgwANgBIAIABIJRBFIAEABIZ8DBIgDgCIR7B8IAEAAQQXBzAdAEIgDgCIQfBwIAEAAQJvBDAXAEIgDgCIG1A6IAAAAIHbBGIABABIOzEZILtD4IASAIQgYBBgDAEg");
	this.shape_705.setTransform(637.4,428);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("rgba(101,156,197,0.6)").s().p("EA3KAGiItbj9IgBAAIgHgBIgcgEIhugOIlAgqIgCAAIgFgBIghgEIhQgKIg5gGIoqhCIyDiHIgCAAIgHgBIgbgCIhugLIm1gqInmgvIgCAAIgGgCIgigDIiIgMIoeg0Iotg1IgBAAIgHgBIgagCIhqgMImmgvIxRh8IgDAAIgGgBIgggDIiDgPImfgvIgCAAIgEgBIgXgCIhUgJIgBAAQABgZADgZQAGgwAMgBIAIABIJPBEIADABIZzDAIgCgBIR0B7IADgBQQKByAmAEIgDgBIQZBvIACAAQJnBCAeAFIgCgCIGyA6IHYBIIAAAAIOvEXILqD3IARAIQgYBBgDAEg");
	this.shape_706.setTransform(639.8,428.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("rgba(101,156,197,0.6)").s().p("EA22AGgItWj7IgBAAIgHgBIgbgEIhtgOIk+gsIgCAAIgGgBIghgDIhOgKIg6gGIonhCIx9iHIgCAAIgGAAIgbgDIhugKImygrInkguIgCAAIgGgBIghgEIiIgNIobgzIopg1IgCAAIgHgBIgagDIhpgLImkguIxMh7IgCAAIgHAAIgfgFIiCgOImdguIgCAAIgFgBIgVgDIhVgJQAAgYADgZQAHgwALgBIAIAAIJLBEIADABIZtC+IgDgBIRsB7IADAAIQrB1IgBgBIQQBuIAEAAQJcBBAlAGIgCgBIGwA5IHWBIIABAAIOpEXILlD2IARAIQgYBBgDADg");
	this.shape_707.setTransform(642.1,428.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("rgba(101,156,197,0.6)").s().p("EA2kAGfItSj6IgCAAIgGgBIgbgEIhsgPIk8gsIgCAAIgGgBIghgEIhNgJIg6gHIokhBIx3iFIgCAAIgGgBIgbgDIhtgKImvgrInjgvIgBAAIgHgBIghgDIiGgNIoZgzIomg0IgCAAIgGgBIgagDIhpgLImhguIxHh5IgCAAIgHgBIgegEIiCgPImaguIgCAAIgGAAIgUgDIhVgJIgBAAQACgZADgZQAFguAMgCIAIAAIJHBEIADAAIZlC+IgCgCIRkB6IADAAIQnB0IgCgBIQKBuIADgBQJTBBAtAHIgCgBIGuA5IAAAAIHSBJIABABIOkEVILiD0IAQAJQgYBAgDADg");
	this.shape_708.setTransform(644.5,428.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("rgba(101,156,197,0.6)").s().p("EA2QAGfItNj6IgBAAIgGgBIgbgEIhsgPQh3gSjCgbIgCAAIgHgBIgggEIhOgJIg5gHIohhAIxxiFIgCAAIgGgBIgbgDIhsgKImtgqInfgwIgCAAIgGgBIghgDIiGgNIoWgyIojg0IgCAAIgGgBIgagDIhogLImfguIxAh4IgCAAIgHgBIgfgEIiBgOImZguIgBAAIgFgBIgWgCIhTgJIgBAAQABgZADgYQAGguALgDIAIgBIJDBEIADABIZeC8IgCgBIRcB5IADAAIQjBzIgCgBIQDBtIADAAQJKBAAzAIIgBgCIGrA5IHQBLIABAAIOfEUILdDzIAQAIQgZBBgCADg");
	this.shape_709.setTransform(646.8,429.1);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("rgba(101,156,197,0.6)").s().p("EA19AGeItIj5IgBAAIgHgBIgagEQgngHhEgIQh3gTjBgbIgCAAIgGgCIgggEIhNgIIg6gHIodhBIxriEIgCAAIgGAAIgbgDIhrgKImrgrIndgvIgCAAIgGAAIgggEIiGgMIoTgzIoggzIgCAAIgGgCIgagCIhngLImcgtIw7h3IgCAAIgHgBIgfgFIiAgOImXguIgBAAIgFAAIgVgDIhTgJIgBAAQABgYADgYQAGguALgDIAHgBIJABEIADAAIZWC7IgCgBIRVB4IADAAIQdBzIgBgBIP8BsIADgBQJBBAA6AJIgBgCIGpA5IHNBLIABABIOaETILZDyIAPAIQgYBAgCADg");
	this.shape_710.setTransform(649.2,429.4);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("rgba(101,156,197,0.6)").s().p("EA1qAGcItDj3IgCAAIgGgBIgbgEIhpgQQh4gTi+gcIgCAAIgGgBIgggEIhNgJIg5gGIobhAIxliEIgBAAIgHAAIgagDIhrgKImogrInagvIgCAAIgGgBIgggDIiFgNIoRgyIodgzIgCAAIgGgBIgZgDIhngLImagtIw1h1IgCAAIgHgBIgfgEIh/gPImUgtIgCAAIgFgBIgVgCIhTgJIAAAAQABgYADgZQAGgsAKgEIAIgBII8BDIACAAIZPC6IgCgBIROB3IACAAIQZBzIgBgBIP2BrIACAAQI3A+BDAKIgCgBIGnA4IAAAAIHKBNIABAAIOVERILVDxIAOAJQgYA/gCADg");
	this.shape_711.setTransform(651.5,429.6);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("rgba(101,156,197,0.6)").s().p("EA1XAGbIs/j3IgBAAIgGAAIgbgFIhpgPQh3gUi8gcIgCAAIgGgBIghgEIhMgJIg4gHIoYg/IxfiDIgCAAIgGAAIgagDIhqgKImlgrInYgvIgCAAIgHgBIgggDIiEgNIoOgyIoagyIgBAAIgHgBIgZgDIhlgLImZgtIwvh1IgCAAIgHgBIgegDIh/gOImSguIgCAAIgFAAIgVgCIhSgJIgBAAQACgZADgYQAFgsALgFIAHAAII5BCIACAAIZGC5IgBgBIRGB3IACAAIQVByIgBgCIPvBrIACgBQIuA/BKAKIgCgBIGlA4IHHBOIABAAIOQEQILRDvIAOAJQgYBAgCACg");
	this.shape_712.setTransform(653.9,429.9);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("rgba(101,156,197,0.6)").s().p("EA1DAGaIs6j1IgBAAIgGgBIgagFIhogQQh3gUi6gcIgCAAIgHgBIgggEIhMgJIg4gHIoVg/IxZiCIgBAAIgHAAIgagDIhpgLImigqInWgvIgCAAIgGgBIgggDIiEgNIoLgxIoXgzIgBAAIgHgBIgZgCIhlgLImWgsIwoh0IgDAAIgGgBIgggEIh+gOImPgtIgCAAIgFgBIgUgCIhSgJIgBAAQABgYADgYQAGgrAKgFIAHgCII1BCIACABIY/C3IgBgBIQ/B2IABAAIQRBxIgBgBIPoBqIACAAQIkA9BRALIAAgBIGhA4IHFBPIABAAIOLEPILNDuIANAJQgYA/gCADg");
	this.shape_713.setTransform(656.3,430.2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("rgba(101,156,197,0.6)").s().p("EA0wAGYIs1j0IgBAAIgGAAIgagFIhngQQh4gVi4gdIgCAAIgGgBIgggDIhMgJIg3gHIoSg/IxTiBIgCAAIgGgBIgagCIhogKImhgrInTgvIgCAAIgGgBIgfgDIiEgNIoIgxIoUgzIgCAAIgGAAIgYgDIhkgLImUgrIwjhzIgCAAIgIgBIgegEIh9gNImPgtIgBAAIgEgBIgWgDIhRgJIgBAAQACgYADgXQAGgrAKgFIAGgCIIyBCIACAAQWTCkCkASIAAAAIAAAAIgBgBIQ3B1IACAAIQMBxIgBgBIPhBpIADgBQIaA9BYAMIgBgBIGgA4IHCBQIAAAAIOHENILJDtIAMAKQgYA+gCADg");
	this.shape_714.setTransform(658.6,430.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("rgba(101,156,197,0.6)").s().p("EA0dAGXIswjzIgCAAIgGgBIgZgEQgngHhAgKQh3gVi2gdIgCAAIgGgBIgggEIhLgJIg4gGIoPg/IxMiAIgCAAIgGAAIgagDIhogLImegqInQgvIgCAAIgGgBIgggDIiCgNIoGgxIoQgyIgCAAIgGgBIgZgCIhkgLImRgrIwehyIgCAAIgHgBIgegDIh9gOImLgtIgBAAIgGAAIgUgDIhRgJIgBAAQACgYADgXQAGgqAJgHIAGgBIIuBBIACAAIYwC1IgBgBIQwB1IABgBIQHBxIgBgBIPcBoIACAAQIRA7BfAOIgBgBIGeA3IAAAAIHABRIOBEMILFDsIAMAJQgYA/gCACg");
	this.shape_715.setTransform(661,430.7);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("rgba(101,156,197,0.6)").s().p("EA0KAGWIssjyIgBAAIgGgBIgagEQgmgIg/gJQh4gWi0gdIgBAAIgHgBIgggEIhKgJIg4gGIoMg+IxGiAIgCAAIgGgBIgZgDIhogKImagqInOgvIgCAAIgHgBIgfgDIiCgNIoDgwIoOgzIgBAAIgGAAIgZgCIhjgLImPgrIwXhxIgCAAIgHgBIgfgDIh8gOImJgtIgCAAIgEAAIgVgCIhQgKIgBAAQABgXADgXQAGgpAJgHIAHgDIIqBCIACAAIYoC0IgBgCIQoB0IACgBIQCBxIgBgBIPVBnIABAAQIJA7BnAOIgBgBIGbA3IAAAAIG8BSIAAABIN8EKILCDqIALAKQgYA+gCACg");
	this.shape_716.setTransform(663.3,431);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("rgba(101,156,197,0.6)").s().p("EAz3AGVIsnjxIgCAAIgFgBIgagEIhlgSQh4gWixgeIgCAAIgGgBIgggDIhKgJIg3gGIoJg+IxBh/IgBAAIgGgBIgZgCIhngLImYgqInMgvIgCAAIgGgBIgggDIiAgNIoBgwIoKgyIgCAAIgGAAIgYgDIhjgLImMgqIwShvIgCAAIgHgBIgegEIh8gOImHgsIgCAAIgEAAIgVgDIhPgJIgBAAIAEgvQAGgoAJgIIAGgCIInBBIABAAQVUCcDNAWIgBgBIQhBzIABAAIP+BvIAAgBIPNBnIACAAQH+A6BvAPIgBgBIGZA3IAAAAIG5BTIABABIN2EJIK+DoIAKALQgXA9gCADg");
	this.shape_717.setTransform(665.7,431.3);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("rgba(101,156,197,0.6)").s().p("EAzkAGUIjKg/IpZixIgBAAIgGgBIgZgEIhkgSQh4gXivgeIgCAAIgGgBIgggEIhJgJIg4gFIoGg+Iw6h+IgCAAIgFAAIgagEIhmgKImVgqInJgwIgCAAIgHgBIgfgCIiAgNIn+gwIoHgyIgCAAIgGAAIgYgDIhigKImKgqIwMhuIgCAAIgHgBIgegEIh7gNImFgtIgBAAIgFAAIgUgCIhPgJIgBAAQABgXADgXQAFgoAJgJIAGgCIIkBAIABAAIYZCyIgBgBIQZBxIACAAIP5BvIAAgBIPGBmIACAAQH1A5B2AQIgBgBIGXA3IAAAAIG2BVIABAAINxEHIK6DoIAJAKQgXA+gCACg");
	this.shape_718.setTransform(668,431.6);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("rgba(101,156,197,0.6)").s().p("EAzRAGSIsejuIgBAAIgGgBIgZgFIhjgSQh5gXisgeIgCAAIgHgBIgfgEIhJgJIg3gGIoDg9Iw0h+IgCAAIgGAAIgZgDIhlgKImTgqInHgwIgCAAIgGAAIgfgDIiAgNIn7gwIoEgxIgCAAIgFAAIgYgDIhigKImHgqIwHhtIgCAAIgHgBIgegEIh6gNImDgsIgBAAIgFAAIgUgDIhOgJIgCAAIAFguQAFgnAJgJIAFgCIIgA/IABAAQUqCXDoAZIgBAAIQSBxIABgBIP1BuIAAAAIPABlIABAAQHsA4B9ASIgBgBIGVA2IGzBVIABABINsEGIK2DmIAJALQgXA9gCACg");
	this.shape_719.setTransform(670.4,431.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("rgba(101,156,197,0.6)").s().p("EAy+AGRIjIg+IpSivIgBAAIgFgBIgZgEQgngJg8gKQh4gZirgdIgCAAIgGgBIgggEIhIgJIg3gGIoAg9Iwuh8IgBAAIgHgBIgYgDIhlgKImQgrInFgvIgCAAIgGgBIgfgCIh/gNIn4gwIoBgwIgCAAIgGAAIgXgEIhhgKImFgoIwBhtIgCAAIgHgBIgegEIh5gNImBgrIgBAAIgFAAIgUgDIhOgJIgBAAIAFguQAEgmAJgKIAFgCIIdA/IAAAAQUUCUD3AaIAAgBIQKByIAAgBIPwBtIAAAAIO6BlIABgBQHjA3CDATIAAgBIGSA1IAAABIGxBXIAAAAINoEFIKyDkIAIALQgXA+gCABg");
	this.shape_720.setTransform(672.8,432.1);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("rgba(101,156,197,0.6)").s().p("EAyrAGQIjHg/IpOitIgBAAIgGgBIgYgFQgngIg8gLQh4gYiogfIgCAAIgHgBIgfgDIhIgJIg2gGIn+g9Iwoh8IgBAAIgGAAIgYgDIhlgKImNgqInCgwIgCAAIgHgBIgegDIh+gMIn2gvIn+gxIgCAAIgFAAIgXgDIhhgKImDgoIv7hsIgBAAIgIgBIgdgDIh5gOIl/grIgBAAIgFAAIgTgCIhOgJIgCAAIAGguQAFglAHgLIAGgDIIYA/IABAAQT/CREDAdIAAgBIQDBwIAAgBIPsBtIAAgBIOzBlIABgBQHZA3CMATIAAgBIGQA2IGtBYIABAAIKbDFIDHA/IKtDjIAIALQgXA9gCACg");
	this.shape_721.setTransform(675.1,432.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("rgba(101,156,197,0.6)").s().p("EAyYAGPIjFg+IpMitIgBAAIgFgBIgYgFIhigTQh5gZimgfIgBAAIgHgBIgegEIhIgIIg2gGIn6g8Iwjh8IgBAAIgGAAIgYgDIhjgKImMgqIm/gwIgCAAIgGAAIgggDIh9gMInzgwIn7gwIgCAAIgFAAIgYgDIhfgKImAgoIv2hqIgCAAIgHgBIgdgEIh4gNIl9grIgBAAIgEAAIgUgDIhNgJIgBAAIAEgtQAFglAJgLIAEgDIIWA/IAAgBQTqCPERAeIAAgBIP6BvIABAAIPnBsIAAgBIOtBkIAAgBQHQA2CTAVIAAgBIGNA1IABAAIGqBZIAAAAINdECIKrDjIAHALQgYA9gBABg");
	this.shape_722.setTransform(677.5,432.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("rgba(101,156,197,0.6)").s().p("EAyFAGOIjEg/IpIirIgBAAIgGgBIgYgFIhggUQh5gZikgfIgBAAIgHgBIgegEIhIgIIg2gHIn3g7Iwch7IgCAAIgFAAIgYgDIhjgLImJgpIm9gwIgCAAIgGgBIgfgCIh9gNInwgvIn4gvIgBAAIgGgBIgXgCIhfgKIl+goIvvhpIgCAAIgHgBIgegDIh3gOIl7gqIgBAAIgEgBIgUgCIhMgJIgCAAIAFgtQAFgkAIgMIAEgDIISA+IAAgBQTVCNEeAfIAAgBIP0BvIABgBIPiBsIAAgCIOlBkIABgBQHHA2CaAVIAAAAIGLA0IABAAIGoBaINYEBIKmDhIAGAMQgXA8gCABg");
	this.shape_723.setTransform(679.8,432.9);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("rgba(101,156,197,0.6)").s().p("EAxyAGNIjEg/IpDiqIgCAAIgFgBIgYgFQgngJg5gLQh5gaihgfIgCAAIgGgBIgfgEIhHgIIg2gHIn0g7IwWh6IgBAAIgGAAIgYgDIhigKImGgqIm6gwIgCAAIgHgBIgegDIh8gLInvgvIn0gwIgBAAIgGAAIgXgDIhegJIl8goIvphoIgCAAIgHgBIgdgDIh3gOIl5gqIgBAAIgEAAIgUgCIhMgJIgBAAIAFgtQAEgjAIgNIAFgEIIOA+IAAAAQS/CJEsAhIABgBIPsBuIAAgBIPeBrIAAgBQLsBPCzAUIAAgBQG9A1CiAWIAAAAIGJA0IAAAAIGlBbIKQDCIDDA+IKjDgIAFALQgXA8gBACg");
	this.shape_724.setTransform(682.2,433.2);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("rgba(101,156,197,0.6)").s().p("EAxfAGLIjCg+IpBipIgBAAIgFgBIgYgFQgogKg3gKQh5gbifggIgCAAIgHAAIgegFIhHgHIg1gHInxg7IwQh5IgCAAIgFAAIgYgDIhhgLImEgqIm4gvIgCAAIgGgBIgfgCIh7gNInsguInxgvIgBAAIgFgBIgXgCIhegJIl5goIvkhnIgCAAIgHgBIgdgDIh2gNIl3grIgBAAIgEAAIgUgCIhLgJIgCAAIAFgtQAFgiAIgNIAEgEIIKA9IAAAAQSqCHE6AiIABAAIPkBtIAAgBIPaBqIAAgBIOYBiIAAgBQG0A0CpAYIAAgBIGHA0IAAAAIGiBcIAAABIKMDAINhEcIAFAMQgXA7gCACg");
	this.shape_725.setTransform(684.5,433.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(101,156,197,0.6)").s().p("EAxMAGKIjBg+Io9ioIgBAAIgGgBIgXgFQgogKg2gLQh6gbidggIgBAAIgHgBIgegEIhGgIIg1gGInvg7IwKh4IgBAAIgFAAIgYgDIhhgLImBgpIm1gwIgCAAIgHgBIgegDIh7gLInpgvInugvIgBAAIgFAAIgXgCIhdgKIl3gnIvehmIgCAAIgHgBIgdgDIh1gNIl0gqIgCAAIgEAAIgTgCIhLgJIgCAAIAFgsQAFgiAHgOIAEgEIIHA9IAAgBIXcCoIABAAQMkBXC5AVIgBgBIPWBqIAAgBIORBhIAAgBQGrAzCwAZIAAgBIGFA0IGfBdIKIDAINcEbIAEALQgXA8gBABg");
	this.shape_726.setTransform(686.9,433.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("rgba(101,156,197,0.6)").s().p("EAw5AGJIjAg+Io6ioIgBAAIgFgBIgXgEIhegVQh5gcibggIgCAAIgGgBIgegEIhGgIIg1gGInrg6IwEh4IgCAAIgFAAIgXgDIhggLIl/gpImzgwIgCAAIgGgBIgegDIh6gLInngvInqguIgCAAIgFgBIgWgCIhdgJIl0gmIvZhmIgCAAIgHgBIgcgDIh1gNIlygpIgCAAIgEAAIgTgDIhKgIIgCAAIAFgsQAFgiAHgPIADgEIIEA9IgBAAQSACBFVAlIABgBIPVBsIAAgBIPRBpIABAAIOKBgIAAgBQGhAyC3AaIAAAAIGDAyIAAABIGcBfIABAAIKEC+INWEZIADAMQgWA8gCAAg");
	this.shape_727.setTransform(689.2,434);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("rgba(101,156,197,0.6)").s().p("EAwlAGIIi+g+Io2imIgBAAIgGgBIgWgGIhdgVQh6gciYghIgCAAIgGgBIgfgDIhFgIIg1gGInog5Iv+h4IgCAAIgEgBIgYgCIhfgLIl8gqImwgvIgCAAIgHgBIgdgDIh6gLInkguInogvIgBAAIgFAAIgWgCIhcgKIlyglIvThkIgBAAIgIgBIgcgEIh0gNIlwgpIgCAAIgEAAIgTgCIhKgJIgBAAIAEgsQAFggAHgPIADgFIIAA8IAAAAQRqB/FjAmIABAAIPNBqIAAgBIPMBpIACgBIODBgIgBgBQGZAyC+AaIABAAIF/AzIABAAIGZBfIAAABIKAC9INSEXIACANQgWA7gCABg");
	this.shape_728.setTransform(691.6,434.3);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("rgba(101,156,197,0.6)").s().p("EAwSAGHIi9g+IozilIgBAAIgFgCIgXgEQgogLg0gLQh5geiWggIgCAAIgHgBIgegEIhEgIIg1gFInmg5Iv4h3IgBAAIgEAAIgYgEIhfgKIl5gpImtgxIgDAAIgGAAIgegDIh4gLIniguInkguIgCAAIgEgBIgXgCIhcgJIlvgmIvNhiIgCAAIgHgBIgcgDIh0gOIltgoIgBAAIgFAAIgSgDIhJgJIgCAAIAEgrQAFggAGgQIAEgEIH8A7IgBAAIXGClIABgBIPHBpIgBgBIPHBpIACgBQL+BRB+AOIAAgBQGOAxDGAcIAAgBIF+AyIABABIGWBgIABAAIJ7C9INMEWIACAMQgWA7gBABg");
	this.shape_729.setTransform(694,434.6);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("rgba(101,156,197,0.6)").s().p("EAtDAFIIovilIgBAAIgFgBIgWgFQgpgKgzgLQh6geiUghIgCAAIgGgBIgegEIhEgIIg1gGInig3Ivyh4IgBAAIgFAAIgXgCIhegLIl2gqImsgvIgCAAIgHgBIgdgDIh4gLInfguInhgtIgBAAIgGgBIgVgCIhbgJIluglIvGhiIgDAAIgGgBIgcgDIhzgNIlsgpIgCAAIgDAAIgTgCIhJgJIgCAAIAGgrQADgfAHgRIADgEIH5A7IgBgBQRAB6F+ApIABAAIO/BpIAAAAIAAAAIgBgBIPDBnIACAAIN1BeIAAgBQGFAwDNAdIAAgBIF8AyIAAABIGUBiIJ5C7INHEUIABANQgWA6gCABg");
	this.shape_730.setTransform(696.3,434.8);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("rgba(101,156,197,0.6)").s().p("EAvsAGEIi7g9IosijIgBAAIgFgBIgWgGIhagWQh7geiRgiIgCAAIgHgBIgdgDIhEgIIg0gGIngg3Ivsh3IgBAAIgFAAIgWgCIhegLIl0gqImpgwIgCAAIgGAAIgegDIh3gLIncgtIneguIgCAAIgEAAIgWgDIhbgJIlqgkIvBhgIgCAAIgHgBIgdgEIhygNIlpgpIgCAAIgDAAIgTgBIhIgKIgCAAIAFgqQAEgfAGgRIADgFIH1A8IgBgBQQrB3GMArIABgBIO3BoIAAAAIAAAAIgBgBIO/BnIABAAINwBdIgBgBQF7AvDVAeIABgBIF5AyIAAABIGRBiIAAABIJ1C6INBESIABAOQgWA6gBAAg");
	this.shape_731.setTransform(698.7,435.1);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("rgba(101,156,197,0.6)").s().p("EAsgAFGIopijIgBAAIgFgBIgWgFIhagWQh6gfiQgiIgBAAIgHgBIgegDIhDgIIgzgGIndg3Ivmh2IgBAAIgFAAIgWgDIhdgKIlxgqImngwIgCAAIgHAAIgdgDIh3gLInZgtInbgtIgBAAIgFgBIgWgCIhZgJIlpgkIu7hgIgCAAIgHgBIgcgDIhygMIlngpIgCAAIgDAAIgTgCIhHgJIgDAAIAGgqQAEgeAGgSIACgFQGyAyBAAJIgBgBQQVB0GZAsIACAAQNBBbBvANIgCgCIO7BnIABgBINpBdIgBgBQFyAvDcAeIABAAIF3AxIAAABIGOBkIJxC5IM8ERIABANQgWA6gCABg");
	this.shape_732.setTransform(701,435.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("rgba(101,156,197,0.6)").s().p("EAsNAFFIoliiIgBAAIgFgBIgVgFIhagXQh5gfiOgiIgBAAIgHgBIgegDIhDgIIgzgHInag2Ivfh1IgCAAIgEAAIgXgCIhcgLIlvgqImjgvIgDAAIgGgCIgegDIh2gKInWgtInYgtIgCAAIgEAAIgWgCIhYgJIlngkIu1hfIgCAAIgHgBIgcgCIhxgNIllgoIgBAAIgEAAIgTgCIhHgJIgCAAIAGgrQAEgcAFgTIACgFQG1AyA5AIIgBgBIWnCfIACAAIOoBnIgBgCIO1BnIACgBINiBcIgBAAQFpAtDjAfIABAAIF0AxIABABIGLBlIJtC4IM3EQIAAANQgWA5gCABg");
	this.shape_733.setTransform(703.4,435.7);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("rgba(101,156,197,0.6)").s().p("EAr7AFEIohihIgCAAIgEgBIgWgFQgogMgwgLQh6ggiMgiIgBAAIgHgBIgdgEIhDgIIgzgGInXg2IvZh0IgBAAIgFAAIgWgDIhcgKIlsgqImhgwIgCAAIgHAAIgdgDIh1gLInUgtInVgsIgCAAIgEAAIgVgDIhZgIIlkgkIuvhdIgCAAIgHgBIgcgDIhwgNIljgoIgCAAIgDAAIgTgCIhGgJIgDAAIAGgqQAEgcAFgTIADgFIHqA5IgCgBIWgCfIACgBIOhBmIgCgBIOxBlIACAAQMRBTBKAJIgBgCQFfAtDrAgIABAAIFyAxIAAABIGJBmIAAAAIJpC3IMyEOIgBAOQgWA5gBAAg");
	this.shape_734.setTransform(705.8,435.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("rgba(101,156,197,0.6)").s().p("EArpAFDIoeigIgBAAIgFgBIgVgFIhYgYQh6ggiJgiIgCAAIgHgBIgdgEIhCgIIgzgGInUg1IvTh0IgBAAIgFAAIgWgDIhbgKIlpgqImfgwIgCAAIgHAAIgdgDIh1gLInRgsInSgtIgBAAIgEAAIgVgCIhYgIIligjIuphdIgCAAIgHgBIgcgDIhwgMIlhgoIgBAAIgDAAIgTgCIhGgJIgCAAIAFgpQAEgcAFgUIACgGIHnA6IgCgBQPWBsHCAxIACAAQNPBcBLAJIgCgBIOsBkIACAAINVBbIgCgBQFXAsDxAhIACAAIFvAxIABAAIGFBnIJmC2IMsENIgBANQgWA6gBAAg");
	this.shape_735.setTransform(708.2,436.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("rgba(101,156,197,0.6)").s().p("EArXAFBIobieIgBAAIgEgBIgVgFIhXgYQh7ghiHgiIgCAAIgGgBIgegFIhBgHIgzgGInQg1IvOhzIgBAAIgEAAIgXgDIhagLIlmgpImdgwIgCAAIgHgBIgdgDIh0gKInOgsInPgsIgBAAIgEAAIgVgCIhXgIIlfgkIulhaIgCAAIgHgBIgbgEIhvgMIlfgnIgBAAIgEAAIgSgDIhFgIIgDAAIAGgpQAEgbAFgVIABgGIHjA5IgBgBIWQCcIACAAIOSBkIgCgBIOoBkIACAAQMZBUA1AGIgCgCQFNAsD5AiIACAAIFtAxIAAAAIGDBoIJiC1IMnELIgDAOQgVA5gBAAg");
	this.shape_736.setTransform(710.6,436.5);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("rgba(101,156,197,0.6)").s().p("EArEAFBIoXieIgBAAIgEgBIgVgGIhWgXQh7giiEgjIgCAAIgHgBIgdgEIhBgHIgygGInPg1IvHhyIgBAAIgEAAIgWgDIhZgKIllgqImagwIgCAAIgHAAIgdgDIhygLInNgsInLgrIgBAAIgEgBIgWgCIhWgIIldgiIuehaIgCAAIgHgBIgcgEIhtgMIldgnIgCAAIgDAAIgSgCIhFgJIgCAAIAFgpIAIgvIACgGIHfA4IgCgBIWKCbIACAAIOKBjIgCgBIOjBjIADAAQMdBVAqAFIgCgBQFDAqEAAjIACAAIFsAwIAAABIF/BpIABAAIJdC0IMjEKIgEAOQgVA4gBAAg");
	this.shape_737.setTransform(713,436.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("rgba(101,156,197,0.6)").s().p("EAqzAE/IoVicIgBAAIgEgBIgUgGIhWgYIj9hFIgCAAIgGgCIgdgDIhBgIIgygFInLg0IvBhyIgCAAIgEAAIgVgDIhZgLIligpImYgwIgCAAIgGgBIgdgDIhygKInKgsInIgrIgBAAIgFAAIgUgCIhWgJIlaghIuZhaIgCAAIgHgBIgbgCIhugMIlagoIgCAAIgDAAIgSgCIhEgIIgDAAIAGgpQADgaAFgVIABgGQHHA1AWADIgDgBIWBCZIADAAQNdBeAlAFIgCgBIOfBiIADAAINABZIgCgCIJBBOIACAAIFpAxIAAAAIF+BqIJZCzIMdEIIgDAOQgWA4gBAAg");
	this.shape_738.setTransform(715.3,437);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("rgba(101,156,197,0.6)").s().p("EA4FAJpItlkrIoQibIgBAAIgFgBIgUgGIhVgYIj7hHIgBAAIgHgBIgdgDIhAgIIgygFInIg1Iu7hxIgBAAIgFAAIgVgCIhYgLIlfgpImVgwIgCAAIgHgBIgdgDIhygKInGgrInGgrIgBAAIgEAAIgUgCIhWgJIlYghIuShYIgCAAIgHgBIgbgDIhtgMIlZgnIgBAAIgDAAIgSgCIhEgIIgDAAIAGgpIAIgvIABgHQHKA2APACIgDgBIV6CYIACAAQNiBeAaAEIgDgBIOaBiIADAAQMkBVAWADIgDgBIJABOIACAAIFmAxIABAAIPQEcIMYEGIgEAPQgWA4gBAAIAAAAg");
	this.shape_739.setTransform(717.7,437.3);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("rgba(101,156,197,0.6)").s().p("EA3tAJmItfkpIoNiaIgBAAIgEgBIgVgGIhTgZIj6hHIgBAAIgHgBIgdgEIhAgHIgwgGInGg0Iu1hwIgBAAIgEAAIgVgCIhYgKIlcgqImTgwIgCAAIgHAAIgcgEIhxgKInFgrInCgrIgBAAIgDAAIgVgCIhVgIIlWghIuMhXIgCAAIgHgBIgcgDIhsgMIlWgnIgBAAIgDAAIgSgCIhEgIIgCAAIAGgoIAHgvIABgHQHOA1AIADIgEgCIVyCXIAEAAQNmBfANACIgDgBIOWBiIADAAQMnBVAMACIgCgCII9BPIACAAIFkAxIAAABIPKEbIMSEFIgEAOQgVA4gBAAIgBAAg");
	this.shape_740.setTransform(720.1,437.6);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("rgba(101,156,197,0.6)").s().p("EA3VAJjItZknIttkBIgCAAIgGgBIgdgEIhxgNInCgzI8KjWIgCAAIgHgBIgcgDIhwgKInCgrI8HirIgBAAIgIgBIgbgDIhrgMImwgwIAOheQHMA1AFACIAAAAIAAAAIgDgCUAjTAD1AAHAACIAAAAIAAAAIgDgCQa7C2AFACIABAAIgBAAIgCgBIOgB/IAAABIPDEbIMNEDQgaBGgBAAIgBAAg");
	this.shape_741.setTransform(722.5,437.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("rgba(101,156,197,0.6)").s().p("EA29AJgItTklItokAIgBAAIgHgBIgcgEIhwgNIm/g0IgdgEIgCAAIgHgBIgkgEIiWgSIpZhHIvFhzIgCAAIgHAAIgcgDIhvgLIm/gqItphUIgCAAIgHgBIgkgDIiTgOIpRg4IiAgNIgCAAIgHgBIgbgDIhrgLImtgwIAOheIAJABQHBA0AFACIAAAAIAAAAIgDgCILIBNIAEAAQXzCmALACIgCgCIMSBTIAEAAQOVBjAKACIgCgCIOYCBIABAAIO8EaILWDxIAxARIgSAwQgJAWgBAAIAAgBg");
	this.shape_742.setTransform(724.9,438.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("rgba(101,156,197,0.6)").s().p("EA2lAJdItOkjIthj+IgCAAIgHgBIgcgEIhugNIm8g2IgdgDIgCAAIgHgBIgkgEIiVgSIpVhHIu+hyIgCAAIgHgBIgcgDIhugKIm7gqItkhUIgCAAIgHgBIgkgDIiSgNIpNg5IiAgMIgBAAIgHgBIgbgDIhqgMImqgvIAOhdIAJABIHDA1IgDgBILDBMIADAAQXfCjAXAEIgDgCIMMBSIAEAAQOGBhAUAEIgCgBIOSCBIABAAIO1EYILRDwIAwASIgTAvQgIAVgBAAIAAgBg");
	this.shape_743.setTransform(727.3,438.4);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("rgba(101,156,197,0.6)").s().p("EA2NAJbItJkhItbj9IgBAAIgHgBIgcgEIhtgOIm4g2IgdgEIgDAAIgGgBIgkgEIiUgSIpShGIu3hxIgCAAIgHgBIgbgDIhugKIm4gqItehTIgCAAIgHgBIgjgDIiSgOIpJg4Ih/gMIgCAAIgGgBIgbgDIhogMImngvIANhcIAIABIHBA0IgCgBIK9BMIADAAQXLChAhAEIgDgBIMGBRIADAAQN5BgAeAFIgDgBIOMCBIAAAAIOvEYILNDuIAuASIgSAvQgJAUgBAAIAAAAg");
	this.shape_744.setTransform(729.7,438.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("rgba(101,156,197,0.6)").s().p("EA10AJYItCkfItWj8IgBAAIgHgBIgbgDIhtgOQiXgVkdgjIgdgEIgCAAIgHgBIgkgEIiSgRIpOhGIuxhxIgCAAIgHAAIgbgDIhtgKIm1gqItYhTIgCAAIgHgBIgjgDIiRgOIpFg3Ih9gNIgCAAIgHAAIgagDIhogMImkguIANhcIAJAAIG9A1IgCgCIK4BMIADgBIXjClIgDgBIL/BRIAEgBQNqBfAnAGIgCgBIDnAgIABAAIKdBiIAAAAIOpEWILHDsIAsATIgSAvQgIATgCAAIAAAAg");
	this.shape_745.setTransform(732,438.9);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("rgba(101,156,197,0.6)").s().p("EA1cAJVIs9kdItPj6IgBAAIgHgBIgbgEIhsgOQiXgVkagjIgdgEIgCAAIgGgBIgkgEIiSgRIpKhGIuqhwIgCAAIgHAAIgagDIhtgLImxgqItThSIgCAAIgHgBIgjgDIiQgOIpBg3Ih8gMIgCAAIgGgBIgagDIhpgLImgguIANhbIAIAAIG6AzIgBAAIKzBKIACAAQWkCdA3AHIgDgCIL5BRIADgBQNcBeAwAHIgCgBIN/CDIOjEVILBDqQAVALAWAJIgSAvQgIARgCAAIAAAAg");
	this.shape_746.setTransform(734.4,439.1);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("rgba(101,156,197,0.6)").s().p("EA1EAJSIs3kbItKj5IgBAAIgHgBIgbgDIhrgPQiXgWkWgjIgdgEIgCAAIgHgBIgjgEIiRgRIpFhGIukhuIgCAAIgHgBIgbgDIhrgKImugqItMhTIgDAAIgGgBIgjgDIiPgNIo+g3Ih8gMIgBAAIgHgBIgZgCIhogMImdgtIAOhbIAIAAIG3A0IgCgBIKtBKIADAAQWOCaBCAIIgBgCILyBQIADAAQNNBcA7AJIgDgBIDlAfIKTBlIABAAIOcETIK9DpIApAUIgSAuQgIASgCAAIAAgBg");
	this.shape_747.setTransform(736.8,439.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("rgba(101,156,197,0.6)").s().p("EA0sAJQIsykaItDj3IgCAAIgGgBIgbgEIhqgOQiXgXkTgkIgcgEIgCAAIgHgBIgjgEIiQgRIpChFIudhuIgCAAIgHAAIgagDIhrgKImrgqItGhTIgCAAIgHgBIgjgDIiOgNIo6g2Ih6gMIgCAAIgGgBIgagDIhmgLImbgtIAOhaIAHAAQGaAvAcAEIgDgBIKoBKIADgBIXGChIgBgBILsBPIADAAQM/BbBEAKIgCgBIDjAfIKOBmIABAAIOVESIK4DnQAUALAUAJIgSAuQgIARgCAAIAAAAg");
	this.shape_748.setTransform(739.2,439.7);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("rgba(101,156,197,0.6)").s().p("EA0TAJNIsskXIs9j2IgBAAIgHgBIgagEIhpgPQiYgYkPgjIgcgEIgCAAIgHgBIgigEIiPgRIo+hFIuXhtIgCAAIgGAAIgagDIhrgKImogqItBhTIgCAAIgHAAIghgDIiOgOIo2g2Ih5gLIgCAAIgGgBIgZgDIhmgLImYgtIAOhZIAHAAQGUAuAfAFIgCgCIKiBJIADAAIW9CgIgCgBILmBOIADAAQMxBaBNALIgCgBIDiAfIKJBnIAAABIOQEPIKzDmIAmAVIgSAtQgIAQgCAAIgBAAg");
	this.shape_749.setTransform(741.6,439.9);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("rgba(101,156,197,0.6)").s().p("EAz7AJKIsmkVIs4j0IgCAAIgGgBIgZgEIhpgPQiXgZkMgkIgcgEIgCAAIgHgBIgjgEIiNgRIo6hEIuQhsIgCAAIgGAAIgagDIhqgLImkgpIs7hSIgDAAIgGgBIgigDIiNgOIoyg1Ih5gMIgBAAIgGAAIgZgDIhlgLImUgsIANhZIAHAAIGwAyIgCgBIKcBIIADAAIW1CfIgCgBILfBNIADAAQMiBZBXAMIgBgBIDfAfIKFBpIABAAIOHEOIKwDkQARALATAKIgSAtQgIAPgDAAIAAAAg");
	this.shape_750.setTransform(744,440.2);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("rgba(101,156,197,0.6)").s().p("EAzjAJIIshkUIsxjyIgCAAIgGgBIgagEQgmgHhBgJQiYgZkIglIgbgEIgCAAIgHgBIgjgEIiMgQIo2hDIuLhsIgBAAIgGgBIgagCIhpgLImhgpIs1hSIgCAAIgHgBIgigDIiLgNIovg2Ih3gLIgCAAIgGgBIgZgCIhkgLImRgsIAAAAIANhYIAHgBIGtAyIgCgBIKYBIIACAAIWrCdIgBgBILZBOIACgBQMUBXBhAOIgCgBIDfAfIAAAAIJ/BqIAAAAIOCEMIKqDjIAiAWIgRAsQgIAPgDAAIAAAAg");
	this.shape_751.setTransform(746.3,440.4);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("rgba(101,156,197,0.6)").s().p("EAzLAJFIsbkSIssjxIgCAAIgGgBIgZgEQgmgHhBgJQiXgakFglIgbgEIgCAAIgHgBIgigEIiMgQIoxhDIuFhrIgCAAIgFAAIgZgDIhpgKImegqIsvhSIgCAAIgHgBIgigDIiKgNIorg1Ih2gLIgCAAIgFAAIgagDIhjgLImNgrIgBAAIANhXIAHgBIGqAxIgCgBIKSBHIADAAIWiCdIgCgBILTBMIACAAQMGBWBqAPIgBgBIDdAeIAAABIJ5BrIABAAIN7EKIKlDhQARAMAQALIgRAsQgIAOgDAAIAAAAg");
	this.shape_752.setTransform(748.7,440.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("rgba(101,156,197,0.6)").s().p("EAyyAJCIsVkPIsmjwIgBAAIgGgBIgZgEIhmgQQiYgbkAglIgcgEIgBAAIgHgBIgigEIiLgQIouhCIt+hrIgBAAIgGAAIgZgDIhngKImbgpIsqhSIgCAAIgHgBIgigDIiJgNIong0Ih1gMIgCAAIgFAAIgZgDIhigLImLgqIgBAAIANhXIAHgBIGnAxIgBgBIKNBHIABgBIWZCcIgBgBILMBMIACgBQL4BVB0AQIgCgBIDbAfIABAAIJ1BsIAAABIN1EIIKgDfQAPANAQAKIgRAsQgIANgDAAIgBAAg");
	this.shape_753.setTransform(751.1,440.9);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("rgba(101,156,197,0.6)").s().p("EAyaAI/IsPkNIsgjvIgCAAIgFgBIgagEIhkgQQiZgbj8gmIgbgEIgCAAIgHgBIgigEIiKgQIoqhCIt3hpIgCAAIgFgBIgZgCIhmgLImYgpIskhSIgCAAIgHAAIghgDIiJgNIojg0Ih0gLIgCAAIgFgBIgZgDIhhgKImIgrIgBAAIANhWIAHgBIGkAxIgBgBIKHBGIACAAIWPCaIgBgBILGBLIACAAQLqBTB9ASIgBgBIDZAeIJwBuIABAAINuEHIKbDeQAPANAPAKIgRAsQgIANgEAAIAAgBg");
	this.shape_754.setTransform(753.5,441.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("rgba(101,156,197,0.6)").s().p("EAyBAI9IsJkMIj9hOIodifIgCAAIgFgBIgZgEIhjgQQiZgdj5glIgbgFIgCAAIgHgBIghgDIiKgRIolhBItxhpIgCAAIgFAAIgZgDIhlgKImVgpIsehRIgCAAIgHgBIghgDIiIgNIofg0IhzgLIgBAAIgGAAIgZgDIhggKImFgqIgBAAIAOhWIAFgBIGjAwIgBgBIKBBGIABgBIWHCaIgBgBIK/BKIADAAQLbBSCGATIgBgBIDYAeIJrBvIABABINoEFIKWDcQANANAOALIgQArQgIAMgEAAIgBAAg");
	this.shape_755.setTransform(755.9,441.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("rgba(101,156,197,0.6)").s().p("EAxpAI6IsDkJIj8hPIoZidIgBAAIgFgBIgZgEIhjgRQiZgdj1gmIgbgEIgBAAIgHgBIgigEIiIgQIoihBItqhoIgCAAIgFAAIgZgDIhkgKImRgpIsZhRIgCAAIgHgBIghgDIiGgNIocgzIhygLIgBAAIgGgBIgYgCIhggLImCgpIAAAAIANhVIAGgBIGeAvIAAAAIJ8BFIABgBIV+CYIgBgBIK5BKIACAAQLMBRCRAUIgBgBIDWAeIAAAAIJmBxINiEEIKRDaQANANANALIgQArQgIALgEAAIgBAAg");
	this.shape_756.setTransform(758.2,441.7);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("rgba(101,156,197,0.6)").s().p("EAxRAI3Ir+kHIj6hOIoUicIgCAAIgFgBIgZgEQgmgIg8gJQiYgejygmIgagFIgCAAIgHgBIgigDIiGgQIoehBItkhnIgCAAIgFAAIgYgDIhkgKImOgpIsThRIgCAAIgHgBIghgDIiFgNIoZgzIhwgKIgCAAIgFgBIgYgDIhfgKIl/gpIAAAAIANhUIAFgCIGdAwIgBgBIJ3BFIABgBIVzCXIAAgBIKzBJIABAAQK/BQCaAVIgBAAIDVAdIJhByIAAAAINbECIKNDZQALAOANALIgQAqQgIALgEAAIgBgBg");
	this.shape_757.setTransform(760.6,442);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("rgba(101,156,197,0.6)").s().p("EAw4AI1Ir4kGIj4hNIoQibIgBAAIgGgBIgYgFQgmgHg7gKQiZgejugnIgagEIgCAAIgHgBIghgEIiGgQIoahAItdhmIgBAAIgGgBIgYgCIhjgKImLgpIsMhRIgCAAIgHgBIgigDIiEgMIoVgzIhvgLIgBAAIgGAAIgXgDIhfgKIl7goIgBAAIAMhUIAGgCIGaAvIgBgBIJyBEIABAAIVrCWIgBgBIKsBJIABgBQKwBOCkAXIAAAAIDSAdIABAAIJbBzIABAAINUEBIKIDXQALAOAMALIgQAqQgIAKgEAAIgCAAg");
	this.shape_758.setTransform(763,442.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("rgba(101,156,197,0.6)").s().p("EAwgAIyIrykDIj2hOIoNiaIgBAAIgFgBIgYgEQgmgIg6gJQiZggjrgmIgagFIgBAAIgHgBIghgEIiFgPIoWhAItXhlIgCAAIgFgBIgYgCIhigLImHgoIsIhRIgCAAIgHgBIgggDIiEgMIoQgzIhvgKIgBAAIgFgBIgYgCIhegKIl4goIgBAAIANhTIAFgCIGXAuIAAAAIJsBDIAAAAIViCUIgBgBIKnBJIABgBQKhBNCuAZIgBgBIDRAdIABAAIJXB0IAAABINOD+IKDDWQAKAOALAMIgQApQgIAJgEAAIgCAAg");
	this.shape_759.setTransform(765.4,442.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("rgba(101,156,197,0.6)").s().p("EAwIAIvIrskBIj0hNIoJiZIgBAAIgGgBIgYgEQglgIg5gKQiaggjngnIgagEIgBAAIgHgBIgggEIiFgQIoSg/ItQhlIgCAAIgEAAIgZgCIhhgLImEgoIsBhRIgCAAIgHgBIghgDIiCgMIoOgyIhtgKIgBAAIgFgBIgXgCIhdgKIl2goIgBAAIANhSIAFgCIGUAuIAAgBIJmBDIABgBIVYCUIAAgBIKgBIIABgBQKTBMC3AaIAAgBIDQAdIAAAAIJSB2INHD9IJ+DUQAKAOAJAMIgQApQgHAIgEAAIgCAAg");
	this.shape_760.setTransform(767.8,442.7);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("rgba(101,156,197,0.6)").s().p("EAvwAItIrokAIjyhMIoEiYIgBAAIgFgBIgXgEIhfgTQiaggjignIgagFIgCAAIgHgBIghgEIiCgPIoPg/ItJhkIgCAAIgFAAIgXgDIhggKImCgoIr8hRIgBAAIgHgBIghgDIiBgMIoKgxIhsgLIgBAAIgGAAIgWgDIhcgJIlzgnIgBAAIANhSIAFgDIGSAuIgBgBIJiBDIAAgBIVPCTIgBgBIKaBHIABgBQKFBLDAAbIAAgBIDOAdIABAAIJMB3IAAAAIIlCjIEdBYIJ4DSQAJAQAJALIgQApQgHAIgFAAIgBAAg");
	this.shape_761.setTransform(770.2,443);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("rgba(101,156,197,0.6)").s().p("EAvYAIqIrij+IjwhMIoAiXIgCAAIgFgBIgXgEIhdgTQiaghjfgnIgagFIgCAAIgHgBIgggEIiCgPIoKg+ItDhkIgCAAIgFAAIgXgCIhfgKIl/gpIr1hQIgCAAIgHgBIgggDIiBgMIoGgxIhrgKIgBAAIgFgBIgXgCIhbgKIlwgnIAAAAIAMhRIAFgCIGPAtIgBgBIJcBCIABgBIVFCSIAAgBIKTBGIABAAQJ3BJDJAcIAAAAIDNAcIJIB5IAAAAIIhChIEaBYIJ0DRQAIAPAIAMIgQApQgHAHgFAAIgBAAg");
	this.shape_762.setTransform(772.5,443.3);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("rgba(101,156,197,0.6)").s().p("EAu/AInIrbj7IjvhMIn8iWIgBAAIgFgBIgXgEIhdgTQiZgijcgnIgagFIgBAAIgHgBIgggEIiBgPIoGg+Is+hiIgBAAIgEAAIgYgDIhegKIl7goIrwhRIgCAAIgHAAIgggDIiAgNIoCgwIhqgKIgBAAIgFgBIgXgCIhagKIlsgmIgBAAIANhQIAEgDIGMAtIAAgBIJWBCIABgBIU8CQIAAgBIKMBGIABgBQJoBJDUAdIAAgBIDLAdIJDB5IAAABIIdCgIEYBXIJvDPQAGAQAIAMIgPAoQgIAGgEAAIgDAAg");
	this.shape_763.setTransform(774.9,443.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("rgba(101,156,197,0.6)").s().p("EAunAIkIrWj5IjshMIn5iUIgBAAIgEgBIgXgFIhcgTQiagijYgoIgZgFIgCAAIgHgBIgfgEIiBgPIoCg9Is2hiIgCAAIgEAAIgXgDIhegKIl4goIrqhQIgCAAIgHgBIgfgDIiAgMIn9gwIhqgKIgBAAIgFgBIgWgCIhagJIlpgmIgBAAIAMhQIAFgDIGJAtIAAgBIJRBBIAAgBIUzCPIAAgBIKHBGIAAgBQJaBHDdAfIAAgBIDKAcIAAAAII+B7IIZCfIEVBXIJqDOQAGAQAHAMQgMAhgEAHQgGAGgFAAIgDgBg");
	this.shape_764.setTransform(777.3,443.8);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("rgba(101,156,197,0.6)").s().p("EAuPAIiIrRj4IjqhLIn0iTIgCAAIgEgBIgXgFQgmgJg0gKQibgkjUgoIgZgFIgCAAIgHgBIgfgEIh/gPIn+g8IsxhhIgBAAIgFAAIgWgDIhdgKIl1goIrkhQIgCAAIgHgBIgfgDIh/gMIn6gwIhogJIgBAAIgFgBIgWgCIhZgJIlmgmIgBAAIAMhPIAEgDIGHAsIAAgBIJMBBIAAgBIUpCOIAAgBIKBBFIAAgBQJMBGDmAgIABgBIDIAcIAAAAII4B8IABABIIUCdIETBXIJmDMQAFAQAGANIgQAnQgHAFgFAAIgCAAg");
	this.shape_765.setTransform(779.7,444);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("rgba(101,156,197,0.6)").s().p("EAt3AIfIrLj2IjphLInwiSIgBAAIgEgBIgXgEQgmgJg0gLQiagkjRgoIgZgFIgBAAIgHgBIgfgEIh+gPIn7g8IsqhgIgBAAIgFgBIgVgCIhdgKIlxgoIrfhQIgCAAIgHgBIgfgDIh9gLIn2gwIhogKIgBAAIgEAAIgWgCIhZgKIljgkIgBAAIAMhPIAFgDIGEArIAAAAIJGBAIAAgBIUgCMIAAAAIJ7BEIgBgBQI9BEDxAiIAAgBIDHAcIAAAAIIzB+IIRCcIEQBXIJhDKQAEAQAGANIgQAnQgGAEgFAAIgDAAg");
	this.shape_766.setTransform(782.1,444.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("rgba(101,156,197,0.6)").s().p("EAteAIcIrFjzIjmhLIntiRIgBAAIgEgBIgWgEQgmgKgzgKQibgljNgpIgYgFIgCAAIgHgBIgfgEIh9gOIn2g8IskhgIgBAAIgEAAIgWgCIhcgKIlugoIrZhQIgCAAIgHgBIgfgDIh8gLInzgwIhlgJIgCAAIgEAAIgWgDIhYgJIlggkIAAAAIAMhOIADgEIGCAsIAAgBIJBA/IAAAAIAAAAIgBgBIUXCMIABAAIJ0BDIgBgBQIvBDD6AjIABgBIDEAcIABAAIIuB/IAAAAIINCbINqEfQADARAEANIgPAmQgGAEgFAAIgEgBg");
	this.shape_767.setTransform(784.4,444.5);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("rgba(101,156,197,0.6)").s().p("EAtGAIZIq/jyIjlhKInoiQIgCAAIgEgBIgWgEQgmgKgygKQiagmjKgpIgYgFIgCAAIgHgBIgfgEIh8gOInyg8IsdheIgBAAIgEAAIgWgDIhbgKIlrgoIrThPIgCAAIgHgBIgegDIh8gMInvgvIhlgJIgBAAIgEAAIgWgDIhXgIIldgkIAAAAIAMhNIADgEIF/ArIAAgBII7A/IAAgBIUOCKIAAAAIJuBCIgBgBQIhBDEDAkIABgBIDDAbIAAABIIqCAIAAAAIIICaINjEcQACASAEANIgPAmQgGADgFAAIgEgBg");
	this.shape_768.setTransform(786.8,444.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("rgba(101,156,197,0.6)").s().p("EAsuAIXIudk6InkiOIgBAAIgEgBIgWgFIhXgUQibgnjFgpIgYgFIgCAAIgHgBIgfgEIh7gOInug7IsXheIgBAAIgEAAIgWgCIhZgLIlognIrOhQIgCAAIgHAAIgegDIh7gMInrguIhjgKIgCAAIgEAAIgVgCIhXgJIlZgjIgBAAIAMhNIADgEIF8AqIAAAAQHaAzBcALIgBgBIUFCJIABAAIJnBCIgBgBQITBBENAlIAAAAIDCAbIAAAAIIlCBIAAABIIDCYINdEaQABASADANIgPAmQgGACgEAAIgFAAg");
	this.shape_769.setTransform(789.2,445);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("rgba(101,156,197,0.6)").s().p("EAsVAIUIuUk4InhiNIgBAAIgEgBIgVgFIhWgUQibgnjCgqIgYgFIgCAAIgHgBIgegEIh7gOInqg7IsQhdIgBAAIgEAAIgVgCIhZgKIllgoIrIhPIgCAAIgHgBIgegDIh6gLInnguIhigKIgCAAIgEAAIgVgCIhVgJIlXgiIgBAAIAMhNIADgEIF5AqIABAAIIwA9IAAAAIAAAAIgBgBIT8CJIAAgBIJhBBIgBgBQIFBAEWAnIABgBIDAAbIAAAAIIgCDIH/CYINVEYQABASACANIgPAmQgFACgFAAIgGgBg");
	this.shape_770.setTransform(791.6,445.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("rgba(101,156,197,0.6)").s().p("EAr9AIRIuNk1InciMIgBAAIgEgBIgWgFIhVgVQibgoi+gqIgYgFIgBAAIgIgBIgdgEIh6gOInng5IsJhdIgBAAIgEAAIgVgCIhYgKIlhgoIrDhPIgBAAIgIgBIgdgDIh5gLInjguIhigJIgBAAIgFAAIgUgCIhVgJIlTgiIgBAAIALhMIADgEIF2AqIABgBIIsA9IgCgBITyCHIABAAIJaBBIgBgCQH2A/EgAoIABgBIC/AbIAAAAIIaCEIAAABIH8CWINOEWIABAgIgPAlQgFABgEAAIgHgBg");
	this.shape_771.setTransform(794,445.6);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("rgba(101,156,197,0.6)").s().p("EArkAIOIuEkzInZiLIgBAAIgEgBIgVgEIhUgVQicgpi6gqIgYgGIgBAAIgHgBIgfgDIh4gOInig5IsDhcIgCAAIgDAAIgVgCIhYgLIlegnIq8hPIgCAAIgHgBIgegDIh3gLInggtIhhgJIgBAAIgEAAIgUgDIhUgIIlRgiIgBAAIAMhLIADgEIFzApIABAAIImA8IgCgBITpCGIABAAIJUBAIgBgCQHoA+EqApIABAAIC8AaIABAAIIVCGIH3CVINHEUIgBAgIgOAlIgIAAIgJgBg");
	this.shape_772.setTransform(796.4,445.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("rgba(101,156,197,0.6)").s().p("EArLAILIt9kxInViJIgBAAIgEgBIgUgFIhTgVQidgqi2gqIgXgGIgCAAIgHgBIgegDIh4gOIndg5Ir9hbIgBAAIgEAAIgVgCIhXgKIlagnIq3hPIgCAAIgHgBIgdgDIh3gLIncgtIhfgJIgCAAIgDAAIgVgCIhTgJIlOghIgBAAIAMhKIADgFIFwApIABAAIIgA7IgBgBITgCFIABAAIJOA/IgCgBQHaA8EzArIABgBIC7AaIAAABIIRCGIAAABIHzCTINAESIgDAhQgNAigCACIgGABQgFAAgFgCg");
	this.shape_773.setTransform(798.9,446.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("rgba(101,156,197,0.6)").s().p("EAqzAIJIt2kvInRiIIgBAAIgEgBIgUgFIhSgWQicgqi0grIgXgFIgBAAIgHgBIgegEIh3gOInag4Ir2haIgBAAIgEAAIgUgCIhWgKIlYgnIqxhPIgCAAIgHgBIgdgDIh1gLInZgtIhegIIgBAAIgEAAIgUgDIhTgIIlKghIgBAAIALhJIADgFIFtAoIACAAIIbA7IgCgBITXCEIABAAQITA4A0AGIgBgBQHKA7E+AsIABgBIC6AaIAAABIILCIIHvCSIM4EQIgEAiIgOAjIgFAAQgGAAgFgBg");
	this.shape_774.setTransform(801.3,446.4);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("rgba(101,156,197,0.6)").s().p("EAqZAIGItuktInNiHIgBAAIgDgBIgUgFIhSgWQicgrivgrIgXgFIgCAAIgHgBIgegEIh1gOInWg3IrwhaIgBAAIgEAAIgUgCIhVgKIlUgnIqrhPIgCAAIgHAAIgdgDIh1gLInVgtIhdgIIgBAAIgEAAIgUgCIhRgIIlIghIgBAAIAMhJIACgFIFrAoIABAAQHrA1ArAGIgCgCITNCDIABAAQIWA4ArAGIgBgBQG8A5FHAtIABAAIC4AaIABAAIIGCJIAAABIHrCRIMxEOIgGAiQgNAhgBACIgDAAQgHAAgHgCg");
	this.shape_775.setTransform(803.8,446.7);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("rgba(101,156,197,0.6)").s().p("EAqAAICItnkqInIiGIgCAAIgDgBIgTgFIhRgWQidgrisgsIgWgFIgBAAIgHgBIgegEIh0gNInSg4IrqhYIgBAAIgEAAIgUgDIhTgKIlSgnIqlhOIgCAAIgHgBIgdgDIh0gLInRgsIhcgIIgBAAIgDAAIgVgCIhRgIIlEggIgBAAIAMhIIACgGIFoAoIABAAQHvA1AiAFIgDgBITECBIACAAII7A9IgCgBQGuA5FRAuIABAAIC2AZIAAABIICCKIHmCQIMqEMIgHAjIgOAjQgJgBgIgDg");
	this.shape_776.setTransform(806.3,447);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("rgba(101,156,197,0.6)").s().p("EApnAH/ItekoInGiEIgBAAIgDgBIgTgFIhQgWQidgtiogrIgXgGIgBAAIgHgBIgdgEIh0gNInOg3IrjhYIgBAAIgDAAIgUgCIhTgKIlPgnIqehOIgCAAIgHgBIgdgDIhzgLInNgrIhbgJIgCAAIgDAAIgTgCIhRgIIlBgfIgBAAIALhIIACgGIFlAoIACAAIILA6IgDgCIS7CAIACAAQIaA5AbAFIgCgCQGfA3FaAvIACAAIC1AaIAAAAIH8CMIAAABIHiCOIMjEKIgJAjIgOAjQgJgBgIgEg");
	this.shape_777.setTransform(808.7,447.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("rgba(101,156,197,0.6)").s().p("EApOAH8ItXklInBiEIgBAAIgDgBIgUgFIhPgWIlBhZIgWgHIgCAAIgHAAIgcgEIhzgNInKg3IrdhXIgBAAIgDAAIgTgCIhTgKIlLgmIqahPIgCAAIgHAAIgcgDIhygLInJgrIhagIIgCAAIgDAAIgTgCIhQgIIk+gfIgBAAIALhIIACgFIFjAnIACgBQHzA3ASADIgDgCISyB/IABAAQIdA6ASADIgDgBQGSA2FjAwIACAAICzAZIABAAIH3COIHeCOIMcEHIgLAjQgNAjgBAAIgRgFg");
	this.shape_778.setTransform(811.2,447.6);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("rgba(101,156,197,0.6)").s().p("EAo1AH5ItPkjIm9iDIgBAAIgEgBIgTgEIhOgXIk9haIgWgGIgCAAIgHgBIgdgEIhxgNInHg2IrVhWIgCAAIgDAAIgTgCIhSgKIlHgnIqUhOIgCAAIgHAAIgcgDIhygLInFgrIhZgIIgBAAIgDAAIgTgCIhPgIIk7geIgBAAIALhHIABgGIFgAnIACAAIIAA4IgDgBISpB+IABAAQIfA6AJACIgCgCILwBnIACAAICyAZIAAAAIHyCPIAAAAIHaCMIMUEGIgMAkQgNAigBAAIgRgGg");
	this.shape_779.setTransform(813.6,447.8);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("rgba(101,156,197,0.6)").s().p("EAotAH8ItZknIttj/IgCAAIgGgBIgdgEIhxgNInCg1I8KjWIgCAAIgHgBIgcgDIhwgKInCgrIn2gvIAMhMQNXBcADACIAAAAIAAAAIgDgCQa9C2AFACIABAAIgBAAIgCgBIOeB/IAAABIPDEbIMNEDQgaBGgBAAIgBAAg");
	this.shape_780.setTransform(816.1,448.1);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("rgba(101,156,197,0.6)").s().p("EAoWAH5ItTkkItkj+IgCAAIgHgBIgcgDIhwgOIm9g2IligqIgDAAIgHgBIgngFIingUIqkhQIochBIgCAAIgHAAIgcgDIhvgLIm+gqInugvIgDAAIAMhMIAhAEQMsBXAFACIgDgCIElAgIAEAAIVCCPIABAAQBGAIACABIAAAAIAAAAIgCgBIOVCAIAAABIO6EYILBDrIBEAXIgRAsIgKAaIAAgBg");
	this.shape_781.setTransform(818.5,448.4);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("rgba(101,156,197,0.6)").s().p("EAn9AH2ItKkhItdj8IgCAAIgGgBIgcgDIhvgOIm5g3IlegrIgDAAIgHgBIgngFIimgUIqdhPIoXhAIgCAAIgHAAIgcgDIhugLIm5gqInqgvIgDAAIAMhKIAfACQMhBXAKACIgDgCIEiAfIAEAAQQxByEGAdIABAAIBIAJIgCgBIOMCCIAAAAIOyEXIK6DoIBCAYIgQArQgKAYgCAAIAAAAg");
	this.shape_782.setTransform(820.8,448.7);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("rgba(101,156,197,0.6)").s().p("EAnlAHzItCkfItWj5IgBAAIgHgBIgbgEIhtgOIm2g3IlagsIgCAAIgHgBIgogFIikgTIqXhPIoSg/IgCAAIgHgBIgbgDIhugKIm0gqInmgvIgDAAIAMhKIAfACQMUBVAPADIgCgCIEfAfIADAAQQhBxELAeIABAAQBFAIADABIgCgBIODCDIABAAIOoEUIK1DnIA/AYIgQArQgLAYgBAAIAAgBg");
	this.shape_783.setTransform(823.2,449);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("rgba(101,156,197,0.6)").s().p("EAnNAHxIs7kdItNj4IgBAAIgHgBIgbgDIhsgOQiVgUkcgkIlWgtIgEAAIgHgBIgngFIiigTIqShOIoMg/IgDAAIgGAAIgbgDIhsgKImxgqInhguIgDAAIALhKIAeACIMdBWIgCgBIEbAeIAEAAQQQBwERAfIABAAQBEAIAEABIgDgBIN7CEIABABIOgESIKuDkIA9AZIgQAqQgKAXgCAAIAAAAg");
	this.shape_784.setTransform(825.6,449.2);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("rgba(101,156,197,0.6)").s().p("EAm1AHtIszkZItGj2IgBAAIgHgBIgbgEIhrgOQiUgVkXgkIlTgtIgEAAIgGgBIgogFIihgTIqLhNIoIg+IgCAAIgGgBIgbgCIhrgLImsgpIndguIgDAAIAMhJIAdABQL9BSAZAEIgCgCIEYAeIADAAQQABuEWAgIABAAQBEAIAEACIgCgBINyCFIAAABIOXEPIKoDiQAdAOAeAMIgQAqQgKAWgCAAIAAgBg");
	this.shape_785.setTransform(827.9,449.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("rgba(101,156,197,0.6)").s().p("EAmdAHrIsskXIs9j0IgCAAIgGgBIgbgEIhqgOQiUgVkTglIlQgtIgDAAIgHgBIgmgFIiggTIqFhNIoDg9IgCAAIgGgBIgbgCIhqgLImogpInYguIgDAAIALhIIAdAAQLyBRAdAEIgDgBIEWAeIADgBQPvBtEcAhIABAAQBCAIAFACIgCgBINpCHIABAAIOPENIKhDgQAcAOAdANIgQApQgKAVgCAAIAAAAg");
	this.shape_786.setTransform(830.3,449.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("rgba(101,156,197,0.6)").s().p("EAmFAHoIskkVIs2jxIgBAAIgHgBIgagEIhpgOQiTgWkQglIlMguIgCAAIgHgBIgngFIiegSIp/hNIn+g8IgCAAIgGgBIgagCIhpgKImkgpInUguIgDAAIAMhIIAbAAIMHBUIgBgBIESAdIADAAQPfBrEhAiIABAAQBBAIAGADIgBgCINgCIIAAABIOGELIKbDdQAbAPAcAMIgQApQgKAUgCAAIAAAAg");
	this.shape_787.setTransform(832.6,450);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("rgba(101,156,197,0.6)").s().p("EAltAHlIsdkSIstjvIgCAAIgGgBIgagEIhngPQiUgWkLglIlJgvIgCAAIgHgBIgmgEIidgTIp6hLIn4g8IgCAAIgGgBIgagCIhogKImggpInPguIgDAAIAMhHIAagBQLbBPAmAFIgCgCIEQAeIACgBQPOBqEnAjIABAAQBAAIAHADIgBgBINXCJIAAAAIN+EJIKVDbQAZAPAbANIgQAoQgJAUgDAAIAAgBg");
	this.shape_788.setTransform(835,450.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("rgba(101,156,197,0.6)").s().p("EAlUAHjIsUkQIsmjtIgCAAIgGgBIgagEQgkgGhCgJQiTgXkHglIlFgvIgCAAIgIgBIglgFIibgSIp0hLIn0g7IgCAAIgFgBIgagCIhngKImbgpInLgtIgDAAIAMhGIAZgCQLPBNArAFIgBgBIEMAdIACAAQO+BoEsAkIABAAQA/AIAIADIgBgBINOCKIABABIN0EGIKPDaQAZAPAYAMIgOAoQgKATgDAAIgBAAg");
	this.shape_789.setTransform(837.4,450.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("rgba(101,156,197,0.6)").s().p("EAk8AHgIsNkMIsejsIgBAAIgGgBIgagEIhlgPQiTgXkDglIlBgwIgDAAIgHgBIglgFIiagSIpuhKInug7IgCAAIgGAAIgZgDIhmgKImXgoInHguIgCAAIALhFIAagCILyBRIgCgBIEKAdIACgBQOtBoEyAkIABAAQA+AJAIADIgBgBINGCLINtEFIKIDXQAXAQAZANIgQAnQgJARgDAAIgBAAg");
	this.shape_790.setTransform(839.7,450.7);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("rgba(101,156,197,0.6)").s().p("EAkkAHeIsFkKIsWjqIgCAAIgFgBIgagEIhkgPQiSgYj/glIk+gxIgCAAIgHgBIgmgEIiYgSIpohKInpg6IgCAAIgGAAIgYgDIhlgKImTgoInDgtIgCAAIALhFIAZgDQK3BLA0AGIgBgBIEGAcIACAAQOdBmE3AlIABAAQA9AJAJADIgBgBIM9CNIABAAINjECIKCDVQAWAQAYANIgPAnQgKARgDAAIgBAAg");
	this.shape_791.setTransform(842.1,451);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("rgba(101,156,197,0.6)").s().p("EAkMAHbIr+kHIsOjoIgBAAIgGgBIgZgEIhjgPQiSgZj7glIk6gxIgCAAIgHgBIglgFIiXgSIpihIInkg6IgCAAIgFAAIgZgDIhkgKImOgoIm+gtIgDAAIALhDIAYgEILkBQIgBgBIEDAcIACgBQONBlE8AmIABAAQA8AJAKADIgBAAIM1CNINbEAIJ7DTQAVARAXANIgPAmQgJAQgEAAIgBAAg");
	this.shape_792.setTransform(844.4,451.2);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("rgba(101,156,197,0.6)").s().p("EAj0AHYIr2kEIsHjmIgBAAIgFgBIgZgEIhigQQiSgZj3glIk2gyIgDAAIgGgBIglgFIiVgRIpchIInfg5IgCAAIgFAAIgZgDIhjgKImKgnIm6gtIgBAAIAKhDIAXgFILdBPIAAAAIAAAAIgBgBIEAAcIACAAQN8BjFCAnIABAAQA7AJALAEIgBgBIMsCPIAAAAINSD9IJ1DRQAUARAWANIgPAmQgKAQgDAAIgBgBg");
	this.shape_793.setTransform(846.8,451.5);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("rgba(101,156,197,0.6)").s().p("EAjcAHWIrukCIl6h0ImFhwIgBAAIgFgBIgZgEIhhgQQiSgajyglIkzgzIgCAAIgHgBIgkgEIiVgSIpWhHInag4IgBAAIgGAAIgXgDIhigKImGgnIm2gtIgBAAIAKhCIAWgFQKUBGBCAIIAAgBID8AbIACAAQNsBiFHAoIABAAQA6AJAMAEIgBgBIMjCQIAAAAINKD7IJvDQQASARAUANIgOAmQgJAOgEAAIgBAAg");
	this.shape_794.setTransform(849.2,451.7);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("rgba(101,156,197,0.6)").s().p("EAjEAHTIrnj/Il2hzImAhvIgBAAIgGgBIgYgEQgkgHg7gJQiSgbjuglIkwgzIgCAAIgIgBIgjgFIiTgRIpQhGInUg4IgCAAIgGgBIgYgCIhggKImBgnImxgsIgCAAIAKhCIAVgGILQBOIgBgBID6AbIABgBQNbBhFNApIABAAQA5AJANAEIgBAAIMaCRIABAAINAD5IJpDNQARARAUAOIgPAlQgJAOgEAAIgBgBg");
	this.shape_795.setTransform(851.5,452);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("rgba(101,156,197,0.6)").s().p("EAisAHRIrfj9IlyhyIl9huIgBAAIgGgBIgXgEIhfgQQiRgbjqgmQiLgYihgbIgCAAIgHgBIgkgFIiRgRIpLhGInPg3IgBAAIgGAAIgXgDIhggJIl9gnImtgsIgBAAIAKhBIAVgHILIBNIgBgBID3AbIABgBQNLBfFSAqIABABQA4AIAOAFIgBgBIMRCTIABAAIM4D2IJiDLQARASARAOIgOAkQgJANgEAAIgBAAg");
	this.shape_796.setTransform(853.9,452.2);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("rgba(101,156,197,0.6)").s().p("EAiUAHOIrYj6IluhxIl4htIgCAAIgFgBIgYgEQgjgHg6gJQiQgcjngmQiJgZifgbIgCAAIgIgBIgjgEIiQgRIpEhFInKg3IgBAAIgGAAIgXgDIhegJIl6gnImogsIgBAAIAKhAIAUgHILABMIAAgBID0AaIABAAQM6BdFXArIACABQA3AIAOAFIgBAAIMKCTIGQB1IGfCAIJcDIQAQATAQANIgOAlQgJALgEAAIgBAAg");
	this.shape_797.setTransform(856.3,452.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("rgba(101,156,197,0.6)").s().p("EAh7AHMIrQj4IlphxIl1hrIgBAAIgFgBIgYgEIhcgRQiRgcjhgmIklg1IgDAAIgHgBIgjgEIiOgRIo+hEInFg2IgCAAIgFAAIgXgDIhdgJIl1gnImkgrIgCAAIALhAIATgIIK6BLIgBgBIDxAbIABgBQMqBcFdAsIABABQA2AIAPAFIAAAAIL/CVIABAAIMnDyIJVDGQAOATAQAOIgOAkQgIALgFAAIgCAAg");
	this.shape_798.setTransform(858.6,452.7);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("rgba(101,156,197,0.6)").s().p("EAhkAHJIrJj1IllhwIlxhqIgCAAIgFgBIgWgEQgkgIg3gJQiRgdjdgmIkig1IgDAAIgHgBIgigEIiNgRIo4hEInAg1IgBAAIgGAAIgWgDIhcgJIlxgmImggsIgCAAIAKg/IATgIIKzBKIAAgBIDuAaIAAgBQMZBbFjAtIAAABQA2AIAQAGIAAgBIL3CWIGIByIGWB+IJQDEQANAUAPAOIgPAjQgIAKgFAAIgBAAg");
	this.shape_799.setTransform(861,452.9);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("rgba(101,156,197,0.6)").s().p("EAhMAHHIrBjzIlihvIlthpIgBAAIgFgBIgXgEIhagRQiQgdjZgnIkeg1IgCAAIgHgBIgjgFIiLgQIozhDIm7g1IgBAAIgFAAIgWgCIhcgJIlsgnImbgrIgBAAIAKg+IARgKIKsBKIAAgBIDqAaIABgBQMJBaFoAuIABAAQA0AJAPAFILwCXIAAAAIGEBxIGSB9IJJDCQAMATANAPIgNAjQgJAJgFAAIgBAAg");
	this.shape_800.setTransform(863.3,453.1);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("rgba(101,156,197,0.6)").s().p("EAg0AHEIq6jwIlehuIlphoIgBAAIgFgBIgWgEQgkgIg1gJQiPgejWgnQiEgaiWgcIgCAAIgHgBIgigEIiKgQIothDIm2g0IgBAAIgFAAIgWgCIhagJIlpgmImWgrIgBAAIAKg+IARgKIKkBJIABgBIDnAZIAAAAQL4BYFuAvIABAAQAzAJAQAGIAAgBILnCYIAAABIGABvIGNB8IJDDAQALAUAMAOIgNAjQgIAIgFAAIgCAAg");
	this.shape_801.setTransform(865.7,453.4);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("rgba(101,156,197,0.6)").s().p("EAgcAHBIqyjtIlahtIllhnIgBAAIgFgBIgWgEIhXgRQiQgfjRgnIkXg3IgCAAIgHgBIgigEIiJgQIonhBImwg0IgBAAIgFAAIgWgCIhZgJIlkgmImSgrIgBAAIAKg9IAQgLIKeBIIAAAAIDkAZIAAgBQLoBXFzAwIABAAQAyAJARAGILeCZIABAAIF7BvIGJB6II8C+QAKAUALAPIgNAiQgIAIgFAAIgCgBg");
	this.shape_802.setTransform(868,453.6);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("rgba(101,156,197,0.6)").s().p("EAgDAG/IqqjrIlWhsIlhhoIgBAAIgFAAIgWgDQgjgIgzgKQiPgfjNgnIkTg3IgCAAIgHgBIgigEIiHgQIohhBImrgzIgCAAIgEAAIgWgCIhYgJIlggmImNgqIgBAAIAJg9IAQgLIKWBHIABgBIDhAZIAAgBQLYBWF4AxIAAAAQAyAJARAGIABAAILVCaIAAABIF4BtIGEB5II2C8QAJAVAKAPIgNAhQgIAHgFAAIgDAAg");
	this.shape_803.setTransform(870.4,453.9);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("rgba(101,156,197,0.6)").s().p("AfrG8IqijoIlShsIlehmIgBAAIgEgBIgWgDIhVgRQiPggjJgnIkPg4IgCAAIgHgBIgigEIiFgPIochBImlgyIgCAAIgEAAIgVgCIhXgJIlcgmImJgqIgBAAIAJg8IAPgMIKPBHIABgBIDeAZIAAgBQLHBUF+AyIAAAAQAxAJASAGIAAAAILOCcIAAAAIFzBsIGAB4IIvC6QAIAVAJAPIgNAhQgHAHgGAAIgDgBg");
	this.shape_804.setTransform(872.8,454.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("rgba(101,156,197,0.6)").s().p("AfTG5IqbjlIlOhrIlZhlIgBAAIgFgBIgVgDIhUgRQiOghjFgnQiAgbiMgdIgCAAIgHgBIghgEIiFgQIoVg/ImggyIgCAAIgEAAIgVgCIhWgJIlXglImFgqIgBAAIAJg7IAOgNIKJBFIABAAIDaAYIAAgBQK3BTGDAyIAAABQAwAJATAHIAAAAILFCcIAAABIFvBqIF7B4IIqC3QAGAWAIAPIgNAgQgHAGgFAAIgEgBg");
	this.shape_805.setTransform(875.1,454.4);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("rgba(101,156,197,0.6)").s().p("Ae7G3IqTjjIlKhqIlVhkIgCAAIgEgBIgVgFIhTgPQiOghjAgoIkJg5IgCAAIgHgBIghgEIiDgPIoPg/ImbgxIgCAAIgEAAIgVgCIhVgJIlTglImAgqIgBAAIAJg6IAOgOIKBBFIABAAIDYAXIgBgBQKmBSGJAzIABABQAuAJAUAHIAAAAIK8CeIAAAAIFrBpIF3B3IIjC2QAFAVAHAQIgNAgQgHAFgFAAIgEgBg");
	this.shape_806.setTransform(877.5,454.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("rgba(101,156,197,0.6)").s().p("AejG0IqLjfIlGhqIlShjIgCAAIgDgBIgVgEIhSgQQiOgii8gnIkGg6IgCAAIgHgBIgfgEIiCgPIoKg+ImWgwIgBAAIgEgBIgVgCIhUgJIlOgkIl8gqIgBAAIAJg6IAMgOIJ7BEIABAAIDUAXIAAgBQKWBRGOA0IAAAAQAtAKAWAHIAAAAIKzCfIAAAAIFnBoIFyB1IIdC0QAEAWAGAQIgNAfQgGAEgGAAIgEgBg");
	this.shape_807.setTransform(879.9,454.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("rgba(101,156,197,0.6)").s().p("AeLGyIqEjdIlChpIlOhiIgBAAIgEgBIgUgEIhQgRQiPgii4gnIkBg7IgDAAIgGgBIgggEIiAgPIoEg9ImRgwIgBAAIgEAAIgVgCIhSgJIlLgkIl3gpIgBAAIAJg5IAMgPIJzBDIACgBIDRAYIgBgBQKGBPGTA1IAAAAQAtAKAWAHIAAAAIKrCgIAAABIFiBmIFuB1IIWCxQADAXAFAPIgMAfQgHADgFAAIgFAAg");
	this.shape_808.setTransform(882.2,455.1);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("rgba(101,156,197,0.6)").s().p("AdzGvIp8jaIk/hoIlJhhIgBAAIgEgBIgUgFIhPgQQiOgji0gnIj+g7IgCAAIgHgBIgggEIh/gPIn9g8ImMgwIgBAAIgEAAIgUgCIhRgJIlHgkIlzgpIgBAAIAJg4IALgQIJsBDIACgBIDOAXIgBgBQJ1BOGZA2IABAAQAqAKAXAHIABABIKhChIABAAIFeBmIFpBzIIRCvQABAXAEAQIgMAfQgGACgFAAIgGgBg");
	this.shape_809.setTransform(884.6,455.3);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("rgba(101,156,197,0.6)").s().p("AdbGsIp1jXIk6hoIlGhfIgBAAIgEgBIgTgFIhPgQQiNgjiwgoIj6g8IgCAAIgHgBIgggEIh9gOIn4g8ImGgvIgBAAIgEAAIgUgCIhQgJIlDgkIlugpIgBAAIAJg3IAKgQIJlBBIACAAIDLAXIgBgCQJkBNGfA3IAAAAQArAKAXAHIABABIKZCiIFaBlINvEfQAAAYADAQIgMAeQgFABgFAAIgHgBg");
	this.shape_810.setTransform(886.9,455.6);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("rgba(101,156,197,0.6)").s().p("AdDGpIptjUIk3hnIlCheIgBAAIgDgBIgTgFIhOgRQiNgkisgnIj2g9IgCAAIgHAAIgggFIh7gOInyg7ImCguIgBAAIgDAAIgUgCIhPgJIk+gjIlrgqIAAAAIAIg2IAKgRIJfBBIABAAIDIAVIgBgBQJUBLGkA5IABAAQAoAKAYAIIABAAIKQCkIABAAIFWBjINkEdQgBAXACAQIgMAdIgJACQgFAAgDgCg");
	this.shape_811.setTransform(889.3,455.9);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("rgba(101,156,197,0.6)").s().p("AcqGnIuYk5Ik+hdIgBAAIgDgBIgTgEIhMgRQiNglingoIj0g9IgCAAIgHgBIgfgDIh6gPInsg6Il8gtIgBAAIgEAAIgTgDIhPgIIk5gkIlmgoIAAAAIAIg2IAJgSIJXBAIACAAIDFAWIgCgBQJEBJGqA5IAAABQAoAJAZAIIABABIKHClIFTBiINYEZQgBAYABAQIgMAeIgHABQgGAAgFgCg");
	this.shape_812.setTransform(891.7,456.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("rgba(101,156,197,0.6)").s().p("AcRGkIuMk1Ik6hcIgBAAIgDgBIgTgFIhLgQQiNgmijgoIjwg9IgBAAIgHgBIgfgEIh5gOInmg6Il3gsIgCAAIgDAAIgSgDIhOgIIk1gjIligpIgBAAIAJg1IAIgSIJQA/IACAAIDDAVIgCgBQIzBIGuA6IABAAIBBATIACAAIJ+CmIFOBhINOEWQgEAZAAAQIgMAdIgEAAQgHAAgGgCg");
	this.shape_813.setTransform(894.2,456.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("rgba(101,156,197,0.6)").s().p("Ab3GhIuAkxIk2hbIgBAAIgEgBIgSgFIhKgRQiLgliggpIjtg+IgBAAIgHgBIgegDIh3gOInhg5IlygsIgBAAIgDAAIgSgDIhNgIIkygjIlcgoIAIg1IAHgTIJJA+IACAAIC/AWIgBgCQIhBHG1A7IABAAIBAATIACABIJ1CnIFKBfINEETIgGAqIgMAcIgCAAQgIAAgIgDg");
	this.shape_814.setTransform(896.7,456.6);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("rgba(101,156,197,0.6)").s().p("AbeGeIt1kuIkxhZIgCAAIgDgBIgSgFIhJgSQiLgmibgoIjqg/IgBAAIgHgBIgegDIh2gOInag5IltgrIgBAAIgEAAIgSgCIhLgIIktgjIlZgoIAJg0IAGgUIJCA+IACgBIC8AWIgCgCQISBGG6A7IAAABIBBATIJvCpIFFBeIM5EQIgIAqIgMAcQgJgBgJgDg");
	this.shape_815.setTransform(899.1,456.9);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("rgba(101,156,197,0.6)").s().p("AbFGbItpkqIkuhZIgBAAIgDgBIgSgFIhIgSQiLgmiXgpIjlg/IgCAAIgHgBIgegDIh0gOInVg3IlngsIgBAAIgDAAIgSgBIhKgJIkpgjIlUgnIgBAAIAJgzIAFgUII7A8IADAAIC4AVIgCgBIPBCAIAAAAIBBATIACABIJkCqIFBBdIMuEMIgKArIgLAbQgKgBgJgDg");
	this.shape_816.setTransform(901.6,457.2);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("rgba(101,156,197,0.6)").s().p("AasGYIteknIkphXIgBAAIgEgBIgRgFIhGgUIkfhOIjhhAIgCAAIgHgBIgegDIhygNInPg3IligrIgBAAIgEAAIgRgCIhKgIIkkgiIlPgoIgBAAIAIgzIAFgUII0A7IADAAIC1AVIgBgBIO1CAIAAAAIBBAUIACABIOYEGIMjEKIgMAqQgLAbAAAAIgTgFg");
	this.shape_817.setTransform(904.1,457.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("rgba(101,156,197,0.6)").s().p("AaTGVItSkkIkmhWIgBAAIgDgBIgSgFIhFgTIkZhPIjfhBIgBAAIgHgBIgdgDIhygNInIg3IlegpIgBAAIgDAAIgRgCIhIgIIkggjIlMgnIAIgyIAEgVIItA7IADAAICyAUIgCgCIOrCAIAAABIBAATIACABIOMEHIMYEGIgOAsIgLAaIgTgGg");
	this.shape_818.setTransform(906.5,457.8);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("rgba(101,156,197,0.6)").s().p("AaMGZItZknItrj/IgCAAIgGgCIgdgDIhxgNInCg1IwXh9IAMhHQLUBMADACIABAAIgBAAIgCgCIOgCAIAAABIPBEaIMNEEQgaBGgBAAIgBAAg");
	this.shape_819.setTransform(909,458.1);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("rgba(101,156,197,0.6)").s().p("AZjGTItCkfItXj7IgCAAIgGgBIgcgEIhsgQIhagNIgDAAIgFgBIgegEIh5gOIjAgXIktgjIrUhWIAGgrIAFgbQAIgCAJABIF3AoIADAAQEeAfAfAGIgBgCIKkBdIAAAAIDmAmIAAABINDD1INdEcIAFACQgZBEgCABIgDgBg");
	this.shape_820.setTransform(912.9,458.5);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("rgba(101,156,197,0.6)").s().p("AMNB3ItCj2IgCAAIgGgBIgagFIhpgTIhXgPIgCAAIgGgBIgdgEIh3gOIi7gWIkngjIrEhUIAFgpIAEgbQAIgFAHABIFuAnIACgBQD9AeA/AJIgBgBIKVBbIDeArIABABIMwDwINJEVIADAEQgYA/gCADIgDABg");
	this.shape_821.setTransform(916.7,458.9);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("rgba(101,156,197,0.6)").s().p("AYXGMIsckSIsvjxIgCgBIgFgBIgZgFQgrgKg6gMIhUgSIgBAAIgHgBIgdgDIh1gOIi2gVIkigjIqzhSIAEgoIAEgaQAGgIAHABIFkAmIAAgBQDdAbBdANIABAAIKFBYIAAABIDYAxIMdDqIM1EPIACAFQgXA8gDAFIgBABIgBAAg");
	this.shape_822.setTransform(920.6,459.3);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("rgba(101,156,197,0.6)").s().p("AKBBbIq0jKIgCgBIgEgBIgYgHIhhgYIhRgUIgCAAIgHgBIgcgDIhzgOIixgVIkcghIqjhQIADgoIAEgZQAFgLAGABIFaAlIgBgBIE5ApIABAAIJ2BXIAAAAIDRA3IMKDkIMhEKIAAAFIgZBAIgCABg");
	this.shape_823.setTransform(924.5,459.7);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("rgba(101,156,197,0.6)").s().p("AXKGEItZknItrj/IgCAAIgHgBIgcgEIhxgNInCg1IqThOQABgUACgTQAEgmAIABIFQAkIAAAAIAAAAIgCgBIOfB/IABABIPAEbIMOEDQgbBGgBAAIAAAAg");
	this.shape_824.setTransform(928.4,460.1);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("rgba(101,156,197,0.6)").s().p("AWlGAItEkgItVj6IgCAAIgGgBIgcgEIhsgQIiigXIgCAAIgGgBIgggEIh8gOIhygOImIguIj8geIADgmQAEgjAHgCIAKgBQEnAhAZAEIgCgCIJXBTIAAAAIEyAxIAAAAIOpEVILwD5IAJAFQgaBEgBABIgBAAg");
	this.shape_825.setTransform(932.1,460.6);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("rgba(101,156,197,0.6)").s().p("AJSBjItBj1IgBAAIgGgBIgagEIhpgSIicgbIgCAAIgGgBIgfgEIh7gOIhugNImAgtIj2geQABgSADgSQAEggAHgFIAIgDQEJAeAxAHIgBgBIJJBRIAAAAIEoA3IOTEPILdDzIAGAGQgYBBgCABIAAABg");
	this.shape_826.setTransform(935.6,461);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("rgba(101,156,197,0.6)").s().p("AJCBmIsrjwIgBAAIgGgBIgZgEQgpgKg8gLIiWgeIgDAAIgGAAIgegFIh4gNIhsgNIl4gsIjvgdIAEgkQAEgcAGgJIAHgDQDsAbBJAKIAAAAII6BOIABABIEfA7IL2DfINPEXIAFAHQgYA/gBACIgBAAg");
	this.shape_827.setTransform(939.3,461.4);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("rgba(101,156,197,0.6)").s().p("AGwA+IqTi/IgBAAIgGgCIgYgFQgqgKg3gMIiRghIgCAAIgHgBIgdgEIh2gNIhogNIlwgsIjqgcIAGgjQAEgYAFgMIAGgFQDNAZBjANIAAgBIIrBNIAAABIEWBBIABABILjDYIM5ERIACAIQgWA7gCAEIgBAAg");
	this.shape_828.setTransform(942.9,461.8);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("rgba(101,156,197,0.6)").s().p("AGjBCIqBi7IgBAAIgFgBIgWgGIhfgZIiKglIgCAAIgHgBIgdgDIhzgNIhmgMIlogrIjkgbIAHgiQAEgVAFgQIADgGIErAmIABAAIIdBLIABAAIENBIILQDUIMjEKIgCAJQgUA4gDAEIgBABg");
	this.shape_829.setTransform(946.5,462.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("rgba(101,156,197,0.6)").s().p("ATwFrItZkmItskAIgBAAIgHgBIgdgDIhwgOInDg1IjdgbIAShNIM1BwIAAABIPBEbIMOEEQgbBGgBgBIAAAAg");
	this.shape_830.setTransform(950.3,462.6);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("rgba(101,156,197,0.6)").s().p("ATPFmItDkfItXj7IgBAAIgHgBIgcgEIhsgPIiRgVIgCAAIgHgBIgegEIh8gOIiEgQIjZgaIAShMIAGAAIH+BGIAAABIEdAtIABAAIOrEWILyD6IAHAEQgZBEgCABIgCgBg");
	this.shape_831.setTransform(953.3,463.1);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("rgba(101,156,197,0.6)").s().p("ASxFjIswkZItCj2IgCAAIgGgBIgagEQgogIhBgKIiNgYIgCAAIgGgBIgegEIh6gOIh/gPIjUgaIgBAAIAThKIAEgBIHzBGIAAAAIEVAyIAAAAIOVEQILiD1IAFAEQgZBCgCACIgCAAg");
	this.shape_832.setTransform(956.3,463.5);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("rgba(101,156,197,0.6)").s().p("ASTFeIsckSIsvjwIgBAAIgFgBIgagFQgpgJg8gLIiIgbIgCAAIgHgBIgdgEIh4gOIh7gOIjPgZIgBAAIAThIIADgCIHnBDIABAAIEMA4IABAAIMEDkINLEVIADAGQgXA+gDADIgBAAIgBAAg");
	this.shape_833.setTransform(959.4,463.9);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("rgba(101,156,197,0.6)").s().p("AR1FaIuHk0IqcjDIgBAAIgFgBIgZgFIhhgXIiEgeIgCAAIgGgBIgegDIh1gOIh4gOIjJgYIgBAAIAThGIACgDIHcBBIAAABIEFA9ILxDeIM3EQIABAGQgWA7gDAFIgBAAIgBAAg");
	this.shape_834.setTransform(962.4,464.3);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("rgba(101,156,197,0.6)").s().p("ADmApIqLi+IgBAAIgFgCIgWgFIhfgZIh/ghIgBAAIgIgBIgcgDIhzgOIh0gNIjFgYIgBAAIAThEIADgFIHOBBIABAAID8BDILfDYIMiEKIgBAGQgVA6gDAFIgBABg");
	this.shape_835.setTransform(965.5,464.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("rgba(101,156,197,0.6)").s().p("AQ4FSItZknItsj/IgBAAIgHgBIgdgEIhwgNIkwgkIAUhHIHDA+IAAABIPBEbIMOEDQgbBGgBAAIAAAAg");
	this.shape_836.setTransform(968.7,465.1);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("rgba(101,156,197,0.6)").s().p("AQZFNItAkeItXj7IgCAAIgHgBIgbgEIhtgPIiKgUIgCAAIgGgBIgegEIh6gOIAUhGIAGAAIGyBDIOsEVIL3D9IAEABQgaBDgBACIgGgBg");
	this.shape_837.setTransform(971.2,465.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("rgba(101,156,197,0.6)").s().p("AQBFKIstkYItEj2IgCAAIgFgBIgagFQgpgHhBgKIiHgXIgBAAIgHgBIgdgEIh4gOIgBAAIAVhDIAFgBICeAWIEJAxIAAAAIMfDtINeEaIACACQgXA/gDAEIgCAAIgDAAg");
	this.shape_838.setTransform(973.7,465.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("rgba(101,156,197,0.6)").s().p("APoFHIsakSIswjxIgBAAIgFgBIgagFQgpgJg9gLIiCgaIgCAAIgHgBIgcgEIh2gNIgBAAIAVhCIAEgCICaAWIECA2IMMDoINLETIABADIgaBBIgEACIgBAAg");
	this.shape_839.setTransform(976.3,466.2);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("rgba(101,156,197,0.6)").s().p("ABLAQIqfjEIgBAAIgFgBIgYgFIhigXIh/gdIgCAAIgGgBIgdgDIh0gOIgBAAIAWhAIADgDICWAVIABABID6A7IL6DiIM2EOIABADIgaBAQgCADgCAAg");
	this.shape_840.setTransform(978.8,466.5);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("rgba(101,156,197,0.6)").s().p("AO4FAItwktIqNi+IgCAAIgEgBIgXgHIhfgZIh7ggIgBAAIgHgBIgdgDIhygNIgBAAIAXg+IACgEICSAUIABABIDyBAIABABILnDcIMiEIIAAADIgYA/QgBABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAIgBAAg");
	this.shape_841.setTransform(981.3,466.9);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("rgba(101,156,197,0.6)").s().p("AOgE9ItaknItrj/IgBAAIgHgCIgdgDIhwgNIAYhBICPAUIAAABIPBEcIMNECQgaBGgBAAIAAAAg");
	this.shape_842.setTransform(983.9,467.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("rgba(101,156,197,0.6)").s().p("AN7E4ItZknItrj/IgCAAIgHgCIgcgDIgogEIAWhAIBIAKIABABIPAEcIMOECQgbBGgBAAIAAAAg");
	this.shape_843.setTransform(987.5,467.8);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("rgba(101,156,197,0.6)").s().p("ANaEzItaknItrj/IgBAAIgHgCQgEAAAOgfIAQgeIAAABIPBEcIMNECQgaBGgBAAIAAAAg");
	this.shape_844.setTransform(990.9,468.3);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("rgba(101,156,197,0.6)").s().p("AM6EqItXknIs4jwIAXg8IOGELIMOECQgbBGgBAAIAAAAg");
	this.shape_845.setTransform(994,469.2);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("rgba(101,156,197,0.6)").s().p("AMYEgItXklIrzjeIAXg8INBD3IMOECQgbBGgBAAIAAAAg");
	this.shape_846.setTransform(997.5,470.2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("rgba(101,156,197,0.6)").s().p("AL2EWItYklIqujKIAXg8IL9DjIMNECQgaBGgBAAIAAAAg");
	this.shape_847.setTransform(1000.9,471.2);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("rgba(101,156,197,0.6)").s().p("ALTELItXkkIpqi1IAYg9IK5DPIMMECQgbBFgBAAIAAAAg");
	this.shape_848.setTransform(1004.3,472.2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("rgba(101,156,197,0.6)").s().p("AKxEBItXklIolihIAXg7IJ1C6IMMEBQgbBGgBAAIAAAAg");
	this.shape_849.setTransform(1007.8,473.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("rgba(101,156,197,0.6)").s().p("AKPD3ItYklIngiNIAXg7IIxCmIMLEBQgaBGgBAAIAAAAg");
	this.shape_850.setTransform(1011.2,474.2);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("rgba(101,156,197,0.6)").s().p("AJsDtItXklImch5IAYg7IHsCRIMLECQgaBGgBAAIgBAAg");
	this.shape_851.setTransform(1014.6,475.3);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("rgba(101,156,197,0.6)").s().p("AIWDRIrxkCImAhzIgBAAIAXg3IA1ALIGVB5ILQDuIAIADQgYBAgCACQgXgEgWgHg");
	this.shape_852.setTransform(1018.9,476.6);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("rgba(101,156,197,0.6)").s().p("AHyDGIq9jxIllhsIgBAAIAWgzIAvAEIF5ByIKeDeIAHADQgWA6gCAEIgGAAQgSAAgQgFg");
	this.shape_853.setTransform(1023.2,478);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("rgba(101,156,197,0.6)").s().p("AHPC6IqKjeIlKhmIgBAAIAWgvIAogDIFdBrIJtDNIAFAEIgXA5QgKAEgJAAQgHAAgHgDg");
	this.shape_854.setTransform(1027.5,479.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("rgba(101,156,197,0.6)").s().p("AGrCwIpVjMIkwhgIgBAAIAUgrIAjgJIFBBjII7C9IAEAFIgWA1QgLAHgJAAIgHgBg");
	this.shape_855.setTransform(1031.8,480.6);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("rgba(101,156,197,0.6)").s().p("AGICmIoii7IkVhaIAAAAIATglIAdgRIEkBcIIKCtIABAFIgTAxQgLAMgIAAIgCAAg");
	this.shape_856.setTransform(1036,481.9);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("rgba(101,156,197,0.6)").s().p("AFkCbIroj8IASgiIAXgXILgDxIAAAFIgRAtQgLASgFAAIAAAAg");
	this.shape_857.setTransform(1040.3,483.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("rgba(101,156,197,0.6)").s().p("AE/CQIqZjjIAig8IKTDZQgaBGgBAAIgBAAg");
	this.shape_858.setTransform(1044.7,484.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("rgba(101,156,197,0.6)").s().p("EBTGAMxItZknIttkCIgCAAIgHgBIgcgDIhxgNInCg2I8MjUIgCAAIgHAAIgcgDIhxgLInBgqI8FirIgCAAIgHgBIgbgDIhrgMImwgxI6/jDIgCAAIgFgBIgWgCIhYgKIlfgmI1ViWQgBgbAAgcQABg2ALABQIhA1KyBHQBaAJC4AVICmAUQPZByMSBVIJNA9UAjmADiAAKAAEIakDGIOsB4IPAEiIMCEOQgiBagBAAIAAAAg");
	this.shape_859.setTransform(534.8,414.3);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("rgba(101,156,197,0.6)").s().p("EBRJAMLIrtkCItpkAIgCAAIgGgBIgdgEIhwgNIlOgpIgCAAIgGgBIgfgEIhLgJIg6gHIoag/IywiNIgCAAIgHAAIgcgDIhwgLIm/gqIlrgjIgCAAIgGgBIgfgDIiEgNIoNgyIrbhFIgCAAIgHgBIgbgDIhrgMImugwItWhgIgCAAIgHgBIgegDIh+gPIn3g5IjGgWIgBAAIgFgBIgWgCIhYgKIldgmI1PiVIgCgUIAAgCIAAgEIgBgcQABg2ALABIAJABQAkABAmAEIR5B0QBaAJC2AVICmATIGqAyIKdBLIKcBJIJKA9IYkCdQK0BFAPADIacDFIOoB5IO8EhIL/ENIgdBQIgDAIQg0gPg0gSg");
	this.shape_860.setTransform(537.1,414.5);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("rgba(101,156,197,0.6)").s().p("EBQ2AMKIrrkBItkkAIgCAAIgHgBIgcgEIhvgNIlNgqIgCAAIgGgBIgfgEIhKgIIg7gHIoXhAIyriMIgCAAIgHAAIgcgDIhvgKIm+grIlogjIgCAAIgGgBIgggEIiDgMIoLgxIrXhFIgCAAIgHgBIgbgDIhqgMImtgvItThgIgCAAIgGgBIgegDIh+gPIn1g4IjFgXIgBAAIgGgBIgVgCIhXgKIlcglI1KiVIgCgTIAAgCIgBgFIgBgbQABg0AKgBIAKABQAkAAAkAEQIBAzJzBAQBbAJC0AVIClATIGoAyIKaBKQFdAnE8AiIJHA8IYcCcQKqBFAXAEIaWDEIOjB6IO5EfIL7ELIgaBQIgEAIQg0gNgxgRg");
	this.shape_861.setTransform(539.3,414.8);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("rgba(101,156,197,0.6)").s().p("EBQiAMJIrnkAIthj/IgCAAIgGgBIgcgDIhvgPQh5gQjRgbIgCAAIgGgBIgggDIhKgJIg6gHIoVg/IymiMIgCAAIgHAAIgbgDIhvgKIm7grIlogjIgCAAIgGgBIgfgDIiDgNIoJgwIrUhGIgCAAIgHAAIgbgDIhqgMImqgwItPheIgCAAIgHgBIgegDIh9gOInzg5IjEgWIgBAAIgFgBIgWgCIhWgJIlbgnI1EiUIgEgSIAAgCIAAgFIgCgaQABg1ALgBIAIABQAjgCAkAFQIBAzJuA/QBbAJCyAWIClATIGmAwIKXBLIKWBIIJEA8IYUCbQKhBEAfAFIaODDIOgB6IOzEfIL5EKQgUA7gEASIgDAJQgzgKgxgRg");
	this.shape_862.setTransform(541.5,415);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("rgba(101,156,197,0.6)").s().p("EBQPAMIIrkj/Itdj+IgCAAIgHgBIgbgEIhugOIlJgsIgCAAIgGgBIgfgEIhKgIIg6gHIoSg/IyiiLIgCAAIgHAAIgbgDIhugLIm5gqIlmgjIgCAAIgHgBIgfgDIiCgNIoHgxIrRhEIgCAAIgGgBIgbgDIhpgMImogvItNheIgCAAIgGgBIgegDIh8gOInyg5IjCgWIgCAAIgFAAIgWgCIhWgKIlYgmI0/iTIgFgTIAAgBIAAgFIgDgZQABg0ALgCIAIABQAigDAkADIRpBzQBcAKCwAUICkATIGlAwIKTBLIKTBHIJCA8IYLCaQKYBDAnAGITMCRIRSCHIEEAlIOwEdIL1EKQgSA6gDASIgDAIQgzgIgvgQg");
	this.shape_863.setTransform(543.7,415.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("rgba(101,156,197,0.6)").s().p("EBP7AMHIrgj9Itaj+IgCAAIgGgBIgcgDIhtgPQh6gSjNgbIgCAAIgGgBIgfgEIhKgIIg5gHIoRg/IyciKIgCAAIgHAAIgbgDIhugLIm2gqIllgkIgCAAIgGAAIgfgDIiCgNIoFgxIrOhEIgCAAIgGgBIgbgDIhpgLImmgvItIhdIgCAAIgHgBIgegDIh8gOInvg5IjCgVIgBAAIgFgBIgWgCIhVgKIlYglI05iUIgFgRIAAgCIgBgFIgDgYQABgzAKgCIAIgBQAigEAjAEIRkByIELAeICjATIGiAwIKRBJQFZAnE3AhII+A7IYECaQKOBCAvAHIaADCIKVBUIECAmIOsEcILyEJQgRA5gCARIgDAIQgygFgugQg");
	this.shape_864.setTransform(546,415.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("rgba(101,156,197,0.6)").s().p("EBPoAMHIrej9ItWj8IgBAAIgHgBIgbgEIhsgPQh6gSjMgcIgBAAIgHgBIgfgEIhJgIIg5gHIoOg+IyYiKIgCAAIgGAAIgbgDIhtgLIm1gqIlkgkIgCAAIgGgBIgfgDIiBgMIoCgxIrLhDIgCAAIgHgBIgagDIhogMImkguItGhcIgCAAIgGgBIgegDIh7gPInug4IjAgVIgCAAIgFgBIgWgCIhVgKIlVglI00iTIgGgRIAAgCIgBgEIgEgYQACgyAJgDIAIgBQAhgGAiAEQH/AzJgA/QBdAKCtAUICiATIGhAvIKOBJIKMBHII8A7IX7CZQKEBBA4AIITBCPIRKCGIEBAnINmEHIMwEbQgPA4gBASIgDAIQgygDgsgPg");
	this.shape_865.setTransform(548.2,415.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("rgba(101,156,197,0.6)").s().p("EBPVAMGIrbj7ItSj8IgBAAIgHgBIgbgEIhsgPQh6gTjKgcIgBAAIgHgBIgegEIhJgIIg5gHIoMg+IyTiJIgCAAIgGAAIgbgDIhtgLImygqIligkIgCAAIgGgBIgfgDIiBgMIoAgxIrIhDIgCAAIgGgBIgagDIhpgLImhguItChcIgCAAIgHgBIgdgDIh8gOInrg4IjAgVIgBAAIgFgBIgWgCIhUgJIlUgmI0uiSIgIgRIAAgCIAAgEIgFgXQACgyAKgDIAHgBQAggIAhAEIRaByQBdAKCsAUIChASIGfAwIKKBIQFWAmE0AgII5A7IXyCYQJ7BBBBAJIS7COIRFCGIEAAnINiEGIMtEaQgOA3AAARIgDAIQgwAAgrgPg");
	this.shape_866.setTransform(550.4,415.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("rgba(101,156,197,0.6)").s().p("EBPBAMGIrXj7ItPj6IgBAAIgGgBIgbgEIhsgQQh6gUjHgcIgCAAIgGgBIgfgEIhJgIIg4gHIoJg+IyPiIIgBAAIgGAAIgbgDIhsgLImwgrIligjIgCAAIgGgBIgfgDIiAgMIn+gwIrFhEIgBAAIgHAAIgagDIhngLImgguIs/hbIgCAAIgGgBIgegDIh6gOInqg4Ii+gVIgBAAIgGgBIgVgCIhVgJIlSgmI0piRIgIgRIAAgCIgBgEIgEgWQABgxAKgEIAHgBQAfgJAhADIRVByQBdAKCpATIChATIGdAvIKIBIQFUAmEyAgII3A6IXpCYQJyBABJAJIS2COIRACFID/ApINeEEIMoEZQgLA1ABARIgDAIIgQABQgnAAgjgMg");
	this.shape_867.setTransform(552.6,415.7);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("rgba(101,156,197,0.6)").s().p("EBOtAMFIrUj6ItKj6IgBAAIgHgBIgagEIhsgQQh6gUjFgcIgCAAIgGgBIgfgEIhIgJIg4gGIoIg+IyJiIIgBAAIgHAAIgagDIhsgLImtgqIlggkIgDAAIgFgBIgfgDIiAgMIn9gwIrBhDIgBAAIgHAAIgagDIhmgLImeguIs7haIgCAAIgHgBIgdgDIh6gOInog3Ii9gWIgCAAIgFAAIgVgDIhUgJIlRglI0jiRIgJgQIAAgCIgBgEIgGgWQABgwAKgFIAHgBQAfgLAfAEIRQByQBfAJCnAUICgASIGbAvIKFBIIKCBFII0A6IXjCWQJnBABRAKISxCNIQ7CFID+ApINaEEIMmEXQgLA0ADARIgEAIQgNACgNAAQghAAgdgKg");
	this.shape_868.setTransform(554.9,415.9);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("rgba(101,156,197,0.6)").s().p("EBOaAMDIrRj3ItGj6IgCAAIgGgBIgbgEQgngHhDgJQh7gVjCgdIgCAAIgHgBIgegEIhIgIIg5gHIoEg9IyEiHIgCAAIgGgBIgagDIhrgKImsgrIlfgjIgCAAIgGgBIgfgDIh/gMIn6gwIq+hDIgCAAIgGgBIgZgCIhngLImcgtIs4haIgBAAIgHgBIgdgDIh6gOInmg3Ii9gVIgBAAIgEgBIgWgCIhUgJIlOglI0fiRIgJgQIgBgBIgBgEIgGgWQACguAJgGIAHgCQAegMAfADIRKByIEEAdICgASIGZAvIKCBHQFRAlEvAgIIxA5IXaCWQJeA/BZALISsCNIQ2CEID8AqINXECIMhEXQgIAyADARIgDAIQgRADgQAAQgcAAgZgJg");
	this.shape_869.setTransform(557.1,416.1);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("rgba(101,156,197,0.6)").s().p("EBOGAMCIrNj2IkJhSIo6inIgBAAIgHgBIgagEQgngHhCgKQh8gVjAgeIgCAAIgGgBIgfgDIhIgJIg4gGIoCg9Ix/iHIgCAAIgGAAIgagDIhrgLImpgqIldgkIgCAAIgGgBIgfgDIh/gMIn4gwIq7hCIgCAAIgGgBIgZgCIhmgLImagtIs0hZIgCAAIgGgBIgegDIh5gNInkg3Ii7gWIgCAAIgEAAIgWgCIhTgJIlOglI0YiRIgKgPIgBgBIgBgEIgGgVQABguAJgHIAHgBQAdgOAeADIRFByIEDAcICfATIGXAuIJ/BHIJ9BEIIuA5IXRCVQJVA+BhAMISnCMIQxCEID7ArINUEBIMdEVQgHAxAFARIgDAIQgUAFgTAAQgYAAgWgIg");
	this.shape_870.setTransform(559.3,416.3);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("rgba(101,156,197,0.6)").s().p("EBNzAMBIrKj2IkIhRIo4inIgBAAIgGgBIgagEIhpgRQh8gWi+geIgCAAIgHgBIgegDIhHgJIg4gGIoAg9Ix6iGIgCAAIgGAAIgagDIhqgLImngqIlcgkIgCAAIgGgBIgfgDIh+gMIn2gwIq3hBIgDAAIgFgBIgagDIhlgLImYgsIswhYIgDAAIgFgBIgegDIh5gOInig3Ii6gVIgBAAIgGAAIgUgCIhTgJIlMglI0TiQIgMgPIAAgBIgBgEQgDgKgFgKQACgtAJgIIAHgBQAcgQAdADIRAByIECAcICeASIGWAuIJ7BHIJ6BDIIqA5IXKCVQJMA8BoANISjCMIQsCDID5AsINQEAIMbEUQgGAwAGARIgEAIQgXAGgUAAQgVAAgSgGg");
	this.shape_871.setTransform(561.5,416.6);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("rgba(101,156,197,0.6)").s().p("EBNeAMAIrHj1IkHhRIo1imIgBAAIgGgBIgagEIhogRQh8gXi8geIgCAAIgHgBIgegEIhHgIIg4gHIn+g8Ix0iFIgCAAIgGgBIgagDIhpgKImlgrIlbgkIgCAAIgGgBIgegDIh+gLIn0gwIq1hCIgCAAIgGAAIgZgDIhlgLImWgrIsshYIgCAAIgHgBIgdgDIh4gOInhg2Ii5gVIgBAAIgFAAIgVgDIhSgJIlLgkI0NiQIgMgOIgBgCIgBgDIgIgUQACgsAIgIIAHgCQAbgRAdADIQ7BxQBhAKCfATICdASIGUAtIJ5BGIJ2BDIIoA5IXCCTQJBA8ByAOIScCLIQoCDID4AsINMD/IMXETQgEAvAHAQIgEAIQgZAJgWAAQgSAAgPgFg");
	this.shape_872.setTransform(563.9,416.8);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("rgba(101,156,197,0.6)").s().p("EBNIAL+IrDj0IkFhRIozilIgBAAIgGgBIgagEQgogIg/gKQh9gXi6gfIgCAAIgGgBIgfgDIhGgJIg4gGIn7g8IxwiFIgCAAIgFAAIgagDIhpgLImjgrIlZgjIgCAAIgGgBIgegDIh+gMInygvIqxhCIgCAAIgGAAIgZgDIhlgLImTgrIsphXIgCAAIgHgBIgdgDIh3gNInfg3Ii5gVIgBAAIgEAAIgWgCIhSgJIlIglI0IiOIgNgPIgBgBIgBgDIgIgTQABgsAIgJIAHgCQAbgSAcADIQ1BxQBiAKCdASICdASIGSAtIJ2BGIJzBCIIlA4IW5CTQI4A7B6APISXCLIQjCCID3AtINID+IMTESQgDAtAJAQIgEAIQgbALgXAAQgPAAgOgEg");
	this.shape_873.setTransform(566.3,417.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("rgba(101,156,197,0.6)").s().p("EBM0AL9IrBjzIkDhRIowikIgCAAIgGgBIgZgFIhngSQh9gXi4gfIgBAAIgHgBIgegEIhGgIIg3gGIn6g8IxriFIgBAAIgGAAIgagDIhogLImhgqIlXgkIgCAAIgHgBIgegDIh9gMInwgvIquhBIgCAAIgFAAIgZgDIhkgLImSgrIsmhWIgCAAIgGgBIgdgDIh3gNIndg2Ii3gVIgCAAIgEAAIgVgDIhSgJIlHgkI0CiOIgOgOIgBgBIgCgDQgDgJgFgKQABgrAIgJIAGgCQAbgVAbADIQwBxQBjAKCbASICcASIGQAtIJyBFIJxBCIIiA4QRUBuFdAkQIuA6CCAQISSCKIQfCCID1AuINFD8IMPERQgBAsAJAQIgDAIQgdANgYAAQgMAAgMgDg");
	this.shape_874.setTransform(568.6,417.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("rgba(101,156,197,0.6)").s().p("EBMfAL7Iq9jyIkDhRIouijIgBAAIgGgBIgZgFIhmgSQh9gZi2gfIgBAAIgHgBIgegDIhGgJIg3gGIn4g8IxliDIgCAAIgGAAIgZgDIhngLImfgrIlWgkIgCAAIgHgBIgegDIh8gLInugvIqrhBIgCAAIgFAAIgZgDIhkgLImPgqIsihVIgDAAIgGgBIgdgDIh3gOInbg2Ii2gUIgBAAIgFgBIgVgCIhRgJIlGgkIz8iOIgPgNIgBgBIgCgEQgDgIgGgJQABgrAJgJIAGgDQAZgWAaADIQrBxQBkAKCZASICcARIGOAtIJvBEIJtBCIIfA4IWqCRQIkA5CKARISNCJIQZCCID1AuINBD8IMLEPQABArAKAQIgDAIQgeAQgYAAQgLAAgKgDg");
	this.shape_875.setTransform(571,417.6);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("rgba(101,156,197,0.6)").s().p("EBMLAL5Iq7jwIkBhRIorijIgBAAIgGgBIgZgEQgogJg+gKQh9gZi0ggIgBAAIgHgBIgegDIhGgJIg2gGIn1g7IxhiDIgCAAIgFgBIgagDIhngKImcgrIlVgkIgCAAIgGgBIgegDIh8gLInsgvIqohAIgCAAIgFgBIgZgDIhjgKImOgqIsehVIgCAAIgHgBIgdgDIh2gNInZg2Ii1gUIgBAAIgFgBIgUgCIhRgJIlFgkIz3iNIgPgNIgBgBIgCgDQgEgJgGgIQACgqAIgKIAFgDQAZgYAZADIQnBxID7AbICaASIGMAtIJtBDIJqBCIIdA3IWgCQQIcA5CSASISHCIIQVCBIDzAwIM9D6IMIEOQADAqALAQIgDAIQgfASgYAAQgJAAgJgDg");
	this.shape_876.setTransform(573.3,417.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("rgba(101,156,197,0.6)").s().p("EBL1AL3Iq3jvIj/hQIopijIgCAAIgFgBIgZgEQgogJg8gKQh+gaiyggIgBAAIgHgBIgegDIhGgJIg2gGInzg7IxbiCIgCAAIgFgBIgagDIhmgKImagrIlUgkIgCAAIgHgBIgegDIh7gLInpgvIqlhAIgCAAIgFgBIgYgCIhkgLImLgpIsbhUIgCAAIgGgBIgdgDIh2gOInYg1Ii0gUIgBAAIgEgBIgVgCIhRgJIlCgkIzxiMIgRgNIAAgBIgDgDQgEgIgGgIQABgpAIgLIAFgDQAYgZAZACIQhBxID6AbICaASIGKAsIJpBDIJoBBIIZA3IWZCQQIRA3CbATISCCIIQRCAIDxAxIM5D5IMFENQAEAoAMAQIgDAIQggAVgYAAQgIAAgIgDg");
	this.shape_877.setTransform(575.7,418.1);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("rgba(101,156,197,0.6)").s().p("EBLgAL2Iq0juIj+hRIomihIgBAAIgGgBIgZgFQgogJg8gKQh+gbivggIgBAAIgHgBIgegDIhFgJIg2gGInxg7IxXiBIgBAAIgFgBIgagDIhmgKImYgrIlSgkIgCAAIgGgBIgegDIh7gLInogvIqhhAIgCAAIgFAAIgYgDIhigKImLgpIsXhUIgCAAIgHgBIgcgDIh2gNInVg1IizgUIgBAAIgFgBIgUgCIhQgJIlBgjIzsiNIgRgMIgBgBIgDgDQgDgHgIgIQACgoAHgMIAGgEQAXgaAYACIQcBxID4AbICZARIGJAtIJmBCIJkBBIIXA2QRtBxEjAeQIJA3CiAUIR9CHIQMCAIDwAxIM1D4IMBEMQAGAnANAPIgDAIQggAYgYAAQgHAAgHgCg");
	this.shape_878.setTransform(578,418.3);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("rgba(101,156,197,0.6)").s().p("EBLMAL0IqxjtIj+hRIoiigIgCAAIgFgBIgZgFIhkgUQh+gbitggIgCAAIgGgBIgegEIhFgIIg2gGInug7IxSiBIgBAAIgGAAIgYgDIhmgLImWgrIlQgkIgCAAIgHgBIgegDIh6gLInmguIqfhAIgBAAIgFAAIgYgDIhigKImIgpIsThSIgCAAIgHgBIgdgDIh0gOInUg1IiygUIgBAAIgFAAIgUgCIhQgJIk/gkIzniLIgSgMIgBgBIgCgDQgFgHgGgIQABgnAIgNIAEgDQAXgcAWACIQYBwID2AbICZASIGGArIJkBDIJhA/IIUA3IWICOQH+A2CsAVIR4CGIQGCAIDvAyIMxD3IL+EKQAHAmAPAPIgEAIQggAbgXAAQgHAAgFgCg");
	this.shape_879.setTransform(580.4,418.6);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("rgba(101,156,197,0.6)").s().p("EBK3ALyIqtjsIj9hQIohigIgBAAIgFgBIgYgFIhjgUQh/gcirggIgCAAIgGgBIgegEIhEgIIg2gGInsg7IxNiAIgBAAIgGAAIgZgDIhlgLImTgrIlQgkIgBAAIgHgBIgdgDIh7gLInkguIqbg/IgBAAIgFgBIgYgCIhhgKImGgpIsRhSIgCAAIgGgBIgdgDIh0gNInRg1IiygUIAAAAIgFAAIgUgCIhQgJIk+gjIzhiMIgSgLIgBgBIgDgDQgFgHgHgHQABgmAIgOIAFgEQAWgdAWACIQSBwID1AbICYARIGFAsIJgBCIJeA/IIRA2QR5ByEGAbQH2A2C0AVIRxCGIQCB/IDuAzIMtD2IL7EJQAIAkAQAQIgEAIQggAdgXAAQgFAAgFgCg");
	this.shape_880.setTransform(582.7,418.9);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("rgba(101,156,197,0.6)").s().p("EBKiALxIqrjrIj6hQIofigIgBAAIgFgBIgYgFIhigUQh/gcipghIgCAAIgHgBIgdgEIhEgIIg2gGInqg6IxHiAIgCAAIgFAAIgZgDIhkgLImRgrIlPgkIgCAAIgGgBIgegDIh5gLIniguIqYg/IgBAAIgFAAIgYgDIhhgKImDgoIsNhRIgCAAIgHgBIgcgDIh0gNInQg1IiwgUIgBAAIgEAAIgVgCIhPgJIk8gjIzbiLIgUgLIgBgBIgDgCQgEgHgIgHQABgmAHgOIAFgEQAVgfAVACIQNBwID0AbICXARIGDArIJeBCIJaA+IIOA2QR/BzD5AaQHrA0C8AXIRtCFIP9B+IDsA0IMrD1IL2EIQAKAjARAPIgDAIQgiAggWAAIgIgBg");
	this.shape_881.setTransform(585.1,419.1);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("rgba(101,156,197,0.6)").s().p("EBKNALuIqnjpIj6hQIobifIgCAAIgEgBIgYgFQgpgJg5gLQiAgdimgiIgCAAIgHgBIgdgEIhEgHIg1gHInng5IxEiAIgBAAIgFAAIgYgDIhkgLImQgrIlMgkIgCAAIgGAAIgegDIh5gMInggtIqUg/IgBAAIgGgBIgXgCIhggKImDgoIsJhQIgCAAIgGgBIgdgDIhzgNInOg0IivgUIgBAAIgEAAIgVgCIhOgJIk7gjIzWiLIgUgKIgBgBIgEgCQgEgHgIgGQACglAGgPIAEgEQAVghAVACIQHBvIDyAbICXARIGBArIJbBBIJXA+IILA1QSFB0DrAZQHiAzDEAYIRoCFIP4B9IDrA1IMmDzILzEIQALAhATAPIgEAIQghAjgVAAIgIgCg");
	this.shape_882.setTransform(587.4,419.4);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("rgba(101,156,197,0.6)").s().p("EBJ4ALtIqkjpIj4hQIoZidIgBAAIgFgBIgYgFQgqgKg3gLQiAgeikgiIgCAAIgHgBIgdgEIhEgHIg1gHInlg5Iw+h/IgBAAIgFAAIgZgDIhjgLImNgrIlLgkIgCAAIgHgBIgdgDIh4gLInegtIqSg/IgBAAIgFAAIgXgCIhggKImAgoIsGhPIgCAAIgGgBIgdgDIhzgNInMg0IiugUIgBAAIgEAAIgUgCIhOgJIk5gjIzRiKIgVgKIgBgBIgDgCQgFgGgJgGQACglAHgPIAEgFQATgiAUACIQCBvIDyAbICWARIF/ArIJXBAIJUA+IIJA1IVnCLQHZAzDMAYIRiCEIP0B+IDpA1IMjDyILvEGQANAgAUAPIgEAIQghAmgUAAIgHgBg");
	this.shape_883.setTransform(589.8,419.7);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("rgba(101,156,197,0.6)").s().p("EBJkALrIqhjnIj3hQIoXidIgBAAIgFgBIgYgFIhggWQiAgeijgiIgBAAIgHgBIgdgEIhDgHIg1gGInjg6Iw4h+IgCAAIgFAAIgZgDIhigLImKgrIlLgkIgBAAIgIgBIgcgDIh5gLInbgtIqOg+IgBAAIgGgBIgXgCIhfgKIl+gnIsChPIgCAAIgHgBIgcgDIhzgNInKgzIisgUIgBAAIgFAAIgUgCIhOgJIk3gjIzLiJIgWgKIgBgBIgDgCQgGgFgJgGQACgkAHgQIADgFQATgkATACQH6A4IEA3IDwAbICUARIF+AqQFqAoDqAYIJSA9IIFA1QSRB0DOAWQHPAyDUAaIRdCDIPvB9IDoA2IMgDxILrEFQAPAfAUAPIgDAIQghAogUAAIgFgBg");
	this.shape_884.setTransform(592.1,419.9);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("rgba(101,156,197,0.6)").s().p("EBJPALpIqejmIj2hQIoUicIgBAAIgFgBIgXgFQgqgLg2gLQiAgfihgiIgBAAIgHgBIgdgEIhDgIIg1gGIngg5Iw0h+IgBAAIgFAAIgYgDIhjgLImIgqIlJglIgCAAIgGAAIgegDIh3gMInagtIqLg9IgBAAIgFgBIgXgCIhfgKIl7gnIr/hOIgCAAIgHgBIgcgDIhygMInIg0IisgTIgBAAIgEgBIgUgCIhOgIIk2gjIzFiJIgXgJIgBgBIgEgCQgFgFgJgGQABgjAHgQIADgFQATgmASACIP4BvIDvAaICUARIF7AqIJSA/IJOA9IIDA0QSXB2DAAUQHFAxDdAbIRXCDIPqB8IDnA3IMbDwILpEEQAQAdAVAPIgDAIQgiArgSAAIgEgBg");
	this.shape_885.setTransform(594.5,420.2);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("rgba(101,156,197,0.6)").s().p("EBI5ALnIqajlIj0hQIoSibIgBAAIgFgBIgXgGQgqgKg1gMQiAgfifgjIgCAAIgGgBIgegEIhCgHIg1gGIndg5Iwvh9IgCAAIgFAAIgXgDIhigLImHgrIlHgkIgCAAIgHgBIgcgDIh3gLInYgtIqIg+IgBAAIgFAAIgXgCIhfgKIl5gmIr7hNIgCAAIgHgBIgcgDIhxgNInHgzIirgUIgBAAIgDAAIgUgCIhOgJIk0giIzAiJIgYgJIAAAAIgFgCQgFgFgJgFQABgjAGgRIAEgFQARgnASACIPyBuIDuAbICTAQIF6AqIJPA/IJKA8IIBA0QSdB2CxATQG7AwDmAcIRSCCIPlB8IDmA3IMYDvILkEDQASAcAXAOIgEAIQgiAvgRAAIgEgBg");
	this.shape_886.setTransform(596.9,420.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("rgba(101,156,197,0.6)").s().p("EBIlALmIqXjlIjzhPIoPibIgCAAIgEgBIgXgFIhfgXQiBggicgjIgBAAIgHgBIgdgEIhCgHIg1gGIncg5Iwph8IgCAAIgFAAIgXgDIhhgLImEgrIlGglIgCAAIgHAAIgdgDIh2gLInWgtIqFg9IgBAAIgFAAIgWgDIhegJIl4gmIr4hNIgCAAIgGgBIgcgDIhxgNInFgzIiqgTIgBAAIgEAAIgTgCIhNgJIkzgiIy6iIIgZgIIgBgBIgEgCQgFgEgLgFQACgiAGgSIADgFQARgpARACQH5A4H0A2IDsAbICTAQIF4ApQFsAoDfAXIJIA8IH9AzQSkB3CjARQGyAwDtAcIROCCIPgB7IDkA4IMUDuILhECQATAbAYAOIgDAIQgiAxgQAAIgDAAg");
	this.shape_887.setTransform(599.2,420.8);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("rgba(101,156,197,0.6)").s().p("EBIQALkIqUjkIjyhPIoNiaIgBAAIgEgBIgXgGIhegWQiBghiagjIgCAAIgHgBIgdgEIhBgIIg0gGInag4Iwlh8IgBAAIgFAAIgYgDIhggLImCgrIlFgkIgCAAIgGgBIgdgDIh2gLInUgsIqBg9IgBAAIgFAAIgWgDIhegJIl1gmIr0hMIgDAAIgGgBIgcgDIhxgMInCgzIipgTIgCAAIgDAAIgTgDIhNgIIkygiIy0iIIgagIIgBAAIgEgCQgGgEgKgFQABghAHgSIACgGQAQgqAQACQH5A4HwA2IDqAaICTAQIF2ApQFsAoDcAWIJEA8IH7AzQSqB3CVAQQGnAvD2AdIRICBIPcB7IDjA5IMQDtILeEAQAUAaAZAOIgDAIQgiA0gPAAIgCAAg");
	this.shape_888.setTransform(601.6,421.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("rgba(101,156,197,0.6)").s().p("EBH8ALiIuCkyIoKiZIgBAAIgFgBIgXgFIhcgXQiCgiiYgkIgBAAIgHgBIgdgDIhCgIIg0gGInXg4Iwgh7IgBAAIgFAAIgXgDIhggLImAgrIlDgkIgCAAIgHgBIgdgDIh1gLInRgsIp/g9IgBAAIgFAAIgWgCIhdgKIlzglIrxhLIgCAAIgHgBIgcgDIhwgNInAgyIiogTIgBAAIgEAAIgUgCIhMgJIkvgiIyviHIgbgIIgBAAIgEgCQgGgEgLgEQACggAFgTIADgGQAPgsAPACIPkBuIDpAaICSAQIF0ApQFtAnDYAWIJCA7IH3AzQSwB4CGAPQGfAtD+AeIRDCBIPXB6IDhA6IMMDsILaD/QAXAYAZAOIgDAIQghA3gNAAIgCAAg");
	this.shape_889.setTransform(603.9,421.3);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("rgba(101,156,197,0.6)").s().p("EBHmALgIt9kwIoHiZIgBAAIgFgBIgXgFIhbgXQiDgiiVglIgBAAIgHgBIgdgDIhBgIIg0gGInVg3Iwbh7IgBAAIgFAAIgXgDIhggLIl9grIlCglIgCAAIgHAAIgcgDIh1gLInQgsIp7g8IgBAAIgEgBIgXgCIhdgJIlxglIrthKIgCAAIgHgBIgbgDIhwgNIm/gyIingTIgBAAIgDAAIgUgCIhMgJIktgiIyqiGIgbgHIgCgBIgEgBIgSgIQACgfAFgUIADgGQAOguAPACQH4A5HmA1IDoAaICSAQIFyAoIJCA9II+A7IH0AyQS1B4B6AOQGVAtEGAfIQ+CAIPRB6IDhA6IMJDrILWD+QAXAXAcAOIgDAIQgiA5gMAAIgCAAg");
	this.shape_890.setTransform(606.3,421.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("rgba(101,156,197,0.6)").s().p("EBHRALeIt4kvIoFiYIgBAAIgFgBIgWgFIhbgYQiDgiiTglIgBAAIgHgBIgdgEIhCgHIgzgGInSg3IwWh7IgBAAIgFAAIgXgDIhfgLIl7grIlBgkIgCAAIgHgBIgdgDIh0gLInNgrIp4g9IgBAAIgEAAIgXgCIhcgJIlvglIrqhJIgCAAIgHgBIgcgDIhugNIm9gyIimgTIgBAAIgDAAIgUgCIhMgIIksgiIykiGIgcgHIgCAAIgEgBQgGgEgMgEQACgeAFgVIACgGQAPgvANACQH4A5HhA0IDmAaICRAQIFwAoIJAA9II6A6IHzAxQS6B6BrAMQGMAsEOAgIQ4B/IPOB6IDfA7IMEDpILUD9QAYAWAdANIgDAIQghA9gLAAIgCAAg");
	this.shape_891.setTransform(608.6,421.9);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("rgba(101,156,197,0.6)").s().p("EBG9ALcIt0kuIoCiXIgCAAIgEgBIgXgFQgqgMgxgMQiCgkiRglIgCAAIgGgBIgdgDIhBgIIgzgGInRg3IwRh5IgBAAIgEAAIgXgDIhegLIl5grIlAglIgCAAIgHAAIgcgDIh0gLInMgsIp0g8IgBAAIgEAAIgXgCIhbgJIlugkIrmhJIgBAAIgIgBIgbgDIhugMIm8gyIilgTIgBAAIgDAAIgTgCIhLgIIkrgiIyeiGIgegGIgBAAIgEgCIgTgGQABgeAGgVIACgHQANgwAMABQH5A6HbA0IDmAZICQAQIFuAoII8A8II4A5IHvAyQTAB6BeALIKZBMIQyB/IPJB5IDeA8IMBDoILPD8QAbAUAdANIgDAIQghBBgJAAIgBgBg");
	this.shape_892.setTransform(611,422.2);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("rgba(101,156,197,0.6)").s().p("EBGoALbItwktIoAiWIgBAAIgEgBIgWgGIhagYQiDgkiPgmIgCAAIgGgBIgegDIhAgIIgzgGInOg2IwMh5IgBAAIgEAAIgXgDIhdgLIl4grIk9glIgDAAIgGgBIgdgDIhzgKInJgsIpyg7IgBAAIgEAAIgWgCIhbgJIlrgkIrjhIIgDAAIgGgBIgbgDIhvgNIm5gxIikgTIAAAAIgEAAIgUgCIhKgIIkpgiIyaiFIgdgGIgBAAIgFgBQgHgDgNgDQADgdAEgWIACgHQAMgyANABQH3A6HXA0IDlAZICOAQIFtAoII5A7II1A5IHtAxQTGB7BOAJIKYBMIQtB+IPEB5IDdA9IL9DnILLD6QAdATAfAOIgEAIQggBDgIAAIgBAAg");
	this.shape_893.setTransform(613.3,422.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("rgba(101,156,197,0.6)").s().p("EBGTALZItrksIn+iWIgBAAIgEgBIgWgFIhZgZQiDgliOglIgBAAIgHgBIgdgEIhAgHIgygGInMg3IwHh4IgBAAIgEAAIgXgDIhdgLIl1grIk9glIgCAAIgGAAIgdgDIhygLInIgrIpug7IgBAAIgFAAIgVgDIhbgIIlpgkIrfhHIgCAAIgHgBIgcgDIhtgNIm4gxIiigSIgBAAIgDgBIgUgCIhKgIIkoghIyTiFIgfgFIgBgBIgFgBIgUgFQACgcAFgWIACgIQALgzALABQH3A6HTAzIDjAZICOAQIFqAoQFwAnDHATIIxA5IHqAxQTMB7BBAIIKWBMIQoB+IPAB4IDbA+IL5DlILID6QAeASAgANIgEAIQggBGgHAAIAAAAg");
	this.shape_894.setTransform(615.7,422.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("rgba(101,156,197,0.6)").s().p("EBF+ALXItmkrIn7iUIgBAAIgEgBIgWgGIhZgZIkPhLIgBAAIgHgBIgdgEIg/gHIgygGInKg2IwCh4IgBAAIgFAAIgWgDIhdgLIlygrIk7glIgCAAIgHAAIgcgDIhzgLInFgrIprg7IgBAAIgFAAIgUgCIhagJIlogjIrchHIgCAAIgGgBIgcgDIhtgMIm2gxIihgSIgBAAIgDAAIgUgCIhKgJIklghIyPiEIgfgFIgCAAIgEgBIgVgFQACgbAEgXIACgIQALg1ALABQH2A6HOAzIDhAZICOAQIFpAnQFwAnDCATIIvA4IHnAxQTTB8AyAGIKVBNIQjB9IO6B3IPQEjILED5QAgAQAgANIgDAIQggBJgFAAIgBAAg");
	this.shape_895.setTransform(618,423);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("rgba(101,156,197,0.6)").s().p("EBFpALVItikpIn4iUIgBAAIgEgBIgWgGIhYgaIkNhMIgBAAIgHgBIgdgDIg/gIIgygFInHg2Iv9h4IgBAAIgFAAIgWgDIhcgLIlwgrIk6gkIgCAAIgHgBIgcgDIhygLInDgqIpog7IgBAAIgEAAIgWgCIhZgJIlmgjIrYhGIgCAAIgHgBIgbgDIhsgMIm0gxIihgSIgBAAIgDAAIgTgCIhJgIIklghIyIiEIghgFIgBAAIgFAAIgVgEQACgbAEgYIABgHQAKg3AKABQH3A6HIAzIDgAZICNAPIFnAnQFxAnC/ATIIsA3IHkAxQTYB8AkAFIKUBNIQeB8IO1B3IPKEjILBD3QAhAPAiANIgDAIQgfBMgFAAIAAAAg");
	this.shape_896.setTransform(620.4,423.3);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("rgba(101,156,197,0.6)").s().p("EBFVALTItekoIn2iTIgBAAIgEgBIgVgHIhXgZIkMhNIgBAAIgHgBIgdgDIg+gIIgzgFInFg2Iv4h3IgBAAIgDAAIgXgDIhbgLIlvgrIk3glIgDAAIgGAAIgdgDIhxgLInBgqIplg7IgBAAIgEAAIgVgCIhZgJIlkgiIrUhFIgCAAIgHgBIgbgDIhsgMImygxIiggSIAAAAIgEAAIgTgCIhJgIIkjghIyDiDIghgEIgBAAIgGgBIgVgEQACgZAEgZIABgIQAJg4AJABQH2A6HFAzIDeAYICNAQIFkAmQFxAnC8ATIIpA3IHgAvQTgB+AWADIKSBNIQYB8IOwB2IPGEjIK9D2IBFAaIgCAIQggBPgCAAIAAAAg");
	this.shape_897.setTransform(622.7,423.5);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("rgba(101,156,197,0.6)").s().p("EBFAALRItaknIttkBIgBAAIgHgBIgdgEIhwgNInDg1I8MjUIgCAAIgHgBIgcgDIhwgKInAgrI8GirIgCAAIgHgBIgbgDIhsgMImwgwI6/jEIgBAAIgGAAIgWgDQADgdAEgdQAJg6AIABQOdBrLkBPQFxAnC5ASUAjlADjAALAADIakDIIOsB2IPAEiIMCEOQgiBagBAAIAAAAg");
	this.shape_898.setTransform(625.1,423.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("rgba(101,156,197,0.6)").s().p("EBELALFIs3kcItpkAIgBAAIgHgBIgdgDIhvgOIlngsIgDAAIgFgBIgigEIgvgFIhcgLIoyhDIx1iGIgCAAIgHAAIgcgDIhvgKIm9gqIoQg0IgCAAIgGAAIgigDIiJgNIomg0IoVgzIgCAAIgHgBIgbgDIhqgMImugwIyFiDIgCAAIgGgBIgggEIiFgPImEgrIgBAAIgGgBIgWgCIAIg6QAIg6AHABIAfADIHBA0QJ+BJIaA5QFuAmC5ASITcB8QP2BmASADIacDIIOmB2IO7EhIL+ENIgCAFQgfBUgCAAIgdgJg");
	this.shape_899.setTransform(627.5,424.1);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("rgba(101,156,197,0.6)").s().p("EBDzALCIsykaItkj/IgCAAIgHgBIgcgEIhugNIlmgtIgBAAIgHgBIgggEIgwgGIhcgKIovhDIxuiEIgCAAIgHgBIgbgDIhvgKIm7grIoNgyIgCAAIgGgBIgigDIiIgNIokg0IoSgzIgCAAIgGAAIgbgDIhqgMImsgwIx/iCIgCAAIgGgBIgfgEIiFgOImCgrIgBAAIgFgBIgWgCQADgdAEgdQAJg5AHAAIAeADIG+AzQJ8BIIVA4QFsAnC4ASITUB7QPnBkAeAFIaSDGIOiB4IO2EgIL6ELIgCAEQgfBUgBABIgegJg");
	this.shape_900.setTransform(629.9,424.4);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("rgba(101,156,197,0.6)").s().p("EBDdALAIsukZItgj+IgBAAIgHgBIgcgDIhugPIljguIgBAAIgHAAIghgFIgvgEIhbgLIoshDIxoiEIgCAAIgIAAIgbgDIhugKIm4grIoKgyIgDAAIgFgBIgigDIiIgNIohg0IoOgyIgCAAIgHgBIgagDIhrgLImogwIx5iBIgDAAIgFAAIgggEIiDgPImBgrIAAAAIgGgBIgVgCIgBAAIAIg6QAHg3AIgBIAeACIG7AzQJ4BHITA4QFnAnC6ARITLB7QPZBjApAGIaJDGIOdB4IOxEeIL1EKIgBAEQgfBTgCABQgOgDgOgEg");
	this.shape_901.setTransform(632.2,424.7);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("rgba(101,156,197,0.6)").s().p("EBDFAK9IsqkXItaj9IgBAAIgHAAIgcgFIhtgNIlggvIgDAAIgFgBIgigEIgugFIhbgMIophBIxjiDIgCAAIgGgBIgcgCIhugLIm1grIoHgyIgCAAIgHgBIghgDIiHgMIoeg0IoMgyIgCAAIgGgBIgbgDIhpgLImngwIxyh/IgDAAIgGgBIgggDIiCgPIl+grIgBAAIgFgBIgWgCQADgdAEgcQAJg3AHgCIAdACIG5AyQJ0BHIPA3IIfA4ITDB6QPJBiA1AIIaBDEIHYA6IG/A/IOrEdILyEIIgBAFIghBUQgOgDgOgFg");
	this.shape_902.setTransform(634.6,424.9);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("rgba(101,156,197,0.6)").s().p("EBCvAK7IsmkWItWj7IgBAAIgHgBIgbgEIhtgPIlegvIgCAAIgGgBIghgEIgugGIhbgKIomhCIxdiCIgCAAIgGgBIgcgDIhtgKImygqIoFgzIgCAAIgHgBIgggDIiHgNIocgzIoJgxIgBAAIgHgBIgagDIhpgMImkguIxth/IgCAAIgGgBIgfgDIiDgPIl7gqIgBAAIgFgBIgWgCIAAAAIAHg5QAIg2AIgCIAbAAIG3AyQJyBHIMA3IIbA3IS7B5QO7BgBAAJIZ3DEIHWA6IG8BAIOmEcILuEHIgBAEQgeBRgCACQgOgCgNgEg");
	this.shape_903.setTransform(637,425.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("rgba(101,156,197,0.6)").s().p("EBCYAK5IsikUItRj7IgCAAIgGgBIgbgEIhsgPQiAgTjcgdIgCAAIgGgBIghgEIgugGIhagKIojhBIxXiCIgCAAIgHAAIgbgDIhsgLImvgqIoDgzIgCAAIgGgBIghgDIiGgMIoZgzIoGgyIgCAAIgHAAIgagDIhngMImiguIxnh9IgCAAIgGgBIgfgEIiCgOIl5gqIgCAAIgEgBIgWgCIgBAAIAIg5QAIg1AIgDIAbAAIG0AyQJvBFIIA3IIYA3ISyB4QOsBfBMALIZuDCIHUA6IG5BCIOiEaILqEFIgCAEQgeBQgBADQgOgBgNgEg");
	this.shape_904.setTransform(639.4,425.4);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("rgba(101,156,197,0.6)").s().p("EBCBAK3IsekTItMj6IgCAAIgGgBIgbgEIhrgPQiBgTjZgeIgCAAIgGgBIgggEIgugGIhagKIoghBIxRiBIgCAAIgGAAIgbgDIhsgLImtgqIoAgzIgCAAIgHAAIgggDIiFgNIoXgzIoCgxIgCAAIgHgBIgagCIhngMImfgtIxih8IgBAAIgHgBIgegEIiCgOIl2grIgCAAIgFAAIgVgDIAAAAIAHg4QAIg0AHgDIAagBIGzAxQJsBFIDA2QFbAlC7ASISqB3QOfBeBVAMIZmDBIHRA6IG2BDIOcEYILnEFIgCAEQgdBPgCADQgOAAgMgEg");
	this.shape_905.setTransform(641.8,425.7);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("rgba(101,156,197,0.6)").s().p("EBBqAK0IsakQItHj5IgCAAIgGgBIgbgEIhqgPQiBgVjWgeIgCAAIgHgBIgggEIgtgGIhZgKIodhAIxMiBIgCAAIgGAAIgagDIhsgKImrgrIn9gyIgCAAIgGgBIghgDIiEgMIoUgzIoAgwIgCAAIgGgBIgZgDIhogMImdgtIxbh7IgCAAIgFgBIgggDIh/gPIl2gpIgBAAIgFgBIgVgDIgBAAIAIg3QAIg0AIgEIAZgBIGwAwQJoBFIBA2QFWAkC8ASISjB3QOPBcBgANIZdDBIHPA6IG0BDIOXEXILhEDIAAAFQgdBNgDAFQgOAAgLgFg");
	this.shape_906.setTransform(644.1,425.9);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("rgba(101,156,197,0.6)").s().p("EBBTAKyIsVkQItEj3IgBAAIgGgBIgbgEIhpgQQiBgVjUgeIgCAAIgGgBIghgEIgtgFIhZgLIoahAIxFh/IgCAAIgHgBIgagDIhrgKImngqIn7gzIgCAAIgGgBIghgDIiDgMIoRgzIn+gwIgCAAIgGgBIgZgDIhngLImagsIxVh6IgCAAIgGgBIgfgEIh/gOIlzgqIgBAAIgFAAIgVgDIAAAAIAHg3QAIgyAHgFIAZgDIGuAxQJkBEH+A1QFTAkC8ASISaB2QOCBbBrAOIO6BxIRmCIIGxBFIOSEWILdECIAAAEIggBRIgDABQgLAAgKgEg");
	this.shape_907.setTransform(646.5,426.2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("rgba(101,156,197,0.6)").s().p("EBA7AKwIsQkOIs+j2IgCAAIgGgBIgagEIhpgQQiBgWjSgfIgCAAIgGgBIgggEIgtgFIhYgKIoYhAIw/h/IgCAAIgGAAIgagDIhqgKImmgrIn4gyIgCAAIgGgBIgggDIiDgNIoPgxIn6gxIgCAAIgGAAIgZgDIhmgLImYgtIxPh4IgCAAIgGgBIgfgEIh/gOIlwgpIgBAAIgFgBIgVgCIgBAAQADgcAFgbQAIgyAHgGIAYgDIGrAwQJiBEH6A1IILA1ISTB1QNyBaB3AQIZLC/IHKA5IGuBGIONEVILaD/IgBAEQgcBMgDAGIgHAAQgJAAgJgDg");
	this.shape_908.setTransform(648.9,426.4);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("rgba(101,156,197,0.6)").s().p("EBAkAKuIsMkNIs6j1IgBAAIgGgBIgagFIhogQQiCgWjPgfIgBAAIgHgBIgggEIgsgFIhYgLIoVg/Iw5h+IgCAAIgGAAIgagDIhqgLImigqIn2gzIgCAAIgGAAIgggDIiDgNIoMgxIn3gwIgBAAIgGgBIgagDIhlgLImVgsIxJh3IgCAAIgHgBIgegEIh+gOIlugpIgCAAIgFAAIgUgDIgBAAIAIg3QAHgwAIgHIAXgDIGpAvQJfBDH2A1IIIA1ISLB0QNjBZCCARIOwBvIRaCHIGrBIIOIETILWD+IgBAEIgfBRIgJABQgIAAgHgCg");
	this.shape_909.setTransform(651.3,426.7);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("rgba(101,156,197,0.6)").s().p("EBANAKrIsIkLIs0j0IgCAAIgGgBIgagEQgmgHhBgKQiCgWjMggIgCAAIgGgBIghgEIgsgFIhXgKIoRg/Iw1h+IgBAAIgGAAIgagDIhogKImhgrInzgyIgBAAIgHgBIgfgDIiDgMIoJgyIn0gvIgCAAIgGgBIgZgDIhkgLImTgrIxDh3IgCAAIgHgBIgfgDIh9gOIlsgpIgBAAIgFAAIgVgDIAAAAQADgbAFgbQAHgwAIgHIAWgFIGmAvQJdBDHxA0QFKAiC8ATISCBzQNVBYCOASIOqBuIRTCHIGpBJIODESILSD9IgBAEQgbBKgEAGIgKACQgHAAgGgDg");
	this.shape_910.setTransform(653.7,426.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("rgba(101,156,197,0.6)").s().p("EA/2AKqIsDkLIswjzIgCAAIgFgBIgagDIhngRQiCgYjJggIgDAAIgGgBIgggEIgsgFIhXgKIoPg+Iwth+IgCAAIgGAAIgZgDIhogKImegqInwgzIgCAAIgGAAIgggEIiBgMIoHgxInxgwIgCAAIgGAAIgZgCIhkgLImQgrIw+h2IgCAAIgGgBIgegEIh9gNIlpgpIgCAAIgFgBIgUgCIgBAAIAIg2QAIgvAGgHIAXgGIGjAvQJZBCHvAzIICA1IR7ByQNGBXCYAUIOmBtIRNCHIGmBJIN9ERILOD8IAAAEIgeBQIgNABQgFAAgGgBg");
	this.shape_911.setTransform(656,427.2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("rgba(101,156,197,0.6)").s().p("EA/fAKnIr+kIIssjyIgCAAIgGgBIgagFIhlgRQiCgYjIggIgBAAIgHgBIgfgEIgsgFIhXgKIoMg+Iwnh8IgCAAIgGgBIgagDIhngKImagqInugzIgCAAIgHgBIgfgDIiBgMIoDgxInvgvIgBAAIgHAAIgYgDIhkgLImOgqIw3h1IgCAAIgHgBIgdgDIh9gOIlngoIgBAAIgFgBIgVgCIAAAAIAIg2QAHguAHgIIAWgGIGhAuQJVBBHsA0IH/A0IRyByQM3BVClAUIOgBuIRGCHIGkBJIN5EQILJD6IAAADIgeBQQgHACgGAAQgFAAgFgBg");
	this.shape_912.setTransform(658.4,427.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("rgba(101,156,197,0.6)").s().p("EA/IAKlIr7kHIsnjxIgBAAIgGgBIgZgEIhlgSQiDgYjEghIgDAAIgFgBIgggEIgsgFIhWgKIoIg+Iwjh7IgCAAIgFAAIgZgDIhngLImYgqInrgzIgCAAIgHAAIgfgDIiAgMIoBgxInrgvIgCAAIgGAAIgZgDIhigLImNgqIwxhzIgBAAIgHgBIgegEIh8gNIllgoIgBAAIgEgBIgUgCIgCAAIAIg2QAIgtAHgJIAUgHIGfAuQJTBBHoAzQE/AhC9ATIRqBxQMoBUCwAWIObBsIRBCHIGgBLILADUICzA6ILGD4IAAAEIgeBPQgHADgHAAIgIgBg");
	this.shape_913.setTransform(660.8,427.7);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("rgba(101,156,197,0.6)").s().p("EA+xAKiIr3kFIsijwIgBAAIgGgBIgZgFIhlgRQiDgajCggIgBAAIgHgBIgfgEIgrgFIhWgKIoGg+Iwch6IgBAAIgGgBIgagDIhlgKImWgqInogzIgCAAIgHgBIgfgDIh/gMIn/gwInogvIgBAAIgHAAIgYgDIhigKImKgqIwrhyIgCAAIgGgBIgegEIh7gNIljgoIgBAAIgFAAIgUgDIAAAAIAIg1QAHgsAGgKIAUgHIGdAtQJQBAHkAzQE7AhC+ASIRiBxQMYBSC8AXIOWBsIQ6CHIGeBLIK9DUICyA5ILBD3IAAAEIgeBPQgHADgHAAIgHgBg");
	this.shape_914.setTransform(663.2,428);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("rgba(101,156,197,0.6)").s().p("EA+aAKgIrykEIsejvIgBAAIgGgBIgZgEQgngIg9gKQiCgajAghIgCAAIgGgBIgggEIgqgFIhWgKIoDg9IwWh6IgBAAIgGgBIgZgCIhlgLImUgqInlgzIgCAAIgGAAIgfgDIh/gMIn8gwInmgvIgBAAIgGAAIgYgDIhhgKImIgqIwlhxIgCAAIgGgBIgegDIh6gOIlhgnIgBAAIgFAAIgUgDIgBAAIAJg1QAHgrAGgLIAUgIIGaAtQJMBAHgAyIH3AzIRZBwQMLBRDGAYIOQBsIQ1CGIGbBMIK5DTICwA5IK+D2IABADQgaBFgFAKQgIAEgGAAIgGgBg");
	this.shape_915.setTransform(665.6,428.2);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("rgba(101,156,197,0.6)").s().p("EA+DAKdIrukCIjkhHIo1imIgCAAIgFgBIgZgFIhigSQiEgbi9ghIgCAAIgGgBIgfgEIgrgFIhUgKIoBg9IwQh5IgCAAIgFAAIgZgDIhkgLImRgqInjgyIgCAAIgGgBIgfgDIh+gMIn5gwInjguIgCAAIgFAAIgYgDIhhgKImFgpQmhgsp+hEIgCAAIgGgBIgfgEIh5gNIlegnIgBAAIgFgBIgUgCIgBAAIAJg1QAGgqAHgLIATgJIGYAtQJIA/HeAxIHzAzIRRBvQL8BQDSAaIOKBrIQvCFIGYBOIK1DRICwA5IK5D0IABADIgeBPQgIAEgHAAIgFgBg");
	this.shape_916.setTransform(668,428.5);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("rgba(101,156,197,0.6)").s().p("EA9sAKbIrqkBIjihHIoyilIgCAAIgFgBIgZgFIhigTQiDgbi6giIgCAAIgHgBIgfgEIgqgFIhVgJIn8g9IwLh4IgBAAIgGgBIgZgCIhkgLImNgqInggzIgDAAIgGAAIgfgDIh+gMIn2gwInggtIgBAAIgGgBIgXgCIhhgLImCgoIwahvIgCAAIgGgBIgegEIh4gNIldgnIgBAAIgEAAIgUgDIgBAAIAIg0QAHgqAHgLIASgKIGVAtQJGA+HaAxIHwAzIRJBuQLsBODeAbIOFBrIQoCEIGWBPIKxDQICuA5IK2DzIABADIgeBOQgIAGgHAAIgEgBg");
	this.shape_917.setTransform(670.4,428.8);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("rgba(101,156,197,0.6)").s().p("EA9VAKYIrlj/IjihHIouikIgCAAIgFgBIgYgFQgogIg6gLQiDgci4giIgCAAIgGgBIgfgDIgrgFIhUgKIn6g8IwEh4IgCAAIgFAAIgYgDIhkgLImLgqInegyIgCAAIgGgBIgfgDIh9gMIn0gvIncguIgCAAIgFAAIgYgDIhfgJImBgpIwThtIgCAAIgGgBIgegEIh4gNIlagnIgBAAIgEAAIgUgDIgBAAIAIg0QAHgoAHgNIARgKIGTAsQJDA+HVAwQEvAgC/ASIRBBuQLdBNDpAdIOBBpIQiCEIGSBRIKtDPICuA4IKxDyIABADIgdBNQgJAGgGAAIgEgBg");
	this.shape_918.setTransform(672.7,429);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("rgba(101,156,197,0.6)").s().p("EA89AKWIrgj+IjghGIosikIgBAAIgFgBIgYgFIhhgTQiEgci1gjIgCAAIgGgBIgfgDIgqgFIhUgKIn3g8Iv+h3IgCAAIgFAAIgYgDIhjgKImJgqInbgzIgCAAIgGgBIgfgDIh8gMInxgvInagtIgBAAIgGAAIgXgDIhfgJIl+goIwNhtIgCAAIgHgBIgdgDIh3gOIlYgmIgBAAIgFAAIgTgDIgBAAIAIgzQAHgoAGgNIARgLIGRArQI/A+HSAwQErAfC/ASIQ5BtQLPBMD0AeIN8BpIQbCDIGQBSIKpDOICtA4IKtDwIABADIgdBNQgJAGgHAAIgDAAg");
	this.shape_919.setTransform(675.1,429.3);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("rgba(101,156,197,0.6)").s().p("EA8nAKTIrdj8IjehHIopiiIgBAAIgFgBIgYgFIhggTQiEgdiygjIgCAAIgHgBIgfgEIgpgFIhTgJIn1g8Iv5h2IgBAAIgFAAIgYgDIhigLImGgqInYgyIgDAAIgGgBIgfgDIh7gMInugvInXgsIgCAAIgFgBIgXgCIhfgKIl8gnIwGhsIgCAAIgHgBIgdgDIh3gNIlWgnIgBAAIgDAAIgUgDIgBAAIAIgzQAGgnAHgNIARgMIGNArIQLBtQEoAeC/ATIQxBsQLABLEAAfIN2BoIQWCCIGNBUIKkDMICsA4IKpDvIABADIgcBMQgKAIgGAAIgCgBg");
	this.shape_920.setTransform(677.5,429.6);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("rgba(101,156,197,0.6)").s().p("EA8PAKRIrYj7IjdhGIolihIgBAAIgFgBIgYgFIhfgUQiEgeiwgjIgCAAIgHgBIgegEIgqgFIhSgJInxg7Ivzh2IgCAAIgFAAIgYgDIhhgKImEgqInVgzIgCAAIgHgBIgegDIh7gLInsgvInUgsIgBAAIgFgBIgXgCIhegKIl5gnIwBhqIgCAAIgHgBIgdgEIh2gNIlTgmIgCAAIgEAAIgTgDIgCAAIAJgyQAHgnAGgOIAQgNIGLArQI5A9HLAvIHkAxIQpBrQKxBJELAhINxBoIQPCBIGLBVIKhDLICqA4IKlDuIACACIgdBMQgJAJgGAAIgDgBg");
	this.shape_921.setTransform(679.9,429.8);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("rgba(101,156,197,0.6)").s().p("EA74AKPIrUj5IjbhHIoiigIgBAAIgFgBIgYgFIhegUQiEgfiugjIgCAAIgHgBIgegEIgpgFIhSgJInvg7Ivth1IgBAAIgFAAIgYgDIhhgKImAgqInTgzIgCAAIgHgBIgegDIh6gLInqguInQgtIgCAAIgFAAIgXgCIhdgKIl3gnIv7hpIgCAAIgHgBIgcgDIh2gNIlRgmIgBAAIgEAAIgUgDIgBAAIAJgyQAGgmAHgPIAPgNIGJArIP9BqIHhAxIQhBqQKiBIEWAiINsBnIQJCBIGIBWIKdDKICpA4IKhDsIACADQgXA+gGANQgJAJgGAAIgCAAg");
	this.shape_922.setTransform(682.3,430.1);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("rgba(101,156,197,0.6)").s().p("EA7hAKMIrQj4IjahGIoeifIgBAAIgFgBIgXgFIhegVQiFgfirgjIgCAAIgHgBIgegEIgpgFIhRgJInsg7Ivnh0IgBAAIgFAAIgYgDIhggKIl+gqInQgzIgCAAIgHgBIgegDIh5gLInnguInOgsIgBAAIgFgBIgXgCIhdgJIl0gnIv1hoIgCAAIgHgBIgdgDIh1gNIlOgmIgCAAIgDAAIgUgDIgBAAIAJgxQAGglAGgQIAOgOIGHAqQIzA8HEAuIHeAwIQYBqQKUBHEiAjINmBmIQDCBIGFBXIKZDJICoA3IKdDrIACADIgdBLQgJAKgGAAIgBgBg");
	this.shape_923.setTransform(684.7,430.4);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("rgba(101,156,197,0.6)").s().p("EA7KAKKIrLj2IjZhGIobifIgCAAIgFgBIgWgFIhdgVQiFgfipgkIgCAAIgGgBIgfgEIgogFIhRgJInpg6Ivhh0IgBAAIgFAAIgYgDIhfgKIl8gqInNgzIgCAAIgHgBIgegDIh5gLInkguInLgrIgBAAIgFgBIgXgCIhcgJIlygmIvvhnIgCAAIgGgBIgdgEIh0gMIlNgmIgBAAIgEAAIgTgDIgBAAIAJgxQAGgkAGgQIANgPIGFAqIPwBoIHbAwIQQBpQKEBGEuAkINhBmIP8CAIGDBYIKVDIINAEhIACACIgdBLQgIAKgGAAIgBAAg");
	this.shape_924.setTransform(687.1,430.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("rgba(101,156,197,0.6)").s().p("EA6zAKHIrHj1IjXhGIoZidIgBAAIgEgBIgXgFIhcgVQiGghilgkIgDAAIgGgBIgegEIgogEIhRgKInmg5IvbhzIgCAAIgFAAIgWgDIhggLIl4gpInLgzIgCAAIgHgBIgegDIh4gLInhguInIgrIgCAAIgEAAIgXgDIhcgJIlvglIvphmIgCAAIgHgBIgcgEIh0gMIlKglIgBAAIgEgBIgTgCIgBAAIAJgyQAFgiAHgRIAMgQIGCAqIPqBnIHYAwIQIBoQJ1BEE5AmINcBlIP3B/IF/BaIKRDGIM7EgIADACIgdBKQgJAMgFAAIgBgBg");
	this.shape_925.setTransform(689.5,430.9);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("rgba(101,156,197,0.6)").s().p("EA6cAKFIrDjzIjWhGIoUidIgCAAIgEgBIgXgFIhbgVQiGghijglIgCAAIgHgBIgegDIgogFIhQgJInjg6IvVhyIgBAAIgFAAIgXgDIhegKIl3gqInIgzIgCAAIgHgBIgdgDIh4gLInegtInFgrIgCAAIgFAAIgWgDIhbgJIltglIvjhlIgCAAIgHgBIgcgDIhzgNIlIgkIgBAAIgEgBIgTgCIgCAAIAKgxQAGgiAFgSIANgQQDsAaCTAPIPjBmIHVAwQNtBXCSAQQJnBDFFAnINWBlIPwB+IF9BbIKNDFIM2EeIADACIgdBKQgJAMgEAAIgBAAg");
	this.shape_926.setTransform(691.8,431.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("rgba(101,156,197,0.6)").s().p("EA6FAKCIq/jyIjUhFIoSicIgBAAIgFgBIgWgFIhagWQiGghihglIgCAAIgHgBIgdgEIgogFIhQgJIngg5IvPhxIgCAAIgEAAIgXgDIhegLIlzgpInGgzIgCAAIgHgBIgdgDIh3gLIncgtInCgrIgBAAIgFAAIgWgCIhbgJIlrglIvdhkIgCAAIgGgBIgdgDIhygNIlGgkIgBAAIgDAAIgTgDIgCAAIAJgxQAGghAGgSIAMgRIF9ApIPcBlIHSAvQNxBYCGAPQJYBCFQAoINRBkIPqB+IF6BcIKJDEIMxEcIADACIgcBKQgKANgEAAIAAgBg");
	this.shape_927.setTransform(694.2,431.5);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("rgba(101,156,197,0.6)").s().p("EA5tAKAIuNk2IoNiaIgCAAIgFgBIgVgGIhagWQiGgiifglIgCAAIgHgBIgdgEIgngFIhQgJIndg4IvKhxIgBAAIgEAAIgXgDIhcgKIlygqInDgzIgCAAIgHgBIgdgDIh2gLInagsIm+grIgBAAIgGAAIgVgCIhagJIloglIvYhiIgCAAIgHgBIgcgDIhxgNIlDgkIgCAAIgEAAIgTgDIgBAAIAJgwQAGghAGgTIALgRIF7AoIPVBkIHOAvQN3BZB5ANQJJBAFbAqINMBjIPkB+IF4BdIKFDDIMsEaIACACIgcBKQgJANgEAAIgBAAg");
	this.shape_928.setTransform(696.6,431.7);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("rgba(101,156,197,0.6)").s().p("EA5WAJ9IuHk0IoLiaIgBAAIgFgBIgVgFIhagWQiFgjidgmIgBAAIgHgBIgdgDIgogFIhPgJInag4IvDhwIgCAAIgFAAIgWgDIhcgLIlvgpIm/gzIgDAAIgGgBIgegDIh2gLInWgsIm8grIgBAAIgFAAIgWgCIhZgJIlmgkIvRhhIgCAAIgHgBIgcgDIhxgNIlBgkIgBAAIgDAAIgUgDIgBAAIAJgwQAGgfAGgUIAKgSIF4AoIPPBjIHMAvQN6BZBtAMQI6A/FmArINHBiIPeB9IF1BfIKADBIMoEZIACACIgbBJQgJAPgEAAIgBgBg");
	this.shape_929.setTransform(699,432);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("rgba(101,156,197,0.6)").s().p("EA4/AJ7IuBkzIoIiYIgBAAIgFgBIgVgGIhYgWQiHgkiZgmIgCAAIgHgBIgdgDIgngFIhPgJInXg3Iu+hwIgBAAIgEAAIgXgDIhbgKIlsgqIm9gzIgCAAIgHgBIgdgDIh1gKInUgtIm6gqIgBAAIgEAAIgWgCIhZgJIljgjIvLhhIgCAAIgHgBIgcgDIhwgMIk/gkIgBAAIgEAAIgTgDIgBAAIAJgvQAGgfAFgUIAKgTIF2AnIPIBjIHIAuQOABZBfALQIsA+FyAsINBBiIPYB8IFyBgIJ9DAIMhEYIADACIgbBIQgJAPgDAAIgBAAg");
	this.shape_930.setTransform(701.4,432.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("rgba(101,156,197,0.6)").s().p("EA4oAJ4It8kxIoEiXIgBAAIgFgBIgVgGIhYgXQiGgkiXgmIgCAAIgHgBIgdgEIgngEIhOgJInUg2Iu4hwIgBAAIgEgBIgWgCIhbgLIlqgpIm7gzIgCAAIgGgBIgdgDIh1gLInRgsIm2gpIgBAAIgFgBIgVgCIhYgIIligjIvFhfIgCAAIgHgBIgbgEIhwgMIk9gkIgBAAIgDAAIgTgDIgBAAIAJgvQAGgdAFgVIAJgUIF0AnIPABhIHGAuQOEBaBTAKQIdA8F9AtIM8BiIPRB8IFwBgIJ5DAIMcEWIADACIgbBIQgJAQgDAAIAAgBg");
	this.shape_931.setTransform(703.8,432.6);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("rgba(101,156,197,0.6)").s().p("EA4RAJ2It2kvIoBiXIgBAAIgFgBIgVgGIhXgXQiHgliUgmIgBAAIgHgBIgdgEIgngEIhNgJInSg1IuyhwIgBAAIgFAAIgVgDIhagKIlngqIm4gzIgCAAIgHgBIgdgDIhzgKInQgsImzgqIgBAAIgEAAIgWgCIhXgIIlfgjIu/heIgCAAIgHgBIgbgDIhvgMIk7gkIgBAAIgDAAIgTgDIgBAAIAJguQAGgdAFgWIAJgUIFxAmIO6BhIHCAtQOJBbBGAIQIOA7GIAvIM3BhIPMB7IFsBiIJ1C+IMXEUIAEACIgcBIQgIAQgDAAIAAAAg");
	this.shape_932.setTransform(706.2,432.8);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("rgba(101,156,197,0.6)").s().p("EA36AJ0ItwkuIn+iWIgBAAIgFgBIgUgFIhXgYQiHgliSgnIgCAAIgHgBIgcgEIgmgEIhOgJInOg1IushvIgBAAIgEAAIgWgDIhagKIljgqIm2gzIgCAAIgHAAIgdgDIhzgLInMgsImwgpIgBAAIgFAAIgVgCIhXgIIlcgiIu5hdIgDAAIgGgBIgbgEIhvgMIk4gjIgBAAIgEAAIgSgDIgCAAIAKguQAFgcAFgWIAIgWIFvAnIOzBfIHAAtIPGBiIOTBqIMyBgIPFB7IFqBjIJxC9IMSETIAEABIgcBIQgIARgCAAIAAAAg");
	this.shape_933.setTransform(708.6,433.1);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("rgba(101,156,197,0.6)").s().p("EA3iAJxItqksIn7iVIgBAAIgEgBIgVgGIhVgXIkXhNIgCAAIgGgBIgdgEIgmgFIhNgIInLg1IumhuIgBAAIgFAAIgVgDIhZgKIlhgqIm0gzIgBAAIgIgBIgcgDIhygKInJgrImugpIgBAAIgFAAIgUgCIhXgJIlZgiIuzhbIgDAAIgGgBIgcgDIhugNIk2giIgBAAIgDAAIgTgDIgBAAIAJguIALgzIAHgVIFtAlIOsBfIG9AsQORBcAtAGQHwA5GgAxIMsBfIO/B6IFnBlIJtC7IMNESIAEABIgbBHQgIASgCAAIgBAAg");
	this.shape_934.setTransform(711,433.4);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("rgba(101,156,197,0.6)").s().p("EApnAFEIn4iTIgBAAIgEgBIgUgGIhVgYIkUhOIgCAAIgHgBIgdgEIglgEIhNgJInIg0IughuIgBAAIgEAAIgWgDIhYgKIlfgqImwgzIgCAAIgHAAIgcgDIhygLInHgrImqgoIgBAAIgFgBIgUgCIhWgIIlYghIuthbIgCAAIgHgBIgbgDIhtgMIk0gjIgBAAIgDAAIgSgDIgCAAIAKgtIAKgyIAGgXIFqAmIOmBdIG6AsQOWBcAgAFIOMBqIMnBfIO5B5IFkBmIJpC6IMIEQIAEACIgbBGQgIATgBAAg");
	this.shape_935.setTransform(713.3,433.6);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("rgba(101,156,197,0.6)").s().p("EA20AJsItfkpIn0iTIgBAAIgEgBIgUgGIhUgYIkShPIgCAAIgHgBIgcgDIgmgFIhMgIInFg0IubhtIgBAAIgEAAIgVgDIhXgKIldgqImtgzIgCAAIgHgBIgcgDIhxgKInFgrImngoIgBAAIgEAAIgVgCIhVgIIlVghIunhaIgCAAIgHgBIgbgDIhtgMIkxgiIgBAAIgDAAIgSgDIgCAAIAJgtIALgyIAFgXQDuAZB6ALIOfBdIG2AsQObBcAUAEIOIBqIMiBeIOzB5IPGEgIMDEOIAEABIgaBHQgJATgBAAIAAAAg");
	this.shape_936.setTransform(715.7,433.9);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("rgba(101,156,197,0.6)").s().p("EA2dAJqItZknIttkCIgCAAIgGgBIgdgDIhwgNInDg0I8KjWIgCAAIgHAAIgcgDIhwgLInCgqI8GirIgCAAIgIgBIgbgDIhrgMIlHglIAYh3IFlAlUAjoADiAALAAEIahDIIOtB4IPAEgIMBEOQghBagBAAIgBAAg");
	this.shape_937.setTransform(718.1,434.2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("rgba(101,156,197,0.6)").s().p("EAoyAFCItnkAIgCAAIgHgBIgcgEIhvgNIm/g0Ig3gHIgCAAIgHgBIgkgEIiVgSIpahIIurhvIgCAAIgHAAIgcgDIhvgLIm/gqIuKhXIgCAAIgHgBIgjgDIiUgOIpSg5IhfgJIgCAAIgHAAIgagEIhrgLIlFglIgBAAIAZh2IApADIE6AhIMMBNQXACTAXAEIaXDHIOmB6IO5EeILWD+IAmAPQgbBHgGAOIgCAEg");
	this.shape_938.setTransform(720.5,434.5);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("rgba(101,156,197,0.6)").s().p("EAogAFBIthj+IgCAAIgGgBIgcgEIhvgOIm8g1Ig2gHIgCAAIgHgBIgkgEIiUgRIpWhIIulhvIgCAAIgHAAIgbgDIhvgKIm7grIuDhWIgDAAIgGgBIgjgDIiVgOIpMg4IhfgJIgCAAIgHgBIgbgDIhpgMIlDgkIAYh1IAoACIE3AgIMHBNQWoCRAnAGIaLDGIOfB7IOzEcILRD9IAlAPIghBVIgCADg");
	this.shape_939.setTransform(722.9,434.7);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("rgba(101,156,197,0.6)").s().p("EAoOAFBItbj+IgCAAIgHgBIgbgEIhugNQiWgVkighIg2gHIgCAAIgHgBIgkgFIiTgRIpShHIuehuIgCAAIgGgBIgcgCIhugLIm4gqIt+hWIgCAAIgHgBIgigDIiTgOIpKg4IhdgJIgCAAIgGgBIgbgCIhpgNIlBgkIAAAAIAYhzIAnABIE1AgIMBBMQWRCPA3AJIZ/DEIOYB7IOsEcILMD7IAjAOQgaBIgGAOIgCACg");
	this.shape_940.setTransform(725.2,435);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("rgba(101,156,197,0.6)").s().p("EAn7AFAItUj8IgCAAIgGgBIgcgEIhtgOQiXgVkegiIg2gHIgBAAIgHgBIgkgEIiSgSIpOhGIuYhtIgBAAIgIgBIgbgDIhsgKIm1gqIt3hWIgCAAIgHgBIgjgDIiSgOIpGg4IhcgIIgCAAIgHgBIgagDIhpgMIk+gjIAYh0IAlABIEzAfIL8BMQV6CNBFAKIZ0DDIORB+IOmEZILHD5IAiAQQgaBHgGANIgCADg");
	this.shape_941.setTransform(727.6,435.3);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("rgba(101,156,197,0.6)").s().p("EAnqAE/ItQj7IgBAAIgGAAIgbgEIhsgPQiYgVkagjIg1gHIgCAAIgHgBIgjgEIiRgSIpLhGIuRhsIgCAAIgGAAIgbgDIhsgKImygrItxhVIgDAAIgGgBIgjgDIiQgOIpDg3IhcgJIgCAAIgGAAIgagEIhngLIk9gkIAAAAIAXhyIAlAAIExAfIL1BLQVkCLBUAMIdkDiIKPBeIOfEZILDD3IAgAQIgfBTIgCADg");
	this.shape_942.setTransform(730,435.6);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("rgba(101,156,197,0.6)").s().p("EAnXAE+ItJj4IgBAAIgGgBIgbgEIhsgPQiXgWkWgjIg1gHIgCAAIgHgBIgjgEIiQgRIpGhGIuLhsIgCAAIgHAAIgagDIhsgKImvgqItqhWIgCAAIgHgBIgjgDIiQgOIo+g2IhbgJIgCAAIgGgBIgagDIhngLIk7gjIAYhyIAkgBIEuAfILwBLQVNCJBiANIdXDhIKLBgIOZEWIK9D2IAfAQQgaBHgFAMIgCADg");
	this.shape_943.setTransform(732.4,435.8);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("rgba(101,156,197,0.6)").s().p("EAnFAE+ItCj3IgCAAIgGgBIgbgEIhqgPQiXgXkTgkIg1gGIgCAAIgHgBIgigFIiQgRIpChEIuFhrIgCAAIgGgBIgagDIhrgKImrgqItlhWIgDAAIgGAAIgigDIiQgOIo6g3IhagIIgCAAIgGgBIgZgCIhngMIk4giIAAAAIAXhxIAjgCIEtAeILqBLQU0CHByAOIdLDgIKFBiIOSEUIK5D0IAeARQgbBGgGAMIgBACg");
	this.shape_944.setTransform(734.7,436);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("rgba(101,156,197,0.6)").s().p("EAm0AE+Is+j2IgBAAIgGgBIgagEIhqgQQiYgXkOgkIg1gHIgBAAIgIgBIgigEIiOgRIo+hFIt/hpIgCAAIgGgBIgbgDIhqgKImngqItfhVIgCAAIgHgBIgigDIiOgOIo3g2IhZgIIgCAAIgGgBIgagCIhlgMIk2giIAAAAIAXhwIAigDIEqAeILkBKQUfCFCAARIc9DeIKABjIOMESIK0DzIAcAQQgZBHgGALIgBADg");
	this.shape_945.setTransform(737.1,436.3);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("rgba(101,156,197,0.6)").s().p("EAmhAE9Is3j0IgCAAIgFgBIgagEIhpgPQiXgZkMgkIg0gHIgBAAIgHgBIgjgEIiNgRIo7hEIt4hqIgCAAIgGAAIgagDIhpgKImlgqItYhVIgCAAIgHgBIgigDIiNgNIozg2IhZgIIgBAAIgHgBIgZgDIhkgLIk0giIAAAAIAWhvIAhgEIEpAfILeBJQUHCDCRASIcvDdIJ7BkIOFERIKvDxIAbARQgZBGgGALIgBADg");
	this.shape_946.setTransform(739.5,436.5);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("rgba(101,156,197,0.6)").s().p("EAyvAJQIsgkTIsxjzIgBAAIgGgBIgagEQgmgGhCgJQiYgakHgkIg0gHIgCAAIgHgBIghgEIiNgRIo3hEItxhoIgCAAIgGgBIgagCIhogLImhgpItThVIgCAAIgHgBIgigDIiMgNIovg2IhYgIIgBAAIgGgBIgZgCIhkgLIkygiIAAAAIAXhuIAggFIElAeILZBJQTwCACgAVIciDbIJ2BmIN+EQIKrDuIAaASIggBQIgBACIgBAAg");
	this.shape_947.setTransform(741.8,436.7);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("rgba(101,156,197,0.6)").s().p("EAyXAJOIsZkRIssjyIgBAAIgGgBIgagEIhngQQiXgakFgkIgzgIIgCAAIgHgBIgigEIiLgQIozhDItrhoIgBAAIgHgBIgZgCIhngLImegpItNhVIgCAAIgHgBIgigDIiLgNIosg1IhWgIIgCAAIgFgBIgZgDIhjgLIkwghIgBAAIAYhtIAegGIEkAeILTBIQTZB/CuAWIcWDaIJwBnIN5EOIKlDtIAZASQgaBFgGALIgBACIgBAAg");
	this.shape_948.setTransform(744.2,436.9);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("rgba(101,156,197,0.6)").s().p("EAyAAJLIsUkPIsmjwIgCAAIgFgBIgagEIhlgQQiZgbkAglIgygHIgCAAIgHgBIgigEIiLgRIouhCItlhnIgCAAIgFgBIgagCIhmgLImbgpItHhVIgCAAIgHgBIgigDIiJgNIoog0IhWgIIgBAAIgGgBIgZgDIhjgLIktggIAAAAIAWhtIAfgHIEhAeILMBIQTDB8C9AYIcIDZIJsBpIJQCwIEiBcIKgDrIAXASQgZBFgFAKIgCADIAAgBg");
	this.shape_949.setTransform(746.6,437.2);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("rgba(101,156,197,0.6)").s().p("EAxoAJJIsPkNIkThVIoMiZIgCAAIgGgBIgZgFQglgHhAgJQiYgbj9glIgygIIgCAAIgHgBIghgEIiKgRIoqhCItehmIgCAAIgGAAIgZgDIhmgKImXgqItChUIgBAAIgHgBIgigDIiJgNIokg0IhUgIIgCAAIgGgBIgYgDIhigKIkrghIgBAAIAXhsIAdgHIEgAdILGBHQSrB7DMAZIb7DYIJnBqIJNCwIEfBbIKbDpIAWATIgeBOIgCACIAAAAg");
	this.shape_950.setTransform(749,437.4);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("rgba(101,156,197,0.6)").s().p("EAxQAJHIsIkLIkShVIoIiZIgCAAIgFgBIgagEQglgHg+gJQiYgdj6glIgxgIIgCAAIgHgBIgigEIiIgQIomhCItZhlIgCAAIgFgBIgZgCIhlgLImUgpIs7hUIgCAAIgHgBIghgDIiIgNIogg0IhVgIIgBAAIgGAAIgYgDIhggKIkqggIAAAAIAWhsIAdgIIEcAdILBBHQSUB4DcAcIbtDVIJiBtIJICuIEdBaIKWDoIAWATQgaBFgFAJIgBACIgBAAg");
	this.shape_951.setTransform(751.3,437.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("rgba(101,156,197,0.6)").s().p("EAw4AJEIsDkJIkQhUIoEiYIgBAAIgGgBIgZgEIhigRQiZgdj1glIgxgIIgCAAIgHgBIghgEIiIgQIojhCItRhkIgCAAIgFgBIgZgCIhkgLImSgpIs1hUIgBAAIgIgBIgggDIiIgNIocgzIhTgIIgCAAIgFAAIgYgDIhggKIknggIgBAAIAXhrIAbgJIEbAdIK7BGQR8B3DsAdIbgDUIJdBuIJDCtIEbBaIKRDmIAVAUQgaBEgFAJIgBACIgBgBg");
	this.shape_952.setTransform(753.7,437.9);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("rgba(101,156,197,0.6)").s().p("EAwhAJCIr+kHIkNhUIoAiWIgCAAIgFgBIgZgFQgmgHg8gKQiZgdjygmIgwgIIgCAAIgHgBIghgEIiHgQIoehBItMhkIgBAAIgGAAIgYgDIhjgKImPgpIsuhUIgCAAIgHgBIghgDIiGgNIoYgzIhTgIIgCAAIgFAAIgYgDIhfgKIklgfIAAAAIAVhqIAbgKIEZAdIK1BFQRmB1D5AeIbUDTIJYBwII+CrIEaBaIKMDkIASAUIgdBNIgCABIAAAAg");
	this.shape_953.setTransform(756.1,438.1);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("rgba(101,156,197,0.6)").s().p("EAwJAJAIr3kGIkMhTIn9iVIgBAAIgFgBIgZgFIhhgRQiZgejtgnIgxgIIgCAAIgHgBIgggEIiGgQIobhAItFhjIgBAAIgGAAIgYgDIhjgKImKgpIsphUIgCAAIgHgBIghgDIiFgMIoVgzIhRgIIgBAAIgGAAIgXgDIhfgKIkigfIgBAAIAVhpIAagLIEWAcIKvBGQRQByEIAgIbHDSIJTBxII6CqIEXBaIKIDiIAQAUQgYBEgFAIIgCACIAAAAg");
	this.shape_954.setTransform(758.4,438.3);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("rgba(101,156,197,0.6)").s().p("EAvxAI9IrykDIkJhTIn5iUIgBAAIgFgBIgZgFIhfgSQiagfjqgmIgwgIIgCAAIgHgBIgggEIiFgQIoWhAItAhiIgBAAIgGgBIgXgCIhigKImIgpIsihUIgCAAIgIgBIgggDIiEgMIoRgyIhRgIIgBAAIgFgBIgXgCIhfgKIkggfIgBAAIAWhoIAZgMIEUAcIKpBFQQ4BwEYAiIa5DRIJPByII2CpIETBZIKEDhQAHALAIAKQgYBDgFAIIgCACIAAgBg");
	this.shape_955.setTransform(760.8,438.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("rgba(101,156,197,0.6)").s().p("EAvaAI7IrtkBIkHhTIn1iTIgBAAIgFgBIgYgFQgmgIg5gKQiagfjmgnIgvgIIgDAAIgGgBIghgEIiEgQIoSg/Is5hiIgCAAIgEAAIgYgDIhhgKImFgpIschTIgCAAIgHgBIgggDIiDgMIoOgyIhQgIIgBAAIgFAAIgXgDIhdgKIkfgeIAAAAIAVhoIAYgMIESAcIKjBEQQhBuEnAkIatDPIJJB0IIxCoIESBYIJ+DgIAPAUQgZBEgEAHIgCABIAAAAg");
	this.shape_956.setTransform(763.2,438.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("rgba(101,156,197,0.6)").s().p("EAjbAE5IkFhSInxiSIgBAAIgGgBIgXgFQgmgIg5gKQiZggjjgnIgvgJIgCAAIgGgBIghgEIiDgPIoOg/IsyhhIgCAAIgFAAIgYgDIhggKImBgoIsXhUIgBAAIgIgBIgfgDIiDgMIoJgyIhPgHIgCAAIgEgBIgYgCIhbgKIkdgeIgBAAIAWhmIAWgOIEQAcIKeBDQQKBtE2AlIafDOIJDB1IIuCmIEQBZIJ5DdIAOAWQgaBDgDAHIgCABg");
	this.shape_957.setTransform(765.6,439);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("rgba(101,156,197,0.6)").s().p("EAjJAE5IkDhSIntiRIgCAAIgEgBIgYgEQglgJg4gKQiaghjfgoIgugJIgCAAIgHgBIgggDIiCgQIoKg+IsthgIgCAAIgEAAIgYgDIhfgKIl+goIsQhUIgCAAIgHAAIgggDIiBgNIoGgxIhOgHIgBAAIgGgBIgWgCIhcgKIkageIgBAAIAVhlIAXgOIEOAbIKXBDQPzBqFFAnIaRDNIJAB2IIoCmIEOBXIJ0DdIAMAVQgYBDgEAGIgCACg");
	this.shape_958.setTransform(767.9,439.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("rgba(101,156,197,0.6)").s().p("EAi3AE5IkBhSInpiQIgBAAIgGgBIgWgFQgmgIg3gKQiagijbgnIgugKIgCAAIgHgBIgggDIiBgPIoHg+IslhgIgCAAIgEAAIgYgDIhegKIl7goIsLhTIgCAAIgHgBIgegDIiCgMIoBgxIhNgHIgCAAIgFgBIgWgCIhbgKIkYgdIgBAAIAVhlIAVgPIEMAbIKSBCQPbBpFUApIaFDLII6B4IIlCkIELBXIJvDbIALAWQgYBCgEAGIgCABg");
	this.shape_959.setTransform(770.3,439.5);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("rgba(101,156,197,0.6)").s().p("EAilAE4Ij/hRInliPIgBAAIgFgBIgXgFIhcgTQiagijYgoIgugJIgBAAIgHgBIgfgEIiBgPIoCg9IsghfIgBAAIgFAAIgXgDIhdgKIl3goQlIgkm9gvIgCAAIgHgBIgfgDIiAgMIn+gwIhNgHIgBAAIgEgBIgXgCIhagKIkWgdIgBAAIAVhkIAVgQIEIAbIKNBCQPEBmFjArIZ4DKII1B5IIhCjIEIBXIJrDZIAKAWQgZBCgDAGIgDABg");
	this.shape_960.setTransform(772.7,439.7);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("rgba(101,156,197,0.6)").s().p("EAiTAE4Ij9hRInhiOIgCAAIgEgBIgXgEQgmgJg1gLQiZgjjVgoIgtgJIgCAAIgHgBIgfgEIh/gPIn/g8IsZhfIgBAAIgFAAIgWgDIhegKIl0gnIr+hUIgCAAIgHAAIgfgDIh/gMIn6gxIhLgGIgCAAIgFgBIgVgCIhagKIkTgcIgBAAIAUhkIATgRIEIAbIKFBBQOvBlFxAsIZrDJIIwB5IIcCjIEHBXIJlDWIAIAXQgYBDgDAEIgCACg");
	this.shape_961.setTransform(775,440);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("rgba(101,156,197,0.6)").s().p("EAiBAE3Ij7hQIndiMIgCAAIgEgBIgWgGIhagTQibgkjRgoIgtgKIgBAAIgHgBIgfgDIh+gPIn6g8IsUheIgBAAIgFAAIgVgCIhdgKIlwgoIr5hTIgCAAIgHgBIgfgDIh9gMIn3gvIhLgHIgCAAIgEgBIgVgCIhZgKIkSgcIgBAAIAUhiIATgSIEFAaIKABBQOXBjGBAtIZeDIIIqB6IIYCiIEFBXIJhDVQADAMADALQgYBCgDAEIgCABg");
	this.shape_962.setTransform(777.4,440.2);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("rgba(101,156,197,0.6)").s().p("EAhvAE3Ij5hQInZiMIgCAAIgEgBIgWgFIhZgTQiagljNgpIgtgJIgBAAIgHgBIgggEIh9gOIn2g8IsNhdIgBAAIgFAAIgVgCIhcgLIltgnIrzhTIgCAAIgHgBIgegDIh9gLInzgwIhKgHIgBAAIgFAAIgWgCIhXgKIkPgbIgCAAIAUhiIASgTIEDAaQICA0B4ANQOABgGQAwIZQDFIImB9IITCgIEDBWIJcDUIAGAXQgZBCgCAEIgDABg");
	this.shape_963.setTransform(779.8,440.4);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("rgba(101,156,197,0.6)").s().p("EAhcAE3Ij2hQInWiLIgBAAIgFgBIgVgEIhYgUQibgmjJgoIgsgKIgCAAIgHgCIgfgDIh8gPInyg7IsGhcIgCAAIgEAAIgWgDIhagKIlrgnIrthSIgCAAIgHgBIgdgDIh9gMInvgvIhJgHIgBAAIgEAAIgWgCIhXgJIkMgcIgCAAIAUhhIARgTIEBAaIJ0A/QNpBeGfAyIZDDEIIhB+IIPCfIEABWIJXDRIAFAZQgZBBgCAEIgDABg");
	this.shape_964.setTransform(782.2,440.7);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("rgba(101,156,197,0.6)").s().p("EAhLAE2Ij1hPInSiJIgBAAIgEgBIgVgGIhYgUQibgmjFgpIgsgKIgBAAIgIgBIgegDIh7gPInvg7IsAhbIgBAAIgEAAIgWgCIhagKIlmgoIrnhSIgCAAIgHgBIgegDIh7gLInrgvIhJgHIgBAAIgEAAIgVgCIhWgJIkLgbIgCAAIAUhhIAQgUID+AaIJuA/QNSBcGvAzIY2DDIIcCAIILCeID+BVIJSDQIACAYQgYBBgCAEIgCAAg");
	this.shape_965.setTransform(784.5,440.9);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("rgba(101,156,197,0.6)").s().p("EAg4AE2IjyhQInOiHIgBAAIgFgBIgVgGIhWgUQibgnjCgpIgrgKIgBAAIgHgBIgfgEIh6gOInrg6Ir5hbIgCAAIgEAAIgVgCIhZgKIlkgoIrhhSIgCAAIgHgBIgdgDIh6gLInoguIhHgHIgCAAIgDAAIgWgDIhVgJIkIgaIgCAAIAUhgIAOgVID9AaIJoA+QM7BbG9A0IYpDCIIXCBIIHCdID8BUIJMDPIACAYQgYBBgCADIgDABg");
	this.shape_966.setTransform(786.9,441.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("rgba(101,156,197,0.6)").s().p("EArTAIhIuck6InLiHIgBAAIgEgBIgVgFIhWgVQibgoi+gpIgrgKIgBAAIgIgBIgdgEIh6gOInng6IrzhZIgBAAIgEgBIgVgCIhYgKIlhgnIrahSIgCAAIgHgBIgegDIh5gLInjguIhHgHIgBAAIgEAAIgVgCIhVgJIkGgaIgCAAIAUhfIAOgWID6AZQIOA1BUAJQMkBYHNA3IYbDAIISCDIICCbINCEhIABAZQgYBAgCADIgCAAIgCAAg");
	this.shape_967.setTransform(789.3,441.3);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("rgba(101,156,197,0.6)").s().p("EAq7AIfIuVk5InHiFIgBAAIgEgBIgVgGIhUgUQibgpi7gqIgqgKIgCAAIgHgBIgegDIh4gOInjg6IrthZIgBAAIgEAAIgUgCIhYgKIldgnIrVhSIgCAAIgHgBIgdgDIh4gLInggtIhGgHIgBAAIgEAAIgUgDIhUgIIkEgaIgCAAIATheIANgXID4AZQIRA1BLAJQMNBWHcA4IIgBAIPuB/IINCEIH+CaIM7EfIgBAZQgYBAgCADIgDAAg");
	this.shape_968.setTransform(791.7,441.6);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("rgba(101,156,197,0.6)").s().p("EAqjAIcIuNk2InDiEIgBAAIgEgBIgVgGIhTgVQicgpi3gqIgqgKIgBAAIgHgBIgegEIh3gOInfg5IrnhYIAAAAIgFAAIgUgCIhWgKIlbgnIrOhSIgCAAIgHgBIgegDIh2gLIncgtIhGgGIgBAAIgDgBIgVgCIhTgIIkCgaIgCAAIAThdIANgYID1AZIJXA9QL2BUHqA6IIbBAIPmB+IIICFIH6CZIMzEdIgCAZQgXBAgCADIgDgBg");
	this.shape_969.setTransform(794.1,441.8);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("rgba(101,156,197,0.6)").s().p("EAqLAIaIuGk0Im/iDIgBAAIgEgBIgUgFIhTgWQibgqi0gqIgpgKIgCAAIgHgBIgdgEIh3gOInag4IrhhXIgBAAIgDAAIgVgDIhWgKIlWgnIrJhSIgCAAIgHAAIgdgDIh2gLInYgtIhEgGIgBAAIgEAAIgUgCIhTgJIj/gZIgCAAIAThcIALgZIDzAYIJRA8QLfBTH6A8IIWA+IPeB+IIDCGIH1CYIMsEbIgDAZQgYBAgCADIgCgBg");
	this.shape_970.setTransform(796.5,442.1);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("rgba(101,156,197,0.6)").s().p("EApyAIYIt+kyIm7iCIgBAAIgDgBIgVgFIhRgWQicgriwgqIgpgLIgBAAIgHgBIgegDIh1gOInXg4IrahXIgBAAIgDAAIgVgCIhVgKIlTgnIrChRIgCAAIgHgBIgdgDIh2gLInUgsIhDgGIgBAAIgEgBIgUgCIhSgIIj9gZIgCAAIAThbIAKgaIDxAYQIaA2AxAGQLIBQIJA+IISA+IPVB9IH+CIIHwCWIMmEZIgFAaQgXBAgCABIgDAAg");
	this.shape_971.setTransform(799,442.3);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("rgba(101,156,197,0.6)").s().p("EApaAIVIt2kvIm3iBIgBAAIgEgBIgUgGIhRgWQicgrirgrIgpgKIgCAAIgHgBIgdgEIh0gNInTg4IrUhWIgBAAIgDAAIgUgCIhVgKIlQgnIq8hRIgCAAIgHAAIgdgDIh0gLInRgsIhCgHIgBAAIgDAAIgVgCIhRgIIj7gZIgCAAIAThaIAJgbIDwAYQIcA3AoAFQKxBOIYA/IXaC5IH5CKIHsCVIMfEXIgHAaQgXBAgCABIgCgBg");
	this.shape_972.setTransform(801.4,442.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("rgba(101,156,197,0.6)").s().p("EApBAITItuktIm0h/IgBAAIgDgBIgTgHIhQgWIlEhXIgpgKIgCAAIgHgCIgdgDIhzgNInPg4IrNhUIgBAAIgDAAIgUgCIhUgKIlNgoIq2hRIgBAAIgIAAIgcgDIhzgLInNgrIhCgHIgBAAIgEAAIgTgCIhQgIIj6gYIgBAAIAShaIAJgcIDsAYQIgA3AfAFQKaBLInBBIIJA+IPEB7IHzCLIHoCUIMYEUIgHAbQgYA/gBABIgDgBg");
	this.shape_973.setTransform(803.9,442.8);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("rgba(101,156,197,0.6)").s().p("EAopAIQItmkqImwh/IgBAAIgDgBIgUgGIhPgWIlBhYIgngLIgCAAIgHgBIgdgDIhygOInLg2IrHhUIgBAAIgDAAIgUgDIhSgKIlKgnIqwhRIgCAAIgHAAIgdgDIhygKInJgsIhBgGIgBAAIgDAAIgTgCIhQgIIj3gYIgCAAIAShZIAIgdIDqAYII6A6IS5CNIIEA+IO7B5IHvCNIHkCTIMQESIgJAbQgXA/gBAAIgDgBg");
	this.shape_974.setTransform(806.3,443);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("rgba(101,156,197,0.6)").s().p("EAoQAIOItekoImsh+IgBAAIgDgBIgTgGIhOgXIk+hZIgngLIgCAAIgHAAIgcgEIhygNInGg2IrBhUIgBAAIgDAAIgTgCIhSgKIlHgnIqqhQIgCAAIgHgBIgcgCIhygLInFgrIhAgGIgBAAIgDgBIgTgBIhPgJIj1gXIgBAAIARhYIAHgdIDoAXQInA4ANACISxCMIH/A9IOzB5IPJEfIMJERIgJAcQgYA+gBAAIgDgBg");
	this.shape_975.setTransform(808.7,443.3);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("rgba(101,156,197,0.6)").s().p("EAn7AINItaknIttkAIgBAAIgHgBIgcgDIhxgNInDg2I8JjWIgCAAIgHAAIgcgDIhxgLInCgqImYgnIAYh2QMOBPAFACIakDIIOqB4IPAEgIMCEOQgiBagBAAIAAAAg");
	this.shape_976.setTransform(811.2,443.5);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("rgba(101,156,197,0.6)").s().p("EAncAIIItKkjItlj9IgCAAIgHgBIgcgEIhvgNIm+g2ImcgyIgDAAIgHgBIgogFIingUIqmhQInfg5IgCAAIgHgBIgbgDIhwgKIm9gqImVgnIAYh1IAvAEQLSBJALADIZCC8IP0CEIO3EdILOD8IAsAQQgiBagBAAIgHgCg");
	this.shape_977.setTransform(813.5,443.8);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("rgba(101,156,197,0.6)").s().p("EAnFAIFItEkgItdj7IgBAAIgHgBIgcgFIhugMQiVgUkkgjImYg0IgCAAIgHAAIgogFIimgUIqhhQInZg4IgCAAIgHAAIgbgDIhvgKIm5gqImRgnIAXhzIAvACQLFBIASADIYzC7IPqCFIOvEcILID5IAqARQgiBYgBAAIgGgBg");
	this.shape_978.setTransform(815.9,444.1);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("rgba(101,156,197,0.6)").s().p("EAmtAICIs7keItVj5IgCAAIgGgBIgcgDIhtgOQiWgUkfgkImTgzIgDAAIgHgBIgngFIimgTIqahPInVg4IgBAAIgHgBIgbgDIhugKIm0gqImOgnIAXhyIAtADQK6BGAYAEIYlC6IPgCHIOlEYILCD3IAoARQggBYgCAAIgGgBg");
	this.shape_979.setTransform(818.3,444.4);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("rgba(101,156,197,0.6)").s().p("EAmVAH/Is0kaItMj4IgCAAIgGgBIgcgEIhsgOQiUgUkcgkImPg0IgDAAIgHgBIgngFIikgTIqUhPInQg3IgCAAIgGAAIgbgDIhsgKImxgqImJgmIAWhyIAsACQKuBFAeAEIYWC5IPWCIIOdEXIK7D1IAnARQggBXgCAAIgGgBg");
	this.shape_980.setTransform(820.7,444.7);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("rgba(101,156,197,0.6)").s().p("EAl+AH8IsskYItFj2IgBAAIgHgBIgbgDIhrgPImsg4ImLg1IgDAAIgHgBIgngFIihgTIqOhNInMg3IgCAAIgGAAIgbgEIhrgKImsgpImGgmIAWhwIAsAAQKgBFAlAEIYHC3IPNCLIOUEUIK1DzIAlARQggBVgBABIgGgBg");
	this.shape_981.setTransform(823.1,445);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("rgba(101,156,197,0.6)").s().p("EAlmAH5IskkVIs9j0IgCAAIgGgBIgbgEIhqgOQiTgVkUgkImHg2IgCAAIgHgBIgngEIiggTIqJhNInGg2IgCAAIgGgBIgbgDIhqgKImogpImCgmIAWhvIAqgBQKUBEAsAGIX4C1IPDCMIOMESIKuDwIAkASQggBVgBABIgGgCg");
	this.shape_982.setTransform(825.5,445.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("rgba(101,156,197,0.6)").s().p("EAlPAH3IsdkTIs1jyIgCAAIgGgBIgagDIhpgPQiUgWkPgkImCg2IgDAAIgHgBIgmgFIifgTIqChMInDg1IgBAAIgHgBIgagDIhpgKImjgpIl/glIAWhuIApgCQKIBCAyAHIXqC0IO5CNIODEQIKnDuIAjASQgfBUgCABIgFgBg");
	this.shape_983.setTransform(827.8,445.5);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("rgba(101,156,197,0.6)").s().p("EAk3AH0IsVkQIstjwIgCAAIgGgBIgZgDIhogPQiTgWkMglIl+g3IgDAAIgGgBIgngEIidgTIp8hLIm+g1IgCAAIgGgBIgZgCIhpgKImfgpIl7gmIAWhtIAogCQJ8BBA5AHIXaCyIOwCQIN6ENIKgDsIAiATQgfBSgCABIgFgBg");
	this.shape_984.setTransform(830.2,445.8);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("rgba(101,156,197,0.6)").s().p("EAkfAHxIsNkNIsmjtIgBAAIgGgBIgZgFIhngOQiTgYkGgkIl6g3IgEAAIgHgBIglgFIicgSIp2hLIm5g1IgCAAIgGAAIgagCIhmgKImcgpIl3glIAWhtIAngCQJvA/A/AIIXNCxIOlCRINxELIKbDpIAgATQgfBSgCACIgFgCg");
	this.shape_985.setTransform(832.6,446.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("rgba(101,156,197,0.6)").s().p("EAkIAHvIsGkLIsdjrIgCAAIgGgBIgZgFIhlgOQiTgYkDglIl1g3IgDAAIgHgBIglgFIibgTIpwhJIm0g1IgCAAIgGAAIgZgCIhmgKImXgpIl0glIAWhrIAmgEQJjA/BFAJIW+CvIOcCSINpEJIKTDoIAfATQgeBQgCACIgFgBg");
	this.shape_986.setTransform(835,446.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("rgba(101,156,197,0.6)").s().p("EAjwAHsIr+kIIsVjqIgCAAIgGgBIgZgDQgkgHhAgIQiSgZj/glQimgajLgeIgDAAIgHgBIglgFIiZgSIpqhJImwg0IgCAAIgGAAIgYgDIhlgJImTgpIlwgkIAWhqIAlgFQJXA9BLAJIWwCuIOSCUINfEHIKNDlIAeAUIggBRIgFgBg");
	this.shape_987.setTransform(837.4,446.6);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("rgba(101,156,197,0.6)").s().p("EAjYAHqIr2kFImpiCIllhmIgBAAIgGgBIgYgEQglgHg+gJQiSgYj6glIlug6IgDAAIgGgBIglgEIiYgSIpkhJImrgyIgCAAIgGgBIgYgDIhkgJImPgoIlrglIAUhpIAkgGQJLA9BSAKIWhCsIOICWINXEFIKHDiIAbAUIgeBRIgGgBg");
	this.shape_988.setTransform(839.8,446.8);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("rgba(101,156,197,0.6)").s().p("EAjAAHnIrukCIsFjmIgCAAIgGgBIgYgEQgkgHg9gJQiTgZj1glIlqg6IgDAAIgGgBIglgFIiWgRIpehIImmgyIgDAAIgFgBIgYgCIhjgKImKgoIlpgkIAWhoIAigHQI+A7BZALIWTCrIN9CXINPEDIKADgIAaAUQgcBOgCACIgGgBg");
	this.shape_989.setTransform(842.2,447.1);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("rgba(101,156,197,0.6)").s().p("EAipAHkIrnkAIr9jkIgCAAIgFgBIgYgDIhhgQQiRgajygmQiigbjDgeIgDAAIgHgBIgkgFIiVgSIpYhHImigxIgCAAIgFgBIgYgDIhigJImFgnIllglIAVhnIAhgHQIyA5BfAMIWECpIN0CZINGEBIJ5DdIAZAVQgcBMgCAEIgFgCg");
	this.shape_990.setTransform(844.5,447.4);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("rgba(101,156,197,0.6)").s().p("EAiRAHiIrfj9Imch/IlZhlIgBAAIgGgBIgYgCIhfgQQiSgbjtglIlhg7IgCAAIgHgBIgkgEIiTgSIpThHImdgwIgCAAIgFgBIgYgDIhhgJImBgnIligkIAWhmIAggJQImA5BlAMIV2CoINqCbIGqB+IGTCAIJzDbIAYAVQgdBMgCADIgFgBg");
	this.shape_991.setTransform(846.9,447.6);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("rgba(101,156,197,0.6)").s().p("EAh6AHgIrYj7ImYh+IlVhkIgCAAIgFgBIgXgCQgkgHg6gJQiRgcjqglIldg8IgCAAIgHgBIgkgEIiSgRIpMhGImYgxIgCAAIgFAAIgYgDIhfgJIl9gnIlegkIAVhlIAfgJQIaA3BrANIVnCnINhCcIGlB+IGPB+IJsDZIAWAVIgeBOIgEAAg");
	this.shape_992.setTransform(849.3,447.9);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("rgba(101,156,197,0.6)").s().p("EAhiAHdIrQj4ImTh9IlShjIgBAAIgGgBIgWgEQglgFg5gJQiRgcjlgmQiegci7ggIgCAAIgHgBIgjgFIiRgRIpFhFImUgwIgCAAIgFAAIgYgDIhegJIl5gnIlagjIAVhkIAegLQIOA3BxAOIVYClINXCeIGhB8IGLB9IJmDXIAUAWIgdBNIgFgBg");
	this.shape_993.setTransform(851.7,448.1);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("rgba(101,156,197,0.6)").s().p("EAhKAHbIrJj2ImOh8IlOhiIgBAAIgGgBIgXgEIhcgOQiPgdjigmIlVg9IgBAAIgIgBIgjgEIiPgRIpAhEImPgwIgBAAIgGAAIgWgCIhegKIl0gmIlXgkIAUhiIAdgMQICA2B4AOIVJCkINOCfIGcB7IGGB8IJgDVQAJAMAKAKQgbBIgCAEIgFAAg");
	this.shape_994.setTransform(854.1,448.4);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("rgba(101,156,197,0.6)").s().p("EAgzAHYIrBjzImKh7IlLhhIgBAAIgFgBIgXgFIhbgNQiQgdjdgnIlQg+IgCAAIgHgBIgjgDIiNgRIo7hEImKgvIgCAAIgFAAIgWgCIhdgKIlwgmIlTgjIAUhiIAdgNQH1A1B+APIU7CjINEChIGXB5IGCB7IJZDTIASAWQgbBHgCAFIgEgBg");
	this.shape_995.setTransform(856.4,448.7);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("rgba(101,156,197,0.6)").s().p("EAgbAHWIq5jwImGh7IlHhgIgCAAIgFgBIgWgEIhZgPQiQgdjZgmQiageiyggIgCAAIgHgBIgjgFIiMgQIo0hDImGguIgBAAIgFgBIgXgCIhbgJIlsgnIlPgjIAUhgIAbgOQHpA0CFAQIUsCgIM6CjIGTB4IF+B7IJSDQIARAWQgbBHgCAEIgCAAIgCAAg");
	this.shape_996.setTransform(858.8,448.9);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("rgba(101,156,197,0.6)").s().p("EAgEAHTIqyjuImCh5IlDhfIgCAAIgEgBIgWgEIhYgPQiQgejVgmQiYgeiwghIgCAAIgHgBIgigFIiLgQIouhCImBguIgCAAIgEAAIgXgDIhagJIlogmIlLgjIAUhfIAagOQHdAyCMAQIUdCgIMvCkIGQB3IF5B5IJMDOIAOAXQgZBGgDAEIgCAAIgBAAg");
	this.shape_997.setTransform(861.2,449.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("rgba(101,156,197,0.6)").s().p("AfsHQIqrjrIl8h4IlBheIgBAAIgEgBIgWgEIhXgPQiPgfjRgmIlEhAIgBAAIgIgBIgigEIiJgQIoohBIl8guIgCAAIgEAAIgXgCIhYgKIlkglIlHgjIATheIAZgQQHQAxCSASIUPCeIMmCmIGLB1IF0B4IJGDMIANAXQgZBFgDAEIgCABIgBgBg");
	this.shape_998.setTransform(863.6,449.4);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("rgba(101,156,197,0.6)").s().p("AfUHOIqijoIl5h4Ik8hdIgBAAIgFgBIgVgEIhXgPQiOgfjNgnQiVgfiqghIgCAAIgHgBIgigEIiHgQIojhBIl4gtIgBAAIgFAAIgVgCIhYgJIlggmIlDgiIATheIAYgQQHEAwCYASIUBCcIMcCoIGGB0IFxB4II+DJQAGANAGALQgZBDgDAFIgCAAIgBAAg");
	this.shape_999.setTransform(866,449.7);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("rgba(101,156,197,0.6)").s().p("Ae8HLIqajlIl1h3Ik4hcIgCAAIgEgBIgVgEIhVgPQiOggjIgnIk8hBIgCAAIgHgBIghgEIiGgPIochAIl0gtIgCAAIgEAAIgVgCIhXgJIlbgmIlAgiIAThcIAXgRQG4AvCeASITyCbIMSCqIGCByIFtB3II4DHIAKAYQgYBCgDAFIgCAAIgCAAg");
	this.shape_1000.setTransform(868.4,449.9);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("rgba(101,156,197,0.6)").s().p("AUSDmIlwh2Ik1haIgBAAIgFgBIgUgFIhUgQQiOggjEgnIk4hBIgCAAIgHgBIgggFIiFgPIoWg/IlvgsIgBAAIgFAAIgVgDIhWgJIlXglIk8ghIAThcIAWgSQGrAuClAUITkCZIMICrIF9BxIFpB2IIxDFIAJAYQgYBCgDAEIgDABg");
	this.shape_1001.setTransform(870.7,450.2);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("rgba(101,156,197,0.6)").s().p("AUCDmIlsh1IkxhaIgBAAIgEgBIgVgEIhTgSQiNgfjAgnQiSggihgiIgCAAIgHgBIghgEIiDgPIoQg/IlqgrIgBAAIgFAAIgUgDIhWgIIlSglIk5giIAThaIAVgTQGfAsCsAUITUCYIL/CtIF4BwIFlB1IIqDCIAIAZQgYBAgDAGIgDAAg");
	this.shape_1002.setTransform(873.1,450.5);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("rgba(101,156,197,0.6)").s().p("ATyDmIlnh0IkuhZIgBAAIgFgBIgUgEIhRgSQiOggi7gnIkvhCIgCAAIgHgBIgggEIiCgPIoKg+IlmgrIgBAAIgFAAIgUgCIhTgJIlOglIk2giIAThZIAUgUQGSAsCyAVITHCWIL0CvIF1BuIFfB0IIlDAIAGAZQgYA/gDAGIgCABg");
	this.shape_1003.setTransform(875.5,450.7);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("rgba(101,156,197,0.6)").s().p("ATiDmIljhzIkqhXIgBAAIgEgBIgUgFIhQgSQiNggi4gnIkrhEIgCAAIgHgBIgggEIiAgPIoEg9IlhgqIgBAAIgEAAIgVgCIhSgJIlKgkIkygiIAThYIASgVQGHAqC4AWIS4CVILrCwIFwBtIFbBzIIeC+IAFAZQgXA/gEAGIgCAAg");
	this.shape_1004.setTransform(877.9,451);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("rgba(101,156,197,0.6)").s().p("ATSDmIlehyIknhXIgBAAIgEgBIgUgEIhPgSQiNghizgoIknhDIgCAAIgHgBIgfgFIh/gOIn+g8IldgqIgBAAIgEgBIgUgCIhRgIIlGglIkughIAThXIARgWQF6ApC/AXISpCUILhCxIFsBsIFXByIIXC8IAEAZQgXA+gEAGIgCABg");
	this.shape_1005.setTransform(880.3,451.3);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("rgba(101,156,197,0.6)").s().p("AcvG8IptjWIlahxIkjhWIgBAAIgEgBIgTgEIhPgTQiLghiwgnIkihFIgCAAIgHgBIgggEIh9gPIn5g7IlXgpIgBAAIgEAAIgTgDIhRgIIlBgkIkqghIAShWIAQgXIIzA/ISaCSILYCzIFnBrIFTBxIIQC6IADAZIgaBDIgCABIAAAAg");
	this.shape_1006.setTransform(882.7,451.5);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("rgba(101,156,197,0.6)").s().p("AcXG5IpmjTIlUhwIkghUIgCAAIgDgBIgTgFIhNgTQiMgiirgnIkehFIgCAAIgHgBIgfgEIh8gPInzg7IlSgoIgCAAIgDAAIgTgDIhQgIIk9gkIknghIAShVIAQgXIItA+ISMCRILNC1IFjBpIFPBwIIKC3QAAAOABAMIgaBDIgCAAIAAAAg");
	this.shape_1007.setTransform(885.1,451.8);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("rgba(101,156,197,0.6)").s().p("Ab+G3IpdjRIlRhvIkchTIgBAAIgDgBIgTgFIhMgTQiLgiingoIkahGIgCAAIgHgBIgfgEIh6gOIntg6IlOgoIgBAAIgEAAIgTgCIhOgJIk5gjIkjghIAShUIAOgZIIoA/IR9CPILEC2IFeBoINOEkIgBAbQgWA6gDAHIgCABIgBAAg");
	this.shape_1008.setTransform(887.5,452);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("rgba(101,156,197,0.6)").s().p("AbmG0Iuik8IkYhTIgBAAIgEgBIgSgEIhLgTQiLgjijgoIkWhHIgCAAIgHgBIgegEIh5gOInmg5IlKgoIgBAAIgEAAIgSgCIhOgIIk0gkIkfggIARhTIAOgZIIhA9IRvCOIK6C4IFZBnINDEhIgCAaQgVA6gEAHIgBABIgBAAg");
	this.shape_1009.setTransform(889.9,452.3);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("rgba(101,156,197,0.6)").s().p("AbOGxIuWk4IkVhSIgBAAIgEgBIgRgEIhKgTQiLgkiegoIkShHIgCAAIgHgBIgegEIh4gOIngg5IlFgnIgBAAIgEAAIgSgCIhMgIIkxgjIkbghIARhRIANgbIIcA+IRfCMIKxC6IFVBlIM4EeIgEAbQgVA4gDAHIgCACIAAgBg");
	this.shape_1010.setTransform(892.4,452.6);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("rgba(101,156,197,0.6)").s().p("AMsB6IkShQIgBAAIgDgBIgRgFIhJgTQiLgliagoIkOhIIgBAAIgHgBIgegDIh2gOInbg4IlAgnIgBAAIgDAAIgTgCIhLgIIksgjIkYggIAShRIALgbIIWA9IRRCLIKnC7IFQBkIMuEbIgGAbIgYA/IgBABg");
	this.shape_1011.setTransform(894.8,452.8);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("rgba(101,156,197,0.6)").s().p("AMfB6IkNhPIgBAAIgEgBIgRgEIhHgUQiKgkiXgoIkJhJIgCAAIgHgBIgdgEIh1gNInUg4Ik8gmIgBAAIgDAAIgSgCIhKgIIkogjIkUgfIARhQIAKgcIIQA8IRDCKIKcC9IFNBiIMiEXIgGAcIgYA+IgCABg");
	this.shape_1012.setTransform(897.3,453.1);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("rgba(101,156,197,0.6)").s().p("AMTB8IkKhPIgBAAIgDgBIgRgEIhGgUIkchNIkFhJIgCAAIgHgCIgdgEIh0gMInOg4Ik3glIgBAAIgDAAIgSgCIhJgIIkjgjIkRgfIARhPIAJgdIILA9IQ0CIIKSC+IFIBhIMYEUIgIAcQgUA2gEAHIgBACg");
	this.shape_1013.setTransform(899.7,453.4);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("rgba(101,156,197,0.6)").s().p("AMHB9IkHhNIgBAAIgDgBIgRgFIhFgUIkXhOIkBhKIgCAAIgGgBIgegEIhxgNInJg2IkyglIgBAAIgDAAIgRgCIhIgIIkggiIkMggIAQhNIAJgeIIDA7IQmCHIPMEgIMNERIgJAcQgTA1gFAIIgBABg");
	this.shape_1014.setTransform(902.2,453.6);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("rgba(101,156,197,0.6)").s().p("AZUGlItaknItrkAIgBAAIgHgBIgcgDIhxgNInDg2IuthvIAXhsIJqBJIOsB4IO+EgIMCEOQgiBagBAAIAAAAg");
	this.shape_1015.setTransform(904.7,453.9);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("rgba(101,156,197,0.6)").s().p("AXuGNIsGkLItTj6IgBAAIgHgBIgbgDIhtgOQiXgVkeglIiPgSIgCAAIgHgBIgkgEIiQgSIpKhFIAYhpIAkACIIxBCIEoAmIJmBWIOkEZILuEHIgHAZQgXA8gBACQgegGgcgJg");
	this.shape_1016.setTransform(909.3,454.4);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("rgba(101,156,197,0.6)").s().p("AXGGKIrxkDIs7j0IgBAAIgGgBIgbgEIhpgPQiXgXkQgmIiLgUIgCAAIgHgBIgigEIiNgRIo7hDIAXhmIAhgBIIgBAIEeAkIJUBcIOKESILZEAIgEAWIgYA9QgcAAgZgJg");
	this.shape_1017.setTransform(913.9,454.8);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("rgba(101,156,197,0.6)").s().p("AWeGIIrcj8IsijuIgCAAIgFgBIgbgEIhlgQQiYgbkBgmIiGgWIgCAAIgHgBIgigEIiJgQIoshCIAXhiIAegFIIPA/IEUAjIJBBhINwEMILED4IgCAUIgWA8QgLACgKAAQgPAAgNgFg");
	this.shape_1018.setTransform(918.5,455.3);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("rgba(101,156,197,0.6)").s().p("AV2GFIrHj1IlThpIm4iAIgBAAIgFgBIgZgEQgmgHg8gKQiZgdjygnIiCgXIgCAAIgHgBIghgEIiGgQIodhAIAXhgIAbgHIH+A9IEJAiIIvBmIJvC9IDnBIIKvDwIACATIgXA6QgPAGgNAAQgIAAgHgCg");
	this.shape_1019.setTransform(923.2,455.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("rgba(101,156,197,0.6)").s().p("AVMGBIqwjtIlKhoImqh7IgBAAIgFgBIgYgFQgmgIg4gKQiaggjkgoIh9gYIgCAAIgHgBIgggEIiDgQIoNg+IAXhcIAXgLIHtA7ID+AhIIcBsIJeC3IDeBGIKcDqIAEARIgVA4QgSALgNAAQgFAAgEgBg");
	this.shape_1020.setTransform(928,456.4);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("rgba(101,156,197,0.6)").s().p("AUiF9IqbjmIk+hmImdh3IgBAAIgFgBIgWgFIhcgTQiZgjjVgpIh6gaIgCAAIgHgBIgfgDIh/gPIn/g9IAYhZIAUgPIHcA7ID0AfIIJBxIJKCyIDYBFIKGDiIAIAPIgWA3QgSARgMAAIgFgBg");
	this.shape_1021.setTransform(932.7,457);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("rgba(101,156,197,0.6)").s().p("AT6F5IqGjeIk0hkImQh0IgBAAIgFgBIgVgFIhYgUQiagljHgrIh1gbIgBAAIgIgBIgegDIh8gPInvg7IAXhWIARgSIHLA5IDpAeIH3B3II3CqINCEgIALANIgVA2QgSAWgJAAIgCAAg");
	this.shape_1022.setTransform(937.5,457.6);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("rgba(101,156,197,0.6)").s().p("ATQF0Iuak5ImChwIgBAAIgEgBIgVgFIhUgVQiagoi5gsIhwgcIgCAAIgHgBIgegEIh4gOIngg5IAWhTIAOgVIG6A3IDfAdIHkB8IIlClIMmEYIAOALIgUA0QgSAdgHAAIgBgBg");
	this.shape_1023.setTransform(942.2,458.3);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("rgba(101,156,197,0.6)").s().p("ASnFwIt6kwIl1hsIgBAAIgEgBIgUgGIhQgWQibgqiqgtIhtgeIgBAAIgHgBIgdgDIh0gOInSg3IAXhQIALgYIGoA1IDUAcIHSCBIISCfIMLEPIAQAJIgTAzQgRAjgEAAIAAAAg");
	this.shape_1024.setTransform(947,459);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("rgba(101,156,197,0.6)").s().p("AR9FrItZknItrj/IgCAAIgHgBIgcgEIhxgMInCg2IAehpIJhBOIO+EgIMCEOQgiBbgBAAIAAgBg");
	this.shape_1025.setTransform(951.7,459.6);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("rgba(101,156,197,0.6)").s().p("ARUFjIs4kbItXj7IgBAAIgHgBIgcgEIhtgOImMg0IgCAAIgGgBIgjgEIAchnIAVABIBUALQHWA/AUAHIOpEaILkEDIALAGQghBWgBACIgOgEg");
	this.shape_1026.setTransform(954.5,460);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("rgba(101,156,197,0.6)").s().p("AQ6FhIslkVItEj3IgBAAIgGgBIgbgDIhqgQQiNgWj0giIgBAAIgHgBIgjgEIAahkIASgCIBTALQG4A/ApANIOSEVILTD9IAJAFIghBXQgHAAgFgCg");
	this.shape_1027.setTransform(957.3,460.3);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("rgba(101,156,197,0.6)").s().p("AQfFeIsSkPIsvjxIgCAAIgGgBIgagEQgmgHhBgJQiOgZjngjIgCAAIgHgBIghgEIAXhjIAQgDIBRAKQGaA/A9ATIN8EOILCD4IAIAGQgdBPgDAFIgGABIgGgBg");
	this.shape_1028.setTransform(960.1,460.6);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("rgba(101,156,197,0.6)").s().p("AQEFbIr/kIIjxhLIoqihIgBAAIgGgBIgZgFQgngHg9gKQiOgcjdgkIgCAAIgGgBIghgEIAVhgIAOgGIBQAKQF7A/BRAYINnEJIKwDyIAHAHQgcBLgEAHIgHACIgEgBg");
	this.shape_1029.setTransform(962.9,461);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("rgba(101,156,197,0.6)").s().p("APqFYIrskBIjshKIobidIgBAAIgGgBIgZgFIhggTQiQgejQgmIgCAAIgGgBIghgDIAThfIAMgHIBNAKQFeA+BlAeIJ+DCIDTBCIKgDrIAFAIIgfBQQgEACgEAAIgCAAg");
	this.shape_1030.setTransform(965.7,461.3);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("rgba(101,156,197,0.6)").s().p("APPFVIrYj7IjmhJIoOiZIgCAAIgEgBIgYgFIhdgUQiSggjDgoIgCAAIgGgBIgggDIAQhdIAJgJIBNAKQE/A9B5AlIJuC8IDOBCIKODlIADAIIgeBOQgEAEgDAAIgCAAg");
	this.shape_1031.setTransform(968.5,461.6);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("rgba(101,156,197,0.6)").s().p("AO1FSIrGj0IjfhJIoBiVIgBAAIgFgBIgWgFIhbgVQiRgji5gpIgBAAIgHgBIgfgDIAOhaIAHgMIBLAKQEiA9CMAqIJeC4INGEgIABAJIgdBMQgFAFgCAAIgBAAg");
	this.shape_1032.setTransform(971.3,462);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("rgba(101,156,197,0.6)").s().p("AOaFPIuMk2InziRIgBAAIgFgBIgVgFIhYgWQiSgmisgqIgCAAIgHgBIgegEIALhYIAGgNIBIAJQEFA9CgAxIJNCyIMwEaIgBAJQgWA7gGAPQgEAHgCAAIgBAAg");
	this.shape_1033.setTransform(974.1,462.4);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("rgba(101,156,197,0.6)").s().p("AANAdInmiMIgBAAIgEgCIgVgFIhUgXQiUgpiggqIgCAAIgHgBIgdgEIAJhWIADgQIBHAJQDmA9C1A2II9CuIMYETIgCAJIgbBIQgFAJgBAAg");
	this.shape_1034.setTransform(977,462.7);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("rgba(101,156,197,0.6)").s().p("ANkFJItaknItrkAIgBAAIgHgBIgdgDIAIhmIBFAJIO+EiIMCEMQgiBagBAAIAAAAg");
	this.shape_1035.setTransform(979.9,463.1);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("rgba(101,156,197,0.6)").s().p("ANRFEItXknIttj/IAnhiIO+EiIMCEMQgiBbgBAAIAAgBg");
	this.shape_1036.setTransform(981.7,463.5);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("rgba(101,156,197,0.6)").s().p("AJ/D9IqEjeItOj3IAmheICgAsIL5DoILoECIgIAVQgZBCAAAAQhbgbhZgfg");
	this.shape_1037.setTransform(985,464.5);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("rgba(101,156,197,0.6)").s().p("AJpD3IpsjWIsvjvIAkhbICYAmILdDgILMD5IgHAUIgYA/QhXgVhUgdg");
	this.shape_1038.setTransform(988.2,465.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("rgba(101,156,197,0.6)").s().p("AJTDwIpUjOIsQjmQAAgDAihUICPAfILBDYIKxDwIgGATQgWA7gCACQhSgRhPgbg");
	this.shape_1039.setTransform(991.4,466.5);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("rgba(101,156,197,0.6)").s().p("AI9DqIo9jFIrwjfQAAgEAghQICGAaIKmDQIKVDmIgEASQgWA4gCADQhPgLhJgag");
	this.shape_1040.setTransform(994.7,467.5);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("rgba(101,156,197,0.6)").s().p("AInDkIoni+IrPjWQAAgFAehLIB9ATIKJDIIJ8DdIgFARQgTA1gCADQhMgGhEgXg");
	this.shape_1041.setTransform(997.9,468.5);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("rgba(101,156,197,0.6)").s().p("AIRDdIoPi1IqxjOQABgGAchHIB1ANIJtDBIJgDTIgDAQIgVA2QhHgBhAgWg");
	this.shape_1042.setTransform(1001.1,469.5);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("rgba(101,156,197,0.6)").s().p("AH7DXIn4iuIqRjGQABgGAahDIBsAGIJRC6IJFDJIgCAPIgVA0IgaABQg0AAgvgQg");
	this.shape_1043.setTransform(1004.4,470.5);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("rgba(101,156,197,0.6)").s().p("AHlDPIngilIpyi+QABgHAYg+IBjgBII1CyIIqDAIgBAOIgUAxQgWAEgVAAQgmAAgjgMg");
	this.shape_1044.setTransform(1007.6,471.6);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("rgba(101,156,197,0.6)").s().p("AHQDKInJidIpTi2QABgIAWg6IBbgGIIZCpIIOC3IAAANIgSAvQgdAHgaAAQgbAAgZgIg");
	this.shape_1045.setTransform(1010.8,472.5);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("rgba(101,156,197,0.6)").s().p("AG6DEImyiVIo0itQACgKAUg1IBSgMIH9CiIHzCtIABALIgRAtQghAMgcAAQgUAAgRgGg");
	this.shape_1046.setTransform(1014.1,473.4);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("rgba(101,156,197,0.6)").s().p("AGjC+ImaiNIoUikQABgLATgxIBJgTIHhCaIHYCkIABAKIgQArQgiASgcAAQgOAAgNgFg");
	this.shape_1047.setTransform(1017.4,474.4);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("rgba(101,156,197,0.6)").s().p("AGNC5ImCiFIn2idQACgMAQgsIBAgZIHGCSIG9CaIACAKIgQAoQgjAXgbAAQgJAAgIgCg");
	this.shape_1048.setTransform(1020.7,475.3);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("rgba(101,156,197,0.6)").s().p("AF3CyIlrh9InXiUQADgNANgnIA5ggIGoCLIGiCQIAEAIIgPAmQgiAegZAAQgGAAgFgCg");
	this.shape_1049.setTransform(1023.9,476.3);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("rgba(101,156,197,0.6)").s().p("AFhCsIlUh1Im3iMQACgOAMgjIAwgmIGMCDIGHCHIAFAHIgOAkQgiAkgVAAIgGgBg");
	this.shape_1050.setTransform(1027.2,477.3);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("rgba(101,156,197,0.6)").s().p("AFKClIk8hsImYiEQADgPAJgfIAngsIFxB7IFsB+IAFAGIgMAhQggArgRAAIgEgBg");
	this.shape_1051.setTransform(1030.5,478.3);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("rgba(101,156,197,0.6)").s().p("AE0CfIqejgQADgQAIgaIAegzIKmDoIAGAFIgMAfQgeAxgMAAIgBAAg");
	this.shape_1052.setTransform(1033.8,479.3);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("rgba(101,156,197,0.6)").s().p("AEeCYIpnjQIAIgmIAWg6IJvDXIAHAEIgMAdQgbA5gGAAIAAgBg");
	this.shape_1053.setTransform(1037.1,480.4);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("rgba(101,156,197,0.6)").s().p("AEHCSIowjAIAUhjII/DJQgiBagBAAIAAAAg");
	this.shape_1054.setTransform(1040.3,481.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77}]},192).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[]},1).to({state:[{t:this.shape_272}]},164).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[]},1).to({state:[{t:this.shape_468}]},164).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[]},1).to({state:[{t:this.shape_663}]},164).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_782}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_788}]},1).to({state:[{t:this.shape_789}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_795}]},1).to({state:[{t:this.shape_796}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_800}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_807}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_842}]},1).to({state:[{t:this.shape_843}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_845}]},1).to({state:[{t:this.shape_846}]},1).to({state:[{t:this.shape_847}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_853}]},1).to({state:[{t:this.shape_854}]},1).to({state:[{t:this.shape_855}]},1).to({state:[{t:this.shape_856}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_858}]},1).to({state:[]},1).to({state:[{t:this.shape_859}]},164).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_882}]},1).to({state:[{t:this.shape_883}]},1).to({state:[{t:this.shape_884}]},1).to({state:[{t:this.shape_885}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_890}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_896}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_898}]},1).to({state:[{t:this.shape_899}]},1).to({state:[{t:this.shape_900}]},1).to({state:[{t:this.shape_901}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_903}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_909}]},1).to({state:[{t:this.shape_910}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_912}]},1).to({state:[{t:this.shape_913}]},1).to({state:[{t:this.shape_914}]},1).to({state:[{t:this.shape_915}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_917}]},1).to({state:[{t:this.shape_918}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_924}]},1).to({state:[{t:this.shape_925}]},1).to({state:[{t:this.shape_926}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_930}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_933}]},1).to({state:[{t:this.shape_934}]},1).to({state:[{t:this.shape_935}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_937}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_941}]},1).to({state:[{t:this.shape_942}]},1).to({state:[{t:this.shape_943}]},1).to({state:[{t:this.shape_944}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_949}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_951}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_953}]},1).to({state:[{t:this.shape_954}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_956}]},1).to({state:[{t:this.shape_957}]},1).to({state:[{t:this.shape_958}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_968}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_971}]},1).to({state:[{t:this.shape_972}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_974}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_977}]},1).to({state:[{t:this.shape_978}]},1).to({state:[{t:this.shape_979}]},1).to({state:[{t:this.shape_980}]},1).to({state:[{t:this.shape_981}]},1).to({state:[{t:this.shape_982}]},1).to({state:[{t:this.shape_983}]},1).to({state:[{t:this.shape_984}]},1).to({state:[{t:this.shape_985}]},1).to({state:[{t:this.shape_986}]},1).to({state:[{t:this.shape_987}]},1).to({state:[{t:this.shape_988}]},1).to({state:[{t:this.shape_989}]},1).to({state:[{t:this.shape_990}]},1).to({state:[{t:this.shape_991}]},1).to({state:[{t:this.shape_992}]},1).to({state:[{t:this.shape_993}]},1).to({state:[{t:this.shape_994}]},1).to({state:[{t:this.shape_995}]},1).to({state:[{t:this.shape_996}]},1).to({state:[{t:this.shape_997}]},1).to({state:[{t:this.shape_998}]},1).to({state:[{t:this.shape_999}]},1).to({state:[{t:this.shape_1000}]},1).to({state:[{t:this.shape_1001}]},1).to({state:[{t:this.shape_1002}]},1).to({state:[{t:this.shape_1003}]},1).to({state:[{t:this.shape_1004}]},1).to({state:[{t:this.shape_1005}]},1).to({state:[{t:this.shape_1006}]},1).to({state:[{t:this.shape_1007}]},1).to({state:[{t:this.shape_1008}]},1).to({state:[{t:this.shape_1009}]},1).to({state:[{t:this.shape_1010}]},1).to({state:[{t:this.shape_1011}]},1).to({state:[{t:this.shape_1012}]},1).to({state:[{t:this.shape_1013}]},1).to({state:[{t:this.shape_1014}]},1).to({state:[{t:this.shape_1015}]},1).to({state:[{t:this.shape_1016}]},1).to({state:[{t:this.shape_1017}]},1).to({state:[{t:this.shape_1018}]},1).to({state:[{t:this.shape_1019}]},1).to({state:[{t:this.shape_1020}]},1).to({state:[{t:this.shape_1021}]},1).to({state:[{t:this.shape_1022}]},1).to({state:[{t:this.shape_1023}]},1).to({state:[{t:this.shape_1024}]},1).to({state:[{t:this.shape_1025}]},1).to({state:[{t:this.shape_1026}]},1).to({state:[{t:this.shape_1027}]},1).to({state:[{t:this.shape_1028}]},1).to({state:[{t:this.shape_1029}]},1).to({state:[{t:this.shape_1030}]},1).to({state:[{t:this.shape_1031}]},1).to({state:[{t:this.shape_1032}]},1).to({state:[{t:this.shape_1033}]},1).to({state:[{t:this.shape_1034}]},1).to({state:[{t:this.shape_1035}]},1).to({state:[{t:this.shape_1036}]},1).to({state:[{t:this.shape_1037}]},1).to({state:[{t:this.shape_1038}]},1).to({state:[{t:this.shape_1039}]},1).to({state:[{t:this.shape_1040}]},1).to({state:[{t:this.shape_1041}]},1).to({state:[{t:this.shape_1042}]},1).to({state:[{t:this.shape_1043}]},1).to({state:[{t:this.shape_1044}]},1).to({state:[{t:this.shape_1045}]},1).to({state:[{t:this.shape_1046}]},1).to({state:[{t:this.shape_1047}]},1).to({state:[{t:this.shape_1048}]},1).to({state:[{t:this.shape_1049}]},1).to({state:[{t:this.shape_1050}]},1).to({state:[{t:this.shape_1051}]},1).to({state:[{t:this.shape_1052}]},1).to({state:[{t:this.shape_1053}]},1).to({state:[{t:this.shape_1054}]},1).to({state:[]},1).wait(20));

	// runoffArrows
	this.runoffPArrow1_4 = new lib.SymArrow1TweenP();
	this.runoffPArrow1_4.parent = this;
	this.runoffPArrow1_4.setTransform(685,414,1,1,0,0,0,61,6.5);

	this.runoffPArrow1_3 = new lib.SymArrow1TweenP();
	this.runoffPArrow1_3.parent = this;
	this.runoffPArrow1_3.setTransform(499,393,1,1,0,0,0,61,6.5);

	this.runoffPArrow1_2 = new lib.SymArrow1TweenP();
	this.runoffPArrow1_2.parent = this;
	this.runoffPArrow1_2.setTransform(312,372,1,1,0,0,0,61,6.5);

	this.runoffPArrow1_1 = new lib.SymArrow1TweenP();
	this.runoffPArrow1_1.parent = this;
	this.runoffPArrow1_1.setTransform(126,351,1,1,0,0,0,61,6.5);

	this.runoffPArrow1_0 = new lib.SymArrow1TweenP();
	this.runoffPArrow1_0.parent = this;
	this.runoffPArrow1_0.setTransform(-60,330,1,1,0,0,0,61,6.5);

	this.runoffPArrow1_5 = new lib.SymArrow1TweenP();
	this.runoffPArrow1_5.parent = this;
	this.runoffPArrow1_5.setTransform(975,459,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffPArrow2_4 = new lib.SymArrow2TweenP();
	this.runoffPArrow2_4.parent = this;
	this.runoffPArrow2_4.setTransform(686,413.5,1,1,0,0,0,61,6.5);

	this.runoffPArrow2_3 = new lib.SymArrow2TweenP();
	this.runoffPArrow2_3.parent = this;
	this.runoffPArrow2_3.setTransform(500,393.5,1,1,0,0,0,61,6.5);

	this.runoffPArrow2_2 = new lib.SymArrow2TweenP();
	this.runoffPArrow2_2.parent = this;
	this.runoffPArrow2_2.setTransform(312,372.5,1,1,0,0,0,61,6.5);

	this.runoffPArrow2_1 = new lib.SymArrow2TweenP();
	this.runoffPArrow2_1.parent = this;
	this.runoffPArrow2_1.setTransform(126,352,1,1,0,0,0,61,6.5);

	this.runoffPArrow2_0 = new lib.SymArrow2TweenP();
	this.runoffPArrow2_0.parent = this;
	this.runoffPArrow2_0.setTransform(-60,332,1,1,0,0,0,61,6.5);

	this.runoffPArrow2_5 = new lib.SymArrow2TweenP();
	this.runoffPArrow2_5.parent = this;
	this.runoffPArrow2_5.setTransform(975,460,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffPArrow3_4 = new lib.SymArrow3TweenP();
	this.runoffPArrow3_4.parent = this;
	this.runoffPArrow3_4.setTransform(686,414,1,1,0,0,0,61,6.5);

	this.runoffPArrow3_3 = new lib.SymArrow3TweenP();
	this.runoffPArrow3_3.parent = this;
	this.runoffPArrow3_3.setTransform(500,394,1,1,0,0,0,61,6.5);

	this.runoffPArrow3_2 = new lib.SymArrow3TweenP();
	this.runoffPArrow3_2.parent = this;
	this.runoffPArrow3_2.setTransform(312,373.5,1,1,0,0,0,61,6.5);

	this.runoffPArrow3_0 = new lib.SymArrow3TweenP();
	this.runoffPArrow3_0.parent = this;
	this.runoffPArrow3_0.setTransform(-60,333,1,1,0,0,0,61,6.5);

	this.runoffPArrow3_5 = new lib.SymArrow3TweenP();
	this.runoffPArrow3_5.parent = this;
	this.runoffPArrow3_5.setTransform(959,459,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffPArrow3_1 = new lib.SymArrow3TweenP();
	this.runoffPArrow3_1.parent = this;
	this.runoffPArrow3_1.setTransform(126,353,1,1,0,0,0,61,6.5);

	this.runoffPArrow4_4 = new lib.SymArrow4TweenP();
	this.runoffPArrow4_4.parent = this;
	this.runoffPArrow4_4.setTransform(686,416,1,1,0,0,0,61,6.5);

	this.runoffPArrow4_3 = new lib.SymArrow4TweenP();
	this.runoffPArrow4_3.parent = this;
	this.runoffPArrow4_3.setTransform(500,396,1,1,0,0,0,61,6.5);

	this.runoffPArrow4_2 = new lib.SymArrow4TweenP();
	this.runoffPArrow4_2.parent = this;
	this.runoffPArrow4_2.setTransform(312,376,1,1,0,0,0,61,6.5);

	this.runoffPArrow4_0 = new lib.SymArrow4TweenP();
	this.runoffPArrow4_0.parent = this;
	this.runoffPArrow4_0.setTransform(-60,336,1,1,0,0,0,61,6.5);

	this.runoffPArrow4_5 = new lib.SymArrow4TweenP();
	this.runoffPArrow4_5.parent = this;
	this.runoffPArrow4_5.setTransform(959,459,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffPArrow4_1 = new lib.SymArrow4TweenP();
	this.runoffPArrow4_1.parent = this;
	this.runoffPArrow4_1.setTransform(126,356,1,1,0,0,0,61,6.5);

	this.runoffPArrow5_4 = new lib.SymArrow5TweenP();
	this.runoffPArrow5_4.parent = this;
	this.runoffPArrow5_4.setTransform(686,415.5,1,1,0,0,0,61,6.5);

	this.runoffPArrow5_3 = new lib.SymArrow5TweenP();
	this.runoffPArrow5_3.parent = this;
	this.runoffPArrow5_3.setTransform(500,396,1,1,0,0,0,61,6.5);

	this.runoffPArrow5_2 = new lib.SymArrow5TweenP();
	this.runoffPArrow5_2.parent = this;
	this.runoffPArrow5_2.setTransform(312,376,1,1,0,0,0,61,6.5);

	this.runoffPArrow5_0 = new lib.SymArrow5TweenP();
	this.runoffPArrow5_0.parent = this;
	this.runoffPArrow5_0.setTransform(-60,335.5,1,1,0,0,0,61,6.5);

	this.runoffPArrow5_5 = new lib.SymArrow5TweenP();
	this.runoffPArrow5_5.parent = this;
	this.runoffPArrow5_5.setTransform(958.9,459,0.9,0.9,10,0,0,61.2,6.6);

	this.runoffPArrow5_1 = new lib.SymArrow5TweenP();
	this.runoffPArrow5_1.parent = this;
	this.runoffPArrow5_1.setTransform(126,355.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow5_4 = new lib.SymArrow5TweenVS();
	this.runoffVSArrow5_4.parent = this;
	this.runoffVSArrow5_4.setTransform(686,415.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow5_3 = new lib.SymArrow5TweenVS();
	this.runoffVSArrow5_3.parent = this;
	this.runoffVSArrow5_3.setTransform(500,396,1,1,0,0,0,61,6.5);

	this.runoffVSArrow5_2 = new lib.SymArrow5TweenVS();
	this.runoffVSArrow5_2.parent = this;
	this.runoffVSArrow5_2.setTransform(312,376,1,1,0,0,0,61,6.5);

	this.runoffVSArrow5_0 = new lib.SymArrow5TweenVS();
	this.runoffVSArrow5_0.parent = this;
	this.runoffVSArrow5_0.setTransform(-60,335.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow5_5 = new lib.SymArrow5TweenVS();
	this.runoffVSArrow5_5.parent = this;
	this.runoffVSArrow5_5.setTransform(958.9,459,0.9,0.9,10,0,0,61.2,6.6);

	this.runoffVSArrow5_1 = new lib.SymArrow5TweenVS();
	this.runoffVSArrow5_1.parent = this;
	this.runoffVSArrow5_1.setTransform(126,355.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow4_4 = new lib.SymArrow4TweenVS();
	this.runoffVSArrow4_4.parent = this;
	this.runoffVSArrow4_4.setTransform(686,416,1,1,0,0,0,61,6.5);

	this.runoffVSArrow4_3 = new lib.SymArrow4TweenVS();
	this.runoffVSArrow4_3.parent = this;
	this.runoffVSArrow4_3.setTransform(500,396,1,1,0,0,0,61,6.5);

	this.runoffVSArrow4_2 = new lib.SymArrow4TweenVS();
	this.runoffVSArrow4_2.parent = this;
	this.runoffVSArrow4_2.setTransform(312,376,1,1,0,0,0,61,6.5);

	this.runoffVSArrow4_0 = new lib.SymArrow4TweenVS();
	this.runoffVSArrow4_0.parent = this;
	this.runoffVSArrow4_0.setTransform(-60,336,1,1,0,0,0,61,6.5);

	this.runoffVSArrow4_5 = new lib.SymArrow4TweenVS();
	this.runoffVSArrow4_5.parent = this;
	this.runoffVSArrow4_5.setTransform(959,459,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffVSArrow4_1 = new lib.SymArrow4TweenVS();
	this.runoffVSArrow4_1.parent = this;
	this.runoffVSArrow4_1.setTransform(126,356,1,1,0,0,0,61,6.5);

	this.runoffVSArrow3_4 = new lib.SymArrow3TweenVS();
	this.runoffVSArrow3_4.parent = this;
	this.runoffVSArrow3_4.setTransform(686,414,1,1,0,0,0,61,6.5);

	this.runoffVSArrow3_3 = new lib.SymArrow3TweenVS();
	this.runoffVSArrow3_3.parent = this;
	this.runoffVSArrow3_3.setTransform(500,394,1,1,0,0,0,61,6.5);

	this.runoffVSArrow3_2 = new lib.SymArrow3TweenVS();
	this.runoffVSArrow3_2.parent = this;
	this.runoffVSArrow3_2.setTransform(312,373.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow3_0 = new lib.SymArrow3TweenVS();
	this.runoffVSArrow3_0.parent = this;
	this.runoffVSArrow3_0.setTransform(-60,333,1,1,0,0,0,61,6.5);

	this.runoffVSArrow3_5 = new lib.SymArrow3TweenVS();
	this.runoffVSArrow3_5.parent = this;
	this.runoffVSArrow3_5.setTransform(959,459,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffVSArrow3_1 = new lib.SymArrow3TweenVS();
	this.runoffVSArrow3_1.parent = this;
	this.runoffVSArrow3_1.setTransform(126,353,1,1,0,0,0,61,6.5);

	this.runoffVSArrow2_4 = new lib.SymArrow2TweenVS();
	this.runoffVSArrow2_4.parent = this;
	this.runoffVSArrow2_4.setTransform(686,413.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow2_3 = new lib.SymArrow2TweenVS();
	this.runoffVSArrow2_3.parent = this;
	this.runoffVSArrow2_3.setTransform(500,393.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow2_2 = new lib.SymArrow2TweenVS();
	this.runoffVSArrow2_2.parent = this;
	this.runoffVSArrow2_2.setTransform(312,372.5,1,1,0,0,0,61,6.5);

	this.runoffVSArrow2_1 = new lib.SymArrow2TweenVS();
	this.runoffVSArrow2_1.parent = this;
	this.runoffVSArrow2_1.setTransform(126,352,1,1,0,0,0,61,6.5);

	this.runoffVSArrow2_0 = new lib.SymArrow2TweenVS();
	this.runoffVSArrow2_0.parent = this;
	this.runoffVSArrow2_0.setTransform(-60,332,1,1,0,0,0,61,6.5);

	this.runoffVSArrow2_5 = new lib.SymArrow2TweenVS();
	this.runoffVSArrow2_5.parent = this;
	this.runoffVSArrow2_5.setTransform(975,460,0.9,0.9,10,0,0,61.3,6.6);

	this.runoffVSArrow1_4 = new lib.SymArrow1TweenVS();
	this.runoffVSArrow1_4.parent = this;
	this.runoffVSArrow1_4.setTransform(685,414,1,1,0,0,0,61,6.5);

	this.runoffVSArrow1_3 = new lib.SymArrow1TweenVS();
	this.runoffVSArrow1_3.parent = this;
	this.runoffVSArrow1_3.setTransform(499,393,1,1,0,0,0,61,6.5);

	this.runoffVSArrow1_2 = new lib.SymArrow1TweenVS();
	this.runoffVSArrow1_2.parent = this;
	this.runoffVSArrow1_2.setTransform(312,372,1,1,0,0,0,61,6.5);

	this.runoffVSArrow1_1 = new lib.SymArrow1TweenVS();
	this.runoffVSArrow1_1.parent = this;
	this.runoffVSArrow1_1.setTransform(126,351,1,1,0,0,0,61,6.5);

	this.runoffVSArrow1_0 = new lib.SymArrow1TweenVS();
	this.runoffVSArrow1_0.parent = this;
	this.runoffVSArrow1_0.setTransform(-60,330,1,1,0,0,0,61,6.5);

	this.runoffVSArrow1_5 = new lib.SymArrow1TweenVS();
	this.runoffVSArrow1_5.parent = this;
	this.runoffVSArrow1_5.setTransform(975,459,0.9,0.9,10,0,0,61.3,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.runoffPArrow1_5},{t:this.runoffPArrow1_0},{t:this.runoffPArrow1_1},{t:this.runoffPArrow1_2},{t:this.runoffPArrow1_3},{t:this.runoffPArrow1_4}]},24).to({state:[{t:this.runoffPArrow2_5},{t:this.runoffPArrow2_0},{t:this.runoffPArrow2_1},{t:this.runoffPArrow2_2},{t:this.runoffPArrow2_3},{t:this.runoffPArrow2_4}]},5).to({state:[{t:this.runoffPArrow3_1},{t:this.runoffPArrow3_5},{t:this.runoffPArrow3_0},{t:this.runoffPArrow3_2},{t:this.runoffPArrow3_3},{t:this.runoffPArrow3_4}]},6).to({state:[{t:this.runoffPArrow4_1},{t:this.runoffPArrow4_5},{t:this.runoffPArrow4_0},{t:this.runoffPArrow4_2},{t:this.runoffPArrow4_3},{t:this.runoffPArrow4_4}]},6).to({state:[{t:this.runoffPArrow5_1},{t:this.runoffPArrow5_5},{t:this.runoffPArrow5_0},{t:this.runoffPArrow5_2},{t:this.runoffPArrow5_3},{t:this.runoffPArrow5_4}]},6).to({state:[]},1).to({state:[{t:this.runoffVSArrow5_1},{t:this.runoffVSArrow5_5},{t:this.runoffVSArrow5_0},{t:this.runoffVSArrow5_2},{t:this.runoffVSArrow5_3},{t:this.runoffVSArrow5_4}]},24).to({state:[]},120).to({state:[{t:this.runoffVSArrow4_1},{t:this.runoffVSArrow4_5},{t:this.runoffVSArrow4_0},{t:this.runoffVSArrow4_2},{t:this.runoffVSArrow4_3},{t:this.runoffVSArrow4_4}]},240).to({state:[]},120).to({state:[{t:this.runoffVSArrow3_1},{t:this.runoffVSArrow3_5},{t:this.runoffVSArrow3_0},{t:this.runoffVSArrow3_2},{t:this.runoffVSArrow3_3},{t:this.runoffVSArrow3_4}]},240).to({state:[]},120).to({state:[{t:this.runoffVSArrow2_5},{t:this.runoffVSArrow2_0},{t:this.runoffVSArrow2_1},{t:this.runoffVSArrow2_2},{t:this.runoffVSArrow2_3},{t:this.runoffVSArrow2_4}]},240).to({state:[]},120).to({state:[{t:this.runoffVSArrow1_5},{t:this.runoffVSArrow1_0},{t:this.runoffVSArrow1_1},{t:this.runoffVSArrow1_2},{t:this.runoffVSArrow1_3},{t:this.runoffVSArrow1_4}]},240).to({state:[]},120).wait(216));

	// runoff
	this.runoff5 = new lib.SymRunoff5();
	this.runoff5.parent = this;
	this.runoff5.setTransform(510.1,407.7,1,1,0,0,0,-515.1,-73.3);

	this.runoff4 = new lib.SymRunoff4();
	this.runoff4.parent = this;
	this.runoff4.setTransform(520.1,410.7,1,1,0,0,0,-515.1,-73.3);
	this.runoff4.alpha = 0.699;

	this.runoff3 = new lib.SymRunoff3();
	this.runoff3.parent = this;
	this.runoff3.setTransform(510.1,407.7,1,1,0,0,0,-515.1,-73.3);

	this.runoff2 = new lib.SymRunoff2();
	this.runoff2.parent = this;
	this.runoff2.setTransform(518.4,410.2,1,1,0,0,0,-515.1,-73.3);
	this.runoff2.alpha = 0.75;

	this.runoff1 = new lib.SymRunoff1();
	this.runoff1.parent = this;
	this.runoff1.setTransform(510.1,407.7,1,1,0,0,0,-515.1,-73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.runoff5}]},24).to({state:[{t:this.runoff4}]},5).to({state:[{t:this.runoff3}]},6).to({state:[{t:this.runoff2}]},6).to({state:[{t:this.runoff1}]},6).to({state:[]},1).to({state:[{t:this.runoff1}]},24).to({state:[]},120).to({state:[{t:this.runoff2}]},240).to({state:[]},120).to({state:[{t:this.runoff3}]},240).to({state:[]},120).to({state:[{t:this.runoff4}]},240).to({state:[]},120).to({state:[{t:this.runoff5}]},240).to({state:[]},120).wait(216));

	// waterflow
	this.WaterWave1F_5 = new lib.SymWFTween1Fast();
	this.WaterWave1F_5.parent = this;
	this.WaterWave1F_5.setTransform(762.1,519.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1F_4 = new lib.SymWFTween1Fast();
	this.WaterWave1F_4.parent = this;
	this.WaterWave1F_4.setTransform(583.6,503.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1F_3 = new lib.SymWFTween1Fast();
	this.WaterWave1F_3.parent = this;
	this.WaterWave1F_3.setTransform(405.1,487.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1F_2 = new lib.SymWFTween1Fast();
	this.WaterWave1F_2.parent = this;
	this.WaterWave1F_2.setTransform(226.6,471.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1F_1 = new lib.SymWFTween1Fast();
	this.WaterWave1F_1.parent = this;
	this.WaterWave1F_1.setTransform(48.1,455.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1S_5 = new lib.SymWFTween1Slow();
	this.WaterWave1S_5.parent = this;
	this.WaterWave1S_5.setTransform(762.1,530.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1S_4 = new lib.SymWFTween1Slow();
	this.WaterWave1S_4.parent = this;
	this.WaterWave1S_4.setTransform(583.6,514.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1S_3 = new lib.SymWFTween1Slow();
	this.WaterWave1S_3.parent = this;
	this.WaterWave1S_3.setTransform(405.1,498.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1S_2 = new lib.SymWFTween1Slow();
	this.WaterWave1S_2.parent = this;
	this.WaterWave1S_2.setTransform(226.6,482.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1S_1 = new lib.SymWFTween1Slow();
	this.WaterWave1S_1.parent = this;
	this.WaterWave1S_1.setTransform(48.1,466.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave2_6 = new lib.SymWFTween2Slow();
	this.WaterWave2_6.parent = this;
	this.WaterWave2_6.setTransform(180.7,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2_5 = new lib.SymWFTween2Slow();
	this.WaterWave2_5.parent = this;
	this.WaterWave2_5.setTransform(355.2,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2_4 = new lib.SymWFTween2Slow();
	this.WaterWave2_4.parent = this;
	this.WaterWave2_4.setTransform(529.7,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2_3 = new lib.SymWFTween2Slow();
	this.WaterWave2_3.parent = this;
	this.WaterWave2_3.setTransform(704.2,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2_2 = new lib.SymWFTween2Slow();
	this.WaterWave2_2.parent = this;
	this.WaterWave2_2.setTransform(878.7,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2_1 = new lib.SymWFTween2Slow();
	this.WaterWave2_1.parent = this;
	this.WaterWave2_1.setTransform(1053.2,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2F_6 = new lib.SymWFTween2Fast();
	this.WaterWave2F_6.parent = this;
	this.WaterWave2F_6.setTransform(180.7,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2F_5 = new lib.SymWFTween2Fast();
	this.WaterWave2F_5.parent = this;
	this.WaterWave2F_5.setTransform(355.2,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2F_4 = new lib.SymWFTween2Fast();
	this.WaterWave2F_4.parent = this;
	this.WaterWave2F_4.setTransform(529.7,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2F_3 = new lib.SymWFTween2Fast();
	this.WaterWave2F_3.parent = this;
	this.WaterWave2F_3.setTransform(704.2,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2F_2 = new lib.SymWFTween2Fast();
	this.WaterWave2F_2.parent = this;
	this.WaterWave2F_2.setTransform(878.7,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave2F_1 = new lib.SymWFTween2Fast();
	this.WaterWave2F_1.parent = this;
	this.WaterWave2F_1.setTransform(1053.2,543.4,1,1,0,0,0,3.5,13.4);

	this.WaterWave1_5 = new lib.SymWFTween1A();
	this.WaterWave1_5.parent = this;
	this.WaterWave1_5.setTransform(762.1,519.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_4 = new lib.SymWFTween1A();
	this.WaterWave1_4.parent = this;
	this.WaterWave1_4.setTransform(583.6,503.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_3 = new lib.SymWFTween1A();
	this.WaterWave1_3.parent = this;
	this.WaterWave1_3.setTransform(405.1,487.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_2 = new lib.SymWFTween1A();
	this.WaterWave1_2.parent = this;
	this.WaterWave1_2.setTransform(226.6,471.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_1 = new lib.SymWFTween1A();
	this.WaterWave1_1.parent = this;
	this.WaterWave1_1.setTransform(48.1,455.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_5_1 = new lib.SymWFTween1B();
	this.WaterWave1_5_1.parent = this;
	this.WaterWave1_5_1.setTransform(762.1,523.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_4_1 = new lib.SymWFTween1B();
	this.WaterWave1_4_1.parent = this;
	this.WaterWave1_4_1.setTransform(583.6,507.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_3_1 = new lib.SymWFTween1B();
	this.WaterWave1_3_1.parent = this;
	this.WaterWave1_3_1.setTransform(405.1,491.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_2_1 = new lib.SymWFTween1B();
	this.WaterWave1_2_1.parent = this;
	this.WaterWave1_2_1.setTransform(226.6,475.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_1_1 = new lib.SymWFTween1B();
	this.WaterWave1_1_1.parent = this;
	this.WaterWave1_1_1.setTransform(48.1,459.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_5_2 = new lib.SymWFTween1C();
	this.WaterWave1_5_2.parent = this;
	this.WaterWave1_5_2.setTransform(762.1,523.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_4_2 = new lib.SymWFTween1C();
	this.WaterWave1_4_2.parent = this;
	this.WaterWave1_4_2.setTransform(583.6,507.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_3_2 = new lib.SymWFTween1C();
	this.WaterWave1_3_2.parent = this;
	this.WaterWave1_3_2.setTransform(405.1,491.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_2_2 = new lib.SymWFTween1C();
	this.WaterWave1_2_2.parent = this;
	this.WaterWave1_2_2.setTransform(226.6,475.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_1_2 = new lib.SymWFTween1C();
	this.WaterWave1_1_2.parent = this;
	this.WaterWave1_1_2.setTransform(48.1,459.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_5_3 = new lib.SymWFTween1D();
	this.WaterWave1_5_3.parent = this;
	this.WaterWave1_5_3.setTransform(762.1,523.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_4_3 = new lib.SymWFTween1D();
	this.WaterWave1_4_3.parent = this;
	this.WaterWave1_4_3.setTransform(583.6,507.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_3_3 = new lib.SymWFTween1D();
	this.WaterWave1_3_3.parent = this;
	this.WaterWave1_3_3.setTransform(405.1,491.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_2_3 = new lib.SymWFTween1D();
	this.WaterWave1_2_3.parent = this;
	this.WaterWave1_2_3.setTransform(226.6,475.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_1_3 = new lib.SymWFTween1D();
	this.WaterWave1_1_3.parent = this;
	this.WaterWave1_1_3.setTransform(48.1,459.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_5_4 = new lib.SymWFTween1E();
	this.WaterWave1_5_4.parent = this;
	this.WaterWave1_5_4.setTransform(762.1,523.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_4_4 = new lib.SymWFTween1E();
	this.WaterWave1_4_4.parent = this;
	this.WaterWave1_4_4.setTransform(583.6,507.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_3_4 = new lib.SymWFTween1E();
	this.WaterWave1_3_4.parent = this;
	this.WaterWave1_3_4.setTransform(405.1,491.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_2_4 = new lib.SymWFTween1E();
	this.WaterWave1_2_4.parent = this;
	this.WaterWave1_2_4.setTransform(226.6,475.3,1,1,0,0,0,6.5,30.8);

	this.WaterWave1_1_4 = new lib.SymWFTween1E();
	this.WaterWave1_1_4.parent = this;
	this.WaterWave1_1_4.setTransform(48.1,459.3,1,1,0,0,0,6.5,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.WaterWave1F_1,p:{x:48.1,y:455.3}},{t:this.WaterWave1F_2,p:{y:471.3}},{t:this.WaterWave1F_3,p:{y:487.3}},{t:this.WaterWave1F_4,p:{y:503.3}},{t:this.WaterWave1F_5,p:{y:519.3}}]}).to({state:[{t:this.WaterWave1F_1,p:{x:46.6,y:469.8}},{t:this.WaterWave1F_2,p:{y:473.3}},{t:this.WaterWave1F_3,p:{y:489.3}},{t:this.WaterWave1F_4,p:{y:505.3}},{t:this.WaterWave1F_5,p:{y:521.3}}]},2).to({state:[{t:this.WaterWave1S_1,p:{y:466.3}},{t:this.WaterWave1S_2,p:{y:482.3}},{t:this.WaterWave1S_3,p:{y:498.3}},{t:this.WaterWave1S_4,p:{y:514.3}},{t:this.WaterWave1S_5,p:{y:530.3}}]},2).to({state:[{t:this.WaterWave1S_1,p:{y:475.3}},{t:this.WaterWave1S_2,p:{y:491.3}},{t:this.WaterWave1S_3,p:{y:507.3}},{t:this.WaterWave1S_4,p:{y:523.3}},{t:this.WaterWave1S_5,p:{y:539.3}}]},2).to({state:[{t:this.WaterWave1S_1,p:{y:480.3}},{t:this.WaterWave1S_2,p:{y:496.3}},{t:this.WaterWave1S_3,p:{y:512.3}},{t:this.WaterWave1S_4,p:{y:528.3}},{t:this.WaterWave1S_5,p:{y:544.3}}]},2).to({state:[]},2).to({state:[{t:this.WaterWave2_1},{t:this.WaterWave2_2},{t:this.WaterWave2_3},{t:this.WaterWave2_4},{t:this.WaterWave2_5},{t:this.WaterWave2_6}]},4).to({state:[{t:this.WaterWave2F_1},{t:this.WaterWave2F_2},{t:this.WaterWave2F_3},{t:this.WaterWave2F_4},{t:this.WaterWave2F_5},{t:this.WaterWave2F_6}]},8).to({state:[{t:this.WaterWave1_1,p:{y:455.3}},{t:this.WaterWave1_2,p:{y:471.3}},{t:this.WaterWave1_3,p:{y:487.3}},{t:this.WaterWave1_4,p:{y:503.3}},{t:this.WaterWave1_5,p:{y:519.3}}]},2).to({state:[{t:this.WaterWave1_1,p:{y:459.3}},{t:this.WaterWave1_2,p:{y:475.3}},{t:this.WaterWave1_3,p:{y:491.3}},{t:this.WaterWave1_4,p:{y:507.3}},{t:this.WaterWave1_5,p:{y:523.3}}]},24).to({state:[{t:this.WaterWave1_1_1},{t:this.WaterWave1_2_1},{t:this.WaterWave1_3_1},{t:this.WaterWave1_4_1},{t:this.WaterWave1_5_1}]},360).to({state:[{t:this.WaterWave1_1_2},{t:this.WaterWave1_2_2},{t:this.WaterWave1_3_2},{t:this.WaterWave1_4_2},{t:this.WaterWave1_5_2}]},360).to({state:[{t:this.WaterWave1_1_3},{t:this.WaterWave1_2_3},{t:this.WaterWave1_3_3},{t:this.WaterWave1_4_3},{t:this.WaterWave1_5_3}]},360).to({state:[{t:this.WaterWave1_1_4},{t:this.WaterWave1_2_4},{t:this.WaterWave1_3_4},{t:this.WaterWave1_4_4},{t:this.WaterWave1_5_4}]},360).wait(360));

	// watertable
	this.wtsymW_0 = new lib.SymWaterTable();
	this.wtsymW_0.parent = this;
	this.wtsymW_0.setTransform(570,480.7,1,1,0,0,0,50,50);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("rgba(101,156,197,0.6)").s().p("EhfrAOPQAAjtgGqkQgEqmAAjtQC2AHEAAdQDrAcDKAjIWNCWMAw8AEYIQWBGMA11ACMQCvAzDLBWQBBAcEdB/QDUBhCOA0QDJBKC+AmIG1gCQEPgBCngCIAAIdMhdZAAGI7/ABUgmyAAAgfXgAHg");
	this.shape_1055.setTransform(611.5,485.9);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("rgba(101,156,197,0.6)").s().p("EhfmANmQgDjEgNqjQgMqjgCjKQA+gEFpAhQFFAeBIALQCvAbKPBGQJkBCBsAHQFsAXGLAlQPxBaIoAoQClAME6AcQDOAMNBA6ID2ANQD4AMBzAFIEZAKIEDAKIOHAkQIeAVHHANIFqAPIFmAOQBIAPAyATICAAuQAfAHAvAYQBFAkBYAhQBIAXBiA/QBcA7AwANQA5AQDMBOQC1BGBDALQK6gLDcAAQBSAAAPABIgDEYQgEEVAIAJUiqngAGgVEgAEg");
	this.shape_1056.setTransform(611,490);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf6ANaQgDiyAFqPQAEo2AEk/QAoALDuAcIEQAgIGJAuQDzAcDMAQICXAKQBiAJBlAKQDbAYCXAHQCtAHDaATQB9ALDgAWQDaAUHnAvQHJApF6AXQE/ASChALQF/AVLrAyIDtAOQCkALB1AEQB2AGCoAKID0AOQINAWFKALQIcASH5AJIC9AGQB1AEBAAAQBgABCWAGQCUAGBqAHQB7AJA6AIQCEARBhAkQBYAgBNAkICHBBICRBKQBDAgBEATQAGACA8AlQA8AmAJADQBYAeAoAJQAlAJBfARQAMACA9AGQBNAHA3AAQAmAAGMgJQDjgEBqAAQBJABAOACQAGAGAAEdQAAEfgKACMiE+AACUgv7AAAgKzgACg");
	this.shape_1057.setTransform(611.9,492.1);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf/AMpIAHsHQAGqigDizQAWAHCxAQIDTASIGOAoQELAcC5ALIFWAgQEnAbBJABQE5AKGXApQMABEMiAqQBYAECYAPQCfAQBHAEQGIAULYAyIDqAQQChAKB7AEIEfALQCZAFBQAFQNPAiQnAPQCBADD7AHQBUAKBlAEIC5AHIEMAIQDUAKBZAVQBaARBPAkIB/BDQBRArCbA7IDgBWICSBIQCVBEA7ABIB/gGQBOgDAjAJQADABGDgKQDXgFBnAAQBTAAAJAEQAMACgCEdQgDEdgQAHUiqNgAGgVfgAEg");
	this.shape_1058.setTransform(612.4,497);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf/AMKQgCg4AHrmQAIrfgDgjQDnAULjBGQA+AGEgAUQExAVBVADQCyAIDWANIE+ATQIkAiP0BMQA9AFC6ARQCUAOBVAEQELAMGvAYQF8AVAgADIDbAPQCbAKCIAFQCIAGCkAKIDkAOQHMATFFAKQIqAQIxAFQBEABB5AEQB+AFA3AAQAwACCSACQB1ABBFAFQBLADBsAGIC7ALIExASQDdAPBFARQBaAWA1AbQAbAOAPAMQBEAcCOBIICGBEIC7BHQChA+AgAMQAFACCQAKQCUAKAcAIQATAEK7gRIBmgCQgDAHgBEZQgBEYgEAHUguYAAHgvJAAEQt1ABr7AAQr6ABp+AAUgv0AAAgC5gANg");
	this.shape_1059.setTransform(612.4,501.1);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("rgba(101,156,197,0.6)").s().p("EhgLALoQgBjEAHo4QAHqTAHhVQCQAKEVAdIHyAzQDZAXHQASQCgAFD8APQEEAQBNADQDSAIOCA9QOAA7A5ADQD0AIJ5AoQJuAmBbAEQOoAhXJAvIPaAgQHMASDqATQAfADB4APIAjAEQAQADAoAKQA4APAqAUQAHAEBFApQBEAoALAFIDHBdQATAIB9AtQB3AqARAFQA+AVA0AKQAlAIBqARILPgBIB/gCIB2gDQgDAHgEEeQgEEdgEAHUinBgANgZIgAHg");
	this.shape_1060.setTransform(612.7,503.5);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf8ALeQAK1JAAh8QD4AYIdArQKGA2DgAIQCoAHD/ASIFvAaQC3AJO5A4QNiA0BYACQERAJE7AQIHiAaIH/AZQG0AWBIACQBUADL/AZQJXAWHCABQHQABF+AVQHIAaAwABQAUABBeALQBzAOBaAPQBqARBeAbQAOAEBKAeQBYAhA2AXIB2A1QBzAwAfAMQD9BZAbAGQAlAMBVANQB8ATBagJQA0gGFjAAIEEABIBiAAQgJAFACEbQACEagKAFUipigAEgWJgAGg");
	this.shape_1061.setTransform(612.2,505.5);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf3AK6IgBrMQgBpkAChGQN0A8C7AKQBTAFDiAFQEeAFCQAFQCrAGDQANIFLAVILFAsQHEAbGPATQBEADDAAOQCeALBcACQD4AGFTATIHtAZQA8ACCuANQCnANBsACQBzADCqAMQCyANA4ACQENAFJbAHQI+AJGyAJQIDANH0AbQDpANGdAbQAVACBVATQBQATANAFIBhAtQBkAvA1AXIBpAuQBlApAhALICOAtQB8AoAZAFQAFABCZAFQCtAGBUAIQFvgDCvgEQBNgCAVgBQAABXgFDcQgEEGgGABUhVjAADgv3AAAUgv5AAAgKPgADg");
	this.shape_1062.setTransform(613.6,508.1);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("rgba(101,156,197,0.6)").s().p("EhgEAKcIAFrbQAFpfAKAAQA0AGHUAaQIHAcCWAKQB1AJDJAEIGJAHQCkAFDbAMIFkAYQLjAtNKAjIIHAUQEAAKE+ASIHwAgQDlAOEYAQQB4AGCdACIDzACQEzACJxAAQIzACGBAPQG8ATEgARQFPAUDVAYQE2AjCCAaQBUAQARALIBjArQBqAtA1AYIBLAdIBGAYQAZAKEJBQQAXAEBJAFIBZAGQBBAJGKAAQDZgBBlgEIA4gCQAQAAABgCQAKImAAAAMhZ3AACMgz/AAAUgrMAAAgHHgACg");
	this.shape_1063.setTransform(611,511.1);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("rgba(101,156,197,0.6)").s().p("EhfzAKOIgFrNQgDpPAIAAQBYAATRBFQSnBCDQAPQM8A8LRAUQBIACDDAJQCoAIBfABQDVACFUANQFiANCQACQBOABCqAOQCoAOBcABQBkABC3AOQC1AOBMABQFEACJwAYQJdAYEpAAQIbAAHwAjQCrANGnAqQArAEA8AJQBOALAJAGQAFADBcAlQBoArA5AaIBxAmQBvAnAgAQQAZANBMAPIBVARQAaAEGJAAQF5AABvgCQA2gCAiAAQAFABABESQACESgDACMhaIAABMghWAAAQ+SAAxDAAQxDgBj1AAg");
	this.shape_1064.setTransform(612.3,512.6);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf7AGUQAAhRAKl3IAKlqMBMYAABUBNQAABAJ7AADQA2AAAkAFQAMADAVABQAVABALACQAIACAWARQAXARAHACQA8ATCqBRQATAJAsAOIBNAWQAmAMBeANQB0AQA2ALICBACIKpgDIBdgBQABACABEfQAAEigBgBUilngADgaPgAHg");
	this.shape_1065.setTransform(611.1,538.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf7AGOQAAhRAIlwIAHliMBMagACUBNUgABAJ6AADQA2AAAkAFQAMADAVABQAVABALACQAIACAWARQAXARAHACQA8ATCqBRQATAIAsAOIBNAXQAmAMBeANQB0AQA2ALICBACIKpgDIBdgBQABACABEaQAAEcgBAAUilngADgaPgAHg");
	this.shape_1066.setTransform(612.1,539.1);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf1AGRIAArsMBMdgAeUBNcgAdAJ0AADQA2AAAkAFQAMADAVABQAVABALADQAIACAWARQAXAQAHACQA8ATCqBRQATAJAsAOIBNAXQAmALBeANQB0AQA2ALICBADIKpgEIBdAAQABACgEEVQgFEXgBAAUhSqAADgv3AAAUgv5AAAgNIgADg");
	this.shape_1067.setTransform(612.5,538.9);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf1AGGQgLgRABlBQAAlCAPgTIEdgFIEOgDQFDgCGogHQHfgIEigCQG8gCRSgXQMMgNKfgCICwAAIH2ABQEUAADogCIQcgEQLJgCIDgJIJqgKIJbgKIFtgDQElgDA2gHQAkgFAsACIBMAEQASAAAnAYQArAbAJACIFiB7QAlAMBkAZIACAAICMANICaAMIF8gNQC5gFBbgBQBTgCAFADIAGJSUirHgAQgUvgAEg");
	this.shape_1068.setTransform(611.5,540);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("rgba(101,156,197,0.6)").s().p("EhfvAGNQgJgqgLkQQgLkiAWgJQBJgDEbgGIFPgGQEmgDG+gLQIHgMDpgCQEZgCT3gjQMdgTJ2gEICtAAIH1ABQEYABDggDIQhgGQLQgCHvgPIJpgPIJUgPQCVgEDbgMQBEgDB4ABQBpABAvgDQAigDASgDQAKgBAkADQASACBPAlIBeAsIB5AsICdAuICJAmQASADBGAJQBLAIAjABQBVAFBUACIJEgLIBSgCQANANAIIrUhTaAADgv8AAAUgv+AAAgMigADg");
	this.shape_1069.setTransform(610.8,539.3);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("rgba(101,156,197,0.6)").s().p("ACYGRUg1wgABgsigAKIAAovQCcgGD8gCIGUgEQEKgEHUgOILfgTIYRgxQOogeJ/AAIHzACQEbAADYgEQCMgCOagFQLZgEHagTQDGgIGigMQGNgLDAgJQCBgFEIgRQDngNCDAFQBbAbBvA6QBrA4AlAJQBhAZB2AgQBWAUBnADQB+AEERgFIHhgJIAHEhIAIEiMhP6AABItpAAg");
	this.shape_1070.setTransform(612,540);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf+AM8QgDg3ADsZQACsRgCgjIPUBaIFiAkQE/AfBNADQCiAHDhAYQDxAZBIAEQIkAiP0BMQDxASDvAMQGYATK+AzIQOA8QB+AFDhATIGyAjQJgAvH7AEQBEABB4AEQB+AFA4AAQAwACCRACQB1ABBGAFQBKADBtAGIC7ALIExASQDdAPBEARQBaAWA2AbQAbAOAOAMQBEAcCPBGICGBGIC6BHQChA+AhAMQAFACCPAKQCVAKAcAIQATAEK6gRIBngCQgDAHgBEZQgBEYgEAHUguZAAHgvJAAEQt1ABr7AAQr6ABp+AAUgv0AAAgC4gANg");
	this.shape_1071.setTransform(612.4,496.1);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("rgba(101,156,197,0.6)").s().p("EhfrAOPQAAjtgGqkQgEqmAAjtQJUAWERAwQDtAZHfAUQHeAUDsAZQILAvQIBTQQKBTIKAvIQsBGQI9AXR7BmQR8BlI9AXQCvAzDLBWQBBAcEdB/QDUBhCOA0QDJBKC+AmIG1gCQEPgBCngCIAAIdMhdZAAGI7/ABUgmyAAAgfXgAHg");
	this.shape_1072.setTransform(611.5,485.9);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("rgba(101,156,197,0.6)").s().p("EhfmANmQgDjEgNqjQgMqjgCjKQBAgEFYAXQFEAWA5AJQCkAZKpAvQFcAYGEAYQB+AIORBJQPUBOEjAVQBVAGJwAoQKhArCcALIISAmQISAlBkAFQDwAKKHAzQJXAwF/ALQA/ACEvASQErARBBACQBIAPAyATICAAuQAfAHAvAYQBFAkBYAhQBIAXBiA/QBcA7AwANQA5AQDMBOQC1BGBDALQK6gLDcAAQBSAAAPABIgDEYQgEEVAIAJUiqngAGgVEgAEg");
	this.shape_1073.setTransform(611,490);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("rgba(101,156,197,0.6)").s().p("Ehf6ANaQgDiyAFqPQAEo2AEk/QAmAKD1ATIEVAWQCbASDpATIG6AgIFfAgQErAaBGACQFmAPF0AkQGzAnYxBkQF/AVLrAxQBGAEHJAgQHHAeBMAFQDwAJJmAtQKGAvGQASQDIAJCqABQBgABCWAGQCUAGBqAHQB7AJA6AIQCEARBhAkQBYAgBNAkICHBBICRBKQBDAgBEATQAGACA8AlQA8AmAJADQBYAeAoAJQAlAJBfARQAMACA9AGQBNAHA3AAQAmAAGMgJQDjgEBqAAQBJABAOACQAGAGAAEdQAAEfgKACMiE+AACUgv7AAAgKzgACg");
	this.shape_1074.setTransform(611.9,492.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1055},{t:this.wtsymW_0,p:{y:480.7,regX:50,regY:50,x:570}}]}).to({state:[{t:this.shape_1056}]},1).to({state:[{t:this.shape_1057}]},1).to({state:[{t:this.shape_1058}]},1).to({state:[{t:this.shape_1059}]},1).to({state:[{t:this.shape_1060},{t:this.wtsymW_0,p:{y:496.7,regX:50,regY:50,x:570}}]},1).to({state:[{t:this.shape_1061}]},1).to({state:[{t:this.shape_1062}]},1).to({state:[{t:this.shape_1063}]},1).to({state:[{t:this.shape_1064}]},1).to({state:[{t:this.shape_1065},{t:this.wtsymW_0,p:{y:531.7,regX:50,regY:50,x:570}}]},1).to({state:[{t:this.shape_1066}]},4).to({state:[{t:this.shape_1067},{t:this.wtsymW_0,p:{y:535.7,regX:50,regY:50,x:570}}]},2).to({state:[{t:this.shape_1068}]},2).to({state:[{t:this.shape_1069}]},2).to({state:[{t:this.shape_1070},{t:this.wtsymW_0,p:{y:544.7,regX:50,regY:50,x:570}}]},2).to({state:[{t:this.shape_1071},{t:this.wtsymW_0,p:{y:458,regX:20,regY:20,x:540}}]},2).to({state:[{t:this.shape_1072},{t:this.wtsymW_0,p:{y:440,regX:20,regY:20,x:540}}]},24).to({state:[{t:this.shape_1073},{t:this.wtsymW_0,p:{y:446,regX:20,regY:20,x:540}}]},360).to({state:[{t:this.shape_1074},{t:this.wtsymW_0,p:{y:451,regX:20,regY:20,x:540}}]},360).to({state:[{t:this.shape_1074},{t:this.wtsymW_0,p:{y:451,regX:20,regY:20,x:540}}]},360).to({state:[{t:this.shape_1071},{t:this.wtsymW_0,p:{y:458,regX:20,regY:20,x:540}}]},360).wait(360));

	// rechargeArrows
	this.rchgPArrow12 = new lib.SymArrowRchgTween12();
	this.rchgPArrow12.parent = this;
	this.rchgPArrow12.setTransform(945,458.5,1,1,0,0,0,1.5,4);

	this.rchgPArrow11 = new lib.SymArrowRchgTween11();
	this.rchgPArrow11.parent = this;
	this.rchgPArrow11.setTransform(863.5,442.5,1,1,0,0,0,0.5,5.5);

	this.rchgPArrow10 = new lib.SymArrowRchgTween10();
	this.rchgPArrow10.parent = this;
	this.rchgPArrow10.setTransform(793,435.5,1,1,0,0,0,2,7);

	this.rchgPArrow9 = new lib.SymArrowRchgTween9();
	this.rchgPArrow9.parent = this;
	this.rchgPArrow9.setTransform(727.5,427.5,1,1,0,0,0,1,7);

	this.rchgPArrow8 = new lib.SymArrowRchgTween8();
	this.rchgPArrow8.parent = this;
	this.rchgPArrow8.setTransform(661,413.5);

	this.rchgPArrow7 = new lib.SymArrowRchgTween7();
	this.rchgPArrow7.parent = this;
	this.rchgPArrow7.setTransform(528,408,1,1,0,0,0,2.5,8.5);

	this.rchgPArrow6 = new lib.SymArrowRchgTween6();
	this.rchgPArrow6.parent = this;
	this.rchgPArrow6.setTransform(479,404,1,1,0,0,0,2,8.5);

	this.rchgPArrow5 = new lib.SymArrowRchgTween5();
	this.rchgPArrow5.parent = this;
	this.rchgPArrow5.setTransform(413,397.6,1,1,0,0,0,1,9);

	this.rchgPArrow4 = new lib.SymArrowRchgTween4();
	this.rchgPArrow4.parent = this;
	this.rchgPArrow4.setTransform(346.5,390.6,1,1,0,0,0,1,8.5);

	this.rchgPArrow2 = new lib.SymArrowRchgTween2();
	this.rchgPArrow2.parent = this;
	this.rchgPArrow2.setTransform(192.1,392,1,1,0,0,0,0.3,27);

	this.rchgPArrow3 = new lib.SymArrowRchgTween3();
	this.rchgPArrow3.parent = this;
	this.rchgPArrow3.setTransform(261.2,381.5,1,1,0,0,0,1.5,9);

	this.rchgPArrow1 = new lib.SymArrowRchgTween1();
	this.rchgPArrow1.parent = this;
	this.rchgPArrow1.setTransform(76.3,362.8,1,1,0,0,0,5,11.2);

	this.rchgSArrow12H = new lib.SymArrowRchgTwn12H();
	this.rchgSArrow12H.parent = this;
	this.rchgSArrow12H.setTransform(945,458.5,1,1,0,0,0,1.5,4);

	this.rchgSArrow11H = new lib.SymArrowRchgTwn11H();
	this.rchgSArrow11H.parent = this;
	this.rchgSArrow11H.setTransform(863.5,442.5,1,1,0,0,0,0.5,5.5);

	this.rchgSArrow10H = new lib.SymArrowRchgTwn10H();
	this.rchgSArrow10H.parent = this;
	this.rchgSArrow10H.setTransform(793,435.5,1,1,0,0,0,2,7);

	this.rchgSArrow9H = new lib.SymArrowRchgTwn9H();
	this.rchgSArrow9H.parent = this;
	this.rchgSArrow9H.setTransform(727.5,427.5,1,1,0,0,0,1,7);

	this.rchgSArrow8H = new lib.SymArrowRchgTwn8H();
	this.rchgSArrow8H.parent = this;
	this.rchgSArrow8H.setTransform(661,413.5);

	this.rchgSArrow7H = new lib.SymArrowRchgTwn7H();
	this.rchgSArrow7H.parent = this;
	this.rchgSArrow7H.setTransform(528,408,1,1,0,0,0,2.5,8.5);

	this.rchgSArrow6H = new lib.SymArrowRchgTwn6H();
	this.rchgSArrow6H.parent = this;
	this.rchgSArrow6H.setTransform(479,404,1,1,0,0,0,2,8.5);

	this.rchgSArrow5H = new lib.SymArrowRchgTwn5H();
	this.rchgSArrow5H.parent = this;
	this.rchgSArrow5H.setTransform(413,397.6,1,1,0,0,0,1,9);

	this.rchgSArrow4H = new lib.SymArrowRchgTwn4H();
	this.rchgSArrow4H.parent = this;
	this.rchgSArrow4H.setTransform(346.5,390.6,1,1,0,0,0,1,8.5);

	this.rchgSArrow2H = new lib.SymArrowRchgTwn2H();
	this.rchgSArrow2H.parent = this;
	this.rchgSArrow2H.setTransform(192.1,392,1,1,0,0,0,0.3,27);

	this.rchgSArrow3H = new lib.SymArrowRchgTwn3H();
	this.rchgSArrow3H.parent = this;
	this.rchgSArrow3H.setTransform(261.2,381.5,1,1,0,0,0,1.5,9);

	this.rchgSArrow1H = new lib.SymArrowRchgTwn1H();
	this.rchgSArrow1H.parent = this;
	this.rchgSArrow1H.setTransform(76.3,362.8,1,1,0,0,0,5,11.2);

	this.rchgSArrow12MH = new lib.SymArrowRchgTwn12MH();
	this.rchgSArrow12MH.parent = this;
	this.rchgSArrow12MH.setTransform(945,458.5,1,1,0,0,0,1.5,4);

	this.rchgSArrow11MH = new lib.SymArrowRchgTwn11MH();
	this.rchgSArrow11MH.parent = this;
	this.rchgSArrow11MH.setTransform(863.5,442.5,1,1,0,0,0,0.5,5.5);

	this.rchgSArrow10MH = new lib.SymArrowRchgTwn10MH();
	this.rchgSArrow10MH.parent = this;
	this.rchgSArrow10MH.setTransform(793,435.5,1,1,0,0,0,2,7);

	this.rchgSArrow9MH = new lib.SymArrowRchgTwn9MH();
	this.rchgSArrow9MH.parent = this;
	this.rchgSArrow9MH.setTransform(727.5,427.5,1,1,0,0,0,1,7);

	this.rchgSArrow8MH = new lib.SymArrowRchgTwn8MH();
	this.rchgSArrow8MH.parent = this;
	this.rchgSArrow8MH.setTransform(661,413.5);

	this.rchgSArrow7MH = new lib.SymArrowRchgTwn7MH();
	this.rchgSArrow7MH.parent = this;
	this.rchgSArrow7MH.setTransform(528,408,1,1,0,0,0,2.5,8.5);

	this.rchgSArrow6MH = new lib.SymArrowRchgTwn6MH();
	this.rchgSArrow6MH.parent = this;
	this.rchgSArrow6MH.setTransform(479,404,1,1,0,0,0,2,8.5);

	this.rchgSArrow5MH = new lib.SymArrowRchgTwn5MH();
	this.rchgSArrow5MH.parent = this;
	this.rchgSArrow5MH.setTransform(413,397.6,1,1,0,0,0,1,9);

	this.rchgSArrow4MH = new lib.SymArrowRchgTwn4MH();
	this.rchgSArrow4MH.parent = this;
	this.rchgSArrow4MH.setTransform(346.5,390.6,1,1,0,0,0,1,8.5);

	this.rchgSArrow2MH = new lib.SymArrowRchgTwn2MH();
	this.rchgSArrow2MH.parent = this;
	this.rchgSArrow2MH.setTransform(192.1,392,1,1,0,0,0,0.3,27);

	this.rchgSArrow3MH = new lib.SymArrowRchgTwn3MH();
	this.rchgSArrow3MH.parent = this;
	this.rchgSArrow3MH.setTransform(261.2,381.5,1,1,0,0,0,1.5,9);

	this.rchgSArrow1MH = new lib.SymArrowRchgTwn1MH();
	this.rchgSArrow1MH.parent = this;
	this.rchgSArrow1MH.setTransform(76.3,362.8,1,1,0,0,0,5,11.2);

	this.rchgSArrow12M = new lib.SymArrowRchgTwn12M();
	this.rchgSArrow12M.parent = this;
	this.rchgSArrow12M.setTransform(945,458.5,1,1,0,0,0,1.5,4);

	this.rchgSArrow11M = new lib.SymArrowRchgTwn11M();
	this.rchgSArrow11M.parent = this;
	this.rchgSArrow11M.setTransform(863.5,442.5,1,1,0,0,0,0.5,5.5);

	this.rchgSArrow10M = new lib.SymArrowRchgTwn10M();
	this.rchgSArrow10M.parent = this;
	this.rchgSArrow10M.setTransform(793,435.5,1,1,0,0,0,2,7);

	this.rchgSArrow9M = new lib.SymArrowRchgTwn9M();
	this.rchgSArrow9M.parent = this;
	this.rchgSArrow9M.setTransform(727.5,427.5,1,1,0,0,0,1,7);

	this.rchgSArrow8M = new lib.SymArrowRchgTwn8M();
	this.rchgSArrow8M.parent = this;
	this.rchgSArrow8M.setTransform(661,413.5);

	this.rchgSArrow7M = new lib.SymArrowRchgTwn7M();
	this.rchgSArrow7M.parent = this;
	this.rchgSArrow7M.setTransform(528,408,1,1,0,0,0,2.5,8.5);

	this.rchgSArrow6M = new lib.SymArrowRchgTwn6M();
	this.rchgSArrow6M.parent = this;
	this.rchgSArrow6M.setTransform(479,404,1,1,0,0,0,2,8.5);

	this.rchgSArrow5M = new lib.SymArrowRchgTwn5M();
	this.rchgSArrow5M.parent = this;
	this.rchgSArrow5M.setTransform(413,397.6,1,1,0,0,0,1,9);

	this.rchgSArrow4M = new lib.SymArrowRchgTwn4M();
	this.rchgSArrow4M.parent = this;
	this.rchgSArrow4M.setTransform(346.5,390.6,1,1,0,0,0,1,8.5);

	this.rchgSArrow2M = new lib.SymArrowRchgTwn2M();
	this.rchgSArrow2M.parent = this;
	this.rchgSArrow2M.setTransform(192.1,392,1,1,0,0,0,0.3,27);

	this.rchgSArrow3M = new lib.SymArrowRchgTwn3M();
	this.rchgSArrow3M.parent = this;
	this.rchgSArrow3M.setTransform(261.2,381.5,1,1,0,0,0,1.5,9);

	this.rchgSArrow1M = new lib.SymArrowRchgTwn1M();
	this.rchgSArrow1M.parent = this;
	this.rchgSArrow1M.setTransform(76.3,362.8,1,1,0,0,0,5,11.2);

	this.rchgSArrow12ML = new lib.SymArrowRchgTwn12ML();
	this.rchgSArrow12ML.parent = this;
	this.rchgSArrow12ML.setTransform(945,458.5,1,1,0,0,0,1.5,4);

	this.rchgSArrow11ML = new lib.SymArrowRchgTwn11ML();
	this.rchgSArrow11ML.parent = this;
	this.rchgSArrow11ML.setTransform(863.5,442.5,1,1,0,0,0,0.5,5.5);

	this.rchgSArrow10ML = new lib.SymArrowRchgTwn10ML();
	this.rchgSArrow10ML.parent = this;
	this.rchgSArrow10ML.setTransform(793,435.5,1,1,0,0,0,2,7);

	this.rchgSArrow9ML = new lib.SymArrowRchgTwn9ML();
	this.rchgSArrow9ML.parent = this;
	this.rchgSArrow9ML.setTransform(727.5,427.5,1,1,0,0,0,1,7);

	this.rchgSArrow8ML = new lib.SymArrowRchgTwn8ML();
	this.rchgSArrow8ML.parent = this;
	this.rchgSArrow8ML.setTransform(661,413.5);

	this.rchgSArrow7ML = new lib.SymArrowRchgTwn7ML();
	this.rchgSArrow7ML.parent = this;
	this.rchgSArrow7ML.setTransform(528,408,1,1,0,0,0,2.5,8.5);

	this.rchgSArrow6ML = new lib.SymArrowRchgTwn6ML();
	this.rchgSArrow6ML.parent = this;
	this.rchgSArrow6ML.setTransform(479,404,1,1,0,0,0,2,8.5);

	this.rchgSArrow5ML = new lib.SymArrowRchgTwn5ML();
	this.rchgSArrow5ML.parent = this;
	this.rchgSArrow5ML.setTransform(413,397.6,1,1,0,0,0,1,9);

	this.rchgSArrow4ML = new lib.SymArrowRchgTwn4ML();
	this.rchgSArrow4ML.parent = this;
	this.rchgSArrow4ML.setTransform(346.5,390.6,1,1,0,0,0,1,8.5);

	this.rchgSArrow2ML = new lib.SymArrowRchgTwn2ML();
	this.rchgSArrow2ML.parent = this;
	this.rchgSArrow2ML.setTransform(192.1,392,1,1,0,0,0,0.3,27);

	this.rchgSArrow3ML = new lib.SymArrowRchgTwn3ML();
	this.rchgSArrow3ML.parent = this;
	this.rchgSArrow3ML.setTransform(261.2,381.5,1,1,0,0,0,1.5,9);

	this.rchgSArrow1ML = new lib.SymArrowRchgTwn1ML();
	this.rchgSArrow1ML.parent = this;
	this.rchgSArrow1ML.setTransform(76.3,362.8,1,1,0,0,0,5,11.2);

	this.rchgSArrow12L = new lib.SymArrowRchgTwn12L();
	this.rchgSArrow12L.parent = this;
	this.rchgSArrow12L.setTransform(945,458.5,1,1,0,0,0,1.5,4);

	this.rchgSArrow11L = new lib.SymArrowRchgTwn11L();
	this.rchgSArrow11L.parent = this;
	this.rchgSArrow11L.setTransform(863.5,442.5,1,1,0,0,0,0.5,5.5);

	this.rchgSArrow10L = new lib.SymArrowRchgTwn10L();
	this.rchgSArrow10L.parent = this;
	this.rchgSArrow10L.setTransform(793,435.5,1,1,0,0,0,2,7);

	this.rchgSArrow9L = new lib.SymArrowRchgTwn9L();
	this.rchgSArrow9L.parent = this;
	this.rchgSArrow9L.setTransform(727.5,427.5,1,1,0,0,0,1,7);

	this.rchgSArrow8L = new lib.SymArrowRchgTwn8L();
	this.rchgSArrow8L.parent = this;
	this.rchgSArrow8L.setTransform(661,413.5);

	this.rchgSArrow7L = new lib.SymArrowRchgTwn7L();
	this.rchgSArrow7L.parent = this;
	this.rchgSArrow7L.setTransform(528,408,1,1,0,0,0,2.5,8.5);

	this.rchgSArrow6L = new lib.SymArrowRchgTwn6L();
	this.rchgSArrow6L.parent = this;
	this.rchgSArrow6L.setTransform(479,404,1,1,0,0,0,2,8.5);

	this.rchgSArrow5L = new lib.SymArrowRchgTwn5L();
	this.rchgSArrow5L.parent = this;
	this.rchgSArrow5L.setTransform(413,397.6,1,1,0,0,0,1,9);

	this.rchgSArrow4L = new lib.SymArrowRchgTwn4L();
	this.rchgSArrow4L.parent = this;
	this.rchgSArrow4L.setTransform(346.5,390.6,1,1,0,0,0,1,8.5);

	this.rchgSArrow2L = new lib.SymArrowRchgTwn2L();
	this.rchgSArrow2L.parent = this;
	this.rchgSArrow2L.setTransform(192.1,392,1,1,0,0,0,0.3,27);

	this.rchgSArrow3L = new lib.SymArrowRchgTwn3L();
	this.rchgSArrow3L.parent = this;
	this.rchgSArrow3L.setTransform(261.2,381.5,1,1,0,0,0,1.5,9);

	this.rchgSArrow1L = new lib.SymArrowRchgTwn1L();
	this.rchgSArrow1L.parent = this;
	this.rchgSArrow1L.setTransform(76.3,362.8,1,1,0,0,0,5,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.rchgPArrow1},{t:this.rchgPArrow3},{t:this.rchgPArrow2},{t:this.rchgPArrow4},{t:this.rchgPArrow5},{t:this.rchgPArrow6},{t:this.rchgPArrow7},{t:this.rchgPArrow8},{t:this.rchgPArrow9},{t:this.rchgPArrow10},{t:this.rchgPArrow11},{t:this.rchgPArrow12}]},24).to({state:[]},24).to({state:[{t:this.rchgSArrow1H},{t:this.rchgSArrow3H},{t:this.rchgSArrow2H},{t:this.rchgSArrow4H},{t:this.rchgSArrow5H},{t:this.rchgSArrow6H},{t:this.rchgSArrow7H},{t:this.rchgSArrow8H},{t:this.rchgSArrow9H},{t:this.rchgSArrow10H},{t:this.rchgSArrow11H},{t:this.rchgSArrow12H}]},24).to({state:[]},115).to({state:[{t:this.rchgSArrow1MH},{t:this.rchgSArrow3MH},{t:this.rchgSArrow2MH},{t:this.rchgSArrow4MH},{t:this.rchgSArrow5MH},{t:this.rchgSArrow6MH},{t:this.rchgSArrow7MH},{t:this.rchgSArrow8MH},{t:this.rchgSArrow9MH},{t:this.rchgSArrow10MH},{t:this.rchgSArrow11MH},{t:this.rchgSArrow12MH}]},245).to({state:[]},150).to({state:[{t:this.rchgSArrow1M},{t:this.rchgSArrow3M},{t:this.rchgSArrow2M},{t:this.rchgSArrow4M},{t:this.rchgSArrow5M},{t:this.rchgSArrow6M},{t:this.rchgSArrow7M},{t:this.rchgSArrow8M},{t:this.rchgSArrow9M},{t:this.rchgSArrow10M},{t:this.rchgSArrow11M},{t:this.rchgSArrow12M}]},210).to({state:[]},185).to({state:[{t:this.rchgSArrow1ML},{t:this.rchgSArrow3ML},{t:this.rchgSArrow2ML},{t:this.rchgSArrow4ML},{t:this.rchgSArrow5ML},{t:this.rchgSArrow6ML},{t:this.rchgSArrow7ML},{t:this.rchgSArrow8ML},{t:this.rchgSArrow9ML},{t:this.rchgSArrow10ML},{t:this.rchgSArrow11ML},{t:this.rchgSArrow12ML}]},175).to({state:[]},220).to({state:[{t:this.rchgSArrow1L},{t:this.rchgSArrow3L},{t:this.rchgSArrow2L},{t:this.rchgSArrow4L},{t:this.rchgSArrow5L},{t:this.rchgSArrow6L},{t:this.rchgSArrow7L},{t:this.rchgSArrow8L},{t:this.rchgSArrow9L},{t:this.rchgSArrow10L},{t:this.rchgSArrow11L},{t:this.rchgSArrow12L}]},140).to({state:[]},255).wait(81));

	// recharge
	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("rgba(101,156,197,0.898)").s().p("EBEvAJvIhfjPIASAAIBYDPgEA2uADqIARAEIAZFjIgOADgEAtCAHyIgwihQgihxgVhOIAUAFQACASB3GSIgQADgEAhZABHIARADIA4HKIgNABgAVnHXQAPiBAOg0QAUhJAzhvQAwhnAIgCQAFgBgFADQgDACANgEQgEANhgDPQgbA4gbDEQgBAEgCAAQgDAAgGgGgAEqGcQgUhGgQgzIhGjZQgnh4gYhWQAJAAALAFIA/DwQApCCAzCrgAlnixIAUAAIB9ImIgMABgAvsjwQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgCAOADIAtFVQAGAgAHBJIAMB+IgKADgA63ESIBGpKIANACIhGJQgEgosABqIAiikQAfibADgEQADgKAQhcQAQhYACgFIAGACQAFAAAMAGQgFAQgwDmIhNFwIgSADgEgyjACiIAAgBIAiqIIARADIgoKGgEg/+ABVQhdjagWgnQgUgegFgKQgXgrgWgwIgjhRQg2h5gSgsQgehKAIABIALABQAFAAADACIAFAJIAEALQAGAYADAFQAdBSAhA/QASAjARAoIAXAyQCZFBAJAXIAQApg");
	this.shape_1075.setTransform(512,413.3);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("rgba(101,156,197,0.6)").s().p("EBEIAJAIg2hyIBeAZIAiBfgEA2sAEXIBEALIANDeIg9ABgEAsdAHEIhDj/IBJAKQABATBCDtgEAiAAGPIgpkXIBWAMIAVEOgAWUFGQAsiiAvhnQADgJAMgOQADAFAYADQAYADASgEQgFANg3BwIgIASQg+CLgGAXIguABgADxEPQg+jFgsieQAJAAA9ALIBEDiQARA0AVBMgAkLDkIhWlpIA8AEIBQFsgAu5CrIgylxQAKAAA0ALQADARAEAOQgEByACAaQAMBcAJA2IAGAygA6iBwIAnmCIBgAPIhCF6gEgorAAkIAUhzIALhBQAMgjAGgJQAJgjAEgbIAEgYQAQhMAIgOIAnAEQAoACAMAGIgTBAQgPAygHAeIgxD7gEgyfgAQIARmsIBWAMIglGpgEhBAgA7QgfAAgCgEQgXg9gHgLIgPgeQg4hngkhRQhRi5gWgvIAAAAIAgACQAOADAKAEIADABQALATALAXQAXA/AoBNIBECEIAKATQARAdA+CSQABAEgYAAIgFAAg");
	this.shape_1076.setTransform(510.4,408.5);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("rgba(101,156,197,0.6)").s().p("EBDIAG4IBaAcIAmBtIg9AEgEA2iAEVIBCAGIAPEAIg3ADgEAshAHjIhRkkIBJAJQACAaBHEJgEAh/AG5IgylCIBWALIAYFAgAWKFEQAsiiAwhnQACgJAMgOQADAGAYADQAZADARgFQgEANg4BwIgIASQg+CLgGAXIgJAmIguAFgAD0E2QhIjlgvinQAJAAA0AIIBDDnQAQAwAhB1gAlhiDIA9AGIBUGTIgtADgAu7DkQgtlVgNhXQAKABA1ALQACAQAEAOQgEByADAaQAMBcAIA2IANBSIADAcgA6FkTIBPAMIhCGxIg4AEgEgovAAHIAOhYIALhDQAMgjAGgKQAKgiADgbIAEgYQAQhPAIgNQABABAiAEQAiAEAMAFQgPA7gSBPQgIAngcBxIgoCiIhKAFIAShegEgysAA0IAUnyIBKAIIgmHygEhA4gAPQgRgogSgiIgaguIgPgdQg4hngkhRQhRi5gVgvIgBAAIAgACQAOACAKAFIADABQALATALAWQAYBAAoBNIBECEIAJATQAVAkBRDBIgNAAQglAAgDgHg");
	this.shape_1077.setTransform(511.4,410.7);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("rgba(101,156,197,0.6)").s().p("EBDHAG2IBLAZIAyCCIg2ABgEA26AIyIgWkwIAyAGIAREsgEAsuAIHQgjh+g5jdIA3AFQACAYBZFIgEAhPABiIBEAMIAcFtIgzABgAV6E/QAUhKA0h0QAvhtAJgCQAEgBAQAHQAQAIAOgEQgFANg6B6IgIASQg+CLgGAXQgJAggIAwIguADQANhBALgqgAEGFfIgKgfIhGjZQgmh4gYhWQAJAAApAFIBDDkQAXBIArCagAj9FEIh0nfIA9AFIBiHcgAuzETIhCntQAfACALADQACALAJAbQgDByACAaIAUCTQAHAoAGArIAKBZgA5/kiIA5AHIhNH7IgnABgEgpEABuQAVhYAEgWQADgRAUhaQAVheADgEQAMgpAIgvQAPhLAKgRIAUAAQASgBAMAGQgHAdgXB0QgIAqgkCPQgiCIgHAiIgGAgIg4AFgEgyLgHRIAtACIgwJCIgjACgEhAkAAuQg4iGgeg3QgUgegFgKQgXgrgWgwIgjhRQg2h5gTgsQgehJAJAAQAOACAKAFIADABQALATALAWQAYBAAoBNIBECEIAJATQAYAoBUDNIAWA1g");
	this.shape_1078.setTransform(513,411.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("rgba(101,156,197,0.6)").s().p("EBDTAGxIAlAMIBACSIgcAAgEA2wAELIAeADIAUEhIgaABgEAreACxIAeAGQACATBeE9IglACIhZlYgEAhbABnIAjAEIAoFqIgcACgAVwGlQAMg9AKgnQAUhIA0hvQAvhoAJgBQADgBAJACQAJACAOgDQgCAGgVAoIgvBgIgjBTQgaA5gGAcQgDAPAAAMIgLAtQgBAGgRACIgJABQgIAAABgDgAEPFaIgHgYIhGjZQgmh4gYhVQAJgBASAGIBBDrQAWBEArCOQABABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQgEAAgNgHgAlliSIAkABIBoHPIgaACgAvpjSQAPABARADIACAVIADAUQgBAuAHAtIAJAvQAEAfAEA4IAHBGQAGAhAEA3IAHAyIgUABIhAnfgA5zkYIAeAFIhBHpIgYAGgEgo+ACSIAGgaQAVhYAEgWQADgRAUhbQAVhdADgEQAMgpAIgvQAPhLAKgRIALAAQAKgBAMAGIgUBEQgQA2gHAeIhNFvgEgx/gHMIAZAFIgmI0IgTACgEhAgAAdQgyh4gcgxQgUgfgFgKQgXgrgWgwIgjhRQg2h5gTgsQgehJAJABQAOACAKAEIADACQAEAGABAPQABAQADAHQAeBRAhBAQARAiASApIAWAyIAMAQIALAOQAQAdAbA4QAlBNAlBZIAKAaQAAABAAABQAAABAAAAQAAABAAAAQgBAAgBAAQgFAAgWgOg");
	this.shape_1079.setTransform(511.8,411.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1075}]},24).to({state:[{t:this.shape_1076}]},24).to({state:[{t:this.shape_1077}]},360).to({state:[{t:this.shape_1078}]},360).to({state:[{t:this.shape_1079}]},360).to({state:[{t:this.shape_1075}]},360).wait(360));

	// soil
	this.instance_26 = new lib.Soil12();
	this.instance_26.parent = this;
	this.instance_26.setTransform(612,461,1,1,0,0,0,612,121);

	this.instance_27 = new lib.Soil9();
	this.instance_27.parent = this;
	this.instance_27.setTransform(612,462.5,1,1,0,0,0,612,122.5);

	this.instance_28 = new lib.Soil7();
	this.instance_28.parent = this;
	this.instance_28.setTransform(612,463,1,1,0,0,0,612,123);

	this.instance_29 = new lib.Soil5();
	this.instance_29.parent = this;
	this.instance_29.setTransform(612,464,1,1,0,0,0,612,124);

	this.instance_30 = new lib.Soil1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(612,460.5,1,1,0,0,0,612,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},48).to({state:[{t:this.instance_27}]},360).to({state:[{t:this.instance_28}]},360).to({state:[{t:this.instance_29}]},360).to({state:[{t:this.instance_30}]},360).wait(360));

	// gravel
	this.instance_31 = new lib.gravelbackground();
	this.instance_31.parent = this;
	this.instance_31.setTransform(612,463.5,1,1,0,0,0,612,121.5);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(48).to({_off:false},0).wait(1800));

	// fourtreesWPS
	this.fourTrees = new lib.SymFourTrees();
	this.fourTrees.parent = this;
	this.fourTrees.setTransform(534.5,354,1,1,0,0,0,326.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.fourTrees).wait(1848));

	// background
	this.instance_32 = new lib.watertablebgd();
	this.instance_32.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1848));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(610,288,1228.2,577.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;