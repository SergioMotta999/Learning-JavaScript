 let n1 = 1
let n2 = "1"

let v1 = {nome:"Sejux"}
let v2 = {nome:"Sejux"}

console.log(n1 == n2) // Faz comparaçao ao nivel do valor da variavel- coparação rasa por isso volta true

console.log(n1 === n2) // considera ate o Tipo do dado

console.log(v1 == n2) // false pois como é um objeto as referencia deles estao diferentes ocupa divergentes espaços na memoria
// se  fosse: v2 = v1 ocuparia o mesmo espaço na memoria 



/*
  COLETADAR DADOS DEPENDE DE INTERFACE

let nome = prompt("Digite seu nome")  coletar dados depende da interface 

console.log(nome)*/

let n3 = 1
let n4 = 2

console.log(n1 != n2)
