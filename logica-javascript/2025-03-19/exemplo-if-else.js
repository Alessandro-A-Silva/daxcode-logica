const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Informe a nota 1: "));
let nota2 = parseFloat(prompt("Informe a nota 2: "));
let nota3 = parseFloat(prompt("Informe a nota 3: "));
let media = (nota1+nota2+nota3) / 3;

let mensagem;

if(media < 5){
    mensagem = "Reprovado";
}
else if (media >= 5 && media < 7){
    mensagem = "Recuperação";
}
else{
    mensagem = "Aprovado";
}
    

console.log(`${mensagem} com media ${media.toFixed(2).replace('.',",")}`);
