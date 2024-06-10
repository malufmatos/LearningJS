/*
Maria Luiza Matos tem 19 anos, pesa 50kg
tem 1.63 de altura e seu IMC é de 18.82
Maria Luiza nasceu em 2004
*/

const nome = 'Maria Luiza';
const sobrenome = 'Matos';
const idade = 20;
const peso = 50;
const alturaEmM = 1.63;
let indiceMassaCorporal; //peso / (altura)^2
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)