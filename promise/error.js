(async () => {
    console.log('=== start ===');
    console.log('=== sleep ===');

    const sleep = function (ms, errorThrow) {
        return new Promise((resolve) => {
            if (errorThrow) {
                throw new Error('my error');
            }
            setTimeout(() => {
                resolve('hello: ' + ms);
            }, ms);
        });
    };
    let greeting = await sleep(100, false);
    console.log('greeting: ', greeting);
    try {
        greeting = await sleep(101, true);
        console.log('greeting: ', greeting);
    } catch (err) {
        console.log('error: ', err)
    }

    console.log();
    greeting = await sleep(102, false).catch((e) => {
        return e;
    });
    console.log('greeting: ', greeting);

    console.log();
    greeting = await sleep(103, true).catch((e) => {
        return e;
    });
    console.log('greeting: ', greeting);

    console.log();
    try {
        greeting = await sleep(104, true).catch((e) => {
        return e;
        });
        console.log('greeting: ', greeting);
    } catch (err) {
        console.log('error: ', err);
    }

    console.log();
    console.log('=== sleep2 ===');
    const sleep2 = function (ms, errorThrow) {
        return new Promise((resolve, reject) => {
            if (errorThrow) {
                reject(new Error('my error'));
                return;
            }
            setTimeout(() => {
                resolve('hello: ' + ms);
            }, ms);
        });
    };
    try {
        greeting = await sleep2(105, true);
        console.log('greeting: ', greeting);
    } catch (err) {
        console.log('error: ', err);
    }

    console.log();
    console.log('=== sleep3 ===');
    const sleep3 = function (ms, errorThrow) {
        return new Promise((resolve, reject) => {
            if (errorThrow) {
                reject('my error str');
                return;
            }
            setTimeout(() => {
                resolve('hello: ' + ms);
            }, ms);
        });
    };
    try {
        greeting = await sleep3(106, true);
        console.log('greeting: ', greeting);
    } catch (err) {
        console.log('error?: ', err, ' isError: ', err instanceof Error);
    }

    console.log();
    console.log('=== sleep4 ===');
    const sleep4 = function (ms, errorThrow) {
        return new Promise((resolve, reject) => {
            if (errorThrow) {
                reject(new Error('my error'));
                console.log('after reject');
            }
            resolve('hello: ' + ms);
        });
    };
    try {
        greeting = await sleep4(107, true);
        console.log('greeting: ', greeting);
    } catch (err) {
        console.log('error: ', err);
    }

    console.log();
    console.log('=== sleep5 ===');
    const sleep5 = function (ms, errorThrow) {
        return new Promise((resolve, reject) => {
            if (errorThrow) {
                throw new Error('my error');
                console.log('after throw');
            }
            resolve('hello: ' + ms);
        });
    };
    try {
        greeting = await sleep5(108, true);
        console.log('greeting: ', greeting);
    } catch (err) {
        console.log('error: ', err);
    }

    console.log('=== end ===')
})();
