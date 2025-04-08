//Factory functions // Constructor functions / Classes
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); // Congela o objeto, não permitindo alterações
}

const p1 = new Pessoa("Maria", "Matos");
delete p1.nome; // Não vai funcionar, pois o objeto está congelado
const p2 = new Pessoa("João", "Sampaio");

console.log(p1);
console.log(p2);
