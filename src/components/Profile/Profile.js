import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <form className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <fieldset className="profile__inputs-block">
        <label className="profile__label">
          <p className="profile__placeholder">Имя</p>
          <input className="profile__input profile__input-name" type="text" placeholder="Виталий" required minLength="2"/>
        </label>
        <label className="profile__label">
          <p className="profile__placeholder">E-mail</p>
          <input className="profile__input profile__input-email" type="email" placeholder="pochta@yandex.ru" required minLength="2"/>
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
