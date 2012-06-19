(function(Pong, Backbone, undefined){
    var Wall = Backbone.Model.extend({
	defaults : { x : 0 },

	observe : function(aBall){
	    aBall.bind("change:position", function(ball){
		if (this.isHitBy(ball)) {
		    ball.reflectVx();
		}
	    }, this);
            return this;
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
	    var position = aBall.get("position");
	    var velocity = aBall.get("velocity");
	    return Math.abs(position.x - this.get("x")) <= Math.abs(velocity.vx);
	}
    });

    var WallView = Backbone.View.extend({
	initialize : function(){
	    this.element = this.line();

	    this.model.bind("change", function(){
		this.render();
	    }, this);
	},
        
        line : function() {
            console.log(this);
            var x = this.model.get("x");
            var l = this.paper().rect(x,0,1,480);
            l.attr("fill","black");
            l.attr("stroke","black");
            return l;
        },
        
	paper : function() {
	    return this.options.paper;
	},

	render : function() {
	    var x = this.model.get("x");
	    this.element.attr("x", x);
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
	    var position = aBall.get("position");
	    var velocity = aBall.get("velocity");
	    return Math.abs(position.y - this.get("y")) <= Math.abs(velocity.vy);
	}
	
    });

    Pong.Wall = Wall;
    Pong.WallView = WallView
    Pong.Ceiling = Ceiling;
})(Pong, Backbone);
