//const minhaString: string = 5 "Não aceita número pois foi definido uma string"
//const meuNumero: number = "tentei" "Não aceita string pois foi definido um tipo number"

type pessoa = {
    nome:string,
    idade: number,
    corFavorita: string
}
enum CorFavorita {
    PRETO = "Preto",
    AZUL = "Azul",
    LILAS = "Lilás",
    VERMELHO = "Vermelho"
}
const pessoa: pessoa= {
    nome: "Alisson",
    idade: 38,
    corFavorita: CorFavorita.PRETO
}

const pessoa1:pessoa = {
    nome: "Nicollas",
    idade: 17,
    corFavorita: CorFavorita.AZUL
}
const pessoa2: pessoa= {
    nome: "Lucimara",
    idade: 38,
    corFavorita: CorFavorita.VERMELHO
}
const pessoa3: pessoa= {
    nome: "Sophia",
    idade: 13,
    corFavorita: CorFavorita.LILAS
}
console.table(pessoa3)
