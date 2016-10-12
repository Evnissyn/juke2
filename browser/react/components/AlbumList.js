'use strict';

import React, { Component } from 'react';
import Songs from '../components/Songs';
import {receiveAlbumListFromServer,fetchAlbumListFromServer} from '../reduxReducer'

// const {receiveAlbumListFromServer} = reduxObj;


const convertAlbum = album => {
	album.imageUrl = `/api/albums/${album.id}/image`;
	return album;
};

export default class AlbumList extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		console.log('fetchAlbumListFromServer', fetchAlbumListFromServer)
		let x = fetchAlbumListFromServer();
		x(this.props.loadAlbums);

		// fetch('/api/albums/')
		// 	.then(res => res.json())
		// 	.then(albumList => {
		// 		this.props.loadAlbums(receiveAlbumListFromServer(albumList));
		// 	});
	}

	render() {
		return (
			<div>
				<h3>HIIIII!!!</h3>
				<div className="row">
					{
						this.props.albumList && this.props.albumList.map(album => {
							album = convertAlbum(album);
							return (
							<div className="col-xs-4" key = {album.id}>
								<a className="thumbnail" href="#">
									<img src={album.imageUrl} />
									<div className="caption">
										<h5>
											<span>{album.name}</span>
										</h5>
										<small>{album.songs ? album.songs.length : 0}</small>
									</div>
								</a>
							</div>
						)})
					}

				</div>
			</div>)
	}
}

