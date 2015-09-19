import React from 'react';
import { Container, Sep, Two } from './components/layout';
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
			</Container>
		);
	}

}

React.render(<App/>, document.body);