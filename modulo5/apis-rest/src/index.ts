
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { users, user, USER_TYPE } from './data';
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/user/todos", (req: Request, res: Response) => {
    let erroCode = 500
    try {
        res.send(users)        //exercício 1
    } catch (error: any) {     //a. Qual método HTTP você deve utilizar para isso? método Post
        //b. Como você indicaria a entidade que está sendo manipulada? indiquei com o /user
        res.status(erroCode).send(error.message)
    }
})

app.get("/user/tipos", (req: Request, res: Response) => { // exercício 2
    let errorCode = 500
    try {
        const tipos = req.query.type as string
        if (!tipos) {
            errorCode = 422
            throw new Error("Digitou o Tipo errado, tente novamente!");
        }
        console.log(tipos)
        const user = users.filter(i => i.type.toLowerCase() === tipos.toLowerCase())
        if (!user.length) {
            errorCode = 404
            throw new Error("tipo não encontrado");

        }
        res.status(200).send(user)
    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})

app.get("/user/busca/nome", (req: Request, res: Response) => { // exercício 3
    let errorCode = 500
    try {
        const name = req.query.name as string
        if (!name) {
            errorCode = 422
            throw new Error("Digitou o nome errado, tente novamente!");
        }
        const user = users.filter(i => i.name.toLowerCase() === name.toLowerCase())
        if (!user.length) {
            errorCode = 404
            throw new Error("nome não encontrado");

        }
        res.status(200).send(user)
    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})

app.post("/user/", (req: Request, res: Response) => { // exercício 4
    let errorCode = 500
    try {
        const { name, email, type, age } = req.body
        if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Falta parâmetros faltando no body!");
        }
        if (type != USER_TYPE.ADMIN && type != USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error("inserir type válido!");
        }
        const novoUsuario = {
            id: Math.random(),
            name: name,
            email: email,
            type: type,
            age: age
        }
        users.push(novoUsuario)
        res.status(201).send(users)
    } catch (error: any) {

        res.status(errorCode).send(error.message)
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor funcionando em  http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


