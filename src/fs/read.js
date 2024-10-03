import fs from 'fs/promises';
import path from 'node:path';

const read = async () => {
    const fileToRead = path.join('src', 'fs', 'files', 'fileToRead.txt');

    try {
        const data = await fs.readFile(fileToRead, 'utf8');

        console.log(data);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await read();
