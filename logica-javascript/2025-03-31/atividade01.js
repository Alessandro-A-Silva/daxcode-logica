const prompt = require('prompt-sync')();

function Imprimir(produtos, opcao, quantidade){
    let produto = produtos[opcao-1];
    console.log(`==${produto[1]}==\n`+
                `Codigo do produto: ${produto[0]}\n`+
                `Quantidade: ${quantidade}\n`+
                `Valor do produto: R$ ${(produto[2]).toFixed(2)}\n`+
                `Total: R$ ${(produto[2] * quantidade).toFixed(2)}`);   
}

let produtos = [[1,"Cachorro Quente",4.00],
                [2,"X-Salada",4.50],
                [3,"X-Banco",5.00],
                [4,"Torrada simples",2.00],
                [5,"Refrigerante",1.50]];

console.log("CODIGO | ESPECIFICACAO | PRECO");

produtos.forEach((produto) => {
    console.log(`${produto[0]} | ${produto[1]} | R$ ${produto[2]}`)
})

let opcao = parseInt(prompt("DIGITE O CODIGO: "));
let quantidade = parseInt(prompt("DIGITE A QUANTIDADE: "));

switch(opcao){
    case 1:
        Imprimir(produtos,opcao,quantidade);
        break;
    case 2:
        Imprimir(produtos,opcao,quantidade);
        break;
    case 3:
        Imprimir(produtos,opcao,quantidade);
        break;
    case 4:
        Imprimir(produtos,opcao,quantidade);
        break;
    case 5:
        Imprimir(produtos,opcao,quantidade);
        break;
    default:
        console.log("Opção invalida.");
}