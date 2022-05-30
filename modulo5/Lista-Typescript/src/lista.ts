import { nodeModuleNameResolver } from "typescript"

const cadastro = (nome: string, data: string): string => {
    let arrayData: string[] = data.split("/")
    return (`"Olá me chamo ${nome}, nasci no dia ${arrayData[0]} do mês de ${arrayData[1]} do ano de ${arrayData[2]}" `)
}
console.log(cadastro("ALISSON", "22/06/1984"))

const imprimirTipo = (entrada: any): void => {
    console.log(`Essa variável é do tipo ${typeof (entrada)}`)
}
imprimirTipo(25)

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type filmes = {
    nome:string ,
    anoLancamento:number,
    genero:GENERO,
    pontuacao?:number
}
const detalheFilmes = (filme:string,ano:number,genero:GENERO,pontuacao?:number):filmes=> {
    if (!pontuacao){
        const nomes:filmes={
            nome:filme,
            anoLancamento:ano,
            genero:genero
        }
        return nomes
    }else {
        const nomes:filmes={
            nome:filme,
            anoLancamento:ano,
            genero:genero,
            pontuacao:pontuacao
        }
     return nomes
    }
}
console.log(detalheFilmes("Matrix",1997,GENERO.ACAO,89))

