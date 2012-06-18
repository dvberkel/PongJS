describe("A Wall", function(){
    it("should bounce back balls from the left", function(){
	var ball = new Pong.Ball({ position : { x : 0, y : 0}, velocity : { vx : 1, vy : 0 } });
	var wall = new Pong.Wall({ x : 2 });
	wall.observe(ball);

	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : -1, vy : 0 });
    });

    it("should bounce back balls from the right", function(){
	var ball = new Pong.Ball({ position : { x : 2, y : 0}, velocity : { vx : -1, vy : 0 } });
	var wall = new Pong.Wall({ x : 0 });
	wall.observe(ball);

	ball.update();
	ball.update();

	expect(ball).toHaveVelocity({ vx : 1, vy : 0 });
    });
});