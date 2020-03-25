var mongoose = require('mongoose');
var Story = require('./story');

exports.seedDB = function() {

    let models = mongoose.modelNames();

    for (let model of models) {
        mongoose.model(model).deleteMany({}, function(err) {});
    }

    Story.create({
        title: 'My Adventures in Morioh',
        author: 'Koichi Hirose'
    });

    Story.create({
        title: 'A Hands-on Appreciation of the Mona Lisa',
        author: 'Yoshikage Kira'
    })
}
