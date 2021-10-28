import React from 'react';
import polish from '../Polish.png';

function Flight() {
  return (
    <div className="flight-container">
      <div className="upper-flight-subcontainer">
        {/* Logo, price */}
        <div className="logo-price">
          <img src={polish} alt="logo" />
          <div className="price-group">
            <p>21049 &#8381;</p>
            <p>Стоимость для одного взрослого пассажира</p>
          </div>
        </div>
        {/* Logo, price */}
        {/* City, airport */}
        <div className="city-airport">
          <p>Москва, ШЕРЕМЕТЬЕВО</p>
          <p>(SVO)</p>
          <p>&#8594;</p>
          <p>ЛОНДОН, Лондон, Хитроу</p>
          <p>(LHR)</p>
        </div>
        {/* City, airport */}
        {/* Time, date */}
        <div className="time-date">
          <div className="time-date-group">
            {' '}
            <p>20:40</p>
            <p className="flight-date">18 авг. вт</p>
          </div>
          <div className="time-date-group">
            <p>&#128337;</p>
            <p>14 ч 45 мин</p>
          </div>
          <div className="time-date-group">
            {' '}
            <p className="flight-date">19 авг. ср</p>
            <p>09:25</p>
          </div>
        </div>
        {/* Time, date */}
        {/* Transfer */}
        <div className="transfer">1 пересадка</div>
        {/* Transfer */}
        {/* Carrier */}
        <div className="carrier">Рейс выполняет: LOT Polish Airlines</div>
        {/* Carrier */}
      </div>
      <div className="lower-flight-subcontainer">
        {/* City, airport */}
        <div className="city-airport">
          <p>ЛОНДОН, Лондон, Хитроу</p>
          <p>(LHR)</p>
          <p>&#8594;</p>
          <p>Москва, ШЕРЕМЕТЬЕВО</p>
          <p>(SVO)</p>
        </div>
        {/* City, airport */}
        {/* Time, date */}
        <div className="time-date">
          <div className="time-date-group">
            {' '}
            <p>18:10</p>
            <p className="flight-date">19 авг. ср</p>
          </div>
          <div className="time-date-group">
            <p>&#128337;</p>
            <p>23 ч 35 мин</p>
          </div>
          <div className="time-date-group">
            {' '}
            <p className="flight-date">20 авг. чт</p>
            <p>19:45</p>
          </div>
        </div>
        {/* Time, date */}
        {/* Transfer */}
        <div className="transfer">1 пересадка</div>
        {/* Transfer */}
        {/* Carrier */}
        <div className="carrier return">
          Рейс выполняет: LOT Polish Airlines
        </div>
        {/* Carrier */}
      </div>
      <div className="select-btn">ВЫБРАТЬ</div>
    </div>
  );
}

export default Flight;
