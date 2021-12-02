import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer,{initialState} from './components/reducer'

ReactDOM.render(
  <StateProvider reducer={reducer}
  initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals reportWebVitals();
