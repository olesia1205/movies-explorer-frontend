import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';
import { BASE_URL } from '../../../constants/constants';

function MoviesCardList({ movies, isLoading, onClick, limit, isSavedMovies }) {
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
                  country = {movie.country}
                  director = {movie.director}
                  duration = {movie.duration}
                  year = {movie.year}
                  description = {movie.description}
                  image = {`${BASE_URL}${movie.image.url}`}
                  trailerLink = {movie.trailerLink}
                  thumbnail = {`${BASE_URL}${movie.image.formats.thumbnail.url}`}
                  movieId = {movie.id}
                  nameRU = {movie.nameRU}
                  nameEN = {movie.nameEN}
                  key={movie.id}
                  isSavedMovies={isSavedMovies}
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
