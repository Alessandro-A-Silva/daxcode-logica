const prompt = require('prompt-sync')();

function calculaMedia(nota1,nota2,nota3){
    return (nota1+nota2+nota3)/3;
}

function verificaAprovacao(media){
    if(media >= 6)
        console.log(`Aprovado com média: ${media}`);
    else
        console.log(`Reprovado com média: ${media}`);
}

let nota1 = Number(prompt("Informe a primeira nota: "));
let nota2 = Number(prompt("Informe a segunda nota: "));
let nota3 = Number(prompt("Informe a terceira nota: "));

verificaAprovacao(calculaMedia(nota1,nota2,nota3));