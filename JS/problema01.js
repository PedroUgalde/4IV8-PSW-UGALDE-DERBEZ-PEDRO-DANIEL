//a partir de expresion regular se valide entrada de numeros

/*
vamos a crear una funcion que se encargue que
a partir de una expresion regular se valide la entrada
de unicamente numeros
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}




function interes(){
    var valor = document.formulario.cantidad.value;
    var result = parseInt(valor);
    var mes = formulario.cantidadMeses.value;
    var resultMeses= parseInt(mes);
    var interes = result*0.02;
    var total = result+interes*resultMeses;

    document.formulario.sueldoti.value = "$"+total;
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
}

//var btn =document.querySelector('#No_meses');