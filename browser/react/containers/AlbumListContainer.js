'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';


import AlbumList from '../components/AlbumList';

const mapStateToProps = function ({albumList}, ownProps) {
	return {albumList};
}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		loadAlbums (action) {
			dispatch(action);
		}
	}
}

const AlbumListContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumList);

export default AlbumListContainer;

