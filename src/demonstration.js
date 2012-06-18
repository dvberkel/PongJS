(function(Pong, Raphael, $, undefined){
    $(function(){
	var paper = Raphael("canvas", 640, 480, function(){
	    var background = this.rect(0, 0, this.width, this.height);
	    background.attr("fill", "white");
	});
    });
})(Pong, Raphael, jQuery);