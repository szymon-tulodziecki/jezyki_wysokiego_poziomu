const { Worker } = require('worker_threads');

function runWorker(workerData) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const worker = new Worker('./sumWorker.js', { workerData });
        
        worker.on('message', (result) => {
            const endTime = Date.now();
            resolve({
                result,
                time: endTime - startTime,
                limit: workerData.limit
            });
        });
        
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Niewolnik zakńczył swoje życie ${code}`));
            }
        });
    });
}

async function main() {
    const limits = [1000000000, 2000000000, 3000000000, 4000000000];
    const workers = limits.map(limit => runWorker({ limit }));
    
    try {
        console.log('Uruchamianie niewolników...');
        const results = await Promise.all(workers);
        
        results.forEach(({ result, time, limit }) => {
            console.log(`Niewolnik z limitem ${limit}: suma = ${result}, czas = ${time}ms`);
        });
    } catch (err) {
        console.error(err);
    }
}

main();
