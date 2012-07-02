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
	
	var ball = new Pong.Ball({ position : { x : 50, y : 50 }, velocity : { vx : 5, vy : 3 } });
	new Pong.BallView({ model : ball, paper : paper });

	var leftWall  = new Pong.Wall({ x : 2 }).observe(ball);
	var rightWall = new Pong.Wall({ x : 637 }).observe(ball);
        new Pong.WallView({ model : leftWall, paper : paper});
        new Pong.WallView({ model : rightWall, paper : paper});
	
	var upCeiling = new Pong.Ceiling({ y : 0 }).observe(ball);
	var downCeiling = new Pong.Ceiling({ y : 479 }).observe(ball);
	new Pong.CeilingView({ model: upCeiling, paper : paper });
	new Pong.CeilingView({ model: downCeiling, paper : paper });
        
        var paddle = new Pong.Paddle({ position : {x:200,y:100}}).observe(ball);
        new Pong.PaddleView({ model : paddle, paper : paper}); 
        var horizontalPaddle= new Pong.Paddle({position: {x:450,y:370}, 
                                               size : {width : 80,height : 5}}).observe(ball);
        new Pong.PaddleView({ model : horizontalPaddle, paper : paper});
        
        const upKey = 38;
        const downKey = 40;
        function keydown(evt){
            var key = evt.keyCode;
            if (key == upKey) {
                paddle.moveUp();
            } else if( key ==downKey ) {
                paddle.moveDown();
            }
        };
        window.addEventListener("keydown",keydown);
	
	(function loop(){
	    requestAnimFrame(loop);
	    ball.update();
	})();
    });
})(Pong, Raphael, jQuery);
