function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .\-]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function numeros(){
    if(formulario.num1.value == "" ){
        alert("Por favor rellene todos los campos");
        formulario.num1.focus();
    
    return false;
    }
    if(formulario.num2.value == "" ){
        alert("Por favor rellene todos los campos");
        formulario.num2.focus();
    
    return false;
    }
    if(formulario.num3.value == "" ){
        alert("Por favor rellene todos los campos");
        formulario.num3.focus();
    
    return false;
    }
    
    
    
    

    if(formulario.num1.value == formulario.num2.value  ){
        alert("Por favor no inserte valores iguales");
        formulario.num1.focus();
    return false;
    } 
    if(formulario.num1.value == formulario.num3.value  ){
        alert("Por favor no inserte valores iguales");
        formulario.num1.focus();
    return false;
    } 
    if(formulario.num2.value == formulario.num3.value  ){
        alert("Por favor no inserte valores iguales");
        formulario.num2.focus();
    return false;
    } 
    

    var valor = document.formulario.num1.value;
    var result = parseFloat(valor);

    var valor2 = document.formulario.num2.value;
    var result2 = parseFloat(valor2);

    var valor3 = document.formulario.num3.value;
    var result3 = parseFloat(valor3);
     
    
    
    if(formulario.num1.value >formulario.num2.value && formulario.num1.value > formulario.num3.value  ){
        document.formulario.alto.value = result;
    } 
    if(formulario.num2.value >formulario.num1.value && formulario.num2.value > formulario.num1.value  ){
        document.formulario.alto.value = result2;
    } 
    if(formulario.num3.value >formulario.num2.value && formulario.num3.value > formulario.num1.value  ){
        document.formulario.alto.value = result3;
    } 
     
    
    
    
    
    
    


}

function borrar(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.num3.value = "";
    document.formulario.alto.value = "";
}