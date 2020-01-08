
function ejecuta(){
    document.querySelector(".clase_parametro").onclick=saludo; //Asigna la funcion "saludo" cuando realicen un click a la primera etiqueta de clase "clase_parametro"
    document.querySelector("#principal p:last-child").onclick=saludo; //Asigna la funcion "saludo" al ultimo hijo (hijo que sea etiqueta <p><p/>) de #principal (id=principal)
    var elementos=document.querySelectorAll("#principal p, span"); //Devuelve etiquetas de tipo <p><p/> que esten dentro del #principal y todas las etiquetas "span"
    
    for(var i=0;i<elementos.length;i++){
        elementos[i].onclick=saludo;
    }
    
}
function saludo(){
    alert("Este es un mensaje mostrado gracias a la palabra reservada [alert()]")
}
window.onload=ejecuta;
