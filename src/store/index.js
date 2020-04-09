import React, { createContext, useReducer, useContext } from 'react';

import stateReducer from './reducer';

const AppStateContext = createContext({});
const AppDispatchContext = createContext({});

const initialState = {
  selectedWeatherIndex: null,
  isMetric: true,
  weathers: [],
};

/**
 * HOC that provides state & dispatch context to its children
 * @param {Props} param0
 */
const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

/**
 * returns context. throw if context is undefined
 */
function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppStateProvider');
  }
  return context;
}

/**
 * returns dispatch. throw if context is undefined
 */
function useAppDispatch() {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppStateProvider');
  }
  return context;
}

export { AppStateProvider, useAppState, useAppDispatch };
