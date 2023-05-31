import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ movies, isOwner, handleSearch }) {
  return (
    <main className="movies">
      <SearchForm handleSearch={handleSearch} />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
    </main>
  );
}

export default Movies;
