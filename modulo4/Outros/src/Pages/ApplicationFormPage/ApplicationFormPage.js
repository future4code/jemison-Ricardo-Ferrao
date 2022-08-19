import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Botoes, Principal, Titulo } from "../HomePage/HomePageStyled";
import { Formulario, InputContainer, InputStyled, SelectStyled } from "./ApplicationFormPageStyled";
// import { URL } from "../../constants/Url";

function ApplicationFormPage () {
    const navigate = useNavigate();

    

    const voltar = () =>{
        navigate(-1)
    }
    
    

    const [body, onChange] = useForm({name: "", age: "", profession: "", description: "", country: ""})

    return (

        <Principal>
            <Titulo>Se candidate para uma viagem</Titulo>
            <Formulario>

                <SelectStyled>
                    <select>
                        <option selected>Escolha sua viagem</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </SelectStyled>
               
               <InputContainer>
                    <label htmlFor="name">
                        Nome:
                        <InputStyled
                            id="name"
                            name="name"
                            type="text" 
                            value={body.name}
                            onChange={onChange}
                            pattern="(?=^.{5,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$" title="digite um nome válido"
                            required
                        />
                    </label>
                </InputContainer>

                <InputContainer>
                    <label htmlFor="age">
                        Idade:
                        <InputStyled
                            id="age"
                            name="age"
                            value={body.age}
                            onChange={onChange}
                            required
                        />
                    </label>
                </InputContainer>
                
                <InputContainer>
                    <label htmlFor="profession">
                        Profissão:
                        <InputStyled
                            id="profession"
                            name="profession"
                            type="text"
                            value={body.profession}
                            onChange={onChange}

                        />
                    
                    </label>
                </InputContainer>

               
                <InputContainer>
                    <label htmlFor="description">
                        Descrição:
                        <InputStyled
                            id="description"
                            name="description"
                            type="text"
                            pattern="^.{3,}"
                            value={body.description}
                            onChange={onChange}
                        />
                    </label>
                </InputContainer>

                <SelectStyled> 
                    <select>
                        <option selected>Escolha um país</option>
                        <option>1</option>
                        <option>2</option>
                    </select>

                </SelectStyled>


            <Botoes>
                <button onClick={voltar}>voltar</button>
                <button>enviar</button>
            </Botoes>
            </Formulario>
        </Principal>  
    )
}

export default ApplicationFormPage;