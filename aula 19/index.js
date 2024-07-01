// function criaPessoa (nome, sobrenome, idade){
//     return { nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Maria', 'Matos', 19);
// const pessoa2 = criaPessoa('João', 'Matos', 14);
// const pessoa3 = criaPessoa('Vagner', 'Matos', 53);
// const pessoa4 = criaPessoa('Gisela', 'Matos', 45);
// const pessoa5 = criaPessoa('João', 'Bastos', 22);

// console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Maria',
    sobrenome: 'Matos',
    idade: 19,

    fala (){
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();