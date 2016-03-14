(function () {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function(canvasEl) {
    this.game.start(canvasEl);
    setInterval(this.run.bind(this), 20);
  };

  GameView.prototype.run = function() {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  };

})();
