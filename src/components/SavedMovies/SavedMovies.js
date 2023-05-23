import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({movies, isOwner}) {
  return (
    <div className="movies__container">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
      {
        (
          <section className="movies__saveddevider" aria-label="Секция отделяющая карточки от Footer" />
        )
      }
    </div>
  );
}

export default SavedMovies;
