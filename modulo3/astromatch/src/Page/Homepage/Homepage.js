import { Header } from "../../Components/Header/Header"
import { Card } from "../../Components/Cards/Cards"
import { Footer } from "../../Components/Footer/Footer"
import { HomePageContainer } from "./styles"


export function HomePage (props) {

    const {results} = props

    const renderList = results.map(char => {
        return <Card 
        img={char.img}
        name={char.name}
        descricao={char.descricao}
        />

    })
    return (

        <HomePageContainer>

            <Header/>

            <main>
                {renderList}
            </main>
            <Footer/>
  

        </HomePageContainer>
    )
}