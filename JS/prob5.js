function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function onvres(){
    if(formulario.hombres.value ==""){
        alert("Por favor llene todos los campos");
        formulario.promedio.focus();
    return false;
    }
    if(formulario.mujeres.value ==""){
        alert("Por favor llene todos los campos ");
        formulario.examen.focus();
    return false;
    }
    if(formulario.hombres.value > 200){
        alert("Por favor Escriba un numero de alumnos posibles ");
        formulario.hombres.focus();
    return false;
    }
    if(formulario.mujeres.value > 200){
        alert("Por favor Escriba un numero de alumnos posibles ");
        formulario.mujeres.focus();
    return false;
    }
  
    var valor = document.formulario.hombres.value;
    var result = parseFloat(valor);
    

    var valor1 = document.formulario.mujeres.value;
    var result1 = parseFloat(valor1);
    

    var pro = result+result1;
    var total= 100*(result/pro);
   

    document.formulario.pHombres.value = total+"%";
}


function mujer(){

    if(formulario.hombres.value ==""){
        alert("Por favor llene todos los campos");
        formulario.promedio.focus();
    return false;
    }
    if(formulario.mujeres.value ==""){
        alert("Por favor llene todos los campos ");
        formulario.examen.focus();
    return false;
    }
    if(formulario.hombres.value > 200){
        alert("Por favor Escriba un numero de alumnos posibles ");
        formulario.hombres.focus();
    return false;
    }
    if(formulario.mujeres.value > 200){
        alert("Por favor Escriba un numero de alumnos posibles ");
        formulario.mujeres.focus();
    return false;
    }
  
    var valor = document.formulario.hombres.value;
    var result = parseFloat(valor);
    

    var valor1 = document.formulario.mujeres.value;
    var result1 = parseFloat(valor1);
    

    var pro = result+result1;
    var total= 100*(result1/pro);
   

    document.formulario.pMujeres.value = total+"%";
}

function borrar(){
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
    document.formulario.pHombres.value = "";
    document.formulario.pMujeres.value = "";
}
