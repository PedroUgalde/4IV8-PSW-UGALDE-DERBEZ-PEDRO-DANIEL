function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calificar(){
    if(formulario.promedio.value ==""){
        alert("Por favor llene todos los campos");
        formulario.promedio.focus();
    return false;
    }
    if(formulario.examen.value ==""){
        alert("Por favor llene todos los campos ");
        formulario.examen.focus();
    return false;
    }
    if(formulario.trabajo.value ==""){
        alert("Por favor llene todos los campos  ");
        formulario.trabajo.focus();
    return false;
    }
    if(formulario.promedio.value > 10){
        alert("Por favor Escriba una calificacion posible ");
        formulario.promedio.focus();
    return false;
    }
    if(formulario.examen.value > 10){
        alert("Por favor Escriba una calificacion posible ");
        formulario.examen.focus();
    return false;
    }
    if(formulario.trabajo.value > 10){
        alert("Por favor Escriba una calificacion posible ");
        formulario.trabajo.focus();
    return false;
    }
  
    var valor = document.formulario.promedio.value;
    var result = parseFloat(valor);

    var valor2 = document.formulario.examen.value;
    var result2 = parseFloat(valor2);

    var valor3 = document.formulario.trabajo.value;
    var result3 = parseFloat(valor3);


    var porcentaje1 = result*.55;
    var porcentaje2 = result2*.30;
    var porcentaje3 = result3*.15;

   

    var total= porcentaje1+porcentaje2+porcentaje3;
    
   

    document.formulario.promedioFinal.value = total;
}



function borrar(){
    document.formulario.promedio.value = "";
    document.formulario.examen.value = "";
    document.formulario.trabajo.value = "";
    document.formulario.promedioFinal.value = "";
    
}
