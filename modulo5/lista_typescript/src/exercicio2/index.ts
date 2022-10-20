const tipoParametro = (dado: any) => {
    const tipo = typeof dado //verifica o tipo de dado
    return `O tipo de parâmetro -> ${dado} é ${tipo}`
}

console.log(tipoParametro(10))