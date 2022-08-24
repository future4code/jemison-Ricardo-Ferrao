import React from 'react';
import {useNavigate} from 'react-router-dom'
import useForm from '../../hook/useForm'
import { Botoes, Principal } from './styles'
import { Formulario } from '../../Styles/ApplicationFormPageStyled'
import axios from 'axios';
import { URL } from '../../constants/Url'



export function ApplicationFormPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

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

    return (
      <Principal>
        <h2>Formulário de inscrição para Viagem</h2>
          <Formulario >
            <label htmlFor="name">
              Nome:
              <input 
                id="name"
                name="name"
                type="text"
                placeholder="Nome"
                pattern="(?=^.{5,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$"
                value={body.name}
                onChange={onChange}
                required
              />
            </label>

            <select>
              <option value={body.planet}>Marte</option>
              <option value={body.planet}>Jupter</option>
              <option value={body.planet}>Saturno</option>
              <option value={body.planet}>Urano</option>
            </select>

            <label htmlFor="date">
              Data de nascimento:
              <input
                id="date"
                name="date"
                type="date"
                placeholder="idade"
                pattern="^.{3,}"
                value={body.date}
                onChange={onChange}
              />
            </label>

            <label htmlFor="description">
              Descrição:
              <input
                id="description"
                name="description"
                type="text"
                placeholder="insira sua história"
                pattern="^.{3,}"
                value={body.description}
                onChange={onChange}
              />
            </label>

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

            <Botoes>
              <button onClick={goToLastPage}>Retornar</button>
              <button onClick={criarViagem}>enviar</button>
            </Botoes>
          </Formulario>
      </Principal>
    )
}