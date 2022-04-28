import React, { useState } from "react";
import CharacterListPage from "./CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";

const AppStarWars = () => {
  const [currentPage, setCurrentPage] = useState("list")

  const selectPage = () => {
    if (currentPage === "list") {
      return <CharacterListPage />
    }
    else {
      return <CharacterDetailPage />
    }
  }
  return (
    <div>
      {selectPage()}
    </div>
  )
}

export default AppStarWars;
