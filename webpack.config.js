'use strict';

const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');

module.exports = {

	entry: ['./app/app.js'],

	output: {
		path: 'static/javascript/app',
		filename: 'app.js'
	},

	module: {
		loaders: [{
			exclude: /(node_modules)/,
			loader: 'babel',
			test: /\.js$/
		}]
	},

	plugins: [
		new Clean(['static/javascript/app'])
	]

};