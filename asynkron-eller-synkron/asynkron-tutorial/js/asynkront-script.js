//Anropa functionen som ber om användarens namn genom en prompt på sidan
//använd sedan .then för att "vänta" tills resultatet kommer tillbaka
getName().then(function(name){
    //Skriv ut namnet använadaren skrev in efter det kommit tillbaka 
    console.log(name);
})


console.log("Kod som ligger efter anropet till funktionen för att hämta användarens namn");



function getName(){
    
    return new Promise(function(resolve, reject) {

       setTimeout(function(){
        resolve("Jan Svensson")}, 2000);
        
    });
    
}