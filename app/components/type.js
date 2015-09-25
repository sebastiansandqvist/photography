import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
export class Title extends Component {

	static propTypes = {
		children: PropTypes.string.isRequired
	}

	style() {
		return {
			color: '#fff',
			font: '400 20px/1 "Open Sans"',
			letterSpacing: 8,
			margin: 0,
			padding: 0,
			textAlign: 'center',
			textIndent: 8
		};
	}

	render() {
		return (
			<h1 style={this.style()}>
				{this.props.children}
			</h1>
		);
	}

};