import React from "react";
import {useNavigate} from 'react-router-dom'


export function ListTripsPage() {
  const navigate = useNavigate()

  const goToForm = () => {
    navigate("/Form")
  }
  const goToHome = () => {
    navigate("/")
  }
  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>LISTAS DE VIAGENS</h1> 
        <button onClick={goToForm}>Formulário para Viagens</button>
        <button onClick={goToHome}>Sair</button>
        <button onClick={goToLastPage}>Retorne a página anterior</button>
      </section>

    );
  }
  