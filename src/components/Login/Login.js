import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo__main-1.svg';
import Preloader from '../Preloader/Preloader';

function Login({...props}) {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function handleChange (evt) {
    const {name, value} = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  };

  function handleSubmit (evt) {
    evt.preventDefault();
    props.onLoginUserData({
      email: userData.email,
      password: userData.password
    })
  };

  return (
    <div className="register login">
      <section className="register__section" aria-label="Секция регистрации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Логотип"/>
          </Link>
          <h2 className="register__title">Рады видеть!</h2>
        </>
        <form className="register__form" onSubmit={handleSubmit}>
          {props.isLoading ? <Preloader /> : ''}
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input
              className="login__input login__input-email"
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email || ''}
              onChange={handleChange}
              required
              minLength="2"
              />
              <span className="login__input-error" id="email-error"></span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input
                className="login__input login__input-password"
                type="password"
                name="password"
                placeholder="Пароль"
                value={userData.password || ''}
                onChange={handleChange}
                required
              />
              <span className="login__input-error" id="password-error"></span>
            </label>
          </fieldset>
          <div className="login__buttons-block">
            <button  className="register__submit-button" type="submit" name="submit-button" >Войти</button>
            <div className="register__link-block">
              <p className="register__link register__link-text">Ещё не зарегистрированы?</p>
              <Link className="register__link" to="/signup">Регистрация</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
