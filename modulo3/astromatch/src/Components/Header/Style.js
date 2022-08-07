import styled from 'styled-components';

export const Cabecalho = styled.header`
    display: flex;
    align-content: center;
    justify-content: space-between;

    
    margin-top:10px;


.TextoLogo{
    text-align: center;
    display:flex;
    font-size: 5vw;
    
}

.logoAstromatch{
    color:white;
    margin-top:15px;  
    margin-right:0;
}

.logoAstromatch2{
    
    margin-top:15px;  
    margin-left:0;
}

img{
    object-fit:contain;
    margin-top:2vw;
}
.icone{
    align-items: center;
    color: #60ecd5;

}
`

export const Foto = styled.img`
    width: 100%;
`




export default  Cabecalho;