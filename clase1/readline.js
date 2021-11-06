const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("cual es su nombre?",function(answer){
    procesarNombre(answer)
})

function procesarNombre(nombre){
    console.log("Mucho gusto, "+nombre)
}