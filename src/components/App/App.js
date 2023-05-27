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
// import InfoTooltip from '../InfoTooltip/InfoTooltip';
import moviesArray from '../../constants/moviesArray';
import { savedMoviesArray } from '../../constants/savedMoviesArray';
// import successImage from '../../images/Success.svg';
// import failImage from '../../images/Fail.svg';

function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [ movies, setMovies ] = useState(moviesArray);
  const [ savedMovies, setSavedMovies ] = useState(savedMoviesArray);
  // const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  // const [infoTooltiptext, setInfoTooltiptext] = useState('');
  // const [registered, setRegistered] = useState(false);

  const closeAllPopups = () => {
    setIsMenuPopupOpen(false);
    // setInfoTooltipPopupOpen(false);
  }

  const handleMenuPopupClick = () => setIsMenuPopupOpen(true);

  function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header header-unlogged'}
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
        onOverlayClick={handleOverlayClick}
      />

      {/* <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        title={infoTooltiptext}
        onClose={closeAllPopups}
        onOverlayClick={handleOverlayClick}
        image={registered ? successImage : failImage}
      /> */}
    </div>
  );
}

export default App;
