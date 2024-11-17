import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newFile = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(oldFile);
    } catch (err) {
        console.error('FS operation failed');

        return;
    }

    try {
        await fs.access(newFile);
        console.error('FS operation failed');

        return;
    } catch (err) {}

    try {
        await fs.rename(oldFile, newFile);
        console.log('Successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await rename();
