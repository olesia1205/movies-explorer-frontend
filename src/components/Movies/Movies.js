import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({movies, isOwner}) {
  return (
    <div className="movies__container">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
    </div>
  );
}

export default Movies;
