import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceFolder = path.join(__dirname, 'files');
    const targetFolder = path.join(__dirname, 'files_copy');

    try {
        await fs.access(sourceFolder);
    } catch (err) {
        console.error('FS operation failed');

        return;
    }

    try {
        await fs.access(targetFolder);
        console.error('FS operation failed');

        return;
    } catch (err) {}

    try {
        await fs.mkdir(targetFolder);

        const files = await fs.readdir(sourceFolder);

        for (const file of files) {
            const srcFile = path.join(sourceFolder, file);
            const destFile = path.join(targetFolder, file);

            await fs.copyFile(srcFile, destFile);
        }

        console.log('Successfully');
    } catch (err) {
        console.error('FS operation failed');
    }
};


await copy();
