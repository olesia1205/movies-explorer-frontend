import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo__main-1.svg';
import Preloader from '../Preloader/Preloader';
import useValidation from '../../utils/Validation';

function Login({...props}) {
  const { values, errors, handleChange, resetValidation, isValid } = useValidation();

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSubmit (evt) {
    evt.preventDefault();
    props.onLoginUserData({
      email: values.email,
      password: values.password
    })
  };

  return (
    <div className="register login">
      <section className="register__section" aria-label="Секция авторизации">
        <>
          <Link className="register__logo-link" to="/">
            <img className="register__logo" src={headerLogo} alt="Логотип"/>
          </Link>
          <h2 className="register__title">Рады видеть!</h2>
        </>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          {props.isLoading ? <Preloader /> : ''}
          <fieldset className="register__inputs-block">
            <label className="register__label">
              <p className="register__placeholder">E-mail</p>
              <input
              className="login__input login__input-email"
              type="email"
              name="email"
              placeholder="Ваш email"
              value={values.email || ''}
              onChange={handleChange}
              required
              pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
              />
              <span
                className={`register__input-error ${!isValid && errors.email ? 'register__input-error_active' : ''}`}
                id="email-error"
              >{errors.email || ''}
              </span>
            </label>
            <label className="register__label">
              <p className="register__placeholder">Пароль</p>
              <input
                className="login__input login__input-password"
                type="password"
                name="password"
                placeholder="Ваш пароль"
                value={values.password || ''}
                onChange={handleChange}
                required
              />
              <span
                className={`register__input-error ${!isValid && errors.password ? 'register__input-error_active' : ''}`}
                id="password-error"
              >{errors.password || ''}
              </span>
            </label>
          </fieldset>
          <div className="register__buttons-block login__buttons-block">
            <p className="register__error">{props.errorMessage}</p>
            <button
              className={`register__submit-button ${!isValid && errors ? 'register__submit-button_disabled' : ''}`}
              type="submit"
              disabled={!isValid}
            >Войти
            </button>
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
