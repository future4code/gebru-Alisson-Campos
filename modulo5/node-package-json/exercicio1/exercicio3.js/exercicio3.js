const tarefa = process.argv[2]
const novaTarefa = []
const adicionaTarefa = () => {
    const novaLista = [...novaTarefa,tarefa]
    console.log("tarefa adicionada")
    console.log(` Tarefas : ${novaLista}`)

}
adicionaTarefa()