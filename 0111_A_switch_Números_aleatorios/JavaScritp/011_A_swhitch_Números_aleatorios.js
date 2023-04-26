function generarNumero() {
	let randomNum = Math.floor(Math.random() * 101); // generar número aleatorio entre 0 y 100
	let i = 0;
	let numeros = "";
	while (i <= randomNum && i <= 100) {
		numeros += i + " ";
		i++;
	}
	document.getElementById("resultado").innerHTML = "El número aleatorio es: " + randomNum + "<br>" + "Estos son los numeros: " + numeros;
}
