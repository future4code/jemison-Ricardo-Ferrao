function calcTab(ntab){
    let multi = 2 //valor inicial
    let tabuada = "" //armazena a tabuada
    //while (multi <= 9) {
        tabuada = tabuada + (ntab + " x " + multi + " = " + ntab * multi + "<br />")
        multi++ //incrementa 1 no multiplicador
    //}
    return tabuada
}
/*
function criaDivTab(ntab) {
    let htmlTab = calcTab(ntab)

    tabDiv = document.createElement("div")
    tabDiv.ClassName = "result-tab"
    tabDiv.id = "result-tab"+ntab
    tabDiv.innerHTML = htmlTab

    document.getElementById("result.wrapper").appendChild(tabDiv)

}

function cria1Tab () {
    document.getElementById("result.wrapper").innerHTML=""
    let ntab = document.getElementById("valor-tabuada").value
    criaDivTab(ntab)
}

document.getElementById("cria-tab").addEventListener("click",  cria1Tab)

*/
  console.log(tabuada)