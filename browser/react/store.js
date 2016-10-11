import React from 'react';

import {createStore} from 'redux'
import reducer from './reduxReducer'

let store = createStore(reducer);






export default store;