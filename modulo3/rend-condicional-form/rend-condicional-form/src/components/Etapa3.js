
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


class Etapa3 extends React.Component {
    render() {
        return (
            <Container>
                <h2> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <Label>
                    <label>1. 5. Por que você não terminou um curso de graduação?</label>
                    <input />

                    <select name='curso'>
                        <option value="nenhum">Nenhum</option>
                        <option value="curso técnico">Curso Técnico</option>
                        <option value="curso de inglês">Curso de Inglês</option>
                    </select>
                   
                </Label>
            </Container>

        )

    }
}

export default Etapa3;