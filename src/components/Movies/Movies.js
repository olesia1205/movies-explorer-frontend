import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ loggedIn, initialMovies, handleSearch }) {
  const [foundMovies, setFoundMovies] =useState([]);
  const [searchRequest, setSearchRequest] = useState([]);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);

  useEffect(() => {
    checkFoundMovies()
  }, []);

  useEffect(() => {
    searchMoviesHandler();
  }, [searchRequest, isCheckboxActive]);

  function searchMoviesHandler() {
    if(searchRequest.length > 0) {
      setFoundMovies(handleSearch(initialMovies, searchRequest));
      setRequestToLocalStorage('lastRequest', searchRequest);
    }
  }

  function setRequestToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function checkFoundMovies() {
    const lastSearchRequest = localStorage.getItem('lastRequest');
    if (lastSearchRequest) {
      setSearchRequest(getLastRequestFromLocalStorage('lastRequest'))
    }
  }

  function getLastRequestFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }


  return (
    <main className="movies">
      <SearchForm
        handleSearch={setSearchRequest}
        setIsCheckboxActive={setIsCheckboxActive}
      />
      <MoviesCardList
        movies={foundMovies}
      />
    </main>
  );
}

export default Movies;
