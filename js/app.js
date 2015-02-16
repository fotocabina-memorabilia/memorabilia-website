// Clases para agregar estilos

$('#opciones-invitados input:radio').addClass('input_hidden');
$('#opciones-invitados label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

$('#opciones-cliente input:radio').addClass('input_hidden');
$('#opciones-cliente label').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

// Inicio app

// Problema: La página aún no es interactiva. 
// Solución: Agregar interactividad a la página para que el usurario conozca el costo de su plan personalizado.

//Hide hints & important divs
$(".span-planes").hide();
$("#plan-especial").hide();
$("#costo-final-del-plan").hide();

// Variables

var $cantidadDeInvitados = $("#cantidadDeInvitados").val();

// Ingresar un número de invitados
	// Verificar
		// If valor <= 0 ---> show hint
		// else --> hide hint

	// guardar número de invitados en variable cantidadDeInvitados
		// if valor es menor que 70 --> guardar valor de plan1 en variable precioBase
		// else if valor es entre 71 y 120 --> guardar valor de plan2 en variable precioBase
		// else if valor es entre 120 y 170  --> guardar valor de plan3 en variable precioBase
		// else  --> Pedir que nos contacten directamente

// Seleccionar tipo de recordatorio para sus invitados

	// if eligen clasico --> agregar 0 a variable precioRecordatoriosInvitados
		// else if eligen sobre --> agregar valor de variable precioSobre a variable precioRecordatoriosInvitados
		// else if eligen portarretratos --> agregar valor de variable precioPortarretratos a variable precioRecordatoriosInvitados

// Seleccionar tipo de recordatorio para él/ella

	// if eligen clasico --> agregar 0 a variable precioRecordatoriosCliente
		// else if eligen cuadro --> agregar valor de variable precioCuadro a variable precioRecordatoriosCliente
		// else if eligen álbum --> agregar valor de variable precioAlbum a variable precioRecordatoriosCliente

// Ver costo del plan: costo del plan es: precioBase + precioRecordatoriosInvitados*cantidadDeInvitados + precioRecordatoriosCliente
	// Append <p> con precio del plan