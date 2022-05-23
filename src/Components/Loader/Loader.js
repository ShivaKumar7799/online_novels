import React from 'react'
import LoaderImage from './Loader.jpg'

function Loader() {
  return (
    <div>
       <center>
       <img src = {LoaderImage} alt='loader' />
       </center>
    </div>
  )
}

export default Loader