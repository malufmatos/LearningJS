//Declaração de função (Function hoisting) -> hoisting é o içamento da função, ou seja, a função pode ser chamada antes de ser declarada
falaOi();
function falaOi(){
    console.log('Oi');
}

// First-class objects (Objetos de primeira classe) -> Funções são tratadas como dados
//Function expression
const souUmDado = function nomeDaFuncao(){
    console.log('Sou um dado.');
};
souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar a função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};
obj.falar();