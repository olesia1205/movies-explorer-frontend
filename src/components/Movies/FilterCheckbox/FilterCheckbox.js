import React from 'react';

function FilterCheckbox() {
  return (
    <label className="searchform__checkbox-label">
      <div className="searchform__checkbox-container">
        <div className="searchform__checkbox">
          <input
            type="checkbox"
            className="searchform__checkbox_invisible"
          />
          <span className="searchform__checkbox_visible" />
        </div>
      </div>
      Короткометражки
    </label>

  );
}

export default FilterCheckbox;
