//Variables
var asigancionCasa = ["G","R","S","H"];
var nuevosEstudiantes = 16;
var estudiantes = "";
var casaResultado = [0,0,0,0];

for(var i = 1; i < nuevosEstudiantes; i++){
   
    do{
        estudiantes = prompt("elija la asignación de la casa: "
        + "G: Gryffindor " + "R: Ravenclaw " 
        + "S: Slytherin " + "H: Hufflepuff" + " " +  ":" + i);
    
        estudiantes = estudiantes.toLowerCase();
    }while(estudiantes == "" );
    

}