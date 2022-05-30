const express = require('express');
const app = express();

// ===ミドルウェア===
app.use((req, res, next) => {
    // どのパスでも動くミドルウェア
    console.log('middleware');
    next();
});

app.use('/async', async (req, res, next) => {
    // async関数を使って同期的に前処理をするミドルウェア
    console.log('async middleware');

    await new Promise(resolve => {
        setTimeout(() => {
            console.log('async sleep');
            resolve();
        }, 3000);
    });

    next();
});

app.use('/async-error', async (req, res, next) => {
    // async関数を使って同期的に前処理をするときにエラーが発生するミドルウェア
    console.log('async-error middleware');

    await new Promise(resolve => {
        setTimeout(() => {
            try {
                if (true) {
                    throw new Error('async-error');
                } else {
                    // エラーが発生しなかったらnextを呼ぶ
                    next();
                }
            } catch (err) {
                next(err);
            }
        }, 3000);
    });

    next();
});

app.use('/no-async', (req, res, next) => {
    // 非同期的に前処理をするミドルウェア
    console.log('no-async middleware');

    setTimeout(() => {
        console.log('no-async sleep');
        next();
    }, 3000);

    next();
});

app.use('/no-async-error', (req, res, next) => {
    // 非同期的に前処理をするときにエラーが発生するミドルウェア
    console.log('no-async-error middleware');

    setTimeout(() => {
        try {
            if (true) {
                throw new Error('no-async-error');
            } else {
                // エラーが発生しなかったらnextを呼ぶ
                next();
            }
        } catch (err) {
            next(err);
        }
}, 3000);

    next();
});

// ===ルート===
app.get('/hello', function (req, res) {
    console.log('Call hello.');
    res.send('Express response: hello');
    console.log('---');
});

app.get('/async', function (req, res) {
    console.log('Call async.');
    res.send('Express response: async');
    console.log('---');
});

app.get('/async-error', function (req, res) {
    console.log('Call async-error.');
    res.send('Express response: async-error');
    console.log('---');
});

app.get('/no-async', function (req, res) {
    console.log('Call no-async.');
    res.send('Express response: no-async');
    console.log('---');
});

app.get('/no-async-error', function (req, res) {
    console.log('Call error.');
    res.send('Express response: no-async-error');
    console.log('---');
});

// ===エラーハンドリング===
app.use((err, req, res, next) => {
    console.log(`Error: ${err.name}`);

    if (res.headersSent) {
        // 非同期的に処理が実施されるとレスポンスが返却されている可能性がある
        console.log('response is already sent.')
        // レスポンスを複数回返すとエラーになる
        // res.status(500).send('Express response: error');
    } else {
        res.status(500).send('Express response: error');
    }
    console.log('---');
});


app.listen(3000, () => {
    console.log('Example app listening.')
    console.log('---');
});
