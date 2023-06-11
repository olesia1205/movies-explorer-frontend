import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import useValidation from '../../utils/Validation';

function Profile({ onUpdateUserInfo, signOut, isLoading, errorMessage }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, resetValidation, isValid } = useValidation();
  const { email, name } = values;
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    resetValidation({email: currentUser.email, name: currentUser.name});
  }, [currentUser]);

  useEffect(() => {
    let isMatch = (currentUser.name !== values.name) || (currentUser.email !== values.email);
    setIsDisabled(isMatch);
  }, [values, currentUser, isValid])

  function handleSubmit (evt) {
    evt.preventDefault();
    onUpdateUserInfo({email, name})
  };

  return (
    <form className="profile register" onSubmit={handleSubmit} noValidate>
      {isLoading ? <Preloader /> : ''}
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <fieldset className="profile__inputs-block">
        <label className="profile__label">
          <p className="profile__placeholder">Имя</p>
          <input
            className="profile__input"
            type="text"
            name="name"
            placeholder='Ваше имя'
            value={values.name || ''}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
          />
          <span className={`register__input-error ${!isValid && errors.name ? 'register__input-error_active profile__input-error_active' : ''}`} id="name-error" >{errors.name || ''}</span>
        </label>
        <label className="profile__label">
          <p className="profile__placeholder">E-mail</p>
          <input
            className="profile__input"
            type="email"
            name="email"
            placeholder='Ваш email'
            value={values.email || ''}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
          />
          <span className={`register__input-error ${!isValid && errors.email ? 'register__input-error_active profile__input-error_active' : ''}`} id="email-error">{errors.email || ''}</span>
        </label>
      </fieldset>
      <div className="profile__buttons-block">
        <p className="register__error profile__error">{errorMessage}</p>
        <button
          className={`profile__edit-button ${!isValid && errors ? 'profile__edit-button_disabled' : ''}`}
          type="submit"
          disabled={!isValid || !isDisabled}
        >Редактировать
        </button>
        <Link to="/">
          <button className="profile__signout-button" onClick={signOut}>Выйти из аккаунта</button>
        </Link>
      </div>
    </form>
  );
}

export default Profile;
