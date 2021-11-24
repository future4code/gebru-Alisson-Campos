// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number( prompt("Digite a altura do retângulo "))
let largura = Number( prompt("Digite sua largura do retângulo"))
console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let ano = Number(prompt("digite o ano atual"))
let anoNascimento = Number(prompt("digite o ano atual"))
console.log (ano - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  return(peso / (altura * altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let NOME = prompt("qual seu nome ?")
  let IDADE =Number(prompt("qual a sua idade ?"))
  let EMAIL = prompt("qual seu email ?")
  console.log(`Meu nome é ${NOME}, tenho ${IDADE} anos , e o meu email é ${EMAIL}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let corfav1 = prompt("digite uma cor favorita")
let corfav2 = prompt("digite mais uma cor favorita")
let corfav3 = prompt("digite mais uma cor favorita")
let todasCores = [corfav1,corfav2,corfav3]
console.log (todasCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let arraytroca = array.slice()
  arraytroca[array.length -1] = array[0]
  arraytroca[0] = array[array.length-1]
  return arraytroca


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("digite ano atual"))
  let anoNascimento = Number(prompt("digite ano nascimento"))
  let anoEmissao = Number(prompt("digite ano Rg"))
  let idadeRg = anoAtual - anoNascimento
  let tempoRenovacao = anoAtual - anoEmissao
  let condicao1 = idadeRg <=20 && tempoRenovacao >= 5
  let condicao2 = idadeRg >=20 && tempoRenovacao >=10 && idadeRg <=50
  let condicao3 = idadeRg >50 && tempoRenovacao >=15
console.log( condicao1,condicao2,condicao3)
  

  
 




}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}