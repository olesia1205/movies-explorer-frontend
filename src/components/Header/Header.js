import React from 'react';
import headerLogo from '../../images/logo__main-1.svg';
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип"/>
      <div className="header__button-block">
        <p className="header__link">Регистрация</p>
        <button className="header__button">Войти
          {/* <Link className='header__link'>{headerText}</Link> */}
        </button>
      </div>
    </header>
  );
}

export default Header;
