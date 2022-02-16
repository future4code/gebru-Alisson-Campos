import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

class Final extends React.Component {
    render() {
        return (
            <Container>
                <h2> O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar, entraremos em contato!</p>
            </Container>

        )

    }
}

export default Final;