
import { GlobalStyle } from "./GlobalStyled";
import { Homepage } from "./Pages/Homepage/Homepage";
import { results } from "./data/data" 
import { useState } from "react";






function App() {

    //ESTADOS   
	const [characters, setCharacters] = useState(results)
	const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [species, setSpecies] = useState("")
    //Guarda a busca
    const [query, setQuery] = useState("")
    //Guarda a ordenacao
    const [orderParam, setOrderParam] = useState("")




	const handleInputImage = (event) => setImage(event.target.value)
    const handleInputName = (event) => setName(event.target.value)
    const handleInputSpecies = (event) => setSpecies(event.target.value)
    //Funcao para pegar a Query
    const handleInputQuery = (event) => setQuery(event.target.value)
    //Funcao para pegar a Ordenacao
    const handleInputOrderParam = (event) => setOrderParam(event.target.value)

    

	//FUNÇÃO DE CRIAR PERSONAGEM
	const addCharacter = (event) => {
		event.preventDefault()

		const newCaracter = {
			id: Date.now(),
			name,
			species,
			origin: {
			name: "outro"
			},
			image
		}
		const newCharacterList = [...characters, newCaracter]
		setCharacters(newCharacterList)

		//Limpar as entradas do input
		setImage("")
		setName("")
		setSpecies("")
	}

	//FUNÇÃO DE REMOVER PERSONAGEM

	const removeCharacter = (id) => {
		const filterList = characters.filter(char => {
			return char.id !== id
		})

		//Retornar lista de personagens filtrados
		setCharacters(filterList)


	}



  return (
    <div className="App">
      <GlobalStyle />
	  <Homepage 
		characters={characters}
		states={{image, name, species, query, orderParam}}
		handlers={{handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam}}
		addCharacter={addCharacter}
        removeCharacter={removeCharacter}
	  />

	  {/*button onClick={addCharacter}>Adicionar</button>*/}
      {/*<DetailsPage /> */}

    </div>
  );
}

export default App;
