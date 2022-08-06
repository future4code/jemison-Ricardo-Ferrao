import { CardContainer } from "./styles";



export function Card (props) {

    const {img, name, descricao} = props


    return (
        <CardContainer>
            <img src={img} alt={name}/> 
            <h2>{name}</h2>
            <p>{descricao}</p>
        </CardContainer>
    )
}