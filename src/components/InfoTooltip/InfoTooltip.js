import React from 'react';

function InfoTooltip({ isOpen, title, onClose, onOverlayClick, image }) {
  return(
    <div  className={`tooltip ${isOpen ? 'tooltip_is-opened' : ''}`} onClick={onOverlayClick} >
      <div  className="tooltip__container">
        <>
          <img className="tooltip__image" src={image} alt ="Всплывающее информационное окошко"/>
          <h2  className="tooltip__title">{title}</h2>
          <button  className="tooltip__close-button" type="button" name="close-button" onClick={onClose} />
        </>
      </div>
    </div>
  );
}

export default InfoTooltip;
