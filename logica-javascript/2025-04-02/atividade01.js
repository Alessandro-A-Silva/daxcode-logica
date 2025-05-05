const prompt = require('prompt-sync')();

let PIN = "2002";
let senha = "";

while(senha !== PIN){
    senha = prompt("Informe a senha: ");
    if(senha !== PIN){
        console.log("Senha Invalida");
    }
}

console.log("Acesso permitido!");