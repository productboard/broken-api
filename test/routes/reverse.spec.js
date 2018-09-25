var request = require('supertest');

var fixtures = require('../fixtures/strings');

describe('The "reverse" endpoint', function () {

  var server;

  before(function () {
    server = require('../../app.js');
  });

  it('should reverse simple strings', function testSlash(done) {
    request(server)
      .get('/reverse?str=foo')
      .expect('Content-Type', /json/)
      .expect(200, {
        reversed: 'oof'
      }, done);
  });

  it('should reverse very long strings strings', function testSlash(done) {
    request(server)
      .get('/reverse?str=' + fixtures.longString.normal)
      .expect('Content-Type', /json/)
      .expect(200, {
        reversed: fixtures.longString.reversed
      }, done);
  });

  it('should reverse strings containing two-byte UTF-16 characters', function testSlash(done) {
    request(server)
      .get('/reverse')
      .query({ str: 'Lorem ipsum 𝌆 dolor sit ameͨ͆t.' })
      .expect('Content-Type', /json/)
      .expect(200, {
        reversed: '.teͨ͆ma tis rolod 𝌆 muspi meroL'
      }, done);
  });

  it('should return a reversed integer if one is provided as input', function testSlash(done) {
    request(server)
      .get('/reverse?str=309834')
      .expect('Content-Type', /json/)
      .expect(200, {
        reversed: 438903
      }, done);
  });

  it('should return a reversed float if one is provided as input', function testSlash(done) {
    request(server)
      .get('/reverse?str=34.09')
      .expect('Content-Type', /json/)
      .expect(200, {
        reversed: 90.43
      }, done);
  });

});
