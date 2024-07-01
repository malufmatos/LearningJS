// Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados

// Referência (mutável) - array, object, function - Passados por referência

const a = {
    nome: 'Maria',
    sobrenome: 'Matos',
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);