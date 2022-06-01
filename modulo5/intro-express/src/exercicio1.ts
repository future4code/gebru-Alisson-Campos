import express from "express";
import cors from "cors"
import { Request, Response } from "express";
import { type } from "os";


const app = express();

app.use(express.json());
app.use(cors())
type pessoas = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}
type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}
//achei melhor criar fora e depois separar dentro da pasta src um arquivo com os dados e arrays
const dadosPost: post[] = [{
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 11
},
{
    id: 2,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 22
}, {
    id: 3,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 33
}, {
    id: 4,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 44
}]


const usuarios: pessoas[] = [{
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    email: "Sincere@april.biz",
    website: "hildegard.org"
}, {
    id: 2,
    name: "Tião",
    phone: "35988785698",
    email: "tiao@gmail.com",
    website: "hildegard.org"
}, {
    id: 3,
    name: "Leanne ",
    phone: "1-770-736-",
    email: "Sincere@april.hotmail.com",
    website: "hildegard.org"
}, {
    id: 4,
    name: "Natália",
    phone: "3588784578",
    email: "hildegard.org",
    website: "hildegard.org"
}]

const busca = (id:number) => {
    const buscar = dadosPost.filter((dado)=>{
        const dados = dado.userId
        return dados
    })
    return buscar
}

app.get("/users", (req: Request, res: Response) => {
    
    res.status(200).send(usuarios)
})

app.get("/posts", (req: Request, res: Response) => {
   
    res.status(200).send(busca(33))
})

app.listen(3003, () => {
    console.log("servidor funcionando")
})