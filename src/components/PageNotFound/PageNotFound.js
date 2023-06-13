import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <section className="notfound">
      <div className="notfound__text-block">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <button
        className="notfound__link"
        type="button"
        onClick={handleClick}
      >Назад
      </button>
    </section>

  );
}

export default PageNotFound;
