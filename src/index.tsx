import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.output.css';
import './styles/spinkit.css';
import App from './App';
import LogRocket from 'logrocket';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

LogRocket.init('pzb1xc/autodesk-demo');
if (process.env.REACT_APP_ENV === 'production') {
  serviceWorkerRegistration.register();
}
