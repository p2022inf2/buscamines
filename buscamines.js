var matrix = null;
var minesArray = null;
var mines = 8;

function inicialitzaJoc() {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");

    //Elements taula
    let Taula = document.createElement("table");
    Taula.style.width = "33%";
    Taula.style.border = "1";
    let TaulaBody = document.createElement("tbody");

    if (document.getElementsByTagName("table").length!=0){
        //Es borra aquest element
        document.getElementsByTagName("table")[0].remove();
    }

    for (let j = 0; j < document.getElementById("row").value; j++) {
        // Craecio row's de la taula
        let row = document.createElement("tr");

        for (let i = 0; i < document.getElementById("td").value; i++) {
            // Creacio cel·les de la taula
            let td = document.createElement("td");
            td.innerHTML = "&nbsp";
            td.style.border = "1px solid black";
            td.style.background = "lightgrey";
            row.appendChild(td);
        }
        TaulaBody.appendChild(row);
       
    }

    Taula.appendChild(TaulaBody);
    div.appendChild(Taula)
    body.appendChild(div);
    
    matrix = matriuBinaria()
    
}

function matriuBinaria(matrix) {
    let matrix2 =[];
    for (var i = 0; i < matrix.length; i++) {
        let fila=[];
        for (var j = 0; j < matrix[0].length; j++) {
           if (matrix[i][j].style.backgroundColor == "red"){
            fila.push(1);
           }
           else{
            fila.push(0);
           }
        }
        matrix2.push(fila);
    }
    return matrix2;
}


let a = [];
a.push(3);
// a
// [3]
