import React from "react";
import {useNavigate} from 'react-router-dom'

export function CreateTripPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>Formulário para o administrador criar uma nova viagem</h1> 
        <button onClick={goToLastPage}>Retornar</button>
      </section>
    );
}

