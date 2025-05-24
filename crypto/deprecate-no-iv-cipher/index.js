import crypto from 'node:crypto';
// const EVP_BytesToKey = require('evp_bytestokey')
import EVP_BytesToKey from 'evp_bytestokey';

const key = crypto.generateKeySync('aes', { length: 256});
const mySecretMessage = 'my secret message';
console.log(`original message: ${mySecretMessage}`);

const cipher = crypto.createCipher('aes256', key.export());
let cipherText = cipher.update(mySecretMessage, 'utf8', 'hex');
cipherText += cipher.final('hex');

console.log(`cipherText: ${cipherText}`);
console.log('===');

const decipher = crypto.createDecipher('aes-256-cbc', key.export());
let decipherText = decipher.update(cipherText, 'hex', 'utf8');
decipherText += decipher.final('utf8');

console.log(`decipherText by deprecated method: ${decipherText}`);
console.log('===');

// [node.js - nodejs recover createCipher data with createCipheriv - Stack Overflow](https://stackoverflow.com/questions/68713891/nodejs-recover-createcipher-data-with-createcipheriv)
// [evp_bytestokey - npm](https://www.npmjs.com/package/evp_bytestokey)
const result = EVP_BytesToKey(key.export(), null, 256, 16);
const decipherEvpBytesToKey = crypto.createDecipheriv('aes256', result.key, result.iv);
console.log('key and iv derived with evp bytes to key', result.key.toString('base64'), result.iv.toString('base64'));

let decipherTextEvpBytesToKey = decipherEvpBytesToKey.update(cipherText, 'hex', 'utf8');
decipherTextEvpBytesToKey += decipherEvpBytesToKey.final('utf8');
console.log(`decipherText by evp bytes to key: ${decipherTextEvpBytesToKey}`);
console.log('===');

const keyLength = 32;
const decipherKeyCrypto = Buffer.alloc(keyLength);
let decipherKeyEmptyLength = keyLength;
const ivLength = 16;
const decipherIvCrypto = Buffer.alloc(ivLength);
let decipherIvEmptyLength = ivLength;
let currentKeyUsedLength = 0;

let hashed = Buffer.alloc(0);
while (decipherKeyEmptyLength !== 0 || decipherIvEmptyLength !== 0) {
  hashed = crypto.createHash('md5').update(hashed).update(key.export()).digest();
  let hashedUsedLength = 0;
  if (decipherKeyEmptyLength > 0) {
    if (decipherKeyEmptyLength >= hashed.length) {
      hashed.copy(decipherKeyCrypto, keyLength - decipherKeyEmptyLength, hashedUsedLength, hashed.length);
      decipherKeyEmptyLength -= hashed.length;
      hashedUsedLength = hashed.length;
    } else {
      hashed.copy(decipherKeyCrypto, keyLength - decipherKeyEmptyLength, hashedUsedLength, decipherKeyEmptyLength);
      decipherKeyEmptyLength = 0;
      hashedUsedLength = decipherKeyEmptyLength;
    }
    currentKeyUsedLength += hashedUsedLength;
  }

  if (hashedUsedLength === hashed.length) {
    continue;
  }

  if (decipherKeyEmptyLength === 0 && decipherIvEmptyLength > 0) {
    if (decipherIvEmptyLength >= (hashed.length - hashedUsedLength)) {
      hashed.copy(decipherIvCrypto, ivLength - decipherIvEmptyLength, hashedUsedLength, hashed.length - hashedUsedLength);
      decipherIvEmptyLength -= hashed.length;
      hashedUsedLength += (hashed.length - hashedUsedLength);
    } else {
      hashed.copy(decipherIvCrypto, ivLength - decipherIvEmptyLength, hashedUsedLength, decipherIvEmptyLength);
      decipherIvEmptyLength = 0;
      hashedUsedLength = decipherKeyEmptyLength;
    }
    currentKeyUsedLength = hashedUsedLength;
  }
}
console.log('key and iv derived with node crypto', decipherKeyCrypto.toString('base64'), decipherIvCrypto.toString('base64'));

const decipherCrypto = crypto.createDecipheriv('aes256', decipherKeyCrypto, decipherIvCrypto);
let decipherTextCrypto = decipherCrypto.update(cipherText, 'hex', 'utf8');
decipherTextCrypto += decipherCrypto.final('utf8');

console.log(`decipherText by node crypto: ${decipherTextCrypto}`);

// original message: my secret message
// cipherText: 7209f59fe298f8528b4186e23dfd5c31af3e2dc8e4c19799b03e7ab6a7f2b978
// ===
// decipherText by deprecated method: my secret message
// ===
// key and iv derived with evp bytes to key bIOXAWiTVwUAD6QK4yaD2jSnJghPqhnoTnRlWZW2oWI= O7ebVT2bW0t0VKHrcDTfbg==
// decipherText by evp bytes to key: my secret message
// ===
// key and iv derived with node crypto bIOXAWiTVwUAD6QK4yaD2jSnJghPqhnoTnRlWZW2oWI= O7ebVT2bW0t0VKHrcDTfbg==
// decipherText by node crypto: my secret message
