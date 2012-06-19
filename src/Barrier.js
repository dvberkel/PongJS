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
	    return this.isHitFromLeftBy(aBall) || this.isHitFromRightBy(aBall);
	},

	isHitFromLeftBy : function(aBall) {
	    return aBall.isHeadingRight() && this.isInRangeOf(aBall);
	},

	isHitFromRightBy : function(aBall) {
	    return aBall.isHeadingLeft() && this.isInRangeOf(aBall);
	},

	isInRangeOf : function(aBall) {
	    return aBall.get("position").x == this.get("x");
	}
    });

    var Ceiling = Backbone.Model.extend({
	defaults : { y : 0 },

	observe : function(aBall){
	    aBall.bind("change:position", function(ball){
		if (this.isHitBy(ball)) {
		    ball.reflectVy();
		}
	    }, this);
	},

	isHitBy : function(aBall) {
	    return this.isHitFromBelowBy(aBall) || this.isHitFromAboveBy(aBall);
	},

	isHitFromBelowBy : function(aBall) {
	    return aBall.isHeadingUp() && this.isInRangeOf(aBall);
	},

	isHitFromAboveBy : function(aBall) {
	    return aBall.isHeadingDown() && this.isInRangeOf(aBall);
	},

	isInRangeOf : function(aBall) {
	    return aBall.get("position").y == this.get("y");
	}
	
    });

    Pong.Wall = Wall;
    Pong.Ceiling = Ceiling;
})(Pong, Backbone);