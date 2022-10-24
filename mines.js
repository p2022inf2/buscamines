

function inicialitzaJoc(){
    //Agafem els valors dels inputs de la pagina
    let y = document.getElementById("cy").value;
    let x = document.getElementById("cx").value;



//Si es detecta un element taula existent (longitud més gran que 0)...
if (document.getElementsByTagName("table").length!=0){
    //Es borra aquest element
    document.getElementsByTagName("table")[0].remove();
}
//Detectem on esta el div del html    
let tauladiv= document.getElementById("ontaula");
//La variable taula sera una taula nova
let taula = document.createElement('table');
//Determinem els borders d'aquesta
taula.border='1';

//Fem el cos de la taula...
let taulaBody = document.createElement('TBODY');
taula.appendChild(taulaBody);

//Fem files fins arribar al valor del input de coordenada y...
for (let a=0; a<y; a++){
    let tr = document.createElement("tr");
    taulaBody.appendChild(tr);

    //I fem columnes fins arribar al input de coordenada x
    for (let b=0; b<x; b++){
        let td = document.createElement("td");
        td.width='50';
        td.height='50'
        tr.appendChild(td);

    }
}
//Afegim la taula al div
tauladiv.appendChild(taula);

}

function matriuBinaria(matrix) {
    var matrix2 =[];
    
    //Amb dos bucles for es recorre la matriu...
    for (var i = 0; i < matrix.length; i++) {
        //Creem una variable que sigui un array per guardar els valors de cada fila
        let fila=[];
        for (var j = 0; j < matrix[0].length; j++) {
            //Si a la fila es troba un quadre blanc...
           if (matrix[i].style.backgroundColor == "white"){
            //Afegim un valor 0
            fila.push(0);
           }
           //Si no es troba un blanc...
           else{
            //Afegim un valor 1
            fila.push(1);
           }
        }
        //Afegim aquesta matriu fila a la matriu "matrix2", això es fa fins quedar-nos sense files
        matrix2.push(fila);
    }
    //Retorna matrix2, que serà una matriu de matrius
    return matrix2;
}

