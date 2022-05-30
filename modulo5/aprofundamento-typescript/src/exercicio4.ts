type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//B = : "tsc  exercicio4.ts" 
//C = : "tsc  && node ./build/exercicio4.js" indicaria o caminho para chegar ao arquivo pedido
//D = : "É a mesma coisa mudando somente a inclusão de todos os outros arquivos .ts"