import React, { Component } from 'react';
import { Container, Sep, Two, Three } from './components/layout';
import { Title } from './components/type.js';
import Img from './components/img.js'

class App extends Component {

	render() {
		return (
			<Container>
				<Title>PHOTOGRAPHY</Title>
				<Sep/>
				<Img src='/photos/tomato.jpg'/>
				<Img src='/photos/waterlight.jpg'/>
				<Img src='/photos/winter.jpg'/>
				<Two>
					<Img src='/photos/ocean-sail.jpg'/>
					<Img src='/photos/ocean-seagull.jpg'/>
				</Two>
				<Img src='/photos/bubbles.jpg'/>
				<Img src='/photos/dante.jpg'/>
				<Img src='/photos/dream.jpg'/>
				<Two>
					<Img src='/photos/pattern-iguana.jpg'/>
					<Img src='/photos/pattern-chicken.jpg'/>
				</Two>
				<Img src='/photos/mountains.jpg'/>
				<Img src='/photos/vegas.jpg'/>
				<Three>
					<Img src='/photos/fishing-rod.jpg'/>
					<Img src='/photos/fishing-net.jpg'/>
					<Img src='/photos/fishing-stuff.jpg'/>
				</Three>
				<Img src='/photos/spork.jpg'/>
				<Two>
					<Img src='/photos/buddha.jpg'/>
					<Img src='/photos/water.jpg'/>
				</Two>
				<Three>
					<Img src='/photos/corkscrew-1.jpg'/>
					<Img src='/photos/corkscrew-2.jpg'/>
					<Img src='/photos/corkscrew-3.jpg'/>
				</Three>
				<Two>
					<Img src='/photos/monkey.jpg'/>
					<Img src='/photos/ocelot.jpg'/>
				</Two>
				<Img src='/photos/blue.jpg'/>
				<Img src='/photos/whitespace.jpg'/>
			</Container>
		);
	}

}

React.render(<App/>, document.body);