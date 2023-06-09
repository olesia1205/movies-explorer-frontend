import React, { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../../utils/Validation';

function SearchForm({ handleSearch, handleCheckboxClick,
  // setIsCheckboxActive,
  searchRequest, checkboxState }) {
  const { values, errors, handleChange, resetValidation, isValid } = useValidation();
  const {movietitle} = values;

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSearchFormClick(evt) {
    evt.preventDefault();
    handleSearch(movietitle);
  }

  // function handleCheckboxClick(value) {
  //   setIsCheckboxActive(value);
  // }

  return (
    <section className="searchform" aria-label="Форма поиска">
      <form className="searchform__form" onSubmit={handleSearchFormClick} noValidate>
        <div className="searchform__input-block">
          <input
            className="searchform__input"
            type="text"
            name="movietitle"
            placeholder={searchRequest}
            value={values.movietitle || ''}
            required
            onChange={handleChange}
          />
          <span className={`searchform__input-error ${!isValid && errors.movietitle ? 'searchform__input-error_active' : ''}`} id="movietitle-error">{errors.movietitle || ''}</span>
          <button
            className={`searchform__button ${!isValid && errors ? 'searchform__button_disabled' : ''}`}
            type="submit"
            disabled={!isValid}
          />
          <span className="searchform__input-error"></span>
        </div>
        <FilterCheckbox onClick={handleCheckboxClick} checkboxState={checkboxState}/>
      </form>
    </section>
  );
}

export default SearchForm;
