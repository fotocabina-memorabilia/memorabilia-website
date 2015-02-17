// ========== Inicio app ==========

// Problema: La página aún no es interactiva. 
// Solución: Agregar interactividad a la página para que el usurario conozca el costo de su plan personalizado.

//Hide hints & important divs
$(".span-planes").hide();
$("#plan-especial").hide();

// Variables

var $cantidadDeInvitados = $("#cantidadDeInvitados");

var $labels = $("label");

var $outputPrecio = $("#precio-final");

//SERGIO
var plan1 = 650000;
var plan2 = 770000;
var plan3 = 840000;
var precioBase = plan1;

var precioInvitadoClasico = 0;
var precioInvitadoSobre = 1000;
var precioInvitadoPortarretratos = 1200;
var precioRecordatoriosInvitados = precioInvitadoClasico;

var precioClienteClasico = 0;
var precioClienteCuadro = 110000;
var precioClienteAlbum = 160000;
var precioRecordatoriosCliente = precioClienteClasico;

var precioFinal = precioBase + precioRecordatoriosInvitados*parseInt($cantidadDeInvitados.val()) + precioRecordatoriosCliente;

// Functions

function actualizarRecordatorioInvitados(){

	if($('#invitadosClasico').is(':checked')){
		precioRecordatoriosInvitados = precioInvitadoClasico;
		// console.log(precioRecordatoriosInvitados);
	} else if($('#invitadosSobre').is(':checked')){
		precioRecordatoriosInvitados = precioInvitadoSobre;
		// console.log(precioRecordatoriosInvitados);
	} else {
		precioRecordatoriosInvitados = precioInvitadoPortarretratos;
		// console.log(precioRecordatoriosInvitados);
	}
}

function actualizarRecordatorioCliente(){

	if($('#clienteClasico').is(':checked')){
		precioRecordatoriosCliente = precioClienteClasico;
		// console.log(precioRecordatoriosCliente);
	} else if($('#clienteCuadro').is(':checked')){
		precioRecordatoriosCliente = precioClienteCuadro;
		// console.log(precioRecordatoriosCliente);
	} else {
		precioRecordatoriosCliente = precioClienteAlbum;
		// console.log(precioRecordatoriosCliente);
	}
}

function actualizarPrecioFinal(precioBaseP, precioRecordatoriosInvitadosP, precioRecordatoriosClienteP, cantidadDeInvitadosP){
	if(isNaN(cantidadDeInvitadosP) || cantidadDeInvitadosP<=0 || cantidadDeInvitadosP.length === 0){
		$outputPrecio.html("Ingresa la cantidad de invitados para obtener el valor.");
	} else {
	precioFinal = precioBaseP + precioRecordatoriosInvitadosP*cantidadDeInvitadosP + precioRecordatoriosClienteP;
	// console.log(precioFinal);

// ====== Start --> Este código formatea números normales a moneda

	var DecimalSeparator = Number("1.2").toLocaleString().substr(1,1);

	var AmountWithCommas = precioFinal.toLocaleString();
	var arParts = String(AmountWithCommas).split(DecimalSeparator);
	var intPart = arParts[0];
	// var decPart = (arParts.length > 1 ? arParts[1] : '');
	// decPart = (decPart + '00').substr(0,2);

	var precioFormateado =  '$ ' + intPart ;

// ====== End --> Este código formatea números normales a moneda

	$outputPrecio.html("El precio de tu plan es: " + precioFormateado + " COP.");
}
}

// End Functions

$cantidadDeInvitados.keyup(function(){

	// El valor no es un número o es un número menor a 0
		// Mostrar tooltip
	// El valor es un número mayor a 170
		// ocultar tooltip
		// ocultar otras opciones
		// mostrar plan especial
	// Else
		// ocultar tooltip
		// Se establece el precio base

		var cantidadDeInvitados = parseInt($cantidadDeInvitados.val());

		if (cantidadDeInvitados<=0 || isNaN($cantidadDeInvitados.val()) ||  $cantidadDeInvitados.val().length === 0){

			$(".span-planes").show();
			// $("#tooltip-mobile").show();
			$outputPrecio.html("Ingresa la cantidad de invitados para obtener el valor.");
		} 
		else if (cantidadDeInvitados>170) {

			$(".span-planes").hide();
			// $("#tooltip-mobile").hide();
			$("#opciones").hide();
			$("#costo-final-del-plan").hide();
			$("#plan-especial").show();
		}
		else {
			
			$(".span-planes").hide();
			// $("#tooltip-mobile").hide();
			$("#opciones").show();
			$("#plan-especial").hide();
			$("#costo-final-del-plan").show();

			if (cantidadDeInvitados > 0 && cantidadDeInvitados <= 70){
				precioBase = plan1;
			} 
			else if(cantidadDeInvitados > 70 && cantidadDeInvitados <= 119){
				precioBase = plan2;

			} 
			else {
				precioBase = plan3;

			}
			actualizarPrecioFinal(precioBase, precioRecordatoriosInvitados, precioRecordatoriosCliente, parseInt($cantidadDeInvitados.val()));
		}

	});



$labels.click(function(){
	
	setTimeout(actualizarRecordatorioInvitados, 200);
	setTimeout(actualizarRecordatorioCliente, 200);
	setTimeout(function(){
		actualizarPrecioFinal(precioBase, precioRecordatoriosInvitados, precioRecordatoriosCliente, parseInt($cantidadDeInvitados.val()));
	}, 200);

});

actualizarRecordatorioInvitados();
actualizarRecordatorioCliente();

















