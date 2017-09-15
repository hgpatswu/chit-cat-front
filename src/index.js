import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, pushStateLocationPlugin} from '@uirouter/react';
import './index.css';
import App from './components/App';
import HomePage from './components/home/HomePage';

import registerServiceWorker from './registerServiceWorker';

const states = [{name: 'index', url: '/', component: App},
    {name: 'home', url: '/home', component: HomePage}];

const plugins = [
    pushStateLocationPlugin
];

ReactDOM.render(
    <UIRouter plugins={plugins} states={states}>
        <UIView/>
    </UIRouter>,
    document.getElementById('root'));

registerServiceWorker();
