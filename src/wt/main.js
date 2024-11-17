import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    const results = new Array(numCPUs);
    let completedWorkers = 0;

    const handleCompletion = (index, status, data) => {
        results[index] = { status, data };
        completedWorkers++;

        if (completedWorkers === numCPUs) {
            console.log(results);
        }
    };

    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));

        worker.postMessage(10 + i);

        worker.on('message', (result) => handleCompletion(i, 'resolved', result));
        worker.on('error', () => handleCompletion(i, 'error', null));
    }
};

await performCalculations();
