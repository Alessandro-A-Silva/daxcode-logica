const prompt = require('prompt-sync')();

while(true){
    let input = prompt("input: ");
    let dices = [];
    if(input.length > 0){
        let arr = input.split('d');
        for(let i = 0; i < Number(arr[0]); i++){
            dices.push(Math.floor(Math.random() * Number(arr[1]) + 1));
        }
        console.log(dices);
    }
    else
        break;
}