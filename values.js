// https://openclassrooms.com/courses/ajax-et-l-echange-de-donnees-en-javascript/l-objet-xmlhttprequest-1
function getXMLHttpRequest() {
  var xhr = null;
  if (window.XMLHttpRequest || window.ActiveXObject) {
    if (window.ActiveXObject) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    } else {
      xhr = new XMLHttpRequest();
    }
  } else {
    alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
    return null;
  }
  return xhr;
}
var xhr = getXMLHttpRequest();
var allValues = "";
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
    allValues = xhr.responseText;
    // console.log(allValues);
  }
};
var loc = location;
loc += "admin/d";
// loc += "/admin/d.php";
xhr.open("POST", loc, false); // GET ou POST, url, asynchrone ?
xhr.send(null);





/*function getData ()
{
  load("microajax.js","js", function()
  {
    var str = "/admin/prog?p=";
    str +=  location.search.split('p=')[1]
    setValues( str );
  });
}
function load(e,t,n){if("js"==t){var a=document.createElement("script");a.src=e,a.type="text/javascript",a.async=!1,a.onload=function(){n()},document.getElementsByTagName("head")[0].appendChild(a)}else if("css"==t){var a=document.createElement("link");a.href=e,a.rel="stylesheet",a.type="text/css",a.async=!1,a.onload=function(){n()},document.getElementsByTagName("head")[0].appendChild(a)}}

*/




// Dernier
// var allValues = "22.80,21.00,2,1,0,2,sdbnode,wrtiot,ceciestmaclef,,pool.ntp.org,1|00.0,01.0,02.0,03.0,04.0,05.0,07.0,09.0,11.0,13.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,25.5,16.0,18.0,20.0,14.0,12.0,10.0,08.0,06.0,04.0,02.0,00.0,00.5,05.0,07.0,15.0,17.0,19.0,21.0,23.0,24.0,24.5,25.0,25.5,25.0,24.5,24.0|5|16/12/2016 09:30:30";
var valuesSplit = allValues.split('|');

// Données programmation :
confValues = valuesSplit[0].split(',');// array de string pour la config arduino
// console.log(confValues);

// Températures de chaque demie-heure :
tempValues = valuesSplit[1].split(',');// array de string pour les t°
for (i=0;i<48; i++){ // Consersion des t° string en float :
  tempValues.push(parseFloat(tempValues[i]));
}
// console.log(tempValues);

// Jour de la semaine :
// dayValues = valuesSplit[2].split(',');
day = valuesSplit[2];
// console.log(day);

// Date et heure
todayDate = valuesSplit[3].split(' ')[0];
todayTime = valuesSplit[3].split(' ')[1];
// console.log(todayDate);
// console.log(todayTime);







// ARCHIVES :

/*dataJson = [
  { "id": 0 ,"timee":"0h00" , "temp":"14.0" },
  { "id": 1 ,"timee":"0h30" , "temp":"14.0" },
  { "id": 2 ,"timee":"1h00" , "temp":"14.0" },
  { "id": 3 ,"timee":"1h30" , "temp":"14.0" },
  { "id": 4 ,"timee":"2h00" , "temp":"14.0" },
  { "id": 5 ,"timee":"2h30" , "temp":"14.0" },
  { "id": 6 ,"timee":"3h00" , "temp":"14.0" },
  { "id": 7 ,"timee":"3h30" , "temp":"14.0" },
  { "id": 8 ,"timee":"4h00" , "temp":"14.0" },
  { "id": 9 ,"timee":"4h30" , "temp":"14.0" },
  { "id":10 ,"timee":"5h00" , "temp":"16.0" },
  { "id":11 ,"timee":"5h30" , "temp":"16.0" },
  { "id":12 ,"timee":"6h00" , "temp":"16.0" },
  { "id":13 ,"timee":"6h30" , "temp":"20.0" },
  { "id":14 ,"timee":"7h00" , "temp":"20.0" },
  { "id":15 ,"timee":"7h30" , "temp":"20.0" },
  { "id":16 ,"timee":"8h00" , "temp":"20.0" },
  { "id":17 ,"timee":"8h30" , "temp":"20.0" },
  { "id":18 ,"timee":"9h00" , "temp":"16.0" },
  { "id":19 ,"timee":"9h30" , "temp":"16.0" },
  { "id":20 ,"timee":"10h00", "temp":"16.0" },
  { "id":21 ,"timee":"10h30", "temp":"16.0" },
  { "id":22 ,"timee":"11h00", "temp":"16.0" },
  { "id":23 ,"timee":"11h30", "temp":"16.0" },
  { "id":24 ,"timee":"12h00", "temp":"16.0" },
  { "id":25 ,"timee":"12h30", "temp":"16.0" },
  { "id":26 ,"timee":"13h00", "temp":"16.0" },
  { "id":27 ,"timee":"13h30", "temp":"16.0" },
  { "id":28 ,"timee":"14h00", "temp":"16.0" },
  { "id":29 ,"timee":"14h30", "temp":"16.0" },
  { "id":30 ,"timee":"15h00", "temp":"16.0" },
  { "id":31 ,"timee":"15h30", "temp":"16.0" },
  { "id":32 ,"timee":"16h00", "temp":"16.0" },
  { "id":33 ,"timee":"16h30", "temp":"16.0" },
  { "id":34 ,"timee":"17h00", "temp":"16.0" },
  { "id":35 ,"timee":"17h30", "temp":"20.0" },
  { "id":36 ,"timee":"18h00", "temp":"20.0" },
  { "id":37 ,"timee":"18h30", "temp":"20.0" },
  { "id":38 ,"timee":"19h00", "temp":"20.0" },
  { "id":39 ,"timee":"19h30", "temp":"20.0" },
  { "id":40 ,"timee":"20h00", "temp":"20.0" },
  { "id":41 ,"timee":"20h30", "temp":"20.0" },
  { "id":42 ,"timee":"21h00", "temp":"20.0" },
  { "id":43 ,"timee":"21h30", "temp":"20.0" },
  { "id":44 ,"timee":"22h00", "temp":"20.0" },
  { "id":45 ,"timee":"22h30", "temp":"20.0" },
  { "id":46 ,"timee":"23h00", "temp":"18.0" },
  { "id":47 ,"timee":"23h30", "temp":"16.0" }
];*/

