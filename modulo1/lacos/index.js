//...................LAÇOS...................
//
//...Exercícios de interpretação de código...

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

//R. O código le o i e verifica se e menor do que 5 se for ele soma o um ao i e, asseguir incrementa o valor mais o i

//2. Leiaq o código e verifique:
//a. O que vai ser impresso no console

//R. O código irá mostrar todos os números maiores do que 18 na lista

//b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... 
//é suficiente? Se sim, o que poderia ser usado para fazer isso?

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

//R. O console imprimirá quatro linhas com numeros crescentes de asteriscos.



//......Exercícios de escrita de código......

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
//    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
//    c) Por fim, imprima o array com os nomes dos bichinhos no console
/*
let temPet = Number(prompt("Quantos PETs você tem?"))
let usuarioPet = 0
let qtdadePet = 0


if (temPet === 0) {
    console.log ("Que pena! Você pode adotar um pet!")

}
else {//(qtdadePet>0) 
    //qtdadePet ++
    usuarioPet = prompt("Digite os nomes dos seus amiguinhos:")
}
console.log(usuarioPet)
*/

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original')
//que é composto somente de números. Baseando-se nisso, crie uma função para 
//cada um dos itens abaixo, realizando as operações pedidas:
    
//    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
//    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
//    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
//    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
//    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let valorMaximo = 20
let valorMinimo = 140
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.
//console.log(array)
/*
for(let i=0; i<20; i++){
    console.log(array[i])
}
*/


//b.
/*
for(let i=0; i<20; i++){
    let divDez = (array[i] / 10)
    console.log(divDez)
}
*/


//c.
/*
for(let i=0; i<20; i++){
    let numPar = (array[i] % 2)

    if (numPar === 0) {
    
        console.log(array[i])   
        
    }
}
*/

/*
//d.

for(let i=0; i<20; i++){
    console.log("O elemento do índex", array[i], "é:", array[i])
}
*/


