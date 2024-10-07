import { open } from 'node:fs/promises';

const create = async () => {
	const data = 'I am fresh and young';
	let fileHandler;

	try {
		fileHandler = await open(`${import.meta.dirname}/files/fresh.txt`, 'wx');
		fileHandler.writeFile(data);
	} catch {
		console.error('FS operation failed');
	} finally {
		fileHandler?.close();
	}
};

await create();
