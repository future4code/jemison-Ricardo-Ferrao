import React from "react";
import {useNavigate} from "react-router-dom";
import './../Styles/styleHomePage'



export function HomePage() {
    const navigate = useNavigate()

    const goToLista=() =>{
      navigate("/trips/list")
    }

    const goToLogin=() =>{
      navigate("/Login")
    }
   

    return (
      <section>
        <h1>Labe X</h1>
        <h3>Para o usuário escolher entre Área Administrativa e Lista de Viagens</h3> 
        <button onClick={goToLista}>Lista de viagens</button>
        <button onClick={goToLogin}>Área Administrativa</button>
      </section>
      
      
    );
  }
