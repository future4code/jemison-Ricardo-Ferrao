

import { GlobalStyle } from './GlobalStyle';
import {HomePage} from "./Page/Homepage/Homepage";
import {results} from "./data/data"




function App() {

  return (
    <div className="App">
        
        <GlobalStyle/>

        <HomePage results={results}/>

        {/*<DetailsPage/>*/}



        

    </div>
  );
}

export default App;
