var can = document.getElementById('game');
var	ctx = can.getContext('2d');

var Game = function (can, ctx) {
	this.engine = new Engine(can, ctx);
	this.started = true;
	this.asset = {};
	this.ctx = ctx;
	this.can = can;
	this.player = new Player(this);
	this.background = new Background(this);
	this.isInited = false;
	this.debug = true;

	this.render = function () {
        if(this.isInited){
			this.background.render();
			this.player.render();
		}
	}
	this.update = function (delta) {
		this.background.update(delta);
		this.player.update(delta);
	}
	this.init = function () {
		this.engine.init(this);
		new Init(this, function (status) {
			if(status){
				this.background.init();
				this.player.init();
				this.isInited = true;
				this.engine.start();
			}
		}.bind(this));
	}
	this.gameOver = function () {
		this.engine.stop();
	}
}
var game = new Game(can, ctx);
game.init();

window.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:  
            game.player.move.left = true;
            break;
        case 39:
            game.player.move.right = true;
            break;
        case 38:  
            game.player.move.up = true;
            break;
        case 40:
            game.player.move.down = true;
            break;
    }
}, false);
window.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
        case 37:  
            game.player.move.left = false;
            break;
        case 39:
            game.player.move.right = false;
            break;
        case 38:  
            game.player.move.up = false;
            break;
        case 40:
            game.player.move.down = false;
            break;
    }
}, false);