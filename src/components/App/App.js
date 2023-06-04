import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import moviesApi from '../../utils/MoviesApi';
import userAuth from '../../utils/UserAuth';
import { CurrentUserContext} from '../../contexts/CurrentUserContext';
import successImage from '../../images/Success.svg';
import failImage from '../../images/Fail.svg';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(JSON.parse(window.sessionStorage.getItem('lastRoute')))
    window.onbeforeunload = () => {
      window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
    }
  }, [])

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoTooltiptext, setInfoTooltiptext] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [initialMovies, setInitialMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    checkLocalStorage()
  }, []);

  useEffect(() => {
    mainApi.getToken();
    if(loggedIn) {
      mainApi.getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  const resetErrorMessage = useCallback((clearErrorMessage='') => {
    setErrorMessage(clearErrorMessage)
  }, [setErrorMessage])

  useEffect(() => {
    resetErrorMessage();
  }, [resetErrorMessage, navigate]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      userAuth.getContent(jwt)
      .then((response) => {
        setLoggedIn(true);
        setCurrentUser({
          email: response.email,
          name: response.name
        });
      })
      .catch(err => console.log(err))
    }
  }, [navigate]);

  function handleRegister({ email, password, name }) {
    setIsLoading(true);

    userAuth.register({ email, password, name })
    .then(() => {
      handleLogin({email, password});
    })
    .catch((error) => {
      setRegistered(false);
      setInfoTooltiptext('Что-то пошло не так! Попробуйте ещё раз.');
      setInfoTooltipPopupOpen(true);
      setErrorMessage(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);

    userAuth.authorize({ email, password })
    .then((response) => {
      localStorage.setItem('jwt', response.token);
      setLoggedIn(true);
      setCurrentUser({
        email: response.email,
        name: response.name
      });
      navigate('/movies');
    })
    .catch((error) => {
      setRegistered(false);
      setInfoTooltiptext('Что-то пошло не так! Попробуйте ещё раз.');
      setInfoTooltipPopupOpen(true);
      setErrorMessage(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  function handleUpdateUser({email, name}) {
    setIsLoading(true);
    mainApi.patchUserInfo({email, name})
      .then(() => {
        setCurrentUser({email, name});
        setErrorMessage('Данные успешно обновлены!')
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastRequest');
    localStorage.removeItem('checkboxState');
    localStorage.removeItem('lastRequestedMovies');
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  }

  function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function handleGetAllMovies() {
    setIsLoading(true);
    moviesApi.getAllMovies()
      .then((dataForInitialMovies) => {
        localStorage.setItem('allMovies', JSON.stringify(dataForInitialMovies));
        setInitialMovies(dataForInitialMovies);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  function checkLocalStorage() {
    const allMovies = localStorage.getItem('allMovies');
    if (allMovies) {
      setInitialMovies(JSON.parse(allMovies))
    } else {
      handleGetAllMovies();
    }
  }

  const handleMenuPopupClick = () => setIsMenuPopupOpen(true);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
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
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Header}
                  headerClass={'header'}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  component={Movies}
                    loggedIn={loggedIn}
                    initialMovies={initialMovies}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Footer}
                />
              </>
            }
          />
          <Route path='/saved-movies'
            element={
              <>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Header}
                  headerClass={'header'}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={SavedMovies}
                    movies={savedMovies}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Footer}
                />
              </>
            }
          />
          <Route path='/profile'
            element={
              <>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Header}
                    headerClass={'header'}
                    onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Profile}
                    onUpdateUserInfo={handleUpdateUser}
                    signOut={handleSignOut}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                />
              </>
            }
          />
          <Route path='/signup'
            element={
              <Register
                onRegisterUserData={handleRegister}
                isLoading={isLoading}
                errorMessage={errorMessage}
              />
            }
          />
          <Route path='/signin'
            element={
              <Login
                onLoginUserData={handleLogin}
                isLoading={isLoading}
                errorMessage={errorMessage}
              />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
