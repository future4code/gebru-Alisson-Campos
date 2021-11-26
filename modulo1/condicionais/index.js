// let condicao1 = true

// if (condicao1){
//     console.log("entrei no if 1")
// }
// let condicao2 = false

// if(condicao2){
//     console.log(" entrei no if 2")
// }
// const numero1 = Number(prompt("digite um numero"))
// const numero2 = Number(prompt("digite outro número"))
// const somar = (num1,num2)=> {
//   if (numero1 > numero2){
//     console.log("número 1 maior que numero 2")
//   }
//   else if ( numero1 < numero2){
//       console.log("Número 1 menor que numero 2")
//   }
//   else {
//       console.log ("Números são iguais")
//   }
// }
// somar(numero1,numero2)
                                    //  Exercícios excreita de código
// 1 (a) ele pede pro user digitar um número e verifica se o mesmo é par
//   (b) somente para os pares ele imprimi o if
//   (c) e para os ímpares ele imprime o else 
  
// 2 (a) ele imprimi o valor da fruta que o cliente escolheu
//   (b) o preço da fruta maçã é R$ 2,25
//   (c) o código iria para baixo não parando na pêra e parando no ultimo break default a mensagem seria: 
//  o preço da fruta é R$ 5

// // 3 (a) ela pede ao user para digitar o primeiro número
//   (b) será "esse número passou no teste",dará erro pois o console irá tentar acessar a variável dentro do bloco e ele está fora

// let idadeDirigir = Number(prompt("Qual a sua idade ?"))
// if (idadeDirigir >= 18){
//     console.log("Você pode tirar Habilitação")
//  } else {
// console.log("Você ainda é menor de idade, e não poderá dirigir")
//  }


// let verica1 = prompt("digite m,v ou n")
// let manha = "m"
// let tarde = "v"
// let noite = "n"
// if (verica1 === manha) {
//     console.log ("Bom dia!")
// } else if (verica1 === tarde){
//     console.log("Boa tarde!")
// } else if (verica1 === noite){
//     console.log ("Boa noite")
// }
// alert ("Você digitou errado, digite f5 e tente novamente")

// let verica1 = prompt("digite m,v ou n")
// let manha = "m"
// let tarde = "v"
// let noite = "n"
// switch(verica1){
//     case (manha):
//         console.log ("Bom dia!")
//     break;
//     case (tarde):
//         console.log("Boa tarde!")
//     break;
//     case (noite):
//         console.log("Boa noite!")
//         break;
//         default:
//         alert("Você digitou errado, digite f5 e tente novamente")
// }
// let generoFilme = prompt("Qual o seu gênero de filme preferido ?")
// let precoingresso = Number(prompt("Qual o preço do ingresso ?"))
//     if (generoFilme === "fantasia" && precoingresso <= 15){
// let lanchinho = prompt("Qual lanchinho você quer comprar ?")
// let escolha = lanchinho
//     console.log(`Bom filme e aproveite seu ${escolha}`)} else{
//     console.log("Escolha outro filme")
//     }
const nomecompleto = prompt("Digite seu nome")
const tipoDeJogo = prompt("Digite In internacional e Do para nacional").toUpperCase()
const etapajogo = prompt ("digite SF pa semi-final,Dt para 3° lugar e Fi para final").toUpperCase()
const categoria = Number(prompt("digite uma categoria de 1 a 4"))
let quantidadeIngresso = Number(prompt("digite a quantidade de ingressos"))
const valor1 = 1320
let caso1 
switch (tipoDeJogo==="DO") {
    case etapajogo ==="SF":
      categoria === 1
      console.log (`Nome do Cliente: ${nomecompleto} etapa do jogo : Semi final categoria:1
      Quantidade de ingresso: ${quantidadeIngresso} valor do ingresso: ${valor1} valor total
      : ${valor1*quantidadeIngresso}`) 
        break;

    default:
        break;
}

 


