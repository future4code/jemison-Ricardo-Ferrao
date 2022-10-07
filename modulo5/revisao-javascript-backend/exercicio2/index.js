const tabuada = (a) => {
    for (let i = 0; i < 11; i++) {
      const resultado = i * a
      const tabuadaResultado = `${i} x ${a} = ${resultado}`
      console.log(tabuadaResultado)
    }
  }
  
  tabuada(9)