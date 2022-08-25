import React from "react";
import {useNavigate} from 'react-router-dom'
import {Botoes, Principal} from '../../Style'
import { useProtectedPage } from "../../hook/useProtectedPage"


export function AdminHomePage() {  
  useProtectedPage()
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
      <Principal>
        <h2>Lista de viagens (criar/apagar/detalhes)</h2> 
        <Botoes>
          <button onClick={goToListar}>Listar Viagens</button>
          <button onClick={goToCriar}>Criar Viagens</button>
          <button onClick={goToDet}>Ver detalhes</button>
          <button onClick={goToLastPage}>Retornar</button>
          <button onClick={goToHome}>Sair</button>
        </Botoes>

      </Principal>
    );
  }
