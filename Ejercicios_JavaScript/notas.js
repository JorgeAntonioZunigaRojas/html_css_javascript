$(document).ready(function(){
    $(".btnProcesar").click(function(){
        suma=0
        aprobados=0
        desaprobados=0
        mayornota=0
        mayornota_pos=0

        for(i=1;i<=4;i++){
            idnota='#nota'+String(i);
            
            nota=document.getElementById("nota"+String(i)).value;
            nota=$(idnota).val();
            
            if(nota==""){
                alert("Datos Incompletos\nFalta ingresar la nota: "+i)
                $(idnota).focus();
                return;
            }else{
                if(nota>20 || nota<0){
                    alert("Datos Incorrectos\nLa nota "+i+" ingresada es incorrecta")
                    $(idnota).focus();
                    return;
                }else{
                    suma+=parseInt(nota);
                    if(parseInt(nota)>10){
                        aprobados+=1
                    }else{
                        desaprobados+=1
                    }
                    if(parseInt(nota)>mayornota){
                        mayornota=parseInt(nota)
                        mayornota_pos=i
                    }
                }
            }
        }
        promedio=suma/4;
        document.getElementById("primer_puesto").value=mayornota_pos;
        document.getElementById("promedio").value=promedio;
        document.getElementById("aprobados").value=aprobados;
        document.getElementById("desaprobados").value=desaprobados;
    })
});