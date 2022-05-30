//A = as entradas são um array de números e saídas também
//B = numerosOrdenados que usa o método sort para ordenar os números do maior para o menor
// a variável soma para dar início ao laço
//e a variável estatísticas que retorna o maior,menor e a média dos números.
//C =
type  amostra= {
    numeros:number[],
    obterEstatisticas:number
}


function obterEstatisticas(numeros: number[]): number {
    

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([25,36,35,888]))