Function.prototype.inherits = function (parentClass) {
  var Surrogate = function () {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
};

var Animal = function (name) {
  this.name = name;
};

var Cat = function (color, name) {
  this.color = color;
  Animal.call(this, name);
};

Cat.inherits(Animal);

var sennacy = new Cat("blue");
var animal = new Animal("Bob");
