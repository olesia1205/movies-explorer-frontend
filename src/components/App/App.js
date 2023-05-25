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
import Menu from '../Menu/Menu';
import moviesArray from '../../constants/moviesArray';
import { savedMoviesArray } from '../../constants/savedMoviesArray';


function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [ movies, setMovies ] = useState(moviesArray);
  const [ savedMovies, setSavedMovies ] = useState(savedMoviesArray);

  const closeAllPopups = () => {
    setIsMenuPopupOpen(false);
  }

  const handleMenuPopupClick = () => setIsMenuPopupOpen(true);

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
                onMenuPopup={handleMenuPopupClick}
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
                onMenuPopup={handleMenuPopupClick}
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
                onMenuPopup={handleMenuPopupClick}
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

      <Menu
        isOpen={isMenuPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
