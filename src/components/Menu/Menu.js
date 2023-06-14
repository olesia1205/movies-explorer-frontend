import React from 'react';
import { Link } from 'react-router-dom';
import  accountLogo from '../../images/account__logo.svg';

function Menu({ isOpen, onClose, onOverlayClick }) {
  return (
    <div className={`menu  ${isOpen ? 'menu_is-opened' : ''}`} onClick={onOverlayClick} >
      <nav className="menu__container">
        <button className="menu__close-button" type="button" onClick={onClose} />
        <ul className="menu__links">
            <li className="menu__link-button" onClick={onClose}>
              <Link className="menu__link" to="/">Главная</Link>
            </li>
            <li className="menu__link-button" onClick={onClose}>
              <Link className="menu__link" to="/movies">Фильмы</Link>
            </li>
            <li className="menu__link-button" onClick={onClose}>
              <Link className="menu__link" to="/saved-movies">Сохранённые фильмы</Link>
            </li>
        </ul>
        <div className="menu__account">
          <Link className="menu__account-button" to="/profile" onClick={onClose}>Аккаунт
            <img src={accountLogo} alt="Логотип аккаунта" className="menu__account-logo"/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
