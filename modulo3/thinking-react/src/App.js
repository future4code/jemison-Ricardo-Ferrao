import './App.css';
import FormNovaTarefa from './components/FormNovaTarefa';
import ListaDeTarefas from './components/ListaDeTarefas';
import { DivPai, HeaderApp } from './Style';
import {tarefas} from "./mockpDados"
import { useState } from 'react';

function App() {
  const [tarefasAtuais,setTarefasAtuais]=useState(tarefas)
  return (
    <DivPai>
      <HeaderApp/>
      <FormNovaTarefa myTarefas={tarefasAtuais} mudaTarefasAtuais={setTarefasAtuais}/>
      <ListaDeTarefas myTarefas={tarefasAtuais}/>
    </DivPai>

    );
}

export default App;
