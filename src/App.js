import React, { useState, useEffect } from 'react';
import Flights from './Components/Flights';
import Form from './Components/Form';

function App() {
  const [data, setData] = useState();
  const [radioInputValue, setRadioInputValue] = useState();
  const [priceInputValue, setPriceInputValue] = useState({
    from: 0,
    till: 10000,
  });
  const [airlinesFilterState, setAirlinesFilterState] = useState({});
  const [transferFilterState, setTransferFilterState] = useState({});

  useEffect(() => {
    const fetchedData = require('./flights.json');
    setData(fetchedData.result.flights);
  }, []);

  const returnSortedDataByPriceAndTime = (flights) => {
    if (radioInputValue === 'ascending') {
      return flights.sort((a, b) => {
        return b.flight.price.total.amount - a.flight.price.total.amount;
      });
    }
    if (radioInputValue === 'descending') {
      return flights.sort((a, b) => {
        return a.flight.price.total.amount - b.flight.price.total.amount;
      });
    }
    if (radioInputValue === 'time') {
      return flights.sort((a, b) => {
        return (
          a.legs[0].duration +
          a.legs[1].duration -
          (b.legs[0].duration + b.legs[1].duration)
        );
      });
    }
  };

  // const uniqueCarriers = [
  //   ...new Set(data.result.flights.map((el) => el.flight.carrier.caption)),
  // ];

  // console.log(uniqueCarriers);

  const handleRadioInputChange = (e) => setRadioInputValue(e.target.value);

  const handlePriceInputChange = (e) => {
    setPriceInputValue({ ...priceInputValue, [e.target.name]: e.target.value });
  };

  const handleAirlinesFilterChange = (e) => {
    setAirlinesFilterState({
      ...airlinesFilterState,
      [e.target.name]: e.target.name
        ? !airlinesFilterState[e.target.name]
        : null,
    });
  };

  const handleTransferFilterChange = (e) => {
    setTransferFilterState({
      ...transferFilterState,
      [e.target.name]: e.target.name
        ? !transferFilterState[e.target.name]
        : null,
    });
  };

  return (
    <div className="main-container">
      <Form
        radioInputValue={radioInputValue}
        handleRadioInputChange={handleRadioInputChange}
        priceInputValue={priceInputValue}
        handlePriceInputChange={handlePriceInputChange}
        handleAirlinesFilterChange={handleAirlinesFilterChange}
        airlinesFilterState={airlinesFilterState}
        handleTransferFilterChange={handleTransferFilterChange}
        transferFilterState={transferFilterState}
      />
      <Flights
        flightsData={data}
        returnSortedDataByPriceAndTime={returnSortedDataByPriceAndTime}
        radioInputValue={radioInputValue}
      />
    </div>
  );
}

export default App;
