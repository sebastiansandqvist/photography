'use strict';

/**
 * Generate <script> tags
 * @param  {Array} scripts filenames to inject
 * @return {String}        generated <script> tags
 */
function makeScripts(scripts) {
	return scripts.map(function(script) {
		return `<script src="/javascript/${script}">`;
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
				<title>Photography</title>
				${makeScripts(scripts)}
			</head>
			<body></body>
		</html>`.replace(/(\n|\t)/gm, ''); // minify

};