import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  let navigate = useNavigate();
  return (
    <center>
      <h1> Welcome to Online Novels Store</h1>
      <button onClick={() => navigate('/login')} > User Login</button>
      <button onClick={() => navigate("/signUp")} >User Sing Up</button>
    </center>
  )
}

export default HomePage