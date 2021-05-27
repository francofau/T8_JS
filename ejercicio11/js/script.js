/* Creo dos arrays, uno para cada dado */
var tiradasD1=[0,0,0,0,0,0];
var tiradasD2=[0,0,0,0,0,0];

/* Genero los resultados aleatorios para cada dado (numeros del 1 al 6 inclusive y redondeando al entero) */
function tiraDado1(){
    return parseInt (Math.floor(Math.random()*7));
}    
function tiraDado2(){
    return parseInt (Math.floor(Math.random()*7));
}  

/* "tiro" cada dado 18mil veces (36mil veces en total) */
for (let i = 0; i < 18000; i++) {
    let t=tiraDado1();
    tiradasD1[t-1]++;
}
for (let i = 0; i < 18000; i++) {
    let t=tiraDado2();
    tiradasD2[t-1]++;
}
/* Creo el array final donde almaceno los resultados */
var tiradasTotal = [];
/* Sumo el resultado de cada dado en la posición correspondiente */
for(i=0; i<tiradasD1.length; i++){
      tiradasTotal[i] =tiradasD1[i]+tiradasD2[i];
}

/* Lo muestro en el documento HTML entonces uso etiquetas de salto de línea y negrita */
document.write("El número 1 salió <b>"+tiradasTotal[0]+"</b> veces en ambos dados");
document.write("<br/>El número 2 salió <b>"+tiradasTotal[1]+"</b> veces en ambos dados");
document.write("<br/>El número 3 salió <b>"+tiradasTotal[2]+"</b> veces en ambos dados");
document.write("<br/>El número 4 salió <b>"+tiradasTotal[3]+"</b> veces en ambos dados");
document.write("<br/>El número 5 salió <b>"+tiradasTotal[4]+"</b> veces en ambos dados");
document.write("<br/>El número 6 salió <b>"+tiradasTotal[5]+"</b> veces en ambos dados");
