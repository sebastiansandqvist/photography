'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');

const production = Object.create(config);

production.output.filename = 'app.[chunkhash].js';

module.exports = production;