const converteCelsius = (a, b) => {
    let temperatura
    if (b === "F") {
      temperatura = (a * 9) / 5 + 32

      console.log("A temperatura é ${temperatura}F");

    } else {

      temperatura = a + 273.15;
      console.log("A temperatura é ${temperatura}K")
    }
    return ("A temperatura é ${temperatura}K")
  }
  
  converteCelsius(30, "K")
