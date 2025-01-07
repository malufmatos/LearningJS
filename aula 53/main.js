//Escopo léxico: é a capacidade de uma função lembrar do ambiente em que foi criada, mesmo que ela seja executada em outro

const nome = 'Maria';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Luiza';
    falaNome();
}
usaFalaNome(); // Maria