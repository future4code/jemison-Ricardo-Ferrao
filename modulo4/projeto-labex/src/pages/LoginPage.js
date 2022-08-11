import React from "react";
import {useNavigate} from 'react-router-dom'


export function LoginPage() {
    const navigate = useNavigate()

    const goToHome = () => {
      navigate("/")
    }
    const goToAdmin=() =>{
      navigate("/admin")
    }
   

    return (
      <section>
        <h1>Login como administrador</h1> 
        <button onClick={goToAdmin}>Entrar</button>
         <button onClick={goToHome}>Sair</button>

      </section>
      
      
    );
  }

