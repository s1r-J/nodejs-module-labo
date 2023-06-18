const User = require('../index').User;

module.exports = function (user) {
    if (user instanceof User) {
        return `Hello, ${user.name}.`;
    } else {
        return `You are not User.`;
    }
}
