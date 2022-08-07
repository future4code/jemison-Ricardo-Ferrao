import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #ffcb16;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f28;
    }

    h1 {
        font-family: 'Jolly Lodger', cursive;
        color: var(--green);
    }

    h2, h3 {
        font-family: 'Staatliches', cursive;
        color: var(--deep-blue-secondary);
    }

    body {
        font-family: 'Rajdhani', cursive;
        background: var(--deep-blue);
        color: (--soft-white);

    }

    * {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
		
    }
    
`
