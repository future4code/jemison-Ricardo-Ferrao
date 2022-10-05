const user = {
    name: "astrodev", //Propriedade
    login: () => {
        console.log("Usuário logado com sucesso ")
    } //Metodo
} 

//const username = user.name
//const login = user.login
//desestruturação das duas linhas acima, na linha abaixo

const { name: username, login } = user

console.log(username)
login()


//Array criado "[]"

const users = [
    {
        name: "astrodev", //Propriedade
        login: () => {
            console.log("Astrodev logado com sucesso ")
        } //Metodo

    },
    {
        name: "astrofulana", //Propriedade
        login: () => {
            console.log("Astrofulana logada com sucesso ")
        } //Metodo
    }
]

//Desestruturação Array - pode acessar as posições colocando ,

const astrofulana = users[1] // ou

//const [ , astrofulana ] = users

astrofulana.login()



