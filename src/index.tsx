import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.output.css';
import './styles/spinkit.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import LogRocket from 'logrocket';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

LogRocket.init('pzb1xc/autodesk-demo');
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
