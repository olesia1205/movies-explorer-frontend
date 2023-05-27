import React from 'react';
import myFoto from '../../../images/foto.png';

function AboutMe() {
  return (
    <section className="aboutMe" aria-label="Секция обо мне">
      <h2 className="aboutMe__subtitle">Студент</h2>
      <div className="aboutMe__infoblock">
        <section className="aboutMe__section" aria-label="Рассказ о себе">
          <h3 className="aboutMe__section-subtitle">Олеся</h3>
          <p className="aboutMe__section-text">Фронтенд-разработчик, 41 год</p>
          <p className="aboutMe__text">Я родилась и выросла в Троицке, научном городке под Москвой.
            Закончила Геологоразведочный Университет по специальности "инженерная геология и гидрогеология".
            Защитила также диплом во Фрайбергской Горной Академии Германии, на факультете "Геология, геотехника и горное дело".
            Люблю учиться новому, слушать музыку, увлекаюсь фотографией и постобработкой.
            Недавно начала кодить. В 2022 году пошла на курс по веб-разработке. Данный проект является итоговой работой на этом курсе.</p>
          <a className="aboutMe__link" href="https://github.com/olesia1205" target="_blank" rel="noreferrer">Github</a>
        </section>
        <img className="aboutMe__foto" src={myFoto} alt="Мое фото"/>
      </div>
    </section>
  );
}

export default AboutMe;
