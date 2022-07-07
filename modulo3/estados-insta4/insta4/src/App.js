import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const Card = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 10px;

  .coral {
    color: coral;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    background-color: lightsalmon;
  }
`
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 20%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: lightsalmon;
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
`

function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputIdade, setInputIdade] = useState("")
  const [pessoas, setPessoas] = useState([
  
//  const Pessoas = [
    {
      nomeUsuario:'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
    
    {
      nomeUsuario:'jaime',
      fotoUsuario:'https://picsum.photos/52/52',
      fotoPost:'https://picsum.photos/100/50'
    },

    { 
      nomeUsuario: 'Lucas',
      fotoUsuario:'https://picsum.photos/54/54',
      fotoPost:'https://picsum.photos/300/250'
    }
  ]
  )
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputIdade = (e) => {
    setInputIdade(e.target.value)
  }

  const addPessoa = (e) => {
    e.preventDefault();

    const novaPessoa = {nome: inputNome, idade: inputIdade}
    const novaListaDePessoas = [...pessoas, novaPessoa]
    setPessoas(novaListaDePessoas)
  }
                     
  const listaDePessoas = pessoas.map((pessoa, index) => {
  
    const deletarPessoa = () => {
      const novaListaDePessoas = [...pessoas]
      const deletar = novaListaDePessoas.findIndex((pessoaExcluida) => {
        return pessoaExcluida === pessoa
      })
      novaListaDePessoas.splice(deletar, 1)
      setPessoas(novaListaDePessoas)
    }

    return (
      <Card key={index}>
        <p>{pessoa.nome}</p> 
        <p className='coral'>{pessoa.idade}</p>
        <button onClick={deletarPessoa}>X</button>
      </Card>
    )
  })

  return (
    <main>
      <Form>
        <label>Nome:</label>
        <input
          placeholder='Insira um nome'
          value={inputNome}
          onChange={handleInputNome}
        />
        
        <label>Idade:</label>
        <input
          placeholder='Insira uma idade'
          value={inputIdade}
          onChange={handleInputIdade}
        />
        <button onClick={addPessoa}>Adicionar</button>
      </Form>
      {listaDePessoas}
    </main>
  )
}

export default App;

