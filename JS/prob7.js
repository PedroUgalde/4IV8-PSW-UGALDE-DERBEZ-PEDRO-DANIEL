function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .\-]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function numeros(){
    var valor = document.formulario.num1.value;
    var result = parseFloat(valor);

    var valor2 = document.formulario.num2.value;
    var result2 = parseFloat(valor2);

    
    
    if(formulario.num1.value >formulario.num2.value){
        
        var total1 = result-result2
        document.formulario.totales.value = total1;
    } 

    if(formulario.num1.value == formulario.num2.value){
        
        var total2 = result*result2
        document.formulario.totales.value = total2;
    } 

    if(formulario.num1.value < formulario.num2.value){
        
        var total3 = result+result2
        document.formulario.totales.value = total3;
    } 




}

function borrar(){
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.totales.value = "";
}