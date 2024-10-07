import { readFile } from 'node:fs/promises';

const read = async () => {
	try {
		const content = await readFile(
			`${import.meta.dirname}/files/fileToRead.txt`,
			{
				encoding: 'utf8',
			}
		);
		console.log(content);
	} catch {
		console.error('FS operation failed');
	}
};

await read();
