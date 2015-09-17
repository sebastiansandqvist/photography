'use strict';

/* -----------------------------------------------------------

	# Base html string
	
	Send string instead of reading html from disk.
	\n and \t are removed for minification.

----------------------------------------------------------- */

module.exports = function(react, radium, app) {

	return `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Photography</title>
				<script src="/javascript/${react}">
				<script src="/javascript/${radium}">
				<script src="/javascript/${app}">
			</head>
			<body></body>
		</html>`.replace(/(\n|\t)/gm, '');

};