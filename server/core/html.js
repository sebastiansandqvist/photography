'use strict';

/* -----------------------------------------------------------

	# Base html string
	
	Beats reading html from disk.
	\n and \t are removed for minification.

----------------------------------------------------------- */

module.exports = function(reactHash, radiumHash, appHash) {

	return `<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>Photography</title>
				<script src="/javascript/react.${reactHash}.js">
				<script src="/javascript/radium.${radiumHash}.js">
				<script src="/javascript/app.${appHash}.js">
			</head>
			<body></body>
		</html>`.replace(/(\n|\t)/gm, '');

};