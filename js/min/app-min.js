function actualizarPrecioSugerido(){precioBase=$("#planSugerido1").is(":checked")?plan1:$("#planSugerido2").is(":checked")?plan2:plan3}function actualizarRecordatorioInvitados(){$("#invitadosClasico").is(":checked")?(precioRecordatoriosInvitados=precioInvitadoClasico,$outputInvitados.html("Recordatorios clásicos para invitados")):$("#invitadosSobre").is(":checked")?(precioRecordatoriosInvitados=precioInvitadoSobre,$outputInvitados.html("Fotos en sobre personalizados para invitados")):(precioRecordatoriosInvitados=precioInvitadoPortarretratos,$outputInvitados.html("Fotos con portarretratos para invitados"))}function actualizarRecordatorioCliente(){$("#clienteClasico").is(":checked")?(precioRecordatoriosCliente=precioClienteClasico,$outputCliente.html("Recordatorios clásicos para ti")):$("#clienteCuadro").is(":checked")?(precioRecordatoriosCliente=precioClienteCuadro,$outputCliente.html("Marco con todas las fotos colgadas")):(precioRecordatoriosCliente=precioClienteAlbum,$outputCliente.html("Álbum fotográfico con firmas de los asistentes"))}function actualizarPrecioFinal(o,e,a,i){if(isNaN(i)||0>=i||0===i.length)$outputPrecio.html("Ingresa la cantidad de invitados para obtener el valor.");else{precioFinal=o+e*i+a;var t=Number("1.2").toLocaleString().substr(1,1),r=precioFinal.toLocaleString(),c=String(r).split(t),n=c[0],s="$ "+n;$outputPrecio.html("El precio de tu plan es: "+s+" COP.")}}$(".span-planes").hide(),$("#plan-especial").hide(),$("#output-caracteristicas").hide();var $cantidadDeInvitados=$("#cantidadDeInvitados"),$labels=$("label"),$outputPrecio=$("#precio-final"),$outputHoras=$("#output-horas"),$outputInvitados=$("#output-invitados"),$outputCliente=$("#output-cliente"),plan1=65e4,plan2=77e4,plan3=84e4,precioBase=plan1,precioInvitadoClasico=0,precioInvitadoSobre=1e3,precioInvitadoPortarretratos=1200,precioRecordatoriosInvitados=precioInvitadoClasico,precioClienteClasico=0,precioClienteCuadro=11e4,precioClienteAlbum=16e4,precioRecordatoriosCliente=precioClienteClasico,precioFinal=precioBase+precioRecordatoriosInvitados*parseInt($cantidadDeInvitados.val())+precioRecordatoriosCliente;$cantidadDeInvitados.keyup(function(){var o=parseInt($cantidadDeInvitados.val());0>=o||isNaN($cantidadDeInvitados.val())||0===$cantidadDeInvitados.val().length?($(".span-planes").show(),$outputPrecio.html("Ingresa la cantidad de invitados para obtener el valor."),$("#planSugerido1").prop("checked",!1),$("#planSugerido2").prop("checked",!1),$("#planSugerido3").prop("checked",!1),$("#output-caracteristicas").hide()):o>170?($(".span-planes").hide(),$("#opciones").hide(),$("#costo-final-del-plan").hide(),$("#plan-diferente").hide(),$("#reserva").hide(),$("#plan-sugerido").hide(),$("#plan-especial").show(),$("#output-caracteristicas").hide()):($(".span-planes").hide(),$("#opciones").show(),$("#plan-especial").hide(),$("#costo-final-del-plan").show(),$("#plan-sugerido").show(),$("#plan-diferente").show(),$("#reserva").show(),$("#output-caracteristicas").show(),$("#output-caracteristicas").show(),o>0&&70>=o?(precioBase=plan1,$("#planSugerido1").prop("checked",!0),$outputHoras.html("2 horas")):o>70&&119>=o?(precioBase=plan2,$("#planSugerido2").prop("checked",!0),$outputHoras.html("3 horas")):(precioBase=plan3,$("#planSugerido3").prop("checked",!0),$outputHoras.html("4 horas")),actualizarPrecioFinal(precioBase,precioRecordatoriosInvitados,precioRecordatoriosCliente,parseInt($cantidadDeInvitados.val())))}),$labels.click(function(){setTimeout(actualizarRecordatorioInvitados,200),setTimeout(actualizarRecordatorioCliente,200),setTimeout(actualizarPrecioSugerido,200),setTimeout(function(){actualizarPrecioFinal(precioBase,precioRecordatoriosInvitados,precioRecordatoriosCliente,parseInt($cantidadDeInvitados.val()))},200)}),actualizarRecordatorioInvitados(),actualizarRecordatorioCliente();