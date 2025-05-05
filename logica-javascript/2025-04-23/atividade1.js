const prompt = require('prompt-sync')();

let continuar = "";

do{
    let celsius = Number(prompt("Informe a temperatura em Celsius: "));
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(`O equivalente em Fahrenheit: ${fahrenheit}`);
    continuar = prompt("Deseja repetir (s/n)? ");
}while(continuar !== "n");