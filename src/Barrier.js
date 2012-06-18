(function(Pong, Backbone, undefined){
    var Wall = Backbone.Model.extend({
	defaults : { x : 0 },

	observe : function(aBall){
	    aBall.bind("change:position", function(ball){
		if (this.isHitBy(ball)) {
		    ball.reflectVx();
		}
	    }, this);
	},

	isHitBy : function(aBall) {
	    return (aBall.isHeadingRight() && this.isHitFromLeftBy(aBall)) || (aBall.isHeadingLeft() && this.isHitFromRightBy(aBall));
	},

	isHitFromLeftBy : function(aBall) {
	    return aBall.get("position").x >= this.get("x");
	},

	isHitFromRightBy : function(aBall) {
	    return aBall.get("position").x <= this.get("x");
	}
    });

    Pong.Wall = Wall;
})(Pong, Backbone);