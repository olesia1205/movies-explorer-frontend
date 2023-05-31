import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({movies, isOwner}) {
  return (
    <main className="movies saved-movies">
      <SearchForm />
      <MoviesCardList
        movies={movies}
        isOwner={isOwner}
      />
      {
        (
          <section className="saved-movies__saveddevider" aria-label="Секция отделяющая карточки от Footer" />
        )
      }
    </main>
  );
}

export default SavedMovies;
