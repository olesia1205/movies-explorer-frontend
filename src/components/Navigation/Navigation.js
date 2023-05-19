import React from 'react';
import { Link } from 'react-router-dom';
import  accountLogo from '../../images/account__logo.svg';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__links_movies">
        <>
          <Link className="navigation__link navigation__link-movies" to="/movies">Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
        </>
      </div>
      <div className="navigation__links_account">
        <Link className="navigation__account-button navigation__link" to="/profile">Аккаунт
          <button className="navigation__account-logo">
            <img src={accountLogo} alt="Логотип аккаунта" />
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
