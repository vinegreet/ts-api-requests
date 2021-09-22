import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import DataState from './context/DataState';

ReactDOM.render(
  <React.StrictMode>
    <DataState>
      <App />
    </DataState>
  </React.StrictMode>,
  document.getElementById('root')
);

