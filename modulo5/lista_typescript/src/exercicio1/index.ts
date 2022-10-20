/*- Exercício 1
Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
*/

const usuario = (nome:string, data:string):string => {
    const newData = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${newData[0]} do mês ${newData[1]} de ano ${newData[2]}`
    
}
console.log(usuario("Ricardo", "29/10/1963"))