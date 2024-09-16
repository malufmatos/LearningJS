// ... rest, ... spread

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [primeiro, segundo, ...resto] = numeros;
// console.log(primeiro, segundo); //1 2
// console.log (resto); //[3, 4, 5, 6, 7, 8, 9, 10] 

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco, sete); //1 3 5 7

//                    0           1         2
//                 0  1  2    3  4  5    6  7  8
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); //9
// console.log(numeros[1][2]); //6
// const [,[, ,seis]] = numeros;
// console.log(seis); //6