"use strict"


function teste(){
    //var
    let nome = "Sejux"// Com o var consigo chamar a variavel fora do bloco de codigos mas se eu usar o let nao consigo

if(true){
   console.log("dentro do if teste: " + nome)
}
  console.log("dentro do teste: " + nome)
}
   teste()

//console.log("fora do teste:"+nome) // Esse daria erro com o let pois esta fora do bloco de codigos

//CONSIGO MUDAR O VALOR DE UMA VARIAVEL EXEMPLO:

let nome2 = "Mota"
nome2 = "euNaoMota"
console.log(nome2)

// nao imprimiu o primeiro valor mas sim o segundo valor.

const constante = "Javascript" // nao consigo alterar o valor dessa constante
//constante = "Curso"

console.log(constante)

