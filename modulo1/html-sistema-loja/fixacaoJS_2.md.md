���function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu c�digo aqui
const salario = 2000
const comissao = valorTotalVendas * 0,05 + qtdeCarrosVendidos * 100
const salarioFinal = salario + comissao
return salarioFinal
}���javascript

���function calculaPrecoTotal(quantidade) {
    let precoMaca = 1.30
    if(quantidade >= 12){
     precoMaca = 1.00 
    }
    return quantidade * precoMaca
    }���javascript