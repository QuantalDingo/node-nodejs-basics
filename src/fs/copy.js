import { cp } from 'node:fs/promises';

const copy = async () => {
	const basePath = `${import.meta.dirname}`;
	try {
		cp(`${basePath}/files`, `${basePath}/files_copy`, { recursive: true });
	} catch {
		console.error('FS operation failed');
	}
};

await copy();
