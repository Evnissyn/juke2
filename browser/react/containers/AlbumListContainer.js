'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';


import AlbumList from '../components/AlbumList';


const mapStateToProps = function ({AlbumList}, ownProps) {return {AlbumList};}

const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		loadAlbums (albums) {
			dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albums: albums });
		}
	}
}

// const AlbumListContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumList);


export default class AlbumListContainer extends Component {
	constructor(props) {
		super();
		this = connect(mapStateToProps, mapDispatchToProps)(AlbumList);
	}

	componentDidMount () {
		fetch('/api/albums/')
			.then(res => res.json())
			.then(AlbumList => console.log(AlbumList));
	}



}