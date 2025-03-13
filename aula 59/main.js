// Função construtura -> objetos
// Função fábrica
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){
    };

    // Atributos ou métodos públicos    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');  
    };
}

const p1 = new Pessoa('Maria', 'Matos');
const p2 = new Pessoa('João', 'Bastos');
p2.metodo();
