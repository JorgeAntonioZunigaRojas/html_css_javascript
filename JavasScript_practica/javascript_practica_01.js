
function ejecuta(){
    /*document.getElementsByTagName("p")[1].onclick=saludo;*/ /*Identifica elementros en base al tipo de etiqueta y a su orden*/
    /*document.getElementById("id_parrafo01").onclick=saludo;*/ /*Identifica elementros en base a su ID*/
    /*
    for(var i=0;i<3;i++){ //Permite asignar la funcion "saludo" cuando se realice un clic sobre la etiqueta a todas la etiquetas <p><p/>
        document.getElementsByTagName("p")[i].onclick=saludo;
    }
    */
    for(var i=0;i<3;i++){ //Permite asignar la funcion "saludo" cuando se realice un clic sobre la etiqueta a todas la etiquetas que tengan la clase "clase_parrafo"
        document.getElementsByClassName("clase_parrafo")[i].onclick=saludo;
    }
}
function saludo(){
    alert("Este es un mensaje mostrado gracias a la palabra reservada [alert()]")
}
window.onload=ejecuta;
