import React, { useState, useEffect } from 'react';
import Flights from './Components/Flights';
import Form from './Components/Form';
import data from './flights.json';

function App() {
  const [flightsData, setFlightsData] = useState();
  const [radioInputValue, setRadioInputValue] = useState('ascending');

  console.log(data.result.flights[0]);

  useEffect(() => {
    setFlightsData(data.result.flights);
  }, []);

  const handleRadioInputChange = (e) => setRadioInputValue(e.target.value);

  return (
    <div className="main-container">
      <Form
        radioInputValue={radioInputValue}
        handleRadioInputChange={handleRadioInputChange}
      />
      <Flights flightsData={flightsData} />
    </div>
  );
}

export default App;
