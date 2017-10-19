var Message = require('../models/message');

module.exports = {
    index: index,
    new: newMovie,
    create: create
};

function index(req, res){
    Message.find({}, function(err, messages){
        res.render('messages/index', {messages: messages});
    });
}

function newMovie(req, res){
    res.render('messages/new', {messages: {}});
}

function create(req, res) {
    var message = new Message(req.body);
    message.save(function(err) {
        // one way to handle errors
        if (err) return res.render('messages/new');
        console.log(message);
    // for now, redirect right back to new.ejs
    res.redirect('/');
    });
}