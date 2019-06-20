//Asignar las variables
var miembros = "";
var divergentes = 0;
var porcentajeDivergentes = 0;
var asignación = 20;
var facciones = [0,0,0,0,0];
var porcentajeFacciones = [0,0,0,0,0]
var sumaOsaDiver = 0;

alert('"A" es igual a Abnegación');
alert('"C" es igual a Cordialidad')
alert('"E" es igual a Erudición')
alert('"O" es igual a Osadía');
alert('"V" es igual a Verdad');

for(i = 1; i <= asignación; i++){

    miembros = prompt("elija la facción deseada: " + i);
    miembros = miembros.toUpperCase();

    
    if(miembros == "A"){
        facciones[0] += 1
        porcentajeFacciones[0] = facciones[0];
    }else if(miembros == "C"){ 
        facciones[1] += 1;
        porcentajeFacciones[1] = facciones[1];
    }else if(miembros == "E"){ 
        facciones[2] += 1;
        porcentajeFacciones[2] = facciones[2];
    }else if(miembros == "O"){
        facciones[3] +=1;
        porcentajeFacciones[3] = facciones[3];
    }else if(miembros == "V"){ 
        facciones[4] +=1;
        porcentajeFacciones[4] = facciones[4];
    }else{
        divergentes +=1;
    }
}

porcentajeDivergentes = (divergentes/asignación) * 100;

for(var k = 0; k < porcentajeFacciones.length; k++){
    porcentajeFacciones[k] = (porcentajeFacciones[k] / asignación) * 100;
}

sumaOsaDiver = porcentajeFacciones[3] + porcentajeDivergentes;


document.write("<h3>facciones: " + facciones + "<br/>");
document.write("<h3>el porcentaje de Facciones es: " + porcentajeFacciones + "<br/>");
document.write("<h3>Divergentes: " + divergentes + "<br/>");
document.write("<h3>El porcentaje de Divergentes es: " + porcentajeDivergentes + "<br/>");

if (sumaOsaDiver > 40){
    document.write("<h2> Jeanine, puedes proceder con la dominación total!");
}else{
    console.log("Los miembros de Osadía y Divergentes no superaron el"+
    "porcentaje de todas las otras facciones.");
}

if (porcentajeFacciones[2] < porcentajeFacciones[0,1,3,4] && divergentes == 0){
    document.write("<h2> Janine, ¡te tocó aplazar tu maléfico plan");
}
