var express = require('express');
var router = express.Router();

function Person(body) {
  this.name = body.name;
  this.pets = body.pets;
  this.apples = 12;
}

Person.prototype.greet = function() {
  this.greeting = this.name = 'Hi ' + this.name + ', how are you?';
  return this.greeting;
};

Person.prototype.howManyApples = function(first_argument) {
  return this.name + ' has ' + apples + ' apples';
};

Person.prototype.greetPet = function(pet) {
  return 'Hi ' + pet + ', YOU\'RE JUST SO FLUFFY! :O ';
};

Person.prototype.greetPets = function(first_argument) {
  this.petGreeting = [];
  if (typeof this.pets === 'array') {
    pets.forEach(function(pet) {
      this.petGreeting.push(this.greetPet(pet));
    });
  } else {
    this.petGreeting.push(this.greetPet(pet));
  }
  return = this.petGreeting.join();
};

router.post('/', function(req, res, next) {
  var _person = new Person(req.body);
  res.json({
  	greeting: _person.greet(),
    apples: _person.howManyApples(),
    greetPets: _person.greetPets()
  });
});

module.exports = router;
