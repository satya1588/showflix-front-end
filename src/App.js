import React from 'react';
import './App.css';
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import MoviePage from './pages/Movies';
import Signup from './pages/Signup';
import Showflix from "./pages/Showflix"
import Player from './pages/Player';
import TVShows from "./pages/TVShow";
import UserListedMovies from "./pages/UserListedMovies";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route exact path='/login' element={<Login/>} />
<Route exact path='/signup' element={<Signup/>}  />
<Route exact path='/player' element={<Player/>}/>
<Route exact path="/tv" element={<TVShows />} />
<Route exact path="/mylist" element={<UserListedMovies />} />
<Route exact path='movies'  element={<MoviePage />}/>
<Route exact path="/new" element={<Player />} />
<Route exact path='/' element={<Showflix/>} />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}
