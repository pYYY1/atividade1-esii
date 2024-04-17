const prompt = require('prompt-sync')() // Adiciona o prompt sync como requerimento.
console.log("1. Soma") 
console.log("2. Subtracao")
console.log("3. Divisao")
console.log("4. Multiplicacao")
console.log("5. Raiz Quadrada")
// Mostra as operacoes matematicas possiveis.

const input = Number(prompt("Deseja fazer que tipo de operacao matematica? ")) // Pede a operacao matematica a ser feita.
let v1, v2 // Cria duas variaveis vazias
switch(input) {
    case 1:
        [v1, v2] = recebe_numero(input);
        console.log(sum(v1, v2));
        break
    case 2:
        [v1, v2] = recebe_numero(input);
        console.log(sub(v1, v2))
        break
    case 3:
        [v1, v2] = recebe_numero(input);
        console.log(div(v1, v2))
        break
    case 4:
        [v1, v2] = recebe_numero(input);
        console.log(mult(v1, v2))
        break
    case 5:
        v1 = Number(prompt("Numero: "))
        console.log(square(v1))
        break
}
// Switch Case dependendo da operacao matematica escolhida, chama funcoes das operacoes respectivas.

// retorna o valor da soma entre os dois parâmetros
// Gustavo Py
function sum(v1, v2) {
    return v1 + v2; //Retorna a soma dos 2 numeros
}

// retorna o valor da subtração entre os dois parâmetros
// Victor
function sub(v1, v2) {
    let resultado = v1 - v2 // Cria uma variavel fazendo a subtracao de dois numeros
    return resultado // Retorna o resultado da variavel
}

// retorna o valor da divisão entre os dois parâmetros
// Rafael
function div(v1, v2) {
    if (v2 === 0) {
        return "Erro: divisão por zero";
    } else {
        return v1 / v2;
    }
}

// retorna o valor da multiplicação entre os dois parâmetros
// Everson
function mult(v1, v2) { 
    return v1 * v2;
}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
// Manu
function square(v1) {
    return Math.sqrt(v1);
}

// Pede dois numeros ao usuario para realizar as operacoes matematicas
function recebe_numero() {
    const v1 = Number(prompt("Primeiro numero: "));
    const v2 = Number(prompt("Segundo numero: "));
    return [v1, v2];
}
