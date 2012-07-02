(function(Pong, Backbone, undefined){
    var nextPosition = function(position, velocity) {
	return {
	    x : (position.x + velocity.vx),
	    y : (position.y + velocity.vy)
	};
    };

    var nextVelocity = function(velocity, xMultiplier, yMultiplier) {
	return {
	    vx : velocity.vx * xMultiplier,
	    vy : velocity.vy * yMultiplier,
	};
    };

    var Ball = Backbone.Model.extend({
	defaults : {
	    position : { x : 0, y : 0},
	    velocity : { vx : 1, vy : 1}
	},

	update : function(){
	    this.set({ 
		position : nextPosition(this.get("position"), this.get("velocity"))
	    });
	},

	reflectVx : function(){
	    this.set({
		velocity : nextVelocity(this.get("velocity"), -1, 1)
	    });
	},

	reflectVy : function(){
	    this.set({
		velocity : nextVelocity(this.get("velocity"), 1, -1)
	    });
	},

	isHeadingRight : function(){
	    return this.get("velocity").vx > 0;
	},

	isHeadingLeft : function(){
	    return this.get("velocity").vx < 0;
	},

	isHeadingUp : function(){
	    return this.get("velocity").vy > 0;
	},

	isHeadingDown : function(){
	    return this.get("velocity").vy < 0;
	}
    });
    
    var BallView = Backbone.View.extend({
	initialize : function(){
	    this.element = this.circle();

	    this.model.bind("change", function(){
		this.render();
	    }, this);
	},

	circle : function(){
	    var position = this.model.get("position");
	    var c = this.paper().circle(position.x, position.y, 5);
	    c.attr("fill", "red");
	    c.attr("stroke", "black");
	    return c;
	},

	paper : function() {
	    return this.options.paper;
	},

	render : function() {
	    var position = this.model.get("position");
	    this.element.attr("cx", position.x);
	    this.element.attr("cy", position.y);
	}
	
    });

    Pong.Ball = Ball;
    Pong.BallView = BallView;
})(Pong, Backbone);
