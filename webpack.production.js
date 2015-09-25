'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');
const Clean = require('clean-webpack-plugin');

const production = Object.create(config);

production.output = {
	path: __dirname + '/static/javascript/min',
	filename: '[name]-[chunkhash].js',
	chunkFilename: '[name]-[chunkhash].js'
}

// delete all files in /min
production.plugins.push(new Clean(['static/javascript/min']));

production.plugins.push(new webpack.optimize.OccurenceOrderPlugin());

// change process.env.NODE_ENV to the string literal "production"
// uglify will see if ("production" === "development") and drop all
// contained code
production.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		'NODE_ENV': JSON.stringify('production')
	}
}));

// minify js (warnings are too verbose)
production.plugins.push(new webpack.optimize.UglifyJsPlugin({
	compressor: {
		warnings: false
	}
}));

module.exports = production;