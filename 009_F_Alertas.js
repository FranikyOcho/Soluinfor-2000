window.addEventListener('load', function() {
    // Crear la ventana de alerta flotante
    var alerta = document.createElement('div');
    alerta.style.position = 'fixed';
    alerta.style.top = '50%';
    alerta.style.left = '50%';
    alerta.style.transform = 'translate(-50%, -50%)';
    alerta.style.background = 'white';
    alerta.style.border = '1px solid black';
    alerta.style.padding = '20px';
    alerta.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    
    // Obtener la hora del sistema
    var ahora = new Date();
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    
    // Crear el mensaje de saludo según la hora del sistema
    var saludo;
    if (hora >= 6 && hora < 12) {
      saludo = 'Buenos días, te corresponden 50 latigazos';
    } else if (hora >= 12 && hora < 19) {
      saludo = 'Buenas tardes, te corresponden 75 latigazos';
    } else if (hora >= 19 || hora < 6) 
      saludo = 'Buenas noches por ser de noches, te corresponden 100 latigazos';
    
    // Crear el mensaje de la hora del sistema y el botón para cerrar la alerta
    var mensaje = document.createElement('p');
    mensaje.textContent = saludo + ', son las ' + hora + ':' + (minutos < 10 ? '0' : '') + minutos;
    var botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Plus-Plus Cerrar Alerta';
    botonCerrar.addEventListener('click', function() {
      alerta.remove();
    });
    
    // Agregar el mensaje y el botón a la alerta flotante
    alerta.appendChild(mensaje);
    alerta.appendChild(botonCerrar);
    
    // Agregar la alerta flotante al cuerpo de la página
    document.body.appendChild(alerta);
  });
  