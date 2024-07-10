/*
&& -> false && true -> false "o mesmo valor"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

const a = 0;
const b = null;
const c = false;
const d = 'maria';
const e = NaN;

console.log(a || b || c || d || e);