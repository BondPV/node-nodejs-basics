import path from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const file = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(file, { flags: 'a' });

    process.stdin.pipe(writeStream);

    console.log('Writing to file. Press Ctrl+C to stop');
};

await write();
