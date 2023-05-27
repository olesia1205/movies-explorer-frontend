import React from 'react';
import likeButton from '../../../images/like-button_active.svg';
// import dislikeButton from '../../../images/like-button_inactive.svg';

function MoviesCard({movie}) {
  return (
    <article className="movie">
      <img className="movie__image" src={movie.image} alt={movie.nameRU} />
      <div className="movie__info">
        <figcaption className="movie__figcaption">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <h3 className="movie__duration">{movie.duration}</h3>
        </figcaption>
        <button className="movie__like-button" name="movie__like-button" type="button">
          <img className="movie__like-image" src={likeButton} alt="Кнопка лайка"></img>
        </button>
      </div>
    </article>
  );
}

export default MoviesCard;
