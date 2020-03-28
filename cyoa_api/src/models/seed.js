var mongoose = require('mongoose');
var Story = require('./story');

exports.seedDB = function() {

    let models = mongoose.modelNames();

    for (let model of models) {
        mongoose.model(model).deleteMany({}, function(err) {});
    }

    Story.create({
        title: 'My Adventures in Morioh',
        author: 'Koichi Hirose',
        rootSection: {
            title: 'Chapter 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis blandit est mollis suscipit. Sed vitae orci varius, luctus justo et, dignissim nulla. Curabitur sit amet nulla id ligula volutpat varius sit amet quis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam posuere, neque sed feugiat vulputate, leo sapien egestas tellus, eget malesuada sem nibh a nisl. Vivamus dictum posuere dui, ac elementum leo iaculis in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at libero eu risus dapibus vestibulum. Nulla dapibus lectus vitae dui mollis eleifend. Donec bibendum ipsum turpis, nec consequat est tincidunt mollis. Phasellus a mauris luctus, gravida mi et, rutrum mi. Aenean eu velit nibh. Donec eget accumsan mi. Pellentesque felis nunc, feugiat eu semper ac, consectetur cursus elit.'
        }
    });

    Story.create({
        title: 'A Hands-on Appreciation of the Mona Lisa',
        author: 'Yoshikage Kira',
        rootSection: {
            title: 'Chapter 1',
            content: 'Suspendisse potenti. Vivamus nec placerat nunc. Etiam scelerisque purus nec suscipit vehicula. Sed ultrices convallis euismod. Vestibulum tristique justo a efficitur tristique. Nam pellentesque eros nibh, eu ullamcorper enim ullamcorper ut. Vestibulum feugiat odio vel libero placerat, non pellentesque augue posuere. In hac habitasse platea dictumst. Nam hendrerit enim ut leo sodales pellentesque ut sed urna. Pellentesque vitae sodales ipsum. Cras ut mattis augue. Nullam id tellus a quam consectetur pellentesque vulputate eget orci. Duis quis molestie lorem. Sed ac elit laoreet purus pellentesque lacinia vel eget sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean rhoncus dui ut metus iaculis, sit amet tempor nibh molestie.'
        }
    })
}
