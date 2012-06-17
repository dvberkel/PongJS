(function(Backbone, undefined){
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
	}
    });

    window.Ball = Ball;
})(Backbone);