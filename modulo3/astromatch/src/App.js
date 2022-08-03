
import { GlobalStyle } from "./GlobalStyled";
import { Homepage } from "./Pages/Homepage/Homepage";
import { results } from "./data/data" 



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Homepage results={results}/>
      {/*<DetailsPage /> */}

    </div>
  );
}

export default App;
