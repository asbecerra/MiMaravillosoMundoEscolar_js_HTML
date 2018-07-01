(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"paresDC_atlas_", frames: [[802,204,80,100],[0,0,800,540],[884,0,80,100],[802,0,80,100],[802,102,80,100],[884,102,80,100],[884,204,80,100]]}
];


// symbols:



(lib.carta1 = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img1 = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img2 = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.img3 = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.img4 = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.img5 = function() {
	this.spriteSheet = ss["paresDC_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.carta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.carta1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cubierta:0,abrir:1,abierta:19,cubrir:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Capa 3
	this.instance = new lib.carta();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// Capa 1
	this.instance_1 = new lib.img3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"cubierta":0,"abrir":1,"abierta":19,"cubrir":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Capa 3
	this.instance = new lib.carta();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// Capa 1
	this.instance_1 = new lib.img2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"cubierta":0,"abrir":1,"abierta":19,"cubrir":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Capa 3
	this.instance = new lib.carta();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// Capa 1
	this.instance_1 = new lib.img4();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"cubierta":0,"abrir":1,"abierta":19,"cubrir":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Capa 3
	this.instance = new lib.carta();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.16},16).to({alpha:0},3).to({alpha:1},20).wait(1));

	// Capa 1
	this.instance_1 = new lib.img5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"cubierta":0,"abrir":1,"abierta":19,"cubrir":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Capa 3
	this.instance = new lib.carta();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

	// Capa 1
	this.instance_1 = new lib.img1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,100);


// stage content:
(lib.paresDC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();//Variables globales
		var root = this;
		var primera = true;
		var longCartas = 10;
		var posx = 80;
		var posy = 20;
		var aciertos = 0;
		var aciertosTxt = new createjs.Text();
		var mensaje = "Número de aciertos: ";
		var primeraCarta;
		var segundaCarta;
		var tarjetas = new Array();
		
		function tarjeta(img,info){
			this.img=img;
			this.info=info;
		}
		
		tarjetas.push(new tarjeta(new lib.t1,1));
		tarjetas.push(new tarjeta(new lib.t1,1));
		tarjetas.push(new tarjeta(new lib.t2,2));
		tarjetas.push(new tarjeta(new lib.t2,2));
		tarjetas.push(new tarjeta(new lib.t3,3));
		tarjetas.push(new tarjeta(new lib.t3,3));
		tarjetas.push(new tarjeta(new lib.t4,4));
		tarjetas.push(new tarjeta(new lib.t4,4));
		tarjetas.push(new tarjeta(new lib.t5,5));
		tarjetas.push(new tarjeta(new lib.t5,5));
		
		barajar(tarjetas);
		repartirTarjetas();
		
		tarjetas[0].img.addEventListener("click", function(){alSeleccionar(0)});
		tarjetas[1].img.addEventListener("click", function(){alSeleccionar(1)});
		tarjetas[2].img.addEventListener("click", function(){alSeleccionar(2)});
		tarjetas[3].img.addEventListener("click", function(){alSeleccionar(3)});
		tarjetas[4].img.addEventListener("click", function(){alSeleccionar(4)});
		tarjetas[5].img.addEventListener("click", function(){alSeleccionar(5)});
		tarjetas[6].img.addEventListener("click", function(){alSeleccionar(6)});
		tarjetas[7].img.addEventListener("click", function(){alSeleccionar(7)});
		tarjetas[8].img.addEventListener("click", function(){alSeleccionar(8)});
		tarjetas[9].img.addEventListener("click", function(){alSeleccionar(9)});
		
		
		
		//funciones
		function alSeleccionar(index)
		{
			if(primera){
				primera=false;
				primeraCarta=index;
				tarjetas[index].img.gotoAndPlay("abrir");
				//fadeOut(cartas[index]);
			}
			else{
				if(index!==primeraCarta){
					primera=true;
					segundaCarta=index;
					tarjetas[index].img.gotoAndPlay("abrir");
					if(tarjetas[primeraCarta].info===(tarjetas[segundaCarta].info)){
						aciertos++;
						mostrarTexto(80,480,mensaje,"#ffff00","20px Arial");
						tarjetas[primeraCarta].img.addEventListener("click", alSeleccionar);
						tarjetas[segundaCarta].img.addEventListener("click", alSeleccionar);		
						tarjetas[primeraCarta].img.alpha = 0;
						tarjetas[segundaCarta].img.alpha = 0;
					}
					tarjetas[primeraCarta].img.gotoAndPlay("cubrir");
					tarjetas[segundaCarta].img.gotoAndPlay("cubrir");
				}
			}
		}
		
		function mostrarTexto(cordx,cordy,texto,color,fuente){
			
			aciertosTxt.x = cordx;
			aciertosTxt.y = cordy;
			aciertosTxt.color = color;
			aciertosTxt.font  = fuente;
			if(aciertos<5){
				aciertosTxt.text  = texto + aciertos;
			}
			else
			{
				aciertosTxt.text  = texto + aciertos + " GANASTE";
			}
			root.addChild(aciertosTxt);
		}
		
		//barajar
		function barajar(baraja){
			var i;
			var k;
			var temporal;
			var lon = baraja.length;
			var j;
			for(j=0; j<3*lon; j++){
				i = Math.floor(Math.random()*lon);
				k = Math.floor(Math.random()*lon);
				temporal = baraja[i];
				baraja[i] = baraja[k];
				baraja[k] = temporal;
			}
		}
		
		function repartirTarjetas(){
			posx = 80;
			posy = 20;
			for(i=0;i<longCartas/2;i++){
				root.addChild(tarjetas[i].img);
				tarjetas[i].img.x = posx;
				tarjetas[i].img.y = posy;
				posx += 100;
			}	
			posx = 80;
			posy = 130;
			for(i=longCartas/2;i<longCartas;i++){
				root.addChild(tarjetas[i].img);
				tarjetas[i].img.x = posx;
				tarjetas[i].img.y = posy;
				posx += 100;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// instancias
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(-67.9,90,1,1,0,0,0,40,50);

	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-67.9,490,1,1,0,0,0,40,50);

	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-67.9,390,1,1,0,0,0,40,50);

	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67.9,290,1,1,0,0,0,40,50);

	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-67.9,190,1,1,0,0,0,40,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Fondo
	this.instance_5 = new lib.fondo();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(292.1,270,908,540);
// library properties:
lib.properties = {
	width: 800,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/paresDC_atlas_.png?1530182996998", id:"paresDC_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;