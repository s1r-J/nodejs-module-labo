require('dotenv').config();

const stringEnv = process.env.STRING_ENV;
console.log('STRING_ENV type:', typeof stringEnv); // string
console.log('STRING_ENV:', stringEnv); // string value

const numberEnv = process.env.NUMBER_ENV;
console.log('NUMBER_ENV type:', typeof numberEnv); // string
console.log('NUMBER_ENV:', numberEnv); // 123

const booleanEnv = process.env.BOOLEAN_ENV;
console.log('BOOLEAN_ENV type:', typeof booleanEnv); // string
console.log('BOOLEAN_ENV:', booleanEnv); // true

const noQuotationEnv = process.env.NO_QUOTATION_ENV;
console.log('NO_QUOTATION_ENV:', noQuotationEnv); // no quotation env

const singleQuotationEnv = process.env.SINGLEQUOTATION_ENV;
console.log('SINGLEQUOTATION_ENV:', singleQuotationEnv); // singleenv

const escapeEnv = process.env.ESCAPE_ENV;
console.log('ESCAPE_ENV:', escapeEnv); // \"escapeenv\"

const multiEnv = process.env.MULTI_ENV;
console.log('MULTI_ENV:', multiEnv); // THIS IS MULTILINE
                                     // ENV VALUE
                                     // END

const failMultiEnv = process.env.FAIL_MULTI_ENV;
console.log('FAIL_MULTI_ENV:', failMultiEnv); // THIS IS FAIL MULTILINE

const altMultiEnv = process.env.ALT_MULTI_ENV;
console.log('ALT_MULTI_ENV:', altMultiEnv); // THIS IS ALT MULTILINE
                                            // ENV VALUE
                                            // END

const failAltMultiEnv = process.env.FAIL_ALT_MULTI_ENV;
console.log('FAIL_ALT_MULTI_ENV:', failAltMultiEnv); // THIS IS ALT MULTILINE\nENV VALUE\nEND

const commentEnv = process.env.COMMENT_ENV;
console.log('COMMENT_ENV:', commentEnv); // VALUEISHERE

const commentInEnv = process.env.COMMENT_IN_ENV;
console.log('COMMENT_IN_ENV:', commentInEnv); // VALUE#IS#HERE


