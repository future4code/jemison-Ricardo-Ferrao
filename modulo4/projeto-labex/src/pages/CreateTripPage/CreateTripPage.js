import React from "react";
import {useNavigate} from 'react-router-dom'
import {Principal, Botoes} from './styles'

export function CreateTripPage() {
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <Principal>
        <h2>Criar uma nova viagem</h2> 
        <Botoes>
          <button onClick={goToLastPage}>Retornar</button>
        </Botoes>
        
      </Principal>
    );
}

