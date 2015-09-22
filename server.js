'use strict';

// --------------------------------- dependencies ---------------------------------

const compression = require('compression');
const express = require('express');
let app = express();

const fs = require('fs');

const htmlStringify = require('./lib/html-stringify.js');

// --------------------------------- init ---------------------------------

app.use(compression());

app.use(express.static('static'));

// Inject scripts into HTML string
let scripts = ['react.js', 'radium.js', 'app.js'];

// Inject production scripts into HTML string
// First sort them to [react, radium, app] order
function sortScripts(arr) {
	let sorted = [];
	let reactIndex, radiumIndex, appIndex;
	
	for (let i = 0; i < arr.length; i++) {
		reactIndex = arr[i].indexOf('react') > -1 ? i : reactIndex;
		radiumIndex = arr[i].indexOf('radium') > -1 ? i : radiumIndex;
		appIndex = arr[i].indexOf('app') > -1 ? i : appIndex;
	}
	
	sorted.push(`min/${arr[reactIndex]}`);
	sorted.push(`min/${arr[radiumIndex]}`);
	sorted.push(`min/${arr[appIndex]}`);

	return sorted;

}

if (process.env.NODE_ENV === 'production') {
	scripts = sortScripts(fs.readdirSync('./static/javascript/min'));
}

const htmlString = htmlStringify(scripts);

// --------------------------------- routes ---------------------------------

app.get('/', function(req, res) {
	return res.send(htmlString);
});

// --------------------------------- server ---------------------------------

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT);