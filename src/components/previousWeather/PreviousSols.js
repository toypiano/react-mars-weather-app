import React from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '../../store';
import { actionTypes } from '../../store/actions';

import PreviousSol from './PreviousSol';

const StyledPreviousSols = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function PreviousSols({ weathers, isOpen }) {
  const dispatch = useAppDispatch();
  const selectWeather = (index) => {
    dispatch({ type: actionTypes.WEATHER_SELECTED, payload: index });
  };
  const previousSols = weathers.map((w, i) => (
    <PreviousSol
      key={w.sol}
      sol={w.sol}
      date={w.date}
      maxTemp={w.maxTemp}
      minTemp={w.minTemp}
      selectWeather={() => selectWeather(i)}
      isOpen={isOpen}
      index={i}
    />
  ));
  return <StyledPreviousSols>{previousSols}</StyledPreviousSols>;
}
