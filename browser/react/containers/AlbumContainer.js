'use strict'

import React, { Component } from 'react';
import {connect} from 'react-redux';



import Album from '../components/Album';

// ********** ALBUM ***********

const mapStateToProps = (state, props) => {
	return {
		album,
		currentSong,
		isPlaying,
		props.toggle
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clickAlbum: () => dispatch(clickAlbum());
	}
}

connect (mapStateToProps, mapDispatchToProps) (Album); 