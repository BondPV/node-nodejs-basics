import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(file, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readStream.on('end', () => {
        console.log('\nFinish read file');
    });

    readStream.on('error', (err) => {
        console.error('Error reading file', err.message);
    });
};

await read();
