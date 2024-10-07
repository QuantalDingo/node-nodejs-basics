import { readdir } from 'node:fs/promises';

const list = async () => {
	try {
		const list = await readdir(`${import.meta.dirname}/files`);
		list.forEach((item) => console.log(item));
	} catch {
		console.error('FS operation failed');
	}
};

await list();
