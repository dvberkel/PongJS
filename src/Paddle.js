(function(Pong, Backbone, undefined){
    var Paddle = Backbone.Model.extend({
        defaults : {
            size     : {width : 5, height : 80},
            position : { x : 0, y : 0} 
        },
        
	observe : function(aBall){
	   aBall.bind("change:position", function(ball) {
	       if (this.isHitFromLeft(ball) || this.isHitFromRight(ball)){
                   ball.reflectVx();
	       } else if (this.isHitFromTop(ball) || this.isHitFromBelow(ball)) {
		   ball.reflectVy();
	       }                        
	   }, this);
	   return this ;
	},

	isHitFromLeft : function(aBall){
	    var position = aBall.get("position");
	    var velocity = aBall.get("velocity");
            var x = this.get("position").x;
            var ymin = this.get("position").y;
            var ymax = ymin + this.get("size").height;

	    if (velocity.vx <= 0 || position.x > x || position.x+velocity.vx < x) {
		return false;
	    }

	    var distance = x - position.x;
            var yAtImpact = 0 
            if (distance == 0){
              yAtImpact = position.y;
            } else {
	        var timeTillImpact = velocity.vx / distance ;
	        yAtImpact = position.y+(velocity.vy*timeTillImpact);
            }

	    return (yAtImpact <= ymax) && (yAtImpact >= ymin);
	},

	isHitFromRight : function(aBall){
	    var position = aBall.get("position");
	    var velocity = aBall.get("velocity");
            var x = this.get("position").x+this.get("size").width;
            var ymin = this.get("position").y;
            var ymax = ymin + this.get("size").height;

	    if (velocity.vx >= 0 || position.x < x || position.x+velocity.vx > x) {
		return false;
	    }

	    var distance = x - position.x;
            var yAtImpact = 0 
            if (distance == 0){
              yAtImpact = position.y;
            } else {
	        var timeTillImpact = velocity.vx / distance ;
	        yAtImpact = position.y+(velocity.vy*timeTillImpact);
            }

	    return (yAtImpact <= ymax) && (yAtImpact >= ymin);
	},
	
	isHitFromTop : function(aBall){
	    var position = aBall.get("position");
	    var velocity = aBall.get("velocity");
            var y = this.get("position").y;
            var xmin = this.get("position").x;
            var xmax = xmin + this.get("size").width;

	    if (velocity.vy <= 0 || position.y > y || position.y+velocity.vy < y) {
		return false;
	    }

	    var distance = y - position.y;
            var xAtImpact = 0 
            if (distance == 0){
              xAtImpact = position.x;
            } else {
	        var timeTillImpact = velocity.vy / distance ;
	        xAtImpact = position.x+(velocity.vx*timeTillImpact);
            }

	    return (xAtImpact <= xmax) && (xAtImpact >= xmin);
	},
	
	isHitFromBelow : function(aBall){
	    var position = aBall.get("position");
	    var velocity = aBall.get("velocity");
            var y = this.get("position").y+this.get("size").height;
            var xmin = this.get("position").x;
            var xmax = xmin + this.get("size").width;

	    if (velocity.vy >= 0 || position.y < y || position.y+velocity.vy > y) {
		return false;
	    }

	    var distance = y - position.y;
            var xAtImpact = 0 
            if (distance == 0){
              xAtImpact = position.x;
            } else {
	        var timeTillImpact = velocity.vy / distance ;
	        xAtImpact = position.x+(velocity.vx*timeTillImpact);
            }

	    return (xAtImpact <= xmax) && (xAtImpact >= xmin);
	}
    });


    var PaddleView = Backbone.View.extend({
 	initialize : function(){
	    this.element = this.paddle();

	    this.model.bind("change", function(){
		this.render();
	    }, this);
	},
	
	paddle : function(){
	    var pos = this.model.get("position");
            var size = this.model.get("size");
	    var c = this.paper().rect(pos.x, pos.y, size.width, size.height);
	    c.attr("fill", "blue");
	    c.attr("stroke", "black");
	    return c;
	},

	paper : function() {
	    return this.options.paper;
	},

	render : function() {
	    var pos = this.model.get("position");
	    this.element.attr("x", pos.x);
            this.element.attr("y", pos.y);
	}
    });

    Pong.Paddle = Paddle;
    Pong.PaddleView = PaddleView;
})(Pong, Backbone);
