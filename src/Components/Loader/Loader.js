import React from 'react'
import LoaderImage from './Loader.jpg'

function Loader() {
  return (
    <div>
       <center>
       <img style={{width : "50%", height: "50%", marginTop : "50px"}} src = {LoaderImage} alt='loader' />
       </center>
    </div>
  )
}

export default Loader