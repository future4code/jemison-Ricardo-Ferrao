import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Botoes, Principal } from './styles'


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
        <h2>Lista de viagens e </h2>
        <h2>inscrição de novos candidatos</h2> 
        <Botoes>
          <button onClick={goToForm}>Inscrição de usuários</button>
          <button onClick={goToLastPage}>Retornar</button>
          <button onClick={goToHome}>Sair</button>
        </Botoes>

      </Principal>

    );
  }
  