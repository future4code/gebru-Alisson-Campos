/* usamos node e o nome do arquivo em seguida tipo : node index.js */
/*const nome = process.argv[2]
const idade = Number(process.argv[3])
const somarIdade = idade + 7
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${somarIdade}`)*/
/*const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
 switch (operacao) {
    case "soma":
      console.log ( num1 + num2)
        break;
    case "subtracao":
        console .log( num1 - num2)
        break;
    case "multiplicacao":
       console.log (num1 * num2)
        break;
    case "divisao":
        console.log (num1 / num2)
    default:
        console.log("faltou argumentos")
        break;
}

console.log(operacao)*/
const tarefa = process.argv[2]
const novaTarefa = []
const adicionaTarefa = () => {
    const novaLista = [...novaTarefa,tarefa]
    console.log("tarefa adicionada")
    console.log(novaLista)

}
adicionaTarefa()






