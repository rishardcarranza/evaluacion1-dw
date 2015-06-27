$(document).ready(function () { 
	cambiarTema();
	opcionesMenu();
	calcularBilletes();
	cacularFunciones();
	aplicarEstilos();
	validarFormulario();
});

function opcionesMenu() {
    $("#calcatm").css("visibility","visible");
    
	var $objLi = $("ul li");
	$objLi.on("click", function () {
		$("article").css("visibility","hidden");
		switch ($(this).text()){
			case "Cajero": // Cajero
				$("#calcatm").css("visibility","visible");
				break;
			case "Funciones": // Funciones
				$("#man2num").css("visibility","visible");
				break;
			case "Aplica Estilo": // Aplica Estilo
				$("#estiloapli").css("visibility","visible");
				break;
			case "Contactenos": // Contactenos
				$("#contacto").css("visibility","visible");
				break;
		}
	});
}

function cambiarTema() {
	var $txtColor = $("#tema");
	$txtColor.change(function () {
		var color = $(this).val();
		$("header, nav, article").css("background",color);
	});
}

/* Cajero */
function calcularBilletes() {
	var $btnCalcular = $("form[name=atm] input[name=calcular]");

	$btnCalcular.on("click", function () {
		var cantidad = $("form[name=atm] input[name=cantidad]").val();
		var nveinte,ndiez,ncinco,nuno;

		nveinte = cantidad / 20;
		cantidad = cantidad % 20;

		ndiez = cantidad / 10;
		cantidad = cantidad % 10;

		ncinco = cantidad / 5;
		cantidad = cantidad % 5;

		nuno = cantidad / 1;
		cantidad = cantidad % 5;

		$("form[name=atm] input[name=veinte]").val(parseInt(nveinte));
		$("form[name=atm] input[name=diez]").val(parseInt(ndiez));
		$("form[name=atm] input[name=cinco]").val(parseInt(ncinco));
		$("form[name=atm] input[name=uno]").val(parseInt(nuno));
	})	
}

/* Funciones */
function cacularFunciones() {
	var $btnCalcular = $("form[name=funcion_apli] input[name=calcular]");
	var $txtN1 = $("form[name=funcion_apli] input[name=num1]");
	var $txtN2 = $("form[name=funcion_apli] input[name=num2]");

	$btnCalcular.on("click", function () {
		/* Sumar */
		var totalsuma = parseFloat($txtN1.val()) + parseFloat($txtN2.val());
		$("form[name=funcion_apli] input[name=suma]").val(totalsuma);

		/* Mayor */
		if ($txtN1.val() > $txtN2.val()) {
			$("form[name=funcion_apli] input[name=mayor]").val($txtN1.val());
		}else{
			$("form[name=funcion_apli] input[name=mayor]").val($txtN2.val());
		}
		/* Factorial */
		var resultado1 = calcFactorial($txtN1.val());
		var resultado2 = calcFactorial($txtN2.val());
		$("form[name=funcion_apli] input[name=fac_n1]").val(resultado1);
		$("form[name=funcion_apli] input[name=fac_n2]").val(resultado2);
	});
}

function calcFactorial(numero) {
	var resultado = 1; 
	for(var i=1; i<=numero; i++) {
	  resultado *= i;
	}
	return resultado;
} 

/* Aplicar Estilos */
function aplicarEstilos() {
	var $btnAzul = $("form[name=aplica_estilo] input[name=azul]");
	var $btnRojo = $("form[name=aplica_estilo] input[name=rojo]");
	var $btnVerde = $("form[name=aplica_estilo] input[name=verde]");
	var $btnNegro = $("form[name=aplica_estilo] input[name=negro]");
	var $btnAmarillo = $("form[name=aplica_estilo] input[name=amarillo]");
	var $btnPosicion = $("form[name=aplica_estilo] input[name=posicion]");
	
	$btnAzul.on("click", function () {
		$("#cuadro").css("background","blue");
	});
	$btnRojo.on("click", function () {
		$("#cuadro").css("background","red");
	});
	$btnVerde.on("click", function () {
		$("#cuadro").css("background","green");
	});
	$btnNegro.on("click", function () {
		$("#cuadro").css("background","black");
	});
	$btnAmarillo.on("click", function () {
		$("#cuadro").css("background","yellow");
	});
	$btnPosicion.on("click", function () {
		var posx = $("form[name=aplica_estilo] input[name=posx]").val()+"px";
		var posy = $("form[name=aplica_estilo] input[name=posy]").val()+"px";
		$("#cuadro").css({"top":posx,"left":posy});
	});
}

/* Validar Formulario */
function validarFormulario() {
	$("form[name=contacto] input[name=nombre]").attr({required : true});
	$("form[name=contacto] input[name=diez]").attr({required : true});
	$("form[name=contacto] input[name=captcha]").attr({required : true});
	$("form[name=contacto] input[name=correo]").attr({type : "email", required : true});
	$("form[name=contacto] input[name=enviar]").attr({type : "submit"});

}
