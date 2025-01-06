// toda função posssui argumentos que sustentam todos os valores que foram passados
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta ('+', 0, 20, 30, 40, 50); 