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
			maxWidth: 1200,
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
		}
	}

	render() {
		return (
			<div style={this.style()}></div>
		)
	}

};


// --------------------------------- Fraction ---------------------------------

@Radium
class Fraction extends React.Component {

	static defaultProps = {
		parentWidth: 1000
	}

	style() {

		return {
			float: this.props.align,
			marginRight: this.props.align === 'left' ? 64 : null,
			width: (this.props.parentWidth / this.props.n) - ((this.props.n - 1) * 64 / this.props.n),
			'@media (max-width: 1210px)': {
				float: 'none',
				marginRight: 0,
				width: '100%'
			}
		}
	}

	render() {
		return (
			<div style={this.style()}>
				{this.props.children}
			</div>
		)
	}

}


// --------------------------------- Two ---------------------------------

@Radium
export class Two extends React.Component {

	componentDidMount() {
		let width = React.findDOMNode(this).getBoundingClientRect().width;
		this.setState({width: width});
	}

	render() {

		let children = [];
		React.Children.forEach(this.props.children, function(child) {
			children.push(child);
		});

		if (children.length !== 2) {
			console.warn(`Two component requires exactly 2 children. You provided ${children.length}`);
		}

		return(
			<div>
				<Fraction n={2} align='left' parentWidth={this.state.width}>{children[0]}</Fraction>
				<Fraction n={2} align='right' parentWidth={this.state.width}>{children[1]}</Fraction>
			</div>
		)
	}

};


// --------------------------------- Three ---------------------------------

@Radium
export class Three extends React.Component {

	componentDidMount() {
		let width = React.findDOMNode(this).getBoundingClientRect().width;
		this.setState({width: width})
	}

	render() {

		let children = [];
		React.Children.forEach(this.props.children, function(child) {
			children.push(child);
		});

		if (children.length !== 3) {
			console.warn(`Three component requires exactly 3 children. You provided ${children.length}`);
		}

		return(
			<div>
				<Fraction n={3} align='left' parentWidth={this.state.width}>{children[0]}</Fraction>
				<Fraction n={3} align='left' parentWidth={this.state.width}>{children[1]}</Fraction>
				<Fraction n={3} align='right' parentWidth={this.state.width}>{children[2]}</Fraction>
			</div>
		)
	}

};
