const prompt = require('prompt-sync')();

let USD = 5.74;
let EUR = 5.50;
let GBP = 6.30;

let valor = parseFloat(prompt("Informe o valor em reais: "));
let moeda = prompt("Informe a moeda USD/EUR/GBP: ").toUpperCase();

switch(true){
    case "USD" === moeda:
        console.log(`R$ ${valor} equivale a ${(valor/USD).toFixed(2)} USD`);
        break;
    case "EUR" === moeda:
        console.log(`R$ ${valor} equivale a ${(valor/EUR).toFixed(2)} EUR`);
        break;
    case "GBP" === moeda:
        console.log(`R$ ${valor} equivale a ${(valor/GBP).toFixed(2)} GBP`);
        break;
    default:
        console.log(`A moeda ${moeda} não é valida!`);
}