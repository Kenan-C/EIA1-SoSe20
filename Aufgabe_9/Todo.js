// Array 
var aufgaben = ["Einkaufen", "Essen", "Sport"];
// Aufgaben werden angezeigt
var i;
for (i = 0; i < aufgaben.length; i++) {
    document.querySelector("#Aufgaben").innerHTML += "<h3 id='Inhalt'>" + "&nbsp" + "&nbsp" + "<input type ='checkbox' id='klick'>" + aufgaben[i] + "&nbsp" + "&nbsp" + "<i class='fas fa-trash-alt' id='trash'> </i>";
}
// Knopf und Textfeld / Total / Löschen / Checkbox / Aktivitätenanzahl
document.querySelector("#HinzuButton").addEventListener("click", Hinzufügen);
function Hinzufügen() {
    var neueAufgaben = document.querySelector("#Textfeld");
    aufgaben.push(neueAufgaben.value);
    document.querySelector("#Aufgaben").innerHTML += "<h3 id='Inhalt'>" + "&nbsp" + "&nbsp" + "<input type ='checkbox' id='klick'>" + aufgaben[i] + "&nbsp" + "&nbsp" + "<i class='fas fa-trash-alt' id='trash'> </i>";
    document.querySelector("#trash").addEventListener("click", Löschen);
    document.querySelector("#Anzahl").innerHTML = "Anzahl Aufgaben: " + aufgaben.length;
    i++;
    console.log(aufgaben);
    // Löschbutton funktioniert noch nicht richtig! Nur erste Aufgabe ist löschbar!
    function Löschen() {
        document.querySelector("#Inhalt").innerHTML = "";
        console.log("Löschen");
    }
}
//# sourceMappingURL=Todo.js.map