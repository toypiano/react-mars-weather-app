import React from 'react';

export default function Date({ sol, currentDate }) {
  return (
    <div>
      <h2>Sol {sol}</h2>
      <p>{currentDate}</p>
    </div>
  );
}
