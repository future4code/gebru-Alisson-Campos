import React from "react";
import axios from "axios";



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
            alert ("Usuário deletado com sucesso")
            this.getAllUser()
        })
        
        .catch(err => console.log (err.response))
    }
    render() {
        const renderList = this.state.listaUsuario.map((user) => {
            return (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() =>this.deleteUser(user.id)}>Apagar ${user.name} x</button>
                </div>)
        })
        return (
            <div>
                <h2>Tela com a Lista de Pessoas Usuárias</h2>
                {renderList}
                <button onClick={this.props.irParaTelaInscrever}>Ir Para a Tela de Cadastro de usuário</button>
            </div>
        )
    }
}

export default ListaUsuario