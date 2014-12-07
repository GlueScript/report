var filter = require('../src/lib/filter'),
    assert = require('assert');

describe('Report', function() {
    describe('report', function() {
        it('should respond with an array', function(){
            var value = [
                {a: '111', b: '222'}
            ];
            filter.report(value, function(result) {
                assert.equal(2, result.length);
            });
        });
    });
});
