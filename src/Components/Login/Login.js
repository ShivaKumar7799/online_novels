import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  let navigate = useNavigate()
  return (
    <div className='loginContainer' >
      <h2 id='loginHere' > Login here</h2>
      <div className='inputDataFields' >
          <label htmlFor = "userName" > Username</label>
          <input id='userName' type="text" placeholder='Enter Username' /> 
      </div> 
      <br />
      <div className='inputDataFields' >
          <label htmlFor = "password">  password</label>
          <input id='password' type = "password" placeholder='Enter Password' /> <br/>
      </div>
      <br />
      
      <button className='loginBtn' onClick={() => navigate('/novels')} > Login</button>
    </div>
  )
}

export default Login