import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const data = await fs.readFile(fileToRead, 'utf8');

        console.log(data);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await read();
