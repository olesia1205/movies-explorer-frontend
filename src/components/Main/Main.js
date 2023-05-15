import React from 'react';
import Promo from '../Main/Promo/Promo';
import NavTab from '../Main/NavTab/NavTab';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';

function Main() {
  return (
    <main>
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
    </main>
  );
}

export default Main;
