/**
 * index入口文件
 *
 * @file index.js
 * @author guyunlong
 */

import {Provider} from 'react-redux';
import * as reducers from '@reducers';
import {createStore, combineReducers} from 'redux';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Route} from 'react-router';
import App from './app';

const store = createStore(combineReducers(reducers,));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
document.getElementById('main'));
