import React from "react";
import {useNavigate} from 'react-router-dom'
import {Principal, Botoes} from '../../Style'
import { Formulario, InputContainer, InputStyled } from '../../Style';
import {useProtectedPage} from '../../hook/useProtectedPage'
import useForm from '../../hook/useForm';

export function CreateTripPage() {
  useProtectedPage()
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

  const [body, onChange] = useForm({name: "", date: "", description: "", durationInDays: ""})


    return (
      <Principal>
        <h2>Criar uma nova viagem</h2> 

        <Formulario onSubmit="">
          <InputContainer >
            <label htmlFor="name">
              Nome:
              <InputStyled 
                id="name"
                name="name"
                type="text" 
                value={body.name}
                onChange={onChange}
                required
              />
            </label>
          </InputContainer>

          {/*select com planetas*/}

          <InputContainer >
            <label htmlFor="date">
              Data
                <InputStyled 
                  id="date"
                  name="date"
                  type="date" 
                  value={''}
                  onChange={''}
                  required
                />
              </label>
          </InputContainer>

          <InputContainer >
              <label htmlFor="description">
                Descrição:
                <InputStyled 
                  id="name"
                  name="name"
                  type="text" 
                  value={''}
                  onChange={''}
                  required
                />
              </label>
          </InputContainer>

          <InputContainer >
              <label htmlFor="durationInDays">
                Duração em dias:
                <InputStyled 
                  id="durationInDays"
                  name="durationInDays"
                  type="text" 
                  value={''}
                  onChange={''}
                  required
                />
              </label>
          </InputContainer>

          <Botoes>
              <button>criar</button>
              <button onClick={goToLastPage}>Retornar</button>
          </Botoes>

        </Formulario>
        
      </Principal>
    );
}

