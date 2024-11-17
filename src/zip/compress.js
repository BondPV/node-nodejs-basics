import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.join(__dirname, 'files', 'archive.gz');

    const gzip = createGzip();
    const readStream = createReadStream(file);
    const writeStream = createWriteStream(archive);

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Compress success');
    });

    writeStream.on('error', (err) => {
        console.error('Error', err.message);
    });
};

await compress();
