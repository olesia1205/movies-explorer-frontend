import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className="notfound">
      <div className="notfound__text-block">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <Link className="notfound__link" to="/">Назад</Link>
    </section>

  );
}

export default PageNotFound;
