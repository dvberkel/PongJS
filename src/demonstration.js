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
	new Pong.BallView({ model : ball, paper : paper });

	var leftWall  = new Pong.Wall({ x : 2 }).observe(ball);
	var rightWall = new Pong.Wall({ x : 637 }).observe(ball);
        new Pong.WallView({ model : leftWall, paper : paper});
        new Pong.WallView({ model : rightWall, paper : paper});
	
	var upCeiling = new Pong.Ceiling({ y : 0 }).observe(ball);
	var downCeiling = new Pong.Ceiling({ y : 479 }).observe(ball);
	new Pong.CeilingView({ model: upCeiling, paper : paper });
	new Pong.CeilingView({ model: downCeiling, paper : paper });
	
	(function loop(){
	    requestAnimFrame(loop);
	    ball.update();
	})();
    });
})(Pong, Raphael, jQuery);
