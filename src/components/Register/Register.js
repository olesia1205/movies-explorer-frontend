import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo__main-1.svg';

function Register() {
  return (
    <div className="register">
      <section className="register__section" aria-label="Секция регистрации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Логотип"/>
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </>
        <form className="register__form">
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">Имя</p>
              <input className="register__input register__input-name" type="text" placeholder="Виталий" required minLength="2"/>
              <span className="register__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input className="register__input register__input-email" type="email" placeholder="pochta@yandex.ru" required minLength="2"/>
              <span className="register__input-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input className="register__input register__input-password" type="password" placeholder="" required />
              <span className="register__input-error">Что-то пошло не так...</span>
            </label>
          </fieldset>
          <div className="register__buttons-block">
            <button  className="register__submit-button" type="submit" name="submit-button" >Зарегистрироваться</button>
            <div className="register__link-block">
              <p className="register__link register__link-text">Уже зарегистрированы?</p>
              <Link className="register__link" to="/signin">Войти</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
