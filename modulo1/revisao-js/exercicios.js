// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
 
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse(array)
  

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){ return a > b; })
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = []

    for(let i=0; i < array.length; i++){

        if(array[i] % 2 == 0){

        arrayPar.push(array[i])
        }
        
    }
return arrayPar

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((item) => {
        return item % 2 === 0
    })
    const resultado = numerosPares.map((item2) => {
        return item2 * item2
    })
 return resultado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i = 0; i < array.length; i++) {
      if(array[i] > maiorNumero) {
        maiorNumero = array[i]
      }
    }
  return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    if (num1 > num2){
        maiorNumero = num1
    }else {(num2 > num1)
        maiorNumero = num2
    return maiorNumero
    }


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
        return 'Equilátero'
    }else if (ladoA === ladoB && ladoA !== ladoC) {
        return 'Isósceles'
    }else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return 'Escaleno'
    
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((item) => {
        return (item.idade > 14 && item.idade < 60 && item.altura > 1.5)
    })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((item) => {
        return (item.idade <= 14 || item.idade > 60 || item.altura < 1.5)
    })
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let pago = {
        ...contas,
        compras: Reduce(function(soma, i) {return soma + i})
    }
    let total = {
        ...pago,
        saldoTotal: total - compras
    }
    return saldoTotal
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a,b) => {
        if (a.nome < b.nome){
            return -1
        }else {return true}
    })
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

   
}