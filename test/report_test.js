var filter = require('../src/lib/filter'),
    assert = require('assert');

describe('Report', function() {
    describe('report', function() {
        it('should respond with an array', function() {
            var value = [
                {a: '111', b: '222'}
            ];
            filter.report(value, function(result) {
                assert.equal(value.length + 1, result.length);
                assert.equal('a', result[0][0]);
                assert.equal('b', result[0][1]);
                assert.equal('111', result[1][0]);
                assert.equal('222', result[1][1]);
            });
        });

        it('should respond with an array for object input', function() {
            var value = {name: 'Reggie', age: 44}; 
            filter.report(value, function(result) {
                assert.equal(2, result.length);
                assert.equal('name', result[0][0]);
                assert.equal('age', result[0][1]);
                assert.equal('Reggie', result[1][0]);
                assert.equal('44', result[1][1]);
            });
        });
    });
});
