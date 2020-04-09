import { actionTypes } from './actions';

const fetchWeatherSuccess = (state, action) => {
  const { sol_keys, validity_checks, ...sols } = action.payload;

  const weathers = Object.entries(sols).map(([solId, data]) => {
    return {
      sol: solId,
      maxTemp: data.AT.mx,
      minTemp: data.AT.mn,
      windSpeed: data.HWS.av,
      windDirectionText: data.WD.most_common.compass_point,
      windDirectionDegree: data.WD.most_common.compass_degrees,
      date: new Date(data.First_UTC),
    };
  });

  return {
    ...state,
    selectedWeatherIndex: weathers.length - 1,
    weathers,
  };
};

const weatherSelected = (state, action) => ({
  ...state,
  selectedWeatherIndex: action.payload,
});

const unitToggled = (state, action) => ({
  ...state,
  isMetric: !state.isMetric,
});

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.FETCH_WEATHERS_SUCCESS:
      return fetchWeatherSuccess(state, action);
    case actionTypes.WEATHER_SELECTED:
      return weatherSelected(state, action);
    case actionTypes.UNIT_TOGGLED:
      return unitToggled(state, action);
    default:
      return state;
  }
}
