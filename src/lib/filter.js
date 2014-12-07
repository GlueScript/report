/**
 * data is either a single json object or an array of them
 */
exports.report = function(data, callback) {

    var items = [];

    // ensure that input is an array, if not treat it as a single element array
    if (!data instanceof Array) {
        data = [data];
    }

};
