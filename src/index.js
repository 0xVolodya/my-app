import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/root';
import './index.css';
import configureStore from './core/store';
const store = configureStore();
import {browserHistory} from  'react-router';

ReactDOM.render(
    <Root
        store={store}
        history={browserHistory}
    />,
    document.getElementById('root')
);
