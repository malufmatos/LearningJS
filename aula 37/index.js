// For in -> lê os índices ou chaves do objeto

const pessoa = {
  nome: 'Maria',
  sobrenome: 'Matos',
  idade: 20
};

for(let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// for(let i in frutas) {
//     console.log(frutas);
// }

// for(let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
