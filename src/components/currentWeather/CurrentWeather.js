import React from 'react';
import Date from './Date';
import Temp from './Temp';
import Wind from './Wind';
import Info from './Info';
import Unit from './Unit';

export default function CurrentWeather() {
  return (
    <main>
      <h1>Latest weather at Elysium Plantitia</h1>
      <Date />
      <Temp />
      <Wind />
      <Info />
      <Unit />
    </main>
  );
}
