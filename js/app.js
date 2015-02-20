// ========== Inicio app ==========

// Problema: La página aún no es interactiva. 
// Solución: Agregar interactividad a la página para que el usurario conozca el costo de su plan personalizado.

//Hide hints & important divs
$(".span-planes").hide();
$("#plan-especial").hide();
$("#output-caracteristicas").hide();

// Variables

var $cantidadDeInvitados = $("#cantidadDeInvitados");

var $labels = $("label");

var $outputPrecio = $("#precio-final");

var $outputHoras = $("#output-horas");

var $outputInvitados = $("#output-invitados");

var $outputCliente = $("#output-cliente");

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

function actualizarPrecioSugerido(){
	if($("#planSugerido1").is(":checked")){
		precioBase = plan1;
	} else if($("#planSugerido2").is(":checked")){
		precioBase = plan2;
	} else {
		precioBase = plan3;
	}
}

function actualizarRecordatorioInvitados(){

	if($('#invitadosClasico').is(':checked')){
		precioRecordatoriosInvitados = precioInvitadoClasico;
		$outputInvitados.html("Recordatorios clásicos para invitados");
		// console.log(precioRecordatoriosInvitados);
	} else if($('#invitadosSobre').is(':checked')){
		precioRecordatoriosInvitados = precioInvitadoSobre;
		$outputInvitados.html("Fotos en sobre personalizados para invitados");
		// console.log(precioRecordatoriosInvitados);
	} else {
		precioRecordatoriosInvitados = precioInvitadoPortarretratos;
		$outputInvitados.html("Fotos con portarretratos para invitados");
		// console.log(precioRecordatoriosInvitados);
	}
}

function actualizarRecordatorioCliente(){

	if($('#clienteClasico').is(':checked')){
		precioRecordatoriosCliente = precioClienteClasico;
		$outputCliente.html("Recordatorios clásicos para ti");
		// console.log(precioRecordatoriosCliente);
	} else if($('#clienteCuadro').is(':checked')){
		precioRecordatoriosCliente = precioClienteCuadro;
		$outputCliente.html("Marco con todas las fotos colgadas");
		// console.log(precioRecordatoriosCliente);
	} else {
		precioRecordatoriosCliente = precioClienteAlbum;
		$outputCliente.html("Álbum fotográfico con firmas de los asistentes");
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
			$('#planSugerido1').prop('checked', false);
			$('#planSugerido2').prop('checked', false);
			$('#planSugerido3').prop('checked', false);

			$("#output-caracteristicas").hide();
			
		} 
		else if (cantidadDeInvitados>170) {

			$(".span-planes").hide();
			$("#opciones").hide();
			$("#costo-final-del-plan").hide();
			$("#plan-diferente").hide();
			$("#reserva").hide();
			$("#plan-sugerido").hide();
			$("#plan-especial").show();

			$("#output-caracteristicas").hide();
		}
		else {
			
			$(".span-planes").hide();
			$("#opciones").show();
			$("#plan-especial").hide();
			$("#costo-final-del-plan").show();
			$("#plan-sugerido").show();

			$("#plan-diferente").show();
			$("#reserva").show();
			$("#output-caracteristicas").show();

			$("#output-caracteristicas").show();

			if (cantidadDeInvitados > 0 && cantidadDeInvitados <= 70){
				precioBase = plan1;
				$('#planSugerido1').prop('checked', true);
				$outputHoras.html("2 horas");

			} 
			else if(cantidadDeInvitados > 70 && cantidadDeInvitados <= 119){
				precioBase = plan2;
				$('#planSugerido2').prop('checked', true);
				$outputHoras.html("3 horas");
			} 
			else {
				precioBase = plan3;
				$('#planSugerido3').prop('checked', true);
				$outputHoras.html("4 horas");

			}
			actualizarPrecioFinal(precioBase, precioRecordatoriosInvitados, precioRecordatoriosCliente, parseInt($cantidadDeInvitados.val()));
		}

	});



$labels.click(function(){
	
	setTimeout(actualizarRecordatorioInvitados, 200);
	setTimeout(actualizarRecordatorioCliente, 200);
	setTimeout(actualizarPrecioSugerido, 200);
	setTimeout(function(){
		actualizarPrecioFinal(precioBase, precioRecordatoriosInvitados, precioRecordatoriosCliente, parseInt($cantidadDeInvitados.val()));
	}, 200);

});

actualizarRecordatorioInvitados();
actualizarRecordatorioCliente();

















