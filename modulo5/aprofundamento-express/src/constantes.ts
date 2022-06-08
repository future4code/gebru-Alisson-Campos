import { v4 as generateId } from 'uuid';
import { AddressInfo } from "net"
import { ExitStatus } from 'typescript';


export type afazeres = {
    userId: number,
    id: number,
    title: string,
    concluido: boolean
}

export const tarefas: afazeres[]= [{
    userId: 1,
    id: 22,
    title: "lavar o carro",
    concluido: true

},
{
    userId: 2,
    id: 23,
    title: "cortar cabelo",
    concluido: true
},
{
    userId: 3,
    id: 25,
    title: "fazer compras",
    concluido: false
},
{
    userId: 226,
    id: 24,
    title: "fazer declaração provi",
    concluido: true
}
]
