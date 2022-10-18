//a1
type Posts = {
    autor: string;
    texto: string;
  };
  
//a2
const posts: Posts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver",
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!",
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!",
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!",
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!",
    },
]
 
//b
  export function buscarPostsPorAutor(posts: Posts[], autorInformado: string) {
    return posts.filter((post) => {
      return post.autor === autorInformado;
    });
  }
  
/*as entradas são o array com os objetos contendo texto e autor
e uma string, com o autor do post
*/