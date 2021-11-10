/*let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) ele irá imprimir 10,10,5 pois o console está antes imprimindo o 1° 10 e logo em seguida imprimi 
o 10 da variável a e depois o 5 da variável b que foi alterada antes.
*/ 

/*let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c) ele imprimirá 10,10,10 obedecendo a ordem de baixo para cima 
*/

/* let p = prompt("Quantas horas você trabalha por dia?") let jornadaDeTrabalho
let t = prompt("Quanto você recebe por dia?") let salarioDia
alert(`Voce recebe ${t/p} por hora`)*/

//let  nome 
//let idade 
//console.log  (typeof nome,typeof idade)
// nenhum valor foi atribuido por isso o valor undefined
let  nome 
let idade  
nome = prompt ("Qual o seu nome")
idade = prompt("Qual a sua idade")
console.log ( nome,idade)
console.log (typeof nome,typeof idade)/*o retorno do tipo foi uma string porque sempre
quando se usa o prompt o retorno é uma string*/
console.log ("Olá",nome ,"vocé tem",idade)
let gato
let ingles
let qualSeuSexo
gato = prompt("Você Gosta de Gatos")
ingles = prompt("Você Fala Inglês")
qualSeuSexo = prompt("Você é uma Mulher ?")
console.log ("Você Gosta de Gatos",gato,"Você Fala Inglês",ingles)
console.log ("Você é uma Mulher ?",qualSeuSexo)/* Fiquei na dúvida se tinha q usar
um retorno Booleano aqui*/
let a = 10
let b = 25
let aux = 10
a = b
b = a
b = aux
console.log ("o novo valor de a é ?" ,a)
console.log ("o novo valor de b é?" ,b)
//Desafio 
let numero1 = prompt("Insira um número")
let numero2 = prompt("Insira mais um número")
numero1 = Number(numero1)
numero2 = Number(numero2)
let resultadoSoma = numero1 + numero2 
let resultadoMultiplicação = numero1 * numero2
console.log(resultadoSoma)
console.log (resultadoMultiplicação)