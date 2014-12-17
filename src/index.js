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

// expects a json array in req.body
app.use(bodyParser.json({limit: '1024kb'}));

app.get('/', function (req, res) {
    res.json({
        name : "Report",
        description : "Generate tabular reports from arrays of json objects"
    });
});

app.post('/', function(req, res) {
    // use Accept header to control output format
    console.log(req.body);
    var accept = req.headers['accept'];
    filter.report(req.body, function(data) {
        res.json(data);
    });
});

var PORT = process.env.PORT || 80;
app.listen(PORT);
logger.log('info', 'Running report service on http://localhost:' + PORT);
