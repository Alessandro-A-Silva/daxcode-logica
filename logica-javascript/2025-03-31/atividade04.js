const prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Informe o salario: "));
let imposto;

if(salario <= 2000){
    console.log("Isento!");
}
else if(salario > 2000 && salario <= 3000){
    
}
console.log(imposto)
