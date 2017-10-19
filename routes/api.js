var express = require('express');
var router = express.Router();
var messageCtrl = require('../controllers/api/messages');

/* GET users listing. */
router.get('/', messageCtrl.getAllMessages);
router.post('/sendMessage', messageCtrl.createMessage);

module.exports = router;