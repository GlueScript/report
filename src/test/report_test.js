var filter = require('../lib/filter'),
    assert = require('assert');

describe('Report', function() {
    describe('report', function() {
        it('should respond with an array', function(){
            var value = [];
            // use mockman to assert result of report function
            var callback = function(result) {console.log(result);};
            filter.report(value, callback);
        });
    });
});
