console.log('index.js', 'before reading .env file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
// index.js before reading .env file MY_ENV_VALUE: CLI_VALUE

require('dotenv').config();

console.log('===');
console.log('index.js', 'after reading .env file MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
// index.js after reading .env file MY_ENV_VALUE: CLI_VALUE

require('dotenv').config({ path: '.env.next', override: true });

console.log('===');
console.log('index.js', 'after reading .env.next file using override=true MY_ENV_VALUE:', process.env.MY_ENV_VALUE);
// index.js after reading .env.next file using override=true MY_ENV_VALUE: DOTENV_NEXT_FILE
