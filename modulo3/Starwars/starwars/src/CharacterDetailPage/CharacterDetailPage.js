import React, { useState, useEffect } from "react";
import { getCharacterDetails, getPlanetDetails } from "../services/requests";
import { Background , Botao} from "../CharacterListPage/CharacterListPageStyles";

const CharacterDetailPage = (props) => {
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails(props.url,setDetails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld,setPlanet)
    }, [details.homeworld])


    return (
        <Background>
            <h1>Detalhes do Personagens</h1>
            {details.name && planet.name ?
            <div>
              <p>Nome: {details.name}</p>
            <p>Planeta de Origem: {planet.name}</p>
            </div> : <p>Aguarde um momento</p>}
            
            <Botao onClick={props.goToListPage}> Voltar para a lista de Personagens</Botao>
        </Background>
    )
}
export default CharacterDetailPage
