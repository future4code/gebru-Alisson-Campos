
                            // Exercícios de interpretação de código
                            // 1°
// A= será impresso 10 e 50
// B= no console não apareceria nada pois o console.log não existe, mas a função iria rodar pois ela foi chamada
                            //    2°
// A= ela recebe um texto com o prompt,depois ela tranforma o texto em letras minúsculas e pesquisa  a palavra
// cenoura retornando um booleano. 
// B= i. "eu gosto de cenoura" true
//    ii. "cenoura é bom pra vista" true
//    iii. "cenouras crescem na terra" false
                        //    Exercícios de escrita de código
// let nome = "caio"
// let idade = "23"
// let localidade = "São Paulo"
// let  profissao = "Estudante"
// console.log(`Eu sou ${nome}, tenho ${idade} anos , moro em ${localidade} e sou ${profissao}.`)
// nome = nome.replaceAll ("caio","Alisson")
// idade = idade.replaceAll ("23","37")
// localidade = localidade.replaceAll ("São Paulo", "São Lourenço")
// profissao = profissao.replaceAll ("Estudante", "Vendedor")
// function ReceberNome () {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos , moro em ${localidade} e sou ${profissao}.`)
// }                        
// ReceberNome()

//  function CadastrarDados (nome,idade,cidade,profissao) {
//  const dados = `Eu sou o ${nome}, tenho ${idade} anos,moro em ${cidade} e sou ${profissao} `
//  return dados
//  }
 
// console.log(CadastrarDados("Alisson Ferreira Campos",37,"São Lourenço","Vendedor"))

function somar (num1,num2){
    const soma = num1 + num2    
    return soma
}
console.log(somar(22,22))

function comparar (num1,num2){
    const booleano = num1 >= num2
    return booleano 
}
console.log(comparar(40,50))

function verificarPar (num1){
    const verifica = num1 % 2 ==0
    return verifica
}
console.log (verificarPar(102))

 function Converter(mensagem){
    console.log (mensagem.toUpperCase(),mensagem.length)
 }
Converter("hello world")

// function Soma (numero1,numero2){

// return numero1 + numero2
// }
// function Subtracao (numero1,numero2){

//     return numero1 - numero2
// }
// function multiplicacao (numero1,numero2){
//     return numero1 * numero2
// }
//  function divisao (numero1,numero2){
//     return numero1 / numero2
//  }
//  let num1 = Number(prompt("Digite um número"))
//  let num2 = Number(prompt("Digite outro número"))
//  console.log (num1,num2)
//  console.log (Soma(num1,num2))
//  console.log (Subtracao(num1,num2))
//  console.log (multiplicacao(num1,num2))
//  console.log (divisao(num1,num2))
                            //  Desafio
const imprimi = (param)=>{
console.log(param)
return param
}
 const soma =(a,b)=>
  somar = a + b
 
 imprimi(soma(22,23))

 const teorema = (cateto1,cateto2)=>{
 let hipotenusa = Math.hypot(cateto1,cateto2)
return hipotenusa
 }
imprimi(teorema(4,2))
 

