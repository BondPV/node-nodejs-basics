import path from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipelineAsync = promisify(pipeline);

const calculateHash = async () => {
    const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const readStream = createReadStream(file);

    try {
        await pipelineAsync(readStream, hash);

        console.log('Hash:', hash.digest('hex'));
    } catch (err) {
        console.error('Pipeline failed:', err);
    }
};

await calculateHash();
