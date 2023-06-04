import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import failImage from '../../images/Fail.svg';
import { MOVIES_NOT_FOUND, KEYWORD_NOT_FOUND } from '../../constants/constants';

function Movies({ loggedIn, initialMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [infoTooltiptext, setInfoTooltiptext] = useState('');
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);

  useEffect(() => {
    checkLastRequest();
  }, []);

  useEffect(() => {
    searchMoviesHandler();
  }, [searchRequest, isCheckboxActive]);

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
          setFoundMovies(moviesToRender);
          setRequestToLocalStorage('lastRequest', searchRequest);
          setRequestToLocalStorage('lastRequestedMovies', foundMovies);
          setRequestToLocalStorage('checkboxState', isCheckboxActive);
        }
      } else {
        // setInfoTooltiptext(KEYWORD_NOT_FOUND);
        // setInfoTooltipPopupOpen(true);
      }
    } catch(err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(moviesArray, keyword) {
    return moviesArray.filter((movie) => {
      return movie.nameRU.includes(keyword.toLowerCase());
    })
  }

  function setRequestToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function checkLastRequest() {
    const lastSearchRequest = localStorage.getItem('lastRequest');
    if (lastSearchRequest) {
      setSearchRequest(getLastRequestFromLocalStorage('lastRequest'))
    }
    return
  }

  function getLastRequestFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function closeAllPopups() {
    setInfoTooltipPopupOpen(false);
  }

  function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  return (
    <main className="movies">
      <SearchForm
        handleSearch={setSearchRequest}
        setIsCheckboxActive={setIsCheckboxActive}
      />
      <MoviesCardList
        movies={foundMovies}
        isLoading={isLoading}
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
