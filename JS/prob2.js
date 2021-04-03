function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){
    var valor = document.formulario.sueldo.value;
    var result = parseFloat(valor);
    
    var total = result+(result*.10*3);

    document.formulario.sueldoti.value = "$"+total;
}

function comisiones(){
    var valor = document.formulario.sueldo.value;
    var result = parseFloat(valor);
    
    var total = result*.10*3;

    document.formulario.sueldocomi.value = "$"+total;
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.sueldo.value = "";
    document.formulario.sueldocomi.value = "";
}
