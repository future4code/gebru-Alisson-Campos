import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Label = styled.label`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 2%;
`


class Etapa2 extends React.Component {
    render() {
        return (
            <Container>
                <h2> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <Label>
                    <label>1. Qual Curso ?</label>
                    <input />
                    <label>2. Qual a unidade de ensino?</label>
                    <input />
                    <button>Próxima etapa</button>
                </Label>
            </Container>

        )

    }
}

export default Etapa2;


