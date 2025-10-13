const {parentPort, workerData} = require('worker_threads');

const limit = workerData.limit;
let sum = 0;

for(let i = 0; i <= limit; i++) {
    sum += 1;
}

parentPort.postMessage(sum);