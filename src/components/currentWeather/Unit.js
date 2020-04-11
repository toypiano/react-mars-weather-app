import React from 'react';
import { useAppState, useAppDispatch } from '../../store';
import { actionTypes } from '../../store/actions';
import styled from 'styled-components';

const StyledUnit = styled.div`
  /* You must add this to the top or won't work (only button comes up) */
  @media (max-width: 899px) {
    position: absolute;
    top: 1.5em;
    left: 2em;
  }
  @media (min-width: 600px) {
    top: 3em;
  }
  grid-column: 3 / 4;
  place-self: end;
  display: flex;
  align-items: center;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  label {
    font-size: 1.1rem;
    cursor: pointer;
  }
  /* toggle button */
  button {
    cursor: pointer;
    width: 4em;
    border-radius: 100vmax;
    background: transparent;
    margin: 0 1em;
    padding: 0;
    border: 2px solid var(--cl-light);

    /* button clicker */
    &::after {
      content: '';
      display: block;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: var(--cl-light);
      margin: 3px;
      margin-left: auto;
      padding: 0;
    }
  }

  /*
  # Hide Radio input buttons 
  because .sr-only is turned off on "focus" and "active" state, 
  we couldn't add that class to the radio inputs.
  Instead, we are directly applying all those rules to the input element here
  so that it stays that way the whole time.
  */
  input {
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    /* 
    1. select all checked input element 
    2. select any following sibling with .unit__toggle class
    3. select its ::after pseudo element
    */
    &:checked ~ .unit__toggle::after {
      margin-left: 3px; /* Only applied when "cel" is checked */
    }
  }
`;

export default function Unit() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const isMetric = state.isMetric;

  function handleToggleClick() {
    dispatch({ type: actionTypes.UNIT_TOGGLED });
  }

  function handleRadioChange(e) {
    // toggle unit only when button's unit is different from current unit
    if (
      (e.target.id === 'fah' && isMetric) ||
      (e.target.id === 'cel' && !isMetric)
    ) {
      handleToggleClick();
    }
  }

  return (
    <StyledUnit>
      <label htmlFor="cel">°C</label>
      <input
        type="radio"
        id="cel"
        name="unit"
        checked={isMetric}
        onChange={handleRadioChange}
      />
      <button className="unit__toggle" onClick={handleToggleClick}></button>
      <label htmlFor="fah">°F</label>
      <input
        type="radio"
        id="fah"
        name="unit"
        checked={!isMetric}
        onChange={handleRadioChange}
      />
    </StyledUnit>
  );
}
