var controllers = {};
var google = require('./services/google');

//get the calendar list from google.
controllers.calendarListController = function(req, res) {
  google.getCalendarList(req.query.accessToken, function(err, body) {
    if(err) {
      res.json(err);
    }
    res.json(body);
  });
};

//Get the access token from Google
controllers.accessTokenController = function(req, res) {
  google.getAccessToken(req.query.code, function(err, accessToken) {
    if(err){
      res.json(err);
    }
    res.json({accessToken: accessToken});
  });
};

//Redirect to google for authentication
controllers.authenticationController = function(req, res) {
  res.redirect(google.authenticationPath);
};

//Get the events from Google
controllers.eventController = function(req, res) {
  google.getEvents(req.params.calendarID, req.query.accessToken, function(err, body) {
    if(err){
      res.json(err);
    }
    res.json(body);
  });
};

module.exports = controllers;
