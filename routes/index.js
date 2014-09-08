var express = require('express');
var request = require('request');
var controllers = require('../lib/controllers');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/authenticate', controllers.authenticationController);

router.get('/authenticate/callback', controllers.accessTokenController);

router.get('/calendars', controllers.calendarListController);

module.exports = router;
