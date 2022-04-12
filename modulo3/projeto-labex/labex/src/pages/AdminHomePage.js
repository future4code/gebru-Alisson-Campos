import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate ()
  const goToAboutPage = () => {
    navigate("/login")
  }
  return (
    <div>
      <h3>Home</h3>
      <div> <div>
        <button onClick={goToAboutPage} >Página Sobre</button>
      </div></div>
    </div>
  )


}

export default App;