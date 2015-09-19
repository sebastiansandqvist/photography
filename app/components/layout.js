import React from 'react';
import Radium from 'radium';


// --------------------------------- Container ---------------------------------

@Radium
export class Container extends React.Component {

	componentWillMount() {
		document.body.style.backgroundColor = '#111';
		document.body.style.margin = 0;
	}

	componentWillUnmount() {
		document.body.style.backgroundColor = null;
		document.body.style.margin = null;
	}

	style() {
		return {
			boxSizing: 'border-box',
			margin: '0 auto',
			maxWidth: 1000,
			padding: '64px 24px',
			width: '100%'
		};
	}

	render() {
		return (
			<div style={this.style()}>
				{this.props.children}
			</div>
		);
	}

};


// --------------------------------- Sep ---------------------------------

@Radium
export class Sep extends React.Component {

	style() {
		return {
			background: '#f42',
			height: 2,
			margin: '64px auto',
			maxWidth: '50%',
			width: 200
		};
	}

	render() {
		return (
			<div style={this.style()}></div>
		);
	}

};


// --------------------------------- Two ---------------------------------

@Radium
export class Two extends React.Component {

	componentDidMount() {
		console.log(this.props.children);
		console.log(Array.isArray(this.props.children));
	}

	style() {
		return {

		};
	}

	render() {

		return(
			<div style={this.style()}>
				{this.props.children}
			</div>
		);
	}

};