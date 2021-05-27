/* toma del html la imagen grande (seleccionada) */
visor1=document.getElementById("ImagenSel"); 

/* busca en los archivos la imagen con el número de foto */
function mifoto(num) { 
         f="img/"+"foto"+num+".jpg"; 
         document.images["fotoVisor"].src=f; 
}