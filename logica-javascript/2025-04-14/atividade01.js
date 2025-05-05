const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Informe um número: "));

if(numero > 1 && numero < 100){
    for(let i = 1; i <= Number(numero); i++){
        if(i % 2 != 0)
            console.log(i);
    }
}
