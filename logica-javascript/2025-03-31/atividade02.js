const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Informe o valor de A: "));
let b = parseFloat(prompt("Informe o valor de B: "));
let c = parseFloat(prompt("Informe o valor de C: "));

let triangulo = a * c / 2;
let circulo = Math.PI * Math.pow(c,2);
let trapezio = (a + b) * c / 2;
let quadrado = Math.pow(b,2);
let retangulo = a * b;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);