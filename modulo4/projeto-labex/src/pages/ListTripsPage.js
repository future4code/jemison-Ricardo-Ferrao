import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Botoes, Principal, Titulo } from '../Styles/HomePageStyled'


export function ListTripsPage() {
  const navigate = useNavigate()

  const goToForm = () => {
    navigate("/trips/application")
  }
  const goToHome = () => {
    navigate("/")
  }
  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <Principal>
        <Titulo>Viagens e inscrição de novos candidatos</Titulo> 
        <Botoes>
          <button onClick={goToForm}>Inscrição de usuários</button>
          <button onClick={goToLastPage}>Retornar</button>
          <button onClick={goToHome}>Sair</button>
        </Botoes>

      </Principal>

    );
  }
  