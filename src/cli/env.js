import { env } from 'node:process';

const parseEnv = () => {
	const result = Object.keys(env)
		.filter((value) => value.startsWith('RSS_'))
		.map((key) => `${key}=${env[key]}`)
		.join('; ');

	console.log(result);
};

parseEnv();
