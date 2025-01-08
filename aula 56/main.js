// IIFE-> Immediately invoked function expression 
(function(idade, peso, altura){

    const sobrenome = 'Matos';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Maria'));
    }


    falaNome();
    console.log(idade, peso, altura);
})(20, 50, 1.63);

// console.log(sobrenome); // não é possível acessar a variável sobrenome fora do escopo da função IIFE