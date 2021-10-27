import React from 'react';

function Form({
  radioInputValue,
  handleRadioInputChange,
  handleCheckboxInputChange,
  checkedState,
  priceInputValue,
  handlePriceInputChange,
}) {
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
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="transfer"
            value="0"
            checked={checkedState[0]}
            onChange={(e) => handleCheckboxInputChange(e)}
          />
          <label for="transfer"> - 1 пересадка</label>
        </div>
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="no_transfer"
            value="1"
            checked={checkedState[1]}
            onChange={(e) => handleCheckboxInputChange(e)}
          />
          <label for="no_transfer"> - без пересадок</label>
        </div>
      </div>
      {/* checkbox filters */}
      {/* price filters */}
      <div className="input-container">
        {' '}
        <p>Цена</p>
        <div className="input-group price">
          {' '}
          <label for="price-from">От</label>
          <input
            type="number"
            id="price-from"
            name="from"
            value={priceInputValue.from}
            onChange={(e) => handlePriceInputChange(e)}
          />
        </div>
        <div className="input-group price">
          {' '}
          <label for="price-till">До</label>
          <input
            type="number"
            id="price-till"
            name="till"
            value={priceInputValue.till}
            onChange={(e) => handlePriceInputChange(e)}
          />
        </div>
      </div>
      {/* price filters */}
      {/* Airline filters */}
      <div className="input-container">
        <p>Авиакомпании</p>
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="polish"
            value="2"
            onChange={(e) => handleCheckboxInputChange(e)}
            checked={checkedState[2]}
          />
          <label for="polish"> - LOT Polish Airlines от 21049 р.</label>
        </div>
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="aeroflot"
            value="3"
            onChange={(e) => handleCheckboxInputChange(e)}
            checked={checkedState[3]}
          />
          <label for="aeroflot"> - Аэрофлот - росс.... от 31733 р.</label>
        </div>
      </div>
      {/* Airline filters */}
    </div>
  );
}

export default Form;
