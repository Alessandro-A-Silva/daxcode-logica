const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Informe a quantidade: "));

let pesoUm = 2;
let pesoDois = 3;
let pesoTres = 5;

medias = [];

for(let i = 0; i < quantidade; i++){
    let notas  = prompt("Informe as notas: ");
    let arrayNotas = notas.split(' ');

    if(arrayNotas.length == 3)
        medias.push((Number(arrayNotas[0]) * 2 + Number(arrayNotas[1]) * 3 + Number(arrayNotas[2]) * 5) / (pesoUm + pesoDois + pesoTres));
}

medias.forEach((media) => console.log(`Média: ${media.toFixed(1)}`));