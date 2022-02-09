
import React from 'react'
import styled from 'styled-components'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

const Botao = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-left: 46vw;
margin-top: 2%;
`



class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />

      case 4:
        return <Final />;

      default:
        

    }

  }

  irParaProximaEtapa = ()=> {
    this.setState({etapa:this.state.etapa +1 })
  }
  render() {
   if (this.state.etapa >=4) {
     return (
       <div>
         {this.renderizaEtapa()}
       </div>
     )
   }
    return (
      <div>
        {this.renderizaEtapa()}
        <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
      </div>

    )
  }
}

export default App;
