'use strict';

const path = require('path');
const { spawn } = require( 'child_process' );

const isWin = process.platform === "win32";

if (isWin) {
	const generateDocs = spawn(path.join(__dirname, 'build.bat'));

	showCommandResult(generateDocs);
} else {
	const generateDocs = spawn(path.join(__dirname, 'build.sh'));

	showCommandResult(generateDocs);
}

function showCommandResult(command) {
	if (command.stderr) {
		command.stderr.on('data', data => console.error(data.toString()));
	}

	if (command.stdout) {
		command.stdout.on('data', data => console.log(data.toString()));
	}

	command.on('close', code => console.log(`child process exited with code ${code}`));
	command.on('exit', (code, signal) => console.log(`child process exited by signal ${signal} with code ${code}`));
	command.on('error', err => console.error(`error: $err`));
}
