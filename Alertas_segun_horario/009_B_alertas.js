window.onload = function() {
    var hora = new Date().getHours();
    var mensaje;
  
    if (hora >= 6 && hora < 12) {
      mensaje = "Buenos días Franiky. Hoy solo 50 latigazos";
    } else if (hora >= 12 && hora < 19) {
      mensaje = "Buenas tardes Franiky.";
    } else {
      mensaje = "Buenas noches";
    }
  
    alert(mensaje + "\nLa hora actual es: " + hora + ":00");
  };
  
