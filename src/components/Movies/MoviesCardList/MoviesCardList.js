import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, isOwner}) {

  return (
    <>
      <section className="movies-section" aria-label="Секция с карточками">
        {
          movies?.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
              />
            )
          }
        )}
      </section>
      {
        (!isOwner &&
          <section className="more-section" aria-label="Секция с кнопкой еще">
             <button className="more-section__button">Ещё</button>
          </section>
        )
      }
    </>
  );
}

export default MoviesCardList;
