import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Principal, Botoes} from '../../Style'
import { Formulario, InputContainer, InputStyled } from '../../Style';
import {useProtectedPage} from '../../hook/useProtectedPage'
import useForm from '../../hook/useForm'
import { URL } from '../../constants/Url'
import { ListPlanets } from '../../constants/Planets'

export function CreateTripPage() {
  useProtectedPage()
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

  const [form, onChange] = useForm({
    name: "",
    date: "",
    description: "",
    durationInDays: Number(null),
    planet: ""
  })

    const createTrip = (e) => {
      e.preventDefault();
    const body = {
      name: form.name,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
      planet: form.planet
    }

    const headers = {
      "content-type": "application/json",
      auth: localStorage.getItem("token")
    }
    
    axios.post(`${URL}/trips`, body, headers)
      .then((response) => {alert('Viagem criada!')})
      .catch((error) => {console.log(error)})
}



    return (
      <Principal>
        <h2>Criar uma nova viagem</h2> 

        <Formulario onSubmit={createTrip}>
          <InputContainer >
            <label htmlFor="name">
              <InputStyled 
                id="name"
                placeholder='Nome'
                name="name"
                type="text" 
                value={form.name}
                onChange={onChange}
                pattern={"^.{10,}"}
                required
              />
            </label>
          </InputContainer>

          <InputContainer >
            <label  name="date" htmlFor="date">
              <InputStyled 
                id="date"
                name="date"
                type="date" 
                onChange={onChange}
                required
              />
            </label>
          </InputContainer>

          <InputContainer >
            <label htmlFor="description">
              <InputStyled 
                id="description"
                placeholder='Descrição da viagem'
                name="description"
                type="text" 
                value={form.description}
                onChange={onChange}
                required
              />
            </label>
          </InputContainer>

          <InputContainer >
            <label htmlFor="durationInDays">
              Duração
              <InputStyled 
                placeholder='Duração em dias'
                id="durationInDays"
                name="durationInDays"
                type="text" 
                value={form.durationInDays}
                onChange={onChange}
                required
              />
              </label>
          </InputContainer>

          <select name="Planet" onChange={onChange}>
            {ListPlanets}
          </select>
             
         <Botoes>
            <button>criar</button>
            <button onClick={goToLastPage}>Retornar</button>
          </Botoes>

        </Formulario>
        
      </Principal>
    );
}

