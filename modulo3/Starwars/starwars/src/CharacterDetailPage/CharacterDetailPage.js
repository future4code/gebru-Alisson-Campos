import React from "react";

const CharacterDetailPage = (props) =>{
    return (
<div>
   <h1>Detalhes do Personagens</h1>
   <p>{props.url}</p>
   <button onClick={props.goToListPage}> Voltar para a lista de Personagens</button>
</div>
    )
} 
export default CharacterDetailPage
