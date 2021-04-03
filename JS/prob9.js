function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function ganancia(){
    
    if(formulario.horas.value >60 ){
        alert("Por favor indique un horario que no pase de 12 horas diarias :((");
        formulario.sueldo.focus();
    }
    if(formulario.horas.value =="" ){
        alert("Por favor llene todos los campos del formulario");
        formulario.horas.focus();
    }

    if(formulario.sueldo.value =="" ){
        alert("Por favor llene todos los campos del formulario");
        formulario.horas.focus();
    }
    
    if(formulario.horas.value == 0 ){
        alert("Por favor ponga un sueldo menos deprimente");
        formulario.horas.focus();
    }


    var valor = document.formulario.sueldo.value;
    var result = parseFloat(valor);

    var valor2 = document.formulario.horas.value;
    var result2 = parseFloat(valor2);

    if(result2 <= 40){
        
        var total1 = result*result2
        document.formulario.kuchao.value = "$"+total1;

    } else if (result2>40 && result2<=48){
        var extra= result2-40 ;
        var normal= (result2-extra)*result;
        var h = extra*(result*2);
        var total2 =  h+normal;

        document.formulario.kuchao.value = "$"+total2;
        
    }else if (result2>48 && result2<=60){
        var extra1= result2-40 ;
        var normal1= (result2-extra1)*result;
        var extra2= result2-48;
        var normal2= (result2-extra2-40)*(result*2);
        var h = extra2*(result*3);
        var total3 =  h+normal1+normal2;

        document.formulario.kuchao.value = "$"+total3;
    }

    

    

    

    
}

function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.horas.value = "";
    document.formulario.kuchao.value = "";    
}
