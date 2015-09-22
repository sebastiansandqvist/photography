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

production.plugins.push(new Clean(['static/javascript/min']));
production.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
production.plugins.push(new webpack.DefinePlugin({
	'process.env': {
		'NODE_ENV': JSON.stringify('production')
	}
}));
production.plugins.push(new webpack.optimize.UglifyJsPlugin({
	compressor: {
		warnings: false
	}
}));

module.exports = production;