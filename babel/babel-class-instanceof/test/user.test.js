const { expect } = require('chai'); 
const User = require('../src/user');
const IndexUser = require('../index').User;

describe('User test', () => {
    it('object from src/user is instanceof src/user', () => {
        const meg = new User('meg');
        expect(meg instanceof User).to.be.true; // Passing!
    });

    it('object from index is instanceof index', () => {
        const yui = new IndexUser('yui');
        expect(yui instanceof IndexUser).to.be.true; // Passing!
    });

    it('object from src/user is not instanceof index', () => {
        const rebecca = new User('rebecca');
        expect(rebecca instanceof IndexUser).to.be.false; // Passing!
    });

    it('object from index is not instanceof src/user', () => {
        const jonah = new IndexUser('jonah');
        expect(jonah instanceof User).to.be.false; // Passing!
    });
});
