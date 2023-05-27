import React from 'react';
import { Link } from 'react-router-dom';
import  accountLogo from '../../images/account__logo.svg';

function Menu({ isOpen, onClose, onOverlayClick }) {
  return (
    <div className={`menu  ${isOpen ? 'menu_is-opened' : ''}`} onClick={onOverlayClick} >
      <div className="menu__container">
        <button className="menu__close-button" type="button" onClick={onClose} />
        <div className="menu__links">
          <>
            <button className="menu__link-button" type="button" onClick={onClose}>
              <Link className="menu__link" to="/">Главная</Link>
            </button>
            <button className="menu__link-button" type="button" onClick={onClose}>
              <Link className="menu__link" to="/movies">Фильмы</Link>
            </button>
            <button className="menu__link-button" type="button" onClick={onClose}>
              <Link className="menu__link" to="/saved-movies">Сохранённые фильмы</Link>
            </button>
          </>
        </div>
        <button className="menu__account" type="button" onClick={onClose}>
          <Link className="menu__account-button" to="/profile">Аккаунт
            <button className="menu__account-logo" >
              <img src={accountLogo} alt="Логотип аккаунта" />
            </button>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Menu;
