//Declaracion de variables
var meta = 0;
var recogido = [0,0,0,0];
var porcentajes = [0,0,0,0];
var responsables = ["Wendy","Dipper","Soos","Mabel"];
var total = 0;


//Creacion de procedimientos

meta=prompt("Mabel ingresa la meta a la cual quieres llegar");
    meta = parseInt(meta);

for (let i = 0; i < responsables.length; i++) {
    recogido[i]=prompt("Ingresa lo recogido por "+responsables[i]+": ");
        recogido[i] = parseInt(recogido[i]);

        total+=recogido[i];
    
}


//Procedimiento de porcentaje por persona
porcentajeResponsables();

function porcentajeResponsables(){

    porcentajes = recogido.map(function(value){ //Utilizando función Map
        return value * 100 / total
    })

}


//Muestra el cumplimiento de la cuota por persona
for (let x = 0; x < responsables.length; x++) {
    
    console.log("Lo recogido por "+responsables[x]+" es de "+recogido[x]);
    console.log("El porcentaje de "+responsables[x]+" es de un "+porcentajes[x]+"%");

    if(recogido[x] == total / responsables.length){
        console.log(responsables[x]+" Cumplio con la cuota asignada.");

        }else if(recogido[x] > total / responsables.length){
            console.log(responsables[x]+" Sobre paso la la cuota asignada.")

        }else{
            console.log(responsables[x]+" No cumplio con la cuota asignada.")
        }
}


//Muestra el total recogido y el mensaje de animo a mabel.
console.log("El total recogido entre todo es "+total);

if(total>=meta){
    console.log("Mabel eres una buena administradora! ");
}