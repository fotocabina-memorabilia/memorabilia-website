//=========== Clases para agregar estilos==============

$('#opciones-invitados input:radio').addClass('input_hidden');
$('#opciones-invitados label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

$('#opciones-cliente input:radio').addClass('input_hidden');
$('#opciones-cliente label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

// ========== Inicio app ==========

// Problema: La página aún no es interactiva. 
// Solución: Agregar interactividad a la página para que el usurario conozca el costo de su plan personalizado.

//Hide hints & important divs
$(".span-planes").hide();
$("#plan-especial").hide();
$("#costo-final-del-plan").hide();

// Variables

var $cantidadDeInvitados = $("#cantidadDeInvitados");

var $plan1 = 650000;
var $plan2 = 770000;
var $plan3 = 840000;



// var precioSobre
// var precioPortarretratos

// var precioCuadro = 110000;
// var precioAlbum = 160000;

// Ingresar un número de invitados y mostrar Tooltip

function validacionCantidad(){
	return parseInt($cantidadDeInvitados.val()) > 0;
}

function cantidadEsValida(){
	if(!validacionCantidad()){
		$(".span-planes").show();
	} else {
		$(".span-planes").hide();
	}
}

function masDe170(){
	if(parseInt($cantidadDeInvitados.val()) > 170){
		$("#opciones").hide();
		$("#plan-especial").show();
	} else{
		$("#opciones").show();
		$("#plan-especial").hide();
	}
}

// Definición de precioBase

var $precioBase = function(){
	if (parseInt($cantidadDeInvitados.val()) > 0 && parseInt($cantidadDeInvitados.val()) <= 70){
		$precioBase = $plan1;
	} else if(parseInt($cantidadDeInvitados.val()) > 70 && parseInt($cantidadDeInvitados.val()) <= 119){
		$precioBase = $plan2;
	} else {
		$precioBase = $plan3;
	}
};

$cantidadDeInvitados.keyup(cantidadEsValida).keyup(masDe170).keyup($precioBase);

// Seleccionar tipo de recordatorio para sus invitados

var $precioRecordatoriosInvitados = function(){
	$('#invitadosClasico').click(function() {
		if($('#invitadosClasico').is(':checked')) { 
			// console.log(0);
			$precioRecordatoriosInvitados = 0;
		}
	});

	$('#invitadosSobre').click(function() {
		if($('#invitadosSobre').is(':checked')) { 
			// console.log(1000);
			$precioRecordatoriosInvitados = 1000;
		}
	});

	$('#invitadosPortarretratos').click(function() {
		if($('#invitadosPortarretratos').is(':checked')) { 
			// console.log(1200);
			$precioRecordatoriosInvitados = 1200;
		}
	});

};

$precioRecordatoriosInvitados();


var $precioRecordatoriosCliente = function(){
	$('#clienteClasico').click(function() {
		if($('#clienteClasico').is(':checked')) { 
			// console.log(0);
			$precioRecordatoriosCliente = 0;
		}
	});

	$('#clienteCuadro').click(function() {
		if($('#clienteCuadro').is(':checked')) { 
			// console.log(110000);
			$precioRecordatoriosCliente = 110000;
		}
	});

	$('#clienteAlbum').click(function() {
		if($('#clienteAlbum').is(':checked')) { 
			// console.log(160000);
			$precioRecordatoriosCliente = 160000;
		}
	});

};

$precioRecordatoriosCliente();



var $precioFinal = function(){
	$("#cotizar").click(function(){
		$precioBase + $precioRecordatoriosCliente + $precioRecordatoriosInvitados * parseInt( $cantidadDeInvitados.val() );
		console.log("Preciooooo final");
	});
	
};

$precioFinal();

 



	// if eligen clasico --> agregar 0 a variable precioRecordatoriosInvitados
		// else if eligen sobre --> agregar valor de variable precioSobre a variable precioRecordatoriosInvitados
		// else if eligen portarretratos --> agregar valor de variable precioPortarretratos a variable precioRecordatoriosInvitados

// Seleccionar tipo de recordatorio para él/ella

	// if eligen clasico --> agregar 0 a variable precioRecordatoriosCliente
		// else if eligen cuadro --> agregar valor de variable precioCuadro a variable precioRecordatoriosCliente
		// else if eligen álbum --> agregar valor de variable precioAlbum a variable precioRecordatoriosCliente

// Ver costo del plan: costo del plan es: $precioBase + p$recioRecordatoriosInvitados*cantidadDeInvitados + $precioRecordatoriosCliente
	// Append <p> con precio del plan



























