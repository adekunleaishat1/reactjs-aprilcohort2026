import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
   const navigate = useNavigate()
   
    const goback = () => {
      navigate("/")
    }
  return (
    <div>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <button onClick={goback}>Go Home</button>
    </div>
  )
}

export default Notfound