import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './users/Timer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div> <App /> <Timer /> </div>, document.getElementById('root'));
registerServiceWorker();
