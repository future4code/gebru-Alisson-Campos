const alimentos = [{ 
    nome: "batata",
    volume: 2.3,
    preço: 1.12,
    dataDeValidade: "02/08/2022",
    quantidade: 25,
},
{
    nome: "Limão",
    volume: 1.8,
    preço: 1.50,
    dataDeValidade: "25/09/2022",
    quantidade: 25,

},
{
    nome: "laranja",
    volume: 2.5,
    preço: 1.75,
    dataDeValidade: "14/10/2022",
    quantidade: 12,
}]
const brinquedos = [{
    nome: "carrinho",
    preço: 1.50,
    classificacaoIndicativa: 12,
    quantidade: 120
},
{
    nome: "barco papel",
    preço: 1.88,
    classificacaoIndicativa: 20,
    quantidade: 80
}]

const menu = () => {
    const pergunta = prompt("O que você deseja fazer ?\n1- Vitrine ? \n2- Compras ? \n3- Zerar estoque ?")
    if (pergunta === 1) {
        vitrine()
    }
}
menu()
const vitrine = () => {

    const pergunta2 = prompt("1- Alimentos \n 2-Brinquedos")
    if (pergunta2 == 1) {
        alimentos.map((dado) => {
            return console.log(`Esses são os alimentos disponíveis ${dado.nome}`)
        })
        return(alimentos)
    }
}
vitrine()


