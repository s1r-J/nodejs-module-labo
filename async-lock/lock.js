const AsyncLock = require('async-lock');
const lock = new AsyncLock();

let count = 0;
const myFunction = async (timeout) => {
    console.log({
        timeout,
        time: Date.now(),
    });
    return await lock.acquire('my-lock', async () => {
        const myCount = count;
        count = await new Promise((resolve) => {
            setTimeout(() => resolve(myCount + 1), timeout);
        });
    
        const result = {
            timeout,
            time: Date.now(),
            before: myCount,
            now: count,
        };
        console.log(result);
    
        return result;    
    });
};

(async () => {
    await Promise.all([
        myFunction(1500),
        myFunction(1000),
        myFunction(500),
        myFunction(100),
    ]);

    console.log(count);
})();
