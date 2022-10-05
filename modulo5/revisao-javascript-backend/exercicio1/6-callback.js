//callback é uma funcao sendo passada como argumento para outra funcao

const imprimeTexto = (texto) => {
    console.log(texto)
}

const matriculaPessoa = (pessoa, callback) => {
    if (pessoa.idade >= 18) {
        callback("Matricula OK!")
    } else {
        callback("Idade insuficiente. Precisa ser maior de idade.")
    }
}

const fulano = {
    idade: 17
}
const ciclana = {
    idade: 20
}

matriculaPessoa(fulano, imprimeTexto)
matriculaPessoa(ciclana, imprimeTexto)