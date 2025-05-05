const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Informe um número: "));

//se o resto da divisão por 2 for igual 0 o número é par. teste de condição
//se o resto da divisão por 2 for igual 1 o número é impar. negação da primeira condição (else)
if(numero%2 == 0){
    console.log(`O número ${numero} é par!`)
}
else {
    console.log(`O número ${numero} é impar!`);
}