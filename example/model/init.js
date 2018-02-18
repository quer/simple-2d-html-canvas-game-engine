var Init = function (game, mainCallback) {
	this.game = game;
	this.loadImage = function (image, callback) {
		var base_image = new Image();
		base_image.src = 'asset/'+image;

		base_image.onload = function(){
		    callback(base_image);
  		}
  		//TODO: add error main callback return
	}
	this.loadImage("background.png", function (image) {
		this.game.asset["background"] = image;
			this.loadImage("groundDirt.png", function (image) {
			this.game.asset["groundDirt"] = image;
			this.loadImage("planeBlue1.png", function (image) {
				this.game.asset["plane"] = {};
				this.game.asset["plane"]["part1"] = image;
				this.loadImage("planeBlue2.png", function (image) {
					this.game.asset["plane"]["part2"] = image;
					this.loadImage("planeBlue3.png", function (image) {
						this.game.asset["plane"]["part3"] = image;
						mainCallback(true);
					}.bind(this));
				}.bind(this));
			}.bind(this));
		}.bind(this));
	}.bind(this));
}