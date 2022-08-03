import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { HomePageContainer } from "./styles";


export function Homepage (props) {

    const { results } = props

    const renderList = results.map(char => {
        return (

            <Card
            img={char.image}
            name={char.name}
            species={char.species}
            />
        )
    })


    return (
        <HomePageContainer>
            <Header />

            <main>
                {renderList}
            </main>

        </HomePageContainer>
    )
}
