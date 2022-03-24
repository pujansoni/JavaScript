import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// We need to import the Provider from the react-redux which we will provide to the whole application
import {Provider} from 'react-redux'
import store from './store/index'

ReactDOM.render(
  // Here we will use the store prop and provide it with the store which we also need to import as shown above
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
