import styled from "styled-components"

export const Trip=styled.div`
    border:2px  darkviolet ;
    border-style: dashed;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    padding: 20px;
    width: max-content;
    border-radius: 15px;
    margin-top: 10px;
    h1{
        font-family:'Arial';
    }
    `
export const InfoTrip=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    width: max-content;
    p{
        font-weight: bold;
        margin:1px 0 1px 0;
        font-size: 15pt;
    }
    `
export const Principal=styled.div`
    width: max-content;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 3px solid blue;
    justify-content: stretch;
    align-items: center;
`
export const Formulario=styled.form`
    display: flex;
    flex-direction:column;

    margin: 0 auto;
    width: max-content;
    padding: 30px;
    border: #0a328a 3px dotted; 
    border-radius: 15px;
    label{
        font-size: 15px;
        text-align: right;
        font-weight: bold;
    }
    input{
        font-family: Arial;
        font-size: 14px;
        padding: 7px;
        border: 1px solid black;
        background: #fcfcfc;
        margin: 4px 0 4px 0;
        font-weight: bold;
        border-radius: 5px;    
    }
  
`
export const Botoes=styled.button`
        padding:10px ;
        width: 100%;
        margin-top: 2px;
        background: #51afe6;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        font-size:15px ;
        text-shadow: 1px 1px 2px black;
        :hover{
            background-color: #ace8f0;
        }
`
export const MyHeader=styled.header`
        padding:10px ;
        width: 100%;
        margin-top: 2px;
        background: #51afe6;
        font-weight: bold;
        text-transform: uppercase;
        color: white;
        font-size:15px ;
        text-shadow: 1px 1px 2px black;
        :hover{
            background-color: #ace8f0;
        }
`
export const ListContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: #b8d7f0;
    width: 300px;
    border: 1px solid #2400c4;
    height: 100px;
    overflow-y: scroll
`

export const InputStyled = styled.input`
    display: flex;
    width: 500px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    margin: 8px;
`

export const SelectStyled = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    select{
        width: 200px;
        height: 30px;
        border-radius: 10px;
    }

    select:hover{
        cursor: pointer;
        background-color: #b8d7f0;
    }
`

export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 100px;
    margin:5px;

    input:hover{
        border: 1px solid red;
    }

`
