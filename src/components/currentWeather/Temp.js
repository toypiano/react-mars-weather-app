import React from 'react';
import styled from 'styled-components';

const StyledTemp = styled.div`
  --border: solid 0.25em var(--cl-accent-dark);
  grid-column: 2 / 3;
  border-left: var(--border);
  border-right: var(--border);
  padding: 0 2em;
`;
export default function Temp({ maxTemp, minTemp }) {
  return (
    <StyledTemp>
      <h2 className="section-title">Temperature</h2>
      <p className="current-weather__data">High: {maxTemp}</p>
      <p className="current-weather__data">Low: {minTemp}</p>
    </StyledTemp>
  );
}
