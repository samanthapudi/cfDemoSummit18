/* Load NodeJS Modules */
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('public'));

/* Load Local Modules */
var sl = require('./modules/serviceLayer');
var slOptions = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
}
var output = {};

if (!process.env.APIHUB) {
  sl.Connect(function (error, resp) {
    if (error) {
      console.error("Can't Connect to Service Layer");
      console.error(error);
      return; // Abort Execution
    } else {
      slOptions.headers["Cookie"] = resp.cookie;
    }
  });
} else {
  slOptions.headers["demoDB"] = process.env.B1_COMP_ENV
  slOptions.headers["APIKey"] = process.env.APIKey
}

app.get('/GetItems', function (req, res) { 
  sl.GetItems(slOptions, function (error, resp) {
    if (error) {
      console.error("Can't get Items from Service Layer - " + error);
      res.send(error);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(resp);
    }
  });
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

var port = process.env.PORT || 8080
app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});