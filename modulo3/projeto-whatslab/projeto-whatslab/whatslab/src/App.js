import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import React from 'react';

class App extends React.Component {

   
    state = {
        texto: [{
            nome: "",
            mensagem: ""
        }],
        valorInputNome: "",
        valorInputMensagem: ""
    }
    render() {
        return ( 
           <div>
            <p></p>

           </div>
       

    );
        }
}

export default App;