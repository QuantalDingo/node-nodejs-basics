import { rename as renameFile } from 'node:fs/promises';

const rename = async () => {
	const path = `${import.meta.dirname}/files`;

	try {
		await renameFile(`${path}/wrongFilename.txt`, `${path}/properFilename.md`);
	} catch {
		console.error('FS operation failed');
	}
};

await rename();
