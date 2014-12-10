var app = require('express')(),
    winston = require('winston'),
    bodyParser = require('body-parser'),
    filter = require('./lib/filter');

/*
* Get winston to log uncaught exceptions and to not exit
*/
var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      handleExceptions: true
    })
  ],
  exitOnError: false
});

app.use(bodyParser.json({limit: '1024kb'}));

app.get('/', function (req, res) {
    res.json({description : "Generate tabular reports from arrays of json objects"});
});

// expects a json array in req.body
app.post('/', function(req, res) {
    // use Accept header to control output format
    console.log(req.body);
    filter.report(req.body, function(data) {
        // take data from report function and format it into csv, html table, md table, etc
        res.json(data);
    });
});

var PORT = process.env.PORT || 80;
app.listen(PORT);
logger.log('Running on http://localhost:' + PORT);
