const prompt = require('prompt-sync')();

let quantidade = parseInt(prompt("Informe a quantidade: "));

let dentro = 0;
let fora = 0;

for(let i = 0; i < quantidade; i++){
    let numero = parseInt(prompt("Informe um número: "));
    numero >= 10 && numero <= 20 ? dentro ++ : fora ++;
}

console.log(`In ${dentro}`);
console.log(`Out ${fora}`);