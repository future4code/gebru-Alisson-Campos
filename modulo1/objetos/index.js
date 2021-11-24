// exercício interpretação 
//  1- "Matheus Nachtergaele",	"Virginia Cavendish","Canal Brasil"
//  2-nome: "Juca", 
//  idade: 3, 
//  raca: "SRD"

//  nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"

//     nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"
//      a sintaxe se chama spread ela copia os elementos do objeto podendo ser incluídos,excluídos ou alterados

// // //      3- false e no outro console creio ter retornardo null por não ter essa propriedade no objeto
// // Cheguei de viagem agora a pouco e vou terminar os exercícios amanha cedo
//                               // Exercícios de Escrita de Código
// const pessoa = {
//     nome: "Regina",
//     apelidos: ["Regininha","Rainha","Mãezona"]
    
// }                              
// const imprimirObjeto = (pessoa)=> {
//     console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]} , ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]}`)
// }
// console.log(imprimirObjeto(pessoa))

// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Brava","Ariana","Amorosa"]
// }
// console.log(imprimirObjeto(novaPessoa))

// const objeto1 = {
//     nome: "Alisson Campos",
//     idade: 37,
//     profissao: "Vendedor"
// }
// const objeto2 = {
//     nome: "Lucimara Campos",
//     idade: 37,
//     profissao: "Gostosa e vendedora"
// }
// const validacaoObjeto = (param1) => {
//     const objeto = [objeto1.nome,objeto1.nome.length,objeto1.idade,objeto1.profissao,objeto1.profissao.length]
//     return objeto
// }
// console.log(validacaoObjeto(objeto1))
// console.log(validacaoObjeto(objeto2))
let carrinho = []
const sacolao1 = {
    nome: "laranja",
    disponibilidade: true
}
let sacolao2 = {
nome: "morango",
disponibilidade: true
}
let sacolao3 = {
    nome: "caqui",
    disponibilidade: true
}
const feira =(sacolao1,sacolao2,sacolao3)=>{
    carrinho.push(sacolao1,sacolao2,sacolao3)
   return carrinho
}
console.log(feira(sacolao1,sacolao2,sacolao3))




