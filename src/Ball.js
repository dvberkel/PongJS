(function(Backbone, undefined){
    var Ball = Backbone.Model.extend({
	defaults : {
	    position : { x : 0, y : 0}
	}
    });

    window.Ball = Ball;
})(Backbone);