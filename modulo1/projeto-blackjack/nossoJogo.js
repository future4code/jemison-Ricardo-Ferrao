/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/*
console.log("Boas vindas ao jogo de Blackjack!")
returnRodada()
function rodadaBlackjack() {

   if (confirm("Vamos iniciar uma nova Rodada?")) {
      console.log("Distribuindo as cartas........")

      const carta1Usuario = comprarCarta()
      const carta2Usuario = comprarCarta()

      const carta1Computador = comprarCarta()
      const carta2Computador = comprarCarta()


      let resultadoUsuario = (carta1Usuario.valor) + (carta2Usuario.valor)
      let resultadoComputador = (carta1Computador.valor) + (carta2Computador.valor)

      console.log("Cartas do Usuário:", carta1Usuario.texto, carta2Usuario.texto, "- Pontuação ", resultadoUsuario)
      console.log("Cartas do Computador:", carta1Computador.texto, carta2Computador.texto, "- Pontuação", resultadoComputador)



      if (resultadoUsuario === 21) {
         console.log("BLACKJACK!!! Você GANHOU!!!!")
      } else if (resultadoUsuario > 21) {
         console.log("VOCÊ PERDEU!!!!! Extrapolou a pontuação, o COMPUTADOR ganhou!")
      } else if (resultadoComputador > 21) {
         console.log("COMPUTADOR PERDEU!!!! Extrapolou a pontuação, VOCÊ ganhou!")
      } else if (resultadoUsuario > resultadoComputador) {
         console.log("VOCÊ GANHOU!!!!")
      } else if (resultadoUsuario < resultadoComputador) {
         console.log("O COMPUTADOR GANHOU!!!!")
      } else if (resultadoUsuario === resultadoComputador) {
         console.log("E M P A T E !!!!!")
      }
      return true

   } else {
      console.log("A RODADA ACABOU!!!!")
      return false
   }
}

function returnRodada () {
   let usuarioQuerJogar = true
   while (usuarioQuerJogar) {
      usuarioQuerJogar = rodadaBlackjack()
   }
   console.log("O JOGO ACABOU!!!!!")
}
*/