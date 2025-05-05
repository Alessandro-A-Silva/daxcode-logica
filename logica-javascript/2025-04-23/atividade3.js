const prompt = require('prompt-sync')();

function saudacao(nome){
    console.log(`Olá, bem-vindo ${nome}!`);
}

saudacao(prompt("Informe seu nome: "));