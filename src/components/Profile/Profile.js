import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ userData }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    // props.onUpdateUser({
    //   name: values.name,
    //   about: values.about
    // });
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, {userData.name}!</h2>
      <fieldset className="profile__inputs-block">
        <label className="profile__label">
          <p className="profile__placeholder">Имя</p>
          <input
            className="profile__input profile__input-name"
            type="text"
            name="name"
            placeholder="Ваше имя"
            // value={values.name || ''}
            required minLength="2"
            maxLength="30"
          />
        </label>
        <label className="profile__label">
          <p className="profile__placeholder">E-mail</p>
          <input
            className="profile__input profile__input-email"
            type="email"
            placeholder="Email"
            required
          />
        </label>
      </fieldset>
      <div className="profile__buttons-block">
        <button className="profile__edit-button" type="submit">Редактировать</button>
        <Link to="/">
          <button className="profile__signout-button">Выйти из аккаунта</button>
        </Link>
      </div>
    </form>
  );
}

export default Profile;
