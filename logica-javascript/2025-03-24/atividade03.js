const prompt = require('prompt-sync')();

let menuEnable = true;

while(menuEnable){
    let operacao = prompt("Informe um operação: SOMA: + | SUBTRAÇÃO: - | MULTIPLICAÇÃO: * | DIVISÃO: / | Digite a opção:");
    let numerador = parseFloat(prompt("Informe o númerador: "));
    let denominador = parseFloat(prompt("Informe o denominador: "));
    switch(true){
        case operacao === "+":
            console.log(`${numerador}+${denominador}=${(numerador+denominador)}`);
            break;
        case operacao === "-":
            console.log(`${numerador}-${denominador}=${(numerador-denominador)}`);
            break;
        case operacao === "*":
            console.log(`${numerador}*${denominador}=${(numerador*denominador)}`);
            break;
        case operacao === "/":
            if(denominador > 0 || denominador < 0)
                console.log(`${numerador}/${denominador}=${(numerador/denominador)}`);
            else
            console.log("Não é possivel fazer divisão por 0!");
            break;
        default:
            console.log("Operação invalida!");
    }
    
    let continuar = prompt("Deseja continuar? sim/nao: ");
    if(continuar === "nao")
        menuEnable = false;
}