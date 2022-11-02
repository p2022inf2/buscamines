
function inicialitzaJoc() {
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");

    //Elements taula
    let Taula = document.createElement("table");
    Taula.style.width = "33%";
    Taula.style.border = "1px solid black";
    Taula.style.padding = "2px";
    Taula.style.marginTop = "5px";

    let TaulaBody = document.createElement("tbody");
    TaulaBody.style.border = "1px solid black";

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
            row.appendChild(td);
        }
        TaulaBody.appendChild(row);
    }

    Taula.appendChild(TaulaBody);
    div.appendChild(Taula)
    body.appendChild(div);    
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