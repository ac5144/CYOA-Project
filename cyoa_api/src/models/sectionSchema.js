var mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This section needs a title'
    },
    content: {
        type: String,
        required: 'Please enter content for this section'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = sectionSchema;
