import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from 'react-redux'
import configureStore from './redux/store';




ReactDOM.render(
  <Provider store = {configureStore}>
    <App />,
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
