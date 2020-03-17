var express = require('express'),
    bodyParser = require('body-parser')

var db = require('./db');

var app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

let database = new db();
database.seedData();

app.get('/', (req, res) => {

  res.send("This is the home page")
})

app.get('/stories', (req, res) => {

  res.send(database.getStories());
})

app.post('/stories', (req, res) => {

    database.addNewStory(req.body);
})

app.put('/stories/:storyId', (req, res) => {

  res.send("This is the put route");
})

app.delete('/stories/:storyId', (req, res) => {

  res.send("This is the delete route");
})

app.listen(port, () => {

  console.log("Listening on port: " + port);
})
