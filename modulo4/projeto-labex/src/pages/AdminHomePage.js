import React from "react";
import {useNavigate} from 'react-router-dom'

export function AdminHomePage() {  
  
  const navigate = useNavigate()

  const goToListar=() =>{
    navigate("/admin/trips/list")
  }

  const goToCriar=() =>{
    navigate("/admin/trips/create")
  }

  const goToDet=() =>{
    navigate("/admin/trips/:id")
  }

  const goToHome = () => {
    navigate("/")
  }
  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <section>
        <h1>Lista de viagens (criar/apagar/detalhes)</h1> 
        <button onClick={goToListar}>Listar Viagens</button>
        <button onClick={goToCriar}>Criar Viagens</button>
        <button onClick={goToDet}>Ver detalhes</button>
        <button onClick={goToLastPage}>Retornar</button>
        <button onClick={goToHome}>Sair</button>
      </section>
    );
  }
