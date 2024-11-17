import { Transform } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed);
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    console.log('Transform started. Press Ctrl+C to stop');
};

await transform();
