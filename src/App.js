import Login from './Components/Login/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import BookPage from './Components/BooksPage/BookPage';
import { createContext, useState, useEffect } from 'react';
import { auth } from './Components/FireBase/FireBase';
import Authentication from './Components/Authentication/Authentication';


export const AppContext = createContext(null)

function App() {
  const [data,setData] = useState(null);
  const [presentUser, setPresentUser] = useState(null);
  useEffect( () => {
      auth.onAuthStateChanged(user => {
       if(user){
        setPresentUser({
          uid : user.uid,
          email : user.email
        })
       } else{
         setPresentUser(null)
       }
      })
  }, [])

  return (
   <>
      {presentUser ? <AppContext.Provider value= {{data,setData}} >
          <BrowserRouter>
              <Routes>
                <Route path = "/" element = { <BookPage />} />
                {/* <Route path='/login' exact element = { <Login />} /> */}
                {/* <Route path = "/signUp" element = { <SignUp /> } /> */}
                <Route path = "/novels" element = { <BookPage />} />
              </Routes>
          </BrowserRouter>
      </AppContext.Provider> : <Authentication />}
   </>
  );
}

export default App;
