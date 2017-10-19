var mongoose = require('mongoose');
 // shortcut to the mongoose.Schema constructor function
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    name: String,
    message: String
});

module.exports = mongoose.model('Message', messageSchema);