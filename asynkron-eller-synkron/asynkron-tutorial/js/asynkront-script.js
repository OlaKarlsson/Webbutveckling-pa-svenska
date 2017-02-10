/*/////////////////////////////////////////////////////////

Demonstration av asynkron kod med Promise av Ola Karlsson
http://www.olakarlsson.com, @o_k

/////////////////////////////////////////////////////////*/



//Anropa functionen som hämtar till exempel ett användarnamn
//använd sedan .then för att "vänta" tills resultatet kommer tillbaka
getName().then(function(name){
    //Skriv ut namnet efter det kommit tillbaka från funktionen som anropades 
    console.log(name);
})



/*Trots att denna kod ligger efter anropet till getName och koden som ska skriva ut namnet, kommer detta att skrivas ut först eftersom efter anropet till getName() kommer koden fortsätta, och inte blockaras, trots att resultatet från funktionsanropen inte kommit tillbaka ännu.
Det är detta som menas med att koden är Asynkron */
console.log("Kod som ligger efter anropet till funktionen för att hämta namnet");


//Här är en funktion som har en fördröjning för att låtsas att man gör ett anrop till en webbtjänst 
//eller en databas för att hämta användarens namn och att det tar lite tid
function getName(){
    //Här skickas tillbaka ett Promise (löfte) om att där kommer komma ett svar
    return new Promise(function(resolve, reject) {

        //Skapa en timer som väntar 2 sekunder
       setTimeout(function(){
        //Efter 2 sekunder(2000 millisekunder) körs denna kod
        resolve("Jan Svensson")
       },2000); 
    });
}