(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Interruptor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("BotonPlastico");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// GraficaInterruptor
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],0,21,0,-6.2).s().p("Ag0A6IAAhzIBpAAIAABzg");
	this.shape.setTransform(0.9,-10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1,3,true).p("AA2CKIAAkTIhrAAIAAETg");
	this.shape_1.setTransform(0.9,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],0,-17.4,0,45).s().p("Ag0CKIAAkTIBpAAIAAETg");
	this.shape_2.setTransform(0.9,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#000000"],[0,1],0,-20.9,0,6.3).s().p("Ag0A6IAAhzIBpAAIAABzg");
	this.shape_3.setTransform(0.9,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1,3,true).p("AA2iJIAAETIhrAAIAAkTg");
	this.shape_4.setTransform(0.9,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#000000"],[0,1],0,17.4,0,-45).s().p("Ag0CKIAAkTIBpAAIAAETg");
	this.shape_5.setTransform(0.9,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[]},1).wait(1));

	// Graficos
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.9,-8.1,5.2,5.4).s().p("AgmgkIAKgIIBDBRIgKAIg");
	this.shape_6.setTransform(1.2,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#000000"],[0,1],0.9,0.2,0,0.9,0.2,7.3).s().p("AgEA2QgWgCgOgRQgPgRACgWQACgVARgPQASgOAVABQAWADAOARQAOASgCAUQgCAXgRAOQgPAMgSAAIgFAAg");
	this.shape_7.setTransform(1.1,35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#000000"],[0,1],-6.4,7.8,3.9,-6.3).s().p("AgjAoIA+hWIAJAHIg+BWg");
	this.shape_8.setTransform(1,-38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#000000"],[0,1],-0.1,-0.9,0,-0.1,-0.9,7.3).s().p("AgeAsQgSgOgEgVQgDgWANgSQANgSAVgDQAWgEASAOQASANADAWQAEAVgNASQgNASgXADIgIABQgQAAgOgKg");
	this.shape_9.setTransform(1.1,-37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFCC99","#FEFEC8"],[0,1],39.7,-43.1,-39.6,43.2).s().p("AlTJHIAAyNIKnAAIAASNg");
	this.shape_10.setTransform(0,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFCC99","#FEFEC8"],[0,1],-46.6,46.7,46.7,-46.6).s().p("AmPJ2IAAzrIMfAAIAATrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-63,80,126);


(lib.Bombilla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{apagado:0,encendido:9,caliente:19});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1).call(this.frame_9).wait(9).call(this.frame_18).wait(1).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// Base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFCC99","#FFFFCC","#996666","#FFCC99","#FFCC99","#FFFFFF"],[0,0.729,0.808,0.871,0.922,0.965,1],0,-34.3,0,23.4).s().p("AnuDqQgYgBgQgRQgSgQAAgZIAAglIozguQgaAAgSgSQgSgSAAgaIAAkHMAkzAAAIAAEHQAAAagSASQgSASgaAAIozAuIAAAlQAAAZgRAQQgRARgYABg");
	this.shape.setTransform(0.2,-174.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Bombilla
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.702)","rgba(204,204,204,0.2)"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAWgQjgAAjOhXQjHhUiZiaQiZiZhUjHQhXjNAAjiQAAjoBcjSQBZjMCiiaIAwgqIgDAAIAKgHIBbhOQCHiPAMjEIABgjIABAAIAAnWIOpAAIAAHWIAAAAIABAjQANDDCGCQIBlBVIgBAAIAuAqQCjCaBZDMQBcDSAADoQAADihWDNQhVDHiZCZQiZCajHBUQjNBXjhAAIgBAAg");
	this.shape_1.setTransform(0,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.502)").ss(10,1,1).p("AnU2fIAAHWIgBAAIgBAjQgMDEiHCPIhbBOIgKAHIADAAIgwAqQiiCahZDMQhcDSAADoQAADiBXDNQBUDHCZCZQCZCaDHBUQDOBXDgAAQDiAADOhXQDGhUCZiaQCZiZBVjHQBWjNAAjiQAAjohcjSQhZjMiiiaIgvgqIABAAIhlhVQiGiQgNjDIgBgjIAAAAIAAnW");
	this.shape_2.setTransform(0,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#F3F3F3"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAWgQjgAAjOhXQjHhUiZiaQiZiZhUjHQhXjNAAjiQAAjoBcjSQBZjMCiiaIAwgqIgDAAIAKgHIBbhOQCHiPAMjEIABgjIABAAIAAnWIOpAAIAAHWIAAAAIABAjQANDDCGCQIBlBVIgBAAIAuAqQCjCaBZDMQBcDSAADoQAADihWDNQhVDHiZCZQiZCajHBUQjNBXjhAAIgBAAg");
	this.shape_3.setTransform(0,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.329)","rgba(255,255,204,0.329)"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAZGQkCAAjshkIgBAAQjlhhiwixIABABQixiwhgjlIAAAAQhljtAAkDQAAkKBqjyIABgBQBmjqC6iyIAFgEIAbgYQAPgSAVgOIABAAIBNhCQBXhhAJiBIABghIABgMIAAnFQAAhFAwgwQAxgxBFAAIOpAAQBEAAAxAxQAxAwAABFIAAHFIAAAMIABAgQAJCBBXBiIBdBOIAPANIAjAgIADADQC6CyBnDqIAAAAQBqDzABEKQgBEDhjDtIAAAAQhiDlivCwQixCwjkBhIABAAQjtBkkDAAIgBAAgAHjXDIAAAAQDeheCsisQCrirBfjfIAAAAQBhjmAAj9QAAkDhnjsIAAgBQhkjki2itIgDgCIgkghIgMgMIhfhPQhghqgKiOIgBgiIgBgLIAAnHQAAg3gmgnQgngng3AAIupAAQg3AAgnAnQgnAnAAA3IAAHHIgBALIgBAkQgKCNhgBpIhPBEIgEACQgRALgNAQIgdAaIgEADQi1CthkDkIAAABQhnDsAAEDQAAD9BiDmIAAAAQBdDfCsCrIAAAAQCsCsDfBeIgBAAQDnBiD7AAQD9AADmhig");
	this.shape_4.setTransform(0,-9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,255,255,0.663)","rgba(255,255,204,0.663)"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAYEQj0AAjhhgIAAABQjZhciminIAAgBQioimhbjZIAAAAQhfjgAAj2QAAj8BkjmIABAAQBhjeCwipIADgCIAggcQAKgNAOgJIAEgDIBThIQBqhyAKiaIABgkIABgKIAAnJQAAgpAegdQAdgeApAAIOpAAQApAAAdAeQAdAdAAApIAAHJIABAKIABAkQALCZBoBzIBhBRIALALIAlAhIACACQCxCpBhDeIAAAAQBlDmAAD8QAAD2hfDgIAAAAQhcDZimCnQioCnjYBbIABAAQjhBgj1AAIgBAAgAHJWGQDThZCiijQCiiiBajTIAAAAQBcjaAAjvQAAj1hijgIAAAAQhfjYisikIgBgBIgngjIgIgIIhjhTQhzh9gLipIABADIgBgkIgBgIIAAnMQAAgbgTgUQgUgTgbAAIupAAQgcAAgTATQgTAUAAAbIAAHMIgBAIIgBAkIAAgDQgLCqh0B9IhWBJIgGAEQgKAHgHAKIgjAfIgCACQisCjheDYIAAAAQhiDgAAD1QAADvBdDaIAAAAQBYDTCjCiIAAAAQCiCjDUBZIgBAAQDaBdDugBQDvABDahdg");
	this.shape_5.setTransform(0,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,255,255,0.831)","rgba(255,255,204,0.831)"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAXiQjuABjahdIABAAQjUhZiiijIAAAAQijiihYjTIAAAAQhdjaAAjvQAAj1BijgIAAAAQBejYCsijIACgCIAjgfQAHgKAKgHIAGgEIBWhJQB0h9ALiqIAAADIABgkIABgIIAAnMQAAgbATgUQATgTAcAAIOpAAQAbAAAUATQATAUAAAbIAAHMIABAIIABAkIgBgDQALCpBzB9IBjBTIAIAIIAnAjIABABQCsCkBfDYIAAAAQBiDgAAD1QAADvhcDaIAAAAQhaDTiiCiQiiCjjTBZQjZBcjvAAIgBAAgAAAXBQDoAADVhaQDMhWCeieQCdieBXjNIAAAAQBZjUAAjoQAAjvhejYQhdjSimifIgBgBIgpglIgFgGIhlhUQh8iGgMi2IgBgiIAAgHIAAnOQAAgOgKgJQgKgKgNAAIupAAQgOAAgJAKQgKAJAAAOIAAHOIgBAHIgBAiQgLC2h9CGIAAAAIhaBNIgHAFQgHAFgEAGIgmAiIgBABQinCfhcDSQhfDYABDvQgBDoBbDUIgBAAQBXDNCeCeQCdCeDNBWIAAAAQDUBaDnAAg");
	this.shape_6.setTransform(0,-9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0.161)","rgba(255,255,204,0.161)"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAZnQkJAAjzhnIABABQjrhji0i1IgBgBQi1i0hjjsIABABQhojzAAkKQAAkRBtj5IAAAAQBpjwC/i3IAGgFIAZgWQASgUAXgQIBJg/QBNhWAKhyIABgkIAAgNIAAnDQABhSA6g7QA6g6BTAAIOpAAQBSAAA6A6QA7A7AABSIAAHDIABANIABAkQAJByBNBWIBaBMIAQAPIAjAfIAEAEQC/C2BqDxIAAAAQBtD5AAERQAAEKhnDzIAAAAQhkDri0C0IAAAAQi1C1jqBjIAAAAQjyBnkKAAIgBAAgAHxXiIgBAAQDkhhCxiwQCviwBijlIAAAAQBjjtABkDQgBkKhqjzIAAAAQhnjqi6iyIgDgDIgjggIgPgNIhdhOQhXhigJiBIgBggIAAgMIAAnFQAAhFgxgwQgxgxhEAAIupAAQhFAAgxAxQgwAwAABFIAAHFIgBAMIgBAhQgJCBhXBhIhNBCIgBAAQgVAOgPASIgbAYIgFAEQi6CyhmDqIgBABQhqDyAAEKQAAEDBlDtIAAAAQBgDlCxCwIgBgBQCwCxDlBhIABAAQDsBkECAAQEEAADthkg");
	this.shape_7.setTransform(0,-9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,204,0.498)"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("AAAYlQj7AAjnhiIABAAQjfheisisIAAAAQisirhdjfIAAAAQhijmAAj9QAAkDBnjsIAAgBQBkjkC1itIAEgDIAdgaQANgQARgLIAEgCIBPhEQBghpAKiNIABgkIABgLIAAnHQAAg3AngnQAngnA3AAIOpAAQA3AAAnAnQAmAnAAA3IAAHHIABALIABAiQAKCOBgBqIBfBPIAMAMIAkAhIADACQC2CtBkDkIAAABQBnDsAAEDQAAD9hhDmIAAAAQhfDfirCrQisCsjeBeIAAAAQjmBij8AAIgBAAgAHXWkIgBAAQDYhbCoinQCminBcjZIAAAAQBfjgAAj2QAAj8hljmIAAAAQhhjeixipIgCgCIglghIgLgLIhhhRQhohzgLiZIgBgkIgBgKIAAnJQAAgpgdgdQgdgegpAAIupAAQgpAAgdAeQgeAdAAApIAAHJIgBAKIgBAkQgKCahqByIhTBIIgEADQgOAJgKANIggAcIgDACQiwCphhDeIgBAAQhkDmAAD8QAAD2BfDgIAAAAQBbDZCoCmIAAABQCmCnDZBcIAAgBQDhBgD0AAQD2AADhhgg");
	this.shape_8.setTransform(0,-9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#FFFFCC"],[0,0.796],37.3,64.5,0,37.3,64.5,218.6).s().p("Am7VnIAAAAQjNhWidieQieiehXjNIABAAQhbjUABjoQgBjvBfjYQBcjSCnifIABgBIAmgiQAEgGAHgFIAHgFIBahNIAAAAQB9iGALi2IABgiIABgHIAAnOQAAgOAKgJQAJgKAOAAIOpAAQANAAAKAKQAKAJAAAOIAAHOIAAAHIABAiQAMC2B8CGIBlBUIAFAGIApAlIABABQCmCfBdDSQBeDYAADvQAADohZDUIAAAAQhXDNidCeQieCejMBWQjVBajoAAIAAAAQjnAAjUhag");
	this.shape_9.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},9).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-198,235.6,333);


// stage content:
(lib.Factura = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var mensajeTxt = new createjs.Text();
		var mensaje;
		//this.stop ();
		
		function calcular()
		{
			var diferencia;
			var cantidadPagada=Number(this.pagada.value);
			var cantidadDebida=600;
			if(cantidadPagada<cantidadDebida)
			{
				diferencia = cantidadDebida-cantidadPagada;
				root.luz.gotoAndPlay("apagado");
				mensaje="Usted pagó $" + String(diferencia) + " menos en su factura eléctrica";
			}
			
			else
			{
				if(cantidadPagada>cantidadDebida)
				{
					diferencia = cantidadPagada-cantidadDebida;
					root.luz.gotoAndPlay("caliente");
					mensaje="Usted pagó $" + String(diferencia) + " de más en su factura eléctrica";
				}
				else
				{		
					root.luz.gotoAndPlay("encendido");
					mensaje="Usted pagó $" + String(cantidadPagada) + ". Valor Correcto";
				}
			}
			mostrarTexto(40,480,mensaje,"#ffff00","16px Arial");
		}
		
		function mostrarTexto(cordx,cordy,texto,color,fuente){
			mensajeTxt.x = cordx;
			mensajeTxt.y = cordy;
			mensajeTxt.color = color;
			mensajeTxt.font  = fuente;
			mensajeTxt.text  = texto;
			root.addChild(mensajeTxt);
		}
		
		this.interruptor.addEventListener('click',calcular);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 2
	this.luz = new lib.Bombilla();
	this.luz.parent = this;
	this.luz.setTransform(558,198);

	this.interruptor = new lib.Interruptor();
	this.interruptor.parent = this;
	this.interruptor.setTransform(151.9,321.3);
	new cjs.ButtonHelper(this.interruptor, 0, 1, 2, false, new lib.Interruptor(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape.setTransform(210.3,237.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAdQgHgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAHgEQAIgFAIAAQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOgBQgHAAgJgDgAgKgOQgEAGgBAIQABAJAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_1.setTransform(203.8,237.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_2.setTransform(198.1,236.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAsIAAhVIAQAAIAAAJQADgFAFgCQAFgEAGAAQAKAAAIAJQAHAIABAQQAAAOgJAJQgHAJgKgBQgFAAgEgCQgEgBgFgGIAAAggAgJgZQgEAFAAAJQAAALAEADQAFAGAEgBQAGAAAEgEQADgEAAgKQABgKgEgFQgFgFgFABQgFgBgEAFg");
	this.shape_3.setTransform(192.6,238.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_4.setTransform(185.1,237.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_5.setTransform(179.6,237.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCAEAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgCACQgCACgBAFQgCAFAAAPIAAATg");
	this.shape_6.setTransform(174.9,237.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_7.setTransform(168.8,237.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_8.setTransform(163.5,236.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_9.setTransform(157.8,237.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_10.setTransform(152.4,236.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_11.setTransform(145.7,236.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_12.setTransform(140.7,237.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAbQgGgFAAgIQAAgGACgEQADgDAEgBQAFgDAJgCQAKgCAEgBIAAgCQAAgFgCgCQgCgCgGAAQgEAAgDACQgCACgBAEIgQgDQADgJAGgEQAGgFAMAAQAKABAGACQAFACADAEQABAFAAALIAAASIABALIADAJIgQAAIgBgFIgCgCQgDAEgGACQgDACgGAAQgJABgFgGgAAAADQgGACgDACQgDACAAADQAAAEADADQADACAEAAQADAAAEgDQADgDABgDIAAgIIAAgDIgJACg");
	this.shape_13.setTransform(130.8,237.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAfIgZg9IASAAIALAfIADAKIABgFIACgFIANgfIAQAAIgYA9g");
	this.shape_14.setTransform(124.1,237.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_15.setTransform(117.4,237.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_16.setTransform(110.4,237.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaArIAAhCIgSBCIgQAAIgRhCIAABCIgQAAIAAhVIAaAAIAPA5IAQg5IAaAAIAABVg");
	this.shape_17.setTransform(101.8,236.3);

	this.pagada = new lib.an_TextInput({'id': 'pagada', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.pagada.setTransform(107.4,130.2,1,1,0,0,0,50,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAghQAAgfALgPQAKgMAPAAQARABAJALQALAOAAAgQAAAhgLAOQgJAMgRgBQgQABgKgNgAgGglQgDADgCAGQgCAJAAATQAAAUACAIQACAIADACQADADADgBQAEABADgDQADgDACgGQACgJAAgUQAAgTgCgHQgCgIgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_18.setTransform(74.4,78.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAuQgKgNAAghQAAgfALgPQAKgMAPAAQARABAJALQALAOAAAgQAAAhgLAOQgJAMgRgBQgQABgKgNgAgGglQgDADgCAGQgCAJAAATQAAAUACAIQACAIADACQADADADgBQAEABADgDQADgDACgGQACgJAAgUQAAgTgCgHQgCgIgDgDQgDgDgEAAQgDAAgDADg");
	this.shape_19.setTransform(65.5,78.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAtQgLgOAAgeQAAgeALgOQAMgOARgBQANABAJAHQAJAHACAOIgVADQgBgHgDgEQgEgDgFAAQgGABgFAGQgEAGgCAUQAIgKAMAAQANAAAKALQAKAJAAARQAAARgKALQgLAKgQAAQgQAAgLgNgAgIADQgFAFAAAKQAAALAFAFQAFAHAFgBQAGAAAEgEQAFgGAAgKQAAgMgFgFQgEgDgHgBQgFABgEADg");
	this.shape_20.setTransform(56.8,78.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFBGIAAgOQgNgCgIgJQgJgIgCgPIAUgDQABAHAEAEQADAFAEACIAAghQgPgEgHgIQgHgJAAgNQAAgNAIgIQAIgJANgBIAAgIIALAAIAAAIQAMABAIAHQAHAHACAMIgUADQgCgKgHgDIAAAfQATAFAGAIQAHAHAAAMQAAAPgIAJQgJAKgPACIAAAPgAAGAmQAGgBADgEQAEgFAAgGQAAgFgDgEQgDgEgHgCgAgMgnQgDAEAAAEQAAAFADADQACAEAFACIAAgbQgEABgDAEg");
	this.shape_21.setTransform(47.7,79.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAqIAAgXIAVAAIAAAXgAgKgSIAAgXIAVAAIAAAXg");
	this.shape_22.setTransform(232.7,53.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHAAQAIAAAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgLAJgHQAIgIASAAQAQABAIAFQAJAGADALIgVADQgBgEgEgDQgEgCgGgBQgIABgEACQgDACAAADQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQADADAQAEQASADAHAGQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_23.setTransform(225.4,53.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_24.setTransform(216.6,53.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_25.setTransform(203.2,53.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHA3QgHgEgFgHIAAAMIgUAAIAAhxIAVAAIAAApQALgMANAAQAOAAALALQAJALABAUQgBAVgJAMQgKALgPAAQgGAAgHgDgAgMgFQgGAFAAANQAAANAFAGQAFAJAIAAQAIAAAFgGQAFgHAAgNQAAgOgFgFQgFgHgIAAQgHAAgFAGg");
	this.shape_26.setTransform(194.2,52.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_27.setTransform(184.6,53.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgFgHgHAAQgHAAgGAGg");
	this.shape_28.setTransform(175.2,52.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgMAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_29.setTransform(161.5,53.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAnQAAAQABAEQACAEADADQADABAFAAQAFABAEgDQAFgEABgEQACgEAAgSIAAgjIAWAAIAABTIgVAAIAAgNQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_30.setTransform(152.2,53.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASA6IAAgpQgEAFgGADQgHAEgGAAQgOAAgJgLQgLgMAAgVQAAgUAKgLQAKgLAPAAQAHAAAGADQAGAEAFAHIAAgMIAUAAIAABxgAgLgiQgGAHAAAOQAAANAFAFQAGAGAGAAQAIAAAFgHQAGgFAAgOQAAgMgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_31.setTransform(142.3,55.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAvQgLgMAAgVQABgUAJgLQAKgLAPAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
	this.shape_32.setTransform(128.1,52.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgeAkQgIgHAAgKQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgCgCgIgBQgGABgDACQgEACgCAGIgUgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADAEAGQADAGAAAOIgBAYIABAQQABAFADAHIgWAAIgBgHIgBgCQgGAFgHADQgFADgHAAQgNAAgHgIgAAAAFQgJACgCACQgFADAAAFQAAAEAEAEQADADAGAAQAFAAAFgEQADgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_33.setTransform(119,53.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQAMAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgGAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgFgHgHAAQgHAAgGAGg");
	this.shape_34.setTransform(109.5,52.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_35.setTransform(102.6,52);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIADABIAKgCIABARQgIADgJAAQgGAAgEgCg");
	this.shape_36.setTransform(97.7,52.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAQArIAAgrQAAgNgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADQgFADgBAGQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGAEQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_37.setTransform(90.1,53.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgDgCgIgBQgGABgEACQgDACgBAGIgUgDQADgNAIgFQAIgHAQAAQAOABAHADQAIADACAGQADAGABAOIgBAYIABAQQABAFADAHIgVAAIgDgHIgBgCQgFAFgGADQgGADgHAAQgNAAgIgIgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAGAAAEgEQAEgDACgEQABgDAAgIIAAgFIgNAEg");
	this.shape_38.setTransform(80.8,53.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUQAAgUALgLQALgMARAAQAPABAJAGQAJAHAEANIgWAEQgBgGgDgEQgEgDgHAAQgHAAgFAGQgFAFAAAOQAAAOAFAFQAFAHAIAAQAGgBAEgDQAEgDACgKIAVAFQgDAOgKAIQgJAHgQABQgRAAgLgMg");
	this.shape_39.setTransform(72,53.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgEgCgHgBQgGABgEACQgCACgCAGIgVgDQAEgNAIgFQAIgHAQAAQAOABAIADQAGADADAGQADAGAAAOIAAAYIABAQQABAFADAHIgWAAIgCgHIgBgCQgFAFgGADQgGADgHAAQgNAAgIgIgAAAAFQgIACgEACQgEADAAAFQAAAEADAEQAEADAFAAQAFAAAFgEQAFgDABgEQABgDAAgIIAAgFIgNAEg");
	this.shape_40.setTransform(58.5,53.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgnA5IAAhxIAXAAIAABdIA4AAIAAAUg");
	this.shape_41.setTransform(49.6,52.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFBGIAAgOQgNgCgIgJQgJgIgCgPIAUgDQABAHAEAEQADAFAEACIAAghQgPgEgHgIQgHgJAAgNQAAgNAIgIQAIgJANgBIAAgIIALAAIAAAIQAMABAIAHQAHAHACAMIgUADQgCgKgHgDIAAAfQATAFAGAIQAHAHAAAMQAAAPgIAJQgJAKgPACIAAAPgAAGAmQAGgBADgEQAEgFAAgGQAAgFgDgEQgDgEgHgCgAgMgnQgDAEAAAEQAAAFADADQACAEAFACIAAgbQgEABgDAEg");
	this.shape_42.setTransform(47.7,130.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKAqIAAgXIAVAAIAAAXgAgKgTIAAgVIAVAAIAAAVg");
	this.shape_43.setTransform(288.7,107.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgZAkQgKgGgDgMIAWgDQABAGAFADQAEAEAHgBQAIAAAFgDQACgCAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgBQgagHgHgEQgKgGAAgMQAAgLAJgHQAIgIASAAQAQAAAIAGQAJAGADALIgVADQgBgFgEgCQgEgCgGgBQgIABgEACQgDACAAACQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQADADAQADQASAEAHAGQAHAFAAALQAAALgKAIQgKAIgSAAQgQABgKgIg");
	this.shape_44.setTransform(281.4,107.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgFgGgBQgGABgFAFg");
	this.shape_45.setTransform(272.6,107.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgaArIAAhSIAUAAIAAAMQAFgJAEgCQAEgDAFgBQAIAAAHAFIgHATQgGgEgEABQgFAAgDACQgDADgBAGQgCAHAAAUIAAAag");
	this.shape_46.setTransform(261.3,107.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgfAkQgHgGAAgLQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgDgDgIAAQgGAAgEADQgDACgBAGIgUgEQADgMAIgGQAIgFAQgBQAOAAAHAEQAIAEACAFQADAGABANIgBAZIABARQABAEADAHIgVAAIgDgHIgBgCQgFAFgGADQgGACgHAAQgNABgIgIgAAAAFQgIACgEACQgEADAAAEQAAAFADADQAEAEAFAAQAGAAAEgEQAEgDACgFQABgCAAgIIAAgFIgNAEg");
	this.shape_47.setTransform(253.1,107.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgcA0QgIgHgBgLIAAgDIAaADQAAAFACABQAEADAFAAQAJAAAEgDQADgCABgDIABgLIAAgMQgJAOgPAAQgQAAgKgOQgIgMABgPQAAgVAKgLQAJgLAQAAQAOAAAKANIAAgLIAVAAIAABJQAAAPgDAHQgCAHgEAFQgFAEgIACQgGACgMAAQgUAAgJgHgAgMgjQgFAGAAANQAAANAFAFQAGAGAGAAQAIAAAGgGQAFgGAAgMQAAgNgFgGQgGgGgIAAQgGAAgGAGg");
	this.shape_48.setTransform(243.6,108.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgeAkQgIgGAAgLQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgEgDgHAAQgGAAgEADQgCACgCAGIgVgEQAEgMAIgGQAIgFAQgBQAOAAAIAEQAGAEADAFQADAGAAANIAAAZIABARQABAEADAHIgWAAIgCgHIgBgCQgFAFgGADQgGACgHAAQgNABgHgIgAAAAFQgIACgEACQgEADAAAEQAAAFADADQAEAEAGAAQAEAAAFgEQAFgDABgFQABgCAAgIIAAgFIgNAEg");
	this.shape_49.setTransform(234.5,107.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgoA6IAAhxIAVAAIAAAMQAEgGAHgEQAGgEAIAAQAOAAAKALQALAMgBAUQABAUgLALQgKAMgOAAQgHAAgFgDQgGgDgFgGIAAApgAgNghQgFAGAAAMQAAAOAFAGQAGAGAHAAQAIAAAFgGQAFgFAAgOQAAgNgGgGQgEgHgIAAQgHAAgGAHg");
	this.shape_50.setTransform(225.4,108.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfAkQgHgGAAgLQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgDgDgIAAQgGAAgDADQgEACgCAGIgTgEQADgMAIgGQAIgFAQgBQAOAAAHAEQAIAEACAFQAEAGAAANIgBAZIABARQABAEADAHIgVAAIgCgHIgCgCQgFAFgHADQgFACgHAAQgNABgIgIgAAAAFQgIACgEACQgEADAAAEQAAAFADADQAEAEAFAAQAGAAAFgEQAEgDABgFQABgCAAgIIAAgFIgNAEg");
	this.shape_51.setTransform(211.4,107.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgFgGgBQgGABgFAFg");
	this.shape_52.setTransform(202.4,107.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgZAkQgKgGgDgMIAWgDQABAGAFADQAEAEAHgBQAIAAAFgDQACgCAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgBQgagHgHgEQgKgGAAgMQAAgLAJgHQAIgIASAAQAQAAAIAGQAJAGADALIgVADQgBgFgEgCQgEgCgGgBQgIABgEACQgDACAAACQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQADADAQADQASAEAHAGQAHAFAAALQAAALgKAIQgKAIgSAAQgQABgKgIg");
	this.shape_53.setTransform(193.4,107.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgFgGgBQgGABgFAFg");
	this.shape_54.setTransform(184.6,107.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAOAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgFgHgHAAQgHAAgGAGg");
	this.shape_55.setTransform(175.2,105.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgLQALgNAQAAQASAAALANQAKAMAAAZIg2AAQAAAJAFAGQAFAFAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNAAQgVAAgKgOgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgFgGgBQgGABgFAFg");
	this.shape_56.setTransform(161.5,107.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgYAnQgHgEgDgGQgDgHAAgMIAAgzIAWAAIAAAmQAAAQABAEQACAEADACQADACAFAAQAFAAAEgCQAFgDABgFQACgFAAgQIAAgjIAWAAIAABSIgVAAIAAgNQgEAGgIAFQgGADgIAAQgJAAgGgDg");
	this.shape_57.setTransform(152.2,107.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AASA6IAAgpQgEAFgGADQgHAEgGAAQgOAAgJgLQgLgMAAgVQAAgUAKgLQAKgLAPAAQAHAAAGADQAGAEAFAHIAAgMIAUAAIAABxgAgLgiQgGAHAAAOQAAANAFAFQAGAGAGAAQAIAAAFgHQAGgFAAgOQAAgMgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_58.setTransform(142.3,108.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAvQgLgMAAgVQABgUAJgLQAKgLAPAAQANAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgHAAQgOAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAGgGAAgNQAAgOgGgFQgFgHgHAAQgHAAgGAGg");
	this.shape_59.setTransform(128.1,105.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgeAkQgIgGAAgLQAAgHADgFQAEgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgEgDQgCgDgIAAQgGAAgDADQgEACgCAGIgUgEQAEgMAIgGQAIgFAQgBQAOAAAIAEQAGAEAEAFQADAGAAANIgBAZIABARQABAEADAHIgWAAIgBgHIgBgCQgGAFgHADQgFACgHAAQgNABgHgIgAAAAFQgJACgCACQgFADAAAEQAAAFAEADQADAEAGAAQAFAAAFgEQADgDACgFQABgCAAgIIAAgFIgNAEg");
	this.shape_60.setTransform(119,107.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAvQgLgMAAgVQAAgUAKgLQALgLAPAAQAMAAALAMIAAgpIAVAAIAABxIgUAAIAAgMQgFAHgHAEQgGADgGAAQgPAAgKgLgAgMgFQgFAGAAAMQAAANADAGQAGAJAJAAQAHAAAFgHQAFgGABgNQgBgOgFgFQgFgHgHAAQgHAAgGAGg");
	this.shape_61.setTransform(109.5,105.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgKA5IAAhSIAVAAIAABSgAgKgkIAAgUIAVAAIAAAUg");
	this.shape_62.setTransform(102.6,105.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDA3QgFgCgCgDQgCgDgBgGIAAgPIAAgjIgKAAIAAgSIAKAAIAAgQIAUgNIAAAdIAQAAIAAASIgQAAIAAAgIABAMIACADIADABIAKgCIABARQgIADgJAAQgGAAgEgCg");
	this.shape_63.setTransform(97.7,106);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAQArIAAgrQAAgMgCgEQgBgEgDgCQgDgDgFAAQgFAAgEAEQgFADgBAFQgCAFAAANIAAAmIgWAAIAAhSIAUAAIAAAMQALgPAQAAQAHABAGADQAGACADAEQADAEACAFIABAPIAAAzg");
	this.shape_64.setTransform(90.1,107.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgfAkQgHgGAAgLQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgDgDgIAAQgGAAgEADQgDACgBAGIgUgEQADgMAIgGQAIgFAQgBQAOAAAHAEQAIAEACAFQADAGABANIgBAZIABARQABAEADAHIgVAAIgDgHIgBgCQgFAFgGADQgGACgHAAQgNABgIgIgAAAAFQgIACgEACQgEADAAAEQAAAFADADQAEAEAFAAQAGAAAEgEQAEgDACgFQABgCAAgIIAAgFIgNAEg");
	this.shape_65.setTransform(80.8,107.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUQAAgUALgLQALgMARAAQAPAAAJAHQAJAGAEAOIgWAEQgBgHgDgDQgEgDgHAAQgHAAgFAFQgFAGAAANQAAAOAFAGQAFAHAIgBQAGAAAEgDQAEgDACgKIAVAFQgDAOgKAIQgJAHgQAAQgRAAgLgLg");
	this.shape_66.setTransform(72,107.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgfAkQgHgGAAgLQAAgHAEgFQADgGAGgCQAGgDAMgCQAOgDAGgCIAAgDQAAgGgDgDQgEgDgHAAQgGAAgEADQgCACgCAGIgVgEQAEgMAIgGQAIgFAQgBQAOAAAIAEQAGAEADAFQADAGAAANIAAAZIABARQABAEADAHIgWAAIgCgHIgBgCQgFAFgGADQgGACgHAAQgNABgIgIgAAAAFQgIACgEACQgEADAAAEQAAAFADADQAEAEAFAAQAFAAAFgEQAFgDABgFQABgCAAgIIAAgFIgNAEg");
	this.shape_67.setTransform(58.5,107.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgnA5IAAhxIAXAAIAABdIA4AAIAAAUg");
	this.shape_68.setTransform(49.6,105.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.pagada},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.interruptor},{t:this.luz}]}).wait(1));

	// fondo
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#66CCFF","#336699"],[0,1],0,-270,0,270).s().p("Eg+fAqMMAAAhUXMB8/AAAMAAABUXg");
	this.shape_69.setTransform(400,270);

	this.timeline.addTween(cjs.Tween.get(this.shape_69).wait(1));

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
		{src:"sounds/BotonPlastico.mp3?1530183135510", id:"BotonPlastico"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1530183135510", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1530183135510", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1530183135510", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;