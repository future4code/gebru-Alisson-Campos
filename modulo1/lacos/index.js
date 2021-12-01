                                       // escrita de código
// let valor = 0
// for(let i = 0; i < 5; i++) { ele atribui um valor através do laço somando sempre com o índice até na posição 4
//   valor += i
// }
// console.log(valor)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero) vai imprimir 19,21,23,25,27,30
// 	} B= o For of seria suficiente sim para percorrer, daí não precisaria  o if e no console mudaria para lista
// } 
// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha) Consegui entender só depois que coloquei no Vscode, ele vai imprimir quatro asteriscos
// do primeiro ao quarto, pois a condição de parada do For foi de 4 mais um atribuido pela variável quantidade atual +1
// entendi isso, não sei se é de fato

//   quantidadeAtual++
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++

                                //   exercícios de escrita de Código

// let perguntaUsuario =Number(prompt("Quantos Bichinhos você tem ?"))
// let respostaUsuario = perguntaUsuario
// if (respostaUsuario === 0){
//     alert("Você deveria adotar um Pet urgente !!")
// } else {
// let pet =[]
// for (let i = 0;i < perguntaUsuario; i++){
// pet.push(prompt("Digite os nomes do seu pet !"))
// }
// console.log(pet)
// }
let arrayOriginal = [12,23,33,56,98,99,45]
numero = 0  
function imprimir (array) {
for ( let i = 0; i < array.length; i++){
}
return arrayOriginal
}
console.log(imprimir(arrayOriginal))

function dividir (array){
for(let i = 0; i < array.length;i++){
console.log(arrayOriginal[i]/10)
}
return dividir
}
dividir(arrayOriginal)

function Pares (array){
let arraypar = []
for (let i = 0;i < array.length;i++){
    if(array[i]%2 === 0){
        arraypar.push(array[i])
    }
console.log(`Esses números são pares ${arraypar}`)
}
return Pares
}
Pares(arrayOriginal)






