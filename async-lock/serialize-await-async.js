let count = 0;
const myFunction = async (timeout) => {
    console.log({
        timeout,
        time: Date.now(),
    });
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
};

(async () => {
    await myFunction(1500);
    await myFunction(1000);
    await myFunction(500);
    await myFunction(100);

    console.log(count);
})();
