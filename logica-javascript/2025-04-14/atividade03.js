const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Informe a quantidade: "));

let pesoUm = 2;
let pesoDois = 3;
let pesoTres = 5;

for(let i = 0; i < quantidade; i++){
    let primeiraNota = Number(prompt("Informe a primeira nota: "));
    let segundaNota = Number(prompt("Informe a segunda nota: "));
    let terceiraNota = Number(prompt("Informe a terceira nota: "));
    let mediaPonderada = ((primeiraNota  * pesoUm) + (segundaNota * pesoDois) + (terceiraNota * pesoTres)) / (pesoUm + pesoDois + pesoTres);
    console.log(`Média: ${mediaPonderada.toFixed(1)}`);
}