import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import mainApi from '../../utils/MainApi';
import userAuth from '../../utils/UserAuth';
import moviesArray from '../../constants/moviesArray';
import { savedMoviesArray } from '../../constants/savedMoviesArray';
import successImage from '../../images/Success.svg';
import failImage from '../../images/Fail.svg';

function App() {
  const navigate = useNavigate();

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltiptext, setInfoTooltiptext] = useState('');
  const [registered, setRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(moviesArray);
  const [savedMovies, setSavedMovies] = useState(savedMoviesArray);
  const [userData, setUserData] =useState({
    email: '',
    name: ''
  })

  const closeAllPopups = () => {
    setIsMenuPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  }

  const handleMenuPopupClick = () => setIsMenuPopupOpen(true);

  function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  // useEffect(() => {
  //   mainApi.getToken();
  //   if(loggedIn) {
  //     mainApi.getAllNeededData()
  //     .then(([dataForUserInfo, dataForInitialCards]) => {
  //       // console.log([dataForUserInfo, dataForInitialCards]);
  //       setCurrentUser(dataForUserInfo);
  //       setCards(dataForInitialCards);
  //     })
  //     .catch(err => console.log(err))
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      userAuth.getContent(jwt)
      .then((response) => {
        // console.log(response);
        setLoggedIn(true);
        setUserData({
          email: response.email,
          name: response.name
        });
        navigate ('/movies');
      })
      .catch(err => console.log(err))
    }
  }, [navigate]);

  function handleRegister({ email, password, name }) {
    setIsLoading(true);

    userAuth.register({ email, password, name })
    .then(() => {
      setRegistered(true);
      setInfoTooltiptext('Вы успешно зарегистрировались!');
      setInfoTooltipPopupOpen(true);
      navigate('/signin');
    })
    .catch((error) => {
      setRegistered(false);
      setInfoTooltiptext('Что-то пошло не так! Попробуйте ещё раз.');
      setInfoTooltipPopupOpen(true);
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
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
            <Register
              onRegisterUserData={handleRegister}
              isLoading={isLoading}
            />
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

      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        title={infoTooltiptext}
        onClose={closeAllPopups}
        onOverlayClick={handleOverlayClick}
        image={registered ? successImage : failImage}
      />
    </div>
  );
}

export default App;
