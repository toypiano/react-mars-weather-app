import React from 'react';
import styled, { css } from 'styled-components';

const slideUpMixin = css`
  animation: slideUpIn 750ms forwards;
  animation-delay: ${(props) => 75 + props.index * 25 + 'ms'};
  @keyframes slideUpIn {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledPreviousSol = styled.div`
  .previous-day__more-info {
    cursor: pointer;
    background: var(--cl-dark);
    color: var(--cl-light);
    border: none;
    text-transform: uppercase;
    padding: 0.3em 1em;
    border-radius: 100vmax; /* pill-shaped border */
    &:hover {
      background: var(--cl-gray);
    }
  }
  .previous-day__date {
    color: var(--cl-gray);
    font-size: 0.9rem;
  }
  /* apply to all children! */
  & > * {
    margin: 0;
  }
  opacity: 0;
  ${(props) => (props.isOpen ? slideUpMixin : null)}
`;

export default function PreviousSol({
  sol,
  date,
  maxTemp,
  minTemp,
  selectWeather,
  isOpen,
  index,
}) {
  return (
    <StyledPreviousSol isOpen={isOpen} index={index}>
      <h3>Sol {sol}</h3>
      <p className="previous-day__date">{date}</p>
      <p className="previous-day__temp">High: {maxTemp}</p>
      <p className="previous-day__temp">Low: {minTemp}</p>
      <button onClick={selectWeather} className="previous-day__more-info">
        more info
      </button>
    </StyledPreviousSol>
  );
}
