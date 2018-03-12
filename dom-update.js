// ENTETE
// Nom Arduino
document.getElementsByClassName("arduinoNameTop")[0].innerHTML = confValues[6];
document.getElementsByClassName("arduinoNameTop")[1].innerHTML = confValues[6];
// Températures prorgrammées et mesurées
document.getElementsByClassName("arduinoNameBottom")[0].innerHTML = "Prog " + confValues[1]+ " - Mes " + confValues[0];
document.getElementsByClassName("arduinoNameBottom")[1].innerHTML = "Prog " + confValues[1]+ " - Mes " + confValues[0];
// Mise en évidence du jour dans le menu
document.getElementById("menuDay"+day).style.opacity = 1;
document.getElementById("menuDayMini"+day).style.opacity = 1;
// Sélection du jour dans la liste des jours sous le graph
document.getElementById("checkboxDay"+day).checked = true;




// CONF
// Gestion affichage Popup
var modal = document.getElementById('myModal');
var btn = document.getElementById('conf_popup');
var btn2 = document.getElementById('conf_popup2');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Valeurs dans le Popup
document.getElementsByClassName("popupRight")[0].innerHTML = confValues[0] + " °C";
document.getElementsByClassName("popupRight")[1].innerHTML = confValues[1] + " °C";
document.getElementsByClassName("popupRight")[2].innerHTML = popupFill(confValues[2]);
document.getElementsByClassName("popupRight")[3].innerHTML = popupFill(confValues[3]);
document.getElementsByClassName("popupRight")[4].innerHTML = popupFill(confValues[4]);
document.getElementsByClassName("popupRight")[5].innerHTML = popupFill(confValues[5]);
document.getElementsByClassName("popupRight")[6].innerHTML = popupFill(confValues[6], 1, 'moduleName', 16);
document.getElementsByClassName("popupRight")[7].innerHTML = popupFill(confValues[7], 1, 'wifiName', 32);
document.getElementsByClassName("popupRight")[8].innerHTML = popupFill(confValues[8], 1, 'wifiMdp', 64);
document.getElementsByClassName("popupRight")[9].innerHTML = popupFill(confValues[9], 1, 'adrMqtt', 64);
document.getElementsByClassName("popupRight")[10].innerHTML = popupFill(confValues[10], 1, 'adrNtp', 64);
document.getElementsByClassName("popupRight")[11].innerHTML = popupFill(confValues[11], 'r');
document.getElementsByClassName("modal-footer")[0].innerHTML = "<h3>Date et heure au chargement : " + todayDate + " - " + todayTime + "</h3>";


// GRAPH
document.getElementById("graph").innerHTML = '<canvas id="myChart"></canvas>';
graphCreate(tempValues);


// Création des champs de modification des températures
// Liste des heures pour modification
var timePrint = new Array();
for (i=0;i<24;i++){
  if(i<10){
    timePrint.push('0' + i + 'h00');
    timePrint.push('0' + i + 'h30');
  }else{
    timePrint.push( i + 'h00');
    timePrint.push( i + 'h30');
  }
}
// Affichage des champs de modification des trempératures :
document.getElementById("modifTemp").innerHTML = createTimeBlocs(tempValues);


