import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
	const sha256 = createHash('sha256');
	const path = `${import.meta.dirname}/files/fileToCalculateHashFor.txt`;

	await pipeline(createReadStream(path), sha256);

	console.log(sha256.digest('hex'));
};

await calculateHash();
