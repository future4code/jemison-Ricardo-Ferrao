import React from "react";
import {useNavigate} from 'react-router-dom'


export function LoginPage() {
    const navigate = useNavigate()

    const goToHome = () => {
      navigate("/")
    }
    const goToAdmin=() =>{
      navigate("/Admin")
    }
   

    return (
      <section>
        <h1>PROJETO LABEX - LOGIN</h1> 
        <button onClick={goToHome}>Página inicial</button>
        <button onClick={goToAdmin}>Administração</button>

      </section>
      
      
    );
  }

