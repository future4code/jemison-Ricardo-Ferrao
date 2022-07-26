import React, { useState } from "react";
import { BottaoTarefa, FormNT, InputTarefa } from "../Style";
const FormNovaTarefa=(props)=>{

    const [inputTarefa,setInputTarefa]=useState("defalt")

    const handleInput=(event)=>{
          setInputTarefa(event.target.value)
    }

    const addTarefa=(event)=>{
        event.preventDefault();
        const novoOjeto={id:"",texto:inputTarefa,status:false}
        const novasTarefas=[...props.myTarefas,novoOjeto]

        props.mudaTarefasAtuais(novasTarefas)
       setInputTarefa("")
    }
    return(
        <FormNT>
            <InputTarefa type="text" placeholder="Nova tarefa" value={inputTarefa} onChange={handleInput} />
            <BottaoTarefa onClick={addTarefa}>ADICIONAR TAREFA</BottaoTarefa>
        </FormNT>
    )

}
export default FormNovaTarefa;