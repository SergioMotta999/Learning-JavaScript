/*
OPERADORES ARITMETICOS
+ SOMA
- SUBTRACAO
/ DIVISAO
* MULTIPLICACAO
% RESTO DE DIVISAO
++ INCREMENTO
-- DISCREMENTO
+=
-=

*/
let num1 = 0
let num2 = 0
num1 = 10
num2 = 5

let soma = 0,sub = 0, soma2 = 0, resto = 0, divisao = 0//operadores

soma= num1 + num2
soma2= (num1+num2)*2
sub= num1 - num2
resto= num1%num2
divisao= num1/num2

console.log("A soma e: " +soma)
console.log("A soma 2 e: " +soma2)
console.log("A subtracao e: " +sub)
console.log("O resto da divisao e: "+resto)
console.log("O divisao e: " +divisao)

//INCREMENTO
let num3 = 20
let num4 = 1
let num5 = 15

num4++ // a cada vez que eu repetir o ++ Ira icrementar 1
num3-- // a cada vez que eu repetir o -- Ira decrementar 1 

num5+=1 // num4 = num4 + 1 posso trocar o 1 para outros valores (2,3,4...)
// vale para: *= operadores aritmeticos

console.log("O incremento do num4 e: "+num4)
console.log("O decremnto do num3: "+num3)
console.log("O += do num5: "+num5)