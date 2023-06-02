import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  const BASE_URL = "https://api.nomoreparties.co";

  return (
    <>
      <section className="movies-section" aria-label="Секция с карточками">
        {
          movies?.map((movie) => {
            return (
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
              />
            )
          }
        )}
      </section>
      {
        (
          <section className="more-section" aria-label="Секция с кнопкой еще">
             <button className="more-section__button">Ещё</button>
          </section>
        )
      }
    </>
  );
}

export default MoviesCardList;
