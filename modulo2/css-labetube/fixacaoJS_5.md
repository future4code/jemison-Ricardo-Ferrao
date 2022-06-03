Surge
truthful-religion.surge.sh


function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
 
    let nomeDeAnimais = animais.map((animais, indice, array) => {
      return animais.nome
    })
      return nomeDeAnimais

}



