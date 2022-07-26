import React from "react";
import { ListaTarefas } from "../Style";
const ListaDeTarefas=(props)=>{
    const componentsTarefas=props.myTarefas.map((item,index)=>{
        return <li key={index}>{item.texto}</li>
    })
    return(
        <ListaTarefas>
            {componentsTarefas}
        </ListaTarefas>
    )
}
export default ListaDeTarefas;