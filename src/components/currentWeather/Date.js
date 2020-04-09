import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.div`
  grid-column: 1 / 2;
  h2 {
    font-size: var(--fz-xl);
    margin-bottom: 0em;
  }
  p {
    font-size: var(--fz-h2);
    color: var(--cl-gray);
    margin: 0;
    font-weight: var(--fw-light);
  }
`;

export default function Date({ sol, date }) {
  return (
    <StyledDate>
      <h2 className="section-title">Sol {sol}</h2>
      <p>{date}</p>
    </StyledDate>
  );
}
