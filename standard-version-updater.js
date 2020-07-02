'use strict';

const path = require('path');
const { spawnSync } = require('child_process');

const isWin = process.platform === "win32";

// standard-version-updater.js
const regex = /(?<=## Release Version\s*)(.*\[)((0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?=\])/gm;

module.exports.readVersion = function(contents) {
	var result = regex.exec(contents);

	return result[2];
}

module.exports.writeVersion = function(contents, version) {
	if (isWin) {
		const generateDocs = spawnSync(path.join(__dirname, 'build.bat'), [version], {maxBuffer: 10000000});

		showCommandResult(generateDocs);
	} else {
		const generateDocs = spawnSync(path.join(__dirname, 'build.sh'), [version], {maxBuffer: 10000000});

		showCommandResult(generateDocs);
	}

	return contents.replace(regex, `-   [${version}](./${version}/docs/README.md) – Legytma Schema Documentation version ${version};\n$1$2`);
}

function showCommandResult(command) {
	if (command.output) {
		console.log(command.output.toString());
	}

	if (command.stderr) {
		console.error(command.stderr.toString());
	}

	if (command.error) {
		console.error(command.error);
	}

	command.on('close', (code) => console.log(`child process exited with code ${code}`));
	command.on('exit', (code, signal) => console.log(`child process exited by signal ${signal} with code ${code}`));
	command.on('error', (err) => console.error(`error: $err`));
}
