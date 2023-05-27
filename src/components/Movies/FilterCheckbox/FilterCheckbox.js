import React from 'react';

function FilterCheckbox() {
  return (
    <label className="filtercheckbox">
      <div className="filtercheckbox__checkbox-container">
        <div className="filtercheckbox__checkbox">
          <input
            type="checkbox"
            className="filtercheckbox__checkbox-invisible"
          />
          <span className="filtercheckbox__checkbox-visible" />
        </div>
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
