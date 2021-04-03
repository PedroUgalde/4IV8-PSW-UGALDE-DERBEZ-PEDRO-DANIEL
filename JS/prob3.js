/*funcion pa validar solo numeros */
function validarn(e){
    

    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


    

}

function descontar(){
    if(formulario.cantidad.value > 10000){
        alert("Por favor Escriba un valor mas pequeño ");
        formulario.nombre.focus();
    return false;
    }
  
    var valor = document.formulario.cantidad.value;
    var result = parseFloat(valor);
    var descuentos = result-(result*.15);
   

    document.formulario.descuento.value = "$"+descuentos;
}

function borrar(){
    document.formulario.descuento.value = "";
    document.formulario.cantidad.value = "";
}
