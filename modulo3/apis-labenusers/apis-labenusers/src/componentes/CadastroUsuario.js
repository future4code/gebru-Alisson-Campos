import React from "react";
import axios from "axios"
import styled from "styled-components"
const Box = styled.div `
 display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: aquamarine;
    padding: 40px;
    width: 420px;
    border: solid black 1px;
    margin-left: 30%;
    font-family: fantasy;`

const Botao = styled.button`
display: flex;
   justify-content: space-between;
   align-items: center;
   color: black;
   background-color: whitesmoke;
   padding: 10px;
   width: auto;
   border: solid black 1px;
   margin-left: 0,5%;
   font-family: fantasy;`

class CadastroUsuario extends React.Component {
    state = {
        nameInput: "",
        emailInput: ""
    }
    mudaNomeInput = (event) => {
        this.setState({ nameInput: event.target.value })
    }

    mudaEmailInput = (event) => {
        this.setState({ emailInput: event.target.value })
    }

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nameInput,
            email: this.state.emailInput
        }
        axios
            .post(url, body, {
                headers: {
                    Authorization: "alisson-campos-gebru"
                }
            })
            .then(res => alert(`Usuário ${this.state.nameInput} cadastrado com sucesso`))
            this.setState({nameInput:"",emailInput: ""})
            .catch(err => alert("Erro no cadastro entre em contato"))
    }
    render() {
        return (
            <Box>
                <h2>Tela de Cadastro de Usuário</h2>
                <div>
                    <input onChange={this.mudaNomeInput}
                        placeholder="Insira seu Nome" value={this.state.nameInput} />
                    <input onChange={this.mudaEmailInput}
                        placeholder="Insira seu Email" value={this.state.emailInput} />
                    <Botao onClick={this.createUser}>Cadastrar</Botao>
                </div>
                <Botao onClick={this.props.irParaTelaUsuarios}>Ir Para Lista de Pessoas</Botao>
            </Box>
        )
    }
}

export default CadastroUsuario
