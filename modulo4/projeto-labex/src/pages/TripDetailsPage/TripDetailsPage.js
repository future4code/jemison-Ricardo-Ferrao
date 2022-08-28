import React from "react";
import {useNavigate} from 'react-router-dom'
import {Principal, Botoes} from '../../Styles/Style'
import { useProtectedPage } from '../../hook/useProtectedPage'

export function TripDetailsPage() {
  useProtectedPage()
    
  const navigate = useNavigate()

  const goToLastPage = () => {
    navigate(-1)
  }

    return (
      <Principal>
        <h2>Ver viagens e candidatos</h2>
        <Botoes>
          <button onClick={goToLastPage}>Retornar</button>

        </Botoes>
        
      </Principal>
    );
}
