import React from 'react';

export default function Temp({ currentTempHigh, currentTempLow, tempUnit }) {
  return (
    <div>
      <h2>Temperature</h2>
      <p>
        High: {currentTempHigh}°{tempUnit}
      </p>
      <p>
        Low: {currentTempLow}°{tempUnit}
      </p>
    </div>
  );
}
