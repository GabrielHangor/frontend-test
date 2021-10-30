import React from 'react';
import Flight from './Flight';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function Flights({ flightsData }) {
  return (
    <div className="flights-container">
      {flightsData &&
        flightsData.map((el, index) => {
          return (
            <Flight
              key={index}
              flightData={el.flight}
              format={format}
              ru={ru}
            />
          );
        })}
    </div>
  );
}

export default Flights;
