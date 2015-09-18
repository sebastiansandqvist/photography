'use strict';

var fs = require('fs');
var path = require('path');
var browserify = require('browserify');
var factor = require('factor-bundle');

module.exports = function() {

	var entry = ;
	var output = ['../static/javascript/'];

	var b = browserify();
	b.add(['../app/app.js']);
	b.plugin(factor, {
		e: entry,
		o: output
	});
	b.bundle().pipe(fs.createWriteStream('./common.js'));


}