var name = getName();
console.log(name);

console.log("Kod som kommer efter att anropet till getUserName har hänt");



function getName(){
    
    setTimeout(function(){
        return "Jan Svensson"}, 1000);
    
}