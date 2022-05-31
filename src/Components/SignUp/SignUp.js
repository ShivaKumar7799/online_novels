// import React from 'react'
// import './SingUp.css'
// import { useNavigate } from 'react-router-dom'

// function SignUp() {
//   let navigate = useNavigate()
//   return (
//    <div className='signUpContainer' >
//       <h2> Register your Self</h2>
//       <div className='inputDataFields' >
//           <label htmlFor= "firstName" > Firstname</label>
//           <input id='firstName' type="text" placeholder='Enter Firstname' /> 
//       </div>
//       <div className='inputDataFields' >
//           <label htmlFor= "lastName" > Lastname</label>
//           <input id='lastName' type="text" placeholder='Enter Lastname' /> 
//       </div>
//       <div className='inputDataFields' >
//           <label htmlFor= "email" > Email</label>
//           <input id='email' type="text" placeholder='Enter email' /> 
//       </div>
//       <div className='inputDataFields' >
//           <label htmlFor= "password" > Enter Password</label>
//           <input id='password' type="text" placeholder='Enter Password' /> 
//       </div>
//       <div className='inputDataFields' > 
//           <label htmlFor= "confirmPassword" > Confirm Password </label>
//           <input id='confirmPassword' type="text" placeholder='Re-enter Password' /> 
//       </div>
//       <div>
//       <button className='signUpBtn' onClick={() => navigate("/login")} > Submit </button>
//       </div>
//       <p> Already a User please click here to <span onClick={() => navigate('/login')} > login</span></p>
//    </div>
//   )
// }

// export default SignUp

import React from 'react'
import './SingUp.css'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import {auth} from "../FireBase/FireBase"

function SignUp() {
  // let navigate = useNavigate();
  const [signUpData,setSignUpData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })
  const {firstName, lastName,email,password, confirmPassword} = signUpData;

  const changeHandler = (event) => {
    setSignUpData({...signUpData, [event.target.name] : event.target.value})
  }

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then( user => {console.log(user);
    alert("signup successful")}
    ).catch((err) => {
      console.log(err);
      alert("invalid signUp, Please fill all the details")
    })
  }

  return (
   <form onSubmit={signUp} >
     <div className='signUpContainer' >
      <h2 className='signUpHeading' > Register your Self</h2>
      <div className='inputDataFields' >
          <label htmlFor= "firstName" > Firstname</label>
          <input id='firstName' name = "firstName" value = {firstName} onChange = {changeHandler} type="text" placeholder='Enter Firstname' required /> 
      </div>
      <div className='inputDataFields' >
          <label htmlFor= "lastName" > Lastname</label>
          <input id='lastName' name = "lastName" value = {lastName} onChange= {changeHandler} type="text" placeholder='Enter Lastname' required /> 
      </div>
      <div className='inputDataFields' >
          <label htmlFor= "email" > Email</label>
          <input id='email' name='email' value={email} onChange = {changeHandler} type="text" placeholder='Enter email' required /> 
      </div>
      <div className='inputDataFields' >
          <label htmlFor= "password" > Enter Password</label>
          <input id='password' name='password' value={password} onChange= {changeHandler} type="text" placeholder='Enter Password' required /> 
      </div>
      <div className='inputDataFields' > 
          <label htmlFor= "confirmPassword" > Confirm Password </label>
          <input id='confirmPassword' name = "confirmPassword" value = {confirmPassword} onChange = {changeHandler} type="text" placeholder='Re-enter Password' required /> 
      </div>
      <div>
      {/* <button className='signUpBtn' > Submit </button> */}
      <input className='signUpBtn' type="submit" value = "SignUp" />
      </div>
   </div>
   </form>
  )
}

export default SignUp