(function () {
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
  };

  Game.NUM_ASTEROIDS = 10;
  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({pos: Asteroids.Util.randomVec(1000)}));
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.start = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.addAsteroids();
    this.draw(ctx);

    // var animateCallback = function() {
      // this.draw(ctx);
    // movingObj.draw(ctx);
    // }.bind(this);
    //
    // animateCallback();
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };


})();
