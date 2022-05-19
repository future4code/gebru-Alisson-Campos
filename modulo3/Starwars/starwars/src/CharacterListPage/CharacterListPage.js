import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterListPageStyles";
import {getCharacterList} from "../services/requests"
import { Background } from "./CharacterListPageStyles";

const CharacterListPage = (props) => {
    const [characterList, setCharacterList] = useState([])
    useEffect(() => {
        getCharacterList(setCharacterList)
    }, [])

    const showCharacters = () => {
        return characterList.map((character, index) => {
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
        })
    }


    return (
        <Background>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
        </Background>
    )
}
export default CharacterListPage
