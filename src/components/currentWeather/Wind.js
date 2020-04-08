import React from 'react';

export default function Wind({
  windSpeed,
  windUnit,
  windDirectionText,
  windDirectionDeg,
}) {
  return (
    <div>
      <h2>Wind</h2>
      <p>
        {windSpeed} {windUnit}
      </p>
      <div className="wind__direction">
        <p className="sr-only">{windDirectionText}</p>
        <div className="wind__degree"></div>
      </div>
    </div>
  );
}
