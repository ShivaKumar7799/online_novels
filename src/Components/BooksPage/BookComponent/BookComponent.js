import React from 'react'
import Loader from '../../Loader/Loader'
import './BookComponent.css'

function BookComponent({data, index}) {
  return (
    <div className='bookContainer'>
   
      <div>
      <img height="200px" width = "150px" src = {data[index].coverImage} />
      <h4> World War </h4>
      </div>

       <div>
          <h2 id="title" > {data[index].isbn} </h2>
          <p> by Martin Dugard <span id= 'author' > Goodreads Author</span></p>
          
          {data[index].description.map( (item,index) => <p className='descriptionText' key={index} > {item.text}</p>)}
       </div>
       
       <div>
       {/* <table>
          <tbody>
          {data[index].genre.map((item, index) => (<tr key={index}><td>{item}</td><td>{index}</td></tr>) )}
          </tbody>
       </table> */}
       <p id='genresHeading' >GENRES</p> 
       {data[index].genre.map((item, index) => (<p className='genres' key={index}><span className='genre' >{item}</span> <span className='genre' > {Math.floor(Math.random() * 100)}  users </span></p>) )}
       </div>
       <hr />
    </div>
  )
}

export default BookComponent