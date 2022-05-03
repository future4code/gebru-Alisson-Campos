import React, { useState } from "react";
import CharacterListPage from "./CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";

const AppStarWars = () => {
  const [currentPage, setCurrentPage] = useState("list")
  const [detailsUrl,setDetailsUrl] = useState ("")
  const goToDetailsPage = (url) => {
    setCurrentPage ("details")
    setDetailsUrl (url)
  }
  const goToListPage = () => {
    setCurrentPage ("list")
  }
  const selectPage = () => {
    if (currentPage === "list") {
      return <CharacterListPage goToDetailsPage = {goToDetailsPage} />
    }
    else {
      return <CharacterDetailPage goToListPage = {goToListPage} url ={detailsUrl} />
    }
  }
  return (
    <div>
      {selectPage()}
    </div>
  )
}

export default AppStarWars;
