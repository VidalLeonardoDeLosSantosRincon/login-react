import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRoutes } from "./routes/appRoutes";

//provider
import { Provider } from 'react-redux';
//store
import {Store} from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <AppRoutes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

