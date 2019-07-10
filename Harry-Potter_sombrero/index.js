//Variables
var asigancionCasa = ["g","r","s","h"];
var nuevosEstudiantes = 16;
var estudiantes = "";
var casaResultado = [0,0,0,0];

for(var i = 1; i < nuevosEstudiantes; i++){
  
    do{
        
        estudiantes = prompt("elija la asignación de la casa: "
        + "G: Gryffindor " + "R: Ravenclaw " 
        + "S: Slytherin " + "H: Hufflepuff" + " " +  ":" + i);
    
        estudiantes = estudiantes.toLowerCase();

         
    if(estudiantes === "g"){
        casaResultado[0]+=1;
    }else if(estudiantes === "r"){
        casaResultado[1]+=1;
    }else if(estudiantes === "s"){
        casaResultado[2]+=1;
    }else if(estudiantes === "h"){
        casaResultado[3]+=1;
    }else{
        alert("indesición");
    }
        
    }while(estudiantes === "" || estudiantes === estudiantes);

   

        
}
document.write("Gryffindor: " + casaResultado[0] + "</br>");
document.write("Ravenclaw: " + casaResultado[1]+ "</br>");
document.write("Slytherin: " + casaResultado[2]+ "</br>");
document.write("Hufflepuff: " + casaResultado [3]+ "</br>");