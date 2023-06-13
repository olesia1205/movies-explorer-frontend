import React from 'react';

function FilterCheckbox({ onClick, checkboxState }) {
  return (
    <label className="filtercheckbox">
      <div className="filtercheckbox__checkbox-container">
        <div className="filtercheckbox__checkbox">
          <input
            type="checkbox"
            className="filtercheckbox__checkbox-invisible"
            checked={checkboxState}
            onChange={(evt) => onClick(evt.target.checked)}
          />
          <span className="filtercheckbox__checkbox-visible" />
        </div>
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
