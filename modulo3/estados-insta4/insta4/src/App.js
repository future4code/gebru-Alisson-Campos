import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`





class App extends React.Component {
  state = {
    postState: [ 
      {id: 1, nomeusuario: 'paulinha',
       fotoUsuario: 'https://picsum.photos/50/50', 
       fotoPost: 'https://picsum.photos/200/150'},
      {id: 2, nomeusuario: 'Julio.c', 
      fotoUsuario: 'https://picsum.photos/id/1009/50/50',
       fotoPost: 'https://picsum.photos/id/1004/200/150'},
      {id: 3, nomeusuario: 'Zenaide',
       fotoUsuario: 'https://picsum.photos/id/1011/50/50',
        fotoPost: 'https://picsum.photos/id/102/200/150'}
    ],
     ValorInputNome:"",
     ValorInputFoto:"",
     ValorInputPost:""
  }
  adicionaPost = () => {
    const Postar= {
       nomeUsuario : this.state.ValorInputNome,
       fotoUsuario : this.state.ValorInputFoto,
       fotoPost : this.state.ValorInputPost
    }
    const novoPessoas = [...this.state.postState, Postar];
    this.setState({postState:novoPessoas})
    this.setState({ValorInputFoto:"",ValorInputNome:"",ValorInputPost:""})
    }
  
  onChangeInputNome = (event) => {
    this.setState({ ValorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ ValorInputFoto: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ ValorInputPost: event.target.value });
  };



  render() {
    const ListaDePosts = this.state.postState.map((dado) => {
      return (
        <Post
         nomeUsuario = {dado.nomeusuario}
         fotoUsuario = {dado.fotoUsuario}
         fotoPost = {dado.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
         <input
         value={this.state.ValorInputNome}onChange = {this.onChangeInputNome} placeholder="Adiciona usuário"></input>
         <input
         value={this.state.ValorInputFoto}onChange = {this.onChangeInputFoto} placeholder="Adiciona Link Foto"></input>
         <input
         value={this.state.ValorInputPost}onChange = {this.onChangeInputPost} placeholder="Adiciona Descrição"></input>
         <button onClick={this.adicionaPost}>Adicionar</button>
       {ListaDePosts}
      </MainContainer>
       
      
    );
  }
}

export default App;
