import React from "react";
import {useNavigate} from 'react-router-dom'

export function ApplicationFormPage() {
    
  const navigate = useNavigate()

/*  const goToHome = () => {
    navigate("/")
  }*/
  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>FORMULÁRIO DE VIAGEM</h1>

        {/*<button onClick={goToHome}>Página inicial</button>*/}
        <button onClick={goToLastPage}>Retorne a página anterior</button>
      </section>
    );
}