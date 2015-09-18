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

module.exports = production;