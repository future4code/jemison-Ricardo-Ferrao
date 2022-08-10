import React from "react";
import {useNavigate} from 'react-router-dom'

export function AdminHomePage() {  
  
  const navigate = useNavigate()

  const goToDetal=() =>{
    navigate("/Detal")
  }
  const goToCria=() =>{
    navigate("/Cria")
  }

  const goToHome = () => {
    navigate("/")
  }
  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>ADMINISTRAÇÃO</h1> 
        <button onClick={goToCria}>Cria novas viagens</button> 
        <button onClick={goToDetal}>Detalhes das viagens</button> 
        <button onClick={goToHome}>Sair</button>
        <button onClick={goToLastPage}>Retorne a página anterior</button>
      </section>
    );
  }
