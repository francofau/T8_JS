function maquinaReloj() {
/* Objeto Date de JS. Con H, M y S*/
    var fechaHora = new Date()
    var h = fechaHora.getHours();
    var m = fechaHora.getMinutes();
    var s = fechaHora.getSeconds();
/*Mediante el id lo muesdtra en el HTML */
    document.getElementById("reloj").innerHTML = fechaHora;

    if(h < 10) { h = '0' + h; }
    if(m < 10) { m = '0' + m; }
    if(s < 10) { s = '0' + s; }

/*le da el formato necesario: */
    document.getElementById("reloj").innerHTML = h+':'+m+':'+s;
}

/* Cada un segundo refresca (Stackoverflow) */
window.onload = function() {
  setInterval(maquinaReloj, 1000);
}