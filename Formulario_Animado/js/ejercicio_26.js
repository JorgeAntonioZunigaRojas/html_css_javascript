function evaluar(){
    numero  =   parseInt(document.getElementById("numero").value);
    contador=0
    divisores=new Array()
    
    for(i=1;i<numero;i++){
        if((numero%i)==0){
            divisores.push(i)
        }
    }
    
    retorno=sumar_divisores(divisores)
    
    suma_divisores=parseInt(retorno[0])
    sumatoria_de_divisores=(retorno[1])

    if(numero==suma_divisores){
        respuesta= "SI ES PERFECTO";
    }else{
        respuesta= "NO ES PERFECTO";
    }
    
    document.getElementById("descripcion").innerHTML =sumatoria_de_divisores;
    document.getElementById("respuesta").innerHTML=respuesta;
}
function sumar_divisores(divisores){
    suma=0
    sumnatoria=''
    for(i=0;i<divisores.length;i++){
        suma=suma + divisores[i]
        sumnatoria= sumnatoria + String(divisores[i]) + " + " 
    }
    sumnatoria="Suma de divisores:<br>"+sumnatoria.slice(0,sumnatoria.length - 2) + ' = ' + String(suma)
    retorno = new Array(String(suma), sumnatoria)
    return retorno
}
