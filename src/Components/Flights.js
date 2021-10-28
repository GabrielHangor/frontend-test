import React from 'react';
import Flight from './Flight';

function Flights({ flightsData }) {
  return (
    <div className="flights-container">
      <Flight />
    </div>
  );
}

export default Flights;
