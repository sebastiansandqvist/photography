'use strict';

// --------------------------------- dependencies ---------------------------------

const express = require('express');
let app = express();

const fs = require('fs');

const htmlStringify = require('./lib/html-stringify.js');

// --------------------------------- init ---------------------------------

app.use(express.static('static'));

// Inject scripts into HTML string
let scripts = ['react.js', 'radium.js', 'app.js'];

// if (process.env.NODE_ENV === 'production') {
// 	scripts = fs.readdirSync('../static/javascript/min');
// }

const htmlString = htmlStringify(scripts);

// --------------------------------- routes ---------------------------------

app.get('/', function(req, res) {
	return res.send(htmlString);
});

// --------------------------------- server ---------------------------------

app.listen(3000, function() {
	console.log('localhost:3000');
});