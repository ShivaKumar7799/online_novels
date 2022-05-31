// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import './Login.css'

// function Login() {
//   let navigate = useNavigate()
//   return (
//     <div className='loginContainer' >
//       <h2 id='loginHere' > Login here</h2>
//       <div className='inputDataFields' >
//           <label htmlFor = "userName" > Username</label>
//           <input id='userName' type="text" placeholder='Enter Username' /> 
//       </div> 
//       <br />
//       <div className='inputDataFields' >
//           <label htmlFor = "password">  password</label>
//           <input id='password' type = "password" placeholder='Enter Password' /> <br/>
//       </div>
//       <br />
      
//       <button className='loginBtn' onClick={() => navigate('/novels')} > Login</button>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import {auth} from "../FireBase/FireBase"

function Login() {
  // let navigate = useNavigate();
  const [data,setData] = useState({
    email : "",
    password : ""
  })
  const {email,password} = data;

  const changeHandler = (event) => {
    setData({...data, [event.target.name] : event.target.value})
  }
  const login = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(user => console.log(user)
    ).catch(err => {console.log(err);
        alert("invalid login/password")})
  }
  return (
    <form>
      <div className='loginContainer' >
      <h2 id='loginHere' > Login here</h2>
      <div className='inputDataFields' >
          <label htmlFor = "email" > Email</label>
          <input id='email' name='email'  type="email" value={email} onChange = {changeHandler} placeholder='Enter Email' /> 
      </div> 
      <br />
      <div className='inputDataFields' >
          <label htmlFor = "password">  password</label>
          <input id='password' name='password' type = "password" value={password} onChange = {changeHandler} placeholder='Enter Password' /> <br/>
      </div>
      <br />
      <button className='loginBtn' onClick={login} > Login</button>
    </div>
    </form>
  )
}

export default Login