import styled from 'styled-components';

    export const CardContainer= styled.div`
    border:1px solid var(--black);
    background-color: #ffe3e3;
    display: flex;
    flex-direction:column;
    text-align: center;
    color: var(--dark);
    width: 50vw;
    height: 50vw;
    justify-content: center;
    align-items: center;
    margin-top:5vw;
    border-radius:10vw;
    padding: 1vw;
    font-family: Arial;
    font-size: 2vw;
    word-wrap: break-word;
        
    .botoesContainer{
        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
   
}
.botao1{
    color:red;
    width:60px;
    padding:0;
}  

.botao2{
    color: #000000;
}

.botao3{
    color: #6140d8;

}

img{
    height:30vh;
    border-radius:500px;
    margin-top:10px;
}
`
export default CardContainer;