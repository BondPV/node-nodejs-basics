import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(fileToRemove);

        console.log('Successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await remove();
