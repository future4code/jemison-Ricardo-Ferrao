import { createGlobalStyle } from "styled-components";





export const GlobalStyle= createGlobalStyle`
:root{
    
    --white:#ebebeb;
    --cinza1:#d1d1d1;
    --cinza2:#9c9c9c;
    --cinza3:#686868;
    --cinza4:#2e2e2e;
    --black:##000000;
    --green: #18810e;
    --yellow: #ccbe00;
    --red: #ff0000;
    --Blue: #0469bb;
}


h1{

  font-family: 'Rubik Dirt', cursiva;
  color: var(--green);

}
h2, h3{

  font-family: 'Rubik', cursive;
  color: var(--yellow);

}
body{
  font-family: 'Galdeano', sans-serif;
  background: var(--white); justify-content: center;
  align-items: center;
}
`