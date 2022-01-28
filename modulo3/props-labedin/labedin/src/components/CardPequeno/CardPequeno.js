import React from "react";
import './CardPequeno.css'

const Email = (props) => {
  return (
    <div className="email">
      <img src={props.imagem}/> 
      <p>{props.email}</p>
     
</div>
  )
}

 export const Endereco = (props) => {

    return (
        <div className="email">
         <img src={props.imagem}></img>
         <p>{props.endereco}</p>
        </div>
    )
}

export default Email;


