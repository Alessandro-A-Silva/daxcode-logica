const prompt = require('prompt-sync')();

let x = parseFloat(prompt("Informe o valor de x: "));
let y = parseFloat(prompt("Informe o valor de y: "));

switch(true){
    case x === 0 && y === 0:
        console.log("ORIGEM");
        break;
    case x > 0 && y > 0:
        console.log("Q1");
        break;
    case x < 0 && y > 0:
        console.log("Q2");
        break;
    case x < 0 && y < 0:
        console.log("Q3");
        break;
    case x > 0 && y < 0:
        console.log("Q4");
        break;
    default:
        console.log("Valores de x e y são invalidos!");
}