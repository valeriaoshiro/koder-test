var express = require('express');
var router = express.Router();
var messageCtrl = require('./../controllers/messages');

router.get('/', messageCtrl.index);
router.get('/new', messageCtrl.new);

module.exports = router;