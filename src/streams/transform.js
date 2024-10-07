import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
    const reverse = new Transform({
        transform: (chunk, encoding, next) => {
            const out = chunk.toString().split('').reverse().join('');
            next(null, `${out}\n`)
        }
    });

    await pipeline(stdin, reverse, stdout);
};

await transform();
