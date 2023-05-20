import React, { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesArray from '../../constants';

function Movies() {
  const [movies, setMovies] = useState(moviesArray);

  return (
    <div className="movies__container">
      <SearchForm />
      <MoviesCardList
        movies={movies}
      />
    </div>
  );
}

export default Movies;
