(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Naves_atlas_", frames: [[996,0,20,20],[802,0,119,70],[802,72,119,70],[923,0,71,99],[923,101,71,99],[0,0,800,540]]}
];


// symbols:



(lib.bala = function() {
	this.spriteSheet = ss["Naves_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.caza_cb = function() {
	this.spriteSheet = ss["Naves_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.caza_sb = function() {
	this.spriteSheet = ss["Naves_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hm_cb = function() {
	this.spriteSheet = ss["Naves_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hm_sb = function() {
	this.spriteSheet = ss["Naves_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Naves_1 = function() {
	this.spriteSheet = ss["Naves_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.halcon_brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.hm_cb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halcon_brillo, new cjs.Rectangle(0,0,71,99), null);


(lib.caza_brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.caza_cb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.caza_brillo, new cjs.Rectangle(0,0,119,70), null);


(lib.bala_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.bala();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.halcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("nave");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Capa 2
	this.instance = new lib.halcon_brillo();
	this.instance.parent = this;
	this.instance.setTransform(35.5,49.5,1,1,0,0,0,35.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// fondo
	this.instance_1 = new lib.hm_sb();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,99);


(lib.caza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.caza_brillo();
	this.instance.parent = this;
	this.instance.setTransform(59.5,35,1,1,0,0,0,59.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// fondo
	this.instance_1 = new lib.caza_sb();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,70);


// stage content:
(lib.Naves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root=this;
		var mensajeTxt = new createjs.Text();
		var mensaje = "Choque";
		var KEY_ENTER = 13;
		var KEY_LEFT = 37;
		var KEY_UP = 38;
		var KEY_RIGHT = 39;
		var KEY_DOWN = 40;
		var BARRA = 32;
		var teclaPulsada = null;
		var tecla = [];
		var delta = 3;
		
		this.addEventListener("tick",avanzar);
		
		function avanzar(){
			if( root.cazaImperial.x<=0 || root.cazaImperial.x>=681 ){
				delta = delta * -1;
			}
			root.cazaImperial.x += delta;
			verColision();
		}
		
		document.onkeydown = function() {moverTeclado(event)};
		
		function moverTeclado(event) {
			switch(event.keyCode){
				case KEY_RIGHT:
					root.halconMilenario.rotation = 90;
					root.halconMilenario.x += 10;
					break;
				
				case KEY_LEFT:
					root.halconMilenario.rotation = 270;
					root.halconMilenario.x -= 10;
					break;
				
				case KEY_UP:
					root.halconMilenario.rotation = 0;
					root.halconMilenario.y -= 10;
					break;
				
				case KEY_DOWN:
					root.halconMilenario.rotation = 180;
					root.halconMilenario.y += 10;
					break;
			}
		}
		
		document.onwheel = function() {moverScroll(event)};
		
		function moverScroll(event) {
				root.halconMilenario.y -= event.deltaY/10;
		}
		
		function verColision(){
			if( colision(root.cazaImperial,root.halconMilenario) ){
				mostrarTexto(80,480,mensaje,"#ffff00","20px Arial");
			}
			else{
				mostrarTexto(80,480,"","#ffff00","20px Arial");
			}
		}
		
		
		function moverCaza(){
			signo = Math.floor(Math.random()*10);
			num = Math.floor(Math.random()*10);
		}
		
		function colision(o1,o2){
			var o1Rect = o1.getBounds();
			var o2Rect = o2.getBounds();
			var colision=false;
			var colisionInfDer = false;
			var colisionSupDer = false;
			var colisionInfIzq = false;
			var colisionSupIzq = false;
			var o1x1=o1.x;
			var o1y1=o1.y;
			var o1x2=o1.x + o1Rect.width;
			var o1y2=o1.y + o1Rect.height;
			var o2x1=o2.x;
			var o2y1=o2.y;
			var o2x2=o2.x + o2Rect.width;
			var o2y2=o2.y + o2Rect.height;
			if((o2x1>o1x1)&&(o2x1<o1x2)&&(o2y1>o1y1)&&(o2y1<o1y2)){
				colisionInfDer=true;
			}
			else{
				colisionInfDer=false;
			}
			if((o2x1>o1x1)&&(o2x1<o1x2)&&(o2y2>o1y1)&&(o2y2<o1y2)){
				colisionSupDer=true;
			}
			else{
				colisionSupDer=false;
			}
			if((o2x2>o1x1)&&(o2x2<o1x2)&&(o2y1>o1y1)&&(o2y1<o1y2)){
				colisionInfIzq=true;
			}
			else{
				colisionInfIzq=false;
			}
			if((o2x2>o1x1)&&(o2x2<o1x2)&&(o2y2>o1y1)&&(o2y2<o1y2)){
				colisionSupIzq=true;
			}
			else{
				colisionSupIzq=false;
			}
			if(colisionSupIzq||colisionInfIzq||colisionSupDer||colisionInfDer){
				colision = true;
			}
			else{
				colision = false;
			}
			return colision;
		}
		
		function mostrarTexto(cordx,cordy,texto,color,fuente){
			mensajeTxt.x = cordx;
			mensajeTxt.y = cordy;
			mensajeTxt.color = color;
			mensajeTxt.font  = fuente;
			mensajeTxt.text  = texto;
			root.addChild(mensajeTxt);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 2
	this.cazaImperial = new lib.caza();
	this.cazaImperial.parent = this;
	this.cazaImperial.setTransform(540.5,130,1,1,0,0,0,59.5,35);

	this.halconMilenario = new lib.halcon();
	this.halconMilenario.parent = this;
	this.halconMilenario.setTransform(222.5,384.5,1,1,0,0,0,35.5,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.halconMilenario},{t:this.cazaImperial}]}).wait(1));

	// Capa 3
	this.plasma = new lib.bala_1();
	this.plasma.parent = this;
	this.plasma.setTransform(197,270.5,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.plasma).wait(1));

	// Capa 1
	this.instance = new lib.Naves_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,270,800,540);
// library properties:
lib.properties = {
	width: 800,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Naves_atlas_.png?1530155795507", id:"Naves_atlas_"},
		{src:"sounds/nave.mp3?1530155795520", id:"nave"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;