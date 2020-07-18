var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://mongo:27017/cyoa-api', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = Promise;

var seed = require('./seed');
seed.seedDB();

module.exports.Story = require('./story');
