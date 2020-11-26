/**
 * index入口文件
 *
 * @file index.js
 * @author guyunlong
 */

import App from './app';
import {Provider} from 'react-redux';
import * as reducers from '@reducers';
import {createStore, combineReducers} from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';

const store = createStore(combineReducers(reducers))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('main'));
