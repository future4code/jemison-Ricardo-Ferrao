//import { useState } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { HomePageContainer } from "./styles";


export function Homepage (props) {

    //DESESTRUTURACAO PROPS
    const { characters } = props
    const {image, name, species, query, orderParam} = props.states
    const {handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam} =props.handlers
    const {addCharacter } = props
    const {removeCharacter} = props



    //Estados para salvar os inputs
    //Estados transferidos para o App.js
    /*
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [species, setSpecies] = useState("")
    */

    //RENDERIZANDO A LISTA
    const renderList = characters
    .filter(char => query === "" || char.name.toLowerCase().includes(query))
    .sort((a, b) => orderParam === "" || orderParam === "asc" && a.name > b.name ? 1 : -1)
    .sort((a, b) => orderParam === "" || orderParam === "desc" && a.name < b.name ? 1 : -1)


    
    .map(char => {
        return (

            <Card key={char.id}
            id={char.id}
            img={char.image}
            name={char.name}
            species={char.species}
            removeCharacter={removeCharacter}

            />
        )
    })

    //Funções para captar os inputs/
    //Funções transferidas para o App.js
    /*
    const handleInputImage = (event) => setImage(event.target.value)
    const handleInputName = (event) => setName(event.target.value)
    const handleInputSpecies = (event) => setSpecies(event.target.value)
    */


    return (
        <>
            <Header />
            
            <HomePageContainer>

            <aside>
                {/*Criamos os formulários e inputs*/}
                <form>
                    <label htmlFor="image">Imagem:</label>
                    <input 
                    type="text" 
                    id="image"
                    onChange={handleInputImage}
                    value={image}
                    />

                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name"
                    onChange={handleInputName}
                    value={name}
                    />

                    <label htmlFor="species">Especie:</label>
                    <input 
                    type="text" 
                    id="species"
                    onChange={handleInputSpecies}
                    value={species}
                    />

                    <button onClick={addCharacter}>Cria</button>

                    <h2>Busca</h2>
                    <input 
                        type="text" 
                        value={query}
                        onChange={handleInputQuery}
                    />

                    <h2>Ordenar</h2>
                    <select 
                        name="" 
                        id="" 
                        value={orderParam}
                        onChange={handleInputOrderParam}
                        >
                            <option value="asc">Crescente</option>
                            <option value="desc">Decrescente</option>


                    </select>


                </form>
            </aside>

            

            <main>
                {renderList}
            </main>

            </HomePageContainer>
        </>
    )
}
