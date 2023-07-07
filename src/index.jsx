import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { authConfig, viravaDefault } from './config/authConfig';

import './index.css';

import reportWebVitals from './reportWebVitals';

viravaDefault.init(authConfig);

viravaDefault.login().then((user) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  console.log(user);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

reportWebVitals();
