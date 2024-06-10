// String, number, undefined, null, boolean, symbol
const nome1 = 'Maria'; //string
const nome2 = "Luiza"; //string
const nome3 = `Matos`; //string
const num1 = 10; //numer int
const num2 = 10.52; //number float
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória 
const aprovado = true; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a,b); // 3, 2