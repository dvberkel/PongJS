(function(Pong, Raphael, $, undefined){
    var requestAnimFrame = (function(){
	return  window.requestAnimationFrame   || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    
    $(function(){
	var paper = Raphael("canvas", 640, 480);
	paper.rect(0, 0, paper.width, paper.height).attr("fill", "white");
	
	var ball = new Pong.Ball({ position : { x : 50, y : 50 }});
	new Pong.BallView({ model: ball, paper : paper });

	(function loop(){
	    requestAnimFrame(loop);
	    ball.update();
	})();
    });
})(Pong, Raphael, jQuery);