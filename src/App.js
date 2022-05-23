import Login from './Components/Login/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import BookPage from './Components/BooksPage/BookPage';
import { createContext, useState } from 'react';

export const AppContext = createContext(null)

function App() {
  const [data,setData] = useState(null);
  return (
   <>
      <AppContext.Provider value= {{data,setData}} >
          <BrowserRouter>
              <Routes>
                <Route path = "/" element = { <HomePage />} />
                <Route path='/login' exact element = { <Login />} />
                <Route path = "/signUp" element = { <SignUp /> } />
                <Route path = "/novels" element = { <BookPage />} />
              </Routes>
          </BrowserRouter>
      </AppContext.Provider>
   </>
  );
}

export default App;
