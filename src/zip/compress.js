import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
	const basePath = `${import.meta.dirname}/files`;

	try {
		await pipeline(
			createReadStream(`${basePath}/fileToCompress.txt`),
			createGzip(),
			createWriteStream(`${basePath}/archive.gz`)
		);
	} catch {
		console.log('Compress operation failed.');
	}
};

await compress();
