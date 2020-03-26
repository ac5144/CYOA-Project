var express = require('express'),
    bodyParser = require('body-parser')

var db = require('./models');

var app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/', (req, res) => {

  res.send("This is the home page");
})

app.get('/stories', (req, res) => {
    db.Story.find()
        .then(stories => {
            res.json(stories);
        })
        .catch(err => {
            console.log(stories);
        })
})

app.post('/stories', (req, res) => {
    db.Story.create(req.body)
        .then(newStory => {
            res.status(201).json(newStory);
        })
        .catch(err => {
            console.log(err);
        })
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
