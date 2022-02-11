import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRoutes } from "./routes/appRoutes";

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);

