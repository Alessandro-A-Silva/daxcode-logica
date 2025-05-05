const prompt = require('prompt-sync')();

let hamburguer = 15;
let pizza = 25;
let suco = 8;
let refrigerante = 6;

let menuEnable = true;

while(menuEnable){
    let codigoProduto = prompt("Cardápio de lanchonete: 1-Hambúrguer 2-Pizza 3-Suco 4-Refrigerante Digite o codigo: ");
    switch(true){
        case codigoProduto  === '1': 
            console.log(`R$ ${hamburguer.toFixed(2)}`);
            break;
        case codigoProduto === '2': 
            console.log(`R$ ${pizza.toFixed(2)}`);
            break;
        case codigoProduto === '3': 
            console.log(`R$ ${suco.toFixed(2)}`);
            break;
        case codigoProduto === '4': 
            console.log(`R$ ${refrigerante.toFixed(2)}`);
            break;
        default:
            console.log(`Codigo invalido!`);
            false;
    }
   
    let continuar = prompt("Deseja continuar? sim/nao: ");
    if(continuar === "nao")
        menuEnable = false;
}
