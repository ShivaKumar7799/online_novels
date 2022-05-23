import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BookComponent from './BookComponent/BookComponent'
import {useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../../App'
import Loader from '../Loader/Loader'
import './BookPage.css'


function BookPage() {
  const navigate = useNavigate();
  const {data,setData} = useContext(AppContext)

  useEffect( () => {
    const url = "https://lxkdtnbp26.execute-api.ap-south-1.amazonaws.com/dev/books"
    axios.get(url).then((resp) => {
      console.log(resp.data);
      setData(resp.data)
    })
  } , [])

  return (
    <div>
        <div className='logoutBtn' > 
           <button id='logoutButton' onClick={() => navigate('/')} > Logout</button>
        </div>

        { data ? data.map((item, index) => <BookComponent index = {index} data = {data} key={index} />) :  <Loader />}
    </div>
  )
}

export default BookPage