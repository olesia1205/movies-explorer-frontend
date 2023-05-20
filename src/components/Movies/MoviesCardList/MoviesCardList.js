import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies}) {

  return (
    <>
      <section className="movies__section" aria-label="Секция с карточками">
        {
          movies?.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie._id}
              />
            )
          }
        )}
      </section>
      {
        (
          <section className="movies__section-more" aria-label="Секция с кнопкой еще">
            <button className="movies__more-button">Ещё</button>
          </section>
        )
      }
    </>
  );
}

export default MoviesCardList;
