
function startJoc(){
    let y = document.getElementById("cy").value;
    let x = document.getElementById("cx").value;



    if (document.getElementsByTagName("table").length!=0){
        document.getElementsByTagName("table")[0].remove();
    }
    let tauladiv= document.getElementById("ontaula");
    let taula = document.createElement('table');
    taula.border='1';
    let taulaBody = document.createElement('TBODY');
    taula.appendChild(taulaBody);

    for (let a=0; a<y; a++){
        let tr = document.createElement("tr");
        taulaBody.appendChild(tr);

        for (let b=0; b<x; b++){
            let td = document.createElement("td");
            td.width='50';
            td.height='50'
            tr.appendChild(td);

        }
    }
    tauladiv.appendChild(taula);

}

function matriuBinaria(matrix) {
    var matrix2 =[];


    for (var i = 0; i < matrix.length; i++) {

        let fila=[];
        for (var j = 0; j < matrix[0].length; j++) {

            if (matrix[i].style.backgroundColor == "white"){
                fila.push(0);
            }

            else{
                fila.push(1);
            }
        }
        matrix2.push(fila);
    }
    return matrix2;
}