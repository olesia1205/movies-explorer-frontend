import React from 'react';
import myFoto from '../../../images/foto.png';

function AboutMe() {
  return (
    <div className="aboutMe__container">
      <h2 className="aboutProject__subtitle">Студент</h2>
      <div className="aboutMe__infoblock">
        <section className="aboutMe__section" aria-label="Рассказ о себе">
          <h3 className="aboutMe__section-subtitle">Олеся</h3>
          <p className="aboutMe__section-text">Фронтенд-разработчик, 41 год</p>
          <p className="aboutMe__text">Я родилась и выросла в Троицке, научном городке под Москвой.<br/>
            Закончила Геологоразведочный Университет по специальности "инженерная геология и гидрогеология".
            Защитила также диплом во Фрайбергской Горной Академии, в Германии, на факультете "Геология, геотехника и горное дело".<br/>
            Люблю учиться новому, слушать музыку, работать с графикой, увлекаюсь также фотографией и постобработкой.<br/>
            Недавно начала кодить. В 2022 году пошла на курс по веб-разработке. Данный проект является финальной работой на этом курсе.</p>
          <a className="aboutMe__link" href="https://github.com/olesia1205" target="_blank" rel="noreferrer">Github</a>
        </section>
        <img className="aboutMe__foto" src={myFoto} alt="Мое фото"/>
      </div>
      {/* <section className="aboutMe__section-info" aria-label="Инфоблок">
        <p className="aboutMe__text_timing">1 неделя</p>
        <p className="aboutMe__text_timing aboutMe__text_timing-white">4 недели</p>
        <p className="aboutMe__text_timing aboutMe__text">Back-end</p>
        <p className="aboutMe__text_timing aboutMe__text">Front-end</p>
      </section> */}
    </div>
  );
}

export default AboutMe;
