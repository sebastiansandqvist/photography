var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

const static = 'static/javascript';

module.exports = {

	entry: {
		app: path.resolve(__dirname, 'app/app.js'),
		react: [path.resolve(__dirname, 'node_modules/react')],
		radium: [path.resolve(__dirname, 'node_modules/radium')]
	},

	output: {
		filename: `${static}/[name].[hash].js`
	},

	module: {
		loaders: [{
			exclude: /(node_modules)/,
			loader: 'babel',
			test: /\.js$/
		}]
	},

	plugins: [
		new Clean(['static/javascript'])
	]

}