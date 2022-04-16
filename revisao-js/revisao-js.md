 Resumos e Cheklist

          Funções em JavaScript 
 (São códigos que executam determinada coisa e podem ser usados em outras partes no código, podem ter parâmetros ou não)
   
        Objeto em JavaScript ⇒ Sintaxe, o que é e como usar

 (Objetos são como uma varíavel mas com propriedades, um conjunto de informações que podem ser usadas no código
 sintaxe : const cadastro = {
     nome: "Alisson",
     sobrenome: "Campos"
     idade: "37"
 }
 pode ser usado acessado com notação de ponto exemplo cadastro.nome) 

       Array  ⇒ Sintaxe, o que é e como usar

 (Array são como listas que podemos iterar sobre ele depois através dos métodos de array 
 sintaxe : var frutas = ['Maçã', 'Banana')     

      Map  ⇒ Sintaxe, o que é e como usar


 (sintaxe : const saladaDeFrutas = frutas.map ((fruta)=>{
   return fruta[0]
 })
   esse método retorna um novo array com o o elememento que a função retornar true  
 )

      Filter  ⇒ Sintaxe, o que é e como usar

 (sintaxe : const strings = frutas.filter ((dado)=>{
   return typeof dado === "string"
 })
  esse método como o nome já diz filtra o array e retorna um novo array com  o que foi pedido
 )

    Diferenças entre Map e Filter

 ( o map retorna o elemento da pesquisa alterado ou não em caso de true e o filter filtra as infomações que eu quiser ,exemplo no caso acima somente o elemento que for do tipo string)

    Diferença entre os métodos push e pop e como usá-los

    ( o método push remove o último item do array
        const letras = ['a', 'b', 'c', 'd', 'e']

console.log(letras.pop()) 
console.log(letras); // ["a", "b", "c", "d"]

   o método pop adiciona um ou mais elementos no array e retorna eles
   console.log(letras.push('f'))
letras.push('g','h','i')
console.log(letras)  ["a", "b", "c", "d", "f", "g", "h", "i"])

   Método slice do array  ⇒ Sintaxe, o que é e como usar

   (O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.
   arr.slice([início[,fim]])
   coloca-se a posição do array que é pra ser extraída
   )

   Método splice do array  ⇒ Sintaxe, o que é e como usar

   (O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
   var myFish = ["angel", "clown", "mandarin", "surgeon"]
   removed = myFish.splice(2, 1, "trumpet")
   remove um elemento à partir da posição 2 e insere o "trumpet"
   )

   Obs: a maioria eu fiz de cabeça somente esses 3 métodos finais que tive que pesquisar.


                                PARTE 2 

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salario = 2000
const comissao = valorTotalVendas * 0.05 + qtdeCarrosVendidos *100
const salarioFinal = salario + comissao
return salarioFinal
}

function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let maca = 1.30
  if (quantidade >=12){
    maca = 1.00
  }
return quantidade * maca
}

function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let media = ((ex *1)+(p1 *2) + (p2 *3)) /6 
  if ( media >= 9){
    return "A"
  }else if (media < 9 &&  media >= 7.5){
    return "B"
  }else if (media < 7.5 && media>= 6){
    return "C"
  }else if (media < 6){
    return "D"
  }
}

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let total = 0
  if (arrayDeNumeros.includes(numeroEscolhido)){
    for (const number of arrayDeNumeros) {
     if (number === numeroEscolhido) {
    total ++
    }
  }
  return `O ${numeroEscolhido} aparece ${total} x`
  }else {
    return "Número não encontrado"
  }  pensei nessa lógica mas não rodou Tay

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
 const novoArray = animais.map ((nome)=> {
  return nome.nome;
 })
 return(novoArray)
}

function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]
 const status = tarefas.filter(tarefa=> tarefa.status === "done")
  
 const nomeTarefa = status.map(nome=>nome.titulo)
 return nomeTarefa
}





   