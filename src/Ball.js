(function(Backbone, undefined){
    var nextPosition = function(position, velocity) {
	return {
	    x : (position.x + velocity.vx),
	    y : (position.y + velocity.vy)
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
	}
    });

    window.Ball = Ball;
})(Backbone);