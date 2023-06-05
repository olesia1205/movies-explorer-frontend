import React from 'react';
import likeButton from '../../../images/like-button_active.svg';
import dislikeButton from '../../../images/like-button_inactive.svg';
import movieDuration from '../../../utils/DurationChange';
import deleteMovieButton from '../../../images/delete-movie-button.svg';

function MoviesCard({isSavedMovies, onSave, onDelete, movie, savedMovies})
  {
    const {nameRU, image, duration, trailer} = movie;
    const convertedDuration = movieDuration(duration);

    let isLiked = false;
    let likedId;
    isLiked = savedMovies.some((item) => {
      if (item.movieId === movie.movieId) {
        likedId = item._id;
        return true;
      }
      return false;
    })

    const buttonImage = (isSavedMovies ? deleteMovieButton : isLiked ? likeButton : dislikeButton);

    return (
      <article className="movie">
        <img className="movie__image" src={image} alt={nameRU} />
        <div className="movie__info">
          <figcaption className="movie__figcaption">
            <h2 className="movie__title">{nameRU}</h2>
            <h3 className="movie__duration">{convertedDuration}</h3>
          </figcaption>
          <button
            className="movie__like-button"
            name="movie__like-button"
            type="button"
            onClick={() => {
              isLiked ? onDelete(movie._id ? movie._id : likedId) : onSave(movie);
            }}
          >
            <img className="movie__like-image" src={buttonImage} alt="Кнопка лайка"></img>
          </button>
        </div>
      </article>
    );
  }

export default MoviesCard;
