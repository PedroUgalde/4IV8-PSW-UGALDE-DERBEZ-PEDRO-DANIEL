function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}


function util(){
    if(formulario.sueldo.value =="" ){
        alert("Porfavor rellene todos los campos");
        formulario.sueldo.focus();
    }
    if(formulario.antiguedad.value =="" ){
        alert("Porfavor rellene todos los campos");
        formulario.antiguedad.focus();
    }
    if(formulario.antiguedad.value >50 ){
        alert("Porfavor inserte un periodod de antiguedad valido");
        formulario.antiguedad.focus();
    }
    var valor = document.formulario.sueldo.value;
    var result = parseFloat(valor);

    var valor2 = document.formulario.antiguedad.value;
    var result2 = parseFloat(valor2);

    
    
    if(result2 < 1){
        
        var sum = result*.5;
        var total1= result+sum;
        document.formulario.total.value = total1;
    } else if(result2>1 && result2<= 2){
        var sum2 = result*.7;
        var total2= result+sum2;
        document.formulario.total.value = total2;
    }else if(result2>2 && result2<= 5){
        var sum3 = result*.10;
        var total3= result+sum3;
        document.formulario.total.value = total3;
    }else if(result2>5 && result2<= 10){
        var sum4 = result*.15;
        var total4= result+sum4;
        document.formulario.total.value = total4;
    }else if(result2>10){
        var sum4 = result*.20;
        var total4= result+sum4;
        document.formulario.total.value = total4;
    }

    

    


}

function borrar(){
    document.formulario.sueldo.value = "";
    document.formulario.antiguedad.value = "";
    document.formulario.total.value = "";
}