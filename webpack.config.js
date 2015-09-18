'use strict';

var Split = require('webpack-split-by-path');

module.exports = {

	entry: {
		app: './app/app.js',
	},

	output: {
		path: __dirname + '/static/javascript',
		filename: '[name].js',
		chunkFilename: '[name].js'
	},

	module: {
		loaders: [{
			exclude: /(node_modules)/,
			loader: 'babel',
			test: /\.js$/
		}]
	},

	plugins: [
		new Split([
			{ name: 'react', path: __dirname + '/node_modules/react' },
			{ name: 'radium', path: __dirname + '/node_modules/radium' }
		])
	]

};