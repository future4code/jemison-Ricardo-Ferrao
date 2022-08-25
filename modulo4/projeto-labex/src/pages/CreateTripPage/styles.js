import styled from 'styled-components';


export const Principal = styled.div `
    background-color: #00774f;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Botoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 60px;
    flex-direction: row;
    
    button{
        padding: 6px;
        margin: 15px 10px;
        border-radius: 5px;
    }

    button:hover{
        cursor: pointer;
        background-color: #5ca06a;
    }

`
