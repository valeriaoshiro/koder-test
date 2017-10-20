var mongoose = require('mongoose');
 mongoose.Promise = Promise;

 mongoose.connect('mongodb://koderAdmin:Koder123@ds036079.mlab.com:36079/koder');

 var db = mongoose.connection;
 
 db.once('open', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });
 
 db.on('error', function(err) {
 	console.error(`Database error:\n${err}`);
 });