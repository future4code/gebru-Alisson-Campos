import React from "react";
import axios from "axios"

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
            <div>
                <h2>Tela de Cadastro de Usuário</h2>
                <div>
                    <input onChange={this.mudaNomeInput}
                        placeholder="Insira seu Nome" value={this.state.nameInput} />
                    <input onChange={this.mudaEmailInput}
                        placeholder="Insira seu Email" value={this.state.emailInput} />
                    <button onClick={this.createUser}>Cadastrar</button>
                </div>
                <button onClick={this.props.irParaTelaUsuarios}>Ir Para Lista de Pessoas</button>
            </div>
        )
    }
}

export default CadastroUsuario
