import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo__main-1.svg';
import Preloader from '../Preloader/Preloader';
import useValidation from '../../utils/Validation';

function Register({...props}) {
  const { values, errors, handleChange, resetValidation, isValid } = useValidation();

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSubmit (evt) {
    evt.preventDefault();
    props.onRegisterUserData({
      email: values.email,
      password: values.password,
      name: values.name
    })
  };

  return (
    <div className="register">
      <section className="register__section" aria-label="Секция регистрации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Логотип"/>
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          {props.isLoading ? <Preloader /> : ''}
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">Имя</p>
              <input
                className="register__input register__input-name"
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={values.name || ''}
                onChange={handleChange}
                required
                minLength="2"
                maxLength="30"
                pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
              />
              <span className={`register__input-error ${!isValid && errors.name ? 'register__input-error_active' : ''}`} id="name-error" >{errors.name || ''}</span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input
                className="register__input register__input-email"
                type="email"
                name="email"
                placeholder="Ваш email"
                value={values.email || ''}
                onChange={handleChange}
                required
                pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
              />
              <span className={`register__input-error ${!isValid && errors.email ? 'register__input-error_active' : ''}`} id="email-error">{errors.email || ''}</span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input
              className="register__input register__input-password"
              type="password"
              name="password"
              placeholder="Ваш пароль"
              value={values.password || ''}
              onChange={handleChange}
              required
              />
              <span className={`register__input-error ${!isValid && errors.password ? 'register__input-error_active' : ''}`} id="password-error">{errors.password || ''}</span>
            </label>
          </fieldset>
          <div className="register__buttons-block">
            <p className="register__error">{props.errorMessage}</p>
            <button
              className={`register__submit-button ${!isValid && errors ? 'register__submit-button_disabled' : ''}`}
              type="submit"
              disabled={!isValid}
            >Зарегистрироваться
            </button>
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
