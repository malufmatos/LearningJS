// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 100;
const nivelUsario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsario, corPadrao);


