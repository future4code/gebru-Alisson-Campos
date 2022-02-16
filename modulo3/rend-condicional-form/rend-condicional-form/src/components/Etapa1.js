
import React from 'react'
import styled from 'styled-components';
import App from '../App';

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
const Select = styled.select `
margin-top: 4%
`


class Etapa1 extends React.Component {
    render() {
        return (
            <Container>
                <h2> ETAPA 1 - DADOS GERAIS</h2>
                <Label>
                    <label >1. Qual a sua Idade</label>
                    <input placeholder='Qual a sua Idade' />
                    <label>2. Qual o seu E-mail</label>
                    <input />

                    <label >1. Qual o seu Nome</label>
                    <input placeholder='Qual o seu Nome' />
                    <label >1. Qual a sua Escolaridade ?</label>
                    <input placeholder='Qual a sua Escolaridade ?' />
                    <Select name='escolaridade'>
                        <option value="Médio incompleto">Médio incompleto</option>
                        <option value="Médio completo">Médio completo</option>
                        <option value="Superior incompleto">Superior incompleto</option>
                        <option value="Superior completo">Superior completo</option>
                    </Select>


                </Label>
            </Container>

        )

    }
}

export default Etapa1;


