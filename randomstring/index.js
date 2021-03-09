const randomstring = require('randomstring');

const r1 = randomstring.generate();
console.log(`r1: ${r1}`);  // 32文字のランダム文字列

const r2 = randomstring.generate(8);
console.log(`r2: ${r2}`);  // 8文字のランダム文字列

const r21 = randomstring.generate(-5);
console.log(`r21: ${r21}`);  // 空文字列

const r22 = randomstring.generate(8.1);
console.log(`r22: ${r22}`);  // 切り上げて9文字のランダム文字列

const r3 = randomstring.generate({
    length: 16,                   // 長さを16文字にする
    charset: 'alphabetic',        // 半角英字のみ使う
    capitalization: 'uppercase',  // 半角英字は大文字のみ使う
    readable: true                // 読みにくい文字は使わない（「0」「O」「I」「l」）
});
console.log(`r3: ${r3}`);  // オーとアイを除く半角英大文字で構成された16文字のランダム文字列

const r31 = randomstring.generate({
    length: 16,                   // 長さを16文字にする
    charset: 'numeric',           // 半角数字のみ使う
    capitalization: 'uppercase',  // 半角英字は大文字のみ使う
    readable: false               // 読みにくい文字でも使う
});
console.log(`r31: ${r31}`);  // 半角数字で構成された16文字のランダム文字列
