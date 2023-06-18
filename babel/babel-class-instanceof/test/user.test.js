const { expect } = require('chai'); 
const BeforeUser = require('../src/user');
const AfterUser = require('../index').User;

describe('User test', () => {
    it('User object from src/user.js is instanceof src/user.js', () => {
        const meg = new BeforeUser('meg');
        expect(meg instanceof BeforeUser).to.be.true; // Passing!
    });

    it('User object from index.js(dist/user.js) is instanceof index.js(dist/user.js)', () => {
        const yui = new AfterUser('yui');
        expect(yui instanceof AfterUser).to.be.true; // Passing!
    });

    it('User object from src/user.js is not instanceof index.js(dist/user.js)', () => {
        const rebecca = new BeforeUser('rebecca');
        expect(rebecca instanceof AfterUser).to.be.false; // Passing!
    });

    it('User object from index.js(dist/user.js) is not instanceof src/user.js', () => {
        const jonah = new AfterUser('jonah');
        expect(jonah instanceof BeforeUser).to.be.false; // Passing!
    });
});
