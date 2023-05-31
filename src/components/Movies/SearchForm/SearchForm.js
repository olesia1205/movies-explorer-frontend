import React, { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../../utils/Validation';

function SearchForm({ handleSearch }) {
  const { values, errors, handleChange, resetValidation, isValid } = useValidation();

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  function handleSearchFormClick(evt) {
    evt.preventDefault();
    handleSearch();
  }

  return (
    <section className="searchform" aria-label="Форма поиска">
      <form className="searchform__form" onSubmit={handleSearchFormClick} noValidate>
        <div className="searchform__input-block">
          <input
            className="searchform__input"
            type="text"
            name="movietitle"
            value={values.movietitle || ''}
            placeholder="Фильм"
            required
            minLength="2"
            onChange={handleChange}
          />
          <span className={`searchform__input-error ${!isValid && errors.movietitle ? 'searchform__input-error_active' : ''}`} id="movietitle-error">{errors.movietitle || ''}</span>
          <button
            className="searchform__button"
            type="submit"
            disabled={!isValid}
          />
          <span className="searchform__input-error"></span>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
