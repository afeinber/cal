var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/authenticate', function(req, res) {
  res.redirect('https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=82236190716-3n5r3ib6stm451fsarvc2ds7ealklpkg.apps.googleusercontent.com&redirect_uri=http://localhost:3000/authenticate/callback&scope=https://www.googleapis.com/auth/calendar.readonly&access_type=online');
});

router.get('/authenticate/callback', function(req, res) {
  //console.log(req.query.code);
  res.json({ accessToken: req.query.code });
});

module.exports = router;
