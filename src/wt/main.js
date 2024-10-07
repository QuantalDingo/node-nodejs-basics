import { Worker } from 'node:worker_threads'

const performCalculations = async () => {
    const CORE_NUM = 8;

    const createWorker = (workerData) =>
        new Promise((resolve, reject) => {
            const worker = new Worker(`${import.meta.dirname}/worker.js`, { workerData });

            worker.on("message", (data) => resolve({ status: 'resolved', data }));
            worker.on("error", () => reject({ status: 'error', data: null }));
            worker.on("exit", (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });

    const workers = Array.from({ length: CORE_NUM }, (_, index) => createWorker(10 + index));
    const result = await Promise.all(workers);

    console.log(result);
};

await performCalculations();