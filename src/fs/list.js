import fs from 'fs/promises';
import path from 'node:path';

const list = async () => {
    const sourceFolder = path.join('src', 'fs', 'files');

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
