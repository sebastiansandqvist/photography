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
				<Img src='/photos/blue.jpg'/>
				<Three>
					<Img src='/photos/fishing-rod.jpg'/>
					<Img src='/photos/fishing-net.jpg'/>
					<Img src='/photos/fishing-stuff.jpg'/>
				</Three>
				<Img src='/photos/vegas.jpg'/>
				<Img src='/photos/spork.jpg'/>
				<Img src='/photos/mountains.jpg'/>
				<Img src='/photos/rain.jpg'/>
				<Img src='/photos/buddha.jpg'/>
				<Img src='/photos/water.jpg'/>
				<Two>
					<Img src='/photos/monkey.jpg'/>
					<Img src='/photos/ocelot.jpg'/>
				</Two>
			</Container>
		);
	}

}

React.render(<App/>, document.body);