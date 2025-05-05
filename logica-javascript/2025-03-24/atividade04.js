const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Informe um número: "));

if(numero >= 0 ){
    console.log(`O número ${numero} não é negativo!`);
}
else {
    console.log(`O número ${numero} é negativo!`);
}
