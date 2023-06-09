import React from 'react';
import { Link } from 'react-router-dom';
import  accountLogo from '../../images/account__logo.svg';

function Navigation({ onMenuPopup }) {
  return (
    <nav className="navigation">
      <div className="navigation__links-movies">
        <>
          <Link className="navigation__link navigation__link-movies" to="/movies">Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
        </>
      </div>
      <div className="navigation__links-account">
        <Link className="navigation__account-button navigation__link" to="/profile">Аккаунт
          <img src={accountLogo} alt="Логотип аккаунта" className="navigation__account-logo"/>
        </Link>
        <button className="navigation__account-burger" onClick={onMenuPopup}/>
      </div>

    </nav>

  );
}

export default Navigation;
