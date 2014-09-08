// NOTE: this test must be run by itself because the proxyquire library is
// quirky like that.
var proxyquire = require('proxyquire');
//This is the fake data we will be returning
var calendarList = {"kind":"calendar#calendarList","etag":"\"1410060765522000\"","nextSyncToken":"00001410060765522000","items":[{"kind":"calendar#calendarListEntry","etag":"\"1389896869339000\"","id":"alexandernfeinberg@gmail.com","summary":"alexandernfeinberg@gmail.com","timeZone":"America/Los_Angeles","colorId":"9","backgroundColor":"#7bd148","foregroundColor":"#000000","selected":true,"accessRole":"owner","defaultReminders":[{"method":"popup","minutes":30},{"method":"email","minutes":30}],"notificationSettings":{"notifications":[{"type":"eventCreation","method":"email"},{"type":"eventChange","method":"email"},{"type":"eventCancellation","method":"email"},{"type":"eventResponse","method":"email"}]},"primary":true},{"kind":"calendar#calendarListEntry","etag":"\"0\"","id":"#contacts@group.v.calendar.google.com","summary":"Contacts' birthdays and events","description":"Your contacts' birthdays and anniversaries","timeZone":"America/Los_Angeles","colorId":"12","backgroundColor":"#fad165","foregroundColor":"#000000","selected":true,"accessRole":"reader"},{"kind":"calendar#calendarListEntry","etag":"\"0\"","id":"en.usa#holiday@group.v.calendar.google.com","summary":"Holidays in United States","description":"Holidays and Observances in United States","timeZone":"America/Los_Angeles","colorId":"17","backgroundColor":"#9a9cff","foregroundColor":"#000000","selected":true,"accessRole":"reader"}]};
var expect = require('Chai').expect;
var Q = require('q');
var request = Q.denodeify(require('request'));
var serializers = require('../lib/services/serializers');
//stub the request.get method in google.
var google = proxyquire('../lib/services/google', {
  'request': {
    get: function(opts, callback) {
      //make the async call
      setTimeout( function() {callback(null, {}, JSON.stringify(calendarList)); }, 10);
    }
  }
});
var server = require('../app.js');
var express;


describe('getting calendar list', function () {
  before(function () {
    express = server.listen(8000);
  });

  it('should give me json of my calendar list', function (done) {
    var accessToken = 'abc';

    request('http://localhost:8000/calendars?accessToken=' + accessToken, function(err, response, body) {
      //can only compare strings, not objects
      //if you find an error here make sure you're running the test by itself
      expect(response.body).to.equal(JSON.stringify(serializers.formatEventList(JSON.stringify(calendarList))));
    });
    done();
  });

  after(function () {
     express.close();
   });
});
