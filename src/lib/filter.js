/**
 * input is either a single json object or an array of them
 */
exports.report = function(input, callback) {

    var output = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!(input instanceof Array)) {
        input = [input];
    }

    // use the first item in input as the table headers
    // test that it is an Object, then use keys()
    var first = input[0];
    output.push(Object.keys(first));

    for(var item in input) {
        var temp = [];
        for(var cell in input[item]){
            temp.push(input[item][cell]);
        }
        output.push(temp);
    }
    callback(output);
};
