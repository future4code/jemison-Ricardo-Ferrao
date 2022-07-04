import React from 'react';
import logo from './img/LabZap.svg';
import styled from 'styled-components';

const Container = styled.main`
  
  height: 90vw;
  background-color: white;
  display: flex;
  justify-content: space-between;

`

const SpanEsquerdo = styled.span`
  background-color: orange;
  padding: 8vw;

`
const SpanDireito = styled.span`
  background-color: orange;
  padding: 8vw;
`

const Header = styled.header`
  text-align: center;  
`
const Footer = styled.footer`
  background-color: grey;
  text-align: center;
  font-size:  1em;
`

const Form = styled.form`
  text-align: center;
  justify-content: space-around;
`



function App() {
  return (
    <div>
      <Header>
        <img src={logo} ClassName="App-logo" alt="logo" />
      </Header>


      <Container>
        <SpanEsquerdo>
        </SpanEsquerdo>
        <SpanDireito>
        </SpanDireito>
      </Container>
      <Form>
        <div>
          <label for="nome">Remetente:</label>
          <input type="text" id="nome" />

          <label for="msg">Mensagem:</label>
          <input type="text" id="mensagem" />
	        <button type="submit">Enviar Mensagens</button>  
        </div>
      </Form>
      
      <Footer>
        Copyright Ricardo Veronezi Ferrão All rights reserved
      </Footer>
    </div>
  );
}

export default App;
