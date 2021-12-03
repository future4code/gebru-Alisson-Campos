                        //   Minha Revisão
// const verificaPar = (numero,imprimirResultado) => {
//     if (numero % 2 === 0){
//         const resultado = numero / 2
//         imprimirResultado(resultado)
//     }else {
//         alert("Esse número é ímpar !!")
//     }

// }

// function imprimirResultado(valor) {
//     console.log("O Resultado é ", valor)

// }
// verificaPar(117,imprimirResultado)

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
//    ]
// //    const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
// //     return pokemon.tipo
// //    })
// //    console.log(nomeDosPokemons)
// const listaDeNumeros =[23,02,03,45,67,99,120,33]


// const novoArray = listaDeNumeros.map((valor,index)=>{
// return ` O elemento  ${index+1} é ${valor}`
// })
// console.log (novoArray)
                    //   Exercícios de Escrita

//   A= ele vai mostrar 1° nome e o apelido de cada uma, depois o index do Array, e depois ele vai mostrar todo o conteúdo
//   do array                 
    //  B= ele vai mostrar o nome de todas da array
   //    C= ele vai mostrar 1° o apelido e o nome de todas menos da chijo

                            // exercícios de Escrita de código

                            
const pets = [
{ nome: "Lupin", raca: "Salsicha"},
 { nome: "Polly", raca: "Lhasa Apso"},
 { nome: "Madame", raca: "Poodle"},
{ nome: "Quentinho", raca: "Salsicha"},
 { nome: "Fluffy", raca: "Poodle"},
 { nome: "Caramelo", raca: "Vira-lata"},
]
const filtrarNomeDoguinho = pets.map((item,index,array)=>{
return item.nome
})
console.log(filtrarNomeDoguinho)

const filtrarSalsicha = pets.filter((item,index,array)=>{
    return item.raca === "Salsicha"
    })
    console.log(filtrarSalsicha)

const descontoPoodle = pets.filter((item,index,array)=>{
   if (item.nome === "Madame"){
       console.log ("Voce ganhou um desconto para tosar o/a Madame !")
   } else if (item.nome === "Fluffy"){
       console.log("Voce ganhou um desconto para tosar o/a Fluffy !")
   }

   })
    console.log(descontoPoodle)

novoArraynome =(filtrarNomeDoguinho)
console.log(novoArraynome)

novoArraySalsicha = (filtrarSalsicha)
console.log(novoArraySalsicha)

novoArrayPoodle =(descontoPoodle)
console.log(novoArrayPoodle)

novoArrayDesconto = pets.filter(item => item.raca==="Poodle").map(item =>
    console.log(`Você ganhou um desconto de 10% para tosar o/a ${item.nome}`)
)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 const nomePreco = produtos.map (produto=>{
const objeto ={
    nome:produto.nome,
    preco:produto.preco
}
return objeto
 })

console.log (nomePreco)

const filtrarCategoria = produtos.filter((item,index,array)=>{
    return item.categoria === "Bebidas"
    })
    console.log(filtrarCategoria)

    const BuscaYpe = produtos.filter (produtos=>produtos.nome.includes("Ypê"))
    console.log (BuscaYpe)
 

    const SomenteNome = produtos.map((item)=>{
    return item.nome 
    })
    console.log (SomenteNome)

    const NomePrecoDesconto = produtos.map(produtos=>{
        let desconto = produtos.preco * 0.05
        const objeto = {
        nome:produtos.nome,
        preco:produtos.preco - desconto,
        }
        return objeto
    })
    console.log(NomePrecoDesconto)

    const bebidaObjeto = produtos.filter(produtos=> produtos.categoria.includes("Bebidas"))
    console.log(bebidaObjeto)

    const propaganda = BuscaYpe.map(produto=>
        `Compre ${produto.nome} por ${produto.preco}`
     
    )
    console.log(propaganda)



