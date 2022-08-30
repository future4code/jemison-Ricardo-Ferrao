import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
:root{
    
    --white:#ebebeb;
    --cinza1:#d1d1d1;
    --cinza2:#9c9c9c;
    --cinza3:#686868;
    --cinza4:#2e2e2e;
    --black:##000000;
    --green: #0a3007;
    --yellow: #c9bb00;
    --red: #630404;
    --blue: #00294b;
}


h1{

  font-family: 'Rubik', cursiva;
  color: var(--yellow);
  font-size: 10vw;
  align-items: center;
  justify-content: center;
  

}

h2{
  font-family: 'Rubik', sans-serif;
  color: var(--white);
  font-size: 4vw;
  align-items: center;
  justify-content: center;
}

h3, h4{

  font-family: 'Rubik', cursive;
  color: var(--cinza1);

}
body{
  font-family: 'Galdeano', sans-serif;
  background: var(--white); justify-content: center;
  align-items: center;
}
`
