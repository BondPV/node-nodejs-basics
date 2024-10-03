import fs from 'fs/promises';
import path from 'node:path';

const rename = async () => {
    const oldFile = path.join('src', 'fs', 'files', 'wrongFilename.txt');
    const newFile = path.join('src', 'fs', 'files', 'properFilename.md');

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
