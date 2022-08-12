import React from "react";
import {useNavigate} from 'react-router-dom'

export function TripDetailsPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>Ver viagem  e candidatos</h1> 
        <button onClick={goToLastPage}>Retornar</button>
      </section>
    );
}
