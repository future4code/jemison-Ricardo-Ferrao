import React from "react";
import {useNavigate} from 'react-router-dom'

export function ApplicationFormPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>Formulário de inscrição</h1>
        <button onClick={goToLastPage}>Retornar</button>
      </section>
    );
}