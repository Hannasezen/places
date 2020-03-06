const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// const fileName = './data/places.json';
// const places = JSON.parse(fs.readFileSync(fileName));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../sources/dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../sources/index.html'))
});

app.get('/places', function (req, res) {
  res.send(places);
});

app.post('/place', function (req, res) {
  const place = createPlace(req.body);
  places.push(place);
  res.send(JSON.stringify(places));
});


app.put('/place', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.delete('/place/:id', function (req, res) {
  const id = req.params.id;
  const index = places.findIndex(place => place.id === id);
  if (index !== -1) {
    places.splice(index, 1);
  }
  res.send(JSON.stringify(places));
});

const defaultPlace = {
  title: '',
  description: '',
  openhours: {
    start: '09:00',
    end: '18:00'
  },
  coordinates: {
    ltd: '',
    lgt: '',
  },
  keywords: [
    "place"
  ],
  marker: {
    color: 'red'
  }
}

function createPlace(data) {
  const id = new Date().getTime();
  const letter = data.title[0].toUpperCase();
  const color = 'yellow';

  data.id = id;
  data.marker = {
    letter,
    color
  }
  return Object.assign({}, defaultPlace, data);
}

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
