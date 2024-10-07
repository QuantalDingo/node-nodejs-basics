import { unlink } from 'node:fs/promises';

const remove = async () => {
	try {
		await unlink(`${import.meta.dirname}/files/fileToRemove.txt`);
	} catch {
		console.error('FS operation failed');
	}
};

await remove();
