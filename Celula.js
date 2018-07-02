(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Celula_atlas_", frames: [[439,542,383,293],[815,837,61,97],[439,837,171,109],[612,837,138,110],[141,937,37,35],[0,997,38,24],[103,937,36,37],[0,937,64,58],[752,837,61,136],[66,937,35,72],[180,937,36,34],[0,542,437,393],[815,936,76,75],[0,0,800,540]]}
];


// symbols:



(lib.celula_0001_Capa3 = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.celula_0002_ReticuloEndo = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.celula_0003_vacuola = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.celula_0004_Nucleo = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.celula_0005_Lisosoma = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.celula_0006_Cloroplasto = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.celula_0007_Miticondria = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.celula_0008_Ribosoma = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.celula_0009_paredcelular = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.celula_0010_citoplasma = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.celula_0011_Peroxisoma = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.celula_0012_Capa1 = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.celula_0012_golgi = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.celula_Fondo = function() {
	this.spriteSheet = ss["Celula_atlas_"];
	this.gotoAndStop(13);
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


(lib.vacuola = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0003_vacuola();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vacuola, new cjs.Rectangle(0,0,171,109), null);


(lib.ribosoma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0008_Ribosoma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ribosoma, new cjs.Rectangle(0,0,64,58), null);


(lib.reticulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0002_ReticuloEndo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.reticulo, new cjs.Rectangle(0,0,61,97), null);


(lib.peroxisoma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0011_Peroxisoma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.peroxisoma, new cjs.Rectangle(0,0,36,34), null);


(lib.pared = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0009_paredcelular();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pared, new cjs.Rectangle(0,0,61,136), null);


(lib.nucleo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0004_Nucleo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nucleo, new cjs.Rectangle(0,0,138,110), null);


(lib.mitocondria = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0007_Miticondria();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mitocondria, new cjs.Rectangle(0,0,36,37), null);


(lib.lisosoma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0005_Lisosoma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lisosoma, new cjs.Rectangle(0,0,37,35), null);


(lib.golgi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0012_golgi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.golgi, new cjs.Rectangle(0,0,76,75), null);


(lib.cloroplasto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0006_Cloroplasto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloroplasto, new cjs.Rectangle(0,0,38,24), null);


(lib.citoplasma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.celula_0010_citoplasma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.citoplasma, new cjs.Rectangle(0,0,35,72), null);


// stage content:
(lib.Celula = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var mensajeTxt = new createjs.Text();
		var aciertos = 0;
		var texto = "Aciertos: ";
		
		this.instVacuola.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseVacuola,event,"Vacuola, Aciertos:");
		});
		
		this.instReticulo.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseReticulo,event,"Reticulo Endoplasmático, Aciertos:");
		});
		
		this.instRibosoma.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseRibosoma,event,"Ribosoma, Aciertos:");
		});
		
		this.instPeroxisoma.on("pressmove", function(event){
			colocar(event.currentTarget,root.basePeroxisoma,event,"Peroxisoma, Aciertos:");
		});
		
		this.instPared.on("pressmove", function(event){
			colocar(event.currentTarget,root.basePared,event,"Pared Celular, Aciertos:");
		});
		
		this.instNucleo.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseNucleo,event,"Nucleo, Aciertos:");
		});
		
		this.instLisosoma.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseLisosoma,event,"Lisosoma, Aciertos:");
		});
		
		this.instGolgi.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseGolgi,event,"Aparato de Golgi, Aciertos:");
		});
		
		this.instCloroplasto.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseCloroplasto,event,"Cloroplasto, Aciertos:");
		});
		
		this.instCitoplasma.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseCitoplasma,event,"Citoplasma, Aciertos:");
		});
		
		this.instMitocondria.on("pressmove", function(event){
			colocar(event.currentTarget,root.baseMitocondria,event,"Mitocondria, Aciertos:");
		});
		
		function colocar(obj1,obj2,event,parte){
			if(colision(obj1,obj2)){
				obj1.x = obj2.x;
				obj1.y = obj2.y;
				aciertos++;
				mostrarTexto(40,480,texto,"#005500","20px Arial");
			}
			else{
				if( !((obj1.x == obj2.x)&&(obj1.y == obj2.y))){
					obj1.x = event.stageX;
					obj1.y = event.stageY;
					mostrarTexto(40,480,parte,"#005500","20px Arial");
				}
			}
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
			if(colisionSupIzq||colisionInfIzq||colisionSupDer||colisionSupDer){
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
			if(aciertos<11){
				mensajeTxt.text  = texto + aciertos;
			}
			else
			{
				mensajeTxt.text  = texto + aciertos + " GANASTE";
			}
			root.addChild(mensajeTxt);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// partes
	this.instGolgi = new lib.golgi();
	this.instGolgi.parent = this;
	this.instGolgi.setTransform(244,339.5,1,1,0,0,0,38,37.5);

	this.instCitoplasma = new lib.citoplasma();
	this.instCitoplasma.parent = this;
	this.instCitoplasma.setTransform(218.5,421,1,1,0,0,0,17.5,36);

	this.instPared = new lib.pared();
	this.instPared.parent = this;
	this.instPared.setTransform(65.5,399,1,1,0,0,0,30.5,68);

	this.instRibosoma = new lib.ribosoma();
	this.instRibosoma.parent = this;
	this.instRibosoma.setTransform(260,256,1,1,0,0,0,32,29);

	this.instPeroxisoma = new lib.peroxisoma();
	this.instPeroxisoma.parent = this;
	this.instPeroxisoma.setTransform(144,388,1,1,0,0,0,18,17);

	this.instMitocondria = new lib.mitocondria();
	this.instMitocondria.parent = this;
	this.instMitocondria.setTransform(188,289.5,1,1,0,0,0,18,18.5);

	this.instCloroplasto = new lib.cloroplasto();
	this.instCloroplasto.parent = this;
	this.instCloroplasto.setTransform(205,261,1,1,0,0,0,19,12);

	this.instLisosoma = new lib.lisosoma();
	this.instLisosoma.parent = this;
	this.instLisosoma.setTransform(199.5,216.5,1,1,0,0,0,18.5,17.5);

	this.instNucleo = new lib.nucleo();
	this.instNucleo.parent = this;
	this.instNucleo.setTransform(91,255,1,1,0,0,0,69,55);

	this.instReticulo = new lib.reticulo();
	this.instReticulo.parent = this;
	this.instReticulo.setTransform(57.5,132.5,1,1,0,0,0,30.5,48.5);

	this.instVacuola = new lib.vacuola();
	this.instVacuola.parent = this;
	this.instVacuola.setTransform(190.5,145.5,1,1,0,0,0,85.5,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instVacuola},{t:this.instReticulo},{t:this.instNucleo},{t:this.instLisosoma},{t:this.instCloroplasto},{t:this.instMitocondria},{t:this.instPeroxisoma},{t:this.instRibosoma},{t:this.instPared},{t:this.instCitoplasma},{t:this.instGolgi}]}).wait(1));

	// bases
	this.baseMitocondria = new lib.mitocondria();
	this.baseMitocondria.parent = this;
	this.baseMitocondria.setTransform(409.9,369.4,1,1,0,0,0,18,18.5);
	this.baseMitocondria.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseMitocondria.cache(-2,-2,40,41);

	this.baseCitoplasma = new lib.citoplasma();
	this.baseCitoplasma.parent = this;
	this.baseCitoplasma.setTransform(635.2,316.3,1,1,0,0,0,17.5,36);
	this.baseCitoplasma.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseCitoplasma.cache(-2,-2,39,76);

	this.baseCloroplasto = new lib.cloroplasto();
	this.baseCloroplasto.parent = this;
	this.baseCloroplasto.setTransform(471.2,239.1,1,1,0,0,0,19,12);
	this.baseCloroplasto.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseCloroplasto.cache(-2,-2,42,28);

	this.baseGolgi = new lib.golgi();
	this.baseGolgi.parent = this;
	this.baseGolgi.setTransform(405.6,187.4,1,1,0,0,0,38,37.5);
	this.baseGolgi.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseGolgi.cache(-2,-2,80,79);

	this.baseLisosoma = new lib.lisosoma();
	this.baseLisosoma.parent = this;
	this.baseLisosoma.setTransform(485,173.5,1,1,0,0,0,18.5,17.5);
	this.baseLisosoma.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseLisosoma.cache(-2,-2,41,39);

	this.baseNucleo = new lib.nucleo();
	this.baseNucleo.parent = this;
	this.baseNucleo.setTransform(530,322,1,1,0,0,0,69,55);
	this.baseNucleo.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseNucleo.cache(-2,-2,142,114);

	this.basePared = new lib.pared();
	this.basePared.parent = this;
	this.basePared.setTransform(354.5,380,1,1,0,0,0,30.5,68);
	this.basePared.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.basePared.cache(-2,-2,65,140);

	this.basePeroxisoma = new lib.peroxisoma();
	this.basePeroxisoma.parent = this;
	this.basePeroxisoma.setTransform(674,323,1,1,0,0,0,18,17);
	this.basePeroxisoma.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.basePeroxisoma.cache(-2,-2,40,38);

	this.baseReticulo = new lib.reticulo();
	this.baseReticulo.parent = this;
	this.baseReticulo.setTransform(454,307.5,1,1,0,0,0,30.5,48.5);
	this.baseReticulo.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseReticulo.cache(-2,-2,65,101);

	this.baseRibosoma = new lib.ribosoma();
	this.baseRibosoma.parent = this;
	this.baseRibosoma.setTransform(505,187,1,1,0,0,0,32,29);
	this.baseRibosoma.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseRibosoma.cache(-2,-2,68,62);

	this.baseVacuola = new lib.vacuola();
	this.baseVacuola.parent = this;
	this.baseVacuola.setTransform(621.5,224,1,1,0,0,0,85.5,54.5);
	this.baseVacuola.filters = [new cjs.ColorFilter(0.19, 0.19, 0.19, 1, 206.55, 206.55, 206.55, 0)];
	this.baseVacuola.cache(-2,-2,175,113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.baseVacuola},{t:this.baseRibosoma},{t:this.baseReticulo},{t:this.basePeroxisoma},{t:this.basePared},{t:this.baseNucleo},{t:this.baseLisosoma},{t:this.baseGolgi},{t:this.baseCloroplasto},{t:this.baseCitoplasma},{t:this.baseMitocondria}]}).wait(1));

	// Capa 2
	this.instance = new lib.celula_0001_Capa3();
	this.instance.parent = this;
	this.instance.setTransform(324,156);

	this.instance_1 = new lib.celula_0012_Capa1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(312,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa 1
	this.text = new cjs.Text("La Celula Vegetal", "50px 'Times New Roman'", "#003300");
	this.text.lineHeight = 57;
	this.text.lineWidth = 395;
	this.text.parent = this;
	this.text.setTransform(37,11.3);

	this.instance_2 = new lib.celula_Fondo();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text}]}).wait(1));

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
		{src:"images/Celula_atlas_.png?1530183214345", id:"Celula_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;