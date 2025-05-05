const prompt = require('prompt-sync')();

let pacientes = [];

const AdicionarPaciente = (pacientes) => {
    pacientes.push(prompt("Informe o nome do paciente que deseja adicionar: "));
    return pacientes;
}
const AtenderPaciente = (pacientes) => {
    pacientes.shift();
    return pacientes;
};
const CancelarUltimoPaciente = (pacientes) => {
    pacientes.pop();
    return pacientes;
};
const ExibirListaPacientes = (pacientes) => {
    console.log("-----LISTA DE PACIENTES-----")
    for(let i = 0; i < pacientes.length; i++){
        console.log(`${i+1}º - ${pacientes[i]}`);
    }
}

while(true){
    
    let continuar;

    console.log("------------MENU------------\n1-ADICIONAR\n2-ATENDER\n3-CANCELAR ULTIMO PACIENTE\n4-SAIR");
    let operacao = Number(prompt("OPERAÇÃO: "));
    
    switch(operacao){
        case 1:
            pacientes = AdicionarPaciente(pacientes);
            break;
        case 2:
            pacientes = AtenderPaciente(pacientes);
            break;
        case 3:
            pacientes = CancelarUltimoPaciente(pacientes);
            break;
        case 4:
            continuar = false;
            break;
        default:
            console.log("Operação invalida!");
    }

    ExibirListaPacientes(pacientes);

    if(continuar === false)
        break;
}
