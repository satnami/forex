module.exports = {
    run: function(args){
        var amounts = args;
        var max = Math.max.apply(null, amounts);

        if(max === 0) return "No cashback";

        var above_50 = [];
        var above_20 = [];
        var above_10 = [];
        amounts.forEach(function (amount) {
            if(amount >= 50)
                above_50.push(amount);
            if(amount >= 20)
                above_20.push(amount);
            if(amount >= 10)
                above_10.push(amount);
        });

        if(above_50.length === amounts.length)
            return "Award cashback: " + (max*0.2).toFixed(2);
        else if(above_20.length === amounts.length)
            return "Award cashback: " + (max*0.15).toFixed(2);
        else if(above_10.length === amounts.length)
            return "Award cashback: " + (max*0.1).toFixed(2);
        else
            return "Award cashback: " + (max*0.05).toFixed(2);
    }
};