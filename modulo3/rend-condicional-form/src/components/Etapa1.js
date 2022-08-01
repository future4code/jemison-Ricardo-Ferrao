import React from "react";


import styled from 'styled-components';


const Formulario = styled.form `
    background-color: grey;
    color: whitesmoke;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 40vh;
    padding: 10px;
    margin: 25px;
    
`
export default class Etapa1 extends React.Component {
  state = {
    
  };
  render(){


    return (
        <div>
            <Formulario>
                <label for="Nome">1.Qual seu nome?</label>
                <input type="text"></input>
                <label for="Idade">2.Qual a sua idade?</label>
                <input type="number"></input>
                <label for="Email">3.Qual o seu E-Mail?</label>
                <input type="text"></input>
                <label for="escolaridade">4.Qual a sua escolaridade?</label>
                <select name="cars">
                    <option value="emi">Ensino Médio Completo</option>
                    <option value="emc">Ensino Médio Incompleto</option>
                    <option value="esi">Ensino Superior Incompleto</option>
                    <option value="esc">Ensino Superior Completo</option>
                </select>
            </Formulario>
            
        </div>

    );
  }
}

