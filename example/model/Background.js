var Background = function (game) {
	this.ctx = game.ctx;
	this.game = game;
	this.backgroundImage = null;
	this.groundDirtImage = null;
	this.init = function () {
		this.image = this.game.asset.background;
		this.groundDirtImage = this.game.asset.groundDirt;
	}

	this.render = function () {
		this.ctx.drawImage(this.image, 0, 0);
		this.ctx.drawImage(this.groundDirtImage, 0, this.game.can.height - this.groundDirtImage.height);
	}

	this.update = function (delta) {

	}
}