// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  altura = prompt("Qual a altura do retângulo?")
  largura = prompt("Qual a largura do retângulo?")
  area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  //let anoAtual = 2020
  //let anoNascimento = 1990

  anoAtual = prompt("Qual o ano atual?")
  anoNascimento = prompt("Qual o seu ano de nascimento?")
  
  idadeAtual = anoAtual - anoNascimento
  
  console.log(idadeAtual)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  //peso = prompt("Qual o seu peso em Kg?")
 // altura = prompt("Qual a sua altura em metros?")
  
  imc = peso/(altura*altura)
  
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  nome = prompt("Qual o seu nome? ")
  idade = prompt("Qual a sua idade? ")
  email = prompt("Informe o seu email: ")
  
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui

  suaCor1 = prompt("Informe uma cor preferida: ")
  suaCor2 = prompt("Informe uma segunda cor preferida: ")
  suaCor3 = prompt("Informe uma terceira cor preferida: ")

  console.log(`cor1: ${suaCor1}, cor2: ${suaCor2}, cor3: ${suaCor3}`)

  //return(cor1, cor2, cor3)
  

 // console.log([cor1 + ", " + cor2 + ", " + cor3])
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  //string = "oi"
  string = string.toUpperCase()
  return string


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  vendas = custo / valorIngresso
  return vendas

  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  palavra1 = prompt(string1)
  palavra2 = prompt(string2)
  
  string = string1.lenght === string2.lenght

  return string 


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  //array = ["ola","abc"]
  return array[0]    
  //console.log(primeiro)



}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  //array = ["ola","abc"]
  return array[array.length - 1]
 // console.log(ultimo)





}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

    primeiro = array[0]
    ultimo = array[1]

    array.push(array.splice(0,1)[0])
//    array = changePosition(array, primeiro, ultimo)

   // console.log(array)



//    array.splice ([0], ultimo)
//    array.splice ([array.lenght-1], primeiro)


    //arrayPri = array[array.length - 1]
    //arrayUlt = array[0]
  
    //return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  string = string1.toUpperCase() === string2.toUpperCase()

  return string


  //string = localeCompare(string1 === string2)
  //return string
  


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  anoAtual.prompt("Qual o ano atual?")
  anoNascimento.prompt("Qual o seu ano de nascimento?")
  anoEmissao.prompt("Data de amissão da RG?")

  return anoAtual - anoNascimento <= 20
  



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}