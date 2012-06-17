beforeEach(function() {
    this.addMatchers({
	toBeAt: function(expectedPosition) {
	    var ball = this.actual;
	    var position = ball.get("position");
	    return position.x === expectedPosition.x && position.y === expectedPosition.y;
	}
    });
});
