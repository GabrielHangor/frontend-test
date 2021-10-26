import React from 'react';

function Form({ radioInputValue, handleRadioInputChange }) {
  return (
    <div className="form-container">
      {/* radio buttons sort */}
      <div className="input-container">
        <p>Сортировать</p>
        <div className="input-group">
          {' '}
          <input
            type="radio"
            id="ascending"
            value="ascending"
            onChange={(e) => handleRadioInputChange(e)}
            checked={radioInputValue === 'ascending'}
          />
          <label for="ascending"> - по возрастанию цены</label>
        </div>

        <div className="input-group">
          {' '}
          <input
            type="radio"
            id="descending"
            value="descending"
            onChange={(e) => handleRadioInputChange(e)}
            checked={radioInputValue === 'descending'}
          />
          <label for="descending"> - по убыванию цены</label>
        </div>

        <div className="input-group">
          {' '}
          <input
            type="radio"
            id="by_time"
            value="time"
            onChange={(e) => handleRadioInputChange(e)}
            checked={radioInputValue === 'time'}
          />
          <label for="by_time"> - по времени в пути</label>
        </div>
      </div>
      {/* radio buttons sort */}
      {/* checkbox filters */}
      <div className="input-container">
        <p>Фильтровать</p>
      </div>
      {/* checkbox filters */}
    </div>
  );
}

export default Form;
