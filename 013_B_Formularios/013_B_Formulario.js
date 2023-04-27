function guardarDatos(event) {
	event.preventDefault();

	// Obtener los valores del formulario
	let nombre = document.getElementById("nombre").value;
	let apellidos = document.getElementById("apellidos").value;
	let email = document.getElementById("email").value;

	// Validar el formato del email
	if (!email.includes("@")) {
		alert("E-Mail incorrecto, intentelo otra vez.");
		/*return;*/
	}

	// Crear un elemento li con los datos del formulario
	let nuevoDato = document.createElement("li");
	nuevoDato.innerText = `${nombre} ${apellidos} - ${email}`;

	// Agregar el nuevo dato a la lista
	let listaDatos = document.getElementById("lista-datos");
	listaDatos.appendChild(nuevoDato);

	// Limpiar el formulario
	document.getElementById("formulario").reset();
}

function limpiarFormulario() {
	document.getElementById("formulario").reset();
}
