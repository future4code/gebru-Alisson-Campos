// resultado a (false)
// resultado b (false)
// resultado c (false)
// resultado d (Bolean)
/* ele vai somar as strings, teria tranformar a string num numero com o Number ()*/
// exercício de escrita (1)
let idade =Number( prompt("Qual a sua idade ?"))
let idadeAmigo =Number (prompt("Qual a idade do seu melhor amigo ?"))
let comparacaoidade = idade - idadeAmigo
console.log ( "Sua idade é maior que a do seu amigo ?", idade > idadeAmigo)
console.log ("A diferença de idade é ",comparacaoidade,"anos")
// exercício de escrita (2)
let pedidoNumeroPar =Number( prompt("Insira um número par por favor"))
console.log (pedidoNumeroPar % 2 === 0)
//O padrão é que em números pares a divisão não vai ter resto, colocando números ímpares acontece o contrário
// exercício de escrita (3)
let idadeEmAnos = Number(prompt("Qual a sua idade em anos"))
console.log("MINHA idade em meses é ?",idadeEmAnos * 12,"meses")
console.log("MINHA idade em dias é ?",idadeEmAnos * 365,"dias")
console.log("MINHA idade em horas é ?",idadeEmAnos * 8760,"horas")
// exercício de escrita (4)
let insiraUmNumero = Number( prompt("Insira um número qualquer"))
let insiraUmOutroNumero = Number(prompt("Insira um outro número"))
console.log("o primeiro número é maior que o segundo?",insiraUmNumero > insiraUmOutroNumero)
console.log("o primeiro número é igual ao segundo?",insiraUmNumero === insiraUmOutroNumero)
console.log("o primeiro número é divisível pelo segundo", insiraUmNumero % insiraUmOutroNumero === 0)
console.log("o segundo número é divisível pelo pelo primeiro ?", insiraUmOutroNumero % insiraUmNumero === 0)
