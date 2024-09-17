const pessoa = {
    nome: 'Maria',
    sobrenome: 'Matos',
    idade: 20,
    endereco: {
        rua: 'Rua dos bobos',
        numero: 0
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto); // Maria { idade: 20, endereco: { rua: 'Rua dos bobos', numero: 0 } }