const pessoa = {
    nome: "Alessandro",
    idade: 27,
    cidade: "Salvador"
}

for(let chave in pessoa){
    //console.log(chave);
    console.log(chave,":",pessoa[chave]);
}