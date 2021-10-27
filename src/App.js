import React, { useState, useEffect } from 'react';
import Flights from './Components/Flights';
import Form from './Components/Form';
import data from './flights.json';

function App() {
  const [flightsData, setFlightsData] = useState();
  const [radioInputValue, setRadioInputValue] = useState('ascending');
  const [checkedState, setCheckedState] = useState([true, false, false, false]);
  const [priceInputValue, setPriceInputValue] = useState({
    from: 0,
    till: 10000,
  });

  console.log(data.result.flights[0]);

  useEffect(() => {
    setFlightsData(data.result.flights);
  }, []);

  const handleRadioInputChange = (e) => setRadioInputValue(e.target.value);

  const handleCheckboxInputChange = (e) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === Number(e.target.value) ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handlePriceInputChange = (e) => {
    setPriceInputValue({ ...priceInputValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="main-container">
      <Form
        radioInputValue={radioInputValue}
        handleRadioInputChange={handleRadioInputChange}
        handleCheckboxInputChange={handleCheckboxInputChange}
        checkedState={checkedState}
        priceInputValue={priceInputValue}
        handlePriceInputChange={handlePriceInputChange}
      />
      <Flights flightsData={flightsData} />
    </div>
  );
}

export default App;
