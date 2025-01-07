//Closures: habilidade que a função tem de acessar seu escopo léxico, mesmo quando a função é executada fora desse escopo

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Maria');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());