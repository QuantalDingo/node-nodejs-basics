import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const ws = createWriteStream(`${import.meta.dirname}/files/fileToWrite.txt`);
    stdin.pipe(ws);
};

await write();
