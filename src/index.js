import React from 'react';
import ReactDOM from 'react-dom';
import { AppStateProvider } from './store';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
