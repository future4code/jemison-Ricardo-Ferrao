import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <p>
            <h5>{ props.item } { props.informacao }</h5>
            </p>
        </div>
    )
}

export default CardPequeno;
