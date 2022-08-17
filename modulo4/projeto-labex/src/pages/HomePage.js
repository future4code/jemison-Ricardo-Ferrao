import React from "react";
import {useNavigate} from "react-router-dom";
import {Botoes, Principal, Titulo} from '../Styles/HomePageStyled'
import useCapturarViagens from '../hook/useCapturarViagens';


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
        <Titulo>Labe X</Titulo>
          <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p> 
          <Botoes>
            <button onClick={goToLista}>Lista de viagens</button>
            <button onClick={goToLogin}>Área Administrativa</button>
          </Botoes>

      </Principal>
    )
  }
