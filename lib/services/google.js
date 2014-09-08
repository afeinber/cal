var Q = require('q');
var request = require('request');
var google = {};
var serializers = require('./serializers');

//Gets the calendar list from google
google.getCalendarList = function(accessToken, callback) {
  request.get('https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=' + accessToken,
    function(err, res, body) {
      if(err) {
        callback({error: err});
      }
      callback(null, serializers.formatCalendarList(body));
  });
};

//Once we have a code from google we send a post to get the access token we can
//use to get the access token.
google.getAccessToken = function(code, callback) {
  //Use Q so we can work with promises, which I like better.
  Q.denodeify(request)(
    {
      //once google sends the user back to our site, they come here,
      //now to get the access token we need to make a post
      uri: 'https://accounts.google.com/o/oauth2/token',
      method: 'POST',
      form: {
        code: code,
        client_id: process.env.GOOGLE_API_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        grant_type: 'authorization_code',
        redirect_uri: process.env.GOOGLE_API_CALLBACK_URL,
        client_secret: process.env.GOOGLE_API_SECRET
      }
    }).then(function(res) {
      //google sends response with the access token we need.
      callback(null, JSON.parse(res[1]).access_token);
    }, function(errResponse) {
      callback({error: "something bad happened"});
    });
};

//Get the event list from Google
google.getEvents = function(calID, accessToken, callback) {
  var options = {
    url:'https://www.googleapis.com/calendar/v3/calendars/' + calID + '/events?key=' + process.env.GOOGLE_API_KEY,
    headers: {
      //need to set the authorization header to the token we got from Google when we authenticated
      //with OAtuh
      Authorization: "Bearer " + accessToken
    }
  };
  request.get(options, function(err, res, body) {
    if(err) {
      callback({error: err});
    }
    callback(null, serializers.formatEventList(body));
  });
};

//Where we want to redirect to for authentication
google.authenticationPath = 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=' + process.env.GOOGLE_API_CLIENT_ID + '&redirect_uri=' + process.env.GOOGLE_API_CALLBACK_URL + '&scope=https://www.googleapis.com/auth/calendar.readonly&access_type=online';
module.exports = google;
