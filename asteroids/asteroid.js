(function () {
  window.Asteroids = window.Asteroids || {};

  Asteroids.COLOR = "#101010";
  Asteroids.RADIUS = 20;

  var Asteroid = Asteroids.Asteroid = function (arg) {
    Asteroids.MovingObject.call(this, {
      pos: arg.pos,
      color: Asteroids.COLOR,
      radius: Asteroids.RADIUS,
      vel: Asteroids.Util.randomVec(5)
    });
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
