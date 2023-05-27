import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ movies, isOwner }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
    </main>
  );
}

export default Movies;
