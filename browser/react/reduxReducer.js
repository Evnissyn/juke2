import React from 'react';
import {combineReducers} from 'redux';

import initialState from './initialState';

import audio from './audio';

const PLACEHOLDER = 'PLACEHOLDER';

// albumList
const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';

// isPlaying
const START_PLAYING = 'START_PLAYING';
const STOP_PLAYING = 'STOP_PLAYING';
const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

// album
const LOAD_ALBUM_TO_BROWSER = 'LOAD_ALBUM_TO_BROWSER';

// ********* REDUCERS ***********

const albumList = function (state = [], action) {

	switch(action.type) {
		case RECEIVE_ALBUMS_FROM_SERVER:
			return action.albumList;
		// case :
		// 	return Object.assign({}, state, {albumList: action.albumList});
		default:
			return state;
	}

}

const album = function (state = {}, action) {
	switch (action.type) {
		case LOAD_ALBUM_TO_BROWSER:
			return action.album;
		default:
			return state;
	}
}

const currentSong = function (state = {}, action) {
	switch (action.type) {
		case SET_CURRENT_SONG:
			return action.currentSong;
		default:
			return state;
	}
}

const currentSongList = function (state = [], action) {
	switch (action.type) {
		case SET_CURRENT_SONG:
			return action.currentSongList;
		default:
			return state;
	}
}

const isPlaying = function(state = false, action) {

	switch(action.type) {
		case START_PLAYING:
			return true;
		case STOP_PLAYING:
			return false;
		default:
			return state;
	}
}

const progress = function (state = 0, action) {
	switch (action.type) {
		case PLACEHOLDER:
			return state;
		default:
			return state;
	}
}

export const reducer = combineReducers({
	albumList, 
	album, 
	currentSong, 
	currentSongList, 
	isPlaying, 
	progress
});


// ******* ACTION CREATORS / IMPLEMENT ACTIONS *********


// **** ALBUMLIST ****
// action creator
export const receiveAlbumListFromServer = albumList => ({
	type: RECEIVE_ALBUMS_FROM_SERVER,
	albumList
});

// implement action
export const fetchAlbumListFromServer =() => {
	return dispatch => {
		fetch('/api/albums')
			.then(res => res.json())
			// use the dispatch method the thunkMiddleware gave us
			.then(albumList => dispatch(receiveAlbumListFromServer(albumList))); 
	}
}

// **** PLAYING ****
// action creator
const startPlaying = (song) => ({
	type: START_PLAYING
})

const stopPlaying = () => ({
	type: STOP_PLAYING
})

const setCurrentSong = (currentSong, currentSongList) => ({
	type: SET_CURRENT_SONG,
	currentSong,
	currentSongList
})

// implement action
const play = () => {
	return dispatch => {
		// side effects, like using the audio element belong in async action creators too, even if they aren't "async"
		audio.play() 
		dispatch(startPlaying());
	}
}

const pause = () => {
	return dispatch => {
		audio.pause();
		dispatch(stopPlaying());
	}
}

const load = (currentSong, currentSongList) => {
	return dispatch => {
		audio.src = currentSong.audioUrl
		audio.load();
		dispatch(setCurrentSong(currentSong, currentSongList));
	}
}

const startSong = (currentSong, currentSongList) => {
	return dispatch => {
		dispatch(pause());
		dispatch(load(currentSong, currentSongList));
		dispatch(play());
	}
}

export const toggle = () => {
	return (dispatch, getState) => {
		const {isPlaying} = getState();
		if (isPlaying) dispatch(pause());
		else dispatch(play());		
	}
}

export const toggleOne = (selectedSong, selectedSongList) => {
	return (dispatch, getState) => {
		const { currentSong } = getState();
		if (selectedSong.id !== currentSong.id)
			dispatch(startSong(selectedSong, selectedSongList));
		else dispatch(toggle());
	}
};

// ***** ALBUM *****
// action creator
const loadAlbumToBrowser = (album) => ({
	type: LOAD_ALBUM_TO_BROWSER,
	album
})

// implement action
const clickAlbum = (id) => {
	fetch(`/api/albums/${id}`)
		.then(res => res.json())
		.then(album => {
			dispatch(loadAlbumToBrowser(album))
		});

}