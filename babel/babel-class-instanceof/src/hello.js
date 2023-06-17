const User = require('../index').User;

module.exports = function (user) {
    if (user instanceof User) {
        return `Hello, ${user.name}.`;
    } else {
        return `${user.name} are not User.`;
    }
}
