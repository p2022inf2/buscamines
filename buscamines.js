function inicialitzaJoc() {
    var body = document.getElementsByTagName("body")[0];
    var div = document.createElement("div");

    //Elements taula
    var Taula = document.createElement("table");
    Taula.style.width = "33%";
    Taula.style.border = "1";
    var TaulaBody = document.createElement("tbody");

    for (var j = 0; j < document.getElementById("row").value; j++) {
        // Craecio row's de la taula
        var row = document.createElement("tr");

        for (var i = 0; i < document.getElementById("td").value; i++) {
            // Creacio cel·les de la taula
            var td = document.createElement("td");
            td.innerHTML = "&nbsp";
            td.style.border = "1px solid black";
            row.appendChild(td);
        }
        TaulaBody.appendChild(row);
       
    }

    Taula.appendChild(TaulaBody);
    body.appendChild(Taula);
    
    
}

function matriuBinaria(matrix) {
    var matrix2 = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
        }
    }
    return matrix2;
}

var a = [];
a.push(3);
// a
// [3]

