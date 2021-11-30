/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log ("Bem vindo ao Cassino Royale")
confirm("Quer jogar Blackjack ?")
if (confirm("Bem vindo para perder o seu dinheiro !!")){
} 

const jogador = comprarCarta()
const jogador1 = comprarCarta()
const cpu = comprarCarta()
const cpu1 = comprarCarta()
const valor1 = jogador.valor + jogador1.valor
const valor2 = cpu.valor + cpu1.valor
console.log (`Jogador1 - ${jogador.texto}${jogador1.texto} Pontuação: ${valor1}`)
console.log (`Jogador2 - ${cpu.texto}${cpu1.texto} Pontuação: ${valor2}`)
if(valor1 > valor2)
   console.log("Jogador 1 é o ganhador!!")
else if (valor1 < valor2){
   console.log("O computador venceu")
}else {
   console.log("Houve um empate !!")
}
  


