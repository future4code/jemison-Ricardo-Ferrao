import React from "react";
import {useNavigate} from 'react-router-dom'


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
      <section>
        <h1>Viagens e inscrição de novos candidatos</h1> 
        <button onClick={goToForm}>Inscrição de usuários</button>
        <button onClick={goToLastPage}>Retornar</button>
        <button onClick={goToHome}>Sair</button>
      </section>

    );
  }
  