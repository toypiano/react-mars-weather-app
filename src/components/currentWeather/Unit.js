import React from 'react';

export default function Unit() {
  return (
    <div>
      <label htmlFor="cel">°C</label>
      <input type="radio" id="cel" name="unit" checked />
      <button></button>
      <label htmlFor="fah">°F</label>
      <input type="radio" id="fah" name="unit" />
    </div>
  );
}
