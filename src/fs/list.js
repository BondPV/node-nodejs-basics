import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const sourceFolder = path.join(__dirname, 'files');

    try {
        const files = await fs.readdir(sourceFolder);

        files.forEach(file => {
            console.log(file);
        });
    } catch (error) {
        console.error('FS operation failed');
    }
};

await list();
