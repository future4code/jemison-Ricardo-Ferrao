import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
//Usando ARRAY

function App() {
  
  const Pessoas = [
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

  const novoArray = Pessoas.map((item, index) =>{
    return (
      <Post key={index}
        nomeUsuario = {item.nomeUsuario}
        fotoUsuario = {item.fotoUsuario}
        fotoPost = {item.fotoPost}
      />
    )
  })
  console.log(novoArray)

  return(
    <MainContainer>
      {novoArray}
    </MainContainer>
  )
}



/*
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'jaime'}
            fotoUsuario={'https://picsum.photos/52/52'}
            fotoPost={'https://picsum.photos/100/50'}
          />
           <Post
            nomeUsuario={'Lucas'}
            fotoUsuario={'https://picsum.photos/54/54'}
            fotoPost={'https://picsum.photos/300/250'}
          />
        </MainContainer>
        
)

}
*/

export default App;
