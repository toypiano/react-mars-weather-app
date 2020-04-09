import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import PreviousSols from './PreviousSols';

const openMixin = css`
  transform: translateY(0);
  .down-arrow {
    display: block; /* you can only transform block-element (inline elements are out of flow) */
    transform: rotate(180deg) translateY(-25%);
  }
  .previous-weather__title {
    text-align: left;
  }
`;

const StyledPreviousWeather = styled.div`
  color: var(--cl-dark);
  background: var(--cl-light);
  padding: 3rem;
  border-top: 1px solid var(--cl-light);
  position: absolute;
  bottom: 0;
  width: 100%;
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  transform: translateY(60%);
  transition: transform 350ms ease;
  .show-previous-weather {
    /* Don't forget it's button! */
    font-family: inherit;
    font-size: var(--fz-h2);
    border: none;
    outline: none;
    width: 10rem;
    line-height: 1;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    color: var(--cl-gray);
    position: absolute;
    left: 50%;
    transform: translate(-50%, calc(-100% - 3rem));

    background-color: var(--cl-light);
    cursor: pointer;
    &:hover,
    &:focus {
      color: var(--cl-dark);
    }
  }
  .previous-weather__title {
    text-align: center;
  }
  ${(props) => (props.isOpen ? openMixin : null)}
`;

export default function PreviousWeather({ weathers }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((b) => !b);
  };
  return (
    <StyledPreviousWeather isOpen={isOpen}>
      <button onClick={toggleOpen} className="show-previous-weather">
        <span className="down-arrow">&#8593;</span>
        <span className="sr-only">Show previous weather</span>
      </button>
      <div className="container">
        <h2 className="main-title previous-weather__title">Previous 7 days</h2>
        <PreviousSols weathers={weathers} isOpen={isOpen} />
      </div>
    </StyledPreviousWeather>
  );
}
