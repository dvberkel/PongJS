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
	
	var ball = new Pong.Ball({ position : { x : 50, y : 50 }, velocity : { vx : 3, vy : 4 } });
	new Pong.BallView({ model: ball, paper : paper });

	new Pong.Wall({ x : 0 }).observe(ball);
	new Pong.Wall({ x : 640 }).observe(ball);
	var CeilingUp = new Pong.Ceiling({ y : 0 }).observe(ball);
	var CeilingDown = new Pong.Ceiling({ y : 479 }).observe(ball);

	new Pong.CeilingView({ model: CeilingUp, paper : paper });
	new Pong.CeilingView({ model: CeilingDown, paper : paper });

	(function loop(){
	    requestAnimFrame(loop);
	    ball.update();
	})();
    });
})(Pong, Raphael, jQuery);
