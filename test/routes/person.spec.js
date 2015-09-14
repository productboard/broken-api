var request = require('supertest');

describe('The "person" endpoint', function () {

  var server;

  before(function () {
    server = require('../../app.js');
  });

  it('should greet the person and have person be the only required property', function testSlash(done) {
    request(server)
      .post('/person')
        .send({
          name: 'Anne'
        })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.greeting !== 'Hi Anne, how are you?') throw new Error('Anne was not greeted properly :(');
      })
      .end(done);
  });

  it('should tell the person how many Apples they have', function testSlash(done) {
    request(server)
      .post('/person')
        .send({
          name: 'Anne',
          pets: 'Buster'
        })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.apples !== 'Anne has 12 apples') throw new Error('Anne doesnt have the right amount of apples!');
      })
      .end(done);
  });

  it('should greet the persons pet', function testSlash(done) {
    request(server)
      .post('/person')
        .send({
          name: 'Anne',
          pets: 'Buster'
        })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.greetPets !== 'Hi Buster, YOU\'RE JUST SO FLUFFY! :O ') throw new Error('Buster wasnt greeted properly :(');
      })
      .end(done);
  });

  it('should greet all the persons pets', function testSlash(done) {
    request(server)
      .post('/person')
        .send({
          name: 'Anne',
          pets: ['Buster', 'Rocco']
        })
      .expect('Content-Type', /json/)
      .expect(function (res) {
        if (res.body.greetPets !== 'Hi Buster, YOU\'RE JUST SO FLUFFY! :O Hi Rocco, YOU\'RE JUST SO FLUFFY! :O') throw new Error('Buster wasnt greeted properly :(');
      })
      .end(done);
  });

});