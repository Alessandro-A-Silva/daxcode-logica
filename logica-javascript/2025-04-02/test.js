const prompt = require('prompt-sync')();

let maxtentativas = 5
let rad1 = parseInt(Math.random() * 5)+1;
let rad2 = parseInt(Math.random() * 50);
let rad3 = parseInt(Math.random() * 100);
let i  = 1


console.log("Seja Bem-Vindo ao Desafio Número Secreto!");

let dif = parseInt(prompt("Para inicar, escolha a dificuldade: 1 - Fácil 2 - Médio  3 - Difícil:  "));

if (dif == 1){
    let tentativa1 = parseInt(prompt("digite um numero1"))
    let tentativa2 = parseInt(prompt("digite um numero2"))
    let tentativa3 = parseInt(prompt("digite um numero3"))
    let tentativa4 = parseInt(prompt("digite um numero4"))
    let tentativa5 = parseInt(prompt("digite um numero5"))
    if (tentativa1 == rad1 || tentativa2 == rad1 || tentativa3 == rad1 || tentativa4 == rad1 || tentativa5 == rad1){
        console.log("parabnes certo");
    }
    else
        console.log("errado");
}
console.log(rad1);