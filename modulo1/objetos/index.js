//Exercícios de interpretação de código

/*1.
a.
Matheus Nachtergaele
Virginia Cavendish
Globo 14h
*/

/*2.
a.
Juca, 3, SRD
Juba, 3, SRD
Jubo, 3, SRD

b. Aproveita os dados do objeto acima
*/

/*3.
a.
false
undefined

b. Aconteceu pq a altura não foi definida
*/




//Exercícios de escrita de código
//1.
//a. Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
//OK
/*
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
console.log("Eu sou",pessoa.nome,", mas pode me chamar de:",pessoa.apelidos[0],",",pessoa.apelidos[1],"ou",pessoa.apelidos[2])
*/

//b. Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
/*
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}
const nPessoa ={
    nApelidos: ["Branca", "Nana", "Flor"],
    ...pessoa
}
//const nApelidos = ["Branca", "Nana", "Flor"]
//const listaNovosApelidos = [...listaApelidos]
console.log(nPessoa)
*/

//2.Resolva os passos a seguir:
//a./b.
/*
const pessoa1 = {
    nome: "José",
    idade: 34,
    profissao: "professor"
}
const pessoa2 = {
    nome: "João",
    idade: 38,
    profissao: "desenvolvedor"
}
//function fPessoa(){
    
    //console.log(pessoa1.nome, nomeTotal1 )
const nPessoa1 = pessoa1.nome.length
const nPessoa2 = pessoa2.nome.length
const nIdade1 = Number(pessoa1.idade)
const nIdade2 = Number(pessoa2.idade)
const nProfissao1 = pessoa1.profissao.length
const nProfissao2 = pessoa2.profissao.length
console.log(pessoa1.nome,",",nIdade1,",",nPessoa1,",",pessoa1.profissao,",",nProfissao1)
console.log(pessoa2.nome,",",nIdade2,",",nPessoa2,",",pessoa2.profissao,",",nProfissao2)
*/

//3. Resolva os passos a seguir: 
/*
const carrinho = []

const fruta1 = {
    nome: "Mamao",
    disponibilidade: true
}
const fruta2 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

console.log(fruta1, fruta2, fruta3)
*/

//Desafios
//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
/*
function funcaoObjeto (nome, idade, profissao) {
    const seuNome = prompt(`Informe o seu nome:`)
    const suaIdade = Number(prompt(`Qual a sua idade:`))
    const suaProfissao = prompt(`Qual a sua profissão:`)
    console.log(seuNome, suaIdade, suaProfissao)
}
const cadastro = {
    nome: "Lais",
    idade: 26,
    profissao: "Instrutora"
}
console.log(cadastro)

*/






