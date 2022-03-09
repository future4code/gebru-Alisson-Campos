
import React from 'react'
import CadastroUsuario from './componentes/CadastroUsuario';
import ListaUsuario from './componentes/ListaUsuario';
import styled from "styled-components"


class LabUsers extends React.Component {
 state = {
   telarenderizada: "inscrever"
 }
 escolhaUsuario = () => {
   switch (this.state.telarenderizada) {
     case "inscrever" :
       return <CadastroUsuario irParaTelaUsuarios = {this.irParaTelaUsuarios}/>
       case "listausuario":
         return <ListaUsuario irParaTelaInscrever = {this.irParaTelaInscrever}/>
         default:  
         return <h3>Página não encontrada</h3>
   }
 }
 irParaTelaInscrever = () => {
  this.setState({telarenderizada: "inscrever"})
 }

 irParaTelaUsuarios = () => {
   this.setState({telarenderizada: "listausuario"})
 }

render () {
  return (
    <div>
     <h2>LabUsers</h2>
    { this.escolhaUsuario()}
    </div>
  )
}

}

export default LabUsers;
