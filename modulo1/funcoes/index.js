//Exercícios de interpretação de código

/*
1. 
a. 10
   50 
b. nada

2.
a. A função pega o texto do usuário e transforma apalavra cenoura em caixa baixa
b. 
    i.   Eu gosto de cenoura
    ii.  cenoura é bom para vista
    iii. Cenouras crescem na terra

*/

//Exercícios de escrita de código

//1.
//a."Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
/*
function meusDados (nome, idade, cidade, situacao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${situacao}.`)
}

meusDados("Ricardo", "58", "Brasília", "estudante")
*/
//b.
/*
function meusDados2 (nome, idade, endereco, profissao){

    const nome1 = prompt("Qual o seu nome?")
    const idade1 = Number(prompt("Qual a sua idade?"))
    const endereco1 = prompt("Qual o seu endereço")
    const profissao1 = prompt("Qual a sua profissão?")

    console.log(`Eu sou ${nome1}, tenho ${idade1} anos, moro em ${endereco1} e sou ${profissao1}.`)
}
meusDados2()
*/

//2. Escreva as funções explicadas abaixo:

//a.
/*
function somaNumeros (numero1, numero2){

    const num1 = Number(prompt("Qual o primeiro número?"))
    const num2 = Number(prompt("Qual o segundo número?"))
    console.log(num1+num2)
}

somaNumeros()
*/

//b.
/*
function maiorIgual (numero1, numero2){

    const num1 = Number(prompt("Qual o primeiro número?"))
    const num2 = Number(prompt("Qual o segundo número?"))
    console.log(num1>=num2)

}

maiorIgual()
*/

//c.
/*
function numeroPar (numero1){

    const num1 = Number(prompt("Informe o número a ser verificado se é par?"))
    console.log(num1 % 2 == 0)

}

numeroPar()
*/

//d.
/*
function qualTamanho (string){

    const string1 = prompt("Informe a frase a ser calculada:")
    console.log(string1.length)
}

qualTamanho()
*/

//3.

/*
const num1 = Number(prompt("Qual o primeiro número?"))
const num2 = Number(prompt("Qual o segundo número?"))
console.log(`Os numeros inseridos foram: ${num1} e ${num2}`)

function somaNumeros (numero1, numero2){
    const soma=num1+num2
    console.log("Soma: ", soma)
}
function subtraiNumeros (numero1, numero2){
    const sbtracao=num1-num2
    console.log("Diferença: ", sbtracao)
}
function multiplicaNumeros (numero1, numero2){
    const multiplica=num1*num2
    console.log("Multiplicação: ", multiplica)
}
function divideNumeros (numero1, numero2){
    const divisao=num1/num2
    console.log("Divisão: ", divisao)
}

somaNumeros()
subtraiNumeros()
multiplicaNumeros()
divideNumeros()
*/








//operaNumeros()
