// Obtiene la hora actual
var hora = new Date().getHours();

// Muestra una alerta flotante dependiendo de la hora
if (hora >= 0 && hora < 12) {
	alert("Buenos días!");
} else {
	alert("Buenas noches!");
}
