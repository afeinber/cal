var controllers = {};
var google = require('./services/google');

controllers.calendarListController = function(req, res) {
  google.getCalendarList(req.query.accessToken, function(err, body) {
    if(err) {
      res.json(err);
    }
    res.json(body);
  });
};

controllers.accessTokenController = function(req, res) {
  google.getAccessToken(req.query.code, function(err, accessToken) {
    if(err){
      res.json(err);
    }
    res.json({accessToken: accessToken});
  });
};

controllers.authenticationController = function(req, res) {
  res.redirect(google.authenticationPath);
};

module.exports = controllers;
