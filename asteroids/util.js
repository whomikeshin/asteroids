(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function(length) {
    return [length * Math.random(), length * Math.random()];
  };
})();
