function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d ]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function añoss(){
   
    if(formulario.año.value >2021){
        alert("Por favor coloque un año que sea posible");
        formulario.año.focus();
    return false;
    }
    if(formulario.año.value <1911){
        alert("Por favor coloque un año en el que seguiria vivo");
        formulario.año.focus();
    return false;
    }
    if(formulario.año.value ==""){
        alert("Por favor llene todos los campos");
        formulario.año.focus();
    return false;
    }
    if(formulario.actual.value ==""){
        alert("Por favor llene todos los campos");
        formulario.actual.focus();
    return false;
    }
    if(formulario.actual.value <= formulario.año.value){
        alert("El año actual no es posible");
        formulario.actual.focus();
    return false;
    }



    var valor = document.formulario.año.value;
    var result = parseInt(valor);

    var valor2 = document.formulario.actual.value;
    var result2 = parseInt(valor2);

   

    var total = result2-result;

    document.formulario.edad
    .value = total+"años";
}



function borrar(){
    document.formulario.año.value = "";
    document.formulario.actual.value = "";
    document.formulario.edad.value = "";
}

