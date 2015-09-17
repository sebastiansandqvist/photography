const react = require('react');

class App extends react.Component {

	render() {
		return (
			<div>
				Hello world!
			</div>
		);
	}

}

react.render(<App/>, document.body);