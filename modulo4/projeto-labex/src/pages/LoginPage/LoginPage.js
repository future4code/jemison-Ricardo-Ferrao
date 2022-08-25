import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Principal, Botoes, Formulario} from '../../Style'
import axios from 'axios'
//import { URL } from '../constants/Url'
//import useProtectedPage from '../hook/useProtectedPage'
import useForm from '../../hook/useForm'


export function LoginPage() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }
/*  
  const goToAdmin=() =>{
    navigate("/admin")
  }

/*  const entrar = () =>{
    navigate("/adm")
    axios.post(`${URL}darvas/login`, login)
    .then((response) => {console.log(response.data)})
    .catch((error) => {console.log(error)})

  }
*/  

const [loginUser, onChange] = useForm ({email: "", password: ""});

  const Logar = (e) => {
    e.preventDefault();
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",loginUser)
      .then(response => {
          localStorage.setItem("token", response.data.token)
          navigate("/admin")
      })
      .catch((error) => console.log(error.message))

  }



  return (
    <Principal>
      <h2>Login como administrador</h2> 
        <Formulario onSubmit={Logar}>
          <label htmlFor='email'>
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={loginUser.email}
              onChange={onChange}
              placeholder="meuemail@exemplo.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Insira um email válido"
              required
            />
          </label>
          <label>
            Senha:
            <input 
              id="password"
              name="password"
              type="password"
              value={loginUser.password}
              onChange={onChange}
              placeholder="********"
              pattern="^.{6,}" 
              title='Minimo de 6 caracteres'
              required
            />
          </label>
          <Botoes>
            {/*<button onClick={goToAdmin}>Entrar</button>*/}
            <button onClick={goToHome}>Sair</button>
            <button type={'submit'}>entrar</button>
            
          </Botoes>
        </Formulario>

    </Principal>
    
    
  )
}

