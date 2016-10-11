import React from 'react';

import initialState from './initialState';

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';

export default function (state = initialState, action) {

	switch(action.type) {
		case RECEIVE_ALBUMS_FROM_SERVER:
			return Object.assign({}, state, {albumList: action.albumList});
		default:
			return state;
	}

}




