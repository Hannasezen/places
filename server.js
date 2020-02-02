const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.post('/my-request', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.put('/my-request', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});


