import React from 'react';

import {createStore, applyMiddleware} from 'redux';

import createLogger from 'redux-logger';
import reduxImport from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer} from './reduxReducer';

// console.log('thunkMiddleware', thunkMiddleware);

let newLogger = createLogger();
let newMiddleware = applyMiddleware(newLogger, thunkMiddleware)
let store = createStore(reducer, newMiddleware);





export default store;