import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__infoblock">
        <p className="footer__copyright">&#169; 2023</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a className="footer__link-text" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__link">
            <a className="footer__link-text" href="https://github.com/olesia1205" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
