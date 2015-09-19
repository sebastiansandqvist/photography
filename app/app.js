import React from 'react';
import { Container, Sep, Two, Three } from './components/layout';
import { Title } from './components/type.js';
import Img from './components/img.js'

class App extends React.Component {

	render() {
		return (
			<Container>
				<Title>PHOTOGRAPHY</Title>
				<Sep/>
				<Img src="/photos/tomato.jpg"/>
				<Two>
					<Img src="/photos/tomato.jpg"/>
					<Img src="/photos/tomato.jpg"/>
				</Two>
				<Three>
					<Img src="/photos/tomato.jpg"/>
					<Img src="/photos/tomato.jpg"/>
					<Img src="/photos/tomato.jpg"/>
				</Three>
			</Container>
		);
	}

}

React.render(<App/>, document.body);