var config = require('./../config/index');

module.exports = {
    run: function (args) {
        var domain = args[0];
        return "Award bonus: " + config.bonus[domain.split('.').pop()];
    }
};