import fs from 'fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const folderPath = path.join(__dirname, 'files');
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
