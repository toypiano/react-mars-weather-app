import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  grid-column: 1 / 3;
`;

export default function Info() {
  return (
    <StyledInfo>
      <p>
        InSight is taking daily weather measurements (temperature, wind,
        pressure) on the surface of Mars at Elysium Plantitia, a, flat, smooth
        plain near Mars' equator.
      </p>
      <p>
        This is only a part of InSight&apos;s mission.{' '}
        <a href="https://mars.nasa.gov/insight/mission/overview">Click here </a>
        to find out more.
      </p>
    </StyledInfo>
  );
}
