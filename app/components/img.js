import React from 'react';
import Radium from 'radium';

@Radium
export default class Img extends React.Component {

	// componentWillMount() {

	// }
	// 
	// 
	propTypes: {
		src: React.propTypes.number.isRequired
	}

	src() {
		return this.props.src.replace('/photos/', '/photos/full/');
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
		return (
			<a href={this.src()} style={this.style()}>
				<img
					src={this.props.src}
					alt="Photography by Sebastian Sandqvist"
					style={this.imgStyle()}/>
			</a>
		);
	}

};