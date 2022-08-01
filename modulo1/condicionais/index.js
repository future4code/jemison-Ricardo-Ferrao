//Exercícios de interpretação de código
/*1.
a. O código pega o número informado, 
divide por dois e verifica se existe resto.
b. Quando o número for par e divizivel por 
dois imprimira "Passou no teste"
c. Quando o número não dividido por 2
restar zero o código retornará "Não passou no teste".
*/

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/


/*2.
a. O código serve para informar os valores das frutas.
b. O valor impresso no console para a fruta Maçã 2.25.
c. O codigo continuaria a ler até achar o proximo Break e reronnaria o valor = 5.

*/
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

/*3.
a. A primeira linha esta pedindo para o usuário entrar 
com um número em transformando a entrada para numérica.
b. Se o usuario entrar com 10 retornará "Esse numero 
passou no teste". Se ele digitar -10 retornará "Essa 
mensagem é secreta!!!"
c. O erro é devido a mensagem estar dentro das chaves
*/
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")}
	let mensagem = "Essa mensagem é secreta!!!"


console.log(mensagem)
*/
//1.
/*
let idadeUsuario = Number(prompt("Informe a sua idade:"))

    if(idadeUsuario > 18){
        console.log("Você pode dirigir")
    }else {
        console.log("Você não pode dirigir!")}
*/

//2.
/*
let turnoEstudo = prompt("Digite a letra equivalente ao seu turno de estudo [M-matutino] [V-vespetino] [N-noturno]")
    switch(turnoEstudo) {
        case "M":
            console.log("Bom Dia!!")
            break
        case "V":
            console.log("Boa Tarde!!")
            break
        case "N":
            console.log("Boa Noite!!")
            break
        default:
            console.log("Informe corretamente o seu turno de estudo!")
    } 
*/

//3.
/*
let cineGenero = prompt("Qual o tipo do filme?")
let cinePreco =  Number(prompt("Qual o valor do ingresso?"))

    if(cineGenero === "Fantasia" && cinePreco < 15){
        swi
        console.log("Bom Filme!!!!")
    }else {
        console.log("Escolha outro filme!!!!!")
    }
*/

//Desafios
//1
/*
let cineGenero = prompt("Qual o tipo do filme?")
let cinePreco =  Number(prompt("Qual o valor do ingresso?"))
let cineLanche = prompt("Qual o lanche vais comprar?")

    if(cineGenero === "Fantasia" && cinePreco < 15){
        switch(cineLanche){
            case "Pipoca":
                console.log("Aproveite a sua Pipoca!")
                break
            case "Chocolate":
                console.log("Aproveite o seu Chocolate!")
                break
            case "Doces":
                console.log("Aproveite os seus Doces!")
                break
            default:
                console.log("Este lanche está em falta!!!")
        }
        console.log("Bom Filme!!!!")
    }else {
        console.log("Escolha outro filme!!!!!")
    }
*/
/*
//2

let nomeUsuario = prompt("Informe o seu nome:")
let tipoJogo = prompt("Qual o tipo do jogo? [IN] INternacional ou [DO] Doméstico")
let etapaJogo = prompt("Qual a etapa queres assistir? [SF] Semi-Final, [DT] Terceiro Lugar ou [FI] Final")
let ingressos = prompt("Queres quants ingressos?")

    switch(preco){
        case ""



    }




console.log(nomeUsuario, tipoJogo, etapaJogo, ingressos)

*/


const x=2
const y=3
console.log((x+y/4)==0) || ((9/y*2)==1)




