var expect = require('Chai').expect;
var request = require('request');
var server = require('../app.js');
var express;

describe('getting token from callback', function () {
  before(function () {
    express = server.listen(8000);
  });

  it('should give me json of my token', function (done) {
    var options = {
      //This is Google's callback url
      url: 'http://localhost:8000/authenticate/callback?code=1234567',
    };
    request.get(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      //make sure were printing out the accessToken
      expect(JSON.parse(res.body).accessToken).to.equal('1234567');
      done();
    });
  });
  after(function () {
     express.close();
   });
});
