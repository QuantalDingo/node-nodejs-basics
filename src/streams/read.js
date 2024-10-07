import { createReadStream } from 'node:fs';

const read = async () => {
	const stream = createReadStream(
		`${import.meta.dirname}/files/fileToRead.txt`
	);
	stream.setEncoding('utf8');

	stream.on('data', (chunk) => {
		console.log(chunk);
	});
};

await read();
