// POPUP -----------------------
// Etats des infos
function popupFill(state, inp='', name='', maxlength = '', size = ''){
  if(state == '2' && inp==''){
    var str = "Désactivé (2)";
    var result = str.bold().fontcolor("#DDD");
    return(result);
  }
  if(state == '1' && inp==''){
    var str = "Connecté (1)";
    var result = str.bold().fontcolor("#74e874");
    return(result);
  }
  if(state == '0' && inp==''){
    var str = "Déconnecté (0)";
    var result = str.bold().fontcolor("#f25959");
    return(result);
  }
  if(state == '' && inp==''){
    var str = "Non-utilisé";
    var result = str.bold().fontcolor("#a8a8a8");
    return(result);
  }
  if(inp==1){
    var str = '<input type="text" name="' + name + '" maxlength="' + maxlength + '" size="" value="' + state + '" >';
    return(str);
  }
  if(inp == 'r'){
    var str = '<input type="radio" name="confMod" value="0"';
    if(state == 0){
      str += ' checked> 0 <input type="radio" name="confMod" value="1"> 1';
    }else{
      str += '> 0 <input type="radio" name="confMod" value="1" checked > 1';
    }
    return(str);
  }
}



// Création du graph
function graphCreate(temp){
  var labels = ["0h00", "0h30", "1h00", "1h30", "2h00", "2h30", "3h00", "3h30", "4h00", "4h30", "5h00", "5h30", "6h00", "6h30", "7h00", "7h30", "8h00", "8h30", "9h00", "9h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00", "23h30"];

    // Couleurs background et border des bar :
    var bckgndcol = new Array();
    var bordercol = new Array();
    // Coloration du graph selon température
    for (var i=0; i<temp.length; i++){
      if(temp[i] < 17){
        bckgndcol[i] = "rgba(  " + (temp[i] * 15) + " , 0 , 255 , 0.7)";
        bordercol[i] = "rgba(  " + (temp[i] * 15) + " , 0 , 255 , 0.9)";
      }else{
        // si température >=17°C → couleur Blue = -30 * temp + 765
        bckgndcol[i] = "rgba( 255, 0, " + (-30*temp[i]+765) + ",0.7)";
        bordercol[i] = "rgba( 255, 0, " + (-30*temp[i]+765) + ",0.9)";
      }
    }

    // Values du graph
    var ctx = document.getElementById("myChart");
    var data = {
            labels: labels,
            datasets: [{
                label: 'Températures (°C) ',
                data: temp,
                backgroundColor: bckgndcol,
                borderWidth: 2
            }]
          };

    // Création du graph
    Chart.defaults.global.defaultFontColor = '#bbb'; // font color

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            defaultFontColor:'#DDDDDD', // nok
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false,
            }
        }
    });
}




// Champs de modification des températures :
// Boutons + et - des réglages de température
function incrementInput(id){
  var val = new Number(document.getElementById(id).value);
  if(val<25.5){
    document.getElementById(id).value=val+0.5;
  }
}
function decrementInput(id){
  var val = new Number(document.getElementById(id).value);
  if(val>0){
    document.getElementById(id).value=val-0.5;
  }
}
// Fonction de création des blocs de réglage des températures
function createTimeBlocs(tempValues){
  var allTimeBlocs = "";
  for (i=0;i<48;i++){
    timeBlocId = '0';
    if(i<10){timeBlocId = '00' + i;}else{timeBlocId = '0' + i;}
    timeBlocLoop  = '<div id="'+timeBlocId+'" class="timeBloc">';
    timeBlocLoop += '<div class="timePrint"><span>'+timePrint[i]+'</span></div>';
    timeBlocLoop += '<div class="tmp"><input type="number" id="tmpInp'+i+'" class="tmpInp" value="'+tempValues[i]+'" min="0" max="25.5" step="0.5" onInput="document.getElementById(\'t'+i+'\').value=this.value;updtGraph('+i+',this.value);"> °C&nbsp;</div>';
    timeBlocLoop += '<div class="timeBlocSub"><div class="moins"><a class="btn" href="#" onclick="decrementInput(\'t'+i+'\');decrementInput(\'tmpInp'+i+'\');updtGraph('+i+',document.getElementById(\'tmpInp'+i+'\').value)">-</a></div>';
    timeBlocLoop += '<input type="range" id="t'+i+'" class="t" name="t'+i+'" value="'+tempValues[i]+'" min="0" max="25.5" step="0.5" onInput="document.getElementById(\'tmpInp'+i+'\').value=this.value;updtGraph('+i+',this.value)">';
    timeBlocLoop += '<div class="plus"><a class="btn" href="#" onclick="incrementInput(\'t'+i+'\');incrementInput(\'tmpInp'+i+'\');updtGraph('+i+',document.getElementById(\'tmpInp'+i+'\').value)">+</a></div></div>';
    timeBlocLoop += '<div class="stopFloat"></div>';
    timeBlocLoop += '</div><!-- Fin du .timeBloc -->';
    allTimeBlocs += timeBlocLoop;
  }
  return allTimeBlocs;
}



// Actualisation des valeurs du graphique :
function updtGraph(id, newTemp){
  tempValues[id] = newTemp;
  Chart.defaults.global.animation.duration = 0; // Durée de l'animation
  graphCreate(tempValues);
}
