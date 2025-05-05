const prompt = require('prompt-sync')();

//funcao que mostra mensagem
function mensagem(msg){
    console.log(msg);
}

//funcao que retorna a soma de dois numeros
function soma(a,b){
    return a+b;
}

//chamando as funcoes criadas anteriormente
mensagem(soma(20,30));

//arrow function (funcao em flecha) que mostra mensagem
const arrowMensagem = (msg) => {
    console.log(msg)
}

//arrow function que retorna a soma de dois numeros
const arrowSoma = (a,b) => a + b;

arrowMensagem(arrowSoma(5,10));
