import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio__container">
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <ul className="portfolio__infoblock">
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://olesia1205.github.io/how-to-learn/index.html">Статичный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://olesia1205.github.io/russian-travel/index.html">Адаптивный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://olesia1205.github.io/react-mesto-auth/index.html">Одностраничное приложение
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
