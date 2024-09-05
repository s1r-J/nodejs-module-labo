console.log('index.js', 'after reading .env file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env file ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env file BETA:', process.env.BETA);
// index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
// index.js after reading .env file ALPHA: CLI_VALUE
// index.js after reading .env file BETA: undefined

require('dotenv').config({ path: '.env.next'});
console.log('===');
console.log('index.js', 'after reading .env.next file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env.next file ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env.next file BETA:', process.env.BETA);
// index.js after reading .env.next file MY_ENV_VALUE: DOTENV_FILE
// index.js after reading .env.next file ALPHA: CLI_VALUE
// index.js after reading .env.next file BETA: BBB

require('dotenv').config({ path: '.env.next2', override: true});
console.log('===');
console.log('index.js', 'after reading .env.next2 file with override MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env.next2 file with override ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env.next2 file with override BETA:', process.env.BETA);
// index.js after reading .env.next2 file with override MY_ENV_VALUE: DOTENV_NEXT2_FILE
// index.js after reading .env.next2 file with override ALPHA: CLI_VALUE
// index.js after reading .env.next2 file with override BETA: BBB

require('dotenv').config({ path: '.env', override: true});
console.log('===');
console.log('index.js', 'after reading .env.next2 file with override MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env.next2 file with override ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env.next2 file with override BETA:', process.env.BETA);
// index.js after reading .env.next2 file with override MY_ENV_VALUE: DOTENV_FILE
// index.js after reading .env.next2 file with override ALPHA: AAA
// index.js after reading .env.next2 file with override BETA: BBB
