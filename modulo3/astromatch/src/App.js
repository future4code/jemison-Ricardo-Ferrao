
import { GlobalStyle } from "./GlobalStyled";
import { Homepage } from "./Pages/Homepage/Homepage";
import { results } from "./data/data";
import { useState, useEffect } from "react";
import { DetailsPage } from "./Pages/DetailsPage/DetailsPage"






function App() {

    //ESTADOS   
	const [characters, setCharacters] = useState([])
	const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [species, setSpecies] = useState("")
    //Guarda a busca
    const [query, setQuery] = useState("")
    //Guarda a ordenacao
    const [orderParam, setOrderParam] = useState("")
	//Guarda informacao de qual pagina renderizar
	const [page, setPage] = useState("homepage")
	//Salvar o ID
	const [id, setId] = useState(0)

	useEffect(() => {
		setCharacters(results)

	}, [])
	


	//FUNCOES
	const handleInputImage = (event) => setImage(event.target.value)
    const handleInputName = (event) => setName(event.target.value)
    const handleInputSpecies = (event) => setSpecies(event.target.value)
    //Funcao para pegar a Query
    const handleInputQuery = (event) => setQuery(event.target.value)
    //Funcao para pegar a Ordenacao
    const handleInputOrderParam = (event) => setOrderParam(event.target.value)
	//Funcao para mudar o Estado da Homepage para DetailsPage
	const changePage = (page, id) =>  {
		setPage(page)
		setId(id)
	}

    

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

	//Funcao para renderizar as paginas
	const renderPage = () => {
		// eslint-disable-next-line default-case
		switch (page) {
			case 'homepage':
				return <Homepage 
						characters={characters}
						states={{image, name, species, query, orderParam}}
						handlers={{handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam}}
						addCharacter={addCharacter}
						removeCharacter={removeCharacter}
						changePage={changePage}
					/>

			case 'detailspage': 
				return <DetailsPage 
					characters={characters}
					id={id}
					changePage={changePage}
				
				/>

		}
	}



  return (
    <div className="App">
      <GlobalStyle />

	  {renderPage()}



	  {/*button onClick={addCharacter}>Adicionar</button>*/}
      {/*<DetailsPage /> */}

	

    </div>
  );
}

export default App;
