'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import {Provider} from 'react-redux';

import store from './store';



ReactDOM.render(
	<Provider store = {store}>
		<AppContainer />
	</Provider>, 
	document.getElementById('app')
);



// console.log('before', store.getState());
// store.dispatch({type: 'RECEIVE ALBUMS FROM SERVER', albumList: ['Nightwish']});

// console.log('after', store.getState());