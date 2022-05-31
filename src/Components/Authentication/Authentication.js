import React, { useState } from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import "./Authentication.css"

function Authentication() {
  const [showLogin,setShowLogin] = useState(true)
  return (
    <div>
      { showLogin ? <Login /> : <SignUp />}
      { showLogin ? <div className='loginDiv' >
                      <p className='loginText' >
                        Don't have an Account Sign Up here
                      </p>
                      <button onClick={() => setShowLogin(!showLogin)} > SignUp </button>
                   </div> :
                   <div className='signUpDiv' >
                      <p className='signUpText' >
                         Already have an Account Login here
                      </p>
                      <button onClick={() => setShowLogin(!showLogin)} > Login </button>
                   </div>  }
    </div>
  )
}

export default Authentication