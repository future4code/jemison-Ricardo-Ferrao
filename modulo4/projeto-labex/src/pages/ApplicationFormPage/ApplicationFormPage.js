import axios from 'axios'
import React/*, {useEffect, useState}*/ from 'react';
import {useNavigate} from 'react-router-dom'
import { Formulario, /*InputContainer, InputStyled, SelectStyled*/ } from "../../Styles/Style"
import { ListCountries } from "../../constants/countries";
//import { useRequestData } from "../../hook/useRequestData"
import useForm from '../../hook/useForm'
import { Botoes, Principal } from '../../Style'

import { URL } from '../../constants/Url'



export function ApplicationFormPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

 // const [tripsS] = useRequestData(`${URL}/trips`)
    

  const [form, onChange] = useForm({
      name: "",
      age: Number(null),
      applicationText: "",
      profession: "",
      country: "",
  })

  const registerTrip = (e) =>{
      e.preventDefault();
      const body = {
          name: form.name,
          age: form.age,
          applicationText: form.applicationText,
          profession: form.profession,
          country: form.country
      }

      const headers = {
          "content-type": "application/json"
      }

      axios.post(`${URL}/trips/
      NoIFVcOiSgTKTIPVZwXS/apply`, body, headers)
      .then((response) => { alert("Viagem cadastrada!")})
      .catch((error) => {console.log(error)})
  }



/*
  const headers = {
    "content-type": "application/json",
    "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
  }

  const criarViagem = (e) => {
    e.preventDefault();
    axios.post(`${URL}:aluno/trips/:id/apply`, body, headers)
    .then((response) =>{console.log(response.data)})
    .catch((error) => {console.log(error)})
  }

  const [body, onChange] = useForm({name: "", planet: "", date:"", description: "", durationInDays: ""})
*/

    return (
      <Principal>
        <h2>Formulário de inscrição para Viagem</h2>
          <Formulario>
            <label htmlFor="name">
              Nome:
              <input 
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                pattern="(?=^.{5,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>

            <label htmlFor="age">
              Idade:
              <input
                  id="age"
                  placeholder="Idade"
                  name="age"
                  type="number"
                  value={form.age}
                  onChange={onChange}
                  required
              />
            </label>
{/*
            <label htmlFor="date">
              Data de nascimento:
              <input
                id="date"
                name="date"
                type="date"
                placeholder="idade"
                pattern="^.{3,}"
                value={form.date}
                onChange={onChange}
              />
            </label>
*/}
            <label htmlFor="description">
              Descrição:
              <input
                id="description"
                name="description"
                type="text"
                placeholder="Texto do Candidato"
                pattern="^.{30,}"
                value={form.description}
                onChange={onChange}
                required
              />
            </label>
{/*}
            <label htmlFor="durationInDays">
              Duração da viagem:
              <input
                id="durationInDays"
                name="durationInDays"
                type="number"
                placeholder="50"
                pattern="^.{3,}"
                value={body.durationInDays}
                onChange={onChange}
              />
            </label>
*/}
            <label htmlFor="profession">
              Profissão:
              <input
                  id="profession"
                  placeholder="Profissão"
                  name="profession"
                  type="text"
                  value={form.profession}
                  onChange={onChange}
                  pattern="^.{10,}"
                  title="minimum of 10 characters"
                  required
              />
              </label>
            
            <select name="country" onChange={onChange}>
              {ListCountries}
            </select>

            <Botoes>
              <button onClick={goToLastPage}>Retornar</button>
              <button type="submit" onClick={registerTrip}>Enviar</button>
            </Botoes>
        </Formulario>
      </Principal>
    )
}