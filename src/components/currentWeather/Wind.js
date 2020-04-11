import React from 'react';
import styled from 'styled-components';

const StyledWind = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 1em;
  .section-title,
  .current-weather__data {
    grid-column: 1 / 2;
  }
  align-self: start; /* take content's height */
  grid-template-rows: min-content 1fr; /* remove unwanted space between rows */
  .wind__direction {
    grid-column: 2 / 3;
    grid-row: 1 / span 2;
    background-color: rgba(255, 255, 255, 0.5);
    --size: 4rem;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    .wind__degree {
      background: var(--cl-accent-dark);
      --size: 0.75rem;
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
  @media (min-width: 900px) {
    grid-column: 3 / 4;
    .section-title,
    .current-weather__data {
      grid-column: 2 / 3;
    }
    .wind__direction {
      grid-row: 1 / span 2;
      --size: 6rem;
    }
    .wind__degree {
      --size: 1rem;
    }
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
