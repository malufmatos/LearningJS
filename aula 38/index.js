//For clássico- Geralmente com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, array ou strings)

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Matos',
    idade: 20
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// //            0123...
// const nomes = ['Maria', 'Luiza', 'Matos'];

// for(let i= 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// console.log('##########');

// for(let i in nomes) {
//   console.log(nomes[i]);
// }

// console.log('##########');

// for(let valor of nomes) {
//   console.log(valor);
// }

// console.log('##########');

// nomes.forEach(function(valor, indice, array) {
//   console.log(valor, indice, array);
// });