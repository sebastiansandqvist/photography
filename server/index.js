'use strict';

// ----- dependencies
// ---------------------------------------
const fs = require('fs');
const htmlStringify = require('./modules/html');

// ----- browserify and generate html
// ---------------------------------------
let scripts = ['react.js', 'radium.js', 'app.js'];

if (process.env.NODE_ENV === 'production') {
	scripts = fs.readdirSync('../static/javascript/min');
}

const htmlString = htmlStringify(scripts);