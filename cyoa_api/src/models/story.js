var mongoose = require('mongoose');
var sectionSchema = require('./sectionSchema')

var storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Your story needs a title'
    },
    author: {
        type: String
    },
    rootSection: {
        type: sectionSchema
    },
    childSections: {
        type: [sectionSchema]
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Story = mongoose.model('Story', storySchema);

module.exports = Story;
