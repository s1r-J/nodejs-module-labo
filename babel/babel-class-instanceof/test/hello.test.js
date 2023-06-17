const { expect } = require('chai'); 
const User = require('../src/user');
const IndexUser = require('../index').User;
const hello = require('../src/hello');

describe('Hello test', () => {
    it('object from index is User', () => {
        const kate = new IndexUser('kate');
        const greeting = hello(kate);
        expect(greeting).to.equal('Hello, kate.');  // Passing!
    });

    it('object from src/user is not User', () => {
        const david = new User('david');
        const greeting = hello(david);
        expect(greeting).to.equal('david are not User.'); // Passing!
    });
});
