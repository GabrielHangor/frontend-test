import React from 'react';

function Form({
  radioInputValue,
  handleRadioInputChange,
  priceInputValue,
  handlePriceInputChange,
  handleAirlinesFilterChange,
  airlinesFilterState,
  handleTransferFilterChange,
  transferFilterState,
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
      {/* transfer filters */}
      <div className="input-container">
        <p>Фильтровать</p>
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="transfer"
            name="transfer"
            onChange={(e) => handleTransferFilterChange(e)}
            checked={transferFilterState.transfer}
          />
          <label for="transfer"> - 1 пересадка</label>
        </div>
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="no_transfer"
            name="noTransfer"
            onChange={(e) => handleTransferFilterChange(e)}
            checked={transferFilterState.noTransfer}
          />
          <label for="no_transfer"> - без пересадок</label>
        </div>
      </div>
      {/* transfer filters */}
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
            id="Air-France"
            name="airfrance"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.airfrance}
          />
          <label for="Air-France"> - Air France</label>
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            id="KLM"
            name="klm"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.klm}
          />
          <label for="KLM"> - KLM</label>
        </div>
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="Aeroflot"
            name="aeroflot"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.aeroflot}
          />
          <label for="Aeroflot"> - Аэрофлот - росс...</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="turk"
            name="turk"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.turk}
          />
          <label for="turk"> - TURK HAVA YOLLARI A.O.</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="finnair"
            name="finnair"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.finnair}
          />
          <label for="finnair"> - Finnair Oyj</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="airbaltic"
            name="airbaltic"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.airbaltic}
          />
          <label for="airbaltic"> - Air Baltic Corporation A/S</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="pegasus"
            name="pegasus"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.pegasus}
          />
          <label for="pegasus"> - Pegasus Hava Tasimaciligi A.S.</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="brussels"
            name="brussels"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.brussels}
          />
          <label for="brussels"> - Brussels Airlines</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="alitalia"
            name="alitalia"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.alitalia}
          />
          <label for="alitalia"> - Alitalia Societa Aerea Italiana</label>
        </div>{' '}
        <div className="input-group">
          {' '}
          <input
            type="checkbox"
            id="polish"
            name="polish"
            onChange={(e) => handleAirlinesFilterChange(e)}
            checked={airlinesFilterState.polish}
          />
          <label for="polish"> - LOT Polish Airlines</label>
        </div>
      </div>
      {/* Airline filters */}
    </div>
  );
}

export default Form;
