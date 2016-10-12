import React from 'react';

import initialState from './initialState';

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE ALBUMS FROM SERVER';

const reducer = function (state = initialState, action) {

	switch(action.type) {
		case RECEIVE_ALBUMS_FROM_SERVER:
			return Object.assign({}, state, {albumList: action.albumList});
		default:
			return state;
	}

}

// const receiveAlbumList = function (albumList) {
// 	return {
// 		type: RECEIVE_ALBUMS_FROM_SERVER,
// 		albumList
// 	}
// }


const receiveAlbumListFromServer = albumList => ({
	type: RECEIVE_ALBUMS_FROM_SERVER,
	albumList
});

const fetchAlbumListFromServer =() => {
	
	return dispatch => {
		fetch('/api/albums')
			.then(res => res.json())
			// use the dispatch method the thunkMiddleware gave us
			.then(albumList => dispatch(receiveAlbumListFromServer(albumList))); 
	}
}

const playSong = songId => {
	return dispatch => {
		// side effects, like using the audio element belong in async action creators too, even if they aren't "async"
		audio.play() 
		dispatch(selectSong(songId));
	}
}

/*
	function(dispatch) {
		----------------
		-----------------
		function(albums) {
			dispatch(--------(albums))
		}
	}

 */

export {
	reducer, 
	receiveAlbumListFromServer, 
	fetchAlbumListFromServer
};
