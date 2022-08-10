import React from "react";
import {useNavigate} from "react-router-dom";



export function HomePage() {
    const navigate = useNavigate()

    const goToLista=() =>{
      navigate("/Lista")
    }

    const goToLogin=() =>{
      navigate("/Login")
    }
   

    return (
      <section>
        <h1>PROJETO LABEX - HOMEPAGE</h1> 
        <button onClick={goToLista}>Lista de Viagens</button>
        <button onClick={goToLogin}>Login Administração</button>

      </section>
      
      
    );
  }
