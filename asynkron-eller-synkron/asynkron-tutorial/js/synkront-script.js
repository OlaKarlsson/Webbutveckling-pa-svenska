/*/////////////////////////////////////////////////////////

Demonstration av synkron kod med Promise av Ola Karlsson
http://www.olakarlsson.com, @o_k

/////////////////////////////////////////////////////////*/


//I synkron programmering utförs allt i ordning och gör man ett anrop till en 
//funtion någon annanstans i koden, så väntas det inte på att svaret ska komma tillbaka utan saker går vidare ändå.


//Gör ett anrop till getName funktionen och sätt in svaret i variabeln name
var name = getName();

//Skriv ut värdet i variabeln name
console.log(name);

//Skriv sedan ut något annat, lägg märke till att saker händer i den ordning de ligger i koden
console.log("Kod som kommer efter att anropet till getName");

//Här är en funktion som har en fördröjning för att låtsas att man gör ett anrop till en webbtjänst 
//eller en databas för att hämta användarens namn och att det tar lite tid
function getName(){
    
    setTimeout(function(){
        //Efter en 2 sekunder (2000 millisekunder)
        return "Jan Svensson"
    }, 2000);
    
}