import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import failImage from '../../images/Fail.svg';
import { MOVIES_NOT_FOUND, KEYWORD_NOT_FOUND, SHORT_FILM } from '../../constants/constants';
import { WIDTH_3_MOVIES, WIDTH_2_MOVIES, MOVIES_12_RENDER, MOVIES_8_RENDER, MOVIES_5_RENDER, MOVIES_3_ADD, MOVIES_2_ADD } from '../../constants/constants';
import useWindowWidth from '../../utils/WindowWidth';

function Movies({ loggedIn, initialMovies, onSave, onDelete, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [shotMovies, setShotMovies] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltiptext, setInfoTooltiptext] = useState('');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [moviesToInitialRender, setMoviesToInitialRender] = useState({current: 0, next: 0});
  const {width} = useWindowWidth();

  useEffect(() => {
    searchMoviesHandler();
    filterShotMoviesHandler();
  }, [searchRequest, isCheckboxActive]);

  useEffect(() => {
    checkLastRequest();
  }, []);

  useEffect(() => {
    resize()
  }, [width]);

  async function searchMoviesHandler() {
    setIsLoading(true);
    setFoundMovies([]);
    try {
      if(searchRequest.length > 0) {
        const moviesToRender = await handleSearch(initialMovies, searchRequest);
        if(moviesToRender.length === 0) {
          setInfoTooltiptext(MOVIES_NOT_FOUND);
          setInfoTooltipPopupOpen(true);
        } else {
          setRequestToLocalStorage('lastRequest', searchRequest);
          setRequestToLocalStorage('lastRequestedMovies', moviesToRender);
          setFoundMovies(moviesToRender);
          setRequestToLocalStorage('checkboxState', isCheckboxActive);
        }
      }
      //   else {
      //     setInfoTooltiptext(KEYWORD_NOT_FOUND);
      //     setInfoTooltipPopupOpen(true);
      // }
      return
    } catch(err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      const a = keyword.toLowerCase().trim();
      return movie.nameRU.toLowerCase().indexOf(a) !== -1 ||
      movie.nameEN.toLowerCase().indexOf(a) !== -1
    })
  }

  function handleFilter(moviesArray) {
    return moviesArray.filter((movie) => {
      return movie.duration <= SHORT_FILM;
    });
  }

  function filterShotMoviesHandler() {
    setShotMovies(handleFilter(foundMovies));
  }

  function setRequestToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async function checkLastRequest() {
    setIsLoading(true);
    try {
      const lastMovies = localStorage.getItem('lastRequestedMovies');
      if (lastMovies) {
        setFoundMovies(getLastRequestFromLocalStorage('lastRequestedMovies'));
      }
      const lastRequestedKeyword = localStorage.getItem('lastRequest');
      if (lastRequestedKeyword) {
        setSearchRequest(getLastRequestFromLocalStorage('lastRequest'));
      }
      const lastRequestedCheckboxState = localStorage.getItem('checkboxState');
      if (lastRequestedCheckboxState) {
        setIsCheckboxActive(getLastRequestFromLocalStorage('checkboxState'));
      }
      return
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getLastRequestFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function handleCheckboxClick(value) {
    setIsCheckboxActive(value);
  }

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function resize() {
    if( width >= WIDTH_3_MOVIES) {
      setMoviesToInitialRender({current: MOVIES_12_RENDER, next: MOVIES_3_ADD});
    } else if( width < WIDTH_2_MOVIES) {
      setMoviesToInitialRender({current: MOVIES_5_RENDER, next: MOVIES_2_ADD});
    } else {
      setMoviesToInitialRender({current: MOVIES_8_RENDER, next: MOVIES_2_ADD});
    }
  }

  function handleMoreClick() {
    setMoviesToInitialRender({current: moviesToInitialRender.current + moviesToInitialRender.next, next: moviesToInitialRender.next});
  }

  return (
    <main className="movies">
      <SearchForm
        handleSearch={setSearchRequest}
        handleCheckboxClick={handleCheckboxClick}
        // setIsCheckboxActive={setIsCheckboxActive}
        searchRequest={searchRequest}
        checkboxState={isCheckboxActive}
      />
      <MoviesCardList
        movies={isCheckboxActive ? shotMovies : foundMovies}
        isLoading={isLoading}
        onClick={handleMoreClick}
        limit={moviesToInitialRender.current}
        isSavedMovies={false}
        onSave={onSave}
        onDelete={onDelete}
        savedMovies={savedMovies}
      />
      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        title={infoTooltiptext}
        onClose={closeAllPopups}
        onOverlayClick={handleOverlayClick}
        image={failImage}
      />
    </main>
  );
}

export default Movies;
