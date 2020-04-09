/**
 * Takes Date object and output formatted date string
 * @param {Date} date - Date object
 * @returns {string} - Formatted date (ex. September 23)
 */
function formatDate(date) {
  return date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });
}

/**
 * @param {number} speed - speed in km/h
 * @param {boolean} isMetric - false: mile/h
 * @returns {string} speed converted to specified unit up to 2nd decimal places
 */
function formatSpeed(speed, isMetric = true) {
  const unit = isMetric ? 'kph' : 'mph';
  return (isMetric ? speed : speed / 1.609).toFixed(2) + ' ' + unit;
}

/**
 *
 * @param {number} temp
 * @param {boolean} isMetric
 * @returns {string} temperature converted to specified unit, rounded.
 */
function formatTemp(temp, isMetric = true) {
  const unit = isMetric ? '°C' : '°F';
  return Math.round(isMetric ? temp : (temp * 9) / 5 + 32) + unit;
}

export { formatDate, formatSpeed, formatTemp };
