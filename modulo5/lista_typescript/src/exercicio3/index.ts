/*- Exercício 3
    
    Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte `ENUM` de gêneros:
*/

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror",
}
 
//Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

function retornaFilmes(
    nome: string,
    ano: number,
    gen: GENERO,
    pontuacao?: number
)
{
    const Filmes = {
        nome: nome,
        ano: ano,
        gen,
        pontuacao: pontuacao,
    }

return Filmes
}

console.log("Duna",2021,GENERO.ACAO, 74 )