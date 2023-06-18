const { expect } = require('chai'); 
const BeforeUser = require('../src/user');
const AfterUser = require('../index').User;
const hello = require('../src/hello');

describe('Hello test', () => {
    it('User object from index.js(dist/user.js) is BeforeUser', () => {
        const kate = new AfterUser('kate');
        const greeting = hello(kate);
        expect(greeting).to.equal('Hello, kate.');  // Passing!
    });

    it('User object from src/user.js is not BeforeUser', () => {
        const david = new BeforeUser('david');
        const greeting = hello(david);
        expect(greeting).to.equal('You are not User.'); // Passing!
    });
});
