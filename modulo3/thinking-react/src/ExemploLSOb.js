import React, {useState} from "react";


const ExemploLSOb=()=>{

    const [listObjeto, setListObjeto] = useState([
        { nome: "nome 1", valor: "valor 1" },
        { nome: "nome 2", valor: "valor 2" },
        { nome: "nome 3", valor: "valor 3" },
    ])

    localStorage.setItem("carrinho",JSON.stringify(listObjeto))
    const retornoDoStorage=localStorage.getItem("carrinho")
    const listaObjetoRetornados=JSON.parse(retornoDoStorage)

    console.log(listaObjetoRetornados);


return(
    <></>
)

}   
export default ExemploLSOb;