module.exports = {
    run: function (args) {
        var domain = args[0];
        if (!/^(?:f|ht)tps?\:\/\//.test(domain)) {
            domain = "https://" + domain;
        }
        return "Visit " + domain + " to start earning cashback!";
    }
};