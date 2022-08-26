import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Botoes, Principal, ListContainer } from '../../Styles/Style'
import { useRequestData } from '../../hook/useRequestData'
import { URL } from '../../constants/Url'



export function ListTripsPage() {
  const navigate = useNavigate()

  const goToForm = () => {
    navigate("/trips/application")
  }
  const goToHome = () => {
    navigate("/")
  }
  const goToLastPage = () => {
    navigate(-1)
  }

  const [tripsList, isLoading, error] = useRequestData(`${URL}/trips`)

  const listTrip = tripsList && tripsList.trips && tripsList.trips.map((usuario) => {
      return(
        <ListContainer key={usuario.id}>
          <p>{usuario.name}</p>
          <li>{usuario.planet}</li>
          <li>{usuario.description}</li>
        </ListContainer>
          
      )   
        
  })
    return (
      <Principal>
        <h2>Lista de viagens e </h2>
        <h2>inscrição de novos candidatos</h2> 
          {isLoading && <h3>Carregando Viagens...</h3>}
          {!isLoading && error && <p>Ocorreu um erro ao carregar viagens</p>}
          {!isLoading && tripsList && tripsList.trips && tripsList.trips.length > 0 && listTrip}
          {!isLoading && tripsList && tripsList.trips && tripsList.trips.length === 0 && <p>Não há viagens</p>}       
            
        <Botoes>
          <button onClick={goToForm}>Inscrição de usuários</button>
          <button onClick={goToLastPage}>Retornar</button>
          <button onClick={goToHome}>Sair</button>
        </Botoes>

      </Principal>

    );
  }
 