import styled from "styled-components"
const CharacterCard = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display:flex;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
align-items: center;
justify-content: center;
&:hover {
    cursor: pointer;
    background-color : lightcoral
}
`
export const Background = styled.div`
background-color: orange;
align-items:center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:bolder;
border:solid black;
`
export const Botao = styled.button`
background-color: greenyellow;
display:flex;
justify-content:center;
align-items: center;
&:hover {
    cursor: pointer;
    background-color : orange;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`
export default CharacterCard
