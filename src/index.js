import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import HomePage from './components/home/HomePage';

import registerServiceWorker from './registerServiceWorker';

import {HashRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/" component={App}/>
            <Route path="/home" component={HomePage}/>
        </div>
    </HashRouter>,
    document.getElementById('root'));

registerServiceWorker();
