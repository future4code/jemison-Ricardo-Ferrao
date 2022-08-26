import React from "react";
import {useNavigate} from "react-router-dom";
import {Principal, Botoes} from '../../Styles/Style'


export function HomePage() {
    const navigate = useNavigate()

    const goToLista=() =>{
      navigate("/trips/list")
    }

    const goToLogin=() =>{
      navigate("/Login")
    }
   

    return (
      <Principal>
        <h1>Labe X</h1>
          <h2>Escolha a opção desejada</h2> 
          <Botoes>
            <button onClick={goToLista}>Candidatura</button>
            <button onClick={goToLogin}>Administração</button>
          </Botoes>

      </Principal>
    )
  }
