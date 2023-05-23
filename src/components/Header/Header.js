import React from 'react';
import headerLogo from '../../images/logo__main-1.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header({ loggedIn, headerClass }) {
  return (
    <header className={headerClass}>
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип"/>
      </Link>
      {loggedIn ? (
        <div className="header__navigation">
          <Navigation/>
        </div>
      ) : (
        <div className="header__button-block">
          <>
            <Link className="header__link" to="/signup">Регистрация</Link>
            <Link className="header__button" to="/signin">Войти</Link>
          </>
        </div>
      )}

    </header>
  );
}

export default Header;
