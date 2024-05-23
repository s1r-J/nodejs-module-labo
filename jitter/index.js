import AsyncLock from 'async-lock';
import exponentialBackoff from './exponential.js';
import full from './full.js';
import equal from './equal.js';
import decorrelated from './decorrelated.js';

const lock = new AsyncLock({
  timeout: 1,
  maxPending: 0,
});

async function request() {
  await lock.acquire('my-lock', async () => {
    const request = 10;
    const fluctuation = 4;
    await new Promise((resolve) => setTimeout(resolve, request - fluctuation / 2 + Math.random() * fluctuation));  
  });
}

const client = Number.parseInt(process.argv[3]);
const base = 5;
const cap = -1;

let backoff;
const mode = process.argv[2];
switch (mode) {
  case 'exponential':
    backoff = exponentialBackoff;
    break;
  case 'full':
    backoff = full;
    break;
  case 'equal':
    backoff = equal;
    break;
  case 'decorrelated':
    backoff = decorrelated;
    break;
  default:
    throw new Error('usage: node index.js mode client');
}

const promises = Array.from(Array(client).keys()).map(() => {
  return (async () => {
    let complete = false;
    let i = 0;
    let prevSleep = 0;
    while (!complete) {
      try {
        await request();
        complete = true;
      } catch (err) {
        const sleep = backoff({ base, attempt: i + 1, cap, prevSleep, });
        await new Promise((resolve) => setTimeout(resolve, sleep));
        i++;
        prevSleep = sleep;
      }
    }

    return i + 1;
  })();
});

const start = Date.now();
const counts = await Promise.all(promises);
const end = Date.now();

console.log(`mode: ${mode}, time: ${end - start}ms, work: ${counts.reduce((acc, curr) => acc + curr, 0)}`);
