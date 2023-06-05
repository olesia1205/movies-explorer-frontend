import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList({ movies, isLoading, onClick, limit, isSavedMovies, onSave, onDelete, savedMovies }) {
  return (
    <>
      <section className="movies-section" aria-label="Секция с карточками">
        {
          isLoading ? <Preloader /> :
            movies?.map((movie, index, array) => {
              const renderLimit = isSavedMovies ? array.length : limit;

              return (
                index < renderLimit &&
                <MoviesCard
                  isSavedMovies={isSavedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
                  movie={movie}
                  savedMovies={savedMovies}
                  key={movie.movieId}
                />
              )
            }
        )}
      </section>
      {
        (!isSavedMovies && movies.length > limit) &&
          (
            <section className="more-section" aria-label="Секция с кнопкой еще">
              <button
                className="more-section__button"
                type="button"
                onClick={onClick}
              >Ещё
              </button>
            </section>
          )
      }
    </>
  );
}

export default MoviesCardList;
