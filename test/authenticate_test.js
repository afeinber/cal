var expect = require('Chai').expect;
var request = require('request');
var server = require('../app.js');
var express;

describe('user authentication with OAuth', function () {
  before(function () {
    express = server.listen(8000);
  });

  it('should return take me to google', function (done) {
    var options = {
      url: 'http://localhost:8000/authenticate',
      headers: {
        'Content-Type': 'text/html'
      }
    };
    request.get(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      //make sure we're requesting the google service.
      expect(res.request.uri.host).to.equal('accounts.google.com');
      done();
    });
  });
  after(function () {
     express.close();
   });
});
