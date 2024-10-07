import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
	const basePath = `${import.meta.dirname}/files`;

	try {
		await pipeline(
			createReadStream(`${basePath}/archive.gz`),
			createGunzip(),
			createWriteStream(`${basePath}/fileToCompress.txt`)
		);
	} catch {
		console.error('Decompress operation failed.');
	}
};

await decompress();
