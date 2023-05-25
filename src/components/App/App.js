import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import moviesArray from '../../constants/moviesArray';
import { savedMoviesArray } from '../../constants/savedMoviesArray';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [ movies, setMovies ] = useState(moviesArray);
  const [ savedMovies, setSavedMovies ] = useState(savedMoviesArray);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header__unlogged'}
              />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path='/movies'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
              />
              <Movies
                movies={movies}
                isOwner={false}
              />
              <Footer />
            </>
          }
        />
        <Route path='/saved-movies'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
              />
              <SavedMovies
                movies={savedMovies}
                isOwner={true}
              />
              <Footer />
            </>
          }
        />
        <Route path='/profile'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
              />
              <Profile />
            </>
          }
        />
        <Route path='/signup'
          element={
            <Register />
          }
        />
        <Route path='/signin'
          element={
            <Login />
          }
        />
        <Route path='*'
          element={
            <PageNotFound/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
