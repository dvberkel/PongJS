(function(Pong, Backbone, undefined){
    var Wall = Backbone.Model.extend({
	defaults : { x : 0 },

	observe : function(aBall){
	    aBall.bind("change:position", function(ball){
		var ballX = ball.get("position").x;
		var vx = ball.get("velocity").vx;
		var wallX = this.get("x");
		if ((vx > 0 && ballX >= wallX) || (vx <  0 && ballX <= wallX)) {
		    ball.reflectVx();
		}
	    }, this);
	}
    });

    Pong.Wall = Wall;
})(Pong, Backbone);