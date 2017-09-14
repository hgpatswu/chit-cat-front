import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import LoginPage from './components/users/LoginPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <LoginPage />
    </div>,
    document.getElementById('root'));

registerServiceWorker();
