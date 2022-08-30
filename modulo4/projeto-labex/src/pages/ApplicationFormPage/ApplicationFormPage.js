import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Formulario } from "../../Styles/Style"
import { ListCountries } from "../../constants/countries"
//import { useRequestData } from "../../hook/useRequestData"
import useForm from '../../hook/useForm'
import { Botoes, Principal } from '../../Style'
import { URL } from '../../constants/Url'



export function ApplicationFormPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

 //const [tripsS] = useRequestData(`${URL}/trips`)
    

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

    return (
      <Principal>
        <h2>Formulário de inscrição para Viagem</h2>
          <Formulario onSubmit={registerTrip}>
            
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

            <label htmlFor="description">
              Descrição:
              <input
                id="description"
                name="description"
                type="text"
                placeholder="Texto do Candidato"
                pattern="^.{20,}"
                title="utilize no minimum 20 caracteres"
                value={form.description}
                onChange={onChange}
                required
              />
            </label>

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
                  title="utilize no minimum 10 caracteres"
                  required
              />
              </label>
            
            <select name="country" onChange={onChange}>
              {ListCountries}
            </select>

            <Botoes>
              <button onClick={goToLastPage}>Retornar</button>
              <button type="submit">Enviar</button>
            </Botoes>
        </Formulario>
      </Principal>
    )
}