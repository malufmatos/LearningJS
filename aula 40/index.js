function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while(rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('###');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);

// const nome ='Maria';

// let i = 0;

// while (i < nome.lenght) {
//   console.log(i);
//   i++;
// } // 0 1 2 3 4

// console.log('Segue a vida...');
