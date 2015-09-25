import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export default class Img extends Component {

	static propTypes = {
		src: PropTypes.string.isRequired
	}

	style() {
		return {
			display: 'block',
			marginBottom: 64
		};
	}
	
	imgStyle() {
		return {
			border: 0,
			boxShadow: '0 1px 5px #000',
			width: '100%'
		};
	}

	render() {

		const src = this.props.src;
		const full = '/photos/full/';
		
		return (
			<a href={src.replace('/photos/', full)} style={this.style()}>
				<img
					src={src}
					alt='Photography by Sebastian Sandqvist'
					style={this.imgStyle()}/>
			</a>
		);
	}

}