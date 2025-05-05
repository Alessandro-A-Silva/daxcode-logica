const prompt = require('prompt-sync')();

let horario = parseInt(prompt("Informe a hora: "));

//verifica se a hora é valida
if(horario >= 0 && horario <= 23){   
    //verifica qual periodo do dia
    if(horario >= 5 && horario <= 11){
        console.log(`Horas ${horario} periodo AM.`);
    }
    else if (horario >= 12 && horario <= 23){
        console.log(`Horas ${horario} periodo PM.`);
    }
    else {
        console.log(`Horas ${horario} periodo MADRUGADA.`)
    }
}
else{
    //mensagem caso a hora não seja valida
    console.log("Informe um hora valida.");
}