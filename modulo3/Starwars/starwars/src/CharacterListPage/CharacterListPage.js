import React, { useState, useEffect } from "react";
import axios from "axios"
import BASE_URL from "../constants/constants";
import CharacterCard from "./CharacterListPageStyles";

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([])
    useEffect(() => {
        getCharacterList()
    }, [])
    const getCharacterList = () => {
        axios.get(`${BASE_URL}/people/`)
            .then((response) => setCharacterList(response.data.results))
            .catch((error) => console.log("Erro", error.data))
    }
    const showCharacters = () => {
        return characterList.map((character, index) => {
            return <CharacterCard key={index}>{character.name}</CharacterCard>
        })
    }

    return (
        <div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
        </div>
    )
}
export default CharacterListPage
