//cria array de frutas
let frutas = ['uva','maça','goiaba'];
console.log(frutas);

//remove a ultima fruta do array
frutas.pop();
console.log(frutas);

//adiciona uma fruta no final do array
frutas.push('manga');
console.log(frutas);

//remove a primeira fruta do array
frutas.shift();
console.log(frutas);

//adiciona uma fruta no inicio do array
frutas.unshift('banana');
console.log(frutas);

//tamanho do array (quantidade de itens)
let quantidade = frutas.length;
console.log(quantidade);

//exibir array separado por virgula
console.log(frutas.toString());

//exibir array separado por algo especifico
console.log(frutas.join(" | "));
