import { argv } from 'node:process';

const parseArgs = () => {
	const result = argv
		.slice(2)
		.map((item) =>
			item.startsWith('--') ? `${item.replace('--', '')} is ` : `${item}, `
		)
		.join('')
		.replace(/, $/, '');

	console.log(result);
};

parseArgs();
