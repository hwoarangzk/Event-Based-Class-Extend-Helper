// Generated by CoffeeScript 1.7.1
(function() {
  var Animal, Class, cat, dog, i;

  Class = require('./class');

  i = 0;

  Animal = Class.extend({
    initialize: function() {
      return console.log("animal " + (i++) + " has been created");
    },
    eat: function(food) {
      return console.log("i'm eating " + food);
    }
  });

  dog = new Animal();

  cat = new Animal();

  dog.on('eat', dog.eat);

  cat.on('sleep', function(hours) {
    return console.log("i've been sleeping for " + hours + " hours");
  });

  dog.trigger('eat', 'bones');

  cat.trigger('sleep', 3);

}).call(this);
