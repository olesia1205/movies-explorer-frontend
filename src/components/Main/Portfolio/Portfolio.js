import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio" aria-label="Секция портфолио">
      <h3 className="portfolio__subtitle">Портфолио</h3>
      <ul className="portfolio__infoblock">
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://olesia1205.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer">Статичный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://olesia1205.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">Адаптивный сайт
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__link">
          <a className="portfolio__text" href="https://olesia1205.github.io/react-mesto-auth/index.html" target="_blank" rel="noreferrer">Одностраничное приложение
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
