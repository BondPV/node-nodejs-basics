import fs from 'fs/promises';
import path from 'node:path';

const create = async () => {
    const folderPath = path.join('src', 'fs', 'files');
    const filePath = path.join(folderPath, 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filePath);

        console.error('FS operation failed');

        return;
    } catch (err) {}

    try {
        await fs.writeFile(filePath, content);

        console.log('Successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await create();
