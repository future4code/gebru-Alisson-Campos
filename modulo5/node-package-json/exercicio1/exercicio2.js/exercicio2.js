const operacao = process.argv[2]
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

console.log(operacao)