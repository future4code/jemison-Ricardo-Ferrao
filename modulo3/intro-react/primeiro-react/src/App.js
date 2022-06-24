import logoCircular from './img/logo.png';
import './App.css';

function App() {
  const titulo = "Estamos de olho no Meio Ambiente!!!"
  const mandarMensagem = () => {
    alert("Boa noite!!!")
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={logoCircular} className='Logo-Circular' alt='Imagem de um desenho representando os 5Rs na economia circular'/>

      <p>Os 5Rs são um estilo de vida sustentável preocupado com a diminuição geração de resíduos no planeta. As cinco palavras, repensar, recusar, reduzir, reutilizar e reciclar, ajudam a construir um comportamento humano em compromisso com meio ambiente.</p>
      <p>As mudanças climáticas são transformações a longo prazo nos padrões de temperatura e clima.</p>
      <p>Essas mudanças podem ser naturais, como por meio de variações no ciclo solar. Mas, desde 1800, as atividades humanas têm sido o principal impulsionador das mudanças climáticas, principalmente devido à queima de combustíveis fósseis como carvão, petróleo e gás.</p>
      <p>A queima de combustíveis fósseis gera emissões de gases de efeito estufa que agem como um grande cobertor em torno da Terra, retendo o calor do sol e aumentando as temperaturas.</p>
      <p>Exemplos de emissões de gases de efeito estufa que estão causando mudanças climáticas incluem dióxido de carbono e metano. Isso vem do uso de gasolina para dirigir um carro ou carvão para aquecer um prédio, por exemplo.</p>
      <p>O desmatamento de terras e florestas também pode liberar dióxido de carbono. Aterros para lixo são uma das principais fontes de emissões de metano. Energia, indústria, transporte, edificações, agricultura e uso da terra estão entre os principais emissores.</p>

      <button onClick={mandarMensagem}>Clique Aqui!</button>

    </div>
  );
}

export default App;
