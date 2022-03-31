import React, { useState } from 'react'
import styled from "styled-components"
import Post from '../Post/Post'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input`
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [user, setUser] = useState("")

	const onChangeComentario = (event) => {
		setUser(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={user}
				onChange={onChangeComentario}
			/>
			<button onClick={() => {props.enviarComentario(user)} } >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario