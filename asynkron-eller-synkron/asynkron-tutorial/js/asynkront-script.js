getName().then(function(name){
    console.log(name);
})


console.log("Kod efter namnet");

function getName(){
    return new Promise(function(resolve, reject) {

      var input = prompt("Please enter your name", "John Smith");

      resolve(input);
    });
}
