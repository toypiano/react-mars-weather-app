import React from 'react';
import styled from 'styled-components';

const StyledWind = styled.div`
  grid-column: 3 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .section-title,
  .current-weather__data {
    grid-column: 2 / 3;
  }
  align-self: start; /* take content's height */
  grid-template-rows: min-content 1fr; /* remove unwanted space between rows */

  .wind__direction {
    grid-row: 1 / span 2;
    background-color: rgba(255, 255, 255, 0.5);
    --size: 6rem;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    .wind__degree {
      background: var(--cl-accent-dark);
      --size: 1rem;
      width: var(--size);
      height: calc(var(--size) * 3);
      --degree: ${(props) => props.degree + 'deg'};
      transform: translateY(-50%) rotate(var(--degree));
      transform-origin: bottom center; /*rotate clock needle around its bottom center (instead of its middle center) */
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      transition: transform 350ms linear;
    }
    display: grid;
    place-items: center;
  }
`;

export default function Wind({
  windSpeed,
  windDirectionText,
  windDirectionDegree,
}) {
  return (
    <StyledWind degree={windDirectionDegree}>
      <h2 className="section-title">Wind</h2>
      <p className="current-weather__data">{windSpeed}</p>
      <div className="wind__direction">
        <p className="sr-only">{windDirectionText}</p>
        <div className="wind__degree"></div>
      </div>
    </StyledWind>
  );
}
