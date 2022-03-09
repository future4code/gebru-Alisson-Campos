import React from "react";
import axios from "axios";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    color: black;
    background-color: aquamarine;
    padding: 40px;
    width: auto;
    border: solid black 1px;
    margin-left: 0,5%;
    font-family: fantasy;`

const Botao = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   color: black;
   background-color: whitesmoke;
   padding: 10px;
   width: auto;
   margin-top:12px;
   border: solid black 1px;
   margin-left: 0,5%;
   font-family: fantasy;`



class ListaUsuario extends React.Component {
    state = {
        listaUsuario: []
    }
    componentDidMount() {
        this.getAllUser()
    }
    getAllUser = () => {
        const body = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
            .get(body, {
                headers: {
                    Authorization: "alisson-campos-gebru"
                }
            })
            .then(res => {
                console.log(res.data)
                this.setState({ listaUsuario: res.data })
            })
            .catch(err => console.log(err.response))
    }
    deleteUser = (userId) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                headers: {
                    Authorization: "alisson-campos-gebru"
                }
            })
            .then(res => {
                alert("Usuário deletado com sucesso")
                this.getAllUser()
            })

            .catch(err => console.log(err.response))
    }
    render() {
        const renderList = this.state.listaUsuario.map((user) => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <Botao onClick={() => this.deleteUser(user.id)}>Apagar ${user.name} x</Botao>
                </div>)
        })
        return (
            <Box>
                <h2>Tela com a Lista de Pessoas Usuárias</h2>
                {renderList}
                <Botao onClick={this.props.irParaTelaInscrever}>Ir Para a Tela de Cadastro de usuário</Botao>
            </Box>
        )
    }
}

export default ListaUsuario