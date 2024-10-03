import fs from 'fs/promises';
import path from 'node:path';

const remove = async () => {
    const fileToRemove = path.join('src', 'fs', 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(fileToRemove);

        console.log('Successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await remove();
