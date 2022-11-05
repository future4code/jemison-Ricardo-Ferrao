type pokemon = {
    name: string;
    types: string;
    healthPoints: number;
  };
  
  const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28,
  };
  
  const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31,
  };
  
  const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35,
  };
  
  //b uzaria o comando tsc
  
  //c alteraria o caminho no arquivo tsconfig.json na opção rootDir 
  
  //d basta criar o tsc no "start" dentro do package.json