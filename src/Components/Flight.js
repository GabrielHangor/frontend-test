import React from 'react';

function Flight({ flightData, format, ru }) {
  function convertTime(a) {
    let hours = Math.trunc(a / 60);
    let minutes = a % 60;
    return `${hours} ч ${minutes} мин`;
  }

  const price = flightData.price.total.amount;
  const carrier = flightData.carrier.caption;
  // Leg one
  const departureAirportLegOne =
    flightData.legs[0].segments[0].departureAirport.caption;
  const departureCityLegOne =
    flightData.legs[0].segments[0].departureCity.caption;
  const departureAirportLegOneCode =
    flightData.legs[0].segments[0].departureAirport.uid;
  const arrivalAirportLegOne = !flightData.legs[0].segments[1]
    ? flightData.legs[0].segments[0].arrivalAirport.caption
    : flightData.legs[0].segments[1].arrivalAirport.caption;
  const arrivalAirportLegOneCode = !flightData.legs[0].segments[1]
    ? flightData.legs[0].segments[0].arrivalAirport.uid
    : flightData.legs[0].segments[1].arrivalAirport.uid;
  const transitTimeThere = flightData.legs[0].duration;
  const transitTimeBack = flightData.legs[1].duration;
  const departureDateLegOne = flightData.legs[0].segments[0].departureDate;
  const arrivalDateLegOne = !flightData.legs[0].segments[1]
    ? flightData.legs[0].segments[0].arrivalDate
    : flightData.legs[0].segments[1].arrivalDate;
  const carrierThereLegOne = !flightData.legs[0].segments[1]
    ? flightData.legs[0].segments[0].airline.caption
    : flightData.legs[0].segments[1].airline.caption;
  // Leg two
  const departureAirportLegTwo =
    flightData.legs[1].segments[0].departureAirport.caption;
  const departureAirportLegTwoCode =
    flightData.legs[1].segments[0].departureAirport.uid;
  const arrivalAirportLegTwo = !flightData.legs[1].segments[1]
    ? flightData.legs[1].segments[0].arrivalAirport.caption
    : flightData.legs[1].segments[1].arrivalAirport.caption;
  const arrivalCityLegTwo = !flightData.legs[1].segments[1]
    ? flightData.legs[1].segments[0].arrivalCity.caption
    : flightData.legs[1].segments[1].arrivalCity.caption;
  const arrivalAirportLegTwoCode = !flightData.legs[1].segments[1]
    ? flightData.legs[1].segments[0].arrivalAirport.uid
    : flightData.legs[1].segments[1].arrivalAirport.uid;
  const departureDateLegTwo = flightData.legs[1].segments[0].departureDate;
  const arrivalDateLegTwo = !flightData.legs[1].segments[1]
    ? flightData.legs[1].segments[0].arrivalDate
    : flightData.legs[1].segments[1].arrivalDate;
  const carrierBackLegTwo = !flightData.legs[1].segments[1]
    ? flightData.legs[1].segments[0].airline.caption
    : flightData.legs[1].segments[1].airline.caption;
  return (
    <div className="flight-container">
      <div className="upper-flight-subcontainer">
        {/* Logo, price */}
        <div className="logo-price">
          <p>{carrier}</p>
          <div className="price-group">
            <p>{price} &#8381;</p>
            <p>Стоимость для одного взрослого пассажира</p>
          </div>
        </div>
        {/* Logo, price */}
        {/* City, airport */}
        <div className="city-airport">
          <p>
            {departureCityLegOne}, {departureAirportLegOne}
          </p>
          <p>({departureAirportLegOneCode})</p>
          <p>&#8594;</p>
          <p>{arrivalAirportLegOne}</p>
          <p>({arrivalAirportLegOneCode})</p>
        </div>
        {/* City, airport */}
        {/* Time, date */}
        <div className="time-date">
          <div className="time-date-group">
            {' '}
            <p>{format(new Date(departureDateLegOne), 'kk:mm')}</p>
            <p className="flight-date">
              {format(new Date(departureDateLegOne), 'd MMMEEEEEE', {
                locale: ru,
              })}
            </p>
          </div>
          <div className="time-date-group">
            <p>&#128337;</p>
            <p>{convertTime(transitTimeThere)}</p>
          </div>
          <div className="time-date-group">
            <p className="flight-date">
              {format(new Date(arrivalDateLegOne), 'd MMMEEEEEE', {
                locale: ru,
              })}
            </p>
            <p>{format(new Date(arrivalDateLegOne), 'kk:mm')}</p>
          </div>
        </div>
        {/* Time, date */}
        {/* Transfer */}
        {flightData.legs[0].segments[1] ? (
          <div className="transfer">1 пересадка</div>
        ) : (
          <div className="transfer">Прямой рейс</div>
        )}
        {/* Transfer */}
        {/* Carrier */}
        <div className="carrier">Рейс выполняет: {carrierThereLegOne}</div>
        {/* Carrier */}
      </div>
      <div className="lower-flight-subcontainer">
        {/* City, airport */}
        <div className="city-airport">
          <p>{departureAirportLegTwo}</p>
          <p>({departureAirportLegTwoCode})</p>
          <p>&#8594;</p>
          <p>
            {arrivalCityLegTwo}, {arrivalAirportLegTwo}
          </p>
          <p>({arrivalAirportLegTwoCode})</p>
        </div>
        {/* City, airport */}
        {/* Time, date */}
        <div className="time-date">
          <div className="time-date-group">
            {' '}
            <p>{format(new Date(departureDateLegTwo), 'kk:mm')}</p>
            <p className="flight-date">
              {format(new Date(departureDateLegTwo), 'd MMMEEEEEE', {
                locale: ru,
              })}
            </p>
          </div>
          <div className="time-date-group">
            <p>&#128337;</p>
            <p>{convertTime(transitTimeBack)}</p>
          </div>
          <div className="time-date-group">
            {' '}
            <p className="flight-date">
              {format(new Date(arrivalDateLegTwo), 'd MMMEEEEEE', {
                locale: ru,
              })}
            </p>
            <p>{format(new Date(arrivalDateLegTwo), 'kk:mm')}</p>
          </div>
        </div>
        {/* Time, date */}
        {/* Transfer */}
        {flightData.legs[1].segments[1] ? (
          <div className="transfer">1 пересадка</div>
        ) : (
          <div className="transfer">Прямой рейс</div>
        )}
        {/* Transfer */}
        {/* Carrier */}
        <div className="carrier return">
          Рейс выполняет: {carrierBackLegTwo}
        </div>
        {/* Carrier */}
      </div>
      <div className="select-btn">ВЫБРАТЬ</div>
    </div>
  );
}

export default Flight;
