const prompt = require('prompt-sync')();

let codigo = 0;

let alcool = 0;
let gasolina = 0;
let diesel = 0 ;

while(codigo != 4){
   
    codigo = parseInt(prompt("Escolha o combustivel: 1-Alccol | 2-Gasolina | 3-Diesel | 4-Fim: "));
   
    switch(codigo){
        case 1:
            alcool++;
            break;
        case 2:
            gasolina++;
            break;
        case 3:
            diesel++;
            break;
    }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);