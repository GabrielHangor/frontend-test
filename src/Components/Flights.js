import React, { useState, useEffect } from 'react';
import Flight from './Flight';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function Flights({
  flightsData,
  returnSortedDataByPriceAndTime,
  radioInputValue,
}) {
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    setFilteredData(flightsData);
  }, [flightsData]);

  useEffect(() => {
    setFilteredData(returnSortedDataByPriceAndTime(flightsData));
  }, [radioInputValue]);

  return (
    <div className="flights-container">
      {filteredData &&
        filteredData.map((el, index) => {
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
