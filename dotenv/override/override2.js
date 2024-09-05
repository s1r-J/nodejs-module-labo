require('dotenv').config({ override: true });

console.log('index.js', 'after reading .env file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env file ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env file BETA:', process.env.BETA);
// index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
// index.js after reading .env file ALPHA: AAA
// index.js after reading .env file BETA: undefined

require('dotenv').config({ path: '.env.next', override: true });

console.log('===');
console.log('index.js', 'after reading .env.next file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env.next file ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env.next file BETA:', process.env.BETA);
// index.js after reading .env.next file MY_ENV_VALUE: DOTENV_NEXT_FILE
// index.js after reading .env.next file ALPHA: AAA
// index.js after reading .env.next file BETA: BBB

require('dotenv').config({ override: true });

console.log('===');
console.log('index.js', 'after reading .env file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
console.log('index.js', 'after reading .env file ALPHA:', process.env.ALPHA);
console.log('index.js', 'after reading .env file BETA:', process.env.BETA);
// index.js after reading .env file MY_ENV_VALUE: DOTENV_FILE
// index.js after reading .env file ALPHA: AAA
// index.js after reading .env file BETA: BBB
