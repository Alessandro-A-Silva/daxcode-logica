const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Informe a idade: "));

switch(true){
    case idade < 12:
        console.log("Criança!");
        break;
    case idade >= 12 && idade <= 17:
        console.log("Adolescente!");
        break;
    case idade >= 18 && idade <= 59:
        console.log("Adulto!");
        break;
    case idade >= 60:
        console.log("Idoso!");
        break;
    default:
        console.log("Idade não é valida!");
}