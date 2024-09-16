const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

// let nome = 'Luiz'; //criando
// var nome2 = 'Luiz'; //criando

// if (verdadeira){
//     let nome = 'Otávio'; //criando
//     var nome2 = 'Rogério'; //redeclarando

//     if(verdadeira){
//         var nome2 = 'Ronaldo'; //redeclarando
//         let nome = 'Outra coisa'; 
//     }
// }

// console.log(nome, nome2); //Luiz Ronaldo pois var não tem escopo de bloco

// function falaOi(){
//     if(verdadeira){
//         let nome = 'Luiz';
//         var sobrenome = 'Miranda';
//     }
//     console.log(nome, sobrenome);
// }

// falaOi(); //Erro nome is not defined pois let tem escopo de bloco e var não

console.log(sobrenome); 
let sobrenome = 'Miranda'; //Erro sobrenome is not defined pois let não tem hoisting

console.log(nome);
var nome = 'Luiz' //undefined pois var tem hoisting