const prompt = require('prompt-sync')();

let nota = parseInt(prompt("Informe a nota: "));

switch(true)
{
    case (nota >= 9 && nota <= 10):
        console.log("Excelente");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("Bom");
        break;
    case (nota >= 5 && nota <= 6):
        console.log("Regular");
        break;
    case (nota >= 3 && nota <= 4):
        console.log("Ruim");
        break;
    case (nota >= 0 && nota <= 2):
        console.log("Péssimo");
        break;
    default:
        console.log("Nota inválida.");
}