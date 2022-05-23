import React from 'react'
import './SingUp.css'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  let navigate = useNavigate()
  return (
   <div className='signUpContainer' >
      <h2> Register your Self</h2>
      <div className='inputDataFields' >
          <label htmlFor= "firstName" > Firstname</label>
          <input id='firstName' type="text" placeholder='Enter Firstname' /> 
      </div>
      <div className='inputDataFields' >
          <label htmlFor= "lastName" > Lastname</label>
          <input id='lastName' type="text" placeholder='Enter Lastname' /> 
      </div>
      <div className='inputDataFields' >
          <label htmlFor= "email" > Email</label>
          <input id='email' type="text" placeholder='Enter email' /> 
      </div>
      <div className='inputDataFields' >
          <label htmlFor= "password" > Enter Password</label>
          <input id='password' type="text" placeholder='Enter Password' /> 
      </div>
      <div className='inputDataFields' > 
          <label htmlFor= "confirmPassword" > Confirm Password </label>
          <input id='confirmPassword' type="text" placeholder='Re-enter Password' /> 
      </div>
      <div>
      <button className='signUpBtn' onClick={() => navigate("/login")} > Submit </button>
      </div>
      <p> Already a User please click here to <span onClick={() => navigate('/login')} > login</span></p>
   </div>
  )
}

export default SignUp