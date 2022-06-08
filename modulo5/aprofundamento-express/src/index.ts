import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { v4 as generateId } from 'uuid';
import { afazeres, tarefas } from "./constantes";
import { Request, Response } from "express"
import { request } from "http";


const app = express()
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

app.get(("/afazeres/:status"), (req: Request, res: Response) => {
    const status = req.params.status

    res.status(200).send(tarefas.filter(item => String(item.concluido).toLowerCase() === status.toLowerCase()))

})
app.post(("/afazeres/create"), (req: Request, res: Response) => {
    try {
        const userId = req.body.userId
        const id = req.body.id
        const title = req.body.title
        const concluido = req.body.concluido
        const listaAtualizada = tarefas.push(userId,id,title,concluido)

        res.status(200).send("Sua lista foi atualizada")
    }
  catch(error){
      res.status(400).end("erro")
  }
    
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor ativo em http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;