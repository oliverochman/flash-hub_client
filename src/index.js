import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./state/store/configureStore";
import { verifyCredentials } from "./state/actions/reduxTokenAuthConfig";
import { setupInterceptors } from "./modules/axiosInterceptor";
import axios from 'axios';

// const development = 'http://localhost:3000'
// const production = 'https://flashcard-hub.herokuapp.com/'

// axios.defaults.baseURL = production

const store = configureStore();
verifyCredentials(store);
setupInterceptors();


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);