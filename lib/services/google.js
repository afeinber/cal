var Q = require('q');
var request = require('request');
var google = {};

//Gets the calendar list from google
google.getCalendarList = function(accessToken, callback) {
  request.get('https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=' + accessToken,
    function(err, res, body) {
      //pass back the data we get, formatted first
      callback(null, google.formatCalendarList(body));
  });
};

//Once we have a code from google we send a post to get the access token we can
//use to get the access token.
google.getAccessToken = function(code, callback) {
  Q.denodeify(request)(
    {
      uri: 'https://accounts.google.com/o/oauth2/token',
      method: 'POST',
      form: {
        code: code,
        client_id: '82236190716-3n5r3ib6stm451fsarvc2ds7ealklpkg.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        grant_type: 'authorization_code',
        redirect_uri: "http://localhost:3000/authenticate/callback",
        client_secret: '0YM73WwrOlGhjQNhrEQkHdrE'
      }
    }).then(function(res) {
      callback(null, JSON.parse(res[1]).access_token);
    }, function(errResponse) {
      callback({error: "something bad happened"});
    });
};

//Format the response properly
google.formatCalendarList = function(calendarList) {
  var formatted = {items: []};
  calendarList = JSON.parse(calendarList);

  calendarList.items.forEach(function(cal) {
    var formattedCal = {};
    formattedCal.id = cal.id;
    formattedCal.title = cal.summary;
    formattedCal.color = cal.backgroundColor.replace('#', '');
    formattedCal.writeable = cal.accessRole === "owner";
    formattedCal.selected = cal.selected;
    formattedCal.timezone = cal.timeZone;
    formatted.items.push(formattedCal);
  });

  return formatted;
};

google.authenticationPath = 'https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=82236190716-3n5r3ib6stm451fsarvc2ds7ealklpkg.apps.googleusercontent.com&redirect_uri=http://localhost:3000/authenticate/callback&scope=https://www.googleapis.com/auth/calendar.readonly&access_type=online';
module.exports = google;
