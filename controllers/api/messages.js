var Message = require('../../models/message');

function createMessage(req, res){
    var message = new Message(req.body);
    message.save((err, message) => {
        if (err) return res.status(400).json(err.message);
        res.status(201).json(message._id);
    });

}


module.exports = {
    createMessage
};