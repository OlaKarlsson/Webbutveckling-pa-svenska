
document.getElementById("get-weather").addEventListener("click", getWeather, false);

function getWeather(){
  var city = "fddfdf";
  var apiKey = "6f9df3403c180587a32a512891622d5d";
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid="+apiKey;

  makeRequest(url).then(function(returnValue){
    console.log(returnValue);
  }).catch(function(error) {
    console.log('oh no', error);
  });

}


function makeRequest(url){


  //Skapa upp ett så kallat löfte, som kommer att antingen resolve om allt går bra eller reject om något går fel
  return new Promise(function(resolve, reject) {

    //Skapa ett nytt httpRequest object
    var httpRequest = new XMLHttpRequest();

    //Antopa en namngiven funktion
    //httpRequest.onreadystatechange = nameOfTheFunction;

    //Eller som här, använd en så kallad anonym funktion som körs när httpResuestens readystate ändras
    httpRequest.onreadystatechange = function(){

      if (httpRequest.readyState === XMLHttpRequest.DONE) {
          // Anropet är klart och vi har fått tillbaka data
          //Men nu måste vi kolla att allt gick ok med anropet,
          //HTTP stauskod 200 innebär att allt var ok
          if (httpRequest.status === 200) {
            //Resultatet från anropet ligget i repsonseText attributet på httpRequest objectet

            //Returnera genom att anropa resolve på löftet
            resolve(httpRequest.responseText);

          } else {
            reject("Där blev något fel: " + httpRequest.responseText);
            //Allt annat än HTTP stauskod 200, betyder att där var något problem
            //Det kan vara 404 att rusursen man sökte inte hittades
            //eller 500 som betyder att där blev något fel på serversidan
            //Här borde man ha någon kod för felhantering och kanske visa något slags felmedelande
          }
      } else {
          // inte klar än, kanske visa en laddnings indikator av något slag
      }


    }

    httpRequest.open('GET', url, true);
    httpRequest.send(null);

  });
}
