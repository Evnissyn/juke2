'use strict';

import React from 'react';
import Songs from '../components/Songs';

export default ({albumList}) => (
	<div>
		<h3>Albums</h3>
		<div className="row">
			{
				albumList && albumList.map(album => (
					<div className="col-xs-4" key = {album.id}>
						<a className="thumbnail" href="#">
							<img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
							<div className="caption">
								<h5>
									<span>{album.name}</span>
								</h5>
								<small>{album.songs ? album.songs.length : 0}</small>
							</div>
						</a>
					</div>
				))
			}



			<div className="col-xs-4">
				<a className="thumbnail" href="#">
					<img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
					<div className="caption">
						<h5>
							<span>ALBUM ONE NAME HERE</span>
						</h5>
						<small>NUMBER OF SONGS HERE songs</small>
					</div>
				</a>
			</div>


			<div className="col-xs-4">
				<a className="thumbnail" href="#">
					<img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMtwoIMAGE&w=300&h=300" />
					<div className="caption">
						<h5>
							<span>ALBUM TWO NAME HERE</span>
						</h5>
						<small>NUMBER OF SONGS HERE songs</small>
					</div>
				</a>
			</div>
		</div>
	</div>
)