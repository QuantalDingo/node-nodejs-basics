import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
	const path = `${import.meta.dirname}/files/script.js`;
	const child = spawn('node', [path, ...args], {
		detached: true,
		stdio: 'inherit',
	});

	process.once('SIGINT', () => {
		const id = child.pid;
		console.log(`\nKilling child process ${id}.`);

		if (child.kill()) {
			console.log(`Successfully killed process ${id}.`);
		} else {
			process.exit(1);
		}
	});
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['-s', '-f']);
