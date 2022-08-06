import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #000000;
        --white: #FFFFFF;
        --cinza-m: #808080;
        --cinza-c: #C0C0C0;
        --cinza-e: #303030;
        --laranja: #FF6A00;
        --amarelo: #FFD800;
        --vermelho: #FF0000;
        --azul: blue;
    }

    h1 {
        font-family: 'Oswald', cursive;
        color: var(--laranja)
    }

    h2, h3 {
        font-family: 'Inter', cursive;
        color: var(--amarelo)
    }
    body {
        font-family: 'Cairo', sans-script;
        color: var(--cinza-c);
        background: var(--azul);
        color: var(--white);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`
