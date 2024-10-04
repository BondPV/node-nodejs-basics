import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.join(__dirname, 'files', 'archive.gz');

    const gunzip = createGunzip();
    const readStream = createReadStream(archive);
    const writeStream = createWriteStream(file);

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Decompress success');
    });

    writeStream.on('error', (err) => {
        console.error('Error', err.message);
    });
};

await decompress();
