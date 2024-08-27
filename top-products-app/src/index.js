import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@mui/material/styles'; // Import Material-UI styles
import './index.css'; // Optional, for global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
