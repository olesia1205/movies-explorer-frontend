import React from 'react';

function Techs() {
  return (
    <section className="techs" aria-label="Секция о технологиях">
      <h2 className="techs__subtitle">Технологии</h2>
      <section className="techs__section" aria-label="О технологиях в дипломе">
        <h3 className="techs__section-subtitle">7 технологий</h3>
        <p className="techs__section-text">На курсе веб-разработки мы освоили
        технологии, которые применили в дипломном проекте.</p>
      </section>
      <section className="techs__section-info" aria-label="Блок с технологиями">
        <p className="techs__block">HTML</p>
        <p className="techs__block">CSS</p>
        <p className="techs__block">JS</p>
        <p className="techs__block">React</p>
        <p className="techs__block">Git</p>
        <p className="techs__block">Express.js</p>
        <p className="techs__block">mongoDB</p>
      </section>
    </section>
  );
}

export default Techs;
