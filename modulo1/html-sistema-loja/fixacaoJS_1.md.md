创磃unction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu c骴igo aqui
const salario = 2000
const comissao = valorTotalVendas * 0,05 + qtdeCarrosVendidos * 100
const salarioFinal = salario + comissao
return salarioFinal
}创磈avascript

创磃unction calculaPrecoTotal(quantidade) {
    let precoMaca = 1.30
    if(quantidade >= 12){
     precoMaca = 1.00 
    }
    return quantidade * precoMaca
    }创磈avascript