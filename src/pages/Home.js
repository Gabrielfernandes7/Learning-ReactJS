import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();  
    

  return (
    <div>
        <h1>Home</h1>
        <p>Conteúdo da página</p>
        <button onClick={() => {
            navigate('/empresa')
        }}>teste</button>
    </div>
  )
}

export default Home