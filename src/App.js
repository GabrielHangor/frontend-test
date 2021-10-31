import React, { useState, useEffect } from 'react';
import Flights from './Components/Flights';
import Form from './Components/Form';
import data from './flights.json';

function App() {
  const [flightsData, setFlightsData] = useState();
  const [radioInputValue, setRadioInputValue] = useState('ascending');
  const [priceInputValue, setPriceInputValue] = useState({
    from: 0,
    till: 10000,
  });
  const [airlinesFilterState, setAirlinesFilterState] = useState({});
  const [transferFilterState, setTransferFilterState] = useState({});

  console.log(data.result.flights[0].flight);
  // const uniqueCarriers = [
  //   ...new Set(data.result.flights.map((el) => el.flight.carrier.caption)),
  // ];

  // console.log(uniqueCarriers);

  useEffect(() => {
    setFlightsData(data.result.flights);
  }, []);

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
      <Flights flightsData={flightsData} />
    </div>
  );
}

export default App;
