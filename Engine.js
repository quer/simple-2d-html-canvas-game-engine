var Engine = function (can, ctx) {
	this.asset = {};
	this.ctx = ctx;
	this.can = can;
	this.fps = 1000 / 30;
	this.delta = 0;
	this.debug = false;
	this.BaseGame = null;
	this.error = null;
	this.loopNr = null;

	this.render = function () {
		if(this.BaseGame != null){
			var start = Date.now();
	        this.ctx.fillStyle="black";
			this.ctx.save();
	        this.ctx.translate(0, 0);
	        this.ctx.clearRect(0, 0, this.can.width, this.can.height);
	        
	        this.BaseGame.render();

			this.ctx.restore();

	        var end = Date.now();
	        this.ctx.font = '16px sans-serif'
	        this.ctx.textAlign = 'center';
	        this.ctx.fillText('Rendered in ' + (end - start) + ' ms', this.can.width / 2, this.can.height - 20);
		}else{
			this.ctx.font = '25px sans-serif'
	        this.ctx.textAlign = 'center';
	        this.ctx.fillText('BaseGame not placed in init', this.can.width / 2, this.can.height / 2);
		}
	}
	this.update = function (delta) {
		this.BaseGame.update(delta);
	}
	this.init = function (baseGame) {
		if(typeof baseGame.render !== 'function' && typeof baseGame.update !== 'function'){
			console.log("the baseGame, do not have render or update function");
		}else{
			this.BaseGame = BaseGame;
		}
	}
	this.stop = function () {
		if(this.loopNr != null){
			clearInterval(this.loopNr);
			this.loopNr = null;
		}else{
			console.error("no loop running");
		}
	}
	this.start = function () {
		if(this.loopNr == null){
			this.loopNr = setInterval( this.loop.bind(this), this.fps);
		}else{
			console.error("loop allready running");
		}
	}
	this.loop = function () {
		++this.delta;
		this.update(this.delta);
		this.render();
	}
}