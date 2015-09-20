'use strict';

var fs = require('fs');
var path = require('path');

/**
 * Base64 inline favicon
 * @return {String} base64 encoding of favicon.png
 */
function getFavicon() {
	const p = path.resolve(__dirname, '../static/favicon.png');
	return fs.readFileSync(p).toString('base64');
}

/**
 * Generate <script> tags
 * @param  {Array} scripts filenames to inject
 * @return {String}        generated <script> tags
 */
function makeScripts(scripts) {
	return scripts.map(function(script) {
		return `<script src="/javascript/${script}"></script>`;
	}).join('');
}

/**
 * Html string generator
 * @param  {Array} scripts array of script filenames
 * @return {String}
 */
module.exports = function(scripts) {

	return `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<link rel="shortcut icon" href="data:image/png;base64,${getFavicon()}">
				<title>Photography</title>
			</head>
			<body>
				${makeScripts(scripts)}
			</body>
		</html>`.replace(/(\n|\t)/gm, ''); // minify

};