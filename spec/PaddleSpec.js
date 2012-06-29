describe("A Paddle",function(){
    it("should have a default size and position",function(){
        var paddle = new Pong.Paddle;
        expect(paddle).toBeOfSize({width : 5,height : 80});
        expect(paddle).toBeAt({x:0,y:0})
    });

    it("should bounce balls from the left",function(){
        var ball = new Pong.Ball({position : {x:0,y:10} , velocity : {vx:1,vy:0}});
        var paddle = new Pong.Paddle({position :{x:2,y:0}})
        paddle.observe(ball);
	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : -1, vy : 0 });
    });
    
    it("should bounce balls from the right",function(){
        var ball = new Pong.Ball({position : {x:10,y:10} , velocity : {vx:-1,vy:0}});
        var paddle = new Pong.Paddle({position :{x:3,y:0}})
        paddle.observe(ball);
	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 1, vy : 0 });
    });

    it("should bounce balls from the top",function(){
        var ball = new Pong.Ball({position : {x:10,y:10} , velocity : {vx:0,vy:1}});
        var paddle = new Pong.Paddle({position :{x:7,y:12}})
        paddle.observe(ball);
	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 0, vy : -1 });
    });

    it("should bounce balls from the bottom",function(){
        var ball = new Pong.Ball({position : {x:10,y:92} , velocity : {vx:0,vy:-1}});
        var paddle = new Pong.Paddle({position :{x:7,y:10}})
        paddle.observe(ball);
	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 0, vy : 1 });
    });
});
