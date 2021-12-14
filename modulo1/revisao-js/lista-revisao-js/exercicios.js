// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
return array.reverse()
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=> a - b)
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numeroPar = array.filter((item) => item % 2 === 0)
  return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
const numeroPar = array.filter(numero=>(numero % 2) === 0).map(numero =>(numero ** 2))
return numeroPar
}




// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = Math.max.apply(Math,array)
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = Math.max(num1,num2)
  const menorNumero = Math.min(num1,num2)
  const objeto = {
  maiorNumero : maiorNumero,
  maiorDivisivelPorMenor : maiorNumero % menorNumero === 0,
  diferenca : maiorNumero - menorNumero,
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const numerosPares = []
   for(let i=0;numerosPares.length < n;i++){
     if (n%2 === 0){
      numerosPares.push(i)
     }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  
if(ladoA === ladoB && ladoA === ladoC ){
  return "Equilátero"
}else if (ladoA === ladoB ||ladoA === ladoC || ladoC === ladoB){
  return "Isósceles"
} else {
  return "Escaleno"
}
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
retornaArrayOrdenado(array)
let arrayMenorMaior = []
arrayMenorMaior.push(array[array.length-2])
arrayMenorMaior.push(array[1])
return arrayMenorMaior
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

 }
 

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   novoobjeto ={
     ...pessoa,
     nome: "ANÔNIMO"
   }
   return novoobjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 const permitido = []
 const liberacao = pessoas.filter((item)=>{
if (item.altura >=1.5 && item.idade >14 && item.idade < 60){
permitido.push(item)
}
 })
 return permitido
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoPermitido = []
  const liberacao = pessoas.filter((item)=>{
 if (item.altura >1.5 && item.idade >14 && item.idade < 60){
 undefined
 }else{
   naoPermitido.push(item)
 }
  })
  return naoPermitido

}
 

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let soma = 0
  for(let conta of contas){
    for(let total of conta.compras){
      soma += total
    }
    conta.saldoTotal -= soma
    conta.compras = []
  }
  return contas
  }


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (a, b) {
    if (a.nome > b.nome) {
        return 1;
    }
    if (a.nome < b.nome) {
        return -1;
    }
})
return consultas

    
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas.sort(function (a, b) {
    if (a.dataDaConsulta > b.dataDaConsulta) {
        return 1;
    }
    if (a.dataDaConsulta > b.dataDaConsulta) {
        return -1;
    }
})
return consultas
}