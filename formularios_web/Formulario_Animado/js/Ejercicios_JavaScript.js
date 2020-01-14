function calcular_hipotenusa(){
    cateto01=document.getElementById("cateto01").value;
    cateto02=document.getElementById("cateto02").value;
    hipotenusa= Math.pow(Math.pow(parseInt(cateto01),2) + Math.pow(parseInt(cateto02),2),0.5);
    respuesta="La hipotenusa es: " + hipotenusa;
    document.getElementById("hipotenusa").innerHTML=respuesta
}
function calcular_area_triangulo(){
    base=document.getElementById("base").value;
    altura=document.getElementById("altura").value;
    area_triangulo= parseInt(base)*parseInt(altura)/2;
    respuesta="El area del triangulo es: " + area_triangulo;
    document.getElementById("area_triangulo").innerHTML=respuesta
}
function calcular_area_circulo(){
    radio=document.getElementById("radio").value;
    area_circulo= Math.pow(parseInt(radio),2)*Math.PI;
    respuesta="El area del circulo es: " + area_circulo;
    document.getElementById("area_circulo").innerHTML=respuesta
}

function calcular_nota_final(){
    nota_teoria=document.getElementById("nota_teoria").value;
    nota_practica=document.getElementById("nota_practica").value;
    nota_examenfinal=document.getElementById("nota_examenfinal").value;
    nota_final=nota_teoria*0.3 + nota_practica*0.4 + nota_examenfinal*0.3
    respuesta="La nota final es: " + nota_final;
    document.getElementById("nota_final").innerHTML=respuesta
}