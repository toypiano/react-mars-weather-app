import React from 'react';
import styled from 'styled-components';

import Date from './Date';
import Temp from './Temp';
import Wind from './Wind';
import Info from './Info';
import Unit from './Unit';

const StyledMain = styled.main`
  background: rgba(0, 0, 0, 0.7);
  max-width: 1000px;
  /* space on top for Unit toggle */
  padding: 6em 2em 2em;
  margin: 0;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;

    padding: 2em;
    margin: 4em 0 0 4em;
  }
`;

export default function CurrentWeather({ weather }) {
  const {
    sol,
    date,
    maxTemp,
    minTemp,
    windSpeed,
    windDirectionText,
    windDirectionDegree,
  } = weather;
  return (
    <StyledMain>
      <h1 className="main-title">Latest weather at Elysium Plantitia</h1>
      <Date sol={sol} date={date} />
      <Temp maxTemp={maxTemp} minTemp={minTemp} />
      <Wind
        windSpeed={windSpeed}
        windDirectionText={windDirectionText}
        windDirectionDegree={windDirectionDegree}
      />
      <Info />
      <Unit />
    </StyledMain>
  );
}
