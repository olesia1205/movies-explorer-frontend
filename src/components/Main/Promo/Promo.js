import React from 'react';
import promologo from '../../../images/promo__landing-logo.svg';


function Promo() {
  return (
    <section className="promo__container" aria-label="Баннер О_проекте">
      <div className="promo__text-block">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <img className="promo__logo" src={promologo} alt="Логотип-Промо"/>
    </section>
  );
}

export default Promo;
