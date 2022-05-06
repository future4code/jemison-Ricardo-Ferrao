

  /* **Exercícios de interpretação de código**
    
  Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
 
  1a. O que vai ser impresso no console?

  R. Será impresso um array com os nome, os apelido e a posição no array

  2a. O que vai ser impresso no console?
  
  R. Será impresso um array somente com os nomes

  3a. O que vai ser impresso no console?

  R. Será impreresso um array com os nomes que não possuem o apelido CHIJO

  */

  //**Exercícios de escrita de código**

  /*Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
   realize as operações pedidas nos itens abaixo utilizando as funções de 
   array map e filter:
*/

//a. Crie um novo array que contenha apenas o nome dos doguinhos
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeBichinho = pets.map((item, index, array) => {
     return item.nome
 })
 console.log(nomeBichinho)
*/

//b. Crie um novo array apenas com os [cachorros salsicha]
/*
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const tipoSalsicha = pets.filter((item, index, array) => {
     return item.raca === "Salsicha"
 })
 console.log(tipoSalsicha)
*/

 //c. Crie um novo array que possuirá mensagens para enviar para 
 //todos os clientes que são poodles. A mensagem deve ser: 
 //"Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
/*
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const petPoodle = pets.filter((pet, indice, array ) => {
     return pet.raca === "Poodle"
 })
 console.log(petPoodle)

 const petDesconto = petPoodle.map((pet, indice, array) => {
     return pet.nome
 })

 console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", petDesconto[0], "!")
 console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", petDesconto[1], "!")
*/

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens 
//abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) Crie um novo array que contenha apenas o nome de cada item
/* ok
const produtoNome = produtos.map((produto) => {
    return produto.nome
})
console.log (produtoNome)
*/


//b) Crie um novo array que contenha um objeto com o nome e o preço de cada
// item, aplicando 5% de desconto em todos eles
//ok
/*
const produtoDesconto = produtos.map((produto) => {
    return {nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2)} 
})
console.table (produtoDesconto)
*/


//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//ok
/*
const categoriaBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log (categoriaBebidas)
*/


//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a
// palavra "Ypê"


const achaYpe = produtos.filter((produto) => {
    if (produto.nome.includes ("Ypê"))
    return produto.nome
})
//console.log(achaYpe);


//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra 
//"Ypê"

const fraseYpe = achaYpe.map((produto) => {
    return (`Compre ${produto.nome} por ${produto.preco}`)
})

console.log(fraseYpe)



//DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//pokemons.sort()
//console.log(pokemons)

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem 
//alfabética
//ok
/*
pokemons.sort(function (a, b) {
    //let a = name.toUpperCase(),
    //    b = name.toUpperCase()
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
})
//console.log(pokemons)

const somenteNome = pokemons.map((pokemon) => {
    return pokemon.nome
})
console.table (somenteNome)
console.log (somenteNome)
*/

//b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**
//ok
/*
const tipoPokemons = pokemons.map((pokemon) => {
    return pokemon.tipo
})

const semRepeticao = tipoPokemons.filter((pokemon, tipo) =>{
    return tipoPokemons.indexOf(pokemon) === tipo;
})

console.log (semRepeticao)
*/












 

