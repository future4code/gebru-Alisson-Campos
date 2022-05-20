/* usamos node e o nome do arquivo em seguida tipo : node index.js */
const nome = process.argv[2]
const idade = Number(process.argv[3])
const somarIdade = idade + 7
console.table(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${somarIdade}`)